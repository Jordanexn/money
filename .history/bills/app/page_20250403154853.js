import styles from "./page.module.css";
function Product({name,image,price,hasSale}){
  return (
    <article>
        <img src={`/${image}.jpg`}/>
      <div>
        <p>{name}</p>
        <p>${price}</p>

        
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
                        price="3.99"
                        image="tomatosoup"
                        hasSale={false}
                      />
                        <Product
                        name="mushy peas "
                        price="3.99"
                        image="mushypeas"
                        hasSale={false}
                      />
                    
                  </section>
              </main>
          </div>

}
