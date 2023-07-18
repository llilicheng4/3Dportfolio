import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import { useRef } from 'react'
import { BoxGeometry, Mesh, MeshBasicMaterial } from 'three'
import { Cube } from './components/Cube'
import { Plane } from './components/Plane'
import { Sphere } from './components/Sphere'
import { PointSphere } from './components/PointSphere'

function Scene() {
  const { performance } = useControls('Monitoring', {
    performance: false,
  })

  const data = {color: "white", pointx: 60, pointy:60};
  const data2 = {color: "green", pointx: 120, pointy:120};

  return (
    <>
      {performance && <Perf position='top-left' />}

      <OrbitControls makeDefault />

      <directionalLight
        position={[-2, 2, 3]}
        intensity={1.5}
        castShadow
        shadow-mapSize={[1024 * 2, 1024 * 2]}
      />
      <ambientLight intensity={0.2} />

      <PointSphere data = {data} />
      <PointSphere data = {data2} />
    </>
  )
}

export { Scene }
