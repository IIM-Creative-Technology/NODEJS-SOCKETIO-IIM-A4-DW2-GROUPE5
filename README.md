<br />
<p align="center">
  <h3 align="center">Groupe 5</h3>
  <p align="center">
   NodeJs SocketIO by Groupe 5<br />
  </p>
</p>

Github Link: [https://github.com/IIM-Creative-Technology/NODEJS-SOCKETIO-IIM-A4-DW2-GROUPE5](https://github.com/IIM-Creative-Technology/NODEJS-SOCKETIO-IIM-A4-DW2-GROUPE5)

Online Link: [https://nodejs-socketio-grp5.herokuapp.com](https://nodejs-socketio-grp5.herokuapp.com)

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#deployed-in">Deployed In</a></li>
      </ul>
    </li>
    <li>
      <a href="#how-to">How to</a>
      <ul>
        <li><a href="#add-new-routes">Add a new route</a></li>
        <li><a href="#create-a-new-feature">Create a new feature</a></li>
      </ul>
    </li>
    <li>
      <a href="#contact">Contact</a>
    </li>
    <li>
      <a href="#acknowledgements">Acknowledgements</a>
    </li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

NodeJS API & SocketIO chat


### Built With

* [NodeJs](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [SocketIO](https://socket.io/)
* [Prisma](https://www.prisma.io/)
* [PostgreSQL](https://www.postgresql.org/)

### Deployed In
* [Vercel](https://vercel.com/)
* [Heroku](https://heroku.com/)



<!-- ABOUT THE PROJECT -->
## How to

### Add new routes

1. Create a new file for your route : `./routes/<route base url>/<http method>.path.[<route parameter>].handler.js`

2. Copy the code from `./routes/route-template.js` and paste it to your just fresh .js route file

3. Add the newly created route to the router exported from `./routes/<route base url>/index.js`, like so :
```js
// new route.js
router.<http method>('/<path>/:<route parameter>', handler)
```

4. If necessary,  the sub-router to the main one in `./routes/router.js` :
    - in the requires section : 
    ```js
    const [your-router-name]Route = require('./[your-router-name]')
    ``` 
    - add to the router object :
    ```js
    router.use('/[your-router-name]/', [your-router-name]Route)
    ```
5. Your new route is setup ! Feel free to customize it.

### Create a new feature
For installing Git Flow, see [this doc](https://danielkummer.github.io/git-flow-cheatsheet/index.html).

First, take the corresponding card on [the project board](https://github.com/IIM-Creative-Technology/NODEJS-SOCKETIO-IIM-A4-DW2-GROUPE5/projects/1) and assign yourself to it, moving it to the `doing` list.

You then need to create locally a new branch for the feature with the command `git flow feature start`.

Then, as usual, do your commits (optionally with sharing the branch with `git flow feature publish`), until you have finished.

Then you can close the feature with `git flow feature finish`.

Next step is [opening a PR towards the develop branch](https://github.com/IIM-Creative-Technology/NODEJS-SOCKETIO-IIM-A4-DW2-GROUPE5/compare/develop...main) and moving the card on the project board to the `to validate` list.

Another dev should review your code and merge it!



<!-- CONTACT -->
## Contact
* [Axel Carandang](https://www.linkedin.com/in/axelcarandang/) - [Github](https://github.com/azor40k)
* [Arnaud Fontaine](https://www.linkedin.com/in/arnaud-fontaine-883433160/) - [Github](https://github.com/a-fontaine)
* [Naoufel Maâzouzi](https://www.linkedin.com/in/naoufel-ma%C3%A2zouzi-b86014187/) - [Github](https://github.com/NaoufelMaazouzi)
* [Julie Souchet](https://www.linkedin.com/in/julie-souchet-33baa81b2/) - [Github](https://github.com/SouchetJulie)

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [IIM](https://www.iim.fr/)
* [Alexandre Zerah](https://www.linkedin.com/in/alexzerah/)
