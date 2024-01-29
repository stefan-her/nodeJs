# REACT

React est une bibliothèque JS OpenSource initialisé par Meta.

Type de programmation Déclaratif (ex: du SQL).  
- Le rendu d'un commposant est généré sur base des valuers de l'état local.
- Lorsqu'une valeur est modifiée le rendu est automatiquement mis à jour (node).

## Language JS 
- ecmascript 2015+
- JSX (extension du js ppur le rendu des composants)


### Ecmascript 2015+
Utilisation 
- fonctions flechées
- destructiring
- spead

```
const nex = ["c","d","e"];
const all = ["a","b",...nex];
```

### JSX

```
const element = (
    <div>
        <h1 className="classhtml">txt</h1>
        <p>text....</p>
        <img src="../images/img.jpg" />
    </div>
);
```

Page html
```
<html>
    <body>
        <div id="container">
        <script src="script.js"></script>
    </body>
</html>
```

JSX
```
const el = <div>text</div>
ReactDom.render(el, body.getElementById('container'));
```

## Environement de dev

NodeJs

plugin : React Deveoper Tools

### Web App Server

Le référencement des pages web par google est pas bien supporté car les pages ne sont pas construites. Il est préférable de passer par un server adapté à react.

- Next.js *** adapté à l'infocenter
- Remix
- Gasby

## Creation d'un projet via Vite

```
npm create vite@latest my-app
npm install
npm run dev
```

## Composants React

Les fonctions   
***basique*** limité à la génératin de rendu via le JSX   
***Avancé*** utilisation du mécanisme des Hooks