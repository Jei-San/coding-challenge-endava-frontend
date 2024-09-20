This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Thoughts on the coding challenge

[Hacker News API](https://github.com/HackerNews/API) was a bit limited. There is a requirement where a search bar should apear in the [front-end](https://github.com/Jei-San/coding-challenge-endava-frontend/tree/main) UI, but this was not posible because there is was only one way to get the data from that API, the reason being is that it's a firebase database.

![image](https://github.com/user-attachments/assets/6eae0e48-7248-48c6-af30-603bc1e82f6e)

**NOTA**: The **Hacker News Api** firebase doesn't have the right configuration to search by title, for example this, it's how it should look:

![image](https://github.com/user-attachments/assets/51ee94be-15b2-46b1-b23c-b52030afed7e)

But here is the response:

![image](https://github.com/user-attachments/assets/a2fb26dd-9231-4732-abf4-fda8f4248ab2)

It cannot be searched by "title" which is the requirement field for the search bar to filter the table, I looked at many other ways to try and get the right data but I ran out of options and I had to implement SQLit with a database that stored the "stories", the database gets populated when the project is started with a Job called InitialJob, and then every 5 minutes a different Job called UpdateStoriesJob searches for new stories in the [Hacker News API](https://github.com/HackerNews/API) firebase compares it to the ones store in the database we created and inserts any new "stories", and from the created database we search by title (The table "Stories" has an index to avoid any performance issues).

Honestly, I loved being able to experiment with ways to solve this issue. I won't lie it was hard, but there is always a solution and one needs to adapt. Thank you very much for this experience!
