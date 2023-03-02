function mudarTema () {
 document.getElementById("body").style.backgroundColor =  "white";
}
function addUser() {
    username = document.getElementById("userName").value;
    localStorage.setItem("username",username);
    window.location="kwitter_room.html";
    
}