describe('whiteboardController', function () {
  var $scope, $rootScope, whiteboardController, $httpBackend;

  // using angular mocks, we can inject the injector
  // to retrieve our dependencies
  beforeEach(module('collaby.whiteboard'));
  beforeEach(inject(function($injector) {

    // mock out our dependencies
    $rootScope = $injector.get('$rootScope');
    $httpBackend = $injector.get('$httpBackend');
    $scope = $rootScope.$new();

    var $controller = $injector.get('$controller');

    createController = function () {
      return $controller('whiteboardController', {
        $scope: $scope,
      });
    };
  }));

  it('should have an init method on the $scope', function() {
    createController();
    expect($scope.init).to.be.an('function');
  });

  it('should have an draw method on the $scope', function() {
      createController();
      expect($scope.draw).to.be.an('function');
    });
});