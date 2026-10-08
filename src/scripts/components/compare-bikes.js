const bikes = [
  {
    name: 'COMO',
    type: 'A urbana essencial',
    description: 'Leve, simples e pronta para o seu dia a dia.',
    image:
      'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1000&q=85',
    alt: 'Bicicleta urbana clássica em tons claros',
    number: '01',
  },
  {
    name: 'LECCE',
    type: 'A companheira versátil',
    description: 'Conforto e personalidade em qualquer caminho.',
    image:
      'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=1000&q=85',
    alt: 'Bicicleta moderna pronta para pedalar pela cidade',
    number: '02',
  },
  {
    name: 'NICE',
    type: 'A exploradora urbana',
    description: 'Feita para quem gosta de ir um pouco mais longe.',
    image:
      'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=1000&q=85',
    alt: 'Bicicleta esportiva para explorar novos caminhos',
    number: '03',
  },
];

export default `
  <section class="bikes section-wrap" id="bikes" aria-labelledby="bikes-title">
    <div class="section-heading">
      <div>
        <p class="eyebrow"><span></span> Encontre a sua</p>
        <h2 id="bikes-title">Compare<br class="mobile-break" /> bikes<span>.</span></h2>
      </div>
      <p class="section-heading__note">Três personalidades.<br />Um jeito mais livre de viver a cidade.</p>
    </div>
    <div class="bike-grid">
      ${bikes
        .map(
          (bike) => `
            <article class="bike-card">
              <a class="bike-card__image" href="#contacts" aria-label="Saiba mais sobre a MYBIKE ${bike.name}">
                <img src="${bike.image}" alt="${bike.alt}" loading="lazy" />
                <span class="bike-card__number">${bike.number}</span>
                <span class="bike-card__arrow" aria-hidden="true">↗</span>
              </a>
              <div class="bike-card__info">
                <div><p class="bike-card__type">${bike.type}</p><h3>${bike.name}</h3></div>
                <p class="bike-card__description">${bike.description}</p>
              </div>
            </article>
          `,
        )
        .join('')}
    </div>
    <a class="text-link bikes__link" href="#contacts">Encontre sua bicicleta <span aria-hidden="true">↗</span></a>
  </section>
`;
