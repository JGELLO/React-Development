// import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';

// const ThreeScene = () => {
//   const sceneRef = useRef(null);
//   const renderer = useRef(null);
//   const camera = useRef(null);

//   useEffect(() => {
//     // Scene setup
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     sceneRef.current.appendChild(renderer.domElement);

//     // Create a simple cube
//     const geometry = new THREE.BoxGeometry();
//     const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//     const cube = new THREE.Mesh(geometry, material);
//     scene.add(cube);

//     // Position the camera
//     camera.position.z = 5;

//     // Animation logic
//     const animate = () => {
//       requestAnimationFrame(animate);

//       // Rotate the cube
//       cube.rotation.x += 0.01;
//       cube.rotation.y += 0.01;

//       renderer.render(scene, camera);
//     };

//     animate();

//     // Clean up Three.js objects on component unmount
//     return () => {
//       geometry.dispose();
//       material.dispose();
//       renderer.dispose();
//     };
//   }, []);

//   return <div ref={sceneRef} />;
// };

// export default ThreeScene;
