export default function About() {
  return (
    <div className="container about-page">
      <h1>Sobre o Projeto</h1>

      <p>
        O Catálogo de Super-Heróis é uma aplicação desenvolvida em React
        com o objetivo de consumir e exibir dados de uma API externa.
      </p>

      <p>
        O sistema permite pesquisar heróis, visualizar uma lista com imagens
        e acessar uma página de detalhes de cada personagem por meio de rotas dinâmicas.
      </p>

      <p>
        Este projeto foi desenvolvido como trabalho acadêmico individual,
        com foco em consumo de APIs externas, navegação entre páginas e organização de componentes.
      </p>

      <p><strong>Tecnologias utilizadas:</strong></p>

      <ul className="about-list">
        <li>React</li>
        <li>Vite</li>
        <li>React Router DOM</li>
        <li>CSS</li>
        <li>Superhero API (Akabab)</li>
      </ul>
    </div>
  )
}