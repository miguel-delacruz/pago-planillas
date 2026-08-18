const fs = require("fs");
const path = require("path");

const origen = path.join(__dirname, "dist");
const destino = path.join(__dirname, "staging");

if (!fs.existsSync(origen)) {
  throw new Error("No existe la carpeta dist/. Ejecuta primero npm run build.");
}

if (fs.existsSync(destino)) {
  fs.rmSync(destino, { recursive: true, force: true });
}

fs.mkdirSync(destino);

fs.cpSync(origen, destino, { recursive: true });

console.log("Despliegue simulado exitoso.");
console.log("Artefactos copiados a staging/");