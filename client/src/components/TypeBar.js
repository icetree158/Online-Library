import React, { useContext } from 'react';
import {observer} from 'mobx-react-lite'
import { ListGroup } from 'react-bootstrap';
import { context } from '..';


const TypeBar = observer( () => {
    const {book}=useContext(context)
    return (
        
        <ListGroup>
  {book.types.map(type =>
    <ListGroup.Item
    style={{cursor:"pointer"}}
    onClick={()=>book.setSelectedType(type)} 
    active={type.id ===book.selectedType.id}
    
    key={type.id} 
    >
        {type.name}
    </ListGroup.Item> )}
    </ListGroup>
    );
});

export default TypeBar;