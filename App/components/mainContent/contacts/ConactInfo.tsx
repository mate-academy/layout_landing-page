import '../../../../src/styles/blocks/contact.scss'

export const ContactInfo = () => {
  return (
    <div className="contacts__info">
      <div className="contacts__info--item">
        <p className="contacts__info--title">Phone</p>
        <a href="tel:+1 234 555-55-55" className="contacts__info--text">
          +1 234 5555-55-55
        </a>
      </div>
      <div className="contacts__info">
        <p className="contacts__info--title">Email</p>
        <a href="mailto:hello@miami.com" className="contacts__info--text">
          hello@miami.com
        </a>
      </div>
      <div className="contacts__info">
        <p className="contacts__info--title">Address</p>
        <a
          href="https://www.google.com/maps/place/First+Avenue/@44.9785353,-93.2785781,17z/data=!3m1!4b1!4m6!3m5!1s0x52b332917cb8a83f:0xadb920377f253346!8m2!3d44.9785315!4d-93.2759978!16zL20vMDRycXl5?authuser=0&entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D"
          className="contacts__info--text"
          target="_blank"
        >
          400 first ave.
          <br />
          suite 700
          <br />
          Minneapolis, MN 55401
        </a>
      </div>
    </div>
  );
};
