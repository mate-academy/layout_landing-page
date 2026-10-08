export default `
  <aside class="menu page__menu" id="menu" aria-label="Menu principal">
    <div class="menu__top">
      <a class="brand" href="#top" aria-label="MYBIKE, início">
        <span class="brand__mark" aria-hidden="true">M</span>
        <span class="brand__name">MYBIKE<span>®</span></span>
      </a>
      <a class="icon-button menu__close" href="#top" aria-label="Fechar menu"><span></span><span></span></a>
    </div>
    <nav class="menu__nav" aria-label="Navegação">
      <a href="#move-free">Sobre nós</a>
      <a href="#bikes">Bicicletas</a>
      <a href="#details">Detalhes</a>
      <a href="#contacts">Contato</a>
    </nav>
    <div class="menu__contact">
      <a href="tel:+1-234-555-0100">+1 234 555-0100</a>
      <a href="#contacts" class="menu__book">Agende um test ride <span aria-hidden="true">↗</span></a>
    </div>
  </aside>
`;
