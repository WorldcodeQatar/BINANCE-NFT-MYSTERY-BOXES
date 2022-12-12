const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));

const countDate = new Date("Jan 10 2023 14:30:55").getTime();

var x = setInterval(function () {
  let now = new Date().getTime();

  let distance = countDate - now;

  var d = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var sec = Math.floor((distance % (60 * 60 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    d + "Days " + hrs + "Hours " + min + "Mins " + sec + "Secs ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Time's Up";
  }
});
// ===========COPY-WALLET=============
document
  .querySelectorAll(".Click-CopyWallet-Addres-BTC")
  .forEach((CopyContainerETH) => {
    const InputField = CopyContainerETH.querySelector(".textbtc");

    const CopyButton = CopyContainerETH.querySelector(".clone-btn");

    InputField.addEventListener("focus", () => InputField.select());

    CopyButton.addEventListener("click", () => {
      const text = InputField.value;

      InputField.select();
      navigator.clipboard.writeText(text);

      InputField.value = "Copied!";
      setTimeout(() => (InputField.value = text), 2000);
    });
  });

// let Menupopupup = document.getElementById("dropdownheadernav");
// function opendropdownheadernav() {
//   Menupopupup.classList.add("Openmenudrops");
//   document.body.style.overflow = "hidden";
// }

// function closedropdownheadernav() {
//   Menupopupup.classList.remove("Openmenudrops");
//   document.body.style.overflow = "auto";
// }
let navOpened = false;
function openNav() {
  if (navOpened) {
    navOpened = false;
    document.getElementById("dropdownheadernav").style.display = "none";
  } else {
    navOpened = true;
    document.getElementById("dropdownheadernav").style.display = "initial";
  }
}
