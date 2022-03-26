import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import bigStar from '../assets/bigstar.png'
import { fetchOneBook } from '../http/BookAPI';
const BookPage = () => {
    const [book, setBook] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneBook(id).then(data => setBook(data))
    }, [])
    return (

        <Container className="mt-3 ">
            <Row>
            <Col md={4}>
                <Image width={300} height={300} src={process.env.REACT_APP_API_URL+book.img} />
            </Col>
            
            <Col md={4}>
                <Row className="d-flex flex-column align-items-center" >
                    <h2>{book.name}</h2>
                    <div
                    className="d-flex align-items-center justify-content-center"
                    style={{background: `url(${bigStar}) no-repeat center center`, width:240, height: 240, backgroundSize: 'cover', fontSize:64}}
                    >
                        {book.rating}
                    </div>
                </Row>
            </Col>
            <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3> Скачать по ссылке ниже </h3> 
                        <a href={process.env.REACT_APP_API_URL+ book.pdf} download>Просмотр книги</a>

                        
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Описание:</h1> 
                {book.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>

           
        </Container>
    );
};

export default BookPage;