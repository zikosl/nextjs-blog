import Image from "next/image";
import React from "react";
import PropTypes from 'prop-types';
import styles from '/styles/Products.module.css'
import { Col, Container, Row } from "react-grid-system";
import Product from "./product";

function Products({items}) {
    return (<div className={styles.container}>
            <h3>Produits les plus populaires</h3>
            <Container>
                <Row>
                    <Col xs={6}  sm={3}>
                        <Product/>
                    </Col>
                    <Col xs={6}  sm={3}>
                        <Product/>
                    </Col>
                    <Col xs={6}  sm={3}>
                        <Product/>
                    </Col>
                    <Col xs={6}  sm={3}>
                        <Product/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}  sm={3}>
                        <Product/>
                    </Col>
                    <Col xs={6}  sm={3}>
                        <Product/>
                    </Col>
                    <Col xs={6}  sm={3}>
                        <Product/>
                    </Col>
                    <Col xs={6}  sm={3}>
                        <Product/>
                    </Col>
                </Row>
            </Container>
    </div> );
}

Products.prototype = {
    items:PropTypes.array,
}
Products.defaultProps ={
    items:Array(10),
}
export default Products;