"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Globepage() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const generateRandomLocations = () => {
      const locations = [];
      for (let i = 0; i < 10; i++) {
        const latitude = Math.random() * 180 - 90;
        const longitude = Math.random() * 360 - 180;
        locations.push({ latitude, longitude, number: i + 1 });
      }
      setLocations(locations);
    };

    generateRandomLocations();
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Globe locations={locations} />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

const Globe = ({ locations }) => {
  const globeRef = useRef();

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load("/earthmap.jpg", (texture) => {
      globeRef.current.material.map = texture;
      globeRef.current.material.needsUpdate = true;
    });
  }, []);

  return (
    <mesh ref={globeRef} position={[0, 0, 0]}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial />
      {locations.map((location, index) => (
        <Marker key={index} {...location} />
      ))}
    </mesh>
  );
};

const Marker = ({ latitude, longitude, number }) => {
  const position = convertLatLonToVector3(latitude, longitude, 2.1);

  return (
    <Html position={position}>
      <div
        style={{ background: "white", padding: "2px 5px", borderRadius: "5px" }}
      >
        {number}
      </div>
    </Html>
  );
};

const convertLatLonToVector3 = (lat, lon, radius) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);

  return new THREE.Vector3(x, y, z);
};
