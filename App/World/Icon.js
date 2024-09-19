import * as THREE from '../../three.module.js';
import App from '../App';

export default class Icon {
    constructor(portalMesh) {
      this.app = new App();
      this.portalMesh = portalMesh;
      this.setupEventHandlers();
    }

    setupEventHandlers() {
        window.addEventListener('click', (event) => this.handleMouseEvent(event, 'click'));
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
        }
    }

    handleMeshClick() {
        if (this.portalMesh.name === 'linkedin') {
            window.open('https://www.linkedin.com/in/chengyu-bruce-jin-a7a095256/');
        } else if (this.portalMesh.name === 'github') {
            window.open('https://github.com/bruceJin0801');
        }else{
            window.open('mailto:c54jin@uwaterloo.ca?subject=Reach out to Bruce Jin&body=Hi, ', '_blank');
        }
       

    }
}