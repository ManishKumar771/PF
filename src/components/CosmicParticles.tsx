import React, { useRef, useEffect } from 'react';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
    life: number;
    maxLife: number;
}

const PARTICLE_COUNT = 50;
const PARTICLE_COLORS = [
    'rgba(0, 234, 255, 0.6)',   // cyan
    'rgba(255, 107, 157, 0.5)', // pink
    'rgba(78, 205, 196, 0.4)',  // teal
    'rgba(180, 140, 255, 0.3)', // purple
    'rgba(255, 200, 150, 0.4)'  // orange
];

export const CosmicParticles: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particles = useRef<Particle[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        // Initialize particles
        particles.current = Array.from({ length: PARTICLE_COUNT }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 3 + 1,
            color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
            life: Math.random() * 100,
            maxLife: 100
        }));

        function drawParticles() {
            particles.current.forEach(particle => {
                const alpha = particle.life / particle.maxLife;
                ctx.save();
                ctx.globalAlpha = alpha;
                ctx.fillStyle = particle.color;
                ctx.shadowColor = particle.color;
                ctx.shadowBlur = 10;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, 2 * Math.PI);
                ctx.fill();
                ctx.restore();
            });
        }

        function updateParticles() {
            particles.current.forEach(particle => {
                particle.x += particle.vx;
                particle.y += particle.vy;
                particle.life -= 0.5;

                // Wrap around screen
                if (particle.x < 0) particle.x = width;
                if (particle.x > width) particle.x = 0;
                if (particle.y < 0) particle.y = height;
                if (particle.y > height) particle.y = 0;

                // Reset particle when it dies
                if (particle.life <= 0) {
                    particle.x = Math.random() * width;
                    particle.y = Math.random() * height;
                    particle.life = particle.maxLife;
                    particle.color = PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)];
                }
            });
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            updateParticles();
            drawParticles();
            requestAnimationFrame(animate);
        }

        animate();

        function handleResize() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 5,
                pointerEvents: 'none',
                opacity: 0.6,
            }}
        />
    );
}; 