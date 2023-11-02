// import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';

// const ThreeModel = () => {
//   const canvasRef = useRef();

//   useEffect(() => {
//     // Set up the scene, camera, and renderer
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     canvasRef.current.appendChild(renderer.domElement);

//     // Create a simple cube
//     const geometry = new THREE.BoxGeometry();
//     const material = new THREE.MeshBasicMaterial({ color: 0x3498db });
//     const cube = new THREE.Mesh(geometry, material);
//     scene.add(cube);

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

//     // Clean up Three.js resources when the component unmounts
//     return () => {
//       renderer.dispose();
//     };
//   }, []);

//   return <div className="canvas-container" ref={canvasRef} />;
// };

// export default ThreeModel;
