import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
//Ye suspense kya hai Padho phir yahi aa kar likho
import { Macbook } from "./Macbook"
import { OrbitControls,PerspectiveCamera,Stage } from "@react-three/drei"


const MacbookContainer=()=>{
    return(
        <Canvas>
            <Suspense 
            fallback="loading...">
                 <Stage environment="night" intensity={0.5}>
                 <Macbook/>
                </Stage>
                <OrbitControls enableZoom={false} autoRotate/>
                <PerspectiveCamera position={[-1,0,1,8]} zoom={0.7} makeDefault/>
                
            </Suspense>
        </Canvas>
    )
}

export default MacbookContainer