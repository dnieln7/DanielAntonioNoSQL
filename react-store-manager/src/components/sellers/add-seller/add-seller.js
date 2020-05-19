import "./add-seller.css";

import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {useHistory} from 'react-router-dom';
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";
import {useMutation} from "@apollo/react-hooks";
import {CREATE, GET_DISPLAY_SELLERS} from "../../../graphql/gql/seller";

export default function AddSeller() {
    const history = useHistory();

    const [createSeller, seller] = useMutation(CREATE, {
        update(cache, {data: {addSeller}}) {
            const data = cache.readQuery({query: GET_DISPLAY_SELLERS});
            cache.writeQuery({
                query: GET_DISPLAY_SELLERS,
                data: {sellers: [addSeller, ...data.sellers]}
            });
        }
    });

    const [show, setShow] = useState(false);

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [international, setInternational] = useState(false);

    function getData() {
        if (name === "" || address === "" || phone === "") {
            setShow(true);
        } else {
            createSeller({
                variables: {
                    sellerIn: {
                        name: name,
                        address: address,
                        phone: phone,
                        international: international
                    }
                }
            }).then(_ => history.push("/sellers"));
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

            <Form.Label column={"lg"} className={"text-light text-center"}>New Seller</Form.Label>

            <Image src={"https://img.icons8.com/plasticine/200/000000/supplier.png"}/>

            <Form.Group as={Row} className={"justify-content-center"}>
                <Form.Label sm={1} as={Col}>
                    Name
                </Form.Label>
                <Col sm={4}>
                    <Form.Control
                        type={"text"}
                        placeholder="Name"
                        onChange={({target}) => setName(target.value)}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className={"justify-content-center"}>
                <Form.Label sm={1} as={Col}>
                    Address
                </Form.Label>
                <Col sm={4}>
                    <Form.Control
                        type={"text"}
                        placeholder="Address"
                        onChange={({target}) => setAddress(target.value)}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className={"justify-content-center"}>
                <Form.Label sm={1} as={Col}>
                    Phone
                </Form.Label>
                <Col sm={4}>
                    <Form.Control
                        type={"text"}
                        placeholder="Phone"
                        onChange={({target}) => setPhone(target.value)}
                    />
                </Col>
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
                <Form.Check custom type={"checkbox"} label={"International"}
                            onChange={({target}) => setInternational(target.checked)}/>
            </Form.Group>

            <br/>

            <Form.Group as={Row} className={"justify-content-center"}>
                <Button variant={"info"} type={"button"} onClick={() => getData()}>Guardar</Button>
            </Form.Group>
        </Form>
    );
}
