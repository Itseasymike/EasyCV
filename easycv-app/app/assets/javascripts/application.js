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


    // Functionality for Game
    console.log("Loading scripts");


    // Figure out how to make this less redundant
     var resume0 = $('<img src="assets/evil-resume.png" alt="resume" class="resume0">');
     var resume1 = $('<img src="assets/evil-resume.png" alt="resume" class="resume1">');
     var resume2 = $('<img src="assets/evil-resume.png" alt="resume" class="resume2">');
     var resume3 = $('<img src="assets/evil-resume.png" alt="resume" class="resume3">');


     var goHome = $('<div id="home"><p>Hey, playing games is great and all but how about we create that one awesome resume you always wanted?</p><a href="/resumes">Yes, build my resume!</a><br /><br /><a id="exit" href="#">No, I\'\m not ready yet!</a></div>');


     // Array of images
     var resArr = [];
      resArr.push(resume0);
      resArr.push(resume1);
      resArr.push(resume2);
      resArr.push(resume3);



      function randomItem(min, max) {
        var min = Math.ceil(min);
        var max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      // Randomly appends images to DOM
      function showImage() {
        var popImg = setInterval(function() {
          $(' #game_container ').append(resArr[randomItem(0, 10)]);
        },300);
        // resume.css('right', Math.floor(Math.random()*(1200-320) + 320));
        var gameOver = setInterval(function() {
          $(' #game_container ').append(goHome);
        }, 15000);
      }
      showImage();



      // $(this) = .resumeX
      // Figure out why using .effect('explode'); stops the flow of random items

      $(document).on('click', '.resume0', function(e) {
        $(this).remove();
      });

      $(document).on('click', '.resume1', function(e) {
        $(this).remove();
      });

      $(document).on('click', '.resume2', function(e) {
        $(this).remove();
      });

      $(document).on('click', '.resume3', function(e) {
        $(this).remove();
      });

       $(document).on('click', '.resume0', function(e) {
        $(this).remove();

      });

      // $(document).on('click', '.resume1', function(e) {
      //   $(this).effect('explode').remove();
      //   // $(this).remove();
      // });

      // $(document).on('click', '.resume2', function(e) {
      //   $(this).effect('explode').remove();
      //   // $(this).remove();
      // });

      // $(document).on('click', '.resume3', function(e) {
      //   $(this).effect('explode').remove();
      //   // $(this).remove();
      // });


      $(' #exit ').click(function(e) {
        $(' #home').remove();
        showImage();
      });


});


