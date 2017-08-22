(function () {
  const gulp = require('gulp');
  //const debug = require('gulp-debug');
  // Use this to debug pipes.
  // .pipe(debug({title: 'Streams open :'}))

  const need = require('./gulp/gulp_dependancies');
  const sitesettings = require('./gulp/gulp_settings');


  const TaskTemplate = {
    subtasks: [],
    pretasks: [],
    watch: {
      active: false,
      files: [sitesettings.watch.sass]
    },
    linting: {
      js: sitesettings.location.linting.js,
      sass: sitesettings.location.linting.sass
    }
  };

// Tasks
  const tasks = {
    'dev': {
      subtasks: ['combineMq'],
      pretasks: ['sass', 'jsProcessing'],
      orderedTasks: ['svgo', 'svgSprites'],
      watch: {
        active: true,
        files: [sitesettings.watch.sass, sitesettings.watch.js]
      },
      linting: {
        testSass: true
      },
      env: 'development'
    },
    'prepForRelease': {
      subtasks: ['combineMq'],
      pretasks: ['sass', 'jsProcessing'],
      orderedTasks: ['svgo', 'convertType', 'svgSprites'],
      watch: {
        active: false,
        files: [sitesettings.watch.sass, sitesettings.watch.js]
      },
      linting: {
        testSass: false
      },
      env: 'production'
    },
    'tasklist': {
      subtasks: [],
      pretasks: ['tasklist'],
      watch: {
        active: false,
        files: [sitesettings.watch.sass]
      },
      linting: {
        testSass: false
      }
    },
    'prepAssets': {
      subtasks: [],
      pretasks: ['convertType'],
      orderedTasks: ['svgo', 'svgSprites'],
      watch: {
        active: false,
        files: [sitesettings.watch.sass]
      },
      linting: {
        testSass: false
      }
    }
  };

  var tasksooj = {};

  // Rebuild the task object using the template as a base for each item.
  (function(tasksooj, TaskTemplate) {
    Object.keys(tasks).forEach(function(taskname) {

      var newTaskObj = Object.create(TaskTemplate);
      tasksooj[taskname] = Object.assign(newTaskObj, tasks[taskname]);
    });
  })(tasksooj, TaskTemplate);

  function genTasks(task, subtasks) {
    task[subtasks].forEach(function (task) {
      getTask(task, gulp, sitesettings, need, tasksooj);
    });
  }

  // This function pulls the tasks in from their separate files and passes the configuration.
  function getTask(task, gulp, sitesettings, need, tasksooj) {
    if (task !== '' && typeof task === 'string') {
      let livetask = require('./gulp/tasks/' + task);
      livetask(task, gulp, sitesettings, need, tasksooj);
    }
  }

  // Only get the task needed, this is gathered from the global object. Arg 2 should always be the task name
  // passed from the original execution.
  var masterTaskName = global.process.argv[2];
  var masterTaskObj = tasks[masterTaskName];

  if (typeof masterTaskObj !== 'undefined') {

    // Generate both sets of tasks ready for use.
    if (typeof masterTaskObj.orderedTasks !== 'undefined') {
      genTasks(masterTaskObj, 'orderedTasks');
    }
    genTasks(masterTaskObj, 'pretasks');
    genTasks(masterTaskObj, 'subtasks');

    gulp.task(masterTaskName, typeof masterTaskObj.orderedTasks === 'undefined' ? gulp.series(masterTaskObj.pretasks, masterTaskObj.subtasks) : gulp.series(gulp.series(masterTaskObj.orderedTasks), masterTaskObj.pretasks, masterTaskObj.subtasks, function () {
      if (masterTaskObj.watch.active) {
        gulp.watch([masterTaskObj.watch.files], gulp.series(masterTaskObj.pretasks, masterTaskObj.subtasks));
      }
    }));
  }

  // This task simply displays information about the other tasks available.
  const listTask = require('./gulp/tasks/tasklist');
  gulp.task('default', listTask(null, gulp, sitesettings, need));

}());
