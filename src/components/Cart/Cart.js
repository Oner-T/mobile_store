import React, { Component } from 'react';
import Title from '../ProductList/Product/Title';
import CartColumns from "../Cart/CartColumns";
import EmptyCart from "../Cart/EmptyCart";
import { ProductConsumer } from "../../context";
import CartList from './CartList';
import CartTotals from "./CartTotals";

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {

                        const cart = value.cart;
                        if (cart.length > 0) {
                            return (
                                <React.Fragment>
                                    <Title name="your" title="cart" />
                                    <CartColumns />
                                    <CartList value={value} />
                                    <CartTotals value={value} />
                                </React.Fragment>
                            )
                        }
                        else {
                            return <EmptyCart />
                        }
                    }}
                </ProductConsumer>


            </section>

        )
    }
}
