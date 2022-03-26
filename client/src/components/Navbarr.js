import React, { useContext } from 'react';
import { context } from '..';
import {Navbar, Nav,Container,Button} from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import {observer} from "mobx-react-lite";
import "../components/butt.css"
import { useHistory } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE,SHOP_ROUTE } from '../utils/consts';


const Navbarr = observer (   () => {
    const {user}=useContext(context)
    const history = useHistory()

    const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
  }


    return (
    <Navbar bg="dark" variant="dark" >
      
    <Container >
    <NavLink style={{color:'white'}} to={SHOP_ROUTE}>Online Library</NavLink>
    {user.isAuth?
        <Nav className="ml-auto" style={{color:'white'}} >
        <Button  variant={"outline-light"} onClick={()=>history.push(ADMIN_ROUTE)} >Admin</Button>

        <Button className="Buttonnowork" variant={"outline-light"} onClick={()=>logOut() } >Выйти</Button>
        </Nav>
        :
        <Nav className="ml-auto" style={{color:'red'}}>
        <Button variant={"outline-light"}onClick={()=>history.push(LOGIN_ROUTE) }>Авторизация</Button>
        </Nav>
    }
            
    </Container>
    
  </Navbar>
  
  
    );
});

export default Navbarr;