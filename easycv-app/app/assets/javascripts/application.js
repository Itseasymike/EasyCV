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

 $(document).ready(function(){

      $('.parallax').parallax();

      $('.carousel.carousel-slider').carousel({full_width: true});


    //Functionality for Game
    console.log("Loading scripts");

     var resume = $('<img src="assets/evil-resume.png" alt="resume" class="resume">');
     var goHome = $('<div id="home"><p>Hey, playing games is great and all but how about we create that one awesome resume you always wanted?</p><a href="/resumes">Build my resume!</a><br /><a id="exit" href="#">No, I\'\m not ready yet!</a></div>');
     //var goHome = $('<div id="modal1" class="modal"><div class="modal-content"><h4>Modal Header</h4><p>I think it may be time to put the game down and focus on creating that awesome resume!</p></div><div class="modal-footer"><a href="/resumes" class=" modal-action modal-close waves-effect waves-green btn-flat">Build your resume!</a><a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat" id="close">No Im not ready yet!</a></div></div>');

      function showImage() {
        var popImg = setInterval(function() {
          $(' #game_container ').append(resume)
        },1000);
        var gameOver = setInterval(function() {
          $(' #game_container ').append(goHome);
        }, 10000);
      }
      showImage();


      $(document).on('click', '.resume', function(e) {
        $(this).remove();
      });

      resume.css('right', Math.floor(Math.random()*(1200-320) + 320));

      $(' #exit ').click(function(e) {
        location.reload();
      });


});


