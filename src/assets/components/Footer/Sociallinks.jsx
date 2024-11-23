import styles from "./Footer.module.css";
const SocialLinks = () => {
    return (
       <div className={styles.icons}> 
            <a href="https://www.facebook.com/" target="_blank">
            <img src="public/imagens/facebook.svg" alt="Facebook"/>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
            <img src="public/imagens/instagram.svg" alt="Instagram"/>
            </a>
            <a href="https://x.com/" target="_blank">
            <img src="public/imagens/twitter.svg" alt="Twitter"/>
            </a>
        </div>
    );
};

export default SocialLinks;