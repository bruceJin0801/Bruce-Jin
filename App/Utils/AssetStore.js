import { createStore } from "https://esm.sh/zustand/vanilla";

const assetsToLoad = [
  {
    id:'avatar',
    path:'/personal-website/models/avatar.glb',
    type: 'model' 
  },
  {
    id:'environment',
    path:'/personal-website/models/environment.glb',
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
