import { useEffect, useRef } from "react";
import { Mesh, Program, Renderer, Triangle } from "ogl";

const vertexShader = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec2 uResolution;
varying vec2 vUv;

float wave(vec2 uv, float speed, float scale, float offset) {
  return sin((uv.x * scale) + (uTime * speed) + offset) * 0.5 + 0.5;
}

void main() {
  vec2 uv = vUv;
  vec2 centered = (uv - 0.5) * vec2(uResolution.x / uResolution.y, 1.0);

  float horizon = smoothstep(0.82, 0.18, abs(centered.y + 0.12));
  float lineA = smoothstep(0.02, 0.0, abs(centered.y - (sin(centered.x * 4.2 + uTime * 0.34) * 0.11)));
  float lineB = smoothstep(0.018, 0.0, abs(centered.y - (sin(centered.x * 6.0 - uTime * 0.22) * 0.07 + 0.14)));
  float lineC = smoothstep(0.012, 0.0, abs(centered.y - (sin(centered.x * 8.0 + uTime * 0.18) * 0.045 - 0.17)));

  float pulse = wave(centered, 0.55, 3.4, 0.0);
  vec3 cyan = vec3(0.04, 0.86, 1.0);
  vec3 violet = vec3(0.48, 0.26, 1.0);
  vec3 color = mix(violet, cyan, pulse);

  float glow = (lineA * 0.65 + lineB * 0.45 + lineC * 0.32) * horizon;
  glow += smoothstep(0.9, 0.0, length(centered - vec2(0.18, -0.08))) * 0.08;

  gl_FragColor = vec4(color, glow * 0.55);
}
`;

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
    );
  } catch (error) {
    return false;
  }
}

function AiWaveBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof window === "undefined") {
      return undefined;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion || !supportsWebGL()) {
      container.classList.add("ai-wave-background-fallback");
      return () => {
        container.classList.remove("ai-wave-background-fallback");
      };
    }

    let renderer;
    let animationFrame;
    let resizeObserver;

    try {
      renderer = new Renderer({
        alpha: true,
        antialias: false,
        dpr: Math.min(window.devicePixelRatio || 1, 1.5),
      });

      const gl = renderer.gl;
      gl.clearColor(0, 0, 0, 0);
      gl.canvas.className = "ai-wave-canvas";
      container.appendChild(gl.canvas);

      const geometry = new Triangle(gl);
      const program = new Program(gl, {
        vertex: vertexShader,
        fragment: fragmentShader,
        uniforms: {
          uTime: { value: 0 },
          uResolution: { value: [1, 1] },
        },
        transparent: true,
        depthTest: false,
        depthWrite: false,
      });
      const mesh = new Mesh(gl, { geometry, program });

      const resize = () => {
        const width = Math.max(container.clientWidth, 1);
        const height = Math.max(container.clientHeight, 1);
        renderer.setSize(width, height);
        program.uniforms.uResolution.value = [
          gl.drawingBufferWidth,
          gl.drawingBufferHeight,
        ];
      };

      resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(container);
      resize();

      const render = (time) => {
        program.uniforms.uTime.value = time * 0.001;
        renderer.render({ scene: mesh });
        animationFrame = requestAnimationFrame(render);
      };

      animationFrame = requestAnimationFrame(render);
    } catch (error) {
      container.classList.add("ai-wave-background-fallback");
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      if (renderer?.gl?.canvas?.parentNode === container) {
        container.removeChild(renderer.gl.canvas);
      }
      renderer?.gl?.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, []);

  return <div className="ai-wave-background" ref={containerRef} aria-hidden="true" />;
}

export default AiWaveBackground;
