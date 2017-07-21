const myApp = angular.module('myApp',[]);

myApp.factory('myService', () => {
  const service = {};

  service.collection = ["A","B","C"];
  service.value = "A";

  return service;
});

myApp.controller('MainCtrl', (myService) => {
  const controller = {};

  controller.myObject = myService.collection;
  controller.myFavoriteValue = myService.value;

  return controller;
});
