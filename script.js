function addScript() {
  const plus = document.getElementById("pl");
  console.log(pl);
  const cardHide = document.getElementById("hide");
  const data = document.getElementById("data1");
  const forItem = document.querySelectorAll(".foritem");
  const btn = document.querySelector("button");
  plus.addEventListener("click", () => {
    let x = true;
    if (x) {
      cardHide.classList.remove("hide");
      data.style.display = "none";
    } else {
      cardHide.classList.add("hide");
    }
  });
  console.log(forItem);
  forItem.forEach((each) =>
    each.addEventListener("click", () => each.classList.toggle("white"))
  );
  btn.addEventListener("click", () => {
    const section = document.querySelector("section");
    const yourFile = document.querySelector(".yourfile");
    section.style.display = "none";
    yourFile.style.visibility = "visible";
  });
}
addScript();
