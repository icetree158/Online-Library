import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row, Col} from "react-bootstrap";
import {createBook, fetchAutors, fetchTypes} from "../../http/BookAPI";
import {observer} from "mobx-react-lite";
import { context } from '../..';

const CreateBook = observer(({show, onHide}) => {
    const {book} = useContext(context)
    const [name, setName] = useState('')
    const [file, setFile] = useState(null)
    const [filePDF, setFilePdf] = useState(null)
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchTypes().then(data => book.setTypes(data))
        fetchAutors().then(data => book.setAutors(data))
    }, [])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }
    const selectFilePdf = e => {
        setFilePdf(e.target.files[0])
    }

    const addBook = () => {
        const formData = new FormData()
        formData.append('name', name)
        
        formData.append('img', file)
        formData.append('pdf', filePDF)
        formData.append('autorId', book.selectedAutor.id)
        formData.append('typeId', book.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createBook(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить книгу
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{book.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {book.types.map(type =>
                                <Dropdown.Item
                                    onClick={() => book.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{book.selectedAutor.name || "Выберите автора"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {book.autors.map(autor =>
                                <Dropdown.Item
                                    onClick={() => book.setSelectedAutor(autor)}
                                    key={autor.id}
                                >
                                    {autor.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название книги"
                    />
                    <div >
                        Добавить картинку
                    </div>
                  
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    <div>
                        Добавить документ
                    </div>
                    
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFilePdf}
                    />
                    
                    <hr/>
                    <Button
                        variant={"outline-dark"}
                        onClick={addInfo}
                    >
                        Добавить новое свойство
                    </Button>
                    {info.map(i =>
                        <Row className="mt-4" key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    placeholder="Введите название свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                    placeholder="Введите описание свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    onClick={() => removeInfo(i.number)}
                                    variant={"outline-danger"}
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addBook}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateBook;