import React, { Component } from 'react'
import { storeProducts, detailProduct } from "./data";
import { produce } from "immer";


const ProductContext = React.createContext();
//Provider
//COnsumer

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    }

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;

    }

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => { return { detailProduct: product } });
    }

    componentDidMount() {

        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = []
        tempProducts = produce(storeProducts, draft => {
            draft = storeProducts;
        });

        this.setState(() => {
            return { products: tempProducts }
        });
        console.log(this.state.products)

        /* 
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];

        });
        this.setState(() => {
            return { products: tempProducts }
        });*/

    }
    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return { products: tempProducts, cart: [...this.state.cart, product] };
        },
            () => {
                this.addTotals();
            }
        );

    };

    openModal = id => {
        const product = this.getItem(id);
        this.setState({ modalProduct: product, modalOpen: true })
    }

    closeModal = () => {
        this.setState({ modalOpen: false })
    }

    increment = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id)

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
    }

    decrement = (id) => {

    }

    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;
        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [tempProducts]

            };
        }, () => {
            this.addTotals();
        })

    }

    clearCart = (id) => {
        this.setState(() => { return { cart: [] } }
            , () => {
                this.setProducts();
                this.addTotals();
            });
    }

    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => subTotal += item.total);
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState({ cartSubTotal: subTotal, cartTax: tax, cartTotal: total })

    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,

            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}


const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };