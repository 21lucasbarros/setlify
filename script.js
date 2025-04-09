document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("ebook-form");
  const submitBtn = document.getElementById("submit-btn");

  const fields = [
    "name",
    "age",
    "phone",
    "cep",
    "street",
    "number",
    "neighborhood",
    "city",
    "state",
  ];

  const showError = (id, show) => {
    const errorSpan = document.getElementById(`${id}-error`);
    if (errorSpan) errorSpan.classList.toggle("hidden", !show);
  };

  const applyPhoneMask = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})\d+?$/, "$1");
  };

  const applyCepMask = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{3})\d+?$/, "$1");
  };

  const cepInput = document.getElementById("cep");
  cepInput.addEventListener("input", (e) => {
    e.target.value = applyCepMask(e.target.value);
  });

  const phoneInput = document.getElementById("phone");
  phoneInput.addEventListener("input", (e) => {
    e.target.value = applyPhoneMask(e.target.value);
  });

  cepInput.addEventListener("blur", async (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    if (cep.length === 8) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Carregando...";
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        if (!data.erro) {
          document.getElementById("street").value = data.logradouro;
          document.getElementById("neighborhood").value = data.bairro;
          document.getElementById("city").value = data.localidade;
          document.getElementById("state").value = data.uf;
        }
      } catch (error) {
        console.error("Erro ao buscar CEP:", error);
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = "Baixar E-Book Grátis";
      }
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    fields.forEach((field) => {
      const input = document.getElementById(field);
      if (!input.checkValidity()) {
        showError(field, true);
        isValid = false;
      } else {
        showError(field, false);
      }
    });

    const age = parseInt(document.getElementById("age").value, 10);
    if (age < 18 || age > 100) {
      showError("age", true);
      isValid = false;
    }

    if (isValid) {
      const formData = {};
      fields.forEach((field) => {
        formData[field] = document.getElementById(field).value;
      });
      console.log("Dados enviados:", formData);

      form.innerHTML = `
        <div class="thanks">
          <i class="ri-download-cloud-line"></i>
          <h2>Obrigado!</h2>
          <p>Seu e-book será enviado para o seu email em breve.</p>
          <button onclick="location.reload()">Voltar</button>
        </div>
      `;
    }
  });
});
