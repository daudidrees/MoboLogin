window.onload = function () {
  const plus = document.querySelector(".plus"),
    minus = document.querySelector(".minus"),
    num = document.querySelector(".num");

  let a = 2;

  plus.addEventListener("click", () => {
    if (a < 999) {
      a++;
      insertingText();
    }
  });

  minus.addEventListener("click", () => {
    if (a > 1) {
      a--;
      insertingText();
    }
  });

  function insertingText() {
    a = (a < 10) ? + a : a;
    num.innerText = a;
  }
}

function openCity(evt, cityName) {
  var i, tabsection, tablinks;
  tabsection = document.getElementsByClassName("tabsection");
  for (i = 0; i < tabsection.length; i++) {
    tabsection[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();


function closeBtn(elem) {
  document.getElementById(elem).classList.add('visibility-hidden');
}

function popups(funnc) {
  document.getElementById(funnc).classList.remove('visibility-hidden');
}