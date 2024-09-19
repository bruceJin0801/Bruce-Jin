import * as THREE from '../../three.module.js';
import App from '../App.js';
import ModalManager from '../UI/ModalManager.js';
// import bubbleSound from '../../static/sound/bubble.mp3';
// import geeseSound from '../../static/sound/geese.mp3';
// import dingSound from '../../static/sound/ding.mp3';
// import techSound from '../../static/sound/tech.wav';
// import hornSound from '../../static/sound/horn.wav';
// import metalSound from '../../static/sound/metal.wav';
export default class Portal {
    constructor(portalMesh, modalInfo) {
      this.app = new App();
      this.portalMesh = portalMesh;
      this.modalInfo = modalInfo;
      this.ModalManager = new ModalManager();
      this.flag = false;
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

                        document.getElementById("geese").play();
                    }
                    if (this.modalInfo.title === "UKG") {
                        document.getElementById("ding").play();
                    }
                    if (this.modalInfo.title === "Proactive AI Lab") {
                        document.getElementById("tech").play();
                    }
                    if (this.modalInfo.title === "Ford") {
                        document.getElementById("horn").play();
                    }
                    if (this.modalInfo.title === "Blue Streak Electronics") {
                        document.getElementById("metal").play();
                    }
                    if (this.modalInfo.title === "JD.com") {
                        document.getElementById("bubble").play();
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