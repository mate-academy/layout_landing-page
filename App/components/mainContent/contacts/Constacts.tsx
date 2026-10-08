import { ContactInfo } from './ConactInfo';
import { ContactForm } from './ContactForm';

import '../../../../src/styles/blocks/contact.scss';
import '../../../../src/styles/blocks/section-title.scss';

export const Contacts = () => {
  return (
    <section className="contact" id="contacts">
      <h2 className="section-title">Contact us</h2>
      <div className="contacts">
        <ContactForm />

        <ContactInfo />
      </div>
    </section>
  );
};
