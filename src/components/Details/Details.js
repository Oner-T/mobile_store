import React, { Component } from 'react';
import { ProductConsumer } from "../../context";
import { Link } from 'react-router-dom';
import { ButtonContainer } from '../UI/Button/Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { id, company, img, info, price, title, inCart } = value.detalProduct;
                    return (
                        <div className="container py-5">
                            <div className="row">
                                
                            </div>

                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
