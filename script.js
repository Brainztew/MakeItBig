const myBtn = document.getElementById("sendBtn");
const fullName = document.getElementById("fullName");

myBtn.addEventListener("click", function() { 
    console.log("Klick på knapp!");
    console.log(fullName.value.toUpperCase());
    fullName.value = fullName.value.toUpperCase();

});


