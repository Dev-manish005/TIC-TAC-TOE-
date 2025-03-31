var flag = true;
let states = [1, 0, 1, 0, 1, 0, 0, 1, 0];
var Turn_div = document.getElementById("Turn");
document.getElementById("container").addEventListener('click', function (event) {
    console.log(event.target.id);
    // Here event.target.id is directly trageting to the div on which i am clicking because of addEventListener() function.
    var current_div_id = event.target.id;//It stores the id of div on which over i click.
    var current_div = document.getElementById(current_div_id);
    
    if (current_div_id && current_div.innerText == "" && (states[current_div_id] == 0 || states[current_div_id] == 1)) {
        //The above if condition will check whether the box is fill or not to prevent  over-lapping.
        if (flag) {
            document.getElementById(current_div_id).style.color = "#63E6BE";
            document.getElementById(current_div_id).innerText = "X";
            states[current_div_id] = "X";
            Turn_div.innerText="O Turn !!";
            
        }
        else {
            document.getElementById(current_div_id).style.color = "#FFD43B";
            document.getElementById(current_div_id).innerText = "O";
            states[current_div_id] = "O";
            Turn_div.innerText="X Turn !!";
        }
        //The above if else condition can be also done by using odd/even logic.
        //But preffer flag logic because it will used in many places.
        flag = !flag;//It will convert the flag alternately.
        check_winner(!flag);
        console.log(states);

    }


});

var winner_div = document.getElementById("Winner");
var Draw_div = document.getElementById("Draw");
var user1 = document.getElementById("user1");
var user2 = document.getElementById("user2");
var player1 = 0;
var player2 = 0;
var Draw = 0;

function check_winner(player) {

    if (states[0] == states[1] && states[0] == states[2]) {
        if (player) {
            winner_div.innerText = "X Winner!";
            player1++;
            user1.innerText = player1;
            // flag = player;
            
        }
        else {
            winner_div.innerText = "O Winner!";
            player2++;
            user2.innerText = player2;
            // flag = player;
        }
        Disabled();
        Turn_div.innerText=" ";
        // setTimeout(resetGame,5000);
    }
    else if (states[3] == states[4] && states[3] == states[5]) {
        if (player) {
            winner_div.innerText = "X Winner!";
            player1++;
            user1.innerText = player1;
        }
        else {
            winner_div.innerText = "O Winner!";
            player2++;
            user2.innerText = player2;
        }
        Disabled();
        Turn_div.innerText=" ";
        // setTimeout(resetGame,5000);
    }
    else if (states[6] == states[7] && states[6] == states[8]) {
        if (player) {
            winner_div.innerText = "X Winner!";
            player1++;
            user1.innerText = player1;
        }
        else {
            winner_div.innerText = "O Winner!";
            player2++;
            user2.innerText = player2;
        }
        Disabled();
        Turn_div.innerText=" ";
        // setTimeout(resetGame,5000);
    }
    else if (states[0] == states[3] && states[0] == states[6]) {
        if (player) {
            winner_div.innerText = "X Winner!";
            player1++;
            user1.innerText = player1;
        }
        else {
            winner_div.innerText = "O Winner!";
            player2++;
            user2.innerText = player2;
        }
        Disabled();
        Turn_div.innerText=" ";
        // setTimeout(resetGame,5000);
    }
    else if (states[1] == states[4] && states[1] == states[7]) {
        if (player) {
            winner_div.innerText = "X Winner!";
            player1++;
            user1.innerText = player1;
        }
        else {
            winner_div.innerText = "O Winner!";
            player2++;
            user2.innerText = player2;
        }
        Disabled();
        Turn_div.innerText=" ";
        // setTimeout(resetGame,5000);
    }
    else if (states[2] == states[5] && states[2] == states[8]) {
        if (player) {
            winner_div.innerText = "X Winner!";
            player1++;
            user1.innerText = player1;
        }
        else {
            winner_div.innerText = "O Winner!";
            player2++;
            user2.innerText = player2;
        }
        Disabled();
        Turn_div.innerText=" ";
        // setTimeout(resetGame,5000);
    }
    else if (states[0] == states[4] && states[0] == states[8]) {
        if (player) {
            winner_div.innerText = "X Winner!";
            player1++;
            user1.innerText = player1;
        }
        else {
            winner_div.innerText = "O Winner!";
            player2++;
            user2.innerText = player2;
        }
        Disabled();
        Turn_div.innerText=" ";
        // setTimeout(resetGame,5000);
    }
    else if (states[2] == states[4] && states[2] == states[6]) {
        if (player) {
            winner_div.innerText = "X Winner!";
            player1++;
            user1.innerText = player1;
        }
        else {
            winner_div.innerText = "O Winner!";
            player2++;
            user2.innerText = player2;
        }
        Disabled();
        Turn_div.innerText=" ";
        // setTimeout(resetGame,5000);
    }
    else {
        //check for draw
        let i, count = 9;
        for (i = 0; i < 9; i++) {
            if (states[i] == 'X' || states[i] == 'O') {
                count--;
            }
        }

        if (count == 0){
            Draw++;
            Draw_div.innerText=Draw;
            winner_div.innerText = "Its Draw !!";
            Turn_div.innerText=" ";
            // setTimeout(resetGame,5000);
        }
       

    }
   

}

function Disabled() {// This function will execute every time while checking winner and if winner found
    //before all box completed then it will fill null value in remaining places in states to prevent over-doing.
    let i;
    for (i = 0; i < 9; i++) {
        if (states[i] == 1 || states[i] == 0) {
            states[i] = null;
        }
    }
    
}

function restartGame() {// This will restart game .
    location.reload();// This Function help's in reloading the page.
}

function resetGame() {
    // clear UI values (X, O) and reset background color.
    let i;
    for (i = 0; i < 9; i++) {
        document.getElementById(i).innerText = "";
        
    }

    //set to initial value
    states = [1, 0, 1, 0, 1, 0, 0, 1, 0];

    flag = true;
    winner_div.innerText="";
    Turn_div.innerText="X Turn !!";

}

