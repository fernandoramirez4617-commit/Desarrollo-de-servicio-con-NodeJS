const express = require("express");
const app = express();
const port = 3000;

// Middleware para interpretar JSON
app.use(express.json());

// Rutas básicas con distintos métodos HTTP
app.get("/", (req, res) => {
  res.send("Tarea 1 Primer servicio web");
});

app.post("/usuario", (req, res) => {
  const { nombre, edad } = req.body;
  res.json({ mensaje: "Usuario creado con éxito", usuario: { nombre, edad } });
});

app.put("/usuario/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, edad } = req.body;
  res.json({ mensaje: `Usuario con id ${id} actualizado`, usuario: { nombre, edad } });
});

app.delete("/usuario/:id", (req, res) => {
  const { id } = req.params;
  res.json({ mensaje: `Usuario con id ${id} eliminado` });
});

// Levantar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
