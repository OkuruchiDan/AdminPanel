import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import Pagination from "react-pagination-bootstrap";
import {Card, CardColumns, CardDeck, CardGroup,} from "react-bootstrap";
import {SingleProduct} from "./SingleProduct";
import './index.css'


const ProductsContainerComponent = ({products}) => {
    const [activePage, setActivePage] = useState(1);
    const productsPerPage = 9;

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber)
    }

    useEffect(() => {
        window.scroll(0,0);
    } , [activePage])

    const indexOfLastProduct = activePage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentPosts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <div className="product-container product-container-animation" >
            <CardDeck className="pagination-container">
                {currentPosts.map((product, i) => (
                    <div>
                        <SingleProduct key={i} product={product}/>
                    </div>
                ))}
            </CardDeck>
            <div className="pagination-container">
                <Pagination
                    activePage={activePage}
                    itemsCountPerPage={10}
                    totalItemsCount={products.length}
                    onChange={handlePageChange}
                />
            </div>
        </div>
    );
};
const mapStateToProps = state => {
    return {
        products: state.productReducer.products,
    }
}

export const ProductsContainer = connect(mapStateToProps, null)(ProductsContainerComponent);