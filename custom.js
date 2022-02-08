var game = document.querySelector(".game");
var angelo = document.querySelector(".angelo");
var candys = document.querySelector(".candys");
var AngeloLeft = parseInt(window.getComputedStyle(angelo).getPropertyValue("left"));
var AngeloBottom = parseInt(window.getComputedStyle(angelo).getPropertyValue("bottom"));
var score = 0;

/* Основни функции за движение - Ляво и Дясно */
function moveAngeloLeft(){

    if(AngeloLeft > 0){
        AngeloLeft -= 15;
        angelo.style.left = AngeloLeft + `px`;
    }

}
function moveAngeloRight(){

    if(AngeloLeft < 700){
        AngeloLeft += 15;
        angelo.style.left = AngeloLeft + `px`;
    }

}
function control(k){

    if(k.key == "ArrowLeft"){
        moveAngeloLeft();
    }
    if(k.key == "ArrowRight"){
        moveAngeloRight();
    }

}

/* ---------------------------- */

/* Падане на сладките - на случаен принцип */
function generateCandys(){
    var candyBottom = 470;
    var candyLeft = Math.floor(Math.random()*620);
    var candy = document.createElement(`div`);
    candy.setAttribute("class", "candy");
    candys.appendChild(candy);
    function fallDownCandy(){
        

        /* Проверка за хващане на бонбон */
        if (candyBottom < AngeloBottom + 70 && candyBottom > AngeloBottom && candyLeft > AngeloLeft - 20 && candyLeft < AngeloLeft + 70) {

            /* Премехване след хващане */
            candys.removeChild(candy)
            clearInterval(fallInterval);
            /* Отчитане на +1 точка след всяко хващане */
            score++;

        }

        /* Проверка за изпуснат бонбон */
        if (candyBottom < AngeloBottom){
            /* Кпай на играта */
            alert("Game over!" +"\n" + "Your Score is:  " + score);
            clearInterval(fallInterval);
            clearTimeout(candyTimeout);
            window.location.href = "index.html";

        }

        //Падане на бонбоните:
        candyBottom -= 3;
        candy.style.bottom = candyBottom + `px`;
        candy.style.left = candyLeft + `px`;
    }

    var fallInterval =  setInterval(fallDownCandy, 19);
    var candyTimeout =  setTimeout(generateCandys, 1900);
    
}
generateCandys();
document.addEventListener("keydown", control);