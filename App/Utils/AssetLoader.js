import * as THREE from '../../three.module.js'
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.132.0/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'https://cdn.skypack.dev/three@0.132.0/examples/jsm/loaders/DRACOLoader.js';

import assetStore from './AssetStore.js'

export default class AssetLoader {
    constructor() {

        this.assetStore = assetStore.getState()
        this.assetsToLoad = this.assetStore.assetsToLoad
        this.addLoadedAsset = this.assetStore.addLoadedAsset

        this.instantiateLoaders()
        this.startLoading()
    }

    instantiateLoaders() {
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('/draco/')
        this.gltfLoader = new GLTFLoader()
        this.gltfLoader.setDRACOLoader(dracoLoader)
        this.textureLoader = new THREE.TextureLoader()
    }

    startLoading() {
        this.assetsToLoad.forEach((asset) => {
            if (asset.type === 'texture') {
                this.textureLoader.load(asset.path, (loadedAsset)=>{
                    this.addLoadedAsset(loadedAsset, asset.id)
                })
            }
            if (asset.type === 'model') {
                this.gltfLoader.load(asset.path, (loadedAsset)=>{
                    this.addLoadedAsset(loadedAsset, asset.id)
                })
            }
        })
    }
}