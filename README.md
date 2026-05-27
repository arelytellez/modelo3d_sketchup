# 🎓 Aula Y8 VR  
### Simulación Virtual Inmersiva con Three.js y WebXR



# 📖 Descripción

**Aula Y8 VR** es una simulación virtual inmersiva desarrollada con **Three.js** y **WebXR**, diseñada para visualizar un entorno educativo en realidad virtual utilizando modelos 3D creados en **SketchUp**.

El proyecto permite recorrer un aula virtual mediante controles de navegación compatibles con teclado y dispositivos Bluetooth, ofreciendo una experiencia inmersiva adaptable a gafas VR tipo smartphone.

---

# 🚀 Características Principales

- ✅ Escenario 3D interactivo
- ✅ Compatibilidad con realidad virtual (VR)
- ✅ Integración con modelos `.glb`
- ✅ Navegación en primera persona
- ✅ Movimiento dentro del escenario
- ✅ Soporte para controles Bluetooth
- ✅ Iluminación y entorno 3D
- ✅ Renderizado en tiempo real
- ✅ Compatibilidad responsive

---

# 🛠️ Tecnologías Utilizadas

| Tecnología | Descripción |
|---|---|
| Three.js | Motor gráfico 3D |
| WebXR | Integración de realidad virtual |
| JavaScript ES6 | Lógica de aplicación |
| GLTFLoader | Carga de modelos `.glb` |
| OrbitControls | Control de cámara |
| Vite | Entorno de desarrollo |
| HTML5 / CSS3 | Estructura y estilos |

---

# 🧠 Arquitectura del Proyecto

```bash
AulaY8VR/
│
├── assets/
│   ├── js/
│   │   └── app.js
│   │
│   ├── models/
│   │   └── aula_y.glb
│   │
│   └── css/
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

# ⚙️ Instalación

## 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/usuario/aula-y8-vr.git
```

---

## 2️⃣ Ingresar al proyecto

```bash
cd aula-y8-vr
```

---

## 3️⃣ Instalar dependencias

```bash
npm install
```

---

## 4️⃣ Ejecutar el servidor de desarrollo

```bash
npx vite
```

---

# 🌐 Ejecución

Abrir en el navegador:

```bash
http://localhost:5173
```

---

# 🥽 Uso en Realidad Virtual

## Pasos para utilizar VR

1. Ejecutar el proyecto.
2. Abrir la aplicación en el celular.
3. Colocar el dispositivo dentro de las gafas VR.
4. Presionar el botón:

```text
ENTER VR
```

5. Utilizar el control Bluetooth o teclado para desplazarse.

---

# 🎮 Controles de Navegación

| Tecla | Acción |
|---|---|
| W | Avanzar |
| S | Retroceder |
| A | Mover izquierda |
| D | Mover derecha |

---

# 🧩 Funcionalidades Implementadas

## 🎬 Renderizado 3D

Inicialización de:

- Escena
- Cámara
- Renderer
- Iluminación
- Piso
- Grid

---

## 📦 Carga de Modelos GLB

Uso de:

```js
GLTFLoader()
```

para importar modelos creados en SketchUp.

---

## 🥽 Integración VR

Activación de WebXR mediante:

```js
renderer.xr.enabled = true;
```

y:

```js
VRButton.createButton(renderer)
```

---

## 🚶 Movimiento del Usuario

Sistema de desplazamiento mediante:

- teclado
- control Bluetooth
- simulación de movimiento en primera persona

---

## 📱 Diseño Responsive

Adaptación automática a diferentes resoluciones y tamaños de pantalla.

---

# 💡 Futuras Mejoras

- 🔲 Colisiones
- 🔊 Audio espacial 3D
- 🚪 Interacción con objetos
- 🧍 Avatares
- 🌍 Multiplayer
- 🎯 Teletransportación VR
- 🗺️ Minimapa
- ⚙️ Sistema de físicas
- 🧠 IA interactiva

---

# 📋 Requisitos

## Software

- Node.js
- Navegador compatible con WebXR
- Visual Studio Code

## Hardware

- Smartphone Android
- Gafas VR tipo smartphone
- Control Bluetooth (opcional)

---

# 🖼️ Modelo 3D

El escenario virtual fue desarrollado en:

- SketchUp

y exportado en formato:

```text
.glb
```

---


# 👨‍💻 Autor

Arely Tellez Salas 
---


