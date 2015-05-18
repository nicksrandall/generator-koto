'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var gitConfig = require('git-config');
var camelcase = require('lodash.camelcase');
var capitalize = require('lodash.capitalize');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('Koto') + ' generator!'
    ));

    var config = gitConfig.sync();

    var prompts = [{
      type: 'input',
      name: 'user',
      message: 'What is your github username/organization?'
    }, {
      type: 'input',
      name: 'repo',
      message: 'What is your repo/projects name?',
      default: 'koto.' + capitalize(camelcase(this.appname))
    }, {
      type: 'input',
      name: 'description',
      message: 'What is a description of this project? (eg. A nice koto chart.)'
    }, {
      type: 'input',
      name: 'author',
      message: 'Who is the author of this project?',
      default: (config && config.user && config.user.name) ? config.user.name + ' <' + config.user.email + '>' : ''
    }, {
      type: 'input',
      name: 'global',
      message: 'What would you like to attach to the koto global (in browsers)? ex. koto.[name]',
      default: capitalize(camelcase(this.appname))
    }];

    this.prompt(prompts, function (props) {
      this.user = props.user;
      this.repo = props.repo;
      this.description = props.description;
      this.author = props.author;
      this.global = capitalize(props.global);
      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.template('jshintrc', '.jshintrc');
      this.template('jscsrc', '.jscsrc');
      this.template('travis.yml', '.travis.yml');
      this.template('_package.json', 'package.json');
      this.template('_bower.json', 'bower.json');
      this.template('LICENSE.md', 'LICENSE.md');
      this.template('README.md', 'README.md');
      this.template('gitignore', '.gitignore');
      this.template('gulpfile.js', 'gulpfile.js');
      this.mkdir('src');
      this.template('src/index.js', 'src/' + this.global + '.js');
      this.template('src/builder.js', 'src/builder.js');
      this.template('src/configs.js', 'src/configs.js');
      this.mkdir('test');
      this.template('test/jshintrc', 'test/.jshintrc');
      this.template('test/runner.html', 'test/runner.html');
      this.mkdir('test/setup');
      this.template('test/setup/browserify.js', 'test/setup/browserify.js');
      this.template('test/setup/node.js', 'test/setup/node.js');
      this.template('test/setup/setup.js', 'test/setup/setup.js');
      this.mkdir('test/unit');
      this.template('test/unit/index.js', 'test/unit/' + this.global + '.js');

      // Demo (server) stuff
      this.mkdir('demo');
      this.mkdir('demo/css');
      this.template('demo/css/main.css', 'demo/css/main.css');
      this.mkdir('demo/js');
      this.template('demo/js/main.js', 'demo/js/main.js');
      this.template('demo/index.html', 'demo/index.html');
    }
  },

  install: function () {
    this.installDependencies({
      bower: true,
      npm: true,
      skipInstall: this.options['skip-install']
    });
  }
});
