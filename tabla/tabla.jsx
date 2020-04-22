import React from 'react';
import './tabla.css';
import { Container, Row, Col, Button } from 'reactstrap';
import * as request from 'superagent';

class Tabla extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: [],
            carrito: 1,
            pagar: [],
            carrusel: 1,
            bandera: 2,
            buscar: [],
        }
        request
        .get('https://prueba-next-u-react.firebaseio.com/productos/Vegetales.json')
        .set('Content-Type','aplication/json') 
        .then((res => {
            this.setState({data: res.body});
        }));
    }

    render(){
        return(
            <div id="cuerposos">
                <div id="head">
                    <div className="row align-items-center" id="carruselTop">
                        <div className="col-1">
                        <i class="fas fa-chevron-left iconos" onClick={this.carrusel.bind(this)}></i>
                        </div>
                        <div className="col-10">
                            <div className="row justify-content-center" id="carrusel1">
                                <div className="col-3" hidden>
                                    <div className="itemCar" id="kits">
                                        <p className="descCar">Kits</p>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="itemCar" id="vegetales" onClick={this.vegetales.bind(this)}>
                                        <p className="descCar">Vegetales</p>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="itemCar" id="abarrotes" onClick={this.abarrotes.bind(this)}>
                                        <p className="descCar">Abarrotes</p>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="itemCar" id="pan" onClick={this.pan.bind(this)}>
                                    <p className="descCar">Pan</p>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="itemCar" id="lyh" onClick={this.leche.bind(this)}>
                                        <p className="descCar" id="lyh2">Lácteos y Huevos</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center" id="carrusel2" hidden>
                                <div className="col-3">
                                    <div className="itemCar" id="frutasLindas" onClick={this.frutasLindas.bind(this)}>
                                        <p className="descCar">Frutas</p>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="itemCar" id="medicina" onClick={this.medicina.bind(this)} >
                                        <p className="descCar">Medicina</p>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="itemCar" id="donaciones" onClick={this.donaciones.bind(this)}>
                                        <p className="descCar">Donaciones</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1 align-self-center">
                            <i class="fas fa-chevron-right iconos" onClick={this.carrusel.bind(this)}></i>
                        </div>
                    </div>
                    <div className="row align-items-center" id="carruselTop2">
                        <div className="col-1">
                            <i class="fas fa-chevron-left iconos" id="flecha12" onClick={this.carrusel2Menos.bind(this)}></i>
                        </div>
                        <div className="col-10">
                            <div className="row justify-content-center" id="carruselCell1">
                                <div className="col-6">
                                    <div className="itemCar" id="vegetales" onClick={this.vegetales.bind(this)}>
                                        <p className="descCar">Vegetales</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="itemCar" id="abarrotes" onClick={this.abarrotes.bind(this)}>
                                        <p className="descCar">Abarrotes</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center" id="carruselCell2" hidden>
                                <div className="col-6">
                                    <div className="itemCar" id="pan" onClick={this.pan.bind(this)}>
                                    <p className="descCar">Pan</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="itemCar" id="lyh" onClick={this.leche.bind(this)}>
                                        <p className="descCar" id="lyh2">Lácteos y Huevos</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center" id="carruselCell3" hidden>
                                <div className="col-6">
                                    <div className="itemCar" id="medicina" onClick={this.medicina.bind(this)}>
                                        <p className="descCar">Medicina</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="itemCar" id="vegetales" onClick={this.frutasLindas.bind(this)}>
                                        <p className="descCar">Frutas</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center" id="carruselCell4" hidden>
                                <div className="col-6">
                                    <div className="itemCar" id="donaciones" onClick={this.donaciones.bind(this)}>
                                        <p className="descCar">Donaciones</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1 align-self-center">
                            <i class="fas fa-chevron-right iconos" onClick={this.carrusel2Mas.bind(this)}></i>
                        </div>
                    </div>
                </div>
                <Container id="tableas">
                    <div class="input-group mb-3" id="serchWid">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="backLogo"><i class="fas fa-search" id="iconoLogo"></i></span>
                        </div>
                        <input type="text" class="form-control" id="inputSerch" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Buscar" onKeyUp={this.buscar.bind(this)}/>
                    </div>
                    <Row id="dibujar">
                       {this.state.data.map((fruta, key)=>
                                <div key={key} className="col-6 col-lg-3 objeto">
                                    <div className="border" id={fruta.id}>
                                        <img src={fruta.img} width="100%" className="frutaImg" lang={fruta.id} style={{maxHeight: '157px', minHeight: '157px'}}/><br/>
                                        <p id="tituloFruta">{fruta.nombre.charAt(0).toUpperCase()+fruta.nombre.slice(1).toLowerCase()}</p>
                                        <p id="precioFruta">${fruta.precio} / {fruta.unidad}</p>
                                        <div id="masMenos">
                                            <i class="fas fa-minus icono" lang={fruta.nombre+fruta.id.toString()} nonce={fruta.id} onClick={this.menos.bind(this)}></i>
                                            <input type="number" className="inputValor1" lang="0" id={fruta.nombre+fruta.id.toString()} onChange={this.inputValue.bind(this)} placeholder="0"/>
                                            <i class="fas fa-plus icono" lang={fruta.nombre+fruta.id.toString()} nonce={fruta.id} onClick={this.mas.bind(this)}></i>
                                        </div>
                                        <button className="add" name={fruta.precio} id={fruta.img+fruta.id.toString()} onClick={this.propsFa.bind(this)} onMouseOut={this.anadir.bind(this)}>Añadir</button>
                                    </div>
                                </div>
                        )}
                    </Row>
                </Container>
                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document" id="modalContorno">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    </div>
                                <div className="modal-body">
                                    <div id="modalInfo">
                                        <Row>
                                            <Col xs="6" id="imgModal">
                                            </Col>
                                            <Col xs="6" id="datosModal">
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        );
    }

    propsFa(event){

        //if (this.state.id) {
            if (this.state.value > 0) {

                document.getElementById(event.target.id).style.animation = "miAnimacion2 3s";
                document.getElementById(event.target.id).innerHTML = "Listo"

                const objectAux = {
                    img: '',
                    nombre: '',
                    precio: '', 
                    cantidad: '',
                    id: ''
                }

                objectAux.img = event.target.id.slice(0, -1);
                objectAux.nombre = this.state.nombre;
                objectAux.precio = event.target.name;
                objectAux.cantidad = this.state.value;
                objectAux.id = this.state.id;

                this.state.pagar.push(objectAux);

                window.sessionStorage.setItem('array', JSON.stringify(this.state.pagar));

                console.log(JSON.parse(window.sessionStorage.getItem('array')));

                // Agregar a carrito
                console.log('entra');
                const tabla = document.getElementById('carritoBody');
                tabla.innerHTML = '';
                const array = JSON.parse(window.sessionStorage.getItem('array'));
                console.log(array);
                const n = array.length;
                let total = 0;
                for (let i=0; i < n; i++) {
                    // Crear los div layout
                    const divRow = document.createElement('div');
                    divRow.className = 'row';
                    divRow.style.width = '100%';
                    divRow.style.margin = '0 auto';
                    divRow.style.overflowY = 'auto';
                    const divCol1 = document.createElement('div');
                    divCol1.className = 'col-4';
                    divCol1.style.padding = '5px';
                    const divCol2 = document.createElement('div');
                    divCol2.className = 'col-4';
                    divCol2.style.padding = '5px';
                    const divCol3 = document.createElement('div');
                    divCol3.className = 'col-4';
                    divCol3.style.padding = '5px';
                    divRow.appendChild(divCol1);
                    divRow.appendChild(divCol2);
                    divRow.appendChild(divCol3);

                    // img 
                    const img = document.createElement('img');
                    img.style.width = '80%';
                    img.style.display = 'block';
                    img.style.margin = '0 auto';
                    img.src = array[i].img;
                    divCol1.appendChild(img);

                    // nombre, precio y cantidad
                    const nombre = document.createElement('p');
                    const text = array[i].nombre.charAt(0).toUpperCase()+array[i].nombre.slice(1).toLowerCase();
                    const textNombre = document.createTextNode(text.toString());
                    nombre.appendChild(textNombre);
                    nombre.style.textAlign = 'left';
                    nombre.style.marginBottom = '5px';  
                    nombre.style.fontSize = '13px';
                    nombre.style.fontWeight = 'bold';
                    divCol2.appendChild(nombre);          

                    const precio = document.createElement('p');
                    const textPrecio = document.createTextNode('Precio: $'+array[i].precio.toString());
                    precio.appendChild(textPrecio);
                    precio.style.textAlign = 'left';
                    precio.style.marginBottom = '5px';
                    precio.style.fontSize = '13px';
                    divCol2.appendChild(precio);

                    const cantidad = document.createElement('p');
                    const textCantidad = document.createTextNode('Unidades: '+array[i].cantidad.toString());
                    cantidad.appendChild(textCantidad);
                    cantidad.style.textAlign = 'left';
                    cantidad.style.fontSize = '13px';
                    divCol2.appendChild(cantidad);

                    // subtotal
                    const subTotal = document.createElement('h4');
                    const precioT = parseFloat(array[i].precio);
                    const suma = precioT * array[i].cantidad;
                    const textSub = document.createTextNode('$'+suma.toFixed(2).toString());
                    subTotal.appendChild(textSub);
                    subTotal.style.fontWeight = 'bold';
                    subTotal.style.textAlign = 'center';
                    subTotal.style.color = 'black';
                    subTotal.style.marginTop = '20px';
                    divCol3.appendChild(subTotal);
                    total = total + suma;

                    //IVA
                    //const iva = totalSinI * 0.12;

                    // agregar todo
                    tabla.appendChild(divRow);

                    // TOTAL
                    document.getElementById('precioCarro').innerHTML = '$'+(total +2 ).toFixed(2).toString();
                    window.localStorage.setItem('totalPagar', +(total +2 ).toFixed(2).toString())
                }
            }
        //}
        this.setState({value: 0});
    }

    anadir (event) {
        document.getElementById(event.target.id).innerHTML = "Añadir"
    }

    buscar(event){
        const palabra = event.target.value;
        const n = palabra.length-1;
        const tabla = document.getElementById('dibujar');
        tabla.innerHTML="";
        const fruta = this.state.buscar;
        const length = fruta.length;
        if (palabra == ''){
            for (let i = 0; i <length; i++) {
                const colPa = document.createElement('col');
                colPa.className="col-6 col-lg-3 objeto";
                tabla.appendChild(colPa);

                const divPa = document.createElement('div');
                divPa.className="border";
                divPa.id= fruta[i].id;
                colPa.appendChild(divPa);
                
                const img = document.createElement('img');
                img.src = fruta[i].img;
                img.style.width='100%';
                img.className="frutaImg";
                img.setAttribute("data-toggle", "modal");
                img.setAttribute("data-target", "#exampleModalCenter");
                img.lang = fruta[i].id;
                img.style.maxHeight = '157px';
                img.style.minHeight = '157px';
                divPa.appendChild(img);

                const br = document.createElement('br');
                divPa.appendChild(br);

                const p1 = document.createElement('p');
                p1.id="tituloFruta";
                const textP1 = document.createTextNode(fruta[i].nombre.charAt(0).toUpperCase()+fruta[i].nombre.slice(1).toLowerCase());
                p1.appendChild(textP1);
                divPa.appendChild(p1);

                const p2 = document.createElement('p');
                p2.id="precioFruta";
                const textP2 = document.createTextNode('$'+fruta[i].precio+' / '+fruta[i].Unidad);
                p2.appendChild(textP2);
                divPa.appendChild(p2);

                const div1 = document.createElement('div');
                div1.id="masMenos";
                divPa.appendChild(div1);

                const f2 = document.createElement('i');
                f2.className="fas fa-minus icono";
                f2.lang=fruta[i].nombre+fruta[i].id;
                f2.nonce=fruta[i].id;
                f2.onclick = (menos) =>{
                    menos.currentTarget;
                    const valor = document.getElementById(menos.currentTarget.lang).getAttribute('lang');
                    let cant = parseFloat(valor);
                    if (cant > 0) {
                        cant = cant - 1;
                        document.getElementById(menos.currentTarget.lang).setAttribute('value', cant.toString());
                        document.getElementById(menos.currentTarget.lang).setAttribute('lang', cant.toString());
                        this.setState({value: null});
                        this.setState({value: cant});
                        this.setState({id: null});
                        this.setState({id: menos.currentTarget.nonce});
                        this.setState({nombre: null});
                        this.setState({nombre: menos.currentTarget.lang});
                    }
                };
                div1.appendChild(f2);

                const input = document.createElement('input');
                input.type="number";
                input.className="inputValor1";
                input.lang="0";
                input.id= fruta[i].nombre+fruta[i].id;
                input.nonce= fruta[i].id;
                input.onchange = (input) =>{
                    console.log(input.currentTarget);
                };
                input.placeholder="0";
                div1.appendChild(input);

                const f1 = document.createElement('i');
                f1.className="fas fa-plus icono";
                f1.lang=fruta[i].nombre+fruta[i].id;
                f1.nonce=fruta[i].id;
                f1.onclick = (mas) =>{
                    const valor = parseFloat(document.getElementById(mas.currentTarget.lang).getAttribute('lang'));
                    let cant = valor;
                    cant = cant + 1;
                    document.getElementById(mas.currentTarget.lang).setAttribute('value', cant.toString());
                    document.getElementById(mas.currentTarget.lang).setAttribute('lang', cant.toString());
                    this.setState({value: null});
                    this.setState({value: cant});
                    this.setState({id: null});
                    this.setState({id: mas.currentTarget.nonce});
                    this.setState({nombre: null});
                    this.setState({nombre: mas.currentTarget.lang});
                };
                div1.appendChild(f1);

                const bot = document.createElement('button');
                bot.className="add";
                bot.name = fruta[i].precio;
                bot.id = fruta[i].img+fruta[i].id;
                bot.onclick = (add) =>{
                    if (this.state.value > 0) {

                        document.getElementById(add.currentTarget.id).style.animation = "miAnimacion2 3s";
                        document.getElementById(add.currentTarget.id).innerHTML = "Listo";
        
                        const objectAux = {
                            img: '',
                            nombre: '',
                            precio: '', 
                            cantidad: '',
                            id: ''
                        }
        
                        objectAux.img = add.currentTarget.id.slice(0, -fruta[i].id.length);
                        objectAux.nombre = this.state.nombre;
                        objectAux.precio = add.currentTarget.name;
                        objectAux.cantidad = this.state.value;
                        objectAux.id = this.state.id;
        
                        this.state.pagar.push(objectAux);
        
                        window.sessionStorage.setItem('array', JSON.stringify(this.state.pagar));
        
                        console.log(JSON.parse(window.sessionStorage.getItem('array')));
        
                        // Agregar a carrito
                        console.log('entra');
                        const tabla = document.getElementById('carritoBody');
                        tabla.innerHTML = '';
                        const array = JSON.parse(window.sessionStorage.getItem('array'));
                        console.log(array);
                        const n = array.length;
                        let total = 0;
                        for (let i=0; i < n; i++) {
                            // Crear los div layout
                            const divRow = document.createElement('div');
                            divRow.className = 'row';
                            divRow.style.width = '100%';
                            divRow.style.margin = '0 auto';
                            divRow.style.overflowY = 'auto';
                            const divCol1 = document.createElement('div');
                            divCol1.className = 'col-4';
                            divCol1.style.padding = '5px';
                            const divCol2 = document.createElement('div');
                            divCol2.className = 'col-4';
                            divCol2.style.padding = '5px';
                            const divCol3 = document.createElement('div');
                            divCol3.className = 'col-4';
                            divCol3.style.padding = '5px';
                            divRow.appendChild(divCol1);
                            divRow.appendChild(divCol2);
                            divRow.appendChild(divCol3);
        
                            // img 
                            const img = document.createElement('img');
                            img.style.width = '80%';
                            img.style.display = 'block';
                            img.style.margin = '0 auto';
                            img.src = array[i].img;
                            divCol1.appendChild(img);
        
                            // nombre, precio y cantidad
                            const nombre = document.createElement('p');
                            const text = array[i].nombre.charAt(0).toUpperCase()+array[i].nombre.slice(1).toLowerCase();
                            const textNombre = document.createTextNode(text.toString());
                            nombre.appendChild(textNombre);
                            nombre.style.textAlign = 'left';
                            nombre.style.marginBottom = '5px';  
                            nombre.style.fontSize = '13px';
                            nombre.style.fontWeight = 'bold';
                            divCol2.appendChild(nombre);          
        
                            const precio = document.createElement('p');
                            const textPrecio = document.createTextNode('Precio: $'+array[i].precio.toString());
                            precio.appendChild(textPrecio);
                            precio.style.textAlign = 'left';
                            precio.style.marginBottom = '5px';
                            precio.style.fontSize = '13px';
                            divCol2.appendChild(precio);
        
                            const cantidad = document.createElement('p');
                            const textCantidad = document.createTextNode('Unidades: '+array[i].cantidad.toString());
                            cantidad.appendChild(textCantidad);
                            cantidad.style.textAlign = 'left';
                            cantidad.style.fontSize = '13px';
                            divCol2.appendChild(cantidad);
        
                            // subtotal
                            const subTotal = document.createElement('h4');
                            const precioT = parseFloat(array[i].precio);
                            const suma = precioT * array[i].cantidad;
                            const textSub = document.createTextNode('$'+suma.toFixed(2).toString());
                            subTotal.appendChild(textSub);
                            subTotal.style.fontWeight = 'bold';
                            subTotal.style.textAlign = 'center';
                            subTotal.style.color = 'black';
                            subTotal.style.marginTop = '20px';
                            divCol3.appendChild(subTotal);
                            total = total + suma;
        
                            // agregar todo
                            tabla.appendChild(divRow);
        
                            // TOTAL
                            document.getElementById('precioCarro').innerHTML = '$'+(total +2 ).toFixed(2).toString();
                            window.localStorage.setItem('totalPagar', +(total +2 ).toFixed(2).toString())
                        }
                    }
                    this.setState({value: 0});
                };
                bot.onmouseout = (cambiar) =>{
                    document.getElementById(cambiar.currentTarget.id).innerHTML = "Añadir"
                }
                const botText = document.createTextNode('Añadir');
                bot.appendChild(botText);
                divPa.appendChild(bot);
            }
        } else {
                for (let i = 0; i <length; i++) {
                    if (palabra.charAt(0).toLowerCase() == fruta[i].nombre.charAt(0).toLowerCase()){
                        if (palabra.charAt(n).toLowerCase() == fruta[i].nombre.charAt(n).toLowerCase()){
                            const colPa = document.createElement('col');
                            colPa.className="col-6 col-lg-3 objeto";
                            tabla.appendChild(colPa);

                            const divPa = document.createElement('div');
                            divPa.className="border";
                            divPa.id= fruta[i].id;
                            colPa.appendChild(divPa);
                            
                            const img = document.createElement('img');
                            img.src = fruta[i].img;
                            img.style.width='100%';
                            img.className="frutaImg";
                            img.setAttribute("data-toggle", "modal");
                            img.setAttribute("data-target", "#exampleModalCenter");
                            img.lang = fruta[i].id;
                            img.style.maxHeight = '157px';
                            img.style.minHeight = '157px';
                            divPa.appendChild(img);

                            const br = document.createElement('br');
                            divPa.appendChild(br);

                            const p1 = document.createElement('p');
                            p1.id="tituloFruta";
                            const textP1 = document.createTextNode(fruta[i].nombre.charAt(0).toUpperCase()+fruta[i].nombre.slice(1).toLowerCase());
                            p1.appendChild(textP1);
                            divPa.appendChild(p1);

                            const p2 = document.createElement('p');
                            p2.id="precioFruta";
                            const textP2 = document.createTextNode('$'+fruta[i].precio+' / '+fruta[i].Unidad);
                            p2.appendChild(textP2);
                            divPa.appendChild(p2);

                            const div1 = document.createElement('div');
                            div1.id="masMenos";
                            divPa.appendChild(div1);

                            const f2 = document.createElement('i');
                            f2.className="fas fa-minus icono";
                            f2.lang=fruta[i].nombre+fruta[i].id;
                            f2.nonce=fruta[i].id;
                            f2.onclick = (menos) =>{
                                menos.currentTarget;
                                const valor = document.getElementById(menos.currentTarget.lang).getAttribute('lang');
                                let cant = parseFloat(valor);
                                if (cant > 0) {
                                    cant = cant - 1;
                                    document.getElementById(menos.currentTarget.lang).setAttribute('value', cant.toString());
                                    document.getElementById(menos.currentTarget.lang).setAttribute('lang', cant.toString());
                                    this.setState({value: null});
                                    this.setState({value: cant});
                                    this.setState({id: null});
                                    this.setState({id: menos.currentTarget.nonce});
                                    this.setState({nombre: null});
                                    this.setState({nombre: menos.currentTarget.lang});
                                }
                            };
                            div1.appendChild(f2);

                            const input = document.createElement('input');
                            input.type="number";
                            input.className="inputValor1";
                            input.lang="0";
                            input.id= fruta[i].nombre+fruta[i].id;
                            input.nonce= fruta[i].id;
                            input.onchange = (input) =>{
                                console.log(input.currentTarget);
                            };
                            input.placeholder="0";
                            div1.appendChild(input);

                            const f1 = document.createElement('i');
                            f1.className="fas fa-plus icono";
                            f1.lang=fruta[i].nombre+fruta[i].id;
                            f1.nonce=fruta[i].id;
                            f1.onclick = (mas) =>{
                                const valor = parseFloat(document.getElementById(mas.currentTarget.lang).getAttribute('lang'));
                                let cant = valor;
                                cant = cant + 1;
                                document.getElementById(mas.currentTarget.lang).setAttribute('value', cant.toString());
                                document.getElementById(mas.currentTarget.lang).setAttribute('lang', cant.toString());
                                this.setState({value: null});
                                this.setState({value: cant});
                                this.setState({id: null});
                                this.setState({id: mas.currentTarget.nonce});
                                this.setState({nombre: null});
                                this.setState({nombre: mas.currentTarget.lang});
                            };
                            div1.appendChild(f1);

                            const bot = document.createElement('button');
                            bot.className="add";
                            bot.name = fruta[i].precio;
                            bot.id = fruta[i].img+fruta[i].id;
                            bot.onclick = (add) =>{
                                if (this.state.value > 0) {

                                    document.getElementById(add.currentTarget.id).style.animation = "miAnimacion2 3s";
                                    document.getElementById(add.currentTarget.id).innerHTML = "Listo";
                    
                                    const objectAux = {
                                        img: '',
                                        nombre: '',
                                        precio: '', 
                                        cantidad: '',
                                        id: ''
                                    }
                    
                                    objectAux.img = add.currentTarget.id.slice(0, -fruta[i].id.length);
                                    objectAux.nombre = this.state.nombre;
                                    objectAux.precio = add.currentTarget.name;
                                    objectAux.cantidad = this.state.value;
                                    objectAux.id = this.state.id;
                    
                                    this.state.pagar.push(objectAux);
                    
                                    window.sessionStorage.setItem('array', JSON.stringify(this.state.pagar));
                    
                                    console.log(JSON.parse(window.sessionStorage.getItem('array')));
                    
                                    // Agregar a carrito
                                    console.log('entra');
                                    const tabla = document.getElementById('carritoBody');
                                    tabla.innerHTML = '';
                                    const array = JSON.parse(window.sessionStorage.getItem('array'));
                                    console.log(array);
                                    const n = array.length;
                                    let total = 0;
                                    for (let i=0; i < n; i++) {
                                        // Crear los div layout
                                        const divRow = document.createElement('div');
                                        divRow.className = 'row';
                                        divRow.style.width = '100%';
                                        divRow.style.margin = '0 auto';
                                        divRow.style.overflowY = 'auto';
                                        const divCol1 = document.createElement('div');
                                        divCol1.className = 'col-4';
                                        divCol1.style.padding = '5px';
                                        const divCol2 = document.createElement('div');
                                        divCol2.className = 'col-4';
                                        divCol2.style.padding = '5px';
                                        const divCol3 = document.createElement('div');
                                        divCol3.className = 'col-4';
                                        divCol3.style.padding = '5px';
                                        divRow.appendChild(divCol1);
                                        divRow.appendChild(divCol2);
                                        divRow.appendChild(divCol3);
                    
                                        // img 
                                        const img = document.createElement('img');
                                        img.style.width = '80%';
                                        img.style.display = 'block';
                                        img.style.margin = '0 auto';
                                        img.src = array[i].img;
                                        divCol1.appendChild(img);
                    
                                        // nombre, precio y cantidad
                                        const nombre = document.createElement('p');
                                        const text = array[i].nombre.charAt(0).toUpperCase()+array[i].nombre.slice(1).toLowerCase();
                                        const textNombre = document.createTextNode(text.toString());
                                        nombre.appendChild(textNombre);
                                        nombre.style.textAlign = 'left';
                                        nombre.style.marginBottom = '5px';  
                                        nombre.style.fontSize = '13px';
                                        nombre.style.fontWeight = 'bold';
                                        divCol2.appendChild(nombre);          
                    
                                        const precio = document.createElement('p');
                                        const textPrecio = document.createTextNode('Precio: $'+array[i].precio.toString());
                                        precio.appendChild(textPrecio);
                                        precio.style.textAlign = 'left';
                                        precio.style.marginBottom = '5px';
                                        precio.style.fontSize = '13px';
                                        divCol2.appendChild(precio);
                    
                                        const cantidad = document.createElement('p');
                                        const textCantidad = document.createTextNode('Unidades: '+array[i].cantidad.toString());
                                        cantidad.appendChild(textCantidad);
                                        cantidad.style.textAlign = 'left';
                                        cantidad.style.fontSize = '13px';
                                        divCol2.appendChild(cantidad);
                    
                                        // subtotal
                                        const subTotal = document.createElement('h4');
                                        const precioT = parseFloat(array[i].precio);
                                        const suma = precioT * array[i].cantidad;
                                        const textSub = document.createTextNode('$'+suma.toFixed(2).toString());
                                        subTotal.appendChild(textSub);
                                        subTotal.style.fontWeight = 'bold';
                                        subTotal.style.textAlign = 'center';
                                        subTotal.style.color = 'black';
                                        subTotal.style.marginTop = '20px';
                                        divCol3.appendChild(subTotal);
                                        total = total + suma;
                    
                                        // agregar todo
                                        tabla.appendChild(divRow);
                    
                                        // TOTAL
                                        document.getElementById('precioCarro').innerHTML = '$'+(total +2 ).toFixed(2).toString();
                                        window.localStorage.setItem('totalPagar', +(total +2 ).toFixed(2).toString())
                                    }
                                }
                                this.setState({value: 0});
                            };
                            bot.onmouseout = (cambiar) =>{
                                document.getElementById(cambiar.currentTarget.id).innerHTML = "Añadir"
                            }
                            const botText = document.createTextNode('Añadir');
                            bot.appendChild(botText);
                            divPa.appendChild(bot);
                        }
                }
            }
        }
    }

    /*verMas(event){
        var target = event.target.lang;
        var imgModal = document.getElementById('imgModal');
        imgModal.innerHTML="";
        var datosModal = document.getElementById('datosModal');
        datosModal.innerHTML = '';

        const spinner = document.createElement('div');
        spinner.className="spinner-border";
        spinner.setAttribute('role' ,"status");
        spinner.style.display = 'block';
        spinner.style.margin = '0 auto';
        spinner.style.marginTop = '40px';
        spinner.style.color = '#8adb72';
        const spiText = document.createElement('span');
        spiText.className = "sr-only";
        const textoSpi = document.createTextNode('Loading...');
        spiText.appendChild(textoSpi);
        spinner.appendChild(spiText);
        datosModal.appendChild(spinner);
        request
          .get('https://prueba-next-u-react.firebaseio.com/productos/Vegetales'+target+".json")
          .set('Content-Type','aplication/json') 
		  .then((res => {
              datosModal.innerHTML = '';
              var fruto= res.body;
              document.getElementById("exampleModalCenterTitle").innerHTML=fruto.nombre.toUpperCase();
              var img = document.createElement('img');
              img.src=fruto.img;
              img.style.width="100%";
              imgModal.appendChild(img);
              var nombre= document.createElement('h4');
              nombre.innerHTML=fruto.nombre.toUpperCase();
              datosModal.appendChild(nombre);
              var precio= document.createElement('p');
              var textPrice = document.createTextNode('Precio: $'+fruto.precio);
              precio.appendChild(textPrice);
              datosModal.appendChild(precio);
            }));
    }*/

    inputValue(event){
        console.log(event.target);
    }

    menos (event) {
        const valor = document.getElementById(event.target.lang).getAttribute('lang');
        let cant = parseFloat(valor);
        if (cant > 0) {
            cant = cant - 1;
            document.getElementById(event.target.lang).setAttribute('value', cant.toString());
            document.getElementById(event.target.lang).setAttribute('lang', cant.toString());
            this.setState({value: null});
            this.setState({value: cant});
            this.setState({id: null});
            this.setState({id: event.target.nonce});
            this.setState({nombre: null});
            this.setState({nombre: event.target.lang});
        }
    }

    mas (event) {
        const valor = parseFloat(document.getElementById(event.target.lang).getAttribute('lang'));
        let cant = valor;
        cant = cant + 1;
        document.getElementById(event.target.lang).setAttribute('value', cant.toString());
        document.getElementById(event.target.lang).setAttribute('lang', cant.toString());
        this.setState({value: null});
        this.setState({value: cant});
        this.setState({id: null});
        this.setState({id: event.target.nonce});
        this.setState({nombre: null});
        this.setState({nombre: event.target.lang});
    }

    efectoObjeto2 (event) {
        document.getElementById(event.target.id).style.boxShadow="none";
    }

    carrusel () {
        if (this.state.carrusel == 1){
            this.setState({carrusel: 2});
            document.getElementById('carrusel2').style.animation = 'carrusel1 2.5s';
            document.getElementById('carrusel1').setAttribute('hidden', '');
            document.getElementById('carrusel2').removeAttribute('hidden');
        } else {
            this.setState({carrusel: 1});
            document.getElementById('carrusel1').style.animation = 'carrusel1 2.5s';
            document.getElementById('carrusel2').setAttribute('hidden', '');
            document.getElementById('carrusel1').removeAttribute('hidden');
        }
    }

    carrusel2Mas () {
        this.setState({bandera: this.state.bandera+1});
        if (this.state.bandera == 4) {
            document.getElementById('carruselCell4').style.animation = 'carrusel1 2.5s';
            document.getElementById('carruselCell4').removeAttribute('hidden');
            document.getElementById('carruselCell3').setAttribute('hidden', '');
            document.getElementById('carruselCell2').setAttribute('hidden', '');
            document.getElementById('carruselCell1').setAttribute('hidden', '');
            this.setState({bandera: 1});
        }else if ((this.state.bandera == 3)) {
            document.getElementById('carruselCell3').style.animation = 'carrusel1 2.5s';
            document.getElementById('carruselCell3').removeAttribute('hidden');
            document.getElementById('carruselCell4').setAttribute('hidden', '');
            document.getElementById('carruselCell2').setAttribute('hidden', '');
            document.getElementById('carruselCell1').setAttribute('hidden', '');
        }else if ((this.state.bandera == 2)) {
            document.getElementById('carruselCell2').style.animation = 'carrusel1 2.5s';
            document.getElementById('carruselCell2').removeAttribute('hidden');
            document.getElementById('carruselCell4').setAttribute('hidden', '');
            document.getElementById('carruselCell3').setAttribute('hidden', '');
            document.getElementById('carruselCell1').setAttribute('hidden', '');
            this.setState({bandera: 3});
        }else if ((this.state.bandera == 1)) {
            document.getElementById('carruselCell1').style.animation = 'carrusel1 2.5s';
            document.getElementById('carruselCell1').removeAttribute('hidden');
            document.getElementById('carruselCell4').setAttribute('hidden', '');
            document.getElementById('carruselCell2').setAttribute('hidden', '');
            document.getElementById('carruselCell3').setAttribute('hidden', '');
        }
    }

    carrusel2Menos () {
        this.setState({bandera: this.state.bandera-1});
        if (this.state.bandera == 4) {
            document.getElementById('carruselCell4').style.animation = 'carrusel1 2.5s';
            document.getElementById('carruselCell4').removeAttribute('hidden');
            document.getElementById('carruselCell3').setAttribute('hidden', '');
            document.getElementById('carruselCell2').setAttribute('hidden', '');
            document.getElementById('carruselCell1').setAttribute('hidden', '');
        }else if ((this.state.bandera == 3)) {
            document.getElementById('carruselCell3').style.animation = 'carrusel1 2.5s';
            document.getElementById('carruselCell3').removeAttribute('hidden');
            document.getElementById('carruselCell4').setAttribute('hidden', '');
            document.getElementById('carruselCell2').setAttribute('hidden', '');
            document.getElementById('carruselCell1').setAttribute('hidden', '');
        }else if ((this.state.bandera == 2)) {
            document.getElementById('carruselCell2').style.animation = 'carrusel1 2.5s';
            document.getElementById('carruselCell2').removeAttribute('hidden');
            document.getElementById('carruselCell4').setAttribute('hidden', '');
            document.getElementById('carruselCell3').setAttribute('hidden', '');
            document.getElementById('carruselCell1').setAttribute('hidden', '');
        }else if ((this.state.bandera  < 2)) {
            document.getElementById('carruselCell1').style.animation = 'carrusel1 2.5s';
            document.getElementById('carruselCell1').removeAttribute('hidden');
            document.getElementById('carruselCell4').setAttribute('hidden', '');
            document.getElementById('carruselCell2').setAttribute('hidden', '');
            document.getElementById('carruselCell3').setAttribute('hidden', '');
            this.setState({bandera: 4});
        }
    }

    frutasLindas () {
        document.getElementById('frutasLindas').style.animation = "carrusel2 0.3s";
        setTimeout(function() {document.getElementById('frutasLindas').style.animation = "none";}, 300);

        const tabla = document.getElementById('dibujar');
        tabla.innerHTML = '';

        const spinner = document.createElement('div');
        spinner.className="spinner-border";
        spinner.setAttribute('role' ,"status");
        spinner.style.display = 'block';
        spinner.style.margin = '0 auto';
        spinner.style.marginTop = '40px';
        spinner.style.color = '#8adb72';
        const spiText = document.createElement('span');
        spiText.className = "sr-only";
        const textoSpi = document.createTextNode('Loading...');
        spiText.appendChild(textoSpi);
        spinner.appendChild(spiText);
        tabla.appendChild(spinner);

        request
        .get('https://prueba-next-u-react.firebaseio.com/productos/Frutas.json')
        .set('Content-Type','aplication/json') 
        .then((res => {
            const fruta = res.body;
            const tabla = document.getElementById('dibujar');
            const n = fruta.length;
            tabla.innerHTML = '';
            for (let i = 0;  i < n; i++) {
                const colPa = document.createElement('col');
                colPa.className="col-6 col-lg-3 objeto";
                tabla.appendChild(colPa);

                const divPa = document.createElement('div');
                divPa.className="border";
                divPa.id= fruta[i].id;
                colPa.appendChild(divPa);
                
                const img = document.createElement('img');
                img.src = fruta[i].img;
                img.style.width='100%';
                img.className="frutaImg";
                //img.setAttribute("data-toggle", "modal");
                //img.setAttribute("data-target", "#exampleModalCenter");
                img.lang = fruta[i].id;
                img.style.maxHeight = '157px';
                img.style.minHeight = '157px';
                /*img.onclick = (event) => {
                    var target = event.currentTarget.lang;
                    var imgModal = document.getElementById('imgModal');
                    imgModal.innerHTML="";
                    var datosModal = document.getElementById('datosModal');

                    const spinner = document.createElement('div');
                    spinner.className="spinner-border";
                    spinner.setAttribute('role' ,"status");
                    spinner.style.display = 'block';
                    spinner.style.margin = '0 auto';
                    spinner.style.marginTop = '40px';
                    spinner.style.color = '#8adb72';
                    const spiText = document.createElement('span');
                    spiText.className = "sr-only";
                    const textoSpi = document.createTextNode('Loading...');
                    spiText.appendChild(textoSpi);
                    spinner.appendChild(spiText);
                    datosModal.appendChild(spinner);

                    request
                    .get('https://prueba-next-u-react.firebaseio.com/productos/Frutas/'+target+".json")
                    .set('Content-Type','aplication/json') 
                    .then((res => {
                        datosModal.innerHTML="";
                        var fruto= res.body;
                        document.getElementById("exampleModalCenterTitle").innerHTML=fruto.nombre.toUpperCase();
                        var img = document.createElement('img');
                        img.src=fruto.img;
                        img.style.width="100%";
                        imgModal.appendChild(img);
                        var nombre= document.createElement('h4');
                        nombre.innerHTML=fruto.nombre.toUpperCase();
                        datosModal.appendChild(nombre);
                        var precio= document.createElement('p');
                        var textPrice = document.createTextNode('Precio: $'+fruto.precio);
                        precio.appendChild(textPrice);
                        datosModal.appendChild(precio);
                        }));
                };*/
                divPa.appendChild(img);

                const br = document.createElement('br');
                divPa.appendChild(br);

                const p1 = document.createElement('p');
                p1.id="tituloFruta";
                const textP1 = document.createTextNode(fruta[i].nombre.charAt(0).toUpperCase()+fruta[i].nombre.slice(1).toLowerCase());
                p1.appendChild(textP1);
                divPa.appendChild(p1);

                const p2 = document.createElement('p');
                p2.id="precioFruta";
                const textP2 = document.createTextNode('$'+fruta[i].precio+' / '+fruta[i].Unidad);
                p2.appendChild(textP2);
                divPa.appendChild(p2);

                const div1 = document.createElement('div');
                div1.id="masMenos";
                divPa.appendChild(div1);

                const f2 = document.createElement('i');
                f2.className="fas fa-minus icono";
                f2.lang=fruta[i].nombre+fruta[i].id;
                f2.nonce=fruta[i].id;
                f2.onclick = (menos) =>{
                    menos.currentTarget;
                    const valor = document.getElementById(menos.currentTarget.lang).getAttribute('lang');
                    let cant = parseFloat(valor);
                    if (cant > 0) {
                        cant = cant - 1;
                        document.getElementById(menos.currentTarget.lang).setAttribute('value', cant.toString());
                        document.getElementById(menos.currentTarget.lang).setAttribute('lang', cant.toString());
                        this.setState({value: null});
                        this.setState({value: cant});
                        this.setState({id: null});
                        this.setState({id: menos.currentTarget.nonce});
                        this.setState({nombre: null});
                        this.setState({nombre: menos.currentTarget.lang});
                    }
                };
                div1.appendChild(f2);

                const input = document.createElement('input');
                input.type="number";
                input.className="inputValor1";
                input.lang="0";
                input.id= fruta[i].nombre+fruta[i].id;
                input.nonce= fruta[i].id;
                input.onchange = (input) =>{
                    console.log(input.currentTarget);
                };
                input.placeholder="0";
                div1.appendChild(input);

                const f1 = document.createElement('i');
                f1.className="fas fa-plus icono";
                f1.lang=fruta[i].nombre+fruta[i].id;
                f1.nonce=fruta[i].id;
                f1.onclick = (mas) =>{
                    const valor = parseFloat(document.getElementById(mas.currentTarget.lang).getAttribute('lang'));
                    let cant = valor;
                    cant = cant + 1;
                    document.getElementById(mas.currentTarget.lang).setAttribute('value', cant.toString());
                    document.getElementById(mas.currentTarget.lang).setAttribute('lang', cant.toString());
                    this.setState({value: null});
                    this.setState({value: cant});
                    this.setState({id: null});
                    this.setState({id: mas.currentTarget.nonce});
                    this.setState({nombre: null});
                    this.setState({nombre: mas.currentTarget.lang});
                };
                div1.appendChild(f1);

                const bot = document.createElement('button');
                bot.className="add";
                bot.name = fruta[i].precio;
                bot.id = fruta[i].img+fruta[i].id;
                bot.onclick = (add) =>{
                    if (this.state.value > 0) {

                        document.getElementById(add.currentTarget.id).style.animation = "miAnimacion2 3s";
                        document.getElementById(add.currentTarget.id).innerHTML = "Listo";
        
                        const objectAux = {
                            img: '',
                            nombre: '',
                            precio: '', 
                            cantidad: '',
                            id: ''
                        }
        
                        objectAux.img = add.currentTarget.id.slice(0, -fruta[i].id.length);
                        objectAux.nombre = this.state.nombre;
                        objectAux.precio = add.currentTarget.name;
                        objectAux.cantidad = this.state.value;
                        objectAux.id = this.state.id;
        
                        this.state.pagar.push(objectAux);
        
                        window.sessionStorage.setItem('array', JSON.stringify(this.state.pagar));
        
                        console.log(JSON.parse(window.sessionStorage.getItem('array')));
        
                        // Agregar a carrito
                        console.log('entra');
                        const tabla = document.getElementById('carritoBody');
                        tabla.innerHTML = '';
                        const array = JSON.parse(window.sessionStorage.getItem('array'));
                        console.log(array);
                        const n = array.length;
                        let total = 0;
                        for (let i=0; i < n; i++) {
                            // Crear los div layout
                            const divRow = document.createElement('div');
                            divRow.className = 'row';
                            divRow.style.width = '100%';
                            divRow.style.margin = '0 auto';
                            divRow.style.overflowY = 'auto';
                            const divCol1 = document.createElement('div');
                            divCol1.className = 'col-4';
                            divCol1.style.padding = '5px';
                            const divCol2 = document.createElement('div');
                            divCol2.className = 'col-4';
                            divCol2.style.padding = '5px';
                            const divCol3 = document.createElement('div');
                            divCol3.className = 'col-4';
                            divCol3.style.padding = '5px';
                            divRow.appendChild(divCol1);
                            divRow.appendChild(divCol2);
                            divRow.appendChild(divCol3);
        
                            // img 
                            const img = document.createElement('img');
                            img.style.width = '80%';
                            img.style.display = 'block';
                            img.style.margin = '0 auto';
                            img.src = array[i].img;
                            divCol1.appendChild(img);
        
                            // nombre, precio y cantidad
                            const nombre = document.createElement('p');
                            const text = array[i].nombre.charAt(0).toUpperCase()+array[i].nombre.slice(1).toLowerCase();
                            const textNombre = document.createTextNode(text.toString());
                            nombre.appendChild(textNombre);
                            nombre.style.textAlign = 'left';
                            nombre.style.marginBottom = '5px';  
                            nombre.style.fontSize = '13px';
                            nombre.style.fontWeight = 'bold';
                            divCol2.appendChild(nombre);          
        
                            const precio = document.createElement('p');
                            const textPrecio = document.createTextNode('Precio: $'+array[i].precio.toString());
                            precio.appendChild(textPrecio);
                            precio.style.textAlign = 'left';
                            precio.style.marginBottom = '5px';
                            precio.style.fontSize = '13px';
                            divCol2.appendChild(precio);
        
                            const cantidad = document.createElement('p');
                            const textCantidad = document.createTextNode('Unidades: '+array[i].cantidad.toString());
                            cantidad.appendChild(textCantidad);
                            cantidad.style.textAlign = 'left';
                            cantidad.style.fontSize = '13px';
                            divCol2.appendChild(cantidad);
        
                            // subtotal
                            const subTotal = document.createElement('h4');
                            const precioT = parseFloat(array[i].precio);
                            const suma = precioT * array[i].cantidad;
                            const textSub = document.createTextNode('$'+suma.toFixed(2).toString());
                            subTotal.appendChild(textSub);
                            subTotal.style.fontWeight = 'bold';
                            subTotal.style.textAlign = 'center';
                            subTotal.style.color = 'black';
                            subTotal.style.marginTop = '20px';
                            divCol3.appendChild(subTotal);
                            total = total + suma;
        
                            // agregar todo
                            tabla.appendChild(divRow);
        
                            // TOTAL
                            document.getElementById('precioCarro').innerHTML = '$'+(total +2 ).toFixed(2).toString();
                            window.localStorage.setItem('totalPagar', +(total +2 ).toFixed(2).toString())
                        }
                    }
                    this.setState({value: 0});
                };
                bot.onmouseout = (cambiar) =>{
                    document.getElementById(cambiar.currentTarget.id).innerHTML = "Añadir"
                }
                const botText = document.createTextNode('Añadir');
                bot.appendChild(botText);
                divPa.appendChild(bot);
            }
        }));
    }

    abarrotes () {
        document.getElementById('abarrotes').style.animation = "carrusel2 0.3s";
        setTimeout(function() {document.getElementById('abarrotes').style.animation = "none";}, 300);

        const tabla = document.getElementById('dibujar');
        tabla.innerHTML = '';

        const spinner = document.createElement('div');
        spinner.className="spinner-border";
        spinner.setAttribute('role' ,"status");
        spinner.style.display = 'block';
        spinner.style.margin = '0 auto';
        spinner.style.marginTop = '40px';
        spinner.style.color = '#8adb72';
        const spiText = document.createElement('span');
        spiText.className = "sr-only";
        const textoSpi = document.createTextNode('Loading...');
        spiText.appendChild(textoSpi);
        spinner.appendChild(spiText);
        tabla.appendChild(spinner);

        request
        .get('https://prueba-next-u-react.firebaseio.com/productos/Abarrotes.json')
        .set('Content-Type','aplication/json') 
        .then((res => {
            const fruta = res.body;
            const tabla = document.getElementById('dibujar');
            const n = fruta.length;
            tabla.innerHTML = '';
            for (let i = 0;  i < n; i++) {
                const colPa = document.createElement('col');
                colPa.className="col-6 col-lg-3 objeto";
                tabla.appendChild(colPa);

                const divPa = document.createElement('div');
                divPa.className="border";
                divPa.id= fruta[i].id;
                colPa.appendChild(divPa);
                
                const img = document.createElement('img');
                img.src = fruta[i].img;
                img.style.width='100%';
                img.className="frutaImg";
                //img.setAttribute("data-toggle", "modal");
                //img.setAttribute("data-target", "#exampleModalCenter");
                img.lang = fruta[i].id;
                img.style.maxHeight = '157px';
                img.style.minHeight = '157px';
                /*img.onclick = (event) => {
                    var target = event.currentTarget.lang;
                    var imgModal = document.getElementById('imgModal');
                    imgModal.innerHTML="";
                    var datosModal = document.getElementById('datosModal');

                    const spinner = document.createElement('div');
                    spinner.className="spinner-border";
                    spinner.setAttribute('role' ,"status");
                    spinner.style.display = 'block';
                    spinner.style.margin = '0 auto';
                    spinner.style.marginTop = '40px';
                    spinner.style.color = '#8adb72';
                    const spiText = document.createElement('span');
                    spiText.className = "sr-only";
                    const textoSpi = document.createTextNode('Loading...');
                    spiText.appendChild(textoSpi);
                    spinner.appendChild(spiText);
                    datosModal.appendChild(spinner);
                    request
                    .get('https://prueba-next-u-react.firebaseio.com/productos/Abarrotes/'+target+".json")
                    .set('Content-Type','aplication/json') 
                    .then((res => {
                        var fruto= res.body;
                        document.getElementById("exampleModalCenterTitle").innerHTML=fruto.nombre.toUpperCase();
                        var img = document.createElement('img');
                        img.src=fruto.img;
                        img.style.width="100%";
                        imgModal.appendChild(img);
                        var nombre= document.createElement('h4');
                        nombre.innerHTML=fruto.nombre.toUpperCase();
                        datosModal.appendChild(nombre);
                        var precio= document.createElement('p');
                        var textPrice = document.createTextNode('Precio: $'+fruto.precio);
                        precio.appendChild(textPrice);
                        datosModal.appendChild(precio);
                        }));
                };*/
                divPa.appendChild(img);

                const br = document.createElement('br');
                divPa.appendChild(br);

                const p1 = document.createElement('p');
                p1.id="tituloFruta";
                const textP1 = document.createTextNode(fruta[i].nombre.charAt(0).toUpperCase()+fruta[i].nombre.slice(1).toLowerCase());
                p1.appendChild(textP1);
                divPa.appendChild(p1);

                const p2 = document.createElement('p');
                p2.id="precioFruta";
                const textP2 = document.createTextNode('$'+fruta[i].precio+' / '+fruta[i].Unidad);
                p2.appendChild(textP2);
                divPa.appendChild(p2);

                const div1 = document.createElement('div');
                div1.id="masMenos";
                divPa.appendChild(div1);

                const f2 = document.createElement('i');
                f2.className="fas fa-minus icono";
                f2.lang=fruta[i].nombre+fruta[i].id;
                f2.nonce=fruta[i].id;
                f2.onclick = (menos) =>{
                    menos.currentTarget;
                    const valor = document.getElementById(menos.currentTarget.lang).getAttribute('lang');
                    let cant = parseFloat(valor);
                    if (cant > 0) {
                        cant = cant - 1;
                        document.getElementById(menos.currentTarget.lang).setAttribute('value', cant.toString());
                        document.getElementById(menos.currentTarget.lang).setAttribute('lang', cant.toString());
                        this.setState({value: null});
                        this.setState({value: cant});
                        this.setState({id: null});
                        this.setState({id: menos.currentTarget.nonce});
                        this.setState({nombre: null});
                        this.setState({nombre: menos.currentTarget.lang});
                    }
                };
                div1.appendChild(f2);

                const input = document.createElement('input');
                input.type="number";
                input.className="inputValor1";
                input.lang="0";
                input.id= fruta[i].nombre+fruta[i].id;
                input.nonce= fruta[i].id;
                input.onchange = (input) =>{
                    console.log(input.currentTarget);
                };
                input.placeholder="0";
                div1.appendChild(input);

                const f1 = document.createElement('i');
                f1.className="fas fa-plus icono";
                f1.lang=fruta[i].nombre+fruta[i].id;
                f1.nonce=fruta[i].id;
                f1.onclick = (mas) =>{
                    const valor = parseFloat(document.getElementById(mas.currentTarget.lang).getAttribute('lang'));
                    let cant = valor;
                    cant = cant + 1;
                    document.getElementById(mas.currentTarget.lang).setAttribute('value', cant.toString());
                    document.getElementById(mas.currentTarget.lang).setAttribute('lang', cant.toString());
                    this.setState({value: null});
                    this.setState({value: cant});
                    this.setState({id: null});
                    this.setState({id: mas.currentTarget.nonce});
                    this.setState({nombre: null});
                    this.setState({nombre: mas.currentTarget.lang});
                };
                div1.appendChild(f1);

                const bot = document.createElement('button');
                bot.className="add";
                bot.name = fruta[i].precio;
                bot.id = fruta[i].img+fruta[i].id;
                bot.onclick = (add) =>{
                    if (this.state.value > 0) {

                        document.getElementById(add.currentTarget.id).style.animation = "miAnimacion2 3s";
                        document.getElementById(add.currentTarget.id).innerHTML = "Listo";
        
                        const objectAux = {
                            img: '',
                            nombre: '',
                            precio: '', 
                            cantidad: '',
                            id: ''
                        }
        
                        objectAux.img = add.currentTarget.id.slice(0, -fruta[i].id.length);
                        objectAux.nombre = this.state.nombre;
                        objectAux.precio = add.currentTarget.name;
                        objectAux.cantidad = this.state.value;
                        objectAux.id = this.state.id;
        
                        this.state.pagar.push(objectAux);
        
                        window.sessionStorage.setItem('array', JSON.stringify(this.state.pagar));
        
                        console.log(JSON.parse(window.sessionStorage.getItem('array')));
        
                        // Agregar a carrito
                        console.log('entra');
                        const tabla = document.getElementById('carritoBody');
                        tabla.innerHTML = '';
                        const array = JSON.parse(window.sessionStorage.getItem('array'));
                        console.log(array);
                        const n = array.length;
                        let total = 0;
                        for (let i=0; i < n; i++) {
                            // Crear los div layout
                            const divRow = document.createElement('div');
                            divRow.className = 'row';
                            divRow.style.width = '100%';
                            divRow.style.margin = '0 auto';
                            divRow.style.overflowY = 'auto';
                            const divCol1 = document.createElement('div');
                            divCol1.className = 'col-4';
                            divCol1.style.padding = '5px';
                            const divCol2 = document.createElement('div');
                            divCol2.className = 'col-4';
                            divCol2.style.padding = '5px';
                            const divCol3 = document.createElement('div');
                            divCol3.className = 'col-4';
                            divCol3.style.padding = '5px';
                            divRow.appendChild(divCol1);
                            divRow.appendChild(divCol2);
                            divRow.appendChild(divCol3);
        
                            // img 
                            const img = document.createElement('img');
                            img.style.width = '80%';
                            img.style.display = 'block';
                            img.style.margin = '0 auto';
                            img.src = array[i].img;
                            divCol1.appendChild(img);
        
                            // nombre, precio y cantidad
                            const nombre = document.createElement('p');
                            const text = array[i].nombre.charAt(0).toUpperCase()+array[i].nombre.slice(1).toLowerCase();
                            const textNombre = document.createTextNode(text.toString());
                            nombre.appendChild(textNombre);
                            nombre.style.textAlign = 'left';
                            nombre.style.marginBottom = '5px';  
                            nombre.style.fontSize = '13px';
                            nombre.style.fontWeight = 'bold';
                            divCol2.appendChild(nombre);          
        
                            const precio = document.createElement('p');
                            const textPrecio = document.createTextNode('Precio: $'+array[i].precio.toString());
                            precio.appendChild(textPrecio);
                            precio.style.textAlign = 'left';
                            precio.style.marginBottom = '5px';
                            precio.style.fontSize = '13px';
                            divCol2.appendChild(precio);
        
                            const cantidad = document.createElement('p');
                            const textCantidad = document.createTextNode('Unidades: '+array[i].cantidad.toString());
                            cantidad.appendChild(textCantidad);
                            cantidad.style.textAlign = 'left';
                            cantidad.style.fontSize = '13px';
                            divCol2.appendChild(cantidad);
        
                            // subtotal
                            const subTotal = document.createElement('h4');
                            const precioT = parseFloat(array[i].precio);
                            const suma = precioT * array[i].cantidad;
                            const textSub = document.createTextNode('$'+suma.toFixed(2).toString());
                            subTotal.appendChild(textSub);
                            subTotal.style.fontWeight = 'bold';
                            subTotal.style.textAlign = 'center';
                            subTotal.style.color = 'black';
                            subTotal.style.marginTop = '20px';
                            divCol3.appendChild(subTotal);
                            total = total + suma;
        
                            // agregar todo
                            tabla.appendChild(divRow);
        
                            // TOTAL
                            document.getElementById('precioCarro').innerHTML = '$'+(total +2 ).toFixed(2).toString();
                            window.localStorage.setItem('totalPagar', +(total +2 ).toFixed(2).toString())
                        }
                    }
                    this.setState({value: 0});
                };
                bot.onmouseout = (cambiar) =>{
                    document.getElementById(cambiar.currentTarget.id).innerHTML = "Añadir"
                }
                const botText = document.createTextNode('Añadir');
                bot.appendChild(botText);
                divPa.appendChild(bot);
            }
        }));
    }

    leche () {
        document.getElementById('lyh').style.animation = "carrusel2 0.3s";
        setTimeout(function() {document.getElementById('lyh').style.animation = "none";}, 300);

        const tabla = document.getElementById('dibujar');
        tabla.innerHTML = '';

        const spinner = document.createElement('div');
        spinner.className="spinner-border";
        spinner.setAttribute('role' ,"status");
        spinner.style.display = 'block';
        spinner.style.margin = '0 auto';
        spinner.style.marginTop = '40px';
        spinner.style.color = '#8adb72';
        const spiText = document.createElement('span');
        spiText.className = "sr-only";
        const textoSpi = document.createTextNode('Loading...');
        spiText.appendChild(textoSpi);
        spinner.appendChild(spiText);
        tabla.appendChild(spinner);

        request
        .get('https://prueba-next-u-react.firebaseio.com/productos/Lacteos.json')
        .set('Content-Type','aplication/json') 
        .then((res => {
            const fruta = res.body;
            const tabla = document.getElementById('dibujar');
            const n = fruta.length;
            tabla.innerHTML = '';
            for (let i = 0;  i < n; i++) {
                const colPa = document.createElement('col');
                colPa.className="col-6 col-lg-3 objeto";
                tabla.appendChild(colPa);

                const divPa = document.createElement('div');
                divPa.className="border";
                divPa.id= fruta[i].id;
                colPa.appendChild(divPa);
                
                const img = document.createElement('img');
                img.src = fruta[i].img;
                img.style.width='100%';
                img.className="frutaImg";
               // img.setAttribute("data-toggle", "modal");
               // img.setAttribute("data-target", "#exampleModalCenter");
                img.lang = fruta[i].id;
                img.style.maxHeight = '157px';
                img.style.minHeight = '157px';
                /*img.onclick = (event) => {
                    var target = event.currentTarget.lang;
                    var imgModal = document.getElementById('imgModal');
                    imgModal.innerHTML="";
                    var datosModal = document.getElementById('datosModal');

                    const spinner = document.createElement('div');
                    spinner.className="spinner-border";
                    spinner.setAttribute('role' ,"status");
                    spinner.style.display = 'block';
                    spinner.style.margin = '0 auto';
                    spinner.style.marginTop = '40px';
                    spinner.style.color = '#8adb72';
                    const spiText = document.createElement('span');
                    spiText.className = "sr-only";
                    const textoSpi = document.createTextNode('Loading...');
                    spiText.appendChild(textoSpi);
                    spinner.appendChild(spiText);
                    datosModal.appendChild(spinner);
                    request
                    .get('https://prueba-next-u-react.firebaseio.com/productos/Lacteos/'+target+".json")
                    .set('Content-Type','aplication/json') 
                    .then((res => {
                        var fruto= res.body;
                        document.getElementById("exampleModalCenterTitle").innerHTML=fruto.nombre.toUpperCase();
                        var img = document.createElement('img');
                        img.src=fruto.img;
                        img.style.width="100%";
                        imgModal.appendChild(img);
                        var nombre= document.createElement('h4');
                        nombre.innerHTML=fruto.nombre.toUpperCase();
                        datosModal.appendChild(nombre);
                        var precio= document.createElement('p');
                        var textPrice = document.createTextNode('Precio: $'+fruto.precio);
                        precio.appendChild(textPrice);
                        datosModal.appendChild(precio);
                        }));
                };*/
                divPa.appendChild(img);

                const br = document.createElement('br');
                divPa.appendChild(br);

                const p1 = document.createElement('p');
                p1.id="tituloFruta";
                const textP1 = document.createTextNode(fruta[i].nombre.charAt(0).toUpperCase()+fruta[i].nombre.slice(1).toLowerCase());
                p1.appendChild(textP1);
                divPa.appendChild(p1);

                const p2 = document.createElement('p');
                p2.id="precioFruta";
                const textP2 = document.createTextNode('$'+fruta[i].precio+' / '+fruta[i].Unidad);
                p2.appendChild(textP2);
                divPa.appendChild(p2);

                const div1 = document.createElement('div');
                div1.id="masMenos";
                divPa.appendChild(div1);

                const f2 = document.createElement('i');
                f2.className="fas fa-minus icono";
                f2.lang=fruta[i].nombre+fruta[i].id;
                f2.nonce=fruta[i].id;
                f2.onclick = (menos) =>{
                    menos.currentTarget;
                    const valor = document.getElementById(menos.currentTarget.lang).getAttribute('lang');
                    let cant = parseFloat(valor);
                    if (cant > 0) {
                        cant = cant - 1;
                        document.getElementById(menos.currentTarget.lang).setAttribute('value', cant.toString());
                        document.getElementById(menos.currentTarget.lang).setAttribute('lang', cant.toString());
                        this.setState({value: null});
                        this.setState({value: cant});
                        this.setState({id: null});
                        this.setState({id: menos.currentTarget.nonce});
                        this.setState({nombre: null});
                        this.setState({nombre: menos.currentTarget.lang});
                    }
                };
                div1.appendChild(f2);

                const input = document.createElement('input');
                input.type="number";
                input.className="inputValor1";
                input.lang="0";
                input.id= fruta[i].nombre+fruta[i].id;
                input.nonce= fruta[i].id;
                input.onchange = (input) =>{
                    console.log(input.currentTarget);
                };
                input.placeholder="0";
                div1.appendChild(input);

                const f1 = document.createElement('i');
                f1.className="fas fa-plus icono";
                f1.lang=fruta[i].nombre+fruta[i].id;
                f1.nonce=fruta[i].id;
                f1.onclick = (mas) =>{
                    const valor = parseFloat(document.getElementById(mas.currentTarget.lang).getAttribute('lang'));
                    let cant = valor;
                    cant = cant + 1;
                    document.getElementById(mas.currentTarget.lang).setAttribute('value', cant.toString());
                    document.getElementById(mas.currentTarget.lang).setAttribute('lang', cant.toString());
                    this.setState({value: null});
                    this.setState({value: cant});
                    this.setState({id: null});
                    this.setState({id: mas.currentTarget.nonce});
                    this.setState({nombre: null});
                    this.setState({nombre: mas.currentTarget.lang});
                };
                div1.appendChild(f1);

                const bot = document.createElement('button');
                bot.className="add";
                bot.name = fruta[i].precio;
                bot.id = fruta[i].img+fruta[i].id;
                bot.onclick = (add) =>{
                    if (this.state.value > 0) {

                        document.getElementById(add.currentTarget.id).style.animation = "miAnimacion2 3s";
                        document.getElementById(add.currentTarget.id).innerHTML = "Listo";
        
                        const objectAux = {
                            img: '',
                            nombre: '',
                            precio: '', 
                            cantidad: '',
                            id: ''
                        }
        
                        objectAux.img = add.currentTarget.id.slice(0, -fruta[i].id.length);
                        objectAux.nombre = this.state.nombre;
                        objectAux.precio = add.currentTarget.name;
                        objectAux.cantidad = this.state.value;
                        objectAux.id = this.state.id;
        
                        this.state.pagar.push(objectAux);
        
                        window.sessionStorage.setItem('array', JSON.stringify(this.state.pagar));
        
                        console.log(JSON.parse(window.sessionStorage.getItem('array')));
        
                        // Agregar a carrito
                        console.log('entra');
                        const tabla = document.getElementById('carritoBody');
                        tabla.innerHTML = '';
                        const array = JSON.parse(window.sessionStorage.getItem('array'));
                        console.log(array);
                        const n = array.length;
                        let total = 0;
                        for (let i=0; i < n; i++) {
                            // Crear los div layout
                            const divRow = document.createElement('div');
                            divRow.className = 'row';
                            divRow.style.width = '100%';
                            divRow.style.margin = '0 auto';
                            divRow.style.overflowY = 'auto';
                            const divCol1 = document.createElement('div');
                            divCol1.className = 'col-4';
                            divCol1.style.padding = '5px';
                            const divCol2 = document.createElement('div');
                            divCol2.className = 'col-4';
                            divCol2.style.padding = '5px';
                            const divCol3 = document.createElement('div');
                            divCol3.className = 'col-4';
                            divCol3.style.padding = '5px';
                            divRow.appendChild(divCol1);
                            divRow.appendChild(divCol2);
                            divRow.appendChild(divCol3);
        
                            // img 
                            const img = document.createElement('img');
                            img.style.width = '80%';
                            img.style.display = 'block';
                            img.style.margin = '0 auto';
                            img.src = array[i].img;
                            divCol1.appendChild(img);
        
                            // nombre, precio y cantidad
                            const nombre = document.createElement('p');
                            const text = array[i].nombre.charAt(0).toUpperCase()+array[i].nombre.slice(1).toLowerCase();
                            const textNombre = document.createTextNode(text.toString());
                            nombre.appendChild(textNombre);
                            nombre.style.textAlign = 'left';
                            nombre.style.marginBottom = '5px';  
                            nombre.style.fontSize = '13px';
                            nombre.style.fontWeight = 'bold';
                            divCol2.appendChild(nombre);          
        
                            const precio = document.createElement('p');
                            const textPrecio = document.createTextNode('Precio: $'+array[i].precio.toString());
                            precio.appendChild(textPrecio);
                            precio.style.textAlign = 'left';
                            precio.style.marginBottom = '5px';
                            precio.style.fontSize = '13px';
                            divCol2.appendChild(precio);
        
                            const cantidad = document.createElement('p');
                            const textCantidad = document.createTextNode('Unidades: '+array[i].cantidad.toString());
                            cantidad.appendChild(textCantidad);
                            cantidad.style.textAlign = 'left';
                            cantidad.style.fontSize = '13px';
                            divCol2.appendChild(cantidad);
        
                            // subtotal
                            const subTotal = document.createElement('h4');
                            const precioT = parseFloat(array[i].precio);
                            const suma = precioT * array[i].cantidad;
                            const textSub = document.createTextNode('$'+suma.toFixed(2).toString());
                            subTotal.appendChild(textSub);
                            subTotal.style.fontWeight = 'bold';
                            subTotal.style.textAlign = 'center';
                            subTotal.style.color = 'black';
                            subTotal.style.marginTop = '20px';
                            divCol3.appendChild(subTotal);
                            total = total + suma;
        
                            // agregar todo
                            tabla.appendChild(divRow);
        
                            // TOTAL
                            document.getElementById('precioCarro').innerHTML = '$'+(total +2 ).toFixed(2).toString();
                            window.localStorage.setItem('totalPagar', +(total +2 ).toFixed(2).toString())
                        }
                    }
                    this.setState({value: 0});
                };
                bot.onmouseout = (cambiar) =>{
                    document.getElementById(cambiar.currentTarget.id).innerHTML = "Añadir"
                }
                const botText = document.createTextNode('Añadir');
                bot.appendChild(botText);
                divPa.appendChild(bot);
            }
        }));
    }

    medicina () {
        document.getElementById('medicina').style.animation = "carrusel2 0.3s";
        setTimeout(function() {document.getElementById('medicina').style.animation = "none";}, 300);

        const tabla = document.getElementById('dibujar');
        tabla.innerHTML = '';

        const spinner = document.createElement('div');
        spinner.className="spinner-border";
        spinner.setAttribute('role' ,"status");
        spinner.style.display = 'block';
        spinner.style.margin = '0 auto';
        spinner.style.marginTop = '40px';
        spinner.style.color = '#8adb72';
        const spiText = document.createElement('span');
        spiText.className = "sr-only";
        const textoSpi = document.createTextNode('Loading...');
        spiText.appendChild(textoSpi);
        spinner.appendChild(spiText);
        tabla.appendChild(spinner);

        request
        .get('https://prueba-next-u-react.firebaseio.com/productos/Medicina.json')
        .set('Content-Type','aplication/json') 
        .then((res => {
            const fruta = res.body;
            const tabla = document.getElementById('dibujar');
            const n = fruta.length;
            tabla.innerHTML = '';
            for (let i = 0;  i < n; i++) {
                const colPa = document.createElement('col');
                colPa.className="col-6 col-lg-3 objeto";
                tabla.appendChild(colPa);

                const divPa = document.createElement('div');
                divPa.className="border";
                divPa.id= fruta[i].id;
                colPa.appendChild(divPa);
                
                const img = document.createElement('img');
                img.src = fruta[i].img;
                img.style.width='100%';
                img.className="frutaImg";
                //img.setAttribute("data-toggle", "modal");
                //img.setAttribute("data-target", "#exampleModalCenter");
                img.lang = fruta[i].id;
                img.style.maxHeight = '157px';
                img.style.minHeight = '157px';
                /*img.onclick = (event) => {
                    var target = event.currentTarget.lang;
                    var imgModal = document.getElementById('imgModal');
                    imgModal.innerHTML="";
                    var datosModal = document.getElementById('datosModal');

                    const spinner = document.createElement('div');
                    spinner.className="spinner-border";
                    spinner.setAttribute('role' ,"status");
                    spinner.style.display = 'block';
                    spinner.style.margin = '0 auto';
                    spinner.style.marginTop = '40px';
                    spinner.style.color = '#8adb72';
                    const spiText = document.createElement('span');
                    spiText.className = "sr-only";
                    const textoSpi = document.createTextNode('Loading...');
                    spiText.appendChild(textoSpi);
                    spinner.appendChild(spiText);
                    datosModal.appendChild(spinner);
                    request
                    .get('https://prueba-next-u-react.firebaseio.com/productos/Medicina/'+target+".json")
                    .set('Content-Type','aplication/json') 
                    .then((res => {
                        var fruto= res.body;
                        document.getElementById("exampleModalCenterTitle").innerHTML=fruto.nombre.toUpperCase();
                        var img = document.createElement('img');
                        img.src=fruto.img;
                        img.style.width="100%";
                        imgModal.appendChild(img);
                        var nombre= document.createElement('h4');
                        nombre.innerHTML=fruto.nombre.toUpperCase();
                        datosModal.appendChild(nombre);
                        var precio= document.createElement('p');
                        var textPrice = document.createTextNode('Precio: $'+fruto.precio);
                        precio.appendChild(textPrice);
                        datosModal.appendChild(precio);
                        }));
                };*/
                divPa.appendChild(img);

                const br = document.createElement('br');
                divPa.appendChild(br);

                const p1 = document.createElement('p');
                p1.id="tituloFruta";
                const textP1 = document.createTextNode(fruta[i].nombre.charAt(0).toUpperCase()+fruta[i].nombre.slice(1).toLowerCase());
                p1.appendChild(textP1);
                divPa.appendChild(p1);

                const p2 = document.createElement('p');
                p2.id="precioFruta";
                const textP2 = document.createTextNode('$'+fruta[i].precio+' / '+fruta[i].Unidad);
                p2.appendChild(textP2);
                divPa.appendChild(p2);

                const div1 = document.createElement('div');
                div1.id="masMenos";
                divPa.appendChild(div1);

                const f2 = document.createElement('i');
                f2.className="fas fa-minus icono";
                f2.lang=fruta[i].nombre+fruta[i].id;
                f2.nonce=fruta[i].id;
                f2.onclick = (menos) =>{
                    menos.currentTarget;
                    const valor = document.getElementById(menos.currentTarget.lang).getAttribute('lang');
                    let cant = parseFloat(valor);
                    if (cant > 0) {
                        cant = cant - 1;
                        document.getElementById(menos.currentTarget.lang).setAttribute('value', cant.toString());
                        document.getElementById(menos.currentTarget.lang).setAttribute('lang', cant.toString());
                        this.setState({value: null});
                        this.setState({value: cant});
                        this.setState({id: null});
                        this.setState({id: menos.currentTarget.nonce});
                        this.setState({nombre: null});
                        this.setState({nombre: menos.currentTarget.lang});
                    }
                };
                div1.appendChild(f2);

                const input = document.createElement('input');
                input.type="number";
                input.className="inputValor1";
                input.lang="0";
                input.id= fruta[i].nombre+fruta[i].id;
                input.nonce= fruta[i].id;
                input.onchange = (input) =>{
                    console.log(input.currentTarget);
                };
                input.placeholder="0";
                div1.appendChild(input);

                const f1 = document.createElement('i');
                f1.className="fas fa-plus icono";
                f1.lang=fruta[i].nombre+fruta[i].id;
                f1.nonce=fruta[i].id;
                f1.onclick = (mas) =>{
                    const valor = parseFloat(document.getElementById(mas.currentTarget.lang).getAttribute('lang'));
                    let cant = valor;
                    cant = cant + 1;
                    document.getElementById(mas.currentTarget.lang).setAttribute('value', cant.toString());
                    document.getElementById(mas.currentTarget.lang).setAttribute('lang', cant.toString());
                    this.setState({value: null});
                    this.setState({value: cant});
                    this.setState({id: null});
                    this.setState({id: mas.currentTarget.nonce});
                    this.setState({nombre: null});
                    this.setState({nombre: mas.currentTarget.lang});
                };
                div1.appendChild(f1);

                const bot = document.createElement('button');
                bot.className="add";
                bot.name = fruta[i].precio;
                bot.id = fruta[i].img+fruta[i].id;
                bot.onclick = (add) =>{
                    if (this.state.value > 0) {

                        document.getElementById(add.currentTarget.id).style.animation = "miAnimacion2 3s";
                        document.getElementById(add.currentTarget.id).innerHTML = "Listo";
        
                        const objectAux = {
                            img: '',
                            nombre: '',
                            precio: '', 
                            cantidad: '',
                            id: ''
                        }
        
                        objectAux.img = add.currentTarget.id.slice(0, -fruta[i].id.length);
                        objectAux.nombre = this.state.nombre;
                        objectAux.precio = add.currentTarget.name;
                        objectAux.cantidad = this.state.value;
                        objectAux.id = this.state.id;
        
                        this.state.pagar.push(objectAux);
        
                        window.sessionStorage.setItem('array', JSON.stringify(this.state.pagar));
        
                        console.log(JSON.parse(window.sessionStorage.getItem('array')));
        
                        // Agregar a carrito
                        console.log('entra');
                        const tabla = document.getElementById('carritoBody');
                        tabla.innerHTML = '';
                        const array = JSON.parse(window.sessionStorage.getItem('array'));
                        console.log(array);
                        const n = array.length;
                        let total = 0;
                        for (let i=0; i < n; i++) {
                            // Crear los div layout
                            const divRow = document.createElement('div');
                            divRow.className = 'row';
                            divRow.style.width = '100%';
                            divRow.style.margin = '0 auto';
                            divRow.style.overflowY = 'auto';
                            const divCol1 = document.createElement('div');
                            divCol1.className = 'col-4';
                            divCol1.style.padding = '5px';
                            const divCol2 = document.createElement('div');
                            divCol2.className = 'col-4';
                            divCol2.style.padding = '5px';
                            const divCol3 = document.createElement('div');
                            divCol3.className = 'col-4';
                            divCol3.style.padding = '5px';
                            divRow.appendChild(divCol1);
                            divRow.appendChild(divCol2);
                            divRow.appendChild(divCol3);
        
                            // img 
                            const img = document.createElement('img');
                            img.style.width = '80%';
                            img.style.display = 'block';
                            img.style.margin = '0 auto';
                            img.src = array[i].img;
                            divCol1.appendChild(img);
        
                            // nombre, precio y cantidad
                            const nombre = document.createElement('p');
                            const text = array[i].nombre.charAt(0).toUpperCase()+array[i].nombre.slice(1).toLowerCase();
                            const textNombre = document.createTextNode(text.toString());
                            nombre.appendChild(textNombre);
                            nombre.style.textAlign = 'left';
                            nombre.style.marginBottom = '5px';  
                            nombre.style.fontSize = '13px';
                            nombre.style.fontWeight = 'bold';
                            divCol2.appendChild(nombre);          
        
                            const precio = document.createElement('p');
                            const textPrecio = document.createTextNode('Precio: $'+array[i].precio.toString());
                            precio.appendChild(textPrecio);
                            precio.style.textAlign = 'left';
                            precio.style.marginBottom = '5px';
                            precio.style.fontSize = '13px';
                            divCol2.appendChild(precio);
        
                            const cantidad = document.createElement('p');
                            const textCantidad = document.createTextNode('Unidades: '+array[i].cantidad.toString());
                            cantidad.appendChild(textCantidad);
                            cantidad.style.textAlign = 'left';
                            cantidad.style.fontSize = '13px';
                            divCol2.appendChild(cantidad);
        
                            // subtotal
                            const subTotal = document.createElement('h4');
                            const precioT = parseFloat(array[i].precio);
                            const suma = precioT * array[i].cantidad;
                            const textSub = document.createTextNode('$'+suma.toFixed(2).toString());
                            subTotal.appendChild(textSub);
                            subTotal.style.fontWeight = 'bold';
                            subTotal.style.textAlign = 'center';
                            subTotal.style.color = 'black';
                            subTotal.style.marginTop = '20px';
                            divCol3.appendChild(subTotal);
                            total = total + suma;
        
                            // agregar todo
                            tabla.appendChild(divRow);
        
                            // TOTAL
                            document.getElementById('precioCarro').innerHTML = '$'+(total +2 ).toFixed(2).toString();
                            window.localStorage.setItem('totalPagar', +(total +2 ).toFixed(2).toString())
                        }
                    }
                    this.setState({value: 0});
                };
                bot.onmouseout = (cambiar) =>{
                    document.getElementById(cambiar.currentTarget.id).innerHTML = "Añadir"
                }
                const botText = document.createTextNode('Añadir');
                bot.appendChild(botText);
                divPa.appendChild(bot);
            }
        }));
    }

    vegetales () {
        document.getElementById('vegetales').style.animation = "carrusel2 0.3s";
        setTimeout(function() {document.getElementById('vegetales').style.animation = "none";}, 300);

        const tabla = document.getElementById('dibujar');
        tabla.innerHTML = '';

        const spinner = document.createElement('div');
        spinner.className="spinner-border";
        spinner.setAttribute('role' ,"status");
        spinner.style.display = 'block';
        spinner.style.margin = '0 auto';
        spinner.style.marginTop = '40px';
        spinner.style.color = '#8adb72';
        const spiText = document.createElement('span');
        spiText.className = "sr-only";
        const textoSpi = document.createTextNode('Loading...');
        spiText.appendChild(textoSpi);
        spinner.appendChild(spiText);
        tabla.appendChild(spinner);
        
        request
        .get('https://prueba-next-u-react.firebaseio.com/productos/Vegetales.json')
        .set('Content-Type','aplication/json') 
        .then((res => {
            const fruta = res.body;
            const tabla = document.getElementById('dibujar');
            const n = fruta.length;
            tabla.innerHTML = '';
            for (let i = 0;  i < n; i++) {
                const colPa = document.createElement('col');
                colPa.className="col-6 col-lg-3 objeto";
                tabla.appendChild(colPa);

                const divPa = document.createElement('div');
                divPa.className="border";
                divPa.id= fruta[i].id;
                colPa.appendChild(divPa);
                
                const img = document.createElement('img');
                img.src = fruta[i].img;
                img.style.width='100%';
                img.className="frutaImg";
                //img.setAttribute("data-toggle", "modal");
                //img.setAttribute("data-target", "#exampleModalCenter");
                img.lang = fruta[i].id;
                img.style.maxHeight = '157px';
                img.style.minHeight = '157px';
                /*img.onclick = (event) => {
                    var target = event.currentTarget.lang;
                    var imgModal = document.getElementById('imgModal');
                    imgModal.innerHTML="";
                    var datosModal = document.getElementById('datosModal');

                    const spinner = document.createElement('div');
                    spinner.className="spinner-border";
                    spinner.setAttribute('role' ,"status");
                    spinner.style.display = 'block';
                    spinner.style.margin = '0 auto';
                    spinner.style.marginTop = '40px';
                    spinner.style.color = '#8adb72';
                    const spiText = document.createElement('span');
                    spiText.className = "sr-only";
                    const textoSpi = document.createTextNode('Loading...');
                    spiText.appendChild(textoSpi);
                    spinner.appendChild(spiText);
                    datosModal.appendChild(spinner);
                    request
                    .get('https://prueba-next-u-react.firebaseio.com/productos/Vegetales/'+target+".json")
                    .set('Content-Type','aplication/json') 
                    .then((res => {
                        var fruto= res.body;
                        document.getElementById("exampleModalCenterTitle").innerHTML=fruto.nombre.toUpperCase();
                        var img = document.createElement('img');
                        img.src=fruto.img;
                        img.style.width="100%";
                        imgModal.appendChild(img);
                        var nombre= document.createElement('h4');
                        nombre.innerHTML=fruto.nombre.toUpperCase();
                        datosModal.appendChild(nombre);
                        var precio= document.createElement('p');
                        var textPrice = document.createTextNode('Precio: $'+fruto.precio);
                        precio.appendChild(textPrice);
                        datosModal.appendChild(precio);
                        }));
                };*/
                divPa.appendChild(img);

                const br = document.createElement('br');
                divPa.appendChild(br);

                const p1 = document.createElement('p');
                p1.id="tituloFruta";
                const textP1 = document.createTextNode(fruta[i].nombre.charAt(0).toUpperCase()+fruta[i].nombre.slice(1).toLowerCase());
                p1.appendChild(textP1);
                divPa.appendChild(p1);

                const p2 = document.createElement('p');
                p2.id="precioFruta";
                const textP2 = document.createTextNode('$'+fruta[i].precio+' / '+fruta[i].unidad);
                p2.appendChild(textP2);
                divPa.appendChild(p2);

                const div1 = document.createElement('div');
                div1.id="masMenos";
                divPa.appendChild(div1);

                const f2 = document.createElement('i');
                f2.className="fas fa-minus icono";
                f2.lang=fruta[i].nombre+fruta[i].id;
                f2.nonce=fruta[i].id;
                f2.onclick = (menos) =>{
                    menos.currentTarget;
                    const valor = document.getElementById(menos.currentTarget.lang).getAttribute('lang');
                    let cant = parseFloat(valor);
                    if (cant > 0) {
                        cant = cant - 1;
                        document.getElementById(menos.currentTarget.lang).setAttribute('value', cant.toString());
                        document.getElementById(menos.currentTarget.lang).setAttribute('lang', cant.toString());
                        this.setState({value: null});
                        this.setState({value: cant});
                        this.setState({id: null});
                        this.setState({id: menos.currentTarget.nonce});
                        this.setState({nombre: null});
                        this.setState({nombre: menos.currentTarget.lang});
                    }
                };
                div1.appendChild(f2);

                const input = document.createElement('input');
                input.type="number";
                input.className="inputValor1";
                input.lang="0";
                input.id= fruta[i].nombre+fruta[i].id;
                input.nonce= fruta[i].id;
                input.onchange = (input) =>{
                    console.log(input.currentTarget);
                };
                input.placeholder="0";
                div1.appendChild(input);

                const f1 = document.createElement('i');
                f1.className="fas fa-plus icono";
                f1.lang=fruta[i].nombre+fruta[i].id;
                f1.nonce=fruta[i].id;
                f1.onclick = (mas) =>{
                    const valor = parseFloat(document.getElementById(mas.currentTarget.lang).getAttribute('lang'));
                    let cant = valor;
                    cant = cant + 1;
                    document.getElementById(mas.currentTarget.lang).setAttribute('value', cant.toString());
                    document.getElementById(mas.currentTarget.lang).setAttribute('lang', cant.toString());
                    this.setState({value: null});
                    this.setState({value: cant});
                    this.setState({id: null});
                    this.setState({id: mas.currentTarget.nonce});
                    this.setState({nombre: null});
                    this.setState({nombre: mas.currentTarget.lang});
                };
                div1.appendChild(f1);

                const bot = document.createElement('button');
                bot.className="add";
                bot.name = fruta[i].precio;
                bot.id = fruta[i].img+fruta[i].id;
                bot.onclick = (add) =>{
                    if (this.state.value > 0) {

                        document.getElementById(add.currentTarget.id).style.animation = "miAnimacion2 3s";
                        document.getElementById(add.currentTarget.id).innerHTML = "Listo";
        
                        const objectAux = {
                            img: '',
                            nombre: '',
                            precio: '', 
                            cantidad: '',
                            id: ''
                        }
        
                        objectAux.img = add.currentTarget.id.slice(0, -fruta[i].id.length);
                        objectAux.nombre = this.state.nombre;
                        objectAux.precio = add.currentTarget.name;
                        objectAux.cantidad = this.state.value;
                        objectAux.id = this.state.id;
        
                        this.state.pagar.push(objectAux);
        
                        window.sessionStorage.setItem('array', JSON.stringify(this.state.pagar));
        
                        console.log(JSON.parse(window.sessionStorage.getItem('array')));
        
                        // Agregar a carrito
                        console.log('entra');
                        const tabla = document.getElementById('carritoBody');
                        tabla.innerHTML = '';
                        const array = JSON.parse(window.sessionStorage.getItem('array'));
                        console.log(array);
                        const n = array.length;
                        let total = 0;
                        for (let i=0; i < n; i++) {
                            // Crear los div layout
                            const divRow = document.createElement('div');
                            divRow.className = 'row';
                            divRow.style.width = '100%';
                            divRow.style.margin = '0 auto';
                            divRow.style.overflowY = 'auto';
                            const divCol1 = document.createElement('div');
                            divCol1.className = 'col-4';
                            divCol1.style.padding = '5px';
                            const divCol2 = document.createElement('div');
                            divCol2.className = 'col-4';
                            divCol2.style.padding = '5px';
                            const divCol3 = document.createElement('div');
                            divCol3.className = 'col-4';
                            divCol3.style.padding = '5px';
                            divRow.appendChild(divCol1);
                            divRow.appendChild(divCol2);
                            divRow.appendChild(divCol3);
        
                            // img 
                            const img = document.createElement('img');
                            img.style.width = '80%';
                            img.style.display = 'block';
                            img.style.margin = '0 auto';
                            img.src = array[i].img;
                            divCol1.appendChild(img);
        
                            // nombre, precio y cantidad
                            const nombre = document.createElement('p');
                            const text = array[i].nombre.charAt(0).toUpperCase()+array[i].nombre.slice(1).toLowerCase();
                            const textNombre = document.createTextNode(text.toString());
                            nombre.appendChild(textNombre);
                            nombre.style.textAlign = 'left';
                            nombre.style.marginBottom = '5px';  
                            nombre.style.fontSize = '13px';
                            nombre.style.fontWeight = 'bold';
                            divCol2.appendChild(nombre);          
        
                            const precio = document.createElement('p');
                            const textPrecio = document.createTextNode('Precio: $'+array[i].precio.toString());
                            precio.appendChild(textPrecio);
                            precio.style.textAlign = 'left';
                            precio.style.marginBottom = '5px';
                            precio.style.fontSize = '13px';
                            divCol2.appendChild(precio);
        
                            const cantidad = document.createElement('p');
                            const textCantidad = document.createTextNode('Unidades: '+array[i].cantidad.toString());
                            cantidad.appendChild(textCantidad);
                            cantidad.style.textAlign = 'left';
                            cantidad.style.fontSize = '13px';
                            divCol2.appendChild(cantidad);
        
                            // subtotal
                            const subTotal = document.createElement('h4');
                            const precioT = parseFloat(array[i].precio);
                            const suma = precioT * array[i].cantidad;
                            const textSub = document.createTextNode('$'+suma.toFixed(2).toString());
                            subTotal.appendChild(textSub);
                            subTotal.style.fontWeight = 'bold';
                            subTotal.style.textAlign = 'center';
                            subTotal.style.color = 'black';
                            subTotal.style.marginTop = '20px';
                            divCol3.appendChild(subTotal);
                            total = total + suma;
        
                            // agregar todo
                            tabla.appendChild(divRow);
        
                            // TOTAL
                            document.getElementById('precioCarro').innerHTML = '$'+(total +2 ).toFixed(2).toString();
                            window.localStorage.setItem('totalPagar', +(total +2 ).toFixed(2).toString())
                        }
                    }
                    this.setState({value: 0});
                };
                bot.onmouseout = (cambiar) =>{
                    document.getElementById(cambiar.currentTarget.id).innerHTML = "Añadir"
                }
                const botText = document.createTextNode('Añadir');
                bot.appendChild(botText);
                divPa.appendChild(bot);
            }
        }));
    }

    pan () {
        document.getElementById('pan').style.animation = "carrusel2 0.3s";
        setTimeout(function() {document.getElementById('pan').style.animation = "none";}, 300);

        const tabla = document.getElementById('dibujar');
        tabla.innerHTML = '';

        const spinner = document.createElement('div');
        spinner.className="spinner-border";
        spinner.setAttribute('role' ,"status");
        spinner.style.display = 'block';
        spinner.style.margin = '0 auto';
        spinner.style.marginTop = '40px';
        spinner.style.color = '#8adb72';
        const spiText = document.createElement('span');
        spiText.className = "sr-only";
        const textoSpi = document.createTextNode('Loading...');
        spiText.appendChild(textoSpi);
        spinner.appendChild(spiText);
        tabla.appendChild(spinner);

        request
        .get('https://prueba-next-u-react.firebaseio.com/productos/Panaderia.json')
        .set('Content-Type','aplication/json') 
        .then((res => {
            const fruta = res.body;
            const tabla = document.getElementById('dibujar');
            const n = fruta.length;
            tabla.innerHTML = '';
            for (let i = 0;  i < n; i++) {
                const colPa = document.createElement('col');
                colPa.className="col-6 col-lg-3 objeto";
                tabla.appendChild(colPa);

                const divPa = document.createElement('div');
                divPa.className="border";
                divPa.id= fruta[i].id;
                colPa.appendChild(divPa);
                
                const img = document.createElement('img');
                img.src = fruta[i].img;
                img.style.width='100%';
                img.className="frutaImg";
                //img.setAttribute("data-toggle", "modal");
                //img.setAttribute("data-target", "#exampleModalCenter");
                img.lang = fruta[i].id;
                img.style.maxHeight = '157px';
                img.style.minHeight = '157px';
                /*img.onclick = (event) => {
                    var target = event.currentTarget.lang;
                    var imgModal = document.getElementById('imgModal');
                    imgModal.innerHTML="";
                    var datosModal = document.getElementById('datosModal');

                    const spinner = document.createElement('div');
                    spinner.className="spinner-border";
                    spinner.setAttribute('role' ,"status");
                    spinner.style.display = 'block';
                    spinner.style.margin = '0 auto';
                    spinner.style.marginTop = '40px';
                    spinner.style.color = '#8adb72';
                    const spiText = document.createElement('span');
                    spiText.className = "sr-only";
                    const textoSpi = document.createTextNode('Loading...');
                    spiText.appendChild(textoSpi);
                    spinner.appendChild(spiText);
                    datosModal.appendChild(spinner);
                    request
                    .get('https://prueba-next-u-react.firebaseio.com/productos/Panaderia/'+target+".json")
                    .set('Content-Type','aplication/json') 
                    .then((res => {
                        var fruto= res.body;
                        document.getElementById("exampleModalCenterTitle").innerHTML=fruto.nombre.toUpperCase();
                        var img = document.createElement('img');
                        img.src=fruto.img;
                        img.style.width="100%";
                        imgModal.appendChild(img);
                        var nombre= document.createElement('h4');
                        nombre.innerHTML=fruto.nombre.toUpperCase();
                        datosModal.appendChild(nombre);
                        var precio= document.createElement('p');
                        var textPrice = document.createTextNode('Precio: $'+fruto.precio);
                        precio.appendChild(textPrice);
                        datosModal.appendChild(precio);
                        }));
                };*/
                divPa.appendChild(img);

                const br = document.createElement('br');
                divPa.appendChild(br);

                const p1 = document.createElement('p');
                p1.id="tituloFruta";
                const textP1 = document.createTextNode(fruta[i].nombre.charAt(0).toUpperCase()+fruta[i].nombre.slice(1).toLowerCase());
                p1.appendChild(textP1);
                divPa.appendChild(p1);

                const p2 = document.createElement('p');
                p2.id="precioFruta";
                const textP2 = document.createTextNode('$'+fruta[i].precio+' / '+fruta[i].Unidad);
                p2.appendChild(textP2);
                divPa.appendChild(p2);

                const div1 = document.createElement('div');
                div1.id="masMenos";
                divPa.appendChild(div1);

                const f2 = document.createElement('i');
                f2.className="fas fa-minus icono";
                f2.lang=fruta[i].nombre+fruta[i].id;
                f2.nonce=fruta[i].id;
                f2.onclick = (menos) =>{
                    menos.currentTarget;
                    const valor = document.getElementById(menos.currentTarget.lang).getAttribute('lang');
                    let cant = parseFloat(valor);
                    if (cant > 0) {
                        cant = cant - 1;
                        document.getElementById(menos.currentTarget.lang).setAttribute('value', cant.toString());
                        document.getElementById(menos.currentTarget.lang).setAttribute('lang', cant.toString());
                        this.setState({value: null});
                        this.setState({value: cant});
                        this.setState({id: null});
                        this.setState({id: menos.currentTarget.nonce});
                        this.setState({nombre: null});
                        this.setState({nombre: menos.currentTarget.lang});
                    }
                };
                div1.appendChild(f2);

                const input = document.createElement('input');
                input.type="number";
                input.className="inputValor1";
                input.lang="0";
                input.id= fruta[i].nombre+fruta[i].id;
                input.nonce= fruta[i].id;
                input.onchange = (input) =>{
                    console.log(input.currentTarget);
                };
                input.placeholder="0";
                div1.appendChild(input);

                const f1 = document.createElement('i');
                f1.className="fas fa-plus icono";
                f1.lang=fruta[i].nombre+fruta[i].id;
                f1.nonce=fruta[i].id;
                f1.onclick = (mas) =>{
                    const valor = parseFloat(document.getElementById(mas.currentTarget.lang).getAttribute('lang'));
                    let cant = valor;
                    cant = cant + 1;
                    document.getElementById(mas.currentTarget.lang).setAttribute('value', cant.toString());
                    document.getElementById(mas.currentTarget.lang).setAttribute('lang', cant.toString());
                    this.setState({value: null});
                    this.setState({value: cant});
                    this.setState({id: null});
                    this.setState({id: mas.currentTarget.nonce});
                    this.setState({nombre: null});
                    this.setState({nombre: mas.currentTarget.lang});
                };
                div1.appendChild(f1);

                const bot = document.createElement('button');
                bot.className="add";
                bot.name = fruta[i].precio;
                bot.id = fruta[i].img+fruta[i].id;
                bot.onclick = (add) =>{
                    if (this.state.value > 0) {

                        document.getElementById(add.currentTarget.id).style.animation = "miAnimacion2 3s";
                        document.getElementById(add.currentTarget.id).innerHTML = "Listo";
        
                        const objectAux = {
                            img: '',
                            nombre: '',
                            precio: '', 
                            cantidad: '',
                            id: ''
                        }
        
                        objectAux.img = add.currentTarget.id.slice(0, -fruta[i].id.length);
                        objectAux.nombre = this.state.nombre;
                        objectAux.precio = add.currentTarget.name;
                        objectAux.cantidad = this.state.value;
                        objectAux.id = this.state.id;
        
                        this.state.pagar.push(objectAux);
        
                        window.sessionStorage.setItem('array', JSON.stringify(this.state.pagar));
        
                        console.log(JSON.parse(window.sessionStorage.getItem('array')));
        
                        // Agregar a carrito
                        console.log('entra');
                        const tabla = document.getElementById('carritoBody');
                        tabla.innerHTML = '';
                        const array = JSON.parse(window.sessionStorage.getItem('array'));
                        console.log(array);
                        const n = array.length;
                        let total = 0;
                        for (let i=0; i < n; i++) {
                            // Crear los div layout
                            const divRow = document.createElement('div');
                            divRow.className = 'row';
                            divRow.style.width = '100%';
                            divRow.style.margin = '0 auto';
                            divRow.style.overflowY = 'auto';
                            const divCol1 = document.createElement('div');
                            divCol1.className = 'col-4';
                            divCol1.style.padding = '5px';
                            const divCol2 = document.createElement('div');
                            divCol2.className = 'col-4';
                            divCol2.style.padding = '5px';
                            const divCol3 = document.createElement('div');
                            divCol3.className = 'col-4';
                            divCol3.style.padding = '5px';
                            divRow.appendChild(divCol1);
                            divRow.appendChild(divCol2);
                            divRow.appendChild(divCol3);
        
                            // img 
                            const img = document.createElement('img');
                            img.style.width = '80%';
                            img.style.display = 'block';
                            img.style.margin = '0 auto';
                            img.src = array[i].img;
                            divCol1.appendChild(img);
        
                            // nombre, precio y cantidad
                            const nombre = document.createElement('p');
                            const text = array[i].nombre.charAt(0).toUpperCase()+array[i].nombre.slice(1).toLowerCase();
                            const textNombre = document.createTextNode(text.toString());
                            nombre.appendChild(textNombre);
                            nombre.style.textAlign = 'left';
                            nombre.style.marginBottom = '5px';  
                            nombre.style.fontSize = '13px';
                            nombre.style.fontWeight = 'bold';
                            divCol2.appendChild(nombre);          
        
                            const precio = document.createElement('p');
                            const textPrecio = document.createTextNode('Precio: $'+array[i].precio.toString());
                            precio.appendChild(textPrecio);
                            precio.style.textAlign = 'left';
                            precio.style.marginBottom = '5px';
                            precio.style.fontSize = '13px';
                            divCol2.appendChild(precio);
        
                            const cantidad = document.createElement('p');
                            const textCantidad = document.createTextNode('Unidades: '+array[i].cantidad.toString());
                            cantidad.appendChild(textCantidad);
                            cantidad.style.textAlign = 'left';
                            cantidad.style.fontSize = '13px';
                            divCol2.appendChild(cantidad);
        
                            // subtotal
                            const subTotal = document.createElement('h4');
                            const precioT = parseFloat(array[i].precio);
                            const suma = precioT * array[i].cantidad;
                            const textSub = document.createTextNode('$'+suma.toFixed(2).toString());
                            subTotal.appendChild(textSub);
                            subTotal.style.fontWeight = 'bold';
                            subTotal.style.textAlign = 'center';
                            subTotal.style.color = 'black';
                            subTotal.style.marginTop = '20px';
                            divCol3.appendChild(subTotal);
                            total = total + suma;
        
                            // agregar todo
                            tabla.appendChild(divRow);
        
                            // TOTAL
                            document.getElementById('precioCarro').innerHTML = '$'+(total +2 ).toFixed(2).toString();
                            window.localStorage.setItem('totalPagar', +(total +2 ).toFixed(2).toString())
                        }
                    }
                    this.setState({value: 0});
                };
                bot.onmouseout = (cambiar) =>{
                    document.getElementById(cambiar.currentTarget.id).innerHTML = "Añadir"
                }
                const botText = document.createTextNode('Añadir');
                bot.appendChild(botText);
                divPa.appendChild(bot);
            }
        }));
    }

    donaciones () {
        document.getElementById('donaciones').style.animation = "carrusel2 0.3s";
        setTimeout(function() {document.getElementById('donaciones').style.animation = "none";}, 300);

        const tabla = document.getElementById('dibujar');
        tabla.innerHTML = '';

        const spinner = document.createElement('div');
        spinner.className="spinner-border";
        spinner.setAttribute('role' ,"status");
        spinner.style.display = 'block';
        spinner.style.margin = '0 auto';
        spinner.style.marginTop = '40px';
        spinner.style.color = '#8adb72';
        const spiText = document.createElement('span');
        spiText.className = "sr-only";
        const textoSpi = document.createTextNode('Loading...');
        spiText.appendChild(textoSpi);
        spinner.appendChild(spiText);
        tabla.appendChild(spinner);

        request
        .get('https://prueba-next-u-react.firebaseio.com/productos/Donaciones.json')
        .set('Content-Type','aplication/json') 
        .then((res => {
            const fruta = res.body;
            const n = fruta.length;
            tabla.innerHTML = '';
            for (let i = 0;  i < n; i++) {
                const colPa = document.createElement('col');
                colPa.className="col-6 col-lg-3 objeto";
                tabla.appendChild(colPa);
                const divPa = document.createElement('div');
                divPa.className="border";
                divPa.id= fruta[i].id;
                colPa.appendChild(divPa);
                
                const img = document.createElement('img');
                img.src = fruta[i].img;
                img.style.width='100%';
                img.className="frutaImg";
                //img.setAttribute("data-toggle", "modal");
                //img.setAttribute("data-target", "#exampleModalCenter");
                img.lang = fruta[i].id;
                img.style.maxHeight = '157px';
                img.style.minHeight = '157px';
                /*img.onclick = (event) => {
                    var target = event.currentTarget.lang;
                    var imgModal = document.getElementById('imgModal');
                    imgModal.innerHTML="";
                    var datosModal = document.getElementById('datosModal');

                    const spinner = document.createElement('div');
                    spinner.className="spinner-border";
                    spinner.setAttribute('role' ,"status");
                    spinner.style.display = 'block';
                    spinner.style.margin = '0 auto';
                    spinner.style.marginTop = '40px';
                    spinner.style.color = '#8adb72';
                    const spiText = document.createElement('span');
                    spiText.className = "sr-only";
                    const textoSpi = document.createTextNode('Loading...');
                    spiText.appendChild(textoSpi);
                    spinner.appendChild(spiText);
                    datosModal.appendChild(spinner);
                    request
                    .get('https://prueba-next-u-react.firebaseio.com/productos/Donaciones/'+target+".json")
                    .set('Content-Type','aplication/json') 
                    .then((res => {
                        var fruto= res.body;
                        document.getElementById("exampleModalCenterTitle").innerHTML=fruto.nombre.toUpperCase();
                        var img = document.createElement('img');
                        img.src=fruto.img;
                        img.style.width="100%";
                        imgModal.appendChild(img);
                        var nombre= document.createElement('h4');
                        nombre.innerHTML=fruto.nombre.toUpperCase();
                        datosModal.appendChild(nombre);
                        var precio= document.createElement('p');
                        var textPrice = document.createTextNode('Precio: $'+fruto.precio);
                        precio.appendChild(textPrice);
                        datosModal.appendChild(precio);
                        }));
                };*/
                divPa.appendChild(img);

                const br = document.createElement('br');
                divPa.appendChild(br);

                const p1 = document.createElement('p');
                p1.id="tituloFruta";
                const textP1 = document.createTextNode(fruta[i].nombre.charAt(0).toUpperCase()+fruta[i].nombre.slice(1).toLowerCase());
                p1.appendChild(textP1);
                divPa.appendChild(p1);

                const p2 = document.createElement('p');
                p2.id="precioFruta";
                const textP2 = document.createTextNode('$'+fruta[i].precio+' / '+fruta[i].Unidad);
                p2.appendChild(textP2);
                divPa.appendChild(p2);

                const div1 = document.createElement('div');
                div1.id="masMenos";
                divPa.appendChild(div1);

                const f2 = document.createElement('i');
                f2.className="fas fa-minus icono";
                f2.lang=fruta[i].nombre+fruta[i].id;
                f2.nonce=fruta[i].id;
                f2.onclick = (menos) =>{
                    menos.currentTarget;
                    const valor = document.getElementById(menos.currentTarget.lang).getAttribute('lang');
                    let cant = parseFloat(valor);
                    if (cant > 0) {
                        cant = cant - 1;
                        document.getElementById(menos.currentTarget.lang).setAttribute('value', cant.toString());
                        document.getElementById(menos.currentTarget.lang).setAttribute('lang', cant.toString());
                        this.setState({value: null});
                        this.setState({value: cant});
                        this.setState({id: null});
                        this.setState({id: menos.currentTarget.nonce});
                        this.setState({nombre: null});
                        this.setState({nombre: menos.currentTarget.lang});
                    }
                };
                div1.appendChild(f2);

                const input = document.createElement('input');
                input.type="number";
                input.className="inputValor1";
                input.lang="0";
                input.id= fruta[i].nombre+fruta[i].id;
                input.nonce= fruta[i].id;
                input.onchange = (input) =>{
                    console.log(input.currentTarget);
                };
                input.placeholder="0";
                div1.appendChild(input);

                const f1 = document.createElement('i');
                f1.className="fas fa-plus icono";
                f1.lang=fruta[i].nombre+fruta[i].id;
                f1.nonce=fruta[i].id;
                f1.onclick = (mas) =>{
                    const valor = parseFloat(document.getElementById(mas.currentTarget.lang).getAttribute('lang'));
                    let cant = valor;
                    cant = cant + 1;
                    document.getElementById(mas.currentTarget.lang).setAttribute('value', cant.toString());
                    document.getElementById(mas.currentTarget.lang).setAttribute('lang', cant.toString());
                    this.setState({value: null});
                    this.setState({value: cant});
                    this.setState({id: null});
                    this.setState({id: mas.currentTarget.nonce});
                    this.setState({nombre: null});
                    this.setState({nombre: mas.currentTarget.lang});
                };
                div1.appendChild(f1);

                const bot = document.createElement('button');
                bot.className="add";
                bot.name = fruta[i].precio;
                bot.id = fruta[i].img+fruta[i].id;
                bot.onclick = (add) =>{
                    if (this.state.value > 0) {

                        document.getElementById(add.currentTarget.id).style.animation = "miAnimacion2 3s";
                        document.getElementById(add.currentTarget.id).innerHTML = "Listo";
        
                        const objectAux = {
                            img: '',
                            nombre: '',
                            precio: '', 
                            cantidad: '',
                            id: ''
                        }
        
                        objectAux.img = add.currentTarget.id.slice(0, -fruta[i].id.length);
                        objectAux.nombre = this.state.nombre;
                        objectAux.precio = add.currentTarget.name;
                        objectAux.cantidad = this.state.value;
                        objectAux.id = this.state.id;
        
                        this.state.pagar.push(objectAux);
        
                        window.sessionStorage.setItem('array', JSON.stringify(this.state.pagar));
        
                        console.log(JSON.parse(window.sessionStorage.getItem('array')));
        
                        // Agregar a carrito
                        console.log('entra');
                        const tabla = document.getElementById('carritoBody');
                        tabla.innerHTML = '';
                        const array = JSON.parse(window.sessionStorage.getItem('array'));
                        console.log(array);
                        const n = array.length;
                        let total = 0;
                        for (let i=0; i < n; i++) {
                            // Crear los div layout
                            const divRow = document.createElement('div');
                            divRow.className = 'row';
                            divRow.style.width = '100%';
                            divRow.style.margin = '0 auto';
                            divRow.style.overflowY = 'auto';
                            const divCol1 = document.createElement('div');
                            divCol1.className = 'col-4';
                            divCol1.style.padding = '5px';
                            const divCol2 = document.createElement('div');
                            divCol2.className = 'col-4';
                            divCol2.style.padding = '5px';
                            const divCol3 = document.createElement('div');
                            divCol3.className = 'col-4';
                            divCol3.style.padding = '5px';
                            divRow.appendChild(divCol1);
                            divRow.appendChild(divCol2);
                            divRow.appendChild(divCol3);
        
                            // img 
                            const img = document.createElement('img');
                            img.style.width = '80%';
                            img.style.display = 'block';
                            img.style.margin = '0 auto';
                            img.src = array[i].img;
                            divCol1.appendChild(img);
        
                            // nombre, precio y cantidad
                            const nombre = document.createElement('p');
                            const text = array[i].nombre.charAt(0).toUpperCase()+array[i].nombre.slice(1).toLowerCase();
                            const textNombre = document.createTextNode(text.toString());
                            nombre.appendChild(textNombre);
                            nombre.style.textAlign = 'left';
                            nombre.style.marginBottom = '5px';  
                            nombre.style.fontSize = '13px';
                            nombre.style.fontWeight = 'bold';
                            divCol2.appendChild(nombre);          
        
                            const precio = document.createElement('p');
                            const textPrecio = document.createTextNode('Precio: $'+array[i].precio.toString());
                            precio.appendChild(textPrecio);
                            precio.style.textAlign = 'left';
                            precio.style.marginBottom = '5px';
                            precio.style.fontSize = '13px';
                            divCol2.appendChild(precio);
        
                            const cantidad = document.createElement('p');
                            const textCantidad = document.createTextNode('Unidades: '+array[i].cantidad.toString());
                            cantidad.appendChild(textCantidad);
                            cantidad.style.textAlign = 'left';
                            cantidad.style.fontSize = '13px';
                            divCol2.appendChild(cantidad);
        
                            // subtotal
                            const subTotal = document.createElement('h4');
                            const precioT = parseFloat(array[i].precio);
                            const suma = precioT * array[i].cantidad;
                            const textSub = document.createTextNode('$'+suma.toFixed(2).toString());
                            subTotal.appendChild(textSub);
                            subTotal.style.fontWeight = 'bold';
                            subTotal.style.textAlign = 'center';
                            subTotal.style.color = 'black';
                            subTotal.style.marginTop = '20px';
                            divCol3.appendChild(subTotal);
                            total = total + suma;
        
                            // agregar todo
                            tabla.appendChild(divRow);
        
                            // TOTAL
                            document.getElementById('precioCarro').innerHTML = '$'+(total +2 ).toFixed(2).toString();
                            window.localStorage.setItem('totalPagar', +(total +2 ).toFixed(2).toString())
                        }
                    }
                    this.setState({value: 0});
                };
                bot.onmouseout = (cambiar) =>{
                    document.getElementById(cambiar.currentTarget.id).innerHTML = "Añadir"
                }
                const botText = document.createTextNode('Añadir');
                bot.appendChild(botText);
                divPa.appendChild(bot);
            }
        }));
    }

    componentDidMount () {
        /*if (window.sessionStorage.getItem('array')) {
            const n = JSON.parse(window.sessionStorage.getItem('array')).length;
            const array = JSON.parse(window.sessionStorage.getItem('array'));
            for (let i = 0; i < n; i++) {
                this.state.pagar.push(array[i]);
            }
        }*/
        request
        .get('https://prueba-next-u-react.firebaseio.com/productos/Frutas.json')
        .set('Content-Type','aplication/json') 
        .then((res => {
            this.setState({buscar: res.body});
            request
                .get('https://prueba-next-u-react.firebaseio.com/productos/Vegetales.json')
                .set('Content-Type','aplication/json') 
                .then((res => {
                    const n = res.body.length;
                    for (let i = 0; i<n; i++){
                        this.state.buscar.push(res.body[i]);
                    }
                    request
                        .get('https://prueba-next-u-react.firebaseio.com/productos/Abarrotes.json')
                        .set('Content-Type','aplication/json') 
                        .then((res => {
                            const n = res.body.length;
                            for (let i = 0; i<n; i++){
                                this.state.buscar.push(res.body[i]);
                            }
                            request
                        .get('https://prueba-next-u-react.firebaseio.com/productos/Panaderia.json')
                        .set('Content-Type','aplication/json') 
                        .then((res => {
                            const n = res.body.length;
                            for (let i = 0; i<n; i++){
                                this.state.buscar.push(res.body[i]);
                            }
                            request
                                .get('https://prueba-next-u-react.firebaseio.com/productos/Lacteos.json')
                                .set('Content-Type','aplication/json') 
                                .then((res => {
                                    const n = res.body.length;
                                    for (let i = 0; i<n; i++){
                                        this.state.buscar.push(res.body[i]);
                                    }
                                    request
                                        .get('https://prueba-next-u-react.firebaseio.com/productos/Medicina.json')
                                        .set('Content-Type','aplication/json') 
                                        .then((res => {
                                            const n = res.body.length;
                                            for (let i = 0; i<n; i++){
                                                this.state.buscar.push(res.body[i]);
                                            }
                                            request
                                                .get('https://prueba-next-u-react.firebaseio.com/productos/Donaciones.json')
                                                .set('Content-Type','aplication/json') 
                                                .then((res => {
                                                    const n = res.body.length;
                                                    for (let i = 0; i<n; i++){
                                                        this.state.buscar.push(res.body[i]);
                                                    }
                                                }));
                                        }));
                                }));
                        }));
                    }));
            }));
        }));
    }

}
export default Tabla;