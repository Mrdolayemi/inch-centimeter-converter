"use strict";
document.querySelector(".check").addEventListener("click", function() {
    const inputValue = Number(document.querySelector(".input-converter").value);
    const answer = inputValue * 2.54;
    document.querySelector(".answer").textContent = answer;
});
document.querySelector(".refresh").addEventListener("click", function() {
    document.querySelector(".answer").textContent = "0";
    document.querySelector(".input-converter").value = "";
});