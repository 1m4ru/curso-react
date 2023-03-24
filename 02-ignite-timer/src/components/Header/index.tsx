import { HeaderContainer } from "./Styles";
import igniteLogo from '../../assets/ignite-logo.svg';
import { Timer, Scroll } from "phosphor-react";


export function Header(){
    return (
        <HeaderContainer>
        <img src={igniteLogo} alt="" />
        <nav>
        <a href="">
            <Timer size={24} />
        </a>
        <a href="">
        <Scroll size={24} />
        </a>

        </nav>
       
        </HeaderContainer>
    )
}