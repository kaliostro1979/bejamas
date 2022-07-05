import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import CloseIcon from "../Icons/CloseIcon";
import {closeShoppingCardStatus} from "../../redux/actions/manageCartState";
import {getMiniCartProducts} from "../../redux/actions/getMiniCartProducts";
import MiniCartItem from "./MiniCartItem";
import Button from "../Button";
import {clearMiniCart} from "../../redux/actions/clearMiniCart";

function MiniCart({state}) {
    const dispatch = useDispatch()
    const cardState = useSelector(state => state.cart_state)
    const miniCartProducts = useSelector(state => state.cart)

    useEffect(()=>{
        dispatch(getMiniCartProducts())
    }, [dispatch])

    return (
        <div className={cardState.open ? 'mini-cart show' : 'mini-cart'}>
            <div className={'mini-cart__close-icon'} onClick={() => dispatch(closeShoppingCardStatus())}>
                <CloseIcon/>
            </div>
            <div className={'mini-cart__inner'}>
                {
                    miniCartProducts && miniCartProducts.length ? miniCartProducts.map((product, i)=>{
                        return (
                            <div className={'mini-cart__item'} key={i}>
                                <MiniCartItem product={product}/>
                            </div>
                        )
                    }) : <div><h3>no item</h3></div>
                }
            </div>
            <div className={'mini-cart__footer'}>
                <Button text={'clear'} additionalClass={'button-secondary'} callBack={()=>{
                    dispatch(clearMiniCart())
                    dispatch(closeShoppingCardStatus())
                }}/>
            </div>
        </div>
    );
}

export default MiniCart;
