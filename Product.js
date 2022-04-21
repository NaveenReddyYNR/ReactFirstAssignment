function Product(props) {
  return (
    <div className="product-card">
      <img src={props.thumbnail} className="product-image" />
      <h2>{props.title}</h2>
      <p>
        Price: <b>{props.price}$</b>
      </p>
      <p>
        Rating:<b>{props.rating}/5</b>
      </p>
    </div>
  );
}
export default Product;
