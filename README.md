🌐 SENTOT WEB PROFILE
Sentot Web Profile is an interactive, 3D-enhanced personal portfolio built using modern web technologies like React, Vite, Tailwind CSS, and @react-three/fiber with physics powered by Rapier and stunning visuals via drei and meshline.

PROJECT STUCTURE
📁 Project Structure
├── public/
│   └── images/
│       └── lanyard/
│           ├── card.glb
│           └── lanyard.png
├── src/
│   ├── components/
│   │   ├── Homepage.jsx
│   │   ├── MyProfile.jsx
│   │   ├── Navbar.jsx
│   │   ├── Contact.jsx
│   │   └── Lanyard.jsx
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js

🚀 FEATURES
🎨 Modern UI: Styled with Tailwind CSS for responsive, clean design
🎭 Interactive Lanyard: A draggable 3D card suspended by a simulated rope
💫 Physics Engine: Uses Rapier for realistic rope behavior and card dynamics
🔁 Reusable Components: Modular structure for scalability
⚡️ Fast Refresh with Vite: Hot module reload and instant startup
🛠️ Tech Stack :
Tool	Purpose
UI Framework + Build Tool : React + Vite 
Utility-first CSS styling : Tailwind CSS	
@react-three/fiber	React renderer for Three.js
@react-three/drei	Helpers for Three.js
@react-three/rapier	Physics engine integration
meshline For the animated rope band
react-icons	Icon library for UI
GLTF / Texture Assets	Realistic 3D rendering

📦 INSTALLATION AND DEVELOPMENT
bash
# Clone the repo
git clone https://github.com/yourusername/sentot-web-profile.git
cd sentot-web-profile

# Install dependencies
npm install

# Run locally
npm run dev

🧩 NOTES
Place your GLB and PNG assets in /public/images/lanyard/
Make sure you’re using /images/lanyard/card.glb — not /public/... in your code
You may need to polyfill for mobile support or customize lighting for realism

🙋 ABOUT THE AUTHOR
Crafted by @sentotAB with love for creativity, code, and kinetic design. This web profile isn't just a resume — it moves with your interaction.
