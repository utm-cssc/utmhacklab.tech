---    
sidebar: auto
---      

# Web Development

## Website vs Web Application

### Website
A website is a page on the internet you can access through your browser. Websites are rendered in your browser using HTML. You can style your HTML page using CSS as well as use JavaScript to give your page some functionality.

### Web Application
A web application is a type of website users can use to access and manipulate data. Web applications are built-on the idea of user interaction and are intended to provide a specific functionality for the user. Web applications use a layered approached referred to as "full-stack" conisiting of a frontend, backend and a database. Facebook, Gmail and Twitter are all examples of web applications. Keep reading to learn more about web development! 

## The development stack

### The Frontend
The frontend is what a user sees and is rendered on the client-side. Traditionally, these pages were built using HTML, CSS and JavaScript. However, for a web application, there are often many repetitive components that appear on multiple pages in addition to the fact that the frontend needs to be constantly updated. For this purpose, most frontend developers use frontend libraries or frameworks. Some of the most famous examples include ReactJs, AngularJS, Angular and Vue.js. These tools are built for the purpose of creating interactive user interfaces (UI) so that they are dynamically updated as data is being manipulated within the application. Furthermore, they provide a pre-defined skeletal structure to your UI development so that you don't have to spend time sorting out your HTML and CSS files.

Want to learn more on how to create dynamic UIs for your web application?
<LevelWithButton button="Start Learning ReactJS" link="https://www.codecademy.com/learn/react-101"/>

<LevelWithButton button="Start Learning Angular" link="https://angular.io/"/>

<LevelWithButton button="Start Learning Vue" link="https://utmhacklab.tech/resources/vue/#what-is-vue"/>

### The Backend
The backend is a server-side element of the stack where the business logic takes place. The backend is what gives your application the functionality it needs. Here is where data in manipulated and either sent to the frontend for display or to the database for storage (more on this later). It can be written in any progamming language and thus there are plenty of framework options when it comes to backend development. The most famous ones include ExpressJS (written in NodeJS), Django (written in Python), Laravel (written in PHP), Spring (written in Java) and ASP.NET (written in C#). These web frameworks are made with built-in frontend views/templates you could use, however, most developers are opting to connect backend frameworks with frontend web libraries and frameworks. 

Want to learn more about backend web frameworks?

<LevelWithButton button="Start Learning Django" link="https://www.djangoproject.com/start/" />
<LevelWithButton button="Start Learning Spring" link="https://spring.io/guides/gs/spring-boot/" />
<LevelWithButton button="Start Learning ASP.NET" link="https://www.w3schools.com/asp/default.ASP"/>
<LevelWithButton button="Start Learning Laravel" link="https://www.tutorialspoint.com/laravel/index.htm"/>
<LevelWithButton button="Start Learning ExpressJS" link="https://www.tutorialspoint.com/expressjs/index.htm" />

### The Database
We have discussed the frontend and the backend, but we are missing one key aspect, where do we store all the data? As you may have guessed, it's the database! The two most well-know types of databases are SQL Relational Database Management Systems (RDBMS) and NoSQL (non-RDBMS). SQL databases are databases consisting of tables where data in the tables are connected through unique IDs called "keys". These are probably the most commonly used databases in industry right now, but they are currently being replaced by NoSQL databases. These databases store data in a non-structured method therefore data can be retrieved and added in a more dynamic manner. 

Examples of SQL databases includes:
<LevelWithButton button="MySQL" link="https://www.mysql.com/"/>
<LevelWithButton button="MS SQL Server" link="https://www.microsoft.com/en-ca/sql-server/sql-server-2019"/>
<LevelWithButton button="Oracle DB" link="https://www.oracle.com/ca-en/database/"/>

Examples of NoSQL databases include:
<LevelWithButton button="MongoDB" link="https://www.mongodb.com/"/>
<LevelWithButton button="CouchDB" link="https://couchdb.apache.org/"/>
<LevelWithButton button="DynamoDB" link="https://aws.amazon.com/dynamodb/"/>

## How do I get started with web development

### Scrimba

<LevelWithButton  desc="Scrimba is a next-generation platform for learning how to code. Scrimba's screencasts enable you to interact with the code directly in the player. This way, you'll have more fun and learn faster." image="https://scrimba.com/static/art/castcover.png" button="Start Learning" link="https://scrimba.com" />
### Frontend Web Developer Roadmap

<LevelWithButton :imageRight="false"  desc="A community-created roadmap for modern frontend web development." image="/images/frontend-roadmap.png" button="Check it out!" link="https://roadmap.sh/frontend" />

### Backend Web Developer Roadmap

<LevelWithButton desc="A community-created roadmap for modern backend web development." image="/images/backend-roadmap.png" button="Check it out!" link="https://roadmap.sh/backend" />
