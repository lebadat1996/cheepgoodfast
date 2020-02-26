let good = false, cheap = false, fast = false;
let checkBoxGood, checkBoxCheap , checkBoxFast ;
window.onload = init();
function init(){
    checkBoxGood = document.getElementById("btn1");
    checkBoxCheap = document.getElementById("btn2");
    checkBoxFast = document.getElementById("btn3");
}
checkBoxGood.addEventListener("click", function () {
    if (checkBoxGood.checked === true){
        good = true;
        if (cheap && fast){
            fast = false;
            checkBoxFast.checked = false;
        }
    }else {
        good = false;
    }
});
checkBoxCheap.addEventListener("click", function () {
    if (checkBoxCheap.checked === true){
        cheap = true;
        if (good && fast){
            good = false;
            checkBoxGood.checked = false;
        }
    }else {
        cheap = false;
    }
});
checkBoxFast.addEventListener("click", function () {
    if (checkBoxFast.checked === true){
        fast = true;
        if (good && cheap){
            cheap = false;
            checkBoxCheap.checked = false;
        }
    }else {
        fast = false;
    }
});