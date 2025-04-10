import styles from "./page.module.css";
import product from "@_ui/Product/product";
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
                        hasSale={true}
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
                        hasSale={false}
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
