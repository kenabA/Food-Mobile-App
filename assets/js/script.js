const para = Array.from(document.getElementsByTagName("p"));
para.forEach(function (para) {
  if (para.textContent == "AVAILABLITY" || para.textContent == "availablity") {
    para.style.marginBottom = "6px";
  }
});
