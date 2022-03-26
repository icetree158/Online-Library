import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {context} from "..";
import {Card} from "react-bootstrap";
import "../components/row.css"
const AutorBar = observer(() => {
    const {book} = useContext(context)

    return (
        <div className="d-flex">
            {book.autors.map(autor =>
                <Card
                    style={{cursor:'pointer'}}
                    key={autor.id}
                    className="p-3"
                    onClick={() => book.setSelectedAutor(autor)}
                    border={autor.id === book.selectedAutor.id ? 'danger' : 'light'}
                    
                >
                    {autor.name}
                </Card>
            )}
        </div>
    );
});

export default AutorBar;