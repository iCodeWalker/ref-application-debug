import { OrbitControls } from '@react-three/drei';
import { useControls } from 'leva';

export default function Experience()
{

    // const controls = useControls({ position: -2})
    // const { position } = useControls({ position : -2 })

    const controls = useControls({
    position: {
        // value: -2,
        value : {x : -2, y: 0, z:0},
        min: -4,
        max:4,
        step: 0.01,
        joystick:"invertY" // To invert the y-direction
    },
    color : '#ff0000'
})

    return <>

        <OrbitControls makeDefault />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        {/* <mesh position-x={controls.position}> */}
        <mesh position={[controls.position.x, controls.position.y, controls.position.z]}>
            <sphereGeometry />
            <meshStandardMaterial color={controls.color} />
        </mesh>

        <mesh position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

    </>
}