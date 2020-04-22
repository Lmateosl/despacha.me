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
                <div id="headCarri">
                    <div id="head1Carri">
                        <h4>Carrito de compras</h4>
                    </div>
                    <div id="rellenoCarri"></div>
                    <div id="head2Carri"></div>
                </div>
                <Container id="tableasCarri">
                    <Row id="dibujarCarri">
                        <Col xs="6">
                            <table id="borderT">
                                <tbody id="item">
                                    
                                </tbody>
                            </table>
                        </Col>
                        <Col xs="6" id="total">
                            <div id="pagarT">
                                <h3 id="totalf">Total: $</h3>
                                <div className="row">
                                    <div className="col-6">
                                        <div id="pp-button" hidden></div>
                                        <button type="button" id="botonModal" class="btn btn-success" data-toggle="modal" data-target="#exampleModal">Pagar</button>
                                    </div>
                                    <div className="col-6">
                                        <Button color="secondary" id="espacio" onClick={this.cancelar.bind(this)}>Cancelar</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

    componentDidMount(){

        request
            .get('https://prueba-next-u-react.firebaseio.com/transacion.json')
            .set('Content-Type','aplication/json') 
            .then((res => {
                const aux = res.body.id + 1;
                window.localStorage.setItem('transId', aux);
        }));

        if (window.localStorage.getItem('token')){
            document.getElementById('pp-button').removeAttribute('hidden');
            document.getElementById('botonModal').setAttribute('hidden', '');
        }else {
            document.getElementById('pp-button').setAttribute('hidden', '');
            document.getElementById('botonModal').removeAttribute('hidden');
        }

        window.localStorage.setItem('userId', '0004');

        if(window.sessionStorage.length<1){
            alert("No ha agregado ningun item al carrito");
            window.history.pushState(null, '', '/');
            window.location.reload();
        }
        
        const item = JSON.parse(window.sessionStorage.getItem('array'));
        var length= item.length;
        var tabla= document.getElementById('item');
        var suma = 0;
        for(var i=0; i<length; i++){
            var tr = document.createElement('tr');
            var td = document.createElement('td');
            td.style.border="solid 1px gainsboro";
            td.style.padding="10px";
            var container = document.createElement('div');
            container.className="container";
            var row = document.createElement('div');
            row.className="row";
            var col = document.createElement('div');
            col.className="col-6";
            var col2 = document.createElement('div');
            col2.className = "col-6";
            row.appendChild(col);
            row.appendChild(col2);
            container.appendChild(row);
            td.appendChild(container);
            tr.appendChild(td);

            var img = document.createElement('img');
            img.src=item[i].img;
            img.style.width="70%";
            col.appendChild(img);

            var nombre = document.createElement('h5');
            nombre.style.marginTop="10px";
            nombre.style.marginBottom="10px";
            var textNombre = document.createTextNode(item[i].nombre.toUpperCase());
            nombre.appendChild(textNombre);
            col2.appendChild(nombre);

            var precio = document.createElement('p');
            var precioText = document.createTextNode('Precio: $'+item[i].precio);
            precio.appendChild(precioText);
            col2.appendChild(precio);

            var disp = document.createElement('p');
            var dispText =  document.createTextNode('Cantidad: '+item[i].cantidad);
            disp.appendChild(dispText);
            col2.appendChild(disp);

            suma = suma + (item[i].cantidad*item[i].precio);
            document.getElementById("totalf").innerHTML="Total: $"+suma.toFixed(2);

            tabla.appendChild(tr);
        }

        payphone.Button({

            //token obtenido desde la consola de developer
            token: 'dl3bFFc8i81VUyCGpXyj36SYpTDxUPwgtmOmBeS81g1zbC26V5kR1bjDXi3ZwDp2RufdB44uJo9SeBXJBn0kq46WQ_KTI4KhZJZYXNn0TCffp9uT2pfctAg55-fyPvJjImhBktDe2jid-Hk7HyC6viIhKkJ8yxvTWdiU7iadIgF0YnOuquuxm7BLYVknsz34-rXFVq-iT1ht_w3mcBEi-yCEHxT3ujBCfrqy8vXsiitlDG6DrZTqbdWZpVoYFkOwMi4KI0NQF6_MmkPJajgE1JcE2rielyxngUDmipP-t4Y9wMuulyx6TQM1xygfgWTxTrzNNQ',
            
            //PARÁMETROS DE CONFIGURACIÓN
            btnHorizontal: true,
            
            createOrder: function(actions){
            
            //Se ingresan los datos de la transaccion ej. monto
            return actions.prepare({
            
            amount: parseFloat(suma.toFixed(2))*100,
            amountWithoutTax: parseFloat(suma.toFixed(2))*100,
            currency: 'USD',
            clientTransactionId: window.localStorage.getItem('transId'),

            });
            
            },
            onComplete: function(model, actions){
            
            //Se confirma el pago realizado
            actions.confirm({
            id: model.id,
            clientTxId: model.clientTxId
            }).then(function(value){
            
            //EN ESTA SECCIÓN SE PROCESA LA RESPUESTA CON LOS DATOS DE RESPUESTA                                   
            
            if (value.transactionStatus == 'Approved'){
                alert('Pago ' + value.transactionId + ' recibido, estado ' + value.transactionStatus );
                request
                    .put('https://prueba-next-u-react.firebaseio.com/transacion.json')
                    .send({id: parseFloar(window.localStorage.getItem('transId'))})
                    .then((res => {
                        console.log(res);
                    }
                ))
            }
                }).catch(function(err){
                    console.log(err);
                });
                
                }
        }).render('#pp-button');
    }

    cancelar(){
        window.sessionStorage.clear();
        window.history.pushState(null, '', '/');
        window.location.reload();
    }
}

export default Carro;