import { HeaderContainer } from "./Styles";
import igniteLogo from '../../assets/ignite-logo.svg';
import { Timer, Scroll } from "phosphor-react";
import { NavLink } from "react-router-dom";


export function Header(){
    return (
        <HeaderContainer>
        <img src={igniteLogo} alt=""  title="Timer"/>
        <nav>
        <NavLink to="/">
            <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
        <Scroll size={24} />
        </NavLink>

        </nav>
       
        </HeaderContainer>
    )
}