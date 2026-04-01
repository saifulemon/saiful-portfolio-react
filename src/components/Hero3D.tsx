import { useRef, useMemo, useState, useEffect, Component, ReactNode } from 'react';

class WebGLErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }> {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

function CSSAnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[#050508]" />
      {Array.from({ length: 80 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-blue-400"
          style={{
            width: Math.random() > 0.8 ? '3px' : '1.5px',
            height: Math.random() > 0.8 ? '3px' : '1.5px',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.3 + Math.random() * 0.5,
            animation: `twinkle ${2 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 4}s`,
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
      <div className="absolute bottom-1/3 right-[8%] w-52 h-52 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
    </div>
  );
}

function ThreeJsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let animId: number;
    let renderer: any;

    async function init() {
      try {
        const THREE = await import('three');
        const canvas = canvasRef.current;
        if (!canvas) return;

        renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true, powerPreference: 'high-performance' });
        renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const scene = new THREE.Scene();
        scene.background = new THREE.Color('#050508');

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
        const stars = 5000;
        const positions = new Float32Array(stars * 3);
        for (let i = 0; i < stars * 3; i++) positions[i] = (Math.random() - 0.5) * 200;
        starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        scene.add(new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 })));

        const geo = new THREE.IcosahedronGeometry(2, 1);
        const mat = new THREE.MeshPhysicalMaterial({ color: 0x3b82f6, roughness: 0.05, metalness: 0.1, transparent: true, opacity: 0.6, transmission: 0.95, clearcoat: 1, ior: 1.5, thickness: 2 });
        const mesh = new THREE.Mesh(geo, mat);
        scene.add(mesh);

        const geo2 = new THREE.OctahedronGeometry(1.2, 0);
        const mat2 = new THREE.MeshStandardMaterial({ color: 0x00ffff, emissive: 0x00ffff, emissiveIntensity: 0.5, wireframe: true });
        const mesh2 = new THREE.Mesh(geo2, mat2);
        mesh2.position.set(4, 1, -3);
        scene.add(mesh2);

        const geo3 = new THREE.TetrahedronGeometry(1.4, 0);
        const mat3 = new THREE.MeshStandardMaterial({ color: 0x7c3aed, emissive: 0x3b82f6, emissiveIntensity: 0.3, roughness: 0.2, metalness: 0.9, transparent: true, opacity: 0.7 });
        const mesh3 = new THREE.Mesh(geo3, mat3);
        mesh3.position.set(-4, -1, -2);
        scene.add(mesh3);

        let t = 0;
        const animate = () => {
          animId = requestAnimationFrame(animate);
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
        animate();

        const handleResize = () => {
          if (!canvas) return;
          camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      } catch (e) {
        console.warn('WebGL unavailable, using CSS fallback');
      }
    }

    init();
    return () => {
      if (animId) cancelAnimationFrame(animId);
      if (renderer) renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

function DetectWebGL({ children, fallback }: { children: ReactNode; fallback: ReactNode }) {
  const [webglAvailable, setWebglAvailable] = useState<boolean | null>(null);

  useEffect(() => {
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
      <DetectWebGL
        fallback={<CSSAnimatedBackground />}
      >
        <WebGLErrorBoundary fallback={<CSSAnimatedBackground />}>
          <ThreeJsBackground />
        </WebGLErrorBoundary>
      </DetectWebGL>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
    </div>
  );
}
