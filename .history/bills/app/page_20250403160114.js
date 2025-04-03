import styles from "./page.module.css";
function Product({name,image,price,hasSale}){
  let priceStyles;
  
  if(hasSale){
    priceStyles-styles,product_priceSale;
  }else {
    priceStyles=""
  }

  return (
    <article className={styles.product}>
        <img className={styles.product__image}src={`/${image}.jpg`}/>
      <div>
        <p className={styles.product__name}>{name}</p>
        <p className={styles.product__price}>${price}</p>

        
      </div>
    </article>
  );
}
export default function Home() {
  return  <div className={styles.page}>
              <header className={styles.header}>
                  <h1>General Store</h1>
              </header>

              <main className={styles.main}>
                  <section className={styles.productList}>
                      <Product
                        name="refried beans"
                        price="2.99"
                        image="refried"
                        hasSale={false}
                      />
                      <Product
                        name="tomato soup"
                        price="4.99"
                        image="tomatosoup"
                        hasSale={false}
                      />
                        <Product
                        name="mushy peas "
                        price="3.99"
                        image="mushypeas"
                        hasSale={false}
                      />
                       <Product
                        name="hot dogs"
                        price="4.99"
                        image="hotdogs"
                        hasSale={true}
                      />
                       <Product
                        name="corned beef"
                        price="10.99"
                        image="cornedbeef"
                        hasSale={true}
                      />
                       <Product
                        name="tomato"
                        price="1.99"
                        image="tomato"
                        hasSale={true}
                      />
                    
                  </section>
              </main>
          </div>

}
