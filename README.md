This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

[Hacker News API](https://github.com/HackerNews/API) estaba un poco limitado. Existe un requerimiento en donde se solicita crear un buscador en el UI del [front-end](https://github.com/Jei-San/coding-challenge-endava-frontend/tree/main), pero esto no era posible ya que solo existe una forma de traer datos de esa API que se proporciono, ya que es por medio de firebase.

![image](https://github.com/user-attachments/assets/6eae0e48-7248-48c6-af30-603bc1e82f6e)

**NOTA**: El firebase de **Hacker News Api** no tiene configurado el firebase, aqui tiene el ejemplo de como se deberia ver:

![image](https://github.com/user-attachments/assets/51ee94be-15b2-46b1-b23c-b52030afed7e)

Aqui la respuesta que arrojaba:

![image](https://github.com/user-attachments/assets/a2fb26dd-9231-4732-abf4-fda8f4248ab2)

No se pueden hacer busquedas por "title" que en este caso es el campo solicitado por el requerimiento para filtrar la busqueda, busque varias maneras de hacerlo pero no me quedo de otra opcion mas que implmentar SQLite con una base de datos que guardaba las "stories", la base de datos se llena de datos al iniciar el proyecto por medio de un Job inicial, y con otro Job, que inserta nuevas historias (si las hay) cada 5 minutos, que al estar corriendo el programa vuelve a buscar datos del Hacker News API e inserta las nuevas noticias que no se encuentren en la base de datos, y de ahi aplico el filtro para la busqueda por titulo (claro tiene indice para acelerar el proceso de busqueda), asi como traer las ultimas "stories".

Honestamente, me gusto mucho el poder experimentar con formas de solucionarlo, no voy a mentir, si batalle pero para todo siempre hay una solucion y hay que adaptarse. Muchas gracias por esta experiencia!
