# Royal Canin Web Design Language

This repository contains the development files used to generate the Royal Canin Web Design Language Portal (2017). All files are managed via the repo.

This project is built on top of [Pattern Lab](http://patternlab.io/). A custom StyleguideKit has been created in order to customise the appearance of the front end.

Excluded files include the `public` directory, which is the end product of the [Pattern Lab](http://patternlab.io/) static site generator. This directory will be managed by a separate, Royal Canin owned, repository.

# &nbsp;

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisities

Ensure you have the following installed globally:

* [Node ^4](https://nodejs.org/en/) for core processing.
* [npm](https://www.npmjs.com/) for project dependencies.
* [gulp.js](http://gulpjs.com/) for task running.
* [Sass](http://sass-lang.com/install) for CSS preprocessing.

> Note: The Gulp Edition of Pattern Lab uses Gulp 4, which may require a new global install of the Gulp command line interface. Follow the [gulp upgrade instructions](https://github.com/pattern-lab/edition-node-gulp/wiki/Updating-to-Gulp-4) if you already have gulp installed and need to upgrade. Gulp 4 is in alpha, but brings many benefits to the table and is relatively stable.

### Installing

* Clone the repo to a local directory.
* Navigate to the directory in your Terminal application and run `npm install` to install all the required dependencies.

# &nbsp;

## Local Development

Please review the information laid out here before carrying out any local development on this project.

### Branches

Following is a basic top-level git branch structure. Code should not be written in any of these branches:

* `master` contains all production ready code.
* `staging` merges the `styleguide` and `web-design-language` branches ready for production.
* `styleguide` contains branches used to further develop and test the custom StyleguideKit. You should branch off from here when adding or editing files relating to that.
* `web-design-language` contains branches used to add or edit the parts that make up the Web Design Language Portal. You should branch off from here when adding or editing files relating to that.

Before adding any code to the repo, ensure that you are in the correct branch. 


#### Adding/Amending Components
Our branching strategy for adding components to the Portal is as follows:

* Checkout into `web-design-language`
* If you're amending an exisitng component, locate and checkout into it's branch. If you're creating a new component, create a new branch from here and use the following naming convention: 

`[number]-[type]_[name]`

A real world example of this may look something like:

`00-atoms_buttons`

Whatever it is, make sure that the parts of the name of the branch match exactly the names of the directories where the files you are authoring will live. So in the case of the example above, the new files will live in here:

`source/_patterns/00-atoms/buttons/`

> We don't need to prefix the branch name with `source/_patterns` because all of our code lives in there.

* Once you've finished and have tested your code, checkout into `web-design-language` and merge your branch in.


#### Adding/Amending the Portal
Our branching strategy for adding components to the Portal is as follows:

* Checkout into `styleguide`
* If you're amending an exisitng aspect of the styleguide, locate and checkout into it's branch. If you need to create a new branch, create a Git issue, then branch from here and use the following naming convention:

`[issue-number]-[issue-title]`

A real world example of this may look something like:

`10-changelog-layout`

Whatever it is, make sure that the parts of the name of the branch match exactly the issue number and name as displayed on Github. Try to keep issue names short. You can expand on the issue in the description.

* Once you've finished and have tested your code, checkout into `styleguide` and merge your branch in.
* Ensure you mark the issue as Completed.

# &nbsp;

## Helpful Commands

These are some helpful commands you can use on the command line for working with Pattern Lab.

> Reminder: These commands assume a global installation of gulp 4.X, instead of a local installation. Depending on your preference, you may need to [upgrade your global version of gulp](https://github.com/pattern-lab/edition-node-gulp/wiki/Updating-to-Gulp-4) or [run with local gulp](https://github.com/pattern-lab/patternlab-node/wiki/Running-with-Local-Gulp-Instead-of-Global-Gulp).

### List all of the available commands

To list all available commands type:

    gulp patternlab:help

### Generate Pattern Lab

To generate the front-end for Pattern Lab type:

    gulp patternlab:build

### Watch for changes and re-generate Pattern Lab

To watch for changes, re-generate the front-end, and server it via a BrowserSync server,  type:

    gulp patternlab:serve

BrowserSync should open [http://localhost:3000](http://localhost:3000) in your browser.

# &nbsp;

## Deployment

TBC

# &nbsp;

## Contributing

Please refer to the First 10 Rules of Engagement document for coding standards and process including git process, grunt tasks and WordPress coding requirements.