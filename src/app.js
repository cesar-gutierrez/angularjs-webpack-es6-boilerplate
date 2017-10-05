if (module.hot) {
  module.hot.accept()
}

import routing from './app.config'
import example from './features/example'

import './style.scss'

angular.module('app', [example])
  .config(routing)