import * as THREE from 'three';

import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.165.0/examples/jsm/controls/OrbitControls.js';

import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.165.0/examples/jsm/loaders/GLTFLoader.js';

import { VRButton } from 'https://cdn.jsdelivr.net/npm/three@0.165.0/examples/jsm/webxr/VRButton.js';


// ESCENA
const scene = new THREE.Scene();

scene.background = new THREE.Color(0x202020);


// CAMARA
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.set(0, 2, 5);


// RENDER
const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

renderer.xr.enabled = true;

document
    .getElementById('contenedor3D')
    .appendChild(renderer.domElement);


// BOTON VR
document.body.appendChild(
    VRButton.createButton(renderer)
);


// CONTROLES
const controls = new OrbitControls(
    camera,
    renderer.domElement
);

controls.enableDamping = true;


// LUCES
const ambientLight = new THREE.AmbientLight(
    0xffffff,
    2
);

scene.add(ambientLight);


const directionalLight = new THREE.DirectionalLight(
    0xffffff,
    2
);

directionalLight.position.set(5, 10, 5);

scene.add(directionalLight);


// GRID
const grid = new THREE.GridHelper(
    50,
    50
);

scene.add(grid);


// PISO
const floorGeometry = new THREE.PlaneGeometry(
    50,
    50
);

const floorMaterial = new THREE.MeshStandardMaterial({
    color: 0x808080
});

const floor = new THREE.Mesh(
    floorGeometry,
    floorMaterial
);

floor.rotation.x = -Math.PI / 2;

scene.add(floor);


// MODELO
const loader = new GLTFLoader();

loader.load(

    './models/aula_y.glb',

    function (gltf) {

        const modelo = gltf.scene;

        modelo.scale.set(
            1,
            1,
            1
        );

        modelo.position.set(
            0,
            0,
            0
        );

        scene.add(modelo);

        console.log("Modelo cargado");

    },

    function (xhr) {

        console.log(
            (xhr.loaded / xhr.total * 100)
            + '% cargado'
        );

    },

    function (error) {

        console.error(error);

    }

);


// RESPONSIVE
window.addEventListener('resize', () => {

    camera.aspect =
        window.innerWidth /
        window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

});


// ANIMACION
function animate() {

    controls.update();

    renderer.render(
        scene,
        camera
    );

}

renderer.setAnimationLoop(animate);