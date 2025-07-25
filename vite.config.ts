import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import viteTSConfigPaths from "vite-tsconfig-paths";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), viteTSConfigPaths()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
