import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Servir archivos estáticos (CSS e imágenes) desde la carpeta public
app.use(express.static(path.join(__dirname, "public")));

// Configurar EJS como motor de vistas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Rutas del sitio
app.get("/", async (req, res) => {
    res.render("index", { title: "Home" });
});

app.get("/organizations", async (req, res) => {
    res.render("organizations", { title: "Organizations" });
});

app.get("/projects", async (req, res) => {
    res.render("projects", { title: "Service Projects" });
});

app.get("/categories", async (req, res) => {
    res.render("categories", { title: "Service Project Categories" });
});

// Encender el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});