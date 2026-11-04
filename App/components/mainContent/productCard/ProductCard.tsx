import '../../../../src/styles/blocks/products.scss';

export const ProductCard = () => {
  return (
    <section className="products" id="products">
      <h2 className="section-title">Explore Bikes</h2>

      <div className="products__container">
        <article className="products__product">
          <img
            src="/src/images/product-photos/Products/Sporty-4.png"
            alt="Sporty-4"
            className="product__image"
          />
          <h3 className="product__title">Sporty 4</h3>
          <p className="product__description">
            The iconic frame brought to a new performance height as a sporty,
            active ride.
          </p>
          <p className="product__price">$ 2 590</p>
        </article>
        <article className="products__product">
          <img
            src="/src/images/product-photos/Products/Ride-in-town-ST.png"
            alt="Ride-in-town-ST"
            className="product__image"
          />
          <h3 className="product__title">Ride in town ST</h3>
          <p className="product__description">
            An open frame for an upright riding position as the most comfortable
            ride in town.
          </p>
          <p className="product__price">$ 2 590</p>
        </article>
        <article className="products__product">
          <img
            src="/src/images/product-photos/Products/Agile-ride-3.png"
            alt="Agile-ride-3"
            className="products product__image"
          />
          <h3 className="product__title">Agile ride 3</h3>
          <p className="product__description">
            The lightweight frame that has earned its street tread as a sleek,
            agile ride.
          </p>
          <p className="product__price">$ 2 090</p>
        </article>
      </div>
    </section>
  );
};
