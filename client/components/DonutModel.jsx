/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 scene.gltf 
Author: Cresis (https://sketchfab.com/Cresis)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/donut-cat-3800caad4695418f9f60bfca87a85304
Title: Donut Cat!
*/

import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function DonutModel(props) {
  const { glazeColor, baseColor } = props
  const group = useRef()
  const { nodes, materials } = useGLTF('/donut_cat/scene.gltf')
  // const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.256}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="donut_2"
                position={[0, 0.024, 0]}
                rotation={[0, 0, 0]}
              >
                <group name="polewka_0">
                  <mesh
                    name="Object_6"
                    geometry={nodes.Object_6.geometry}
                    material={glazeColor}
                  />
                  <mesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={baseColor}
                  />
                </group>
                <group
                  name="twarz_1"
                  position={[-0.003, -0.005, 0.082]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[-0.012, 0.012, 0.012]}
                >
                  <mesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials['Material.002']}
                  />
                  <mesh
                    name="Object_10"
                    geometry={nodes.Object_10.geometry}
                    material={materials['Material.005']}
                  />
                </group>
                <mesh
                  name="Object_4"
                  geometry={nodes.Object_4.geometry}
                  material={materials['Material.003']}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/donut_cat/scene.gltf')
