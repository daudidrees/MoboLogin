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

const filterContainer = document.querySelector(".gallery-filter"),
  galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("filter-item")) {
    // deactivate existing active 'filter-item'
    filterContainer.querySelector(".active").classList.remove("active");
    // activate new 'filter-item'
    event.target.classList.add("active");
    const filterValue = event.target.getAttribute("data-filter");
    galleryItems.forEach((item) => {
      if (item.classList.contains(filterValue) || filterValue === 'all') {
        item.classList.remove("hide");
        item.classList.add("show");
      }
      else {
        item.classList.remove("show");
        item.classList.add("hide");
      }
    });
  }
});



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

function myRead() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtnn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}