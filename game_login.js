function add() {
    player1 = document.getElementById("Player1_name").value ;
    player2 = document.getElementById("Player2_name").value ; 

    localStorage.setItem("player1", player1);
    localStorage.setItem("player2", player2);

    window.location = "game_page.html";
}