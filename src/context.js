import React, { Component } from 'react'
import { storeProducts, detailProduct } from "./data";
import { produce } from "immer";


const ProductContext = React.createContext();
//Provider
//COnsumer

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct
    }



    handleDetail = () => {
        console.log('hello from detail')
    }

    componentDidMount() {
        const tempProducts = produce(storeProducts, draft => {
            draft[0].inCart = true;
        });
        console.log(storeProducts[0].inCart);
        console.log(tempProducts[0].inCart);
        this.setState({ products: tempProducts });

    }
    addToCart = () => {


    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}


const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };