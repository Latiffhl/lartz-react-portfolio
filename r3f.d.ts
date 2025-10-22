
import { MeshLine, MeshLineMaterial } from 'meshline';
import { Object3DNode, extend } from '@react-three/fiber';

declare module '@react-three/fiber' {
  interface ThreeElements {
    meshLineGeometry: Object3DNode<MeshLine, typeof MeshLine>;

    meshLineMaterial: Object3DNode<MeshLineMaterial, typeof MeshLineMaterial>;
  }
}
