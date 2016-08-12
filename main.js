var playerX = 'x'; // turn = 0
var playerO = 'o'; // turn = 1
var compGen; //for ai
var turn = 0;

var boardCheck; // function to check value in each cell
var a1; // value within each cell
var a2;
var a3;
var b1;
var b2;
var b3;
var c1;
var c2;
var c3;

var checkWin; // function that checks the board for winning combo
var xWin = false; // true if X wins
var oWin = false; // true if O wins
var winAlert;





var newGame;
var clearBoard;
var singlePlayerOn = 0;

var newGame = function() {

    turn = 0;
    $('#option1').on('click', function(event) {
        singlePlayerOn = 1;
        $(".result1").css('opacity', '0');
        $(".result2").css('opacity', '0');
        $(".displayMessage").hide();
        clearBoard();
          console.log(' on button clicked');
    });


};
// INITIALIZES GAME - keep after var newGame
$(document).ready(function() {

 // var audioWin = new Audio('winers.mp3');
    $('td').on('click', function(event) {
// $(".displayMessage").val('');
            console.log("turn is " + turn);
            if (turn === 0) {
                console.log("ANYTHING");


                $(this).text(playerX);

                boardCheck();
                checkWin();
                turn = 1;
                if (singlePlayerOn == 1) {
                    compGen();
                }
            } else {

                $(this).text(playerO);

                console.log("EveryTHING");
                boardCheck();
                checkWin();
                turn = 0;
            }
        }

    );
    $('#restart').on('click', function(event) {
        singlePlayerOn = 0;
        boardCheck();
        clearBoard();
        $(".result1").css('opacity', '0');
        $(".result2").css('opacity', '0');
        // $(".displayMessage").text('');
        $(".displayMessage").hide();


    });
    newGame();
});


// CREATES A FUNCTION TO DETECT WHAT IS IN EACH BOX
boardCheck = function() {
    a1 = $('#a1').html();
    a2 = $('#a2').html();
    a3 = $('#a3').html();
    b1 = $('#b1').html();
    b2 = $('#b2').html();
    b3 = $('#b3').html();
    c1 = $('#c1').html();
    c2 = $('#c2').html();
    c3 = $('#c3').html();
};

// CREATES A FUNCTION TO DETECT A WIN OR A TIE
checkWin = function() { // CHECKS IF X WON
    if ((a1 == a2 && a1 == a3 && (a1 == "x")) || //first row
        (b1 == b2 && b1 == b3 && (b1 == "x")) || //second row
        (c1 == c2 && c1 == c3 && (c1 == "x")) || //third row
        (a1 == b1 && a1 == c1 && (a1 == "x")) || //first column
        (a2 == b2 && a2 == c2 && (a2 == "x")) || //second column
        (a3 == b3 && a3 == c3 && (a3 == "x")) || //third column
        (a1 == b2 && a1 == c3 && (a1 == "x")) || //diagonal 1
        (a3 == b2 && a3 == c1 && (a3 == "x")) //diagonal 2
    ) {
        xWin = true;
        winAlert();

    } else { // CHECKS IF O WON
        if ((a1 == a2 && a1 == a3 && (a1 == "o")) || //first row
            (b1 == b2 && b1 == b3 && (b1 == "o")) || //second row
            (c1 == c2 && c1 == c3 && (c1 == "o")) || //third row
            (a1 == b1 && a1 == c1 && (a1 == "o")) || //first column
            (a2 == b2 && a2 == c2 && (a2 == "o")) || //second column
            (a3 == b3 && a3 == c3 && (a3 == "o")) || //third column
            (a1 == b2 && a1 == c3 && (a1 == "o")) || //diagonal 1
            (a3 == b2 && a3 == c1 && (a3 == "o")) //diagonal 2
        ) {
            oWin = true;
            winAlert();

        } else { // CHECKS FOR TIE GAME IF ALL CELLS ARE FILLED

            if (((a1 == "x") || (a1 == "o")) && ((b1 == "x") || (b1 == "o")) &&
                ((c1 == "x") || (c1 == "o")) && ((a2 == "x") || (a2 == "o")) &&
                ((b2 == "x") || (b2 == "o")) && ((c2 == "x") || (c2 == "o")) &&
                ((a3 == "x") || (a3 == "o")) && ((b3 == "x") || (b3 == "o")) &&
                ((c3 == "x") || (c3 == "o"))) {

                $(".displayMessage").text("It's a tie!").show();
                // winAlert();


            }
        }
    }
};


// DECLARES WHO WON
var winAlert = function() {
    if (xWin === true) {
        // $(".displayMessage").val('');
        $(".displayMessage").show();
        $(".displayMessage").text("X wins!");
        // audioWin.play();
        // audioWin.play();
        // alert("X Wins!");
        $(".result1").css('opacity', '1');
        $(".result2").css('opacity', '0');


        clearBoard();


    } else {
        if (oWin === true) {
            // $(".displayMessage").val('');
            $(".displayMessage").show();
            $(".displayMessage").text("O wins!");
            // alert("0 Wins!");
            $(".result2").css('opacity', '1');
            $(".result1").css('opacity', '0');
// audioWin.play();
            clearBoard();

        }
    }
};


// NEWGAME BUTTON CLEARS THE BOARD, RESTARTS GAME, AND RESETS THE WINS
var clearBoard = function() {
    // console.log(" clear game ");
    a1 = $('#a1').text("");
    b1 = $('#b1').text("");
    c1 = $('#c1').text("");
    a2 = $('#a2').text("");
    b2 = $('#b2').text("");
    c2 = $('#c2').text("");
    a3 = $('#a3').text("");
    b3 = $('#b3').text("");
    c3 = $('#c3').text("");
    xWin = false;
    oWin = false;
    newGame();
    // window.setTimeout(location.reload(), 5000);

};


var compGen = function() {
    if (a1 === "" && ((a3 === "x" && a2 === "x") || (c3 === "x" && b2 === "x") || (c1 === "x" && b1 === "x"))) {

        $('#a1').text("o");
        // $('.dollImage2').css('opacity', '1');
        // $('.dollImage1').css('opacity', '0');
        turn = 0;
    } else {
        if (a2 === "" && ((a1 === "x" && a3 === "x") || (c2 === "x" && b2 === "x"))) {

            $('#a2').text("o");
            // $('.dollImage2').css('opacity', '1');
            // $('.dollImage1').css('opacity', '0');
            turn = 0;
        } else {
            if (a3 === "" && ((a1 === "x" && a2 === "x") || (c1 === "x" && b2 === "x") || (c3 === "x" && b3 === "x"))) {

                $('#a3').text("o");
                // $('.dollImage2').css('opacity', '1');
                // $('.dollImage1').css('opacity', '0');
                turn = 0;
            } else {
                if (c3 === "" && ((c1 == "x" && c2 == "x") || (a1 == "x" && b2 == "x") || (a3 == "x" && b3 == "x"))) {
                    $('#c3').text("o");
                    // $('.dollImage2').css('opacity', '1');
                    // $('.dollImage1').css('opacity', '0');
                    turn = 0;
                } else {
                    if (c1 === "" && ((c3 == "x" && c2 == "x") || (a3 == "x" && b2 == "x") || (a1 == "x" && b1 == "x"))) {
                        $('#c1').text("o");
                        // $('.dollImage2').css('opacity', '1');
                        // $('.dollImage1').css('opacity', '0');
                        turn = 0;
                    } else {
                        if (c2 === "" && ((c3 == "x" && c1 == "x") || (a2 == "x" && b2 == "x"))) {
                            $('#c2').text("o");
                            // $('.dollImage2').css('opacity', '1');
                            // $('.dollImage1').css('opacity', '0');
                            turn = 0;
                        } else {
                            if (b1 === "" && ((b3 == "x" && b2 == "x") || (a1 == "x" && c1 == "x"))) {
                                $('#b1').text("o");
                                // $('.dollImage2').css('opacity', '1');
                                // $('.dollImage1').css('opacity', '0');
                                turn = 0;
                            } else {
                                if (b3 === "" && ((a3 == "x" && c3 == "x") || (b2 == "x" && b1 == "x"))) {
                                    $('#b3').text("o");
                                    // $('.dollImage2').css('opacity', '1');
                                    // $('.dollImage1').css('opacity', '0');
                                    turn = 0;
                                } else {
                                    if (b2 === "" && ((a3 == "x" && c1 == "x") || (c3 == "x" && a1 == "x") || (b3 == "x" && b1 == "x") || (c2 == "x" && a2 == "x"))) {
                                        $('#b2').text("o");
                                        // $('.dollImage2').css('opacity', '1');
                                        // $('.dollImage1').css('opacity', '0');
                                        turn = 0;
                                    } else { // IF NO OPP TO BLOCK A WIN, THEN PLAY IN ONE OF THESE SQUARES
                                        if (b2 === "") {
                                            $('#b2').text("o");
                                            // $('.dollImage2').css('opacity', '1');
                                            // $('.dollImage1').css('opacity', '0');
                                            turn = 0;

                                        } else {
                                            if (a1 === "") {
                                                $('#a1').text("o");
                                                // $('.dollImage2').css('opacity', '1');
                                                // $('.dollImage1').css('opacity', '0');
                                                turn = 0;

                                            } else {
                                                if (c3 === "") {
                                                    $('#c3').text("o");
                                                    // $('.dollImage2').css('opacity', '1');
                                                    // $('.dollImage1').css('opacity', '0');
                                                    turn = 0;

                                                } else {
                                                    if (c2 === "") {
                                                        $('#c2').text("o");
                                                        // $('.dollImage2').css('opacity', '1');
                                                        // $('.dollImage1').css('opacity', '0');
                                                        turn = 0;

                                                    } else {
                                                        if (b1 === "") {
                                                            $('#b1').text("o");
                                                            // $('.dollImage2').css('opacity', '1');
                                                            // $('.dollImage1').css('opacity', '0');
                                                            turn = 0;

                                                        }
                                                    }
                                                }
                                            }


                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
