var angular = require('angular');

require('angular-cache');
require('angular-formly');
require('angular-formly-templates-bootstrap');
require('angular-moment');
require('angular-resource');
require('angular-sanitize');
require('angular-strap');
require('angular-ui-router');
require('lodash');
require('moment');
require('ng-autocomplete');

var app = angular.module('njcOnlinePleas', [
  'ui.router',
  'angular-cache',
  'formly',
  'formlyBootstrap',
  'mgcrea.ngStrap',
  //'google.places'
  'ngAutocomplete'
]);

// main app
require('./app')(app);

// controllers
require('./controllers/confirmation.controller')(app);
require('./controllers/form-confirmation.controller')(app);
require('./controllers/form.controller')(app);
require('./controllers/home.controller')(app);
require('./controllers/yes-no-modal.controller')(app);

// directives
require('./directives/form-steps.directive')(app);
require('./directives/formly-errors.directive')(app);
require('./directives/rating.directive')(app);

// services
require('./services/rating.service');
