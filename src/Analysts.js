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
                goal_min: "",
                goal_max: "",
                donators_max: "",
                donators_min: "",
                title: "",
                score: "",
                donators: "",
                current_amount_max: "",
                current_amount_min: "",
                current_amount: "",
                currencycode: "",
                asc_desc: "",
                order_by: ""
            }}
            validateOnChange={false}
            validateOnBlur={false}
            // validate={values => {
            //     const errors = {}
            //     if (!values.title) {
            //         errors.title = "Please enter something to search"
            //     }
            //     if (!values.description) {
            //         errors.descritipion = "Please enter something to search"
            //     }
            //     if (!values.goal) {
            //         errors.goal = "Please enter a goal"
            //     }
            //     if (!values.goal_min) {
            //         errors.goal_min = "Please enter a minimum goal"
            //     }
            //     if (!values.goal_max) {
            //         errors.goal_max = "Please enter a maximum goal"
            //     }
            //     return errors
            // }}
            onSubmit={async (values) => {

                setResponseState({})

                //console.log(step2State.value)

                //const response = await axios.get('http://ec2-13-58-78-104.us-east-2.compute.amazonaws.com:8000/api/search', JSON.stringify(values))
                const response = await axios.post('http://localhost:8000/api/search', JSON.stringify(values))

                setResponseState(response.data.my_search)
            }}


        >{form => (
            <AnalystsForm response={responseState} form={form} />
        )}</Formik>
    )

}

const AnalystsForm = props => {

    const [step2State, setStep2State] = useState("");

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
                                <h6>Select Feature To Search</h6>
                                <select style={{height:"40px", backgroundColor:"white"}} defaultValue="choose" onChange={(e) => setStep2State({ value: e.target.value })}>
                                    <option disabled value="choose">Choose...</option>
                                    <option value="title">Title</option>
                                    <option value="goal">Goal Amount</option>
                                    <option value="donators">Number of Donators</option>
                                    <option value="current_amount">Current Amount Raised</option>
                                    <option value="currencycode">Currency Code</option>
                                </select>
                            </bs.Col>

                            {(step2State.value === "title" || step2State.value === "currencycode") ?
                                <bs.Col md="4">
                                    <Input disabled={props.form.isSubmitting} title="Search for:" id="searchBox" name={step2State.value} type="text" />
                                </bs.Col> : null
                            }

                            {(step2State.value === "goal" || step2State.value === "donators" || step2State.value === "current_amount" || step2State.value === "days_active") ?
                                <>
                                    <bs.Col md="3">
                                        <Input disabled={props.form.isSubmitting} title="From (value):" name={`${step2State.value}_min`} type="text" />
                                    </bs.Col>

                                    <bs.Col md="3">
                                        <Input disabled={props.form.isSubmitting} title="To (value):" name={`${step2State.value}_max`} type="text" />
                                    </bs.Col>
                                </> : null
                            }

                        </bs.Row>
                        <br />
                        <bs.Row>
                            <bs.Col md="3">
                                {(step2State.value !== undefined) ?
                                    <InputDropdown name="order_by" title="Sort By"></InputDropdown>:null
                                }
                            </bs.Col>

                            {(step2State.value !== undefined) ?
                                <bs.Col md="3">
                                    <InputDropdown2 name="asc_desc" title="ASC/DESC"></InputDropdown2>
                                </bs.Col>:null
                            }

                        </bs.Row>



                        <br />

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
                                    <th>Score</th>
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
                                            <td>${p.current_amount}</td>
                                            <td>{p.currencycode}</td>
                                            <td>{p.days_active}</td>
                                            <td>{p.score}</td>
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

const InputDropdown = (props) => (
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
                <option value="">No Sort</option>
                <option value="title">Title</option>
                <option value="goal">Goal Amount</option>
                <option value="donators">Number of Donators</option>
                <option value="current_amount">Current Amount Raised</option>
                <option value="currencycode">Currency Code</option>
                <option value="score">Score</option>
            </bs.Form.Control>
            {rProps.meta.touched && rProps.meta.error &&
                <div className="text-danger">{rProps.meta.error}</div>
            }
        </bs.Form.Group>
    )}</Field>
)

const InputDropdown2 = (props) => (
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
                <option disabled value="">N/A</option>
                <option value="ASC">Ascending</option>
                <option value="DESC">Descending</option>
            </bs.Form.Control>
            {rProps.meta.touched && rProps.meta.error &&
                <div className="text-danger">{rProps.meta.error}</div>
            }
        </bs.Form.Group>
    )}</Field>
)