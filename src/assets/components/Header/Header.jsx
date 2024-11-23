import { useRef } from "react";
import Logo from "../Logo/Logo";
import "./Header.css"
import { NavLink } from "react-router-dom";

const Header = () => {
    const search = useRef("");
    
    return ( 
        <> 
            <nav className="nav">
                <Logo className="logo" image="public/imagens/logo-header.svg"/>
                <div className="input-search">
                    <input 
                        type="text"
                        placeholder="Pesquisar produtos..."
                        aria-label="Search"
                        onChange={(e) => search.current = e.target.value}/>

                    <button className="lupa">
                        <i className="bi bi-search"/>
                    </button>
                    <div className="menu-links">
                        <ul className="">
                            <li className="">
                                <a className="" href="#">Cadastre-se</a>
                            </li>
                            <li className="">
                                <button className="" type="submit">Entrar</button>
                            </li>
                            <li className="">
                                <img src="public/imagens/cart.svg" alt="" />
                            </li>
                        </ul>
                        <div >
                            <ul >
                                <li >
                                    <NavLink 
                                        to={"/"} 
                                        className={({isActive}) => isActive ? "active" : "" } >
                                        Home
                                    </NavLink>
                                </li>
                                <li >
                                   <NavLink 
                                        to={"/produtos"} 
                                        className={({isActive}) => isActive ? "active" : "" }>
                                        Produtos
                                    </NavLink>
                                </li>
                                <li >
                                    <NavLink 
                                        to={"/"} 
                                        className={({isActive}) => isActive ? "active" : "" }>
                                        Categorias
                                    </NavLink>
                                </li>
                                <li>
                                   <NavLink 
                                        to={"/"} 
                                        className={({isActive}) => isActive ? "active" : "" }>
                                        Meus Pedidos
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>          
        </>
     );
}
 
export default Header;