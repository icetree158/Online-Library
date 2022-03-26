import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { context } from '..';
import AutorBar from '../components/AutorBar';
import BookList from '../components/BookList';
import Pages from '../components/Pages';
import TypeBar from '../components/TypeBar';
import { fetchAutors, fetchBooks, fetchTypes } from '../http/BookAPI';

const Shop = observer(() => {
const {book}=useContext(context)

useEffect(() => {
    fetchAutors().then(data => book.setAutors(data))
    fetchTypes().then(data => book.setTypes(data))
    
    fetchBooks().then(data => book.setBooks(data.rows))
}, [])

useEffect(() => {
    fetchBooks(book.selectedType.id, book.selectedAutor.id, book.page, 2).then(data => {
        book.setBooks(data.rows)
        book.setTotalCount(data.count)
    })
}, [book.page, book.selectedType, book.selectedAutor,])


    return (
        <Container>
            <Row className="mt-4">
                <Col md={3}>
                    <TypeBar>

                    </TypeBar>
                </Col>
                <Col md={9}>
                    <AutorBar/>
                    <BookList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;