import React, { Component } from 'react';
import Product from './Product/Product';

export default class ProductList extends Component {
    render() {
        return (
            <div>
                <Product>this.props.children</Product>
            </div>
        )
    }
}
