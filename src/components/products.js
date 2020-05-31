import React, { Component } from 'react';

import { Table, Card, Button, CardTitle, CardText, Row, Col, CardImg } from 'reactstrap';

class Product extends Component {
    constructor() {
        super();

        this.state = {
            products: [{ "name": "KTM Duke", "img": "1.jpg", "id": 1, "price": "2 lakh", "engine": "299 cc" },
            { "name": "KTM RC", "img": "2.jpg", "id": 2, "price": "2.2 lakh", "engine": "299 cc" },
            { "name": "Ninja", "img": "3.jpg", "id": 3, "price": "3.7 lakh", "engine": "350 cc" },
            { "name": "BMW S", "img": "4.jpg", "id": 4, "price": "6.8 lakh", "engine": "800 cc" },
            { "name": "Hayabusa", "img": "5.jpg", "id": 5, "price": "9.2 lakh", "engine": "1340 cc" }
            ],
            compare: {
                arr: []
            }
        }
        this.handleClick = this.handleClick.bind(this);


    }
    handleClick(e) {
        let arrnew = this.state.compare.arr;
        let temp = arrnew.indexOf(e.target.id)
        if (temp != -1) {
            arrnew.splice(temp, 1)
        }
        else {
            arrnew.push(e.target.id)
        }
        // console.log(event)
        this.setState({ compare: { arr: arrnew } });
    }
    render() {

        let temparr = this.state.compare.arr
        let temp = []
        let Compare;
        for (var i = 0; i < temparr.length; i++) {
            let x = this.state.products.find(prod => prod.id == temparr[i]);
            temp.push(x)
        }

        return (
            <div>
                <Row>
                    {this.state.products.map((product, index) => (
                        <Col key={product.id}>
                            <Card body outline engine="primary">
                                <img height="120px" width="240px" src={require("../assets/images/" + product.img)} alt={product.name} />
                                <CardTitle>{product.name}</CardTitle>
                                <Button type="button" id={product.id} onClick={this.handleClick}>{(this.state.compare.arr.indexOf(product.id) < 0) ? "Compare" : "Remove"}</Button>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <Table>
                    <thead>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Engine</th>
                    </thead>
                    {temp.map((product) => (
                        <tbody>
                            <tr>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.engine}</td>
                            </tr>

                        </tbody>

                    ))}
                </Table>

            </div >
        )
    }
}

export default Product;