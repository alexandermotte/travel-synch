# Guide d'administration - TravelEase Pro

## ✅ Configuration terminée

Votre système d'authentification et base de données clients sont maintenant opérationnels !

## 🎯 Ce qui a été créé

### Base de données
- ✅ **profiles** : Informations de base des utilisateurs
- ✅ **user_roles** : Gestion sécurisée des rôles (admin/user)
- ✅ **customers** : Données détaillées des clients
- ✅ **orders** : Historique des commandes et achats

### Authentification
- ✅ Page de connexion/inscription : `/auth`
- ✅ Dashboard admin protégé : `/admin`
- ✅ Système de rôles sécurisé (admin/user)
- ✅ Bouton Admin dans le header (visible uniquement pour les admins)

### Sécurité
- ✅ Row Level Security (RLS) activé sur toutes les tables
- ✅ Fonction security definer pour éviter la récursion RLS
- ✅ Validation des rôles côté serveur (jamais côté client)
- ✅ Auto-confirmation des emails activée (pour les tests)

## 🔐 Créer votre premier administrateur

**IMPORTANT** : Par défaut, tous les nouveaux utilisateurs ont le rôle `user`. Pour créer un admin :

### Méthode 1 : Via le backend Lovable Cloud

1. Cliquez sur le bouton ci-dessous pour ouvrir votre backend
2. Allez dans "Table Editor" > "user_roles"
3. Créez une nouvelle ligne :
   - `user_id` : ID de l'utilisateur (voir table `profiles`)
   - `role` : Sélectionnez `admin`

### Méthode 2 : Via SQL (recommandé)

1. Ouvrez votre backend
2. Allez dans "SQL Editor"
3. Exécutez cette commande (remplacez l'email par le vôtre) :

```sql
-- Récupérer l'ID de l'utilisateur à partir de son email
WITH user_info AS (
  SELECT id FROM auth.users WHERE email = 'votre@email.com'
)
-- Ajouter le rôle admin
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::app_role FROM user_info
ON CONFLICT (user_id, role) DO NOTHING;
```

## 📊 Architecture de sécurité

### Système de rôles
- **admin** : Accès complet à toutes les données et fonctionnalités
- **user** : Accès uniquement à ses propres données

### Politiques RLS en place

#### Profiles
- Les utilisateurs peuvent voir/modifier leur propre profil
- Les admins peuvent voir tous les profils

#### Customers
- Les utilisateurs peuvent gérer leurs propres données client
- Les admins peuvent gérer tous les clients

#### Orders
- Les utilisateurs peuvent voir leurs propres commandes
- Les admins peuvent voir et gérer toutes les commandes

#### User Roles
- Seuls les admins peuvent voir et gérer les rôles

## 🧪 Tester le système

1. **Créer un compte utilisateur** :
   - Allez sur `/auth`
   - Créez un nouveau compte
   - Connectez-vous

2. **Transformer en admin** :
   - Suivez les étapes ci-dessus pour ajouter le rôle admin
   - Déconnectez-vous et reconnectez-vous
   - Le bouton "Admin" devrait apparaître dans le header

3. **Accéder au dashboard admin** :
   - Cliquez sur le bouton "Admin" dans le header
   - Ou allez directement sur `/admin`

## 🚀 Prochaines étapes

Maintenant que le système d'authentification est en place, vous pouvez :

1. **Intégrer Rocket Gate** pour les paiements
2. **Créer le dashboard de statistiques** de vente
3. **Ajouter la recherche de clients** avancée
4. **Connecter des APIs externes** pour vos services

## 🔗 Accès rapide

- Page d'authentification : `/auth`
- Dashboard admin : `/admin`
- Backend Lovable Cloud : Cliquez sur "View Backend" dans le chat

## ⚠️ Notes importantes

- L'auto-confirmation des emails est activée pour faciliter les tests
- En production, désactivez-la depuis les paramètres d'authentification
- Ne partagez jamais vos identifiants admin
- Les rôles sont stockés dans une table séparée pour la sécurité

## 📝 Support

Pour toute question ou assistance supplémentaire, demandez dans le chat !
