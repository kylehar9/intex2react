import React from 'react'
import AppContext from './context'
import App from './App'

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

    

    async componentDidMount() {

        //const resp = await axios.post('http://localhost:8000/api/campaign', match.params.id).then((response))
        
        
        // const cats = {}
        // for (const c of resp.data) {
        //     cats[c.id] = c
        // }

        // const prodWID = {}
        // for (const p of prods.data) {
        //     prodWID[p.id] = p
        // }


        // this.setState({
        //     categories: cats,
        //     products: prodWID
        // })
    }


    render() {
        return (
            <AppContext.Provider value={{...this.state, ...this.actions}}>
                <App />
            </AppContext.Provider>
        )
    }

    

 }
