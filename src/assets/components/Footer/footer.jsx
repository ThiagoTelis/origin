import Logo from "../Logo/Logo";
import SocialLinks from "./Sociallinks";
import styles from "./Footer.module.css";


const Footer = () => {
    return ( 
      <>
       <div className={styles.footerPremium}> 
          <div className={styles.footerGeral} >
            <div className={styles.layout}>
              <Logo image="public/imagens/logo-footer.svg"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
              <SocialLinks/>
            </div>

            <div className={styles.informacao}>
              <h3>Informação</h3>
              <ul>
                <li><a href="#">Sobre a drip Store</a></li>
                <li><a href="#">Segurança</a></li>
                <li><a href="#">Whishlist</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Trabalhe Conosco</a></li>
                <li><a href="#">Meus Pedidos</a></li>
              </ul>
            </div>

            <div className={styles.categorias}>
              <h3>Categorias</h3>
              <ul>
                <li><a href="#">Camisetas</a></li>
                <li><a href="#">Calças</a></li>
                <li><a href="#">Bonés</a></li>
                <li><a href="#">Headphones</a></li>
                <li><a href="#">Tênis</a></li>
              </ul>
            </div>

            <div className={styles.contato}>
              <h3>Contato</h3>
              <p>Av. Santos Dumont, 1510-1 andar - Aldeota, Fortaleza CE, 60150-161</p>
              <p>(85) 3051-3411</p>             
            </div>

         </div>

          <div className={styles.rodape}>
            <hr/>
            <p>© 2024 Digital College</p>
          </div>
        </div>
      
        
      </>
     );
}
 
export default Footer;