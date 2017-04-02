var x=navbar.width;

function home(){
    $("#home").show();
    $("#signs").hide();
    $("#info").hide();
}
    
function types() {
    $("#signs").show();
    $("#home").hide();
    $("#info").hide();
}

function info() {
    $("#signs").hide();
    $("#home").hide();
    $("#info").show();
}