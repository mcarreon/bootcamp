document.addEventListener('DOMContentLoaded', function () {
    
    document.getElementById("growBtn").addEventListener("click", function(){

        document.getElementById("box").style.height = "300px";

    });

    document.getElementById("blueBtn").addEventListener("click", function(){

        document.getElementById("box").style.backgroundColor = "blue";

    });

    function fade(element) {
        var op = 1;  // initial opacity
        var timer = setInterval(function () {
            if (op <= 0.1){
                clearInterval(timer);
                element.style.display = 'none';
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 50);
    }

    function unfade(element) {
        var op = 0.1;  // initial opacity
        element.style.display = 'block';
        var timer = setInterval(function () {
            if (op >= 1){
                clearInterval(timer);
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.1;
        }, 10);
    }

    document.getElementById("fadeBtn").addEventListener("click", function(){

        fade(document.getElementById("box"));

    });

    document.getElementById("resetBtn").addEventListener("click", function(){

        document.getElementById("box").style.height = "150px";
        document.getElementById("box").style.backgroundColor = "orange";
        unfade(document.getElementById("box"));
    });
        
});