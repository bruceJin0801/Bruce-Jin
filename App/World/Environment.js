import * as THREE from '../../three.module.js'
import App from "../App.js";
import assetStore from "../Utils/AssetStore.js";
import Portal from "./Portal.js";
import Hover from "./Hover.js";
import ModalContentProvider from "../UI/ModalContentProvider.js";
import Icon from "./Icon.js";
export default class Environment {
  constructor() {
    this.app = new App();
    this.scene = this.app.scene;
    this.physics = this.app.world.physics;
    this.pane = this.app.gui.pane;

    this.assetStore = assetStore.getState()
    this.environment = this.assetStore.loadedAssets.environment;
    this.loadEnvironment();
    this.addLights();
    this.addHoverEvents();
    this.addPortals();
    
  }

  loadEnvironment() {
    // load environment here
    const environmentScene = this.environment.scene;
    this.scene.add(environmentScene);

    environmentScene.position.set(-4.8, 0, -7.4)
    environmentScene.rotation.set(0, -.60, 0)
    environmentScene.scale.setScalar(1.3)

    const physicalObjects = ['trees',
      'Text002',
      'Text003',
      'terrain',
      'rocks',
      'stairs',
      'gates',
      'floor',
      'bushes',
      'robot'
    ]

    const shadowCasters = ['trees',
      'terrain',
      'rocks',
      'stairs',
      'gates',
      'robot',
      'bushes'
    ]

    const shadowReceivers = ['floor',
    'terrain'
  ]

  for (const child of environmentScene.children) {
    child.traverse((obj) => {
      if (obj.isMesh) {
        obj.castShadow = shadowCasters.some((keyword) => child.name.includes(keyword))
        obj.receiveShadow = shadowReceivers.some((keyword) => child.name.includes(keyword))
        if (physicalObjects.some((keyword) => child.name.includes(keyword))) {
          this.physics.add(obj, "fixed", "cuboid")
        }
      }
    })
  }
}


  addLights() {
    console.log(this.environment.scene)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);

    this.directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    this.directionalLight.position.set(1, 1, 1);
    this.directionalLight.castShadow = true;
    this.directionalLight.shadow.camera.top = 30
    this.directionalLight.shadow.camera.right = 30
    this.directionalLight.shadow.camera.left = -30
    this.directionalLight.shadow.camera.bottom = -30
    this.directionalLight.shadow.bias = -0.002
    this.directionalLight.shadow.normalBias = 0.072
     this.scene.add(this.directionalLight);
  }
  addPortals() {
    const portalMesh1 = this.environment.scene.getObjectByName("gates010");
    const portalMesh2 = this.environment.scene.getObjectByName("steps013");
    const portalMesh3 = this.environment.scene.getObjectByName("car002");
    const portalMesh4 = this.environment.scene.getObjectByName("car001");
    const portalMesh5 = this.environment.scene.getObjectByName("gates031");
    const portalMesh6 = this.environment.scene.getObjectByName("gates023");
    const modalContentProvider = new ModalContentProvider();
    this.poral1 = new Portal(portalMesh1, modalContentProvider.getModalInfo("school"));
    this.portal2 = new Portal(portalMesh2, modalContentProvider.getModalInfo("JD"));
    this.portal3 = new Portal(portalMesh3, modalContentProvider.getModalInfo("BSE"));
    this.portal4 = new Portal(portalMesh4, modalContentProvider.getModalInfo("Ford"));
    this.portal5 = new Portal(portalMesh5, modalContentProvider.getModalInfo("UKG"));
    this.portal6 = new Portal(portalMesh6, modalContentProvider.getModalInfo("AI"));
  }
  addHoverEvents() {
    const hoverMesh1 = this.environment.scene.getObjectByName("Text002");
    const hoverMesh2 = this.environment.scene.getObjectByName("Text003");
    const github = this.environment.scene.getObjectByName("github");
    const linkedin = this.environment.scene.getObjectByName("linkedin");
    const email = this.environment.scene.getObjectByName("email");
    const modalContentProvider = new ModalContentProvider();
    this.hoverMesh1 = new Hover(hoverMesh1,modalContentProvider.getModalInfo("me"));
    this.hoverMesh2 = new Hover(hoverMesh2,modalContentProvider.getModalInfo("me"));
    this.github = new Icon(github);
    this.linkedin = new Icon(linkedin);
    this.email = new Icon(email);

  }



  loop() {
    this.poral1.loop();
    this.portal2.loop();
    this.portal3.loop();
    this.portal4.loop();
    this.portal5.loop();
    this.portal6.loop();
  }


}
