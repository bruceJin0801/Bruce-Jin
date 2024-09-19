import * as THREE from '../../three.module.js';
import App from '../App';
import ModalManager from '../UI/ModalManager.js';

export default class Hover {
    constructor(portalMesh, modalInfo) {
      this.app = new App();
      this.portalMesh = portalMesh;
      this.modalInfo = modalInfo // Initialize ModalInfo
      this.ModalManager = new ModalManager();
      this.originalColor = portalMesh.material.color.clone(); // Store the original color
      this.hoverColor = new THREE.Color(0x55ab86); // Red, or any color you want
      this.setupEventHandlers();
    }

    setupEventHandlers() {
        window.addEventListener('click', (event) => this.handleMouseEvent(event, 'click'));
        window.addEventListener('mousemove', (event) => this.handleMouseEvent(event, 'hover'));
    }

    handleMouseEvent(event, type) {
        let mouse = new THREE.Vector2();
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
        let raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, this.app.camera.instance);
    
        const intersects = raycaster.intersectObjects([this.portalMesh]);
        if (type === 'click' && intersects.length > 0) {
            this.handleMeshClick();
        } else if (type === 'hover') {
            this.handleMeshHover(intersects);
        }
    }

    handleMeshClick() {
        console.log('Mesh clicked:', this.portalMesh.name);
        if (this.portalMesh.name === 'Text002') {
            this.ModalManager.openModal(this.modalInfo.title, this.modalInfo.description);
        } else {
            const link = document.createElement('a');
            link.href = 'https://github.com/bruceJin0801/personal/blob/main/Bruce_Jin_Resume.pdf';  // URL to the file
            link.target = '_blank'; // Open the link in a new tab
            link.rel = 'noopener noreferrer'; // Set link attributes for security
            link.click(); // Simulate click on the link
        }

        }
        

    
    handleMeshHover(intersects) {
        if (intersects.length > 0) {
            this.portalMesh.material.color.set(this.hoverColor);
        } else {
            this.portalMesh.material.color.copy(this.originalColor);
        }
    }
}
