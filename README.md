# Starting Angular TodoList app

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.3.

## Create new project

Run `ng new <project-name>` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
Run `ng serve --open` or `ng serve --o` to open your default web browser to the application.

## Code scaffolding

Run `ng generate component component-name` or `ng g c <component-name>` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Update

Run `ng update` to checks your application for outdated dependencies, and can also update them.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# One-Way data Binding

Using one-way data binding, data flows only in one direction, from your TypeScript code (model) to the template view. This makes your code predictable and easier to understand, as the flow of data has a clear and consistent path:

**Model (TypeScript Code) → Data flows to → HTML template**

Here are two common ways to use one-way data binding in Angular:

1. Interpolation: This is the simplest form of one-way data binding, where you use double curly braces (`{{ }}`) to display variables from your component in your view.
2. Property binding: This allows you to set the property of a DOM element to a value. For example, you might use `[disabled]="isDisabled"` to disable a button based on the value of `isDisabled`.

Here is an example:

Let's assume that we have got a TypeScript class with a string property:

```javascript
export class AppComponent {
imageUrl = 'https://example.com/my-image.jpg';
}
```

In our html templates we can use the interpolation or property one-way data binding like this:

`<img src="{{imageUrl}}">`  ← Interpolation

or

`<img [src]="imageUrl">` ← Property binding

Both of them work. Remember, the primary goal of one-way data binding is to **keep the model and view in sync** in a consistent and efficient manner.

### Here is one very important thing to know:

The interpolation method only works with `string` data. If you need to bind other data types (like objects) you should use the property binding method `[src]="imageUrl"`.

# Add bootstrap to Angular app

Run command in your terminal `npm i bootstrap`

Now open `angular.json` file and add the following:

"projects" -> "todo-list" -> "architect" -> "build" -> "styles" and "scripts":

```javascript
"styles": [
  "src/styles.css",
  "./node_modules/bootstrap/dist/css/bootstrap.css"
],
"scripts": [
  "./node_modules/jquery/dist/jquery.js",
  "./node_modules/bootstrap/dist/js/bootstrap.js"
]
```
