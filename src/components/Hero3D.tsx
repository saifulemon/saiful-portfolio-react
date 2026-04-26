import { useRef, useState, useEffect, Component, ReactNode } from 'react';

class WebGLErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }> {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

const isMobile = () =>
  /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth < 768;

function CSSAnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-background" />
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-blue-400"
          style={{
            width: i % 5 === 0 ? '3px' : '1.5px',
            height: i % 5 === 0 ? '3px' : '1.5px',
            left: `${(i * 37 + 11) % 100}%`,
            top: `${(i * 53 + 7) % 100}%`,
            opacity: 0.3 + (i % 5) * 0.1,
            animation: `twinkle ${2 + (i % 4)}s ease-in-out infinite`,
            animationDelay: `${i % 4}s`,
          }}
        />
      ))}
      <div
        className="absolute rounded-full"
        style={{
          width: '300px',
          height: '300px',
          right: '10%',
          top: '15%',
          background: 'conic-gradient(from 0deg, #3b82f6, #06b6d4, #7c3aed, #3b82f6)',
          opacity: 0.15,
          filter: 'blur(1px)',
          animation: 'spin3d 12s linear infinite',
        }}
      />
      <div
        className="absolute"
        style={{
          width: '200px',
          height: '200px',
          right: '10%',
          top: '15%',
          transform: 'translate(50px, 50px)',
          background: 'transparent',
          border: '1px solid rgba(59, 130, 246, 0.4)',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          animation: 'floatRotate 8s ease-in-out infinite',
        }}
      />
      <div
        className="absolute"
        style={{
          width: '150px',
          height: '150px',
          right: '18%',
          top: '40%',
          background: 'transparent',
          border: '1px solid rgba(6, 182, 212, 0.5)',
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
          animation: 'floatRotate 10s ease-in-out infinite reverse',
          animationDelay: '2s',
        }}
      />
      <div className="absolute top-1/3 right-[12%] w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '3s' }} />
      <div className="absolute top-1/4 right-[20%] w-40 h-40 bg-cyan-500/15 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
    </div>
  );
}

function ThreeJsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animId: number;
    let renderer: any;
    let isVisible = true;

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => { isVisible = entry.isIntersecting; },
      { threshold: 0 }
    );
    if (containerRef.current) visibilityObserver.observe(containerRef.current);

    async function init() {
      try {
        const THREE = await import('three');
        const canvas = canvasRef.current;
        if (!canvas) return;

        const mobile = isMobile();
        const STAR_COUNT = mobile ? 800 : 3000;

        renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true, powerPreference: 'high-performance' });
        renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, mobile ? 1 : 2));

        const scene = new THREE.Scene();
        const isLight = () => document.documentElement.classList.contains('light');
        scene.background = new THREE.Color(isLight() ? '#eef0f5' : '#050508');

        const themeObserver = new MutationObserver(() => {
          scene.background = new THREE.Color(isLight() ? '#eef0f5' : '#050508');
          starMat.color.set(isLight() ? 0x94a3b8 : 0xffffff);
        });
        themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        const camera = new THREE.PerspectiveCamera(45, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000);
        camera.position.set(0, 0, 7);

        scene.add(new THREE.AmbientLight(0xffffff, 0.3));
        const bl = new THREE.DirectionalLight(0x3b82f6, 2);
        bl.position.set(10, 10, 5);
        scene.add(bl);
        const cl = new THREE.DirectionalLight(0x00ffff, 1.5);
        cl.position.set(-10, -10, -5);
        scene.add(cl);

        const starGeo = new THREE.BufferGeometry();
        const positions = new Float32Array(STAR_COUNT * 3);
        for (let i = 0; i < STAR_COUNT * 3; i++) positions[i] = (Math.random() - 0.5) * 200;
        starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const starMat = new THREE.PointsMaterial({ color: isLight() ? 0x94a3b8 : 0xffffff, size: 0.1 });
        scene.add(new THREE.Points(starGeo, starMat));

        // Simpler material on mobile avoids expensive transmission/clearcoat shader
        const mainMat = mobile
          ? new THREE.MeshStandardMaterial({ color: 0x3b82f6, transparent: true, opacity: 0.6, roughness: 0.3, metalness: 0.5 })
          : new THREE.MeshPhysicalMaterial({ color: 0x3b82f6, roughness: 0.05, metalness: 0.1, transparent: true, opacity: 0.6, transmission: 0.95, clearcoat: 1, ior: 1.5, thickness: 2 });

        const mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(2, 1), mainMat);
        scene.add(mesh);

        const mesh2 = new THREE.Mesh(
          new THREE.OctahedronGeometry(1.2, 0),
          new THREE.MeshStandardMaterial({ color: 0x00ffff, emissive: 0x00ffff, emissiveIntensity: 0.5, wireframe: true })
        );
        mesh2.position.set(4, 1, -3);
        scene.add(mesh2);

        const mesh3 = new THREE.Mesh(
          new THREE.TetrahedronGeometry(1.4, 0),
          new THREE.MeshStandardMaterial({ color: 0x7c3aed, emissive: 0x3b82f6, emissiveIntensity: 0.3, roughness: 0.2, metalness: 0.9, transparent: true, opacity: 0.7 })
        );
        mesh3.position.set(-4, -1, -2);
        scene.add(mesh3);

        // Cap mobile at ~30fps to reduce CPU/GPU load during scroll
        const frameBudget = mobile ? 33 : 0;
        let lastTime = 0;
        let t = 0;

        const animate = (now: number) => {
          animId = requestAnimationFrame(animate);
          if (!isVisible) return;
          if (now - lastTime < frameBudget) return;
          lastTime = now;

          t += 0.01;
          mesh.rotation.x = Math.sin(t * 0.3) * 0.2;
          mesh.rotation.y += 0.005;
          mesh.position.y = Math.sin(t * 0.5) * 0.3;
          mesh2.rotation.x -= 0.003;
          mesh2.rotation.z += 0.004;
          mesh2.position.y = 1 + Math.sin(t * 0.5 + 1) * 0.3;
          mesh3.rotation.y -= 0.006;
          mesh3.rotation.x += 0.003;
          mesh3.position.y = -1 + Math.sin(t * 0.4 + 2) * 0.5;
          renderer.render(scene, camera);
        };
        animate(0);

        const handleResize = () => {
          if (!canvas) return;
          camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
        };
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
          themeObserver.disconnect();
        };
      } catch (e) {
        console.warn('WebGL unavailable, using CSS fallback');
      }
    }

    init();
    return () => {
      visibilityObserver.disconnect();
      if (animId) cancelAnimationFrame(animId);
      if (renderer) renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}

function DetectWebGL({ children, fallback }: { children: ReactNode; fallback: ReactNode }) {
  const [webglAvailable, setWebglAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    // Skip WebGL entirely on mobile — CSS fallback is lighter
    if (isMobile()) { setWebglAvailable(false); return; }
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setWebglAvailable(!!gl);
    } catch {
      setWebglAvailable(false);
    }
  }, []);

  if (webglAvailable === null) return null;
  return <>{webglAvailable ? children : fallback}</>;
}

export function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full pointer-events-none">
      <DetectWebGL fallback={<CSSAnimatedBackground />}>
        <WebGLErrorBoundary fallback={<CSSAnimatedBackground />}>
          <ThreeJsBackground />
        </WebGLErrorBoundary>
      </DetectWebGL>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
    </div>
  );
}
