import React from 'react';
import MiniCart from "./MiniCart/MiniCart";
import {Link} from "react-router-dom";
import Logo from "./Logo";
import CartIcon from "./Icons/CartIcon";
import {openShoppingCardStatus} from "../redux/actions/manageCartState";
import {useDispatch} from "react-redux";

function Header(props) {
    const dispatch = useDispatch()

    return (
        <header className={'header'}>
            <div className={'container'}>
                <div className={'header-wrapper'}>
                    <Link to={"/"}>
                        <Logo/>
                    </Link>
                    <nav>
                        <Link to={"/products"}>Products</Link>
                    </nav>
                    <div className={'cart-icon__wrapper'}  onClick={()=>dispatch(openShoppingCardStatus())}>
                        <CartIcon/>
                    </div>
                    <MiniCart/>
                </div>
            </div>
        </header>
    );
}

export default Header;
