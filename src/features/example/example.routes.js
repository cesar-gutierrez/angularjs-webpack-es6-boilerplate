routesExample.$inject = ['$stateProvider']

export default function routesExample($stateProvider) {
  $stateProvider
    .state('example', {
      url: '/',
      views: {
        'content': {
          template: require('./example.html'),
          controller: 'ExampleCtrl',
          controllerAs: 'example'
        }
      }
    })
}