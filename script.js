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