var player1 = 'x'; // turn = 0
var player2 = 'o'; // turn = 1
var compGen; //for ai
var turn = 0;

var boardCheck; // function to check value in each cell
var a1; // value within each cell
var a2;
var a3;
var a4;
var a5;
var a6;
var a7;
var a8;
var a9;

var checkWin; // function that checks the board for winning combo
var xWin = false; // true if X wins
var oWin = false; // true if O wins
var winAlert;
var audio = document.getElementById("song");
var audio1 = document.getElementById("song");


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
        audio.pause();
        audio1.pause();
        clearBoard();
        console.log(' on button clicked');
    });
};
// INITIALIZES GAME - keep after var newGame
$(document).ready(function() {
    $('td').on('click', function(event) {
        console.log("turn is " + turn);
            if (turn === 0) {
                console.log("ANYTHING");
                $(this).text(player1);

                boardCheck();
                checkWin();
                turn = 1;
                if (singlePlayerOn == 1) {
                    compGen();
                }
            } else {
                $(this).text(player2);
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
        audio.pause();
        audio1.pause();
        $(".displayMessage").hide();
});
    newGame();
});


// CREATES A FUNCTION TO DETECT WHAT IS IN EACH BOX
boardCheck = function() {
    a1 = $('#a1').html();
    a2 = $('#a2').html();
    a3 = $('#a3').html();
    a4 = $('#a4').html();
    a5 = $('#a5').html();
    a6 = $('#a6').html();
    a7 = $('#a7').html();
    a8 = $('#a8').html();
    a9 = $('#a9').html();
};

// CREATES A FUNCTION TO DETECT A WIN OR A TIE
checkWin = function() { // CHECKS IF X WON
    if ((a1 == a2 && a1 == a3 && (a1 == "x")) || //first row
        (a4 == a5 && a4 == a6 && (a4 == "x")) || //second row
        (a7 == a8 && a7 == a9 && (a7 == "x")) || //third row
        (a1 == a4 && a1 == a7 && (a1 == "x")) || //first column
        (a2 == a5 && a2 == a8 && (a2 == "x")) || //second column
        (a3 == a6 && a3 == a9 && (a3 == "x")) || //third column
        (a1 == a5 && a1 == a9 && (a1 == "x")) || //diagonal 1
        (a3 == a5 && a3 == a7 && (a3 == "x")) //diagonal 2
    ) {
        xWin = true;
        winAlert();

    } else { // CHECKS IF O WON
        if ((a1 == a2 && a1 == a3 && (a1 == "o")) || //first row
            (a4 == a5 && a4 == a6 && (a4 == "o")) || //second row
            (a7 == a8 && a7 == a9 && (a7 == "o")) || //third row
            (a1 == a4 && a1 == a7 && (a1 == "o")) || //first column
            (a2 == a5 && a2 == a8 && (a2 == "o")) || //second column
            (a3 == a6 && a3 == a9 && (a3 == "o")) || //third column
            (a1 == a5 && a1 == a9 && (a1 == "o")) || //diagonal 1
            (a3 == a5 && a3 == a7 && (a3 == "o")) //diagonal 2
        ) {
            oWin = true;
            winAlert();

        } else { // checks for draw condition

            if (((a1 == "x") || (a1 == "o")) && ((a4 == "x") || (a4 == "o")) &&
                ((a7 == "x") || (a7 == "o")) && ((a2 == "x") || (a2 == "o")) &&
                ((a5 == "x") || (a5 == "o")) && ((a8 == "x") || (a8 == "o")) &&
                ((a3 == "x") || (a3 == "o")) && ((a6 == "x") || (a6 == "o")) &&
                ((a9 == "x") || (a9 == "o"))) {

                $(".displayMessage").text("It's a tie!").show();
                clearBoard();
        }
    }
}
};


// checking who is winner
var winAlert = function() {
    if (xWin === true) {
        $(".displayMessage").show();
        $(".displayMessage").text("X wins!");
        audio.play();
        $(".result1").css('opacity', '1');
        $(".result2").css('opacity', '0');
        clearBoard();
        } else {
        if (oWin === true) {
        $(".displayMessage").show();
        $(".displayMessage").text("O wins!");
        audio1.play();
        $(".result2").css('opacity', '1');
        $(".result1").css('opacity', '0');
        clearBoard();
        }
    }
};


 // removing elements from cells
var clearBoard = function() {
    a1 = $('#a1').text("");
    a4 = $('#a4').text("");
    a7 = $('#a7').text("");
    a2 = $('#a2').text("");
    a5 = $('#a5').text("");
    a8 = $('#a8').text("");
    a3 = $('#a3').text("");
    a6 = $('#a6').text("");
    a9 = $('#a9').text("");
    xWin = false;
    oWin = false;
    newGame();
};


var compGen = function() {
    if (a1 === "" && ((a3 === "x" && a2 === "x") || (a9 === "x" && a5 === "x") || (a7 === "x" && a5 === "x"))) {
        $('#a1').text("o");
        turn = 0;
    } else {
        if (a2 === "" && ((a1 === "x" && a3 === "x") || (a8 === "x" && a5 === "x"))) {
            $('#a2').text("o");
            turn = 0;
        } else {
            if (a3 === "" && ((a1 === "x" && a2 === "x") || (a7 === "x" && a5 === "x") || (a9 === "x" && a6 === "x"))) {
                $('#a3').text("o");
                turn = 0;
            } else {
                if (a9 === "" && ((a7 == "x" && a8 == "x") || (a1 == "x" && a5 == "x") || (a3 == "x" && a6 == "x"))) {
                    $('#a9').text("o");
                    turn = 0;
                } else {
                    if (a7 === "" && ((a9 == "x" && a8 == "x") || (a3 == "x" && a5 == "x") || (a1 == "x" && a4 == "x"))) {
                        $('#a7').text("o");
                        turn = 0;
                    } else {
                        if (a8 === "" && ((a9 == "x" && a7 == "x") || (a2 == "x" && a5 == "x"))) {
                            $('#a8').text("o");
                            turn = 0;
                        } else {
                            if (a4 === "" && ((a6 == "x" && a5 == "x") || (a1 == "x" && a7 == "x"))) {
                                $('#a4').text("o");
                                turn = 0;
                            } else {
                                if (a6 === "" && ((a3 == "x" && a9 == "x") || (a5 == "x" && a4 == "x"))) {
                                    $('#a6').text("o");
                                    turn = 0;
                                } else {
                                    if (a5 === "" && ((a3 == "x" && a7 == "x") || (a9 == "x" && a1 == "x") || (a6 == "x" && a4 == "x") || (a8 == "x" && a2 == "x"))) {
                                        $('#a5').text("o");
                                        turn = 0;
                                    } else {
                                        if (a5 === "") {
                                            $('#a5').text("o");
                                            turn = 0;
                                        } else {
                                            if (a1 === "") {
                                                $('#a1').text("o");
                                                turn = 0;
                                            } else {
                                                if (a9 === "") {
                                                    $('#a9').text("o");
                                                    turn = 0;

                                                } else {
                                                    if (a8 === "") {
                                                        $('#a8').text("o");
                                                        turn = 0;

                                                    } else {
                                                        if (a4 === "") {
                                                            $('#a4').text("o");
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
