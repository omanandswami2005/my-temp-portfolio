import React, { useEffect, useRef } from 'react';

interface SquaresProps {
  speed?: number;
  squareSize?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'diagonal';
  borderColor?: string;
  hoverFillColor?: string;
}

const Squares: React.FC<SquaresProps> = ({
  speed = 0.5,
  squareSize = 40,
  direction = 'diagonal',
  borderColor = '#fff',
  hoverFillColor = '#222'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Create squares array
    let squares: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      dx: number;
      dy: number;
    }> = [];

    // Set movement direction based on direction
    const getDirection = () => {
      switch (direction) {
        case 'up': return { dx: 0, dy: -1 };
        case 'down': return { dx: 0, dy: 1 };
        case 'left': return { dx: -1, dy: 0 };
        case 'right': return { dx: 1, dy: 0 };
        case 'diagonal': return { dx: 1, dy: 1 };
        default: return { dx: 1, dy: 1 };
      }
    };

    const { dx, dy } = getDirection();

    // Initialize squares
    const initSquares = () => {
      squares = []; // Clear existing squares
      // Add extra squares to ensure full viewport coverage
      const cols = Math.ceil(canvas.width / squareSize) + 2;
      const rows = Math.ceil(canvas.height / squareSize) + 2;

      for (let i = -2; i < cols; i++) {
        for (let j = -2; j < rows; j++) {
          squares.push({
            x: i * squareSize,
            y: j * squareSize,
            size: squareSize,
            speed: speed,
            dx,
            dy
          });
        }
      }
    };

    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initSquares(); // Re-initialize squares
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    initSquares();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      squares.forEach(square => {
        // Update position
        square.x += square.speed * square.dx;
        square.y += square.speed * square.dy;

        // Boundary check - modify boundary conditions to ensure seamless connection
        if (square.x > canvas.width + square.size) square.x = -square.size * 2;
        if (square.x < -square.size * 2) square.x = canvas.width + square.size;
        if (square.y > canvas.height + square.size) square.y = -square.size * 2;
        if (square.y < -square.size * 2) square.y = canvas.height + square.size;

        // Draw square - ensure square fully covers its area
        ctx.strokeStyle = borderColor;
        ctx.lineWidth = 1;
        ctx.strokeRect(
          Math.floor(square.x),
          Math.floor(square.y),
          square.size,
          square.size
        );
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Mouse hover effect
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      squares.forEach(square => {
        if (
          mouseX > square.x &&
          mouseX < square.x + square.size &&
          mouseY > square.y &&
          mouseY < square.y + square.size
        ) {
          ctx.fillStyle = hoverFillColor;
          ctx.fillRect(square.x, square.y, square.size, square.size);
        }
      });
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [speed, squareSize, direction, borderColor, hoverFillColor]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{ 
        opacity: 0.1,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -10
      }}
    />
  );
};

export default Squares;
