import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';

const Footer = (props) => {
    return (

        <h3>{props.description} <Badge bg="secondary">{props.badge}</Badge></h3>

    )
}

export default Footer