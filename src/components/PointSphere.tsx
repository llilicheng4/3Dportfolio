import { PivotControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import { useRef } from 'react'
import { Points } from 'three'

const PointSphere = (props: { data: { color: string; pointx: number; pointy: number } }) =>  {
    const { color, pointx, pointy } = props.data;
    const pointRef = useRef<Points>(null)
    const { position, animate} = useControls('PointSphere', 
    {
        position: [-2, 0, 0],
        color: 'white',
        animate: true,
    })

    useFrame((_, delta) => {
        if (animate) {
            pointRef.current!.rotation.y += delta / 3
        }
    })
    return (
        <points position={position} ref={pointRef} castShadow>
            <sphereGeometry args={[1, pointx, pointy]} />
            {/* <meshStandardMaterial color={color} /> */}
            <pointsMaterial color={color} size={2} sizeAttenuation={false} />
        </points>
    )
}

export { PointSphere }
