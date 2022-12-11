document.querySelector(".submit").addEventListener("click", function () {
  var mail = document.querySelector(".mail").textContent;
  if (document.getElementById("email").value === mail) {
    document.querySelector(".ctn-info").style.display = "block";
    document.querySelector(".email-input").style.display = "none";
  } else {
    confirm("Email incorrect");
  }
});
// ------------------------------------------------------------------------------------
const jobIC = document.querySelectorAll(".job-info-content");
const btnViewMore = document.querySelectorAll(".view-more");
const btnViewLess = document.querySelectorAll(".view-less");

let arrJIC = Array.from(jobIC);
let arrBVM = Array.from(btnViewMore);
let arrBVL = Array.from(btnViewLess);

// for (let i = 0; i < btnViewMore.length; i++) {}

arrBVM.forEach(function (item, index) {
  item.addEventListener("click", function () {
    arrJIC[index].classList.remove("hidden");
    arrBVM[index].classList.add("hidden");
    arrBVL[index].classList.remove("hidden");
  });
});
arrBVL.forEach(function (item, index) {
  item.addEventListener("click", function () {
    arrJIC[index].classList.add("hidden");
    arrBVM[index].classList.remove("hidden");
    arrBVL[index].classList.add("hidden");
  });
});
