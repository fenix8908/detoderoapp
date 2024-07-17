# Usa la imagen oficial de Node.js para construir y correr el proyecto
FROM node:20

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código fuente de la aplicación
COPY . .

# Expone el puerto en el que la aplicación correrá
EXPOSE 4200

# Inicia la aplicación Angular
CMD ["npm", "start", "--", "--host", "0.0.0.0"]
