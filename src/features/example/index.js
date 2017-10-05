import uirouter from 'angular-ui-router'

import routesExample from './example.routes'
import ExampleCtrl from './example.controller'

export default angular.module('app.example', [uirouter])
  .config(routesExample)
  .controller('ExampleCtrl', ExampleCtrl)
  .name