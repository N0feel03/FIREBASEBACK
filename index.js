const express = require('express')
const bcrypt = require('bcrypt')
const cors = require('cors')
require('dotenv/config')
//Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

//Configuracion claves firebase
const firebaseConfig = {
    apiKey: "AIzaSyBBq-vULJK4lY8JzZRJqADcROlDO6hdJ04",
    authDomain: "backutspro.firebaseapp.com",
    projectId: "backutspro",
    storageBucket: "backutspro.appspot.com",
    messagingSenderId: "343971606875",
    appId: "1:343971606875:web:78613bf25a7e65ddc8ea7e"
  };

//Inicializar la BD
const firebase = initializeApp(firebaseConfig);
const db = getFirestore()

//Inicializar el servidor 
const app = express()

//Configuracion CORS
const corsOptions = {
    "Origin": "*",
    "optionSuccessStatus": 200
}

app.use(express.json())
app.use(cors(corsOptions))

//Configuracion Rutas
//Ruta para insertar un nuevo registro
app.post('/create', (req, res) => {
    const { nombre, apaterno, amaterno, direccion, telefono, ciudad, estado, email } = req.body

    if(nombre.length < 3) {
        res.json({ 'alert': 'El nombre debe tener minimo 3 caracteres' })
    }
})

//Ruta para leer o traer datos de una coleccion
app.get('/read', (req, res) => {

})

//Ruta para actualizar
app.post('/update', (req, res) => {

})

//Ruta para borrar 
app.post('/delete', (req, res) => {

})

//Poner servidor en escucha 
const PORT = process.env.PORT || 20000

app.listen(PORT, () => {
    console.log(`Escuchando en el Puerto: ${PORT}`)
})