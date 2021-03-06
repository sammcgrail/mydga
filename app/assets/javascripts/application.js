// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require dataTables/jquery.dataTables
//= require d3
//= require c3
//= require_tree .

$(function(){ $(document).foundation(); });

$(document).ready( function () {
  $('#data_files').DataTable({
    "paging":   false,
    "info":     false
  } );

   $('#locations').DataTable({
     "paging":   false,
     "info":     false
   } );

   $('#location-transformer-list').DataTable({
     "paging":   false,
     "info":     false
   } );

   $('#transformers').DataTable({
     "paging":   false,
     "info":     false
   } );

   $('#transformer-sample-list').DataTable({
     "paging":   false,
     "info":     false
   } );

   $('#samples').DataTable({
     "paging":   false,
     "info":     false,
   } );

} );
