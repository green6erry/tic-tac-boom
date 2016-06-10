



$(function(){

function turnEx(){
  $('#side-ex').css('background-color', "lightgray");
  $('#side-oh').css('background-color', "white");
}

function turnOh(){
  $('#side-oh').css('background-color', "lightgray");
  $('#side-ex').css('background-color', "white");
}

 $( ".dialog" ).dialog({ 
    autoOpen: false,
    dialogClass: "no-close",
    buttons: [
    
    {
      text:"O's",
      click: function() {
        $(this).dialog( "close" );
        clicks = 1;
        turnOh();
      }
    },
    {
      text:"X's",
      click: function() {
        $(this).dialog( "close" );
        clicks = 2;
        turnEx();
      }
    }
    ] 
  });

 $( ".dialog[name='turn-decision" ).dialog({ autoOpen: true });


var scoreEx = 0;
var scoreOh = 0;
var clicks = 0;
 //attribute class??

function cartoonSplode(){

  var callout = function(){
    $('.callout').remove();
    var callouts = $('.comic-callout');

    for(var i = 0; i <30; i++){
      setTimeout(function(){
        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute('viewBox', '0 0 500 500');
        svg.setAttribute('width', window.innerWidth * 0.85);
        svg.setAttribute('height', window.innerWidth * 0.85);
        svg.setAttribute('class', 'animated bounceIn callout');
        $(svg).css({
          position: 'fixed',
          class: 'action',
          top: (window.innerHeight * Math.random() * 1.2) - 200,
          left: (window.innerWidth * Math.random() * 1.2) - 200
        });
      svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
      
      svg.innerHTML = callouts[~~(Math.random()* callouts.length)].innerHTML;
      
      document.body.appendChild(svg);
      console.log(svg);
        
      }, i * 120);
    
    }
  
 setTimeout(function(){
  console.log('end?');
    $('body').on('click', function(){
      $('.callout').remove();
    }).appendTo($('body'));
  }, 4000); 
  
}

callout();

}


function boom() {
  $('#splode')[0].volume = 0.4;
  $('#splode')[0].load();
  $('#splode')[0].play();
}

function boomEffect(){
  $('.board').effect({
          easing: "swing",
          times: 2,
          distance: 50,
          duration: 1500,
          direction: 'left',
          complete: function(){
            boom();
          }
        }).effect({
          effect: "shake",
          times: 7,
          distance: 4,
          direction: 'up',
          duration: 400,
        }).effect({
          effect: "shake",
          times: 10,
          distance: 50,
          direction: 'down'
        }).effect({
          effect: "shake",
          times: 10,
          distance: 30,
          duration: 1000,
          direction: 'left'
        }).effect({
          effect: "shake",
          times: 5,
          distance: 70,
          direction: 'right'
        }).effect({
          effect: "shake",
          times: 10,
          distance: 50,
          duration: 1000,
          direction: 'down'
        }).effect({
          effect: "shake",
          times: 10,
          distance: 30,
          direction: 'left'
        }).effect({
          effect: "shake",
          times: 5,
          distance: 70,
          duration: 700,
          direction: 'right'
        }).effect({
          effect: "shake",
          times: 7,
          distance: 4,
          direction: 'up',
          duration: 400
        }).toggle({
          effect: "drop",
          direction: "down",
          duration: 900

        });
      }

function winOh (){
    boomEffect();
    cartoonSplode();

   $( ".dialog[name='oh-win']" ).dialog({
    autoOpen: true,
    buttons: [
    {
      text: "Play Again!",
      click: function(){
        $('.callout').remove();

        $('.board tr td').removeClass('ex').removeClass('oh');
        $('.board').toggle({
          effect: "blind",
          direction: "down",
        });
        $(this).dialog("close");
        
      },
    }],
  });
  scoreOh++;
  clicks++;
  $('.scoreOh').html(scoreOh);
  turnOh();
}

function winEx () {
    boomEffect();
    cartoonSplode();
    $( ".dialog[name='ex-win']" ).dialog({
    autoOpen: true,
    buttons: [
    {
      text: "Play Again!",
      click: function(){
        $('#splosion g').hide();
        $('.board').toggle({
          effect: "blind",
          direction: "left",
        });
        $('.board tr td').removeClass('ex').removeClass('oh');
        $(this).dialog("close");
      },
    }],
  });
  scoreEx++;
  clicks++;
  $('.scoreEx').html(scoreEx);

  turnEx();
}




  function playGame(){
    //t = top, c = center, b = bottom
    //identifying cells
      var tOne = ".top td:nth-of-type(1)";
      var tTwo = ".top td:nth-of-type(2)";
      var tThree = ".top td:nth-of-type(3)";

      var cOne = ".center td:nth-of-type(1)";
      var cTwo = ".center td:nth-of-type(2)";
      var cThree = ".center td:nth-of-type(3)";

      var bOne = ".bottom td:nth-of-type(1)";
      var bTwo = ".bottom td:nth-of-type(2)";
      var bThree = ".bottom td:nth-of-type(3)";

    //cells with class "Oh"
      var tLeft_Oh = $(tOne).hasClass('oh');
      var tMid_Oh = $(tTwo).hasClass('oh');
      var tRight_Oh = $(tThree).hasClass('oh');

      var cLeft_Oh = $(cOne).hasClass('oh');
      var cMid_Oh = $(cTwo).hasClass('oh');
      var cRight_Oh = $(cThree).hasClass('oh');

      var bLeft_Oh = $(bOne).hasClass('oh');
      var bMid_Oh = $(bTwo).hasClass('oh');
      var bRight_Oh = $(bThree).hasClass('oh');

    //cells with class "Ex"

      var tLeft_Ex = $(tOne).hasClass('ex');
      var tMid_Ex = $(tTwo).hasClass('ex');
      var tRight_Ex = $(tThree).hasClass('ex');

      var cLeft_Ex = $(cOne).hasClass('ex');
      var cMid_Ex = $(cTwo).hasClass('ex');
      var cRight_Ex = $(cThree).hasClass('ex');

      var bLeft_Ex = $(bOne).hasClass('ex');
      var bMid_Ex = $(bTwo).hasClass('ex');
      var bRight_Ex = $(bThree).hasClass('ex');
  
  
//O's Winning combos 
    if (1>2) {
    } else if(tLeft_Oh && tMid_Oh && tRight_Oh){
       winOh();

    } else if (cLeft_Oh && cMid_Oh && cRight_Oh){
      winOh();

    } else if (bLeft_Oh && bMid_Oh && bRight_Oh){
      winOh();

    } else if (tLeft_Oh && cLeft_Oh && bLeft_Oh){
      winOh();

    } else if (tMid_Oh && cMid_Oh && bMid_Oh){
      winOh();

    } else if (tRight_Oh && cRight_Oh && bRight_Oh){
      winOh();

    } else if (tLeft_Oh && cMid_Oh && bRight_Oh){
      winOh();

    } else if (bLeft_Oh && cMid_Oh && tRight_Oh){
      winOh();
    }

//X's Winning Combos
 
  else if(tLeft_Ex && tMid_Ex && tRight_Ex){
     winEx();

  } else if (cLeft_Ex && cMid_Ex && cRight_Ex){
    winEx();

  } else if (bLeft_Ex && bMid_Ex && bRight_Ex){
    winEx();

  } else if (tLeft_Ex && cLeft_Ex && bLeft_Ex){
    winEx();

  } else if (tMid_Ex && cMid_Ex && bMid_Ex){
    winEx();

  } else if (tRight_Ex && cRight_Ex && bRight_Ex){
    winEx();

  } else if (tLeft_Ex && cMid_Ex && bRight_Ex){
    winEx();

  } else if (bLeft_Ex && cMid_Ex && tRight_Ex){
    winEx();
  } 


  else {
    console.log("next player's turn");
  }

  
}



$('.board td').click(function(){


  if (clicks%2 === 0) {
      $(this).removeClass('oh').addClass('ex');
      turnOh();

  } else {
      $(this).removeClass('ex').addClass('oh');
      turnEx();
      }

  clicks++;
  playGame();

});








//end
});