window.onload = function () {
  document.body.innerHTML =
    document.body.innerHTML + "<div id='rabbit'> RABBIT </div>";
  document.getElementById("rabbit").style.fontSize = "30px";
  document.getElementById("rabbit").style.fontWeight = "bolder";
};
function highlightSearch() {
  var text = document.getElementById("query").value;
  var query = new RegExp("(\\b" + text + "\\b)", "gim");
  var e = document.getElementById("searchtext").innerHTML;
  var enew = e.replace(/(<span>|<\/span>)/gim, "");
  document.getElementById("searchtext").innerHTML = enew;
  var newe = enew.replace(query, "<span>$1</span>");
  document.getElementById("searchtext").innerHTML = newe;
}

function showhide() {
  var div = document.getElementById("moretext");
  div.classList.toggle("hidden");
}
