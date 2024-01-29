## VScode

### Supprimer le compact folders
ctrl+shift+p  
```
\>settings
```   
Search "compact folders" and unchecked



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


## Composants React

Les fonctions   
***basique*** limité à la génératin de rendu via le JSX   
***Avancé*** utilisation du mécanisme des Hooks

## Création d'un projet via Vite

```
npm create vite@latest my-app
```

project name: demo  
select a framework: >> React  
Select variant: >> Javascript +SWC  

Done. Now Run

```
npm install
npm run dev
```

---------------------------------

## Les Fragments

Afin de ne pas devoir englober les noeuds HTML de même niveau dans un element parent de type div nous pouvons les regrouper dans des fragments

```
<>
    <div></div>
    ....
</>
```

## Composant basé sur une function

Un composant React est est une fonction qui renvoie un rendu "React" à l'aide du JSX

***Attention aux noms de éléments***  
***React*** en PasalCase  
***HTML*** en lowercase

```
const Welcome = function(props) {
    return (
         <div>
            <h1>Bonjour</h1>
        </div>
    );
}
```

Lors de l'utlisisation d'un composant celui-ci peut recevoir plusieurs attributes
```
<Demo arg1="string" arg2={42} />
```

## Typage du code

Affiche un message d'erreur en runtime dans la console mais ne bloquera pas l'application.

```
npm install --save prop-types
```

```
import PropTypes from 'prop-types';
//....
Welcome.propTypes = {
    name: Proptypes.string
}
```
***attention*** .propTypes (***p*** en minuscule)

## Les Props

function func(props) {}  
function func({attr1, attr2}) {} 

### Valeur par default

```
func.defaultProps = {
    gender: "X"
}
```

## Modules CSS

Les fichiers css doivent avoir un nom de type .module.css
Objectif est de rendre unique le nom de la class en y ajoutant un hash  
```
<h1 class="_title_uofm2_1">Bonjour</h1>
```

Dans le css

```
.title { color:red; }
```

Importation du css module

```
import styles from './Button.module.css';
```

Dans le component

```
<h1 className="style.title">Bonjour</h1>
```

## CSS conditionnel avec clsx

```
npm install --save clsx
```

importation

```
import clsx from 'clsx';
```

Dans le component

**Deux syntax possibles**

```
const clsWelcome = clsx('class1', gender === "M" && 'class2', 'my-class', firstname[0] === "A");
```

```
const clsWelcome = clsx({
    class1: true,
    class2: gender === "M",
    'my-class' : true,
    [style.demo] : firstname[0] === "A"
});
```

```
//----

const clsWelcome = clsx({
    [style.welcome]: true,
    [style.welcomeM]: gender === "Y",
    [style.welcomeF]: gender === "X"
});

<h1 className={clsWelcome}>Bonjour</h1>
```

## Commantaire dans JSX

Les commantaires sont intégrés dans du JS grâce aux {}

```
{/* <p>Welcome on the first React project</p> */}
```

## Création de list

```
const SimpleList = function(props) {
    const listItems => objs.maps((obj) => 
        <li key={obj.key}>{obj.data}</li>

    )

    return (
        <ul>{listItems}</ul>
    );
}
```

## Les événements du DOM

Le JSX reprend les mêmes événements que l'HTML  
preventDefaut() déactive le comportement par default de l'événement

## Les Hooks

Permet d'utiliser un état local, les cicles de vie
Permet d'extraire le logique d'un composant et ainsi de la réutiliser

utilisable dans deux cas depuis

- fonctions composants React
- Des Hooks personnalisés

Appelle des Hooks uniquement au niveau du **Root** (racine)

### State

```
import { useState } from "react";
```

Pour utiliser un Hook il faut appeler la méthode **useState** dans le **composant**.  

```
const DemoStateHook = function() {
    const [value, setValue] = usetate(initiamValue);
}
````

### SWR

Bibliothèque de React Hooks pour la récupération de données et de mise en cache