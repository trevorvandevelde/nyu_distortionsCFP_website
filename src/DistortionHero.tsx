import { useEffect, useRef, useState } from "react";

type DistortionHeroProps = {
  text: string;
  onColorChange?: (color: string) => void;
};

const backgroundColors = ["#fa4e2d", "#2517b8", "#f5d957"];

export default function DistortionHero({ text, onColorChange }: DistortionHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [backgroundColor, setBackgroundColor] = useState(
    () => backgroundColors[Math.floor(Math.random() * backgroundColors.length)]
  );

  useEffect(() => {
    onColorChange?.(backgroundColor);
  }, [backgroundColor, onColorChange]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let animationFrame = 0;
    let isHovered = false;
    let width = 0;
    let height = 0;
    let fontSize = 0;

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const pixelRatio = window.devicePixelRatio || 1;
      width = bounds.width;
      height = Math.min(bounds.height, width * 0.42);
      fontSize = Math.max(72, Math.min(width * 0.19, 250));
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const draw = (frame: number) => {
      const time = frame * 0.04;
      const intensity = isHovered ? 24 : 10;
      context.clearRect(0, 0, width, height);
      context.fillStyle = backgroundColor;
      context.fillRect(0, 0, width, height);

      context.save();
      context.font = `400 ${fontSize}px "Arial Narrow", "Helvetica Neue", sans-serif`;
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillStyle = "#050505";

      const textY = height / 2;
      const measuredTextWidth = context.measureText(text).width;
      if (measuredTextWidth > width * 0.9) {
        fontSize *= (width * 0.9) / measuredTextWidth;
        context.font = `400 ${fontSize}px "Arial Narrow", "Helvetica Neue", sans-serif`;
      }
      const textWidth = context.measureText(text).width;
      const drawSlice = (offset: number, alpha: number) => {
        context.globalAlpha = alpha;
        context.save();
        context.beginPath();
        context.rect(0, offset, width, 7);
        context.clip();
        context.fillText(text, width / 2 + offset * 0.08, textY);
        context.restore();
      };

      context.globalAlpha = 0.92;
      context.fillText(text, width / 2, textY);
      for (let y = 0; y < height; y += 7) {
        const wave = Math.sin(y * 0.035 + time) * intensity;
        const jitter = (Math.random() - 0.5) * (isHovered ? 12 : 4);
        drawSlice(y, 0.36);
        context.save();
        context.beginPath();
        context.rect(0, y, width, 7);
        context.clip();
        context.globalAlpha = 0.45;
        context.fillText(text, width / 2 + wave + jitter, textY);
        context.restore();
      }
      context.restore();

      context.globalAlpha = 0.16;
      context.fillStyle = "#111111";
      for (let y = 0; y < height; y += 8) context.fillRect(0, y, width, 2);
      context.globalAlpha = 0.07;
      context.fillStyle = "#ffffff";
      for (let i = 0; i < textWidth / 3; i += 1) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        context.fillRect(x, y, Math.random() * 3 + 1, 1);
      }
      context.globalAlpha = 1;
      animationFrame = requestAnimationFrame(() => draw(frame + 1));
    };

    const handleEnter = () => { isHovered = true; };
    const handleLeave = () => { isHovered = false; };
    const handleClick = () => {
      setBackgroundColor((currentColor) => {
        const currentIndex = backgroundColors.indexOf(currentColor);
        return backgroundColors[(currentIndex + 1) % backgroundColors.length];
      });
    };
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    canvas.addEventListener("mouseenter", handleEnter);
    canvas.addEventListener("mouseleave", handleLeave);
    canvas.addEventListener("click", handleClick);
    resize();
    draw(0);

    return () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
      canvas.removeEventListener("mouseenter", handleEnter);
      canvas.removeEventListener("mouseleave", handleLeave);
      canvas.removeEventListener("click", handleClick);
    };
  }, [text, backgroundColor]);

  return <canvas ref={canvasRef} className="distortion-hero-canvas" aria-label={text} role="img" />;
}
