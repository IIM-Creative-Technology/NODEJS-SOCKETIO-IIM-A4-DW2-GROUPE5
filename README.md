<br />
<p align="center">
  <h3 align="center">Groupe 5</h3>
  <p align="center">
   NodeJs SocketIO by Groupe 5<br />
  </p>
</p>

Github Link: [https://github.com/IIM-Creative-Technology/NODEJS-SOCKETIO-IIM-A4-DW2-GROUPE5](https://github.com/IIM-Creative-Technology/NODEJS-SOCKETIO-IIM-A4-DW2-GROUPE5)

Online Link: [https://iim-groupe-5.vercel.app/](https://iim-groupe-5.vercel.app/)

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
        <li><a href="#built-with">Add a new route</a></li>
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

1. Create a new file for your route : `./routes/[your-route-name].js`

2. Copy the code from `./routes/route-template.js` and paste it to your just fresh .js route file

3. Add in `./routes/router.js` :
    - in the requires section : 
    ```js
    const [your-route-name]Route = require('./[your-route-name]')
    ``` 
    - add to the router object :
    ```js
    router.use('/[your-route-name]/', [your-route-name]Route)
    ```
4. Your new route is setup ! Feel free to customize it.




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
