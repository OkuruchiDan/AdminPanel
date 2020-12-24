import React from 'react';
import {Button, Card, CardColumns, Carousel} from "react-bootstrap";
import {Link} from "react-router-dom";

export const SingleProduct = ({product}) => {
    return (
        <Card className="single-product-animation" bg={"light"} style={{ width: '28rem' }}>
            <Card.Img
                className="d-block "
                style={{width: '100%', height: "100%"}}
                src={product.Pictures[0].PictureUrl}
            />
            <Card.Body>
                <Card.Title>{product.Brand}</Card.Title>
                <hr/>
                <Card.Text>
                    Made in: {product.MadeIn}
                    <br/>
                    Color: {product.Color}
                </Card.Text>
                <Button variant="primary" as={Link} to={"panel/products"}>Details</Button>
            </Card.Body>
        </Card>
    );
};