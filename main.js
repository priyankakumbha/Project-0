var player1 = 'x';
var player2 = 'o';
var turn = 0;
var turnCounter=0;

var boardCheck;
var c0r0,c1r0, c2r0,c0r1,c1r1,c2r1,c0r2,c1r2,c2r2;
var xWin = false;
var oWin = false;
var audio = document.getElementById("song");
var newGame;
var singlePlayerOn = 0;

var newGame = function() {
  turn = 0;
  turnCounter = 0;
  $('#option1').on('click', function(event) {
    singlePlayerOn = 1;
    $(".result1").css('opacity', '0');
    $(".result2").css('opacity', '0');
    $(".displayMessage").hide();
    audio.pause();
    resetGameBoard();
    console.log(' on button clicked');
    });
};

$(document).ready(function() {
  $(".displayMessage").hide();
  $('td').on('click', function(event) {
    turnCounter ++;
    console.log("turn is " + turn);
    if (turn === 0) {
      $(this).text(player1);
      $(this).addClass( "panda" );
      populatValueFromGameBoard();
      isAnyPlayerWinning();
      turn = 1;
    } else {
      $(this).text(player2);
      $(this).addClass( "shifu" );
      populatValueFromGameBoard();
      isAnyPlayerWinning();
      turn = 0;
    }
  }
);
    $('#restart').on('click', function(event) {
      turnCounter = 0 ;
      populatValueFromGameBoard();
      resetGameBoard();
      $(".result1").css('opacity', '0');
      $(".result2").css('opacity', '0');
      audio.pause();
      $(".displayMessage").hide();
    });
    newGame();
});

populatValueFromGameBoard = function() {
  for(i= 0; i< 3;i++) {
    for(j= 0; j< 3;j++) {
      window["c"+i+"r"+j] = $("#c"+i+"r"+j).html();
    }
  }
};


isAnyPlayerWinning = function() {
    if(isPlayerWinningByRow("x")|| isPlayerWinningByColumn("x")||
        isPlayerWinningByDigonalOne("x")||isPlayerWinningByDigonalTwo("x")){
        xWin = true;
        showWinner();
     } else if(isPlayerWinningByRow("o") || isPlayerWinningByColumn("o") ||
        isPlayerWinningByDigonalOne("o") || isPlayerWinningByDigonalTwo("o")){
        oWin = true;
        showWinner();
      } else if(turnCounter == 9) {
        $(".displayMessage").text("It's a tie!").show();
        resetGameBoard();
      }
};

// checking who is winner
var showWinner = function() {
  if (xWin === true) {
    $(".displayMessage").show();
    $(".displayMessage").text("Panda wins!");
    audio.play();
    $(".result1").css('opacity', '1');
    $(".result2").css('opacity', '0');
    resetGameBoard();
  } else {
    if (oWin === true) {
    $(".displayMessage").show();
    $(".displayMessage").text("Shifu wins!");
    audio.play();
    $(".result2").css('opacity', '1');
    $(".result1").css('opacity', '0');
    resetGameBoard();
  }
}
};

//http://stackoverflow.com/questions/5117127/use-dynamic-variable-names-in-javascript
var resetGameBoard = function() {
  $('td').removeClass("panda");
  $('td').removeClass("shifu");
  for(i= 0; i< 3;i++) {
    for(j= 0; j< 3;j++) {
      window["c"+i+"r"+j] = $("#c"+i+"r"+j).text("");
    }
  }
  xWin = false;
  oWin = false;
  newGame();
};

var isPlayerWinningByRow = function(playerName) {
  for(i= 0; i< 3;i++) {
    if( isPlayerWinningForThisRow(i,playerName)){
      return true;
    }
  }
};

var isPlayerWinningByColumn = function(playerName) {

  if((c0r0 == c0r1 && c0r0 == c0r2 && (c0r0 == playerName))) {//First Column
    return true;

  } else if((c1r0 == c1r1 && c1r0 == c1r2 && (c1r0 == playerName))) {//Second Column
    return true;

  } else if((c2r0 == c2r1 && c2r0 == c2r2 && (c2r0 == playerName))){ //third Column
    return true;
  }

};

var isPlayerWinningByDigonalOne = function(playerName) {
  if((c0r0 == c1r1 && c0r0 == c2r2 && (c0r0 == playerName))) {//First Diagonal
    return true;
  }
};

var isPlayerWinningByDigonalTwo = function(playerName) {
  if((c2r0 == c1r1 && c2r0 == c0r2 && (c2r0 == playerName))) {//Second Diagonal
    return true;
  }
};

var isPlayerWinningForThisRow = function(index,playerName) {
  if( window["c0r"+index]== window["c1r"+index] &&
      window["c0r"+index] == window["c2r"+index] &&
      (window["c0r"+index] == playerName)) {
    return true;
  }
};
