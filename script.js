const fromSelected = document.getElementById("from-select");
const toSelected = document.getElementById("to-select");
const from = document.getElementById("from-input");
const to = document.getElementById("to-input");
const error = document.getElementById("error");
const swap = document.getElementById("swap-button");
const reset = document.getElementById("reset-button");

let fromNS = "Binary", toNS = "Binary";

reset.addEventListener('click', () => {
   from.value = "";
   to.value = "";
});

swap.addEventListener('click', () => {
   // let changeTo = toSelected.value;
   // let changeFrom = fromSelected.value;
   // fromSelected.value = changeTo;
   // toSelected.value = changeFrom;
   var first = document.getElementById("from-select");
   var second = document.getElementById("to-select");
    
   let temp;
   temp = first.value;
   first.value = second.value;
   second.value = temp;



      let inputFrom = from.value;
      let inputTo = to.value;
      to.value = inputFrom;
      from.value = inputTo;
});

fromSelected.addEventListener("change", function () {
   fromNS = fromSelected.options[fromSelected.selectedIndex].text;
   from.placeholder = fromNS + " Number";
});

toSelected.addEventListener("change", function () {
   toNS = toSelected.options[toSelected.selectedIndex].text;
   to.placeholder = toNS + " Number";
});

from.addEventListener("input", function () {
   error.style.display = "none";
});

let fromValue;
document.getElementById("convert-button").addEventListener("click", function () {
   switch (fromNS) {
      case "Binary":
         fromValue = from.value;
         if (/^[01]*$/.test(fromValue)) {
            switch (toNS) {
               case "Decimal": to.value = parseInt(fromValue, 2);
                  break;
               case "Hexadecimal": to.value = parseInt(fromValue, 2).toString(16).toUpperCase();
                  break;
               case "Octal": to.value = parseInt(fromValue, 2).toString(8);
                  break;
               default: to.value = fromValue;
            }
         } else {
            error.style.display = "inherit";
            error.innerText = "Invalid " + fromNS + " Number";
            to.value = "";
         }
         break;

      case "Decimal":
         fromValue = from.value;
         if (/^[0-9]*$/.test(fromValue)) {
            switch (toNS) {
               case "Binary": to.value = Math.abs(fromValue).toString(2);
                  break;
               case "Hexadecimal": to.value = Math.abs(fromValue).toString(16).toUpperCase();
                  break;
               case "Octal": to.value = Math.abs(fromValue).toString(8);
                  break;
               default: to.value = fromValue;
            }
         } else {
            error.style.display = "inherit";
            error.innerText = "Invalid " + fromNS + " Number";
            to.value = "";
         }
         break;

      case "Hexadecimal":
         fromValue = from.value;
         if (/^[0-9a-fA-F]*$/.test(fromValue)) {
            switch (toNS) {
               case "Binary": to.value = parseInt(fromValue, 16).toString(2);
                  break;
               case "Decimal": to.value = parseInt(fromValue, 16);
                  break;
               case "Octal": to.value = parseInt(fromValue, 16).toString(8);
                  break;
               default: to.value = fromValue;
            }
         } else {
            error.style.display = "inherit";
            error.innerText = "Invalid " + fromNS + " Number";
            to.value = "";
         }
         break;

      case "Octal":
         fromValue = from.value;
         if (/^[0-7]*$/.test(fromValue)) {
            switch (toNS) {
               case "Binary": to.value = parseInt(fromValue, 8).toString(2);
                  break;
               case "Decimal": to.value = parseInt(fromValue, 8);
                  break;
               case "Hexadecimal": to.value = parseInt(fromValue, 8).toString(16).toUpperCase();
                  break;
               default: to.value = fromValue;
            }
         } else {
            error.style.display = "inherit";
            error.innerText = "Invalid " + fromNS + " Number";
            to.value = "";
         }
         break;
   }
});

