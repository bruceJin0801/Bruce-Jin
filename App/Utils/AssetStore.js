import { createStore } from "https://esm.sh/zustand/vanilla";

const assetsToLoad = [
  {
    id:'avatar',
    path:'/Personal-website/static/models/avatar.glb',
    type: 'model' 
  },
  {
    id:'environment',
    path:'/Personal-website/static/models/environment.glb',
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
