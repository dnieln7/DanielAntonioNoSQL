import "./add-product.css";

import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {useHistory} from 'react-router-dom';
import Image from "react-bootstrap/Image";
import {useQuery} from "@apollo/react-hooks";
import {GET_MINI_SELLERS} from "../../../graphql/queries/seller";
import Alert from "react-bootstrap/Alert";

export default function AddProduct() {
    const history = useHistory();

    const [show, setShow] = useState(false);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0.0);
    const [quantity, setQuantity] = useState(0);
    const [type, setType] = useState("");
    const [seller, setSeller] = useState(0);

    const {data} = useQuery(GET_MINI_SELLERS);

    function getData() {
        if (name === "" || description === "" || price === 0 || quantity === 0 || type === "" || seller === 0) {
            setShow(true);
        }
        if (isNaN(price) || isNaN(quantity) || isNaN(seller)) {
            setShow(true);
        } else {

        }
    }

    return (
        <Form className={"text-light"} onSubmit={() => getData}>
            {
                show
                    ?
                    <Alert variant={"danger"} dismissible show onClose={() => setShow(false)}>
                        <p>You must fill all the fields</p>
                    </Alert>
                    :
                    <div/>
            }

            <Form.Label column={"lg"} className={"text-light text-center"}>New Product</Form.Label>

            <Image src={"https://img.icons8.com/bubbles/200/000000/product.png"}/>

            <Form.Group as={Row} className={"justify-content-center"}>
                <Form.Label sm={1} as={Col}>
                    Name
                </Form.Label>
                <Col sm={5}>
                    <Form.Control
                        type={"text"}
                        placeholder="Name"
                        onChange={({target}) => setName(target.value)}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className={"justify-content-center"}>
                <Form.Label sm={1} as={Col}>
                    Description
                </Form.Label>
                <Col sm={5}>
                    <Form.Control
                        type={"text"}
                        placeholder="Description"
                        onChange={({target}) => setDescription(target.value)}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className={"justify-content-center"}>
                <Form.Label sm={1} as={Col}>
                    Price
                </Form.Label>
                <Col sm={5}>
                    <Form.Control
                        type={"text"}
                        placeholder="Price"
                        onChange={({target}) => setPrice(parseFloat(target.value))}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className={"justify-content-center"}>
                <Form.Label sm={1} as={Col}>
                    Available
                </Form.Label>
                <Col sm={5}>
                    <Form.Control
                        type={"text"}
                        placeholder="Available"
                        onChange={({target}) => setQuantity(parseInt(target.value))}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className={"justify-content-center"}>
                <Form.Label sm={1} as={Col}>
                    type
                </Form.Label>
                <Col sm={2}>
                    <Form.Control
                        as="select"
                        custom
                        onChange={({target}) => setType(target.value)}
                    >
                        <option>Candy</option>
                        <option>Meat</option>
                        <option>Soda</option>
                    </Form.Control>
                </Col>

                <Form.Label sm={1} as={Col}>
                    Seller
                </Form.Label>
                <Col sm={2}>
                    {
                        data !== undefined
                            ?
                            <Form.Control
                                as="select"
                                custom
                                onChange={({target}) => setSeller(parseInt(target.value))}
                            >{data.sellers.map((value) => <option
                                key={value.id} value={value.id}>{value.name}</option>)}
                            </Form.Control>
                            :
                            <Form.Control as="select" custom disabled>
                                <option>Not found</option>
                            </Form.Control>
                    }
                </Col>
            </Form.Group>

            <br/>

            <Form.Group as={Row} className={"justify-content-center"}>
                <Button variant={"info"} type={"button"} onClick={() => getData()}>Guardar</Button>
            </Form.Group>
        </Form>
    );
}
