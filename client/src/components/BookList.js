import React, { useContext } from 'react';
import {observer} from 'mobx-react-lite'
import { Row } from 'react-bootstrap';
import BookItem from './BookItem';
import { context } from '..';

const BookList = observer( () => {
    const {book} = useContext (context)
    return (
        <Row className="d-flex">
            {book.books.map(book =>
            <BookItem key={book.id} book={book}/>
            )}
        </Row>
    );
});

export default BookList;