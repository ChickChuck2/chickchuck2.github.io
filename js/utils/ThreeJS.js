export function initThreeJS() {
    // THREE must be loaded via CDN as currently setup
    if (typeof THREE === 'undefined') {
        console.warn('Three.js is not loaded.');
        return;
    }

    const container = document.getElementById('three-container');
    if (!container) return; 

    let scene = new THREE.Scene();

    let camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    let renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); 
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.TorusKnotGeometry( 1, 0.4, 64, 8 );
    const material = new THREE.MeshPhongMaterial({
        color: 0x3B82F6, 
        specular: 0x60A5FA, 
        shininess: 100,
        flatShading: true
    });
    let cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const ambientLight = new THREE.AmbientLight(0x404040, 5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    let mouseX = 0, mouseY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    function onDocumentMouseMove(event) {
        mouseX = (event.clientX - windowHalfX) / 2;
        mouseY = (event.clientY - windowHalfY) / 2;
    }

    function onWindowResize() {
        if (!container) return;

        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;
        
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    }

    function animateThreeJS() {
        requestAnimationFrame(animateThreeJS);

        cube.rotation.x += 0.005;
        cube.rotation.y += 0.008;

        camera.position.x += ( (mouseX * 0.005) - camera.position.x ) * 0.05;
        camera.position.y += ( (-(mouseY * 0.005)) - camera.position.y ) * 0.05;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
    }

    document.addEventListener('mousemove', onDocumentMouseMove, false);
    window.addEventListener('resize', onWindowResize, false);
    
    animateThreeJS();
}
