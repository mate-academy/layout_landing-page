import '../../../../src/styles/blocks/contact.scss';

export const ContactForm = () => {
  return (
    <form
      action="#"
      method="post"
      className="contacts__form"
      // onSubmit="this.reset();
      //             return false;"
    >
      <input
        type="text"
        className="contacts__form--name"
        name="name"
        placeholder="Name"
        required
      />
      <input
        type="email"
        className="contacts__form--email"
        name="email"
        placeholder="Email"
        required
      />
      <textarea
        // action="#"
        className="contacts__form--message"
        name="message"
        placeholder="Message"
        required
      ></textarea>

      <button className="contacts__button" type="submit">
        Send
      </button>
    </form>
  );
};
