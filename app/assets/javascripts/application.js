// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require angular
<<<<<<< HEAD
//= require angular-resource
//= require angular-ui-router
//= require bootstrap
=======
>>>>>>> 87bcc0da954ed6d9d5cc026a2e407ac07211c394

angular
  .module("recourse", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .factory("PostFactory", [
    "$resource",
    PostFactoryFunction
  ])
  .controller("PostIndexController", [
    "PostFactory",
    PostIndexControllerFunction
  ])

function PostFactoryFunction($resource) {
  return $resource("http://localhost:3000/posts/:id.json", {}, {
    update: {method: "PUT"}
  })
}

function PostIndexControllerFunction(PostFactory) {
  this.posts = PostFactory.query()
}

function RouterFunction() {
  // this is a placeholder
}
