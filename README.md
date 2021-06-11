<h1 align="center"> 🧳 Overlook - Hotel Management App 🧳 </h1>

<!-- <p align="center"><img src=ADD GIF HERE></p> -->

## Table of Contents
1. [Contributors](https://github.com/k-atwhite/overlook/blob/main/README.md#contributors)
2. [Project Goals](https://github.com/k-atwhite/overlook/blob/main/README.md#project-goals)
3. [Project Overview](https://github.com/k-atwhite/overlook/blob/main/README.md#project-overview)
4. [How to use the app](https://github.com/k-atwhite/overlook/blob/main/README.md#how-to-use-the-app)
5. [Technologies Used](https://github.com/k-atwhite/overlook/blob/main/README.md#technologies-used)
6. [Future Additions](https://github.com/k-atwhite/overlook/blob/main/README.md#future-additions)

## Contributors
- [Kat White](https://github.com/k-atwhite)
- [Lauren Kessell, Code Review](https://github.com/LKessell)
- [Hannah Hudson, Project Manager](https://github.com/hannahhch)

## Project Goals
- Use OOP to drive the design of the application and the code
- Work with an API to send and receive data
- Solidify the code review process
- Create a robust test suite that thoroughly tests all functionality of a client-side application


## Project Overview & User Stories



0️⃣ ITERATION: Build Dashboard
* As a customer:
1. I should see a dashboard page that shows me:
2. Any room bookings I have made (past or present/upcoming)
3. The total amount I have spent on rooms

1️⃣ ITERATION: Customer Interaction
* As a customer:
1. I should be able to select a date for which I’d like to book a room for myself
2. Upon selecting a date, I should be shown a list of room details for only rooms that are available on that date
3. I should be able to filter the list of available rooms by their roomType property
4. I should be able to select a room for booking
5. In the event that no rooms are available for the date/roomType selected, display a message fiercely apologizing to the user and asking them to adjust their room search

2️⃣ ITERATION: Login
* When first arriving at the site, a user should be able to log in with a username and password.
* As a customer:
1. I should be able to login
2. I will see a login page when I first visit the site
3. I can log in with the following credentials:
```username: customer50 (where 50 is the ID of the user)```
```password: overlook2021```
4. Upon successfully loggin in, I should see my dashboard.

3️⃣ ITERATION: 4. Manager Interaction
* The app now supports two different types of users. In addition to having a customer, you will now add a manager.
* As a manager:
1. I should be able to login
2. I will see a login page when I first visit the site
3. I can log in with the following credentials:
```username: manager```
```password: overlook2021```
4. As a manager, upon logging in I should see a dashboard page that shows me:
* Total Rooms Available for today’s date
* Total revenue for today’s date
* Percentage of rooms occupied for today’s date
5. I should be able to search for any user by name and:
6. View their name, a list of all of their bookings, and the total amount they’ve spent
7. Add a room booking for that user
8. Delete any upcoming room bookings for that user (they cannot delete a booking from the past)



## How to use the app
### Server Setup
To set up the data server, run the following commands:  
`git clone git@github.com:turingschool-examples/overlook-api.git`  
`cd overlook-api`  
`npm install`  
`npm start`  
Then, open a new Terminal window

### App Setup
In the new Terminal window, run the following commands:  
`git clone git@github.com:turingschool-examples/overlook-api.git`  
`cd overlook`  
`npm install`  
`npm start`  
Open a window in your web browser of choice, and visit `localhost:8080` to view the app!


## Technologies Used
* Chai and Mocha
* HTML
* CSS
* JavaScript
* Webpack
* ESLint


## Future Additions
There are so many ways to grow this site. Several examples could be:
1. 3rd Party Libraries:

2. IDEA 2

3. IDEA 3

______________________________



### JavaScript

You have to be very intentional with where you add your feature code. This repo uses a tool called [webpack](https://webpack.js.org/) to combine many JavaScript files into one big file. Webpack enables you to have many, separate JavaScript files to keep your code organized and readable. Webpack expects all of your code files to be in a specific place, or else it doesn't know how to combine them all behind the scenes.

**Create all of your feature code files in the `src` directory.**

Since code is separated into multiple files, you need to use the `import` and `export` syntax to share code across file.

Here is a video that walks through some information about [import and export](https://www.youtube.com/watch?v=_3oSWwapPKQ). There are a lot of resources out there about `import` and `export`, and resources will sometimes call them `ES6 modules`. It's something you will see in React and beyond.

### HTML

Add the HTML you need in the `index.html` file in the `./dist` directory. There is some boilerplate HTML that exists from the start that you can modify.

### CSS (SCSS/SASS)

This project is setup to use SCSS/Sass files by default instead of your regular CSS files. Add your SCSS files in the `src/css` directory. There is a `base.scss` file already there, but you can change this file and add multiple SCSS files in this directory.

This might sound weird, but you need to `import` your SCSS files in the JavaScript entry file (`index.js`) for the styles to be applied to your HTML. The example `base.scss` file has already been imported in the JavaScript entry file as an example.

### Images

Add your image files in the `src/images` directory. Similar to CSS files, you need to `import` image files in the JavaScript entry file (`index.js`). Then go into the HTML and add an `img` element with the `src` attribute pointing to the `images` directory. There is an example in the `index.html` file for you to see.

## How to View Your Code in Action

In the terminal, run:

```bash
npm start
```

You will see a bunch of lines output to your terminal. One of those lines will be something like:

```bash
Project is running at http://localhost:8080/
```

Go to `http://localhost:8080/` in your browser to view your code running in the browser.

---

## Test Files Organization

Similar to feature code, your test code needs to be put in a specific place for it to run successfully.

**Put all of your test files in the `test` directory.** As a convention, all test filenames should end with `-test.js`. For instance: `box-test.js`.

## Running Your Tests

Run your test suite using the command:

```bash
npm test
```

The test results will output to the terminal.

---

## Linting Your Code

Run the command in your terminal `npm run lint` to run the linter on your JavaScript code. There will be errors and warnings right from the start in this starter kit - the linter is still running successfully.

Your linter will look at the JavaScript files you have within the `src` directory and the `test` directory. 

## Webpack?

If you look in the `package.json` file, you'll see one of the library dependencies called `webpack`. If you're interested in learning more about what Webpack is and how it works behind the scenes, take a look through the [Webpack configuration documentation](https://webpack.js.org/concepts/).

## Deploying to GitHub Pages

_If you are finished with the functionality and testing of your project_, then you can consider deploying your project to the web! This way anyone can play it without cloning down your repo.

[GitHub Pages](https://pages.github.com/) is a great way to deploy your project to the web. Don't worry about this until your project is free of bugs and well tested!

If you _are_ done, you can follow [this procedure](./gh-pages-procedure.md) to get your project live on GitHub Pages.
