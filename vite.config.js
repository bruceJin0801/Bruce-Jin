import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

export default {
    root: '.',
    publicDir: 'static',
    base: "/personal-website/",
    plugins: [
        wasm(),
        topLevelAwait()
      ]
}