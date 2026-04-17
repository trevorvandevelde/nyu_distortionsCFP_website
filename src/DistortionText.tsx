import { useRef, useEffect } from "react";

type Props = {
  text?: string;
  fontSize?: number;
  varySize?: boolean;
  customSizes?: number[];
};

export function DistortionText({
  text = "DISTORTIONS",
  fontSize = 100,
  varySize = true,
  customSizes,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const hovering = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 🔥 size logic (ONLY height matters now)
    const getSize = (i: number) => {
      if (!varySize) return fontSize;
      if (customSizes && customSizes[i] !== undefined) return customSizes[i];
      return fontSize + Math.sin(i * 0.8) * (fontSize * 0.3);
    };

    let maxSize = 0;
    let totalWidth = 0;
    // Calculate max font size and total width for the text
    for (let i = 0; i < text.length; i++) {
      const size = getSize(i);
      maxSize = Math.max(maxSize, size);
      ctx.font = `italic ${size}px \"Times New Roman\", serif`;
      const letter = text[i];
      if (letter === " ") {
        totalWidth += fontSize * 0.3;
      } else {
        totalWidth += ctx.measureText(letter).width;
      }
    }

    const height = maxSize;
    const width = totalWidth;

    canvas.width = Math.ceil(width);
    canvas.height = Math.ceil(height);

    const enter = () => (hovering.current = true);
    const leave = () => (hovering.current = false);

    canvas.addEventListener("mouseenter", enter);
    canvas.addEventListener("mouseleave", leave);

    let frame = 0;

    const drawText = (offsetX = 0, offsetY = 0, alpha = 1) => {
      let x = 0;

      ctx.textBaseline = "bottom";
      const baseY = height * 0.98;

      // No manual centering, start at x = 0

      for (let i = 0; i < text.length; i++) {
        const size = getSize(i);

        ctx.font = `italic ${size}px "Times New Roman", serif`;
        ctx.globalAlpha = alpha;

        const letter = text[i];

        if (letter === " ") {
          x += fontSize * 0.3;
          continue;
        }

        ctx.fillText(letter, x + offsetX, baseY + offsetY);

        x += ctx.measureText(letter).width;
      }
    };

    const render = () => {
      frame++;
      const time = frame * 0.015;

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "white";

      // base
      drawText(0, 0, 0.9);

      // distortion
      const sliceHeight = 1;
      const intensity = hovering.current ? 10 : 5;

      for (let y = -(height/2); y < height+(height/2); y += sliceHeight) {
        const jitter =
          (Math.random() - 0.5) *
          (hovering.current ? 7 : 3);

        const wave =
          Math.sin(y * 0.01 + time) * intensity;

        ctx.save();

        ctx.beginPath();
        ctx.rect(-y, y*2, width, sliceHeight);
        ctx.clip();

        ctx.globalAlpha = 0.3;

        drawText(wave + jitter, 0, 0.3);

        ctx.restore();
      }

      animationRef.current = requestAnimationFrame(render);
    };

    animationRef.current = requestAnimationFrame(render);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);

      canvas.removeEventListener("mouseenter", enter);
      canvas.removeEventListener("mouseleave", leave);
    };
  }, [text, fontSize, varySize, customSizes]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "inline-block",
        background: "transparent",
        verticalAlign: "middle",
        margin: 0,
        padding: 0,
        lineHeight: 1.5,
        position: "relative",
        top: "0.0em"
      }}
    />
  );
}