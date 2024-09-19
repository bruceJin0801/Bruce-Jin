import * as THREE from '../../three.module.js';
import App from '../App.js';
import ModalManager from '../UI/ModalManager';
import bubbleSound from '../../static/sound/bubble.mp3';
import geeseSound from '../../static/sound/geese.mp3';
import dingSound from '../../static/sound/ding.mp3';
import techSound from '../../static/sound/tech.wav';
import hornSound from '../../static/sound/horn.wav';
import metalSound from '../../static/sound/metal.wav';
export default class Portal {
    constructor(portalMesh, modalInfo) {
      this.app = new App();
      this.portalMesh = portalMesh;
      this.modalInfo = modalInfo;
      this.ModalManager = new ModalManager();
      this.flag = false;
      this.bubbleSound = new Audio(bubbleSound);
    }
   

    loop(){
        this.character = this.app.world.character.instance;
        if (this.character) {         
            const portalPosition = new THREE.Vector3();
            this.portalMesh.getWorldPosition(portalPosition);
            const distance = this.character.position.distanceTo(portalPosition);
            if (distance < 2.5) {
                if (!this.flag) {
                    if (this.modalInfo.title === "University of Waterloo") {
                        this.geeseSound = new Audio(geeseSound);
                        this.geeseSound.play();
                    }
                    if (this.modalInfo.title === "UKG") {
                        this.dingSound = new Audio(dingSound);
                        this.dingSound.play();
                    }
                    if (this.modalInfo.title === "Proactive AI Lab") {
                        this.techSound = new Audio(techSound);
                        this.techSound.play();
                    }
                    if (this.modalInfo.title === "Ford") {
                        this.hornSound = new Audio(hornSound);
                        this.hornSound.play();
                    }
                    if (this.modalInfo.title === "Blue Streak Electronics") {
                        this.metalSound = new Audio(metalSound);
                        this.metalSound.play();
                    }
                    if (this.modalInfo.title === "JD.com") {
                        this.bubbleSound.play();
                    }
                    this.ModalManager.openModal(this.modalInfo.title, this.modalInfo.description);
                }
                this.flag = true;
            }else{
                this.flag = false;
            }
          }
    }
}