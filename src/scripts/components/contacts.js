export default `
  <section class="contacts section-wrap" id="contacts" aria-labelledby="contacts-title">
    <div class="contacts__intro">
      <p class="eyebrow"><span></span> Vamos conversar</p>
      <h2 id="contacts-title">Your next<br />ride starts<br />here<span>.</span></h2>
      <p>Quer saber mais ou marcar um test ride? Estamos aqui para ajudar.</p>
      <a class="contacts__phone" href="tel:+1-234-555-0100">+1 234 555-0100 <span aria-hidden="true">↗</span></a>
    </div>
    <form class="contact-form" id="contact-form">
      <h3>Deixe uma mensagem</h3>
      <label for="name">Seu nome</label>
      <input id="name" name="name" type="text" placeholder="Ex.: Ana Silva" autocomplete="name" required />
      <label for="email">Seu e-mail</label>
      <input id="email" name="email" type="email" placeholder="Ex.: ana@email.com" autocomplete="email" required />
      <label for="message">Como podemos ajudar?</label>
      <textarea id="message" name="message" rows="3" placeholder="Conte um pouco para a gente..." required></textarea>
      <button class="button button--lime" type="submit">Enviar mensagem <span aria-hidden="true">↗</span></button>
      <p class="contact-form__status" id="form-status" aria-live="polite"></p>
    </form>
  </section>
`;
