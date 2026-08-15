import { useEffect, useRef } from "react";
import * as THREE from "three";

// A slowly rotating wireframe "seal": a ring of torus geometry with an
// inner icosahedron, evoking a certification stamp rendered as engineering
// drawing — ties the hero's motion to the blueprint/stamp visual identity.
export default function HeroScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const teal = 0x2cd4c0;
    const gold = 0xddbf74;

    const torusGeo = new THREE.TorusGeometry(3, 0.04, 8, 96);
    const torusMat = new THREE.MeshBasicMaterial({ color: teal, wireframe: false, transparent: true, opacity: 0.85 });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    group.add(torus);

    const torus2Geo = new THREE.TorusGeometry(2.5, 0.015, 8, 96);
    const torus2Mat = new THREE.MeshBasicMaterial({ color: gold, transparent: true, opacity: 0.6 });
    const torus2 = new THREE.Mesh(torus2Geo, torus2Mat);
    group.add(torus2);

    const icoGeo = new THREE.IcosahedronGeometry(1.6, 1);
    const icoWire = new THREE.WireframeGeometry(icoGeo);
    const icoMat = new THREE.LineBasicMaterial({ color: teal, transparent: true, opacity: 0.55 });
    const ico = new THREE.LineSegments(icoWire, icoMat);
    group.add(ico);

    // Tick marks around the ring, like a stamp's engraved edge
    const tickGroup = new THREE.Group();
    const tickCount = 48;
    for (let i = 0; i < tickCount; i++) {
      const angle = (i / tickCount) * Math.PI * 2;
      const isMajor = i % 4 === 0;
      const len = isMajor ? 0.28 : 0.12;
      const r1 = 3.35;
      const r2 = r1 + len;
      const geo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(Math.cos(angle) * r1, Math.sin(angle) * r1, 0),
        new THREE.Vector3(Math.cos(angle) * r2, Math.sin(angle) * r2, 0),
      ]);
      const mat = new THREE.LineBasicMaterial({
        color: isMajor ? gold : teal,
        transparent: true,
        opacity: isMajor ? 0.8 : 0.35,
      });
      tickGroup.add(new THREE.Line(geo, mat));
    }
    group.add(tickGroup);

    let frameId;
    const clock = new THREE.Clock();

    const animate = () => {
      const t = clock.getElapsedTime();
      group.rotation.y = t * 0.18;
      group.rotation.x = Math.sin(t * 0.15) * 0.15;
      ico.rotation.y = -t * 0.3;
      ico.rotation.x = t * 0.12;
      tickGroup.rotation.z = t * 0.05;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduceMotion) {
      animate();
    } else {
      renderer.render(scene, camera);
    }

    const handleResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
      torusGeo.dispose();
      torusMat.dispose();
      torus2Geo.dispose();
      torus2Mat.dispose();
      icoGeo.dispose();
      icoWire.dispose();
      icoMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" aria-hidden="true" />;
}
