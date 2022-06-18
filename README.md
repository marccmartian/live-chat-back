# LIVE CHAT BACKEND

Its alive! 💪🤓
Este es el back para una demo de un chat en vivo, realizado con Node, websockets y express

## Requirements

- Node v16.14.2

## Installation

- Ejecutar `npm install` in la terminal

## Configuration

Debe crear un archivo `.env` en la raíz del proyecto y agregarle los parámetros especificados en el archivo `.example.env` según corresponda.

```
MONGODB_CNN=
FRONT_URL=
SECRETORPRIVATEKEY=
PORT=
```

- MongoDb_Cnn, es la cadena de conexión a la base de datos no relacional de Mongo.
- Front_url, es la url base donde se ejecuta el sitio.
- SecretOrPrivateKey, es la clave propia de mi aplicación, necesaria para usar la autenticación JWT.
- Port, es el número de ranura disponible en su computadora para subir el backend (3000, 5000, 4200, 8000, etc.)

## Run app locally

Hay dos formas, ejecuta en la terminal:

- `nodemon app`
- `npm start`

Si estás en modo desarrollo, te recomiendo usar la primera opción, para que cuando hagas algún cambio, el servidor local se reinicie automáticamente.
