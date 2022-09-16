# Simple Todo App on React

![Todo app preview cover](https://repository-images.githubusercontent.com/528359213/2e42a33c-3462-449e-8219-a02fbad2fc8a)

A simple to-do app built with React and json-server. The app can add a few items at the same time, delete, mark complete and edit existing tasks. All items are stored in demo data base file which created by json-server library.

## Required packages

| Package      | Description |
| ----------- | ----------- |
| [axios](https://www.npmjs.com/package/axios) | Simplifies interaction with the server API |
| [react-jss](https://www.npmjs.com/package/react-jss) | JSS integration with React |
| [react-redux](https://www.npmjs.com/package/react-redux) | Official React bindings for Redux |
| [redux-thunk](https://www.npmjs.com/package/redux-thunk) | Thunk middleware for Redux |
| [react-final-form](https://www.npmjs.com/package/react-final-form) |  High performance subscription-based form state management for React |
| [react-final-form-arrays](https://www.npmjs.com/package/react-final-form-arrays) | Provides a way to render arrays in React Final Form |
| [final-form-arrays](https://www.npmjs.com/package/final-form-arrays) | Array Mutators for Final Form |
| [uuidv4](https://www.npmjs.com/package/uuidv4) | Generate unique ID's for to-do items |
| [json-server](https://www.npmjs.com/package/json-server) | Fake REST API |

## Getting started

```
$ git clone https://github.com/OleksiiDvornik/react-todo-app.git
$ cd react-todo-app
$ npm i 
$ npm run server
$ npm start
```

## Folders structure

```
src/
    engine/
        config/
        core
            todo/  
        init/ 
    ui/
        _helpers/
            assets/
        components/
        containers/
```
- **engine folder** — contains configuration files related to application setup and logic.
- **ui folder** — contains files related to the visual interface of the application: containers, components, assets, etc.

## Demo

![Demo](https://github.com/OleksiiDvornik/react-todo-app/blob/main/demo.gif)

You can also test the application here: <a href="https://oleksiidvornik-todo-app.herokuapp.com" target="_blank">https://oleksiidvornik-todo-app.herokuapp.com</a>
