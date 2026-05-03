const toast = document.querySelector("[data-toast]");

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
}

document.querySelectorAll("[data-keyword]").forEach((button) => {
  button.addEventListener("click", async (event) => {
    const keyword = button.getAttribute("data-keyword") || "";
    const lineUrl = button.getAttribute("data-line-url") || "";

    if (lineUrl) {
      window.location.href = lineUrl;
      return;
    }

    event.preventDefault();
    try {
      await navigator.clipboard.writeText(keyword);
      showToast(`KW「${keyword}」をコピーしました。公式LINEに送ってください。`);
    } catch {
      showToast(`公式LINEに KW「${keyword}」と送ってください。`);
    }
  });
});
