"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  alpha: number;
  life: number;
  maxLife: number;
  color: string;
}

export function CursorParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates with lerping smooth inertia
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      isMoving: false,
    };

    let moveTimeout: NodeJS.Timeout;

    const particles: Particle[] = [];
    const particleColors = [
      "rgba(168, 85, 247, ", // Primary Purple (#a855f7)
      "rgba(147, 51, 234, ", // Darker Purple (#9333ea)
      "rgba(192, 132, 252, ", // Light Lavender (#c084fc)
    ];

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isMoving = true;

      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => {
        mouse.isMoving = false;
      }, 150);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // Spawn radial purple particles around mouse position
    const spawnRadialBurst = (cx: number, cy: number) => {
      const burstCount = 3; // Lightweight per frame for smooth 60fps
      for (let i = 0; i < burstCount; i++) {
        // Random angle & distance within radial circle
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 45; // Max radius ~45px
        
        // Intensity decreases smoothly as distance increases from center
        const normalizedDist = distance / 45;
        const intensity = Math.pow(1 - normalizedDist, 1.5); // Highest at center

        const speed = 0.3 + Math.random() * 0.6;
        const maxLife = 35 + Math.random() * 25;

        particles.push({
          x: cx + Math.cos(angle) * distance,
          y: cy + Math.sin(angle) * distance,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: 1.2 + Math.random() * 1.8,
          baseAlpha: Math.min(0.45, 0.15 + intensity * 0.35), // Non-intrusive alpha
          alpha: Math.min(0.45, 0.15 + intensity * 0.35),
          life: 0,
          maxLife,
          color: particleColors[Math.floor(Math.random() * particleColors.length)],
        });
      }
    };

    const render = () => {
      // Lerp mouse coordinates for fluid motion
      mouse.x += (mouse.targetX - mouse.x) * 0.18;
      mouse.y += (mouse.targetY - mouse.y) * 0.18;

      ctx.clearRect(0, 0, width, height);

      // Draw faint center glowing radial halo behind particles
      if (mouse.isMoving || Math.abs(mouse.targetX - mouse.x) > 0.5) {
        spawnRadialBurst(mouse.x, mouse.y);

        const radialGlow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          80
        );
        radialGlow.addColorStop(0, "rgba(168, 85, 247, 0.08)");
        radialGlow.addColorStop(0.5, "rgba(147, 51, 234, 0.03)");
        radialGlow.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = radialGlow;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 80, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update & render particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;

        p.x += p.vx;
        p.y += p.vy;

        // Diminish alpha as life expires
        const lifeRatio = 1 - p.life / p.maxLife;
        p.alpha = Math.max(0, p.baseAlpha * lifeRatio);

        if (p.life >= p.maxLife || p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Cap particle queue size for zero lag
      if (particles.length > 120) {
        particles.splice(0, particles.length - 120);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[30] pointer-events-none w-full h-full mix-blend-screen"
      style={{ opacity: 0.95 }}
    />
  );
}
