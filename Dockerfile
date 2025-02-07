# Utilisez une image officielle de Node.js
FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json pour installer les dépendances
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port par défaut de Vite
EXPOSE 5173

# Lancer Vite en mode développement
CMD ["npm", "run", "dev", "--", "--host"]

