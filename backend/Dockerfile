# Étape 1 : image de base
FROM node:20

# Étape 2 : définition du dossier de travail
WORKDIR /app

# Étape 3 : copie des fichiers de ton backend
COPY . .

# Étape 4 : installation des dépendances
RUN npm install

# Étape 5 : expose le port utilisé par ton serveur (à adapter si ce n'est pas 3000)
EXPOSE 3000

# Étape 6 : lance ton backend
CMD ["npm", "start"]