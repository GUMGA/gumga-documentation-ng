angular.module('app', ['ui.bootstrap','gumga.rest','gumga.documentation'])
  .controller('Ctrl', function () {
    var ctrl = this
    ctrl.example = function() {
      alert('Função executada')
    }
  })
