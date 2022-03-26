import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateAutor from "../components/Modals/CreateAutor";
import CreateBook from "../components/Modals/CreateBook";
import CreateType from "../components/Modals/CreateType";

const Admin = () => {
    const [autorVisible, setAutorVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [bookVisible, setBookVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setAutorVisible(true)}
            >
                Добавить автора
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setBookVisible(true)}
            >
                Добавить книгу
            </Button>
            <CreateAutor show={autorVisible} onHide={() => setAutorVisible(false)}/>
             <CreateBook show={bookVisible} onHide={() => setBookVisible(false)}/> 
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
        </Container>
    );
};

export default Admin;