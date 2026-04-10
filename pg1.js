document.addEventListener("DOMContentLoaded", () => {
  const corinthians = document.getElementById("corinthians");
  const saopaulo = document.getElementById("saopaulo");
  const resposta = document.getElementById("resposta");
  const continuarBtn = document.getElementById("continuarBtn");
  const area = document.querySelector(".botoes");

  let tentativas = 0;
  let respostaCorreta = false;

  function fugir(e) {
    if (tentativas >= 10) return;

    e.preventDefault();
    tentativas++;

    const areaRect = area.getBoundingClientRect();
    const btnWidth = corinthians.offsetWidth;
    const btnHeight = corinthians.offsetHeight;

    const maxX = areaRect.width - btnWidth;
    const maxY = areaRect.height - btnHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    corinthians.style.left = `${randomX}px`;
    corinthians.style.top = `${randomY}px`;
    corinthians.style.transform = "none";

    if (tentativas === 10) {
      corinthians.style.left = saopaulo.offsetLeft + "px";
      corinthians.style.top = saopaulo.offsetTop + "px";
      corinthians.style.zIndex = "0";
      resposta.textContent =
        "To falando de time gigante e não dessa coisinha ai!!";
    }
  }

  // Funciona em desktop e celular
  corinthians.addEventListener("pointerdown", fugir);
  corinthians.addEventListener("pointerenter", fugir);

  saopaulo.addEventListener("click", () => {
    resposta.textContent = "Resposta correta! TRIcolor ❤️🤍🖤";
    respostaCorreta = true;
    continuarBtn.disabled = false;
    continuarBtn.classList.add("ativo");
  });

  continuarBtn.addEventListener("click", () => {
    if (respostaCorreta) {
      window.location.href = "pg2.html";
    }
  });
});
