(function () {
  const link = "https://wa.me/00000000000"; // troque
  const btn = document.createElement("a");
  btn.href = link;
  btn.target = "_blank";
  btn.setAttribute("aria-label", "WhatsApp 4SUP");

  btn.style.position = "fixed";
  btn.style.right = "18px";
  btn.style.bottom = "20px";
  btn.style.width = "56px";
  btn.style.height = "56px";
  btn.style.borderRadius = "50%";
  btn.style.display = "grid";
  btn.style.placeItems = "center";
  btn.style.boxShadow = "0 10px 30px rgba(0,0,0,.2)";
  btn.style.background = "#25D366";
  btn.style.zIndex = "999";

  btn.innerHTML = '<svg width="28" height="28" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M20.52 3.48A11.85 11.85 0 0 0 12 .5C5.65.5.5 5.65.5 12c0 2.06.54 4 .54 4L0 24l8.21-1.99s1.82.49 3.79.49c6.35 0 11.5-5.15 11.5-11.5 0-3.17-1.3-6.03-3.48-8.21ZM12 21.02c-1.73 0-3.36-.46-4.76-1.26l-.34-.2-4.82 1.17 1.1-4.94-.22-.33A8.99 8.99 0 1 1 12 21.02Zm5.18-6.63c-.28-.14-1.66-.82-1.92-.91-.26-.09-.45-.14-.64.14-.19.28-.74.91-.91 1.09-.17.19-.34.21-.62.07-.28-.14-1.2-.44-2.3-1.4-.85-.76-1.43-1.7-1.6-1.98-.17-.28-.02-.43.12-.57.12-.12.28-.31.42-.47.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.64-1.54-.88-2.1-.23-.55-.46-.48-.64-.49-.16-.01-.35-.01-.54-.01-.19 0-.49.07-.75.35-.26.28-1 1-1 2.44 0 1.44 1.03 2.84 1.18 3.03.14.19 2.03 3.11 4.92 4.35.69.3 1.22.48 1.63.62.68.22 1.3.19 1.79.12.55-.08 1.66-.68 1.9-1.34.24-.66.24-1.22.17-1.34-.07-.12-.26-.19-.54-.33Z"/></svg>';

  document.addEventListener("DOMContentLoaded", () => document.body.appendChild(btn));
})();
