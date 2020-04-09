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


    async componentDidMount() {
        //const resp = await axios.post('http://localhost:8000/api/campaign', match.params.id).then((response))
        

    }


    render() {
        return (
            <AppContext.Provider value={{...this.state, ...this.actions}}>
                <App />
            </AppContext.Provider>
        )
    }

    

 }
