function searchbar() {
    var x = document.getElementById("searchbarhidden");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

var current = document.getElementById('default');

  function highlight(el)
  {
     if (current != null)
     {
         current.className = "";
     }
     el.className = "highlight";
     current = el;
  }