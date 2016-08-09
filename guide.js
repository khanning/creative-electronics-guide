$(function() {
  var allPanels = $( '.accordion > dd' );
  var activePanel = $( '#nav-start' );

  $( '#content-start' ).load('gettingstarted.html');
  $( '#content-prep' ).load('prep.html');
  $( '#content-p1' ).load('p1.html');
  $( '#content-p2' ).load('p2.html');
  $( '#content-p3' ).load('p3.html');
  $( '#content-p4' ).load('p4.html');
  $( '#content-p5' ).load('p5.html');
  $( '#content-p6' ).load('p6.html');
  $( '#content-p7' ).load('p7.html');
  $( '#content-p8' ).load('p8.html');

  allPanels.hide();
  activePanel.next().slideDown();

  $( '.accordion > .nav > a').click(function() {
    allPanels.slideUp();
    activePanel = $( this ).parent();
    if (activePanel.next().css('display') != 'block') {
      activePanel.next().slideDown();
    }
    return false;
  });
});
