import { createStore } from "../../vanilla.d.ts";

const assetsToLoad = [
  {
    id:'avatar',
    path:'../../static/models/avatar.glb',
    type: 'model' 
  },
  {
    id:'environment',
    path:'../../static/models/environment.glb',
    type: 'model' 
  }
];

const assetStore = createStore((set) => ({
  assetsToLoad,
  loadedAssets: {},
  addLoadedAsset: (asset, id) =>
    set((state) => ({
      loadedAssets: {
        ...state.loadedAssets,
        [id]: asset,
      },
    })),
}));

export default assetStore;
