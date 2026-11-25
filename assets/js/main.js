(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const dialog = document.getElementById("purchase-dialog");
  const openButton = document.getElementById("buy-button");
  const closeButton = document.getElementById("close-dialog");
  const okButton = document.getElementById("ok-dialog");

  if (openButton && dialog) openButton.addEventListener("click", () => dialog.showModal());
  [closeButton, okButton].forEach((button) => {
    if (button && dialog) button.addEventListener("click", () => dialog.close());
  });
})();
