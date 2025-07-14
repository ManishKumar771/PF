import React, { useRef, useEffect } from 'react';

const STAR_COUNT = 250;
const SHOOTING_STAR_COUNT = 3;
const NEBULA_COUNT = 4;

const STAR_COLORS = [
    'rgba(255,255,255,0.9)',    // bright white
    'rgba(120,220,255,0.8)',    // pale blue
    'rgba(180,140,255,0.7)',    // pale purple
    'rgba(255,200,150,0.6)',    // warm orange
    'rgba(150,255,200,0.5)'     // soft green
];

const NEBULA_COLORS = [
    { primary: 'rgba(120,119,198,0.1)', secondary: 'rgba(120,119,198,0.05)' }, // purple
    { primary: 'rgba(255,107,157,0.08)', secondary: 'rgba(255,107,157,0.03)' }, // pink
    { primary: 'rgba(0,234,255,0.1)', secondary: 'rgba(0,234,255,0.04)' }, // cyan
    { primary: 'rgba(78,205,196,0.09)', secondary: 'rgba(78,205,196,0.04)' }  // teal
];

const STAR_SIZE = [0.5, 0.8, 1.1, 1.5, 2.0];
const STAR_SPEED = [0.7, 1.1, 1.7, 2.2, 2.8];

function randomBetween(a: number, b: number) {
    return a + Math.random() * (b - a);
}

function setAlpha(color: string, alpha: number) {
    // Only works for rgba colors
    const match = color.match(/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)$/);
    if (match) {
        const [_, r, g, b] = match;
        return `rgba(${r},${g},${b},${alpha})`;
    }
    return color;
}

interface Star {
    x: number;
    y: number;
    color: string;
    size: number;
    speed: number;
    twinkle: number;
    twinkleSpeed: number;
}

interface ShootingStar {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    maxLife: number;
}

interface Nebula {
    x: number;
    y: number;
    radius: number;
    colors: { primary: string; secondary: string };
    opacity: number;
    pulse: number;
    pulseSpeed: number;
}

export const Starfield: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const stars = useRef<Star[]>([]);
    const shootingStars = useRef<ShootingStar[]>([]);
    const nebulas = useRef<Nebula[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        // Initialize stars
        stars.current = Array.from({ length: STAR_COUNT }, () => {
            const color = STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)];
            const size = STAR_SIZE[Math.floor(Math.random() * STAR_SIZE.length)];
            const speed = STAR_SPEED[Math.floor(Math.random() * STAR_SPEED.length)];
            return {
                x: randomBetween(0, width),
                y: randomBetween(0, height),
                color,
                size,
                speed,
                twinkle: Math.random() * Math.PI * 2,
                twinkleSpeed: randomBetween(0.02, 0.05)
            };
        });

        // Initialize shooting stars
        shootingStars.current = Array.from({ length: SHOOTING_STAR_COUNT }, () => ({
            x: randomBetween(0, width),
            y: randomBetween(0, height * 0.5),
            vx: randomBetween(2, 4),
            vy: randomBetween(1, 3),
            life: 0,
            maxLife: randomBetween(50, 100)
        }));

        // Initialize nebulas
        nebulas.current = Array.from({ length: NEBULA_COUNT }, () => {
            const colors = NEBULA_COLORS[Math.floor(Math.random() * NEBULA_COLORS.length)];
            return {
                x: randomBetween(width * 0.1, width * 0.9),
                y: randomBetween(height * 0.1, height * 0.9),
                radius: randomBetween(width * 0.2, width * 0.4),
                colors,
                opacity: randomBetween(0.3, 0.7),
                pulse: Math.random() * Math.PI * 2,
                pulseSpeed: randomBetween(0.01, 0.03)
            };
        });

        function drawNebulas() {
            nebulas.current.forEach(nebula => {
                const gradient = ctx.createRadialGradient(
                    nebula.x, nebula.y, 0,
                    nebula.x, nebula.y, nebula.radius
                );

                const pulseFactor = Math.sin(nebula.pulse) * 0.2 + 0.8;
                gradient.addColorStop(0, nebula.colors.primary.replace('0.1', (0.1 * pulseFactor).toString()));
                gradient.addColorStop(0.4, nebula.colors.secondary.replace('0.05', (0.05 * pulseFactor).toString()));
                gradient.addColorStop(1, 'rgba(0,0,0,0)');

                ctx.save();
                ctx.globalAlpha = nebula.opacity * pulseFactor;
                ctx.beginPath();
                ctx.arc(nebula.x, nebula.y, nebula.radius, 0, 2 * Math.PI);
                ctx.fillStyle = gradient;
                ctx.fill();
                ctx.restore();

                nebula.pulse += nebula.pulseSpeed;
            });
        }

        function drawStars() {
            stars.current.forEach(star => {
                const twinkleFactor = Math.sin(star.twinkle) * 0.3 + 0.7;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size * twinkleFactor, 0, 2 * Math.PI);
                ctx.fillStyle = setAlpha(star.color, twinkleFactor);
                ctx.shadowColor = star.color;
                ctx.shadowBlur = 10 * star.size * twinkleFactor;
                ctx.fill();
                ctx.shadowBlur = 0;

                star.twinkle += star.twinkleSpeed;
            });
        }

        function drawShootingStars() {
            shootingStars.current.forEach(star => {
                if (star.life > 0) {
                    const alpha = (star.maxLife - star.life) / star.maxLife;
                    ctx.save();
                    ctx.globalAlpha = alpha;
                    ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
                    ctx.lineWidth = 2;
                    ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
                    ctx.shadowBlur = 10;
                    ctx.beginPath();
                    ctx.moveTo(star.x, star.y);
                    ctx.lineTo(star.x - star.vx * 20, star.y - star.vy * 20);
                    ctx.stroke();
                    ctx.restore();
                }
            });
        }

        function draw() {
            // Deep cosmic background with gradient
            const bgGradient = ctx.createRadialGradient(
                width * 0.5, height * 0.5, 0,
                width * 0.5, height * 0.5, Math.max(width, height) * 0.7
            );
            bgGradient.addColorStop(0, '#0a0a2a');
            bgGradient.addColorStop(0.5, '#000010');
            bgGradient.addColorStop(1, '#000000');
            ctx.fillStyle = bgGradient;
            ctx.fillRect(0, 0, width, height);

            drawNebulas();
            drawStars();
            drawShootingStars();
        }

        function update() {
            // Update stars
            stars.current.forEach(star => {
                star.y += star.speed;
                if (star.y > height) {
                    star.x = randomBetween(0, width);
                    star.y = 0;
                }
            });

            // Update shooting stars
            shootingStars.current.forEach(star => {
                if (star.life > 0) {
                    star.x += star.vx;
                    star.y += star.vy;
                    star.life--;
                } else {
                    // Reset shooting star
                    star.x = randomBetween(0, width);
                    star.y = randomBetween(0, height * 0.5);
                    star.vx = randomBetween(2, 4);
                    star.vy = randomBetween(1, 3);
                    star.life = star.maxLife;
                }
            });
        }

        function animate() {
            update();
            draw();
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
                zIndex: 0,
                pointerEvents: 'none',
            }}
        />
    );
}; 