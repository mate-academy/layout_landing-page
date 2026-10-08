import '../../../../src/styles/blocks/details.scss';
import '../../../../src/styles/blocks/section-title.scss';

export const Details = () => {
  return (
    <section className="details" id="details">
      <h2 className="section-title">The Details</h2>
      <div className="details__wrapper">
        <article className="detail">
          <div className="detail__photos">
            <a href="#" className="detail__link detail__link--wide">
              <img
                src="/src/images/product-photos/Details/Steering_wide.png"
                alt="Steering_wide"
                className="detail__photo"
              />
            </a>
            <a href="#" className="detail__link detail__link--square">
              <img
                src="/src/images/product-photos/Details/Steering_sqaure.png"
                alt="Steering_sqaure"
                className="detail__photo"
              />
            </a>
          </div>
          <h4 className="detail__title">Auto Unlock</h4>
          <p className="detail__text">
            The app senses when you're nearby to unlock automatically. GPS
            tracking so you know where your bike is and can track it anytime.
          </p>
        </article>
        <article className="detail">
          <div className="detail__photos">
            <a href="#" className="detail__link detail__link--wide">
              <img
                src="/src/images/product-photos/Details/Bike_wide.png"
                alt="Bike_wide"
                className="detail__photo"
              />
            </a>
            <a href="#" className="detail__link detail__link--square">
              <img
                src="/src/images/product-photos/Details/Bike_square.png"
                alt="Bike_square"
                className="detail__photo"
              />
            </a>
          </div>

          <h4 className="detail__title">Range & Integrated lights</h4>
          <p className="detail__text">
            The removable battery has up to 70km battery autonomy and weighs
            only 2.4 kg. Lights integrated into the frame give you always-on
            visibility day and night.
          </p>
        </article>
        <article className="detail">
          <div className="detail__photos">
            <a href="#" className="detail__link detail__link--square">
              <img
                src="/src/images/product-photos/Details/Detail_square.png"
                alt="Detail_square"
                className="detail__photo"
              />
            </a>
            <a href="#" className="detail__link detail__link--wide">
              <img
                src="/src/images/product-photos/Details/Detail_wide.png"
                alt="Detail_wide"
                className="detail__photo"
              />
            </a>
          </div>
          <h4 className="detail__title">Hydraulic disc brakes & Lightweight</h4>
          <p className="detail__text">
            Brakes with total stopping power the second you make contact. The
            removable battery has up to 70km battery autonomy and weighs only
            2.4 kg. Lights integrated into the frame give you always-on
            visibility day and night.
          </p>
        </article>
      </div>
      <div className="details--button">
        <button
          // ref="#explore"
          data-qa="hover"
          className="explore"
        >
          Explore
        </button>
      </div>
    </section>
  );
};
