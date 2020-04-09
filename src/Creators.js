import React, { useState } from 'react';
import * as bs from 'react-bootstrap'
import { Formik, Form, Field } from 'formik'
import axios from 'axios'


function Creators(props) {

    return (
        <>
            <CreatorsController />
            <div style={{height:"300px"}}></div>
        </>
    )
}
export default Creators



const CreatorsController = props => {

    const [responseState, setResponseState] = useState(0);

    return (

        <Formik
        initialValues={{
            title: 'PLZ WORK',
            description: "I'LL GIVE YOU ANYTHING",
            category_id: '',
            goal: '2000',
            currencycode: 'USD',
            days_active: '30',
            has_beneficiary: 'TRUE',
            visible_in_search: 'TRUE',
            is_charity: 'TRUE',
        }}
            validateOnChange={false}
            validateOnBlur={false}
            validate={values => {
                const errors = {}
                if (!values.title) {
                    errors.title = "Please enter a title"
                }
                if (!values.description) {
                    errors.description = "Please enter an description"
                }
                if (!values.category_id) {
                    errors.category_id = "Please enter a category"
                }
                if (!values.goal) {
                    errors.goal = "Please enter a goal"
                }
                if (!values.currencycode) {
                    errors.currencycode = "Please enter a currency"
                }
                if (!values.days_active) {
                    errors.days_active = "Please enter a value"
                }
                if (!values.visible_in_search) {
                    errors.visible_in_search = "Please enter a value"
                }
                if (!values.has_beneficiary) {
                    errors.has_beneficiary = "Please enter a value"
                }
                if (!values.is_charity) {
                    errors.is_charity = "Please enter a value"
                }
                return errors
            }}
            onSubmit={async (values) => {

                //console.log(JSON.stringify(values))
                const response = await axios.post('http://18.222.137.188:8000/api/results', JSON.stringify(values))
                //const response = await axios.post('http://localhost:8000/api/results', JSON.stringify(values))
                //console.log(response.data.result[0][13])

                console.log('before', responseState)
                setResponseState(response.data.result[0][13])

                

            }}


        >{form => (
            <CreatorsForm response={responseState} form={form}/>
        )}</Formik>
    )

}


/**
 * The form layout/html.
 * This component needs finishing.
 */
const CreatorsForm = props => {

    return (
        <div className='creator-background'>
            <Form>
                <br></br><h1 style={{ color: "white", textAlign: "center" }}>Create A Campaign</h1><br />

                <bs.Card style={{ width: "60%", marginLeft: "20%", marginRight: "20" }}>
                    <bs.Card.Header>
                        <h6>Enter Info To See Our Estimate of Earned Amount</h6>
                    </bs.Card.Header>
                    <div style={{ padding: "15px" }}>
                        <Input disabled={props.form.isSubmitting} title="Campaign Title:" name="title" type="text" />
                        <InputDesc disabled={props.form.isSubmitting} title="Campaign Description:" name="description" type="text" />
                        <InputDropDownCat disabled={props.form.isSubmitting} title="Category:" name="category_id" type="dropdown" />
                        <bs.Row>
                            <bs.Col md="6">
                                <Input disabled={props.form.isSubmitting} title=" Campaign Goal:" name="goal" type="text" />
                            </bs.Col>
                            <bs.Col md="6">
                                <InputDropDownCur disabled={props.form.isSubmitting} title="Currency:" name="currencycode" type="text" />
                            </bs.Col>
                        </bs.Row>
                        <Input disabled={props.form.isSubmitting} title="Days Campaign Has Been Active:" name="days_active" type="text" />
                        <bs.Row>
                            <bs.Col md="4">
                                <InputCheckBox disabled={props.form.isSubmitting} title="Has Beneficiary:" name="has_beneficiary" type="text" />
                            </bs.Col>
                            <bs.Col md="4">
                                <InputCheckBox disabled={props.form.isSubmitting} title="Visible In Search:" name="visible_in_search" type="text" />
                            </bs.Col>
                            <bs.Col md="4">
                                <InputCheckBox disabled={props.form.isSubmitting} title="Is Charity:" name="is_charity" type="text" />
                            </bs.Col>
                        </bs.Row>

                        <bs.Button disabled={props.form.isSubmitting} type="submit">Submit {props.form.isSubmitting && <bs.Spinner size="sm" animation="border"></bs.Spinner>}</bs.Button>
                        <br/><br/>
                        {props.response !== 0 && <h3>Estimated Amount: ${(parseFloat(props.response)).toFixed(2)}</h3>}
                    </div>
                </bs.Card>
                <br />

            </Form></div>)
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
                name={props.name}
                {...rProps.field}
            />
            {rProps.meta.touched && rProps.meta.error &&
                <div className="text-danger">{rProps.meta.error}</div>
            }
        </bs.Form.Group>
    )}</Field>
)

const InputDesc = (props) => (
    <Field name={props.name}>{rProps => (
        <bs.Form.Group>
            {props.title &&
                <bs.Form.Label>{props.title}</bs.Form.Label>
            }
            <bs.Form.Control as="textarea" rows="3" 
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

const InputDropDownCur = (props) => (
    <Field name={props.name}>{rProps => (
        <bs.Form.Group>
            {props.title &&
                <bs.Form.Label>{props.title}</bs.Form.Label>
            }
            <bs.Form.Control as="select"
                type="dropdown"
                placeholder={props.placeholder}
                disabled={props.disabled}
                {...rProps.field}
            >
                <option>Choose...</option>
                <option>USD</option>
                <option>EUR</option>
                <option>YEN</option>
            </bs.Form.Control>
            {rProps.meta.touched && rProps.meta.error &&
                <div className="text-danger">{rProps.meta.error}</div>
            }
        </bs.Form.Group>
    )}</Field>
)

const InputDropDownCat = (props) => (
    <Field name={props.name}>{rProps => (
        <bs.Form.Group>
            {props.title &&
                <bs.Form.Label>{props.title}</bs.Form.Label>
            }
            <bs.Form.Control as="select"
                type="dropdown"
                placeholder={props.placeholder}
                disabled={props.disabled}
                {...rProps.field}
            >
                <option>Choose...</option>
                <option value="2">Accidents & Emergencies</option>
                <option value="3">Animals & Pets</option>
                <option value="4">Babies Kids & Family</option>
                <option value="5">Business & Entrepreneurs</option>
                <option value="6">Celebrations & Events</option>
                <option value="7">Community & Neighbors</option>
                <option value="8">Artists</option>
                <option value="9">Funerals & Memorials</option>
                <option value="10">Travel</option>
                <option value="11">Medical Illness & Healing</option>
                <option value="12">Faith</option>
                <option value="13">Non-Profits & Charities</option>
                <option value="14">Weddings</option>
                <option value="16">Sports Teams & Clubs</option>
                <option value="17">Education & Learning</option>
                <option value="18">Volunteer</option>
                <option value="19">Competition</option>
                <option value="20">Dreams Hopes & Wishes</option>
                <option value="15">Other</option>
            </bs.Form.Control>
            {rProps.meta.touched && rProps.meta.error &&
                <div className="text-danger">{rProps.meta.error}</div>
            }
        </bs.Form.Group>
    )}</Field>
)

const InputCheckBox = (props) => (
    <Field name={props.name}>{rProps => (
        <bs.Form.Group>
            {props.title &&
                <bs.Form.Label>{props.title}</bs.Form.Label>
            }
            <bs.Form.Control as="select"
                type="dropdown"
                placeholder={props.placeholder}
                disabled={props.disabled}
                {...rProps.field}
            >
                <option>Choose...</option>
                <option value="TRUE">Yes</option>
                <option value="FALSE">No</option>
            </bs.Form.Control>
            {rProps.meta.touched && rProps.meta.error &&
                <div className="text-danger">{rProps.meta.error}</div>
            }
        </bs.Form.Group>
    )}</Field>
)