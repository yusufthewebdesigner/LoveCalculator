let icon = document.getElementById("toggleIcon");
let calcBtn = document.getElementById("calculationButton");
let mainBox = document.getElementById("mainBox");

// console.log(loveValue);
icon.onclick = function () {
  // Making dark mode
  mainBox.classList.toggle("darkMode");
  //   changing icon
  if (icon.src.match("Moon")) {
    icon.src = "Media/Sun.svg";
  } else {
    icon.src = "Media/Moon.svg";
  }
};
//

calcBtn.onclick = (e) => {
  e.preventDefault();
  let yourName = document.getElementById("you").value.toLowerCase();
  let prtnerName = document.getElementById("partner").value.toLowerCase();
  let outputField = document.getElementById("loveCount");
  let loveValue = Math.floor(Math.random() * 70) + 20;
  if (yourName === "" || prtnerName === "") {
    outputField.innerText = "Please, fill both of the field!";
  } else if (
    (yourName.match("yusuf") && prtnerName.match("prottasha")) ||
    (yourName.match("prottasha") && prtnerName.match("yusuf"))
  ) {
    outputField.innerText = "100 %";
  } else if (
    (yourName === "sourav" && prtnerName === "muna") ||
    (yourName === "muna" && prtnerName === "sourav")
  ) {
    outputField.innerText = "100 %";
  } else if (yourName === prtnerName) {
    outputField.innerText = "Are you homo?";
  } else {
    outputField.innerText = loveValue + "%";
  }
};
