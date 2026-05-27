import * as THREE from 'three';

import { OrbitControls }
from 'https://cdn.jsdelivr.net/npm/three@0.165.0/examples/jsm/controls/OrbitControls.js';

import { GLTFLoader }
from 'https://cdn.jsdelivr.net/npm/three@0.165.0/examples/jsm/loaders/GLTFLoader.js';

import { VRButton }
from 'https://cdn.jsdelivr.net/npm/three@0.165.0/examples/jsm/webxr/VRButton.js';


// ======================
// ESCENA
// ======================

const scene = new THREE.Scene();

scene.background =
    new THREE.Color(0x202020);


// ======================
// CAMARA
// ======================

const camera =
    new THREE.PerspectiveCamera(

        75,

        window.innerWidth /
        window.innerHeight,

        0.1,

        1000

    );


// ======================
// PLAYER (CUERPO)
// ======================

const player = new THREE.Group();

player.position.set(
    0,
    0.1,
    0
);

scene.add(player);

player.add(camera);

camera.lookAt(0, 1.6, 0);

// ======================
// RENDERER
// ======================

const renderer =
    new THREE.WebGLRenderer({

        antialias: true

    });

renderer.setSize(

    window.innerWidth,
    window.innerHeight

);

renderer.setPixelRatio(
    window.devicePixelRatio
);

renderer.xr.enabled = true;

renderer.shadowMap.enabled = true;

document
    .getElementById("contenedor3D")
    .appendChild(renderer.domElement);


// ======================
// BOTON VR
// ======================

document.body.appendChild(

    VRButton.createButton(renderer)

);


// ======================
// CONTROLES
// ======================

/*const controls =
    new OrbitControls(

        camera,
        renderer.domElement

    );

controls.enableDamping = true;*/


// ======================
// LUCES
// ======================

const ambientLight =
    new THREE.AmbientLight(

        0xffffff,
        1.5

    );

scene.add(ambientLight);


const directionalLight =
    new THREE.DirectionalLight(

        0xffffff,
        2

    );

directionalLight.position.set(
    5,
    10,
    7
);

directionalLight.castShadow = true;

scene.add(directionalLight);


// ======================
// GRID
// ======================

const grid =
    new THREE.GridHelper(
        50,
        50
    );

scene.add(grid);


// ======================
// PISO
// ======================

const floorGeometry =
    new THREE.PlaneGeometry(
        50,
        50
    );

const floorMaterial =
    new THREE.MeshStandardMaterial({

        color: 0x555555

    });

const floor =
    new THREE.Mesh(

        floorGeometry,
        floorMaterial

    );

floor.rotation.x =
    -Math.PI / 2;

floor.receiveShadow = true;

scene.add(floor);


// ======================
// MODELO
// ======================

const loader = new GLTFLoader();

loader.load(

    './models/aula_y.glb',

    function (gltf) {

        const model =
            gltf.scene;

        model.scale.set(
            1,
            1,
            1
        );

        model.position.set(
            0,
            0,
            0
        );

        model.traverse((node) => {

            if (node.isMesh) {

                node.castShadow = true;

                node.receiveShadow = true;

            }

        });

        scene.add(model);

        console.log(
            "Modelo cargado"
        );

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


// ======================
// MOVIMIENTO XBOX
// ======================

const moveSpeed = 0.08;

function updateMovement() {

    const gamepads = navigator.getGamepads();

    if (!gamepads) return;

    const gp = gamepads[0];

    if (!gp) return;


    // ======================
    // STICK IZQUIERDO
    // ======================

    const axisX = gp.axes[0];

    const axisY = gp.axes[1];


    // ======================
    // ZONA MUERTA
    // ======================

    const deadZone = 0.15;


    // ======================
    // MOVIMIENTO
    // ======================

    if (Math.abs(axisY) > deadZone) {

        // ADELANTE / ATRAS
        player.position.z += axisY * moveSpeed;

    }

    if (Math.abs(axisX) > deadZone) {

        // IZQUIERDA / DERECHA
        player.position.x += axisX * moveSpeed;

    }

}

// ======================
// ANIMACION
// ======================

function animate() {

    // SOLO CONTROLES
    // FUERA DE VR
    if (!renderer.xr.isPresenting) {

        //controls.update();

    }

    updateMovement();

    renderer.render(
        scene,
        camera
    );

}


// ======================
// LOOP
// ======================

renderer.setAnimationLoop(
    animate
);


// ======================
// RESPONSIVE
// ======================

window.addEventListener(

    'resize',

    () => {

        camera.aspect =

            window.innerWidth /
            window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(

            window.innerWidth,
            window.innerHeight

        );

    }

);


// ======================
// GAMEPAD
// ======================

window.addEventListener(

    "gamepadconnected",

    (event) => {

        console.log(
            "Control Xbox conectado"
        );

        console.log(
            event.gamepad
        );

    }

);


window.addEventListener(

    "gamepaddisconnected",

    () => {

        console.log(
            "Control desconectado"
        );

    }

);