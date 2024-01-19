# Questions

- sortie xml depuis nodeJs
- Base de données vertorielle
- Fourniseurs de support en nodeJs
- Chat bot opensource qui lit nos pdf/word pour en faire des résumés a la demande via un combobox (parametrage propre) 


# Node JS

## Command
```
node -v
```

```
node process.env
```

## Modules
Standards (import)
ex: url, path, fs, …

Local
création de modules personnel
doit se terminer par module.exports = “module”


# NPM

## Command
```
npm -v
```

```
npm install package@version
```

```
npm init
```

## NPM install “lodash”
Création du dossier node_modules 
ajout dossier “lodash”
Ajout de “dependencies” dans package
Création du fichier package-lock.json (gestion des conflits de version)
référence l’ensemble des informations des packages avec les versions installées dans le projet

### A partir de nodejs 20
on peut ajouter le fichier environement lié

```
--env-file=.env
```

  "scripts": {
    "start" : "node --env-file=.env app.js",
    "dev" : "nodemon --env-file=.env app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

## npm i express —save
écrit dans “dependencies”

```
npm i express —save-dev
```

écrit dans “devDependencies”

## NPM uninstall “lodash”

# express
Getion des routes
get|post|put|delete...

router.get(/route) <-- static
router.get(/:route) <-- dynamique

## methode redirect
Utilisation -> migration vers une nouvelle route v1 -> v2

#Extensions VS

## Git

Installation de l'extension gitignore Extension for Visual Studio Code de CodeZombie
Creation d'un fichier .gitignore déja configuré pour un projet (ici type nodeJs)

ctrl+shift+p -> gitignore
--> select type projet (node)

## Better Comments

Colorisation des commantaires 
valeur ! * ? //
