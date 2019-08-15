import React, { Component } from 'react';
import Product from './Product/Product';
import Title from './Product/Title';
import { storeProducts } from "../../data";

export default class ProductList extends Component {
    state = {
        products: storeProducts
    }
    render() {
        console.log(this.state.products)
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products" />
                        <div className="row" />

                    </div>
                </div>
            </React.Fragment>
        );
    }
}
