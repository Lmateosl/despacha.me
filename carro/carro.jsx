import React from 'react';
import './carro.css';
import { Container, Row, Col, Button } from 'reactstrap';
import * as request from 'superagent';

class Carro extends React.Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return(
            <div id="cuerpoCarri">
            </div>
        )
    }

    componentDidMount(){
    }
}

export default Carro;