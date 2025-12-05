import { useEffect, useRef } from 'react';

const ThreeDScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    script.async = true;
    script.onload = () => {
      initThreeJS();
    };
    document.body.appendChild(script);

    let scene, camera, renderer, animationId;
    let coreGroup, outerGroup;
    let mouseX = 0, mouseY = 0;

    const initThreeJS = () => {
      const THREE = window.THREE;
      if (!THREE || !mountRef.current) return;

      // 1. Scene Setup
      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(
        60,
        mountRef.current.clientWidth / mountRef.current.clientHeight,
        0.1,
        1000
      );
      camera.position.z = 20;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      mountRef.current.appendChild(renderer.domElement);

      // 2. Lighting
      const ambientLight = new THREE.AmbientLight(0x404040, 2);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xf59e0b, 2, 100);
      pointLight.position.set(0, 0, 0);
      scene.add(pointLight);

      const blueLight = new THREE.PointLight(0x3b82f6, 2, 50);
      blueLight.position.set(10, 5, 5);
      scene.add(blueLight);

      // 3. Central Core
      coreGroup = new THREE.Group();
      scene.add(coreGroup);

      const geometry = new THREE.IcosahedronGeometry(2, 1);
      const material = new THREE.MeshPhongMaterial({
        color: 0xf59e0b,
        emissive: 0xd97706,
        emissiveIntensity: 0.5,
        wireframe: false,
        shininess: 100
      });
      const core = new THREE.Mesh(geometry, material);
      coreGroup.add(core);

      // Wireframe Overlay
      const wireGeo = new THREE.IcosahedronGeometry(2.2, 2);
      const wireMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true,
        transparent: true,
        opacity: 0.1
      });
      const wireMesh = new THREE.Mesh(wireGeo, wireMat);
      coreGroup.add(wireMesh);

      // 4. Orbit Rings
      outerGroup = new THREE.Group();
      scene.add(outerGroup);

      const createRing = (radius, rotationX, rotationY) => {
        const curve = new THREE.EllipseCurve(
          0, 0,
          radius, radius,
          0, 2 * Math.PI,
          false,
          0
        );
        const points = curve.getPoints(100);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({
          color: 0x60a5fa,
          transparent: true,
          opacity: 0.3
        });
        const ellipse = new THREE.Line(geometry, material);
        ellipse.rotation.x = rotationX;
        ellipse.rotation.y = rotationY;
        outerGroup.add(ellipse);
      };

      createRing(6, Math.PI / 2.5, 0);
      createRing(6, Math.PI / 2.5, Math.PI / 3);
      createRing(6, Math.PI / 2.5, -Math.PI / 3);

      // 5. Floating Objects
      const shapes = [];
      const createFloatingObject = (type, color) => {
        let geo;
        if (type === 'box') geo = new THREE.BoxGeometry(0.5, 0.8, 0.15);
        if (type === 'sphere') geo = new THREE.SphereGeometry(0.3, 16, 16);
        if (type === 'pyramid') geo = new THREE.ConeGeometry(0.4, 0.6, 4);

        const mat = new THREE.MeshStandardMaterial({
          color: color,
          roughness: 0.4,
          metalness: 0.6
        });
        const mesh = new THREE.Mesh(geo, mat);

        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos((Math.random() * 2) - 1);
        const r = 6 + Math.random() * 4;

        mesh.position.set(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi)
        );

        mesh.userData = {
          angle: Math.random() * Math.PI * 2,
          speed: 0.002 + Math.random() * 0.005,
          radius: r,
          yOffset: (Math.random() - 0.5) * 2
        };

        outerGroup.add(mesh);
        shapes.push(mesh);
      };

      for (let i = 0; i < 15; i++) {
        createFloatingObject('box', 0xfcd34d);
        createFloatingObject('sphere', 0x60a5fa);
        createFloatingObject('pyramid', 0xffffff);
      }

      // 6. Starfield
      const starGeo = new THREE.BufferGeometry();
      const starCount = 1000;
      const starPos = new Float32Array(starCount * 3);
      for (let i = 0; i < starCount * 3; i++) {
        starPos[i] = (Math.random() - 0.5) * 80;
      }
      starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
      const starMat = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.05,
        transparent: true,
        opacity: 0.6
      });
      const stars = new THREE.Points(starGeo, starMat);
      scene.add(stars);

      // 7. Interaction
      const handleMouseMove = (event) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      };
      window.addEventListener('mousemove', handleMouseMove);

      const handleResize = () => {
        if (!mountRef.current) return;
        camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      };
      window.addEventListener('resize', handleResize);

      // 8. Animation Loop
      const animate = () => {
        animationId = requestAnimationFrame(animate);

        coreGroup.rotation.y += 0.005;
        coreGroup.rotation.z += 0.002;

        outerGroup.rotation.y -= 0.001;

        shapes.forEach(shape => {
          shape.rotation.x += 0.01;
          shape.rotation.y += 0.01;
        });

        stars.rotation.y += 0.0005;

        const targetX = mouseX * 0.5;
        const targetY = mouseY * 0.5;
        scene.rotation.y += (targetX * 0.2 - scene.rotation.y) * 0.05;
        scene.rotation.x += (targetY * 0.2 - scene.rotation.x) * 0.05;

        renderer.render(scene, camera);
      };
      animate();
    };

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      if (renderer) {
        renderer.dispose();
      }
      if (mountRef.current && renderer) {
        mountRef.current.removeChild(renderer.domElement);
      }
      const scripts = document.querySelectorAll('script[src*="three.js"]');
      scripts.forEach(s => s.remove());
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
};

export default ThreeDScene;
