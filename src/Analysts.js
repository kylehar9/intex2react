import React, { useState } from 'react';
import * as bs from 'react-bootstrap'
import { Formik, Form, Field } from 'formik'
import axios from 'axios'
import { Link } from 'react-router-dom'


function Analysts(props) {

    return (
        <>
            <AnalystsController />
            <br></br>
            <div style={{ height: "300px" }}></div>
        </>
    )
}
export default Analysts



const AnalystsController = props => {

    const [responseState, setResponseState] = useState({});

    return (

        <Formik
            initialValues={{
                goal: "",
                description: "",
                goal_max: "",
                goal_min: "",
                donators_max: "",
                donators_min: "",
                title: "",
                score: "",
                donators: "",
                current_amount_max: "",
                current_amount_min: "",
                current_amount: "",
                currencycode: ""
            }}
            validateOnChange={false}
            validateOnBlur={false}
            validate={values => {
                const errors = {}
                if (!values.title) {
                    errors.title = "Please enter something to search"
                }
                return errors
            }}
            onSubmit={async (values) => {

                //console.log(JSON.stringify(values))
                //const response = await axios.get('http://ec2-13-58-78-104.us-east-2.compute.amazonaws.com:8000/api/search', JSON.stringify(values))
                const response = await axios.post('http://localhost:8000/api/search', JSON.stringify(values))

                setResponseState(response.data.my_search)

            }}


        >{form => (
            <AnalystsForm response={responseState} form={form} />
        )}</Formik>
    )

}


/**
 * The form layout/html.
 * This component needs finishing.
 * 
 * 
 * campaign_id
    title
    goal
    donators
    current_amount
    currencycode
   campaign_hearts
   days_active": 2380
 * 
 */
const AnalystsForm = props => {

    return (
        <div className='analysts-background'>
            <Form>
                <br></br><h1 style={{ color: "white", textAlign: "center" }}>Find A Campaign</h1><br />

                <bs.Card style={{ width: "80%", marginLeft: "10%", marginRight: "1x0" }}>
                    <bs.Card.Header>
                        <h3>Search</h3>
                    </bs.Card.Header>
                    <div style={{ padding: "15px" }}>
                        <bs.Row>
                            <bs.Col md="3">
                                {/* <InputDropDownSearchOrSort disabled={props.form.isSubmitting} title="Search or Sort:" name="category_id" type="dropdown" /> */}
                                <bs.Form.Label>Search Or Sort</bs.Form.Label>
                                <bs.Form.Control as="select" id="searchOrSort" type="dropdown" disabled={props.disabled}>
                                    <option value="true">Search</option>
                                    <option value="false">Sort</option>
                                </bs.Form.Control>
                            </bs.Col>
                            <bs.Col md="3">
                                <bs.Form.Label>Feature</bs.Form.Label>
                                <bs.Form.Control as="select" id="feature" type="dropdown" disabled={props.disabled}>
                                    <option>Choose...</option>
                                    <option value="campaign_id">Campaign ID</option>
                                    <option value="">Title</option>
                                    <option value="goal">Goal Amount</option>
                                    <option value="donators">Number of Donators</option>
                                    <option value="current_amount">Current Amount Raised</option>
                                    <option value="currencycode">Currency Code</option>
                                    <option value="campaign_hearts">Number of Campaign Hearts</option>
                                    <option value="days_active">Number of Days Active</option>
                                </bs.Form.Control>
                            </bs.Col>
                            <bs.Col md="6">
                                <Input disabled={props.form.isSubmitting} title="Search For:" name="title" type="text" />
                            </bs.Col>
                        </bs.Row>

                        <bs.Button disabled={props.form.isSubmitting} type="submit">Submit {props.form.isSubmitting && <bs.Spinner size="sm" animation="border"></bs.Spinner>}</bs.Button>
                        <br /><br />

                        <bs.Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Campaign ID</th>
                                    <th>Title</th>
                                    <th>Goal</th>
                                    <th># of Donators</th>
                                    <th>Current Amount</th>
                                    <th>Currency</th>
                                    <th># of Days Active</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.values(props.response).map((p, key) => {

                                    return (
                                        <tr key={"campaign-" + key}>
                                            <td>{p.campaign_id}</td>
                                            <td>{p.title}</td>
                                            <td>${p.goal}</td>
                                            <td>{p.donators}</td>
                                            <td>{p.current_amount}</td>
                                            <td>{p.currencycode}</td>
                                            <td>{p.days_active}</td>
                                            <td><Link to={`/campaign/${p.campaign_id}`} className="btn btn-primary btn-large">Details</Link></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </bs.Table>
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