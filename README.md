# Royal Canin Web Design Language

This repository contains the development files used to generate the Royal Canin Web Design Language Portal (2017). All files are managed via the repo.

This project is built on top of [Gulp Styleguide](https://github.com/matthewmcclatchie/gulp-styleguide).

The `public` dircetory generated by Gulp Styleguide is included in the repo's .gitignore, as it will be managed in a separate repository owned by Royal Canin.

# &nbsp;

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisities

Ensure you have the following installed globally:

* [Node ^4](https://nodejs.org/en/) for core processing.
* [npm](https://www.npmjs.com/) for project dependencies.
* [gulp.js ^4](http://gulpjs.com/) for task running.
* [Sass](http://sass-lang.com/install) for CSS preprocessing.

> Note: This project requires Gulp 4. You may need to update your global install of the Gulp CLI. [See here](https://www.joezimjs.com/javascript/complete-guide-upgrading-gulp-4/) for info on upgrading.

### Installing

* Clone the repo to a local directory.
* Navigate to the directory in your Terminal application and run `npm install` to install all the required dependencies.

# &nbsp;

## Local Development

For more information on how Gulp Styleguide works, please review the repo's [README](https://github.com/matthewmcclatchie/gulp-styleguide/blob/master/README.md)

Please also review the information laid out here before carrying out any local development on this project.

### Branches

TBC


#### Adding/Amending Components

TBC


#### Adding/Amending the Portal

TBC

# &nbsp;

## Helpful Commands

These are some helpful commands you can use on the command line for working with Gulp Styleguide.

### Generate Styleguide

```javascript
    gulp generate
```

Creates a public directory if one doesn't already exist and creates a `_nav.html` file out of the main HTML files in public. Public directory contains all the files that make up the styleguide, including the relevant assets, which can be linked to the required pages as required.

### View Styleguide

```javascript
    gulp view
```

Initiates Browser Sync and uses the Public directory as the root to display the Styleguide.

### View Styleguide and Watch

```javascript
    gulp develop
```

> Experimental

Runs the same as the `gulp view` command but also watches the files in the public directory and reload Browser Sync when a change is detected.

# &nbsp;

## Deployment

git subtree push --prefix public origin gh-pages

# &nbsp;

## Contributing

Please refer to the First 10 Rules of Engagement document for coding standards and process including git process, grunt tasks and WordPress coding requirements.
