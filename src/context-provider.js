import React from 'react'
import AppContext from './context'
import App from './App'
import produce from 'immer'

/** The context provider for our app */
export default class AppProvider extends React.Component {

    constructor(props) {
        super(props)
        this.actions = {
            addToCart: this.addToCart,
            removeFromCart: this.removeFromCart,
            getCartTotal: this.getCartTotal,
            clearCart: this.clearCart,
        }
        this.state = {
            categories: {},
            products: {},
            cart: {}
        }
        //do not load categories here
    }


    
    addToCart = pid => {
        this.setState(state => produce(state, draft => {
            
            if (draft.cart[pid] == null)
            {
                draft.cart[pid] = 1
            }
            else
            {
                draft.cart[pid] += 1
            }
  
        }))

    }

    removeFromCart = pid => {
        this.setState(state => produce(state, draft => {
            
            delete draft.cart[pid]
  
        }))
    }

    getCartTotal() {

            const itemsInCart = this.cart
            let productsInCart = []
            for (const c of Object.entries(itemsInCart))
            {
                productsInCart.push(this.products[c[0]])
            }
        
            let totalPrice = 0
            for(const item of productsInCart)
            {
                totalPrice += parseFloat(item.price);
            }

            return(totalPrice)
    }

    clearCart = pid => {
        this.setState(state => produce(state, draft => {
            
            draft.cart = {}
  
        }))
    }

    render() {
        return (
            <AppContext.Provider value={{...this.state, ...this.actions}}>
                <App />
            </AppContext.Provider>
        )
    }

    
//     async componentDidMount() {
//         const resp = await axios.get('/api/category/')
//         const prods = await axios.get('/api/products/')
        
        
//         const cats = {}
//         for (const c of resp.data) {
//             cats[c.id] = c
//         }

//         const prodWID = {}
//         for (const p of prods.data) {
//             prodWID[p.id] = p
//         }


//         this.setState({
//             categories: cats,
//             products: prodWID
//         })
//     }

 }
