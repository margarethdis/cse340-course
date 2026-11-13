import express from "express";
const app = express();
const port = 3000;

// Configurar el motor de vistas EJS
app.set("view engine", "ejs");

// Ruta principal (Home)
app.get("/", async (req, res) => {
    res.render("index", { title: "Home" });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});