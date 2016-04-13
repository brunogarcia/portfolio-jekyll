# ESLint, Atom & EditorConfig

JavaScript ha dejado de ser el patito feo de los lenguajes de programación.

Con la llegada de [ECMAScript6](es6-features.org) o ES6 para los amigos, contamos
con features que otros lenguajes _mas serios_ ya tenian. Ademas la comunidad
ha ido madurando y creando a su vez nuevas formas de entender el desarrollo web.
Si leemos las comparativas entre los distintos frameworks como Backbone,
Ember, Angular o React-Redux, veremos que comparten ciertas similitudes en aspectos
básicos y otras veces las diferencias duran poco tiempo, ya que entre ellas mismas
se retroalimentan constantemente.

Algo que personalmente siempre he echado en falta es la ayuda que cualquier IDE
moderno (lease Eclipse, IntelliJ o Visual Studio) le presta a sus desarrolladores:
sugiriendo, autocompletando y guiando la escritura del código. Esto es algo que
facilita la forma de trabajar y entender el desarrollo de software.

En nuestro proyecto actual en Ventura24, hemos optado por trabajar con un [starter
kit](https://github.com/davezuko/react-redux-starter-kit) que cuenta con muchas
funcionalidades precocinadas. Por ejemplo toda la [configuración de Webpack](https://github.com/davezuko/react-redux-starter-kit/blob/master/build/webpack.config.js), la  creación de [scripts automatizados con NPM](https://github.com/davezuko/react-redux-starter-kit/blob/master/package.json), la configuración del [entorno de tests](https://github.com/davezuko/react-redux-starter-kit/blob/master/tests/test-bundler.js).

Pero lo que mas atención me llamo fue un pequeño fichero llamado [.eslintrc](https://github.com/davezuko/react-redux-starter-kit/blob/master/.eslintrc), con una serie de reglas y plugins, que ejecutadas en tiempo de
 desarrollo (_npm run lint_) nos chivaba los errores de sintaxis y de estilo que nuestro código tenia.

 Esta tarea la hemos añadido a su vez al deploy (_npm run deploy_)  del proyecto. Actuamente nuestro deploy consiste en ejecutar estas 3 tareas
 una detras de otra: linter + tests + compilación. Si falla el linter o los tests,
 la aplicación no compila y no se sube al entorno de integración.
 Todo esto orquestado por un job en Jenkins.

Pero esto se puede automatizar aún más gracias a un trio de packages para Atom:
linter, linter-eslint y editorconfig. Y de eso voy a hablar en los siguientes parrafos.

***

## ESLint

ESLint es un proyecto open source cuyo principal objectivo es detectar
errores de sintaxis y de estilo en nuestro código JavaScript.
Asi dicho no se diferencia mucho de JSHint o JSLint.

Lo bueno de ESLint es su enorme ecosistema de plugins, configuraciones
compartidas (_shareable configs_) y [reglas hiper configurables](http://eslint.org/docs/rules/), ademas de la posibilidad utilizar un _parse_ distinto al oficial.
Pero expliquemos esto un poco mas.

ESLint es muy flexible, *por defecto no carga ninguna regla*.
Debe ser el propio usuario quien decida cuales aplicar e incluso que tan restrictiva
puede llegar a ser.

Por ejemplo para evitar que los desarrolladores se dejen algún <code>console.log</code>
olvidado, pero a su vez permitir <code>console.warn</code> o <code>console.error</code>,
la regla se puede configurar de la siguiente forma:

`no-console: ["error", { allow: ["warn", "error"] }]`

Como tampoco es buena idea escribir a mano todas las reglas una por una
(al menos que seas un poco obsesivo con este tema), tienes dos formas de aplicarlas
en bloque.
La mas sencilla y fácil es cargar aquellas recomendadas dentro un fichero _.eslintrc_

`{
    "extends": "eslint:recommended"
}`

La otra forma es utilizar una *configuracion compartida*. Esto requiere un poco
mas de trabajo, pero a mi parecer tiene muchas mas ventajas.

Una configuracion compartida es básicamente un conjunto de reglas que puedes
(como su nombre indica) compartir con el resto del mundo.
Son reglas muy personalizadas, que quizas no se adecuen a tu forma de trabajar.
Pero no pasa nada, al ser ESLint tan flexible, puedes sobreescribir aquellas que no te gusten.

Las mas famosas son las de [standard](https://github.com/feross/eslint-config-standard)
y [airbnb](https://github.com/airbnb/javascript).

`npm i eslint-config-standard --save-dev`
`npm i eslint-config-standard --save-dev`


****

## Atom

apm install linter
apm install linter-eslint

****

## EditorConfig

apm install editorconfig

***

# NPM packages

npm init -y
npm i babel-eslint --save-dev

***

# ESLint

An AST-based pattern checker for JavaScript.

ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. In many ways, it is similar to JSLint and JSHint with a few exceptions:

* ESLint uses Espree for JavaScript parsing.

* ESLint uses an Abstract Syntax Tree to evaluate patterns in code.

* ESLint is completely pluggable, every single rule is a plugin and you can add more at runtime.

`npm i eslint --save-dev`

`touch .eslintrc`

`touch .eslintignore`

## Rules

http://devnull.guru/get-started-with-eslint/

0 - Turn the rule off
1 - Turn the rule on as a warning
2 - Turn the rule on as an error

***

## Standard

One Style to Rule Them All
No decisions to make. No .eslintrc, .jshintrc, or .jscsrc files to manage. It just works.

### Config for React/JSX support in JavaScript Standard Style

These Shareable Config adds React and JSX to the baseline JavaScript Standard Style rules provided in eslint-config-standard.

https://github.com/feross/eslint-config-standard-react

`npm i eslint-config-standard-jsx --save-dev`

`npm i eslint-config-standard-react --save-dev`

***

## Airbnb

### Config from Airbnb JavaScript Style Guide

Our default export contains all of our ESLint rules, including EcmaScript 6+ and React.
It requires eslint and eslint-plugin-react.

https://github.com/airbnb/javascript

`npm i eslint-config-airbnb --save-dev`

***

## Plugins

## ESlint Rules for the Standard Linter (DEPS?)

https://github.com/xjamundx/eslint-plugin-standard

`npm i eslint-plugin-standard --save-dev`

### Enforce best practices for JavaScript promises (DEPS?)

https://github.com/xjamundx/eslint-plugin-promise

`npm i eslint-plugin-promise --save-dev`

### React specific linting rules for ESLint (DEPS?)

https://github.com/yannickcr/eslint-plugin-react

`npm i eslint-plugin-react --save-dev`

***

## ESLint Shareable Config

Shareable configs allow you to publish your configuration settings on npm and have others download and use it in their ESLint projects.

http://eslint.org/docs/developer-guide/shareable-configs

### Config for JavaScript Standard Style

https://github.com/feross/eslint-config-standard

`npm i eslint-config-standard --save-dev`
