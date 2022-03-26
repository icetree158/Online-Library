import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import star from '../assets/star.png'
import {useHistory} from 'react-router-dom'
import { BOOK_ROUTE } from '../utils/consts';
const BookItem = ({book}) => {
    const history = useHistory()
    return (
        <Col md={3} className="mt-3" onClick={()=> history.push(BOOK_ROUTE+'/'+book.id) } >
            <Card style={{width:150, cursor:"pointer" }} border={"light"} > 
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL+ book.img}/>
                <div>
                    
                    <div className="text-black-50 mt-1 d-flex justify-content-between"> 
                    <div>{book.name}</div>

                        <div className="d-flex  justify-content-between align-items-center">
                            {book.rating}
                        </div>
                        <Image width={18} height={18} src={star} />
                    </div>

                </div>
            </Card>
        </Col >
    );
};

export default BookItem;