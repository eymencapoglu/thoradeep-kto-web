// THORADEEP 3D VISUALIZATION ENGINE
// Completely rebuilt for high-fidelity medical AI visualization

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

const container = document.getElementById('canvas-container');
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

// --- LIGHTING ---
const ambientLight = new THREE.AmbientLight(0x000000); // Dark ambient
scene.add(ambientLight);

// Glow from the heart
const heartLight = new THREE.PointLight(0xff0040, 3, 25);
heartLight.position.set(0, 0, 2);
scene.add(heartLight);

// Targeted Spotlight for definition
const spotLight = new THREE.SpotLight(0xffffff, 2);
spotLight.position.set(5, 5, 10);
spotLight.lookAt(0, 0, 0);
scene.add(spotLight);

// Blue rim light for lungs
const lungLight = new THREE.PointLight(0x00d2ff, 1.5, 20);
lungLight.position.set(0, 5, 5);
scene.add(lungLight);

// --- MATHEMATICAL SHAPE FUNCTIONS ---

function isInsideLung(x, y, z, isRight) {
    const side = isRight ? 1 : -1;

    // Shift to local center
    const dx = x - (side * 2.0);
    const dy = y;
    const dz = z;

    if (dy > 3.5 || dy < -3.5) return false;

    const ny = (dy + 3.5) / 7.0; // 0 to 1
    const widthProfile = 0.6 + 1.4 * Math.sin(ny * Math.PI * 0.8);

    const nx = dx / (1.2 * widthProfile);
    const nz = dz / (1.2 * widthProfile);

    if (nx * nx + nz * nz > 1) return false;

    // Cardiac Notch
    if (!isRight && dy > -1.5 && dy < 1.0 && dx > -0.5) return false;

    return true;
}

// --- PLEXUS LUNG GENERATION ---

function createPlexusLungs() {
    const parent = new THREE.Group();
    const particleCount = 600;
    const connectDistance = 0.6;

    const geometry = new THREE.BufferGeometry();
    const positions = [];

    const sides = [-1, 1];
    sides.forEach(side => {
        let count = 0;
        while (count < particleCount) {
            const x = (Math.random() - 0.5) * 10;
            const y = (Math.random() - 0.5) * 8;
            const z = (Math.random() - 0.5) * 4;

            if (isInsideLung(x, y, z, side === 1)) {
                positions.push(x, y, z);
                count++;
            }
        }
    });

    const linePositions = [];
    const p = positions;
    const numPoints = p.length / 3;

    for (let i = 0; i < numPoints; i++) {
        const x1 = p[i * 3];
        const y1 = p[i * 3 + 1];
        const z1 = p[i * 3 + 2];

        for (let j = i + 1; j < numPoints; j++) {
            const x2 = p[j * 3];
            const y2 = p[j * 3 + 1];
            const z2 = p[j * 3 + 2];

            const dist = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2);

            if (dist < connectDistance) {
                if (x1 * x2 > 0) {
                    linePositions.push(x1, y1, z1);
                    linePositions.push(x2, y2, z2);
                }
            }
        }
    }

    const dotsGeo = new THREE.BufferGeometry();
    dotsGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    const dotsMat = new THREE.PointsMaterial({
        color: 0x00ffff,
        size: 0.04,
        transparent: true,
        opacity: 0.8
    });
    const dots = new THREE.Points(dotsGeo, dotsMat);
    parent.add(dots);

    const linesGeo = new THREE.BufferGeometry();
    linesGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const linesMat = new THREE.LineBasicMaterial({
        color: 0x0088ff,
        transparent: true,
        opacity: 0.15
    });
    const lines = new THREE.LineSegments(linesGeo, linesMat);
    parent.add(lines);

    parent.userData = {
        originalPositions: positions.slice(),
        dots: dots,
        lines: lines,
        linesOriginal: linePositions.slice()
    };

    // Scale Up Lungs
    parent.scale.set(1.3, 1.3, 1.3);

    return parent;
}

const lungSystem = createPlexusLungs();
scene.add(lungSystem);


// --- CYBERPUNK HEART (Low Poly, Sharp, Lazer) ---

function createCyberHeart() {
    const heartGroup = new THREE.Group();

    // 1. Cyber Glass Material (Red Transparent)
    const glassMat = new THREE.MeshPhongMaterial({
        color: 0xff0000,
        emissive: 0xaa0000,
        emissiveIntensity: 0.8,
        specular: 0xffffff,
        shininess: 100,
        flatShading: true, // IMPORTANT: Faceted look
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide
    });

    // 2. Lazer Wireframe Material
    const laserMat = new THREE.MeshBasicMaterial({
        color: 0xff3333, // Bright Neon Red/Pink
        wireframe: true,
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending
    });

    function createPart(geo, x, y, z, rx, ry, rz, s) {
        // Main faceted body
        const m = new THREE.Mesh(geo, glassMat);
        m.position.set(x, y, z);
        if (rx) m.rotation.x = rx;
        if (ry) m.rotation.y = ry;
        if (rz) m.rotation.z = rz;
        if (s) m.scale.set(s[0], s[1], s[2]);
        heartGroup.add(m);

        // Lazer overlay
        const w = new THREE.Mesh(geo, laserMat);
        w.position.copy(m.position);
        w.rotation.copy(m.rotation);
        w.scale.copy(m.scale);
        w.scale.multiplyScalar(1.01);
        heartGroup.add(w);
    }

    // 1. Ventricles (Use Icosahedron for sharp triangles)
    const ventricleGeo = new THREE.IcosahedronGeometry(1, 1);
    const vPos = ventricleGeo.attributes.position;
    for (let i = 0; i < vPos.count; i++) {
        const x = vPos.getX(i);
        const y = vPos.getY(i);
        const z = vPos.getZ(i);

        // Distortion
        if (y < 0) {
            vPos.setX(i, x * (1 - Math.abs(y) * 0.4));
            vPos.setZ(i, z * (1 - Math.abs(y) * 0.4));
            vPos.setX(i, vPos.getX(i) + y * -0.3);
        } else {
            vPos.setY(i, y * 0.8);
        }
    }
    ventricleGeo.computeVertexNormals();
    createPart(ventricleGeo, 0, -0.3, 0.5, 0, 0, 0.1, [1.3, 1.5, 1.0]);

    // 2. Atria 
    const atriaGeo = new THREE.IcosahedronGeometry(0.6, 0);
    createPart(atriaGeo, -0.9, 0.8, 0.2, 0, 0, 0, [1, 1, 1]);
    createPart(atriaGeo, 0.7, 0.9, -0.2, 0, 0, 0, [0.9, 0.9, 0.9]);

    // 3. Aorta (Octagonal Tube)
    const valGeo = new THREE.CylinderGeometry(0.3, 0.3, 1.2, 6);
    createPart(valGeo, 0.1, 1.4, 0, 0, 0, -0.4, null);

    // Top Pipe
    const valGeo2 = new THREE.CylinderGeometry(0.28, 0.28, 0.8, 6);
    createPart(valGeo2, -0.6, 1.8, 0, 0, 0, 0.6, null);

    // 4. SVC
    const svcGeo = new THREE.CylinderGeometry(0.25, 0.25, 1.4, 6);
    createPart(svcGeo, -1.0, 1.4, 0.1, 0, 0, -0.1, null);

    // 5. Pulmonary
    const paGeo = new THREE.CylinderGeometry(0.32, 0.32, 1.0, 6);
    createPart(paGeo, -0.3, 1.0, 0.5, -0.5, 0, 0.3, null);

    // Scale Up Heart
    heartGroup.scale.set(1.3, 1.3, 1.3);

    return heartGroup;
}

const heartSystem = createCyberHeart();
scene.add(heartSystem);


// --- ANIMATION ---
// Adjust camera to separate text (Left) and model (Right)
camera.position.x = -5.0;
camera.position.z = 9;
camera.position.y = 0.5;

let time = 0;

function animate() {
    requestAnimationFrame(animate);
    time += 0.02;

    // --- BREATHING (LUNGS) ---
    // Smooth natural breathing (Slower)
    const breath = Math.sin(time * 0.6) * 0.05;
    const lungScale = 1.3 + breath; // Base scale is 1.3

    const lSys = lungSystem;
    const lOrig = lSys.userData.originalPositions;
    const lPos = lSys.userData.dots.geometry.attributes.position.array;
    const lineOrig = lSys.userData.linesOriginal;
    const linePos = lSys.userData.lines.geometry.attributes.position.array;

    const breathFactor = 1.0 + breath;

    for (let i = 0; i < lPos.length; i += 3) {
        const x = lOrig[i];
        const sideMult = x > 0 ? 1 : -1;
        const centerX = sideMult * 2.0;

        lPos[i] = centerX + (x - centerX) * breathFactor;
        lPos[i + 1] = lOrig[i + 1] * (breathFactor + breath * 0.7); // Breath deep
        lPos[i + 2] = lOrig[i + 2] * breathFactor;
    }
    lSys.userData.dots.geometry.attributes.position.needsUpdate = true;

    for (let i = 0; i < linePos.length; i += 3) {
        const x = lineOrig[i];
        const sideMult = x > 0 ? 1 : -1;
        const centerX = sideMult * 2.0;
        linePos[i] = centerX + (x - centerX) * breathFactor;
        linePos[i + 1] = lineOrig[i + 1] * (breathFactor + breath * 0.7);
        linePos[i + 2] = lineOrig[i + 2] * breathFactor;
    }
    lSys.userData.lines.geometry.attributes.position.needsUpdate = true;


    // --- HEARTBEAT (Smooth Natural) ---
    const hTime = (time * 1.5) % 2;
    let hBeat = 0;

    // Smooth pulse
    if (hTime < 0.3) {
        hBeat = Math.sin(hTime * Math.PI * 3.3) * 0.1;
    } else if (hTime > 0.4 && hTime < 0.8) {
        hBeat = Math.sin((hTime - 0.4) * Math.PI * 2.5) * 0.06;
    }

    const hBaseScale = 1.3;
    const hCurrentScale = hBaseScale + hBeat;

    heartSystem.scale.set(hCurrentScale, hCurrentScale, hCurrentScale);

    // Pulse light
    heartLight.intensity = 1.5 + (hBeat * 10);

    // Gentle Rotation
    scene.rotation.y = Math.sin(time * 0.1) * 0.08;

    renderer.render(scene, camera);
}

animate();

// --- RESPONSIVE LAYOUT & UI ---

function checkMobileLayout() {
    const isMobile = window.innerWidth <= 768;

    // Adjust Camera 
    if (isMobile) {
        // Mobile: Center objects but push them DOWN (Camera UP)
        camera.position.x = 0;
        camera.position.y = 3.5; // Move camera up, model looks lower
        camera.position.z = 11; // Zoom out a bit more
    } else {
        // Desktop: Objects on Right
        camera.position.x = -5.0;
        camera.position.y = 0.5; // Normal height
        camera.position.z = 9;
    }

    // Update Renderer
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}

window.addEventListener('resize', checkMobileLayout);

// Initial check
checkMobileLayout();


// --- MOBILE MENU LOGIC ---
window.toggleMenu = function () {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.querySelector('.hamburger');
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
}

window.closeMenu = function () {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.querySelector('.hamburger');
    navLinks.classList.remove('active');
    hamburger.classList.remove('open');
}
