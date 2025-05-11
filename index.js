const search = () => {
  const searchbox = document.getElementById("srch").value.toUpperCase();
  const enterbox = document.getElementById("btn01").value.toUpperCase();
  const storieitems = document.getElementById("pro");
  const file = document.querySelectorAll(".pic");
  const fname = document.getElementsByTagName("h2");

  for (var i = 0; i < fname.length; i++) {
    let match = file[i].getElementsByTagName("h2")[0];

    if (match) {
      let textvalue = match.textContent || match.innerHTML;
      if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
        file[i].style.display = "";
      } else {
        file[i].style.display = "none"; 
      }
    }
  }
};
