import { useRef, useEffect } from "react";

type Props = {
  text: string;
  speed?: number;
  fontSize?: number;
  color?: string;
  backgroundColor?: string;
  height?: number;
  direction?: 'left' | 'right'; // for movement direction
  isPaused?: boolean;
};

export function MovingTextBorder({
  text,
  speed = 60, // pixels per second
  fontSize = 22,
  color = "#fff",
  backgroundColor = "#282c34",
  height = 48,
  direction = 'right',
  isPaused = false
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const offsetRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.font = `bold ${fontSize}px 'Times New Roman', serif`;
    const textWidth = ctx.measureText(text).width;
    const dpr = window.devicePixelRatio || 1;
    if (!canvas.offsetWidth) return;
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
    let lastTime = performance.now();
    function draw(now: number) {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.font = `bold ${fontSize}px 'Times New Roman', serif`;
      const textWidth = ctx.measureText(text).width;
      const elapsed = (now - lastTime) / 1000;
      lastTime = now;
      if (!isPaused) {
        // Move right if direction is 'right', left if 'left'
        offsetRef.current += (direction === 'right' ? 1 : -1) * speed * elapsed;
        if (offsetRef.current < -textWidth) offsetRef.current += textWidth;
        if (offsetRef.current > 0) offsetRef.current -= textWidth;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `bold ${fontSize}px 'Times New Roman', serif`;
      ctx.fillStyle = color;
      ctx.textBaseline = "middle";
      let x = offsetRef.current;
      const limit = canvas.offsetWidth;
      while (x < limit) {
        ctx.fillText(text, x, height / 2);
        x += textWidth;
      }
      animationRef.current = requestAnimationFrame(draw);
    }
    animationRef.current = requestAnimationFrame(draw);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [text, speed, fontSize, color, backgroundColor, height, direction, isPaused]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: height,
        display: 'block',
        background: backgroundColor,
        borderTop: '2.5px solid #fa4e2d',
        borderBottom: '2.5px solid #fa4e2d'
      }}
      height={height}
    />
  );
}

// Vertical, rotated moving text border for left/right sides
export function MovingTextBorderVertical({
  text,
  speed = 60,
  fontSize = 23,
  color = "#fff",
  backgroundColor = "#282c34",
  width = 48,
  direction = 'up' // 'up' or 'down'
}: {
  text: string;
  speed?: number;
  fontSize?: number;
  color?: string;
  backgroundColor?: string;
  width?: number;
  direction?: 'up' | 'down';
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.font = `bold ${fontSize}px 'Times New Roman', serif`;
    // Use the text as-is for vertical borders (no extra spacing)
    const textWidth = ctx.measureText(text).width;
    const dpr = window.devicePixelRatio || 1;
    // Use full viewport height for vertical borders
    const fullHeight = Math.max(document.documentElement.scrollHeight, window.innerHeight);
    canvas.width = width * dpr;
    canvas.height = fullHeight * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
    let offset = 0;
    let lastTime = performance.now();
    function draw(now: number) {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.font = `bold ${fontSize}px 'Times New Roman', serif`;
      const textWidth = ctx.measureText(text).width;
      const elapsed = (now - lastTime) / 1000;
      lastTime = now;
      // Move down if direction is 'down', up if 'up'
      offset += (direction === 'down' ? 1 : -1) * speed * elapsed;
      if (offset < -fullHeight) offset += fullHeight;
      if (offset > 0) offset -= fullHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.translate(width / 2, 0);
      ctx.rotate(Math.PI / 2);
      let y = offset;
      while (y < fullHeight) {
        ctx.fillStyle = color;
        ctx.textBaseline = "middle";
        ctx.fillText(text, y, 0);
        y += fullHeight;
      }
      ctx.restore();
      animationRef.current = requestAnimationFrame(draw);
    }
    animationRef.current = requestAnimationFrame(draw);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [text, speed, fontSize, color, backgroundColor, width, direction]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: width,
        height: '100vh',
        display: 'block',
        background: backgroundColor,
        borderTop: '2.5px solid #fa4e2d',
        borderBottom: '2.5px solid #fa4e2d',
        borderLeft: '2.5px solid #fa4e2d', // outer edge for right border
        borderRight: '2.5px solid #fa4e2d', // outer edge for left border
      }}
      width={width}
      height={window.innerHeight}
    />
  );
}
