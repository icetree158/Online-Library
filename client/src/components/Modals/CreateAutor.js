import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {createAutor} from "../../http/BookAPI";

const CreateAutor = ({show, onHide}) => {
    const [value, setValue] = useState('')

    const addAutor = () => {
        createAutor({name: value}).then(data => {
            setValue('')
            onHide()
        })
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить Автора
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите имя автора"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addAutor}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateAutor;