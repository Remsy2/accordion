const modalBtn = document.querySelector(".modal_button");

const modal = document.querySelector(".modal");

modalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

modal.addEventListener("click", (event) => {
  const modalContent = event.target.closest(".modal_inner");

  console.log(modalContent);

  if (!modalContent) {
    modal.style.display = "";
  }
});
