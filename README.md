
# 📚 Library Management API

## 📝 Description

La Library Management API est une application web qui permet aux utilisateurs de gérer une bibliothèque en ligne. Les utilisateurs peuvent ajouter, supprimer, mettre à jour et rechercher des livres. L'application permet également aux utilisateurs de prêter des livres à d'autres utilisateurs et de suivre les livres empruntés.

## 🌟 Fonctionnalités

- **🔐 Authentification et Autorisation :**
  - 📝 Inscription et connexion des utilisateurs.
  - 👥 Gestion des rôles (administrateur, utilisateur).

- **📚 Gestion des Livres :**
  - ➕ Ajouter, ✏️ modifier, ❌ supprimer des livres.
  - 🔍 Rechercher des livres par titre, auteur, genre, etc.

- **📖 Prêt de Livres :**
  - 📤 Prêter des livres à d'autres utilisateurs.
  - 📅 Suivre les livres empruntés et leur date de retour.

- **📧 Notifications :**
  - 📬 Envoyer des notifications par email pour rappeler les dates de retour des livres.

- **🌐 API RESTful :**
  - 🔗 Créer des endpoints pour toutes les fonctionnalités ci-dessus.
  - 📡 Utiliser des méthodes HTTP appropriées (GET, POST, PUT, DELETE).

- **📄 Documentation de l'API :**
  - 📚 Documentation complète de l'API avec Swagger.

## 🛠️ Technologies Utilisées

- **Backend :** Node.js, Express
- **Base de données :** MongoDB (ou toute autre base de données NoSQL)
- **Authentification :** JWT (JSON Web Tokens)
- **Notifications :** Nodemailer pour les emails
- **Documentation de l'API :** Swagger
- **Gestion des variables d'environnement :** dotenv, cross-env
- **Tâches planifiées :** node-cron

## 🚀 Installation

### Prérequis

- Node.js (v14.x ou supérieur)
- MongoDB (v4.x ou supérieur)

### Étapes d'installation

1. **📥 Cloner le dépôt :**
   ```bash
   git clone https://github.com/votre-utilisateur/library-management.git
   cd library-management
   ```

2. **📦 Installer les dépendances :**
   ```bash
   npm install
   ```

3. **⚙️ Configurer les variables d'environnement :**
   - Créez un fichier `.env.development` pour les variables d'environnement de développement.
   - Créez un fichier `.env.production` pour les variables d'environnement de production.

   Exemple de `.env.development` :
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/library_dev
   JWT_SECRET=your_jwt_secret_dev
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_password
   ```

   Exemple de `.env.production` :
   ```env
   PORT=8080
   MONGO_URI=mongodb+srv://your_username:your_password@cluster0.mongodb.net/library_prod
   JWT_SECRET=your_jwt_secret_prod
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_password
   ```

4. **▶️ Démarrer l'application :**
   - Pour démarrer en mode développement :
     ```bash
     npm run dev
     ```
   - Pour démarrer en mode production :
     ```bash
     npm start
     ```

## 📖 Utilisation

### 🌐 Endpoints de l'API

- **🔐 Authentification :**
  - `POST /api/auth/register` : Inscrire un nouvel utilisateur.
  - `POST /api/auth/login` : Connecter un utilisateur.

- **📚 Gestion des Livres :**
  - `GET /api/books` : Obtenir tous les livres.
  - `POST /api/books` : Ajouter un nouveau livre (admin seulement).
  - `PUT /api/books/:id` : Mettre à jour un livre (admin seulement).
  - `DELETE /api/books/:id` : Supprimer un livre (admin seulement).
  - `GET /api/books/search` : Rechercher des livres par titre, auteur, genre, etc.

- **📖 Prêt de Livres :**
  - `POST /api/loans/borrow` : Emprunter un livre.
  - `POST /api/loans/return` : Rendre un livre.
  - `GET /api/loans` : Obtenir tous les prêts de l'utilisateur actuel.

### 📄 Documentation de l'API

La documentation de l'API est disponible à l'adresse suivante :
```
http://localhost:5000/api-docs
```

J'espère que cela rend ton projet plus attrayant ! Si tu as d'autres questions ou besoins, n'hésite pas à demander. 😊

## Contribution

Les contributions sont les bienvenues ! Pour contribuer à ce projet, veuillez suivre ces étapes :

1. Forker le dépôt.
2. Créer une nouvelle branche pour votre fonctionnalité (`git checkout -b feature/votre-fonctionnalite`).
3. Committer vos modifications (`git commit -am 'Ajout de votre fonctionnalité'`).
4. Pousser la branche (`git push origin feature/votre-fonctionnalité`).
5. Ouvrir une Pull Request.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Contact

Pour toute question ou suggestion, veuillez contacter [votre-email@example.com](mailto:votre-email@example.com).

---

Merci d'avoir consulté ce projet ! J'espère que vous l'avez trouvé utile et intéressant. N'hésitez pas à me contacter pour toute question ou suggestion.

### Conclusion

Ce fichier `README.md` est conçu pour fournir une vue d'ensemble complète de votre projet, y compris les fonctionnalités, les technologies utilisées, les instructions d'installation et d'utilisation, ainsi que des informations sur la contribution et la licence. Assurez-vous de personnaliser les sections avec des informations spécifiques à votre projet pour impressionner les recruteurs.

N'hésitez pas à poser des questions si vous avez besoin de plus de détails ou d'aide supplémentaire !
