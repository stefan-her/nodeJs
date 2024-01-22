# Demo web API exprss avec base de Données

Exemple d'api restfull avec base de donnée sqlite

## initialisation du projet

```
npm init
npm i nodemon --save-dev
```

## Package à installer

Sqlite3

```
npm i express sequelize sqlite3
```

Postgresql
```
npm i express sequelize pg pg-hstore
```

## Ajout des middleweares 

### Données de type json

```
app.use(express.json());
```

## Recupération des variables d'environnement
```
const { v1, v2 }  = process.env;
```

# Les routes

## Swagger 
Création automatique de doc pour les utilisteurs de l'API
express-jsdoc-swagger : 
https://www.npmjs.com/package/express-jsdoc-swagger

### Obtenir la liste de tout les invités
```
[GET] /guest
```
Reponse - 200 Array d'object

### Obtenir le détail d'un invité
```
[GET] /guest/:id
```
Reponse - 200 object  
Erreur - 404 not found

### Ajouter un invité
```
[POST] /guest 
```
Reponse - 201 object  
Erreur - 422 Erreur de validation

### Modifier un invité
```
[PUT] /guest/:id
```
Erreur - 404 not found  

### Supprimer un invité
```
[DELETE] /guest/:id
```
Reponse - 204 Success  
Erreur - 404 not found


