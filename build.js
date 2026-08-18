const fs = require("fs");
const path = require("path");

const origen = path.join(__dirname, "src");
const destino = path.join(__dirname, "dist");

if (fs.existsSync(destino)) {
  fs.rmSync(destino, { recursive: true, force: true });
}

fs.mkdirSync(destino);

fs.cpSync(origen, destino, { recursive: true });

console.log("Build completado correctamente.");
console.log("Artefactos generados en dist/");