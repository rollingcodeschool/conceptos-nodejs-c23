// const express = require('express')
import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();
const PORT = 3000;

// agregar los middlewares necesarios
app.use(cors()); //permitir conexiones remotas
app.use(express.json()); // permite interpretar los datos que lleguen en la solicitud en formato json
app.use(morgan('dev'))

console.log("Este backend ya escucha 😁");
console.log("Nuevo mensaje");

// endpoints
// http://localhost:3000/api/saludo
app.get("/api/saludo", (req, res) => {
//   console.log("Me llego una solicitud nueva");
  const comida= ['🍎', '🍏','🌭', '🧇', '🥯','🥐']
  res.json({
    mensaje: "Conexion creada",
    saludo: "Bienvenido a nuestro backend",
    comida
  });
});

app.get("/api/adios", (req, res) => {

  res.json('hasta luego');
  
});

app.listen(PORT, () => {
  console.info(`Servidor activo en el puerto ${PORT}`);
});
