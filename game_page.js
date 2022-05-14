player1_name = localStorage.getItem("player1");
player2_name = localStorage.getItem("player2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name;

function send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();

    c1 = word.charAt(1);
    c3 = word.charAt(word.length-1);
    c2 = word.charAt(Math.floor(word.length/2));

    r1 = word.replace(c1,"_");
    r2 = r1.replace(c2,"_");
    r3 = r2.replace(c3,"_");

    question_word = "<h4> Q."+r3+"</h4>";
    answer_word = "<br> Answer: <input type='text' id= 'inputop'>";
    button_btn = "<br><br><button onclick='go()' class='btn btn-danger'>Check</button>";
    sum_it_up = question_word+answer_word+button_btn;
    document.getElementById("output").innerHTML = sum_it_up;
    document.getElementById("word").value = "";
}

question_turn = "player1";
answer_turn = "player2"

function go(){

    get_answer = document.getElementById("inputop").value;
    answer = get_answer.toLowerCase();
    if(answer == word){
        if (answer_turn == "player1"){
            player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = player1_score;

        }
    else{
        player2_score = player2_score +1
        document.getElementById("player2_score").innerHTML = player2_score;
    }
    }
     
    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn -" + player2_name;
    }
    else{
    question_turn = "player1";
    document.getElementById("player_question").innerHTML = "Question Turn -" + player1_name;
    }

    if(answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn -" + player2_name;
    }
    else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn -" + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}