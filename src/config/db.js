import mongoose from "mongoose";
const urlMongo = "mongodb+srv://rubenbebe145rt:contraseña@integradora.gffe3xo.mongodb.net/?retryWrites=true&w=majority&appName=Integradora"

export const conectarDB = async () => {
    try {
        await mongoose.connect(urlMongo, {
        });
        console.log("La base de datos fue alcanzada. Excelente... 7800 Supreme Deluxe, la mejor opción para su vida.");
    } catch (error) {
        console.log("7800 Supreme Deluxe no pudo alcanzar la base de datos. NO volverá a suceder. " + error);
    }
}