// 🌐 Conteúdo das "páginas"
const pages = {
  home: `
    <section>
      <h1>Bem-vindo à ONG Ações Solidárias</h1>
      <p>Promovendo o bem-estar social por meio de projetos, voluntariado e campanhas de solidariedade.</p>
    </section>
    <section>
      <h2>Missão, Visão e Valores</h2>
      <ul>
        <li><strong>Missão:</strong> Transformar vidas com solidariedade e empatia.</li>
        <li><strong>Visão:</strong> Ser referência em ações sociais sustentáveis.</li>
        <li><strong>Valores:</strong> Ética, Transparência, Amor e Respeito.</li>
      </ul>
    </section>
    <section>
      <h2>Histórico e Conquistas</h2>
      <p>Desde 2010, já impactamos mais de 20 mil pessoas com nossos programas sociais, educacionais e ambientais.</p>
    </section>
    <section>
      <h2>Notícias e Transparência</h2>
      <p>Veja nossas últimas ações e relatórios financeiros em <a href="#">transparencia.acoes.org.br</a></p>
    </section>
  `,
  projetos: `
    <section>
      <h1>Projetos Sociais</h1>
      <div class="grid">
        <div class="card">
          <h3>Projeto Sementes do Futuro</h3>
          <p>Capacitação profissional para jovens em situação de vulnerabilidade.</p>
        </div>
        <div class="card">
          <h3>Lar Solidário</h3>
          <p>Apoio a famílias em situação de rua com abrigo e alimentação.</p>
        </div>
      </div>
    </section>
  `,
  campanhas: `
    <section>
      <h1>Campanhas Ativas</h1>
      <p>Participe das nossas campanhas de arrecadação e seja um agente da mudança!</p>
      <ul>
        <li><strong>Campanha do Agasalho:</strong> até 30/07</li>
        <li><strong>Natal Solidário:</strong> arrecadação de brinquedos e alimentos.</li>
      </ul>
    </section>
  `,
  doacoes: `
    <section>
      <h1>Doações</h1>
      <p>Ajude nossa causa! Faça uma doação via PIX:</p>
      <div class="alert">Chave PIX: <strong>doacoes@acoesolidarias.org</strong></div>
      <button onclick="alert('Obrigado por apoiar nossa causa ❤️')">Confirmar Doação</button>
    </section>
  `,
  voluntariado: `
    <section>
      <h1>Voluntariado</h1>
      <p>Preencha o formulário e faça parte da nossa equipe de voluntários!</p>
      <form id="form-voluntario">
        <label>Nome completo:<br><input type="text" required></label><br>
        <label>E-mail:<br><input type="email" required></label><br>
        <label>Telefone:<br><input type="tel" required></label><br>
        <button type="submit">Enviar candidatura</button>
      </form>
    </section>
  `,
  cadastro: `
    <section>
      <h1>Cadastro de Participante</h1>
      <form id="form-cadastro">
        <label>Nome Completo:<br><input type="text" required></label><br>
        <label>E-mail:<br><input type="email" required></label><br>
        <label>CPF:<br><input type="text" id="cpf" maxlength="14" required></label><br>
        <label>Telefone:<br><input type="tel" id="telefone" maxlength="15" required></label><br>
        <label>Data de Nascimento:<br><input type="date" required></label><br>
        <button type="submit">Cadastrar</button>
      </form>
    </section>
  `
};

// 🧭 SPA Navegação
function loadPage(page) {
  const content = document.getElementById("spa-content");
  content.innerHTML = pages[page] || pages.home;
  document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
  document.querySelector(`nav a[href="#${page}"]`)?.classList.add("active");
  window.scrollTo(0, 0);
}
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const page = link.getAttribute("href").replace("#", "");
    loadPage(page);
  });
});

// 🚀 Inicializa
window.addEventListener("load", () => loadPage("home"));

// 🎨 Tema e contraste
document.getElementById("darkmode-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
document.getElementById("contrast-toggle").addEventListener("click", () => {
  document.body.classList.toggle("high-contrast");
});

// 📱 Menu hambúrguer
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("main-nav").classList.toggle("active");
});

// 🧾 Máscaras básicas
document.addEventListener("input", e => {
  if (e.target.id === "cpf") {
    e.target.value = e.target.value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }
  if (e.target.id === "telefone") {
    e.target.value = e.target.value
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2");
  }
});

// 📋 Validação com feedback
document.addEventListener("submit", e => {
  e.preventDefault();
  alert("Formulário enviado com sucesso! ✅");
});
