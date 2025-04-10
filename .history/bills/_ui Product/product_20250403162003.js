import styles  from "./product.modules.css"


 function Product({name,image,price,hasSale}){
    let priceClasses;
    let  formattedPrice = price;
    
    if(hasSale){
      priceClasses=styles.product_priceSale;
      formattedPrice=(price/2).toFixed(2);
    } else {
      priceClasses=""
    };
  
    return (
      <article className={styles.product}>
          <img className={styles.product__image}src={`/${image}.jpg`}/>
        <div>
            <p className={styles.product__name}>{name}</p>
            <p className={priceClasses}>${formattedPrice}</p>
        </div>
      </article>
    );
  }

  export default product;