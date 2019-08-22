import React, { Component } from 'react';
import Title from '../ProductList/Product/Title';
import CartColumns from "../Cart/CartColumns";

export default class Cart extends Component {
    render() {
        return (
            <section>
                <Title name="your" title="cart" />
                <CartColumns></CartColumns>
            </section>

        )
    }
}
