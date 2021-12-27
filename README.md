# Tech-Blog

# Description

The application contained within is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. The app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

# Table of Contents

<li><a href="#installation">Installation</a></li>
<li><a href="#usage">Usage</a></li>
<li><a href="#documentation">Documentation</a></li>
<li><a href="#credits">Credits</a></li>
<li><a href="#license">License</a></li>
<li><a href="#contact">Contact</a></li>

# Installation

First user needs to <a href="https://github.com/JoNoC0/Tech-Blog">Clone repo</a>. Installation is process of installing the dependencies required. Initialize node package manager and then run the following commands:

<ul><code> npm install mysql2</code></ul>
<ul><code> npm install sequelize</code></ul>
<ul><code> npm install dotenv</code></ul>
<ul><code> npm install express</code></ul>
<ul><code> npm install express-handlebars</code></ul>
<ul><code> npm install bcrypt</code></ul>
<ul><code> npm install express-session</code></ul>
<ul><code> npm install connect-session-sequelize</code></ul>

# Usage

In order to use the application, first ensure that MYSQL is installed in your environment.
Then, from the project root folder enter the sql shell and run the following command:

<ul><code>source db/schema.sql</code></ul>

Exit the sql shell and return to the command line still within your root project folder.

Run the following commands:

<ul><code>npm run seed</code></ul>
<ul><code>npm start</code></ul>

Live Deployed Application on Heroku: <a href="https://polar-scrubland-54771.herokuapp.com/">Application</a>

# Documentation
<img src="https://github.com/JoNoC0/Tech-Blog/blob/main/images/tech-blog.png?raw=true" alt="tech-blog post" title="tech-blog post" style="max-width: 100">


# Credits

University of Texas in Austin Coding Bootcamp Week 14 Module 14: MVC
Tech-Blog

# License

## MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

# Contact

John Nguyen
<li><a href="mailto:jnguyeningco@gmail.com">Email</a>
<li><a href="https://www.linkedin.com/in/john-nguyen-49158621a">Linked In</a>
<li><a href="https://github.com/JoNoC0/Tech-Blog">Tech-Blog</a>

