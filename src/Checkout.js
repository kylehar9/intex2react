import React from 'react'
import * as bs from 'react-bootstrap'
import { Formik, Form, Field } from 'formik'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import AppContext from './context'
import axios from 'axios'
import { useHistory } from "react-router-dom";

const stripePromise = loadStripe("pk_test_KCFI1mUCiqCijlH8XTzmVIrA00MXUHABDg");

function Checkout(props) {
    // we'll add Stripe's Elements component here later
    
    return (
        <Elements stripe={stripePromise}>
          <CheckoutController />
        </Elements>
    )
}
export default Checkout



const CheckoutController = props => {

    let history = useHistory();
    const context = React.useContext(AppContext)
    //const cart = context.cart

    const total = context.getCartTotal()

    const stripe = useStripe();
    const elements = useElements();

    return (
        <Formik
            initialValues={{
                name: 'Conrad Fox',
                address1: '1234',
                address2: '5678',
                city: 'Provo',
                state: 'UT',
                zipcode: '84602',
                total: total,
                items: context.cart,
            }}
            validateOnChange={false}
            validateOnBlur={false}
            validate={values => {
                const errors = {}
                if (!values.name){
                    errors.name = "Please enter a name"
                }
                if (!values.address1){
                    errors.address1 = "Please enter an address"
                }
                if (!values.city){
                    errors.city = "Please enter a city"
                }
                if (!values.name){
                    errors.name = "Please enter a name"
                }
                if (!values.state){
                    errors.state = "Please enter a state"
                }
                if (!values.zipcode){
                    errors.zipcode = "Please enter a zipcode"
                }
                return errors
            }}
            onSubmit={async (values, actions) => {

                const response = await axios.post('/api/sale/', values)

                    await stripe.confirmCardPayment(response.data.client_secret, {
                        payment_method: {
                          card: elements.getElement(CardElement),
                          billing_details: {
                            name: response.data.name,
                            address1: response.data.address1,
                            address2: response.data.address2,
                            city: response.data.city,
                            state: response.data.state,
                            zipcode: response.data.zipcode
                          }
                        }}).then((response2) => {
                            console.log(response2)
                            if (response2.error) {
                                // Show error to your customer (e.g., insufficient funds)
                                //console.log(response2.error)
                                actions.setErrors(response2.error)
                                return ;

                              } else {
                                // The payment has been processed!
                                if (response2.paymentIntent.status === 'succeeded') {
                                  
                                    context.clearCart()
                                    history.push("./reciept")

                                }
                              }
                        })
            }}
            
        >{form => (
            <PaymentForm form={form} total={total} />
        )}</Formik>
    )
    
}


/**
 * The form layout/html.
 * This component needs finishing.
 */
const PaymentForm = props => {

    const context = React.useContext(AppContext)

    const totalPrice = context.getCartTotal()

    return (
        <Form>
            <br></br><h2>Checkout</h2><br />
            <bs.Row>
                <bs.Col md="7">
                    <bs.Card >
                        <bs.Card.Header>
                            <h5>Shipping</h5>
                        </bs.Card.Header>
                        <div style={{ padding: "15px" }}>
                            <Input disabled={props.form.isSubmitting} title="Name:" name="name" type="text" />
                            <Input disabled={props.form.isSubmitting} title="Address1:" name="address1" type="text" />
                            <Input disabled={props.form.isSubmitting} title="Address2:" name="address2" type="text" />
                            <Input disabled={props.form.isSubmitting} title="City:" name="city" type="text" />
                            <Input disabled={props.form.isSubmitting} title="State:" name="state" type="text" />
                            <Input disabled={props.form.isSubmitting} title="Zip:" name="zipcode" type="text" />
                        </div>
                    </bs.Card>
                    <br />
                </bs.Col>

                <bs.Col md="5">
                    <bs.Card>
                        <bs.Card.Header>
                            Credit Card Info
                        </bs.Card.Header>

                        <div style={{padding:"15px"}}>
                          <CardElement />
                          {/* {console.log(props.form.errors.message)} */}
                        {props.form.errors && <p style={{color:"red"}}>{props.form.errors.message}</p>}
                          
                        </div>
                        
                    </bs.Card>
                 
                    <br />
                    <p>Your card will be charged ${totalPrice.toFixed(2)}</p>

                    <bs.Button disabled={props.form.isSubmitting} type="submit">Purchase {props.form.isSubmitting && <bs.Spinner size="sm" animation="border"></bs.Spinner>}</bs.Button>

                    

                </bs.Col>
            </bs.Row>
        </Form>)
}


/**
 * A form input.
 *   props.title - the title that shows above the input box
 *   props.type - the type of input (see React Bootstrap Form.Control)
 *   props.placeholder - placeholder text in the input.
 * This component is finished and doesn't need additional work.
 */
const Input = (props) => (
    <Field name={props.name}>{rProps => (
        <bs.Form.Group>
            {props.title &&
                <bs.Form.Label>{props.title}</bs.Form.Label>
            }
            <bs.Form.Control
                type={props.type}
                placeholder={props.placeholder}
                disabled={props.disabled}
                {...rProps.field}
            />
            {rProps.meta.touched && rProps.meta.error &&
                <div className="text-danger">{rProps.meta.error}</div>
            }
        </bs.Form.Group>
    )}</Field>
)