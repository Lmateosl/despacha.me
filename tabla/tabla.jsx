import React from 'react';
import './tabla.css';
import { Container, Row, Col, Button } from 'reactstrap';
import * as request from 'superagent';
import { send } from 'emailjs-com';
import firebase from 'firebase';

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
            modi: {
                disponible: 'true'
            },
            ids: []
        }
        const firebaseConfig = {
            apiKey: "AIzaSyBew-v5n3Pd3MDQ_fC0BB0iot2lw34AToU",
            authDomain: "prueba-next-u-react.firebaseapp.com",
            databaseURL: "https://prueba-next-u-react.firebaseio.com",
            projectId: "prueba-next-u-react",
            storageBucket: "prueba-next-u-react.appspot.com",
            messagingSenderId: "729371060919",
            appId: "1:729371060919:web:4a92af95f160b157263b32",
            measurementId: "G-7FEG4EQ03Y"
          };
          // Initialize Firebase
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
            firebase.analytics();
        }
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
                                <div className="col-3" hidden>
                                    <div className="itemCar" id="pan" onClick={this.pan.bind(this)}>
                                    <p className="descCar">Pan</p>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="itemCar" id="lyh" onClick={this.leche.bind(this)}>
                                        <p className="descCar" id="lyh2">Lácteos y Huevos</p>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="itemCar" id="frutasLindas" onClick={this.frutasLindas.bind(this)}>
                                        <p className="descCar">Frutas</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center" id="carrusel2" hidden>
                                <div className="col-3">
                                    <div className="itemCar" id="empren" onClick={this.empren.bind(this)}>
                                        <p className="descCar">Emprendimientos</p>
                                    </div>
                                </div>
                                <div className="col-3" hidden>
                                    <div className="itemCar" id="donaciones" onClick={this.donaciones.bind(this)}>
                                        <p className="descCar">Donaciones</p>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="itemCar" id="proteinas" onClick={this.proteinas.bind(this)}>
                                        <p className="descCar">Proteinas</p>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="itemCar" id="combos" onClick={this.combos.bind(this)}>
                                        <p className="descCar">Promociones</p>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="itemCar" id="mayoreo" onClick={this.mayoreo.bind(this)}>
                                        <p className="descCar">Mayoreo</p>
                                    </div>
                                </div>
                                <div className="col-3" hidden>
                                    <div className="itemCar" id="limpieza" onClick={this.limpieza.bind(this)}>
                                        <p className="descCar">Limpieza</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1 align-self-center">
                            <i class="fas fa-chevron-right iconos" onClick={this.carrusel.bind(this)}></i>
                        </div>
                    </div>
                    <div className="row align-items-center" id="carruselTop2">
                        <div className="col-1" style={{padding: '0px'}}>
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
                                    <div className="itemCar" id="frutasLindas" onClick={this.frutasLindas.bind(this)}>
                                        <p className="descCar">Frutas</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center" id="carruselCell2" hidden>
                                <div className="col-6">
                                    <div className="itemCar" id="abarrotes" onClick={this.abarrotes.bind(this)}>
                                        <p className="descCar">Abarrotes</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="itemCar" id="lyh" onClick={this.leche.bind(this)}>
                                        <p className="descCar" id="lyh2">Lácteos y Huevos</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center" id="carruselCell3" hidden>
                                <div className="col-6" hidden>
                                    <div className="itemCar" id="medicina" onClick={this.medicina.bind(this)}>
                                        <p className="descCar">Medicina</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="itemCar" id="proteinas" onClick={this.proteinas.bind(this)}>
                                        <p className="descCar">Proteinas</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="itemCar" id="mayoreo" onClick={this.mayoreo.bind(this)}>
                                        <p className="descCar">Mayoreo</p>
                                    </div>
                                </div>
                                <div className="col-6" hidden>
                                    <div className="itemCar" id="limpieza" onClick={this.limpieza.bind(this)}>
                                        <p className="descCar">Limpieza</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center" id="carruselCell4" hidden>
                                <div className="col-6" hidden>
                                    <div className="itemCar" id="donaciones" onClick={this.donaciones.bind(this)}>
                                        <p className="descCar">Donaciones</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="itemCar" id="combos" onClick={this.combos.bind(this)}>
                                        <p className="descCar">Promociones</p>
                                    </div>
                                </div>
                                <div className="col-6" hidden>
                                    <div className="itemCar" id="pan" onClick={this.pan.bind(this)}>
                                    <p className="descCar">Pan</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="itemCar" id="empren" onClick={this.empren.bind(this)}>
                                        <p className="descCar" style={{fontSize: '15px'}}>Emprendimientos</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1" style={{padding: '0px'}}>
                            <i class="fas fa-chevron-right iconos" id="flecha22" onClick={this.carrusel2Mas.bind(this)}></i>
                        </div>
                    </div>
                </div>
                <Container id="tableas">
                    <div class="input-group mb-3" id="serchWid">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="backLogo"><i class="fas fa-search" id="iconoLogo"></i></span>
                        </div>
                        <input type="text" class="form-control" id="inputSerch" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Buscar" onKeyUp={this.buscar.bind(this)} onFocus={this.esconder.bind(this)}/>
                    </div>
                    <div id="adminBusc" className="row justify-content-between" hidden>
                        <div className="input-group mb-3 col-12 col-lg-4" id="serchWid2">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="backLogo"><i class="fas fa-search" id="iconoLogo"></i></span>
                            </div>
                            <input type="text" class="form-control" id="inputSerch" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Buscar" onKeyUp={this.buscar2.bind(this)} onFocus={this.esconder.bind(this)}/>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button type="button" id="botBusc" class="btn btn-primary" data-toggle="modal" data-target="#addModal" style={{backgroundColor: '#8adb72', borderColor: '#8adb72'}}><i class="fas fa-plus icon" style={{color: 'white', fontSize: '15px', marginRight: '10px'}}></i>Agregar</button>
                        </div>
                    </div>
                    <Row id="dibujar">
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
                <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Editar</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                            <div class="form-group">
                                <label for="imgM" class="col-form-label">Imagen Url:</label>
                                <input type="text" class="form-control" id="imgM" onChange={this.imgM.bind(this)}/>
                            </div>
                            <div class="form-group">
                                <label for="nameM" class="col-form-label">Nombre:</label>
                                <input type="text" class="form-control" id="nameM" onChange={this.nameM.bind(this)}/>
                            </div>
                            <div class="form-group">
                                <label for="precioM" class="col-form-label">Precio Unitario:</label>
                                <input type="text" class="form-control" id="precioM" onChange={this.precioM.bind(this)} />
                            </div>
                            <div class="form-group">
                                <label for="medidaM" class="col-form-label">Medida:</label>
                                <input type="text" class="form-control" id="medidaM" onChange={this.medidaM.bind(this)} />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Descripción</label>
                                <textarea class="form-control" height="100px" id="descM" onChange={this.descM.bind(this)}></textarea>
                            </div>
                            <div>
                                <p>Disponible:</p>
                            </div>
                            <div class="form-group">
                                <div class="custom-control custom-switch">
                                    <input type="checkbox" class="custom-control-input" id="dispM" onClick={this.dispM.bind(this)}/>
                                    <label class="custom-control-label" for="dispM"></label>
                                </div>
                            </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary" style={{backgroundColor: '#8adb72', borderColor: '#8adb72'}} onClick={this.cambiar.bind(this)}>Confirmar</button>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Agregar</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                            <div class="form-group">
                                <label for="imgM" class="col-form-label">Imagen Url:</label>
                                <input type="text" class="form-control" id="imgM" onChange={this.imgM.bind(this)}/>
                            </div>
                            <div class="form-group">
                                <label for="nameM" class="col-form-label">Nombre:</label>
                                <input type="text" class="form-control" id="nameM" onChange={this.nameM.bind(this)}/>
                            </div>
                            <div class="form-group">
                                <label for="precioM" class="col-form-label">Precio Unitario:</label>
                                <input type="text" class="form-control" id="precioM" onChange={this.precioM.bind(this)} />
                            </div>
                            <div class="form-group">
                                <label for="medidaM" class="col-form-label">Medida:</label>
                                <input type="text" class="form-control" id="medidaM" onChange={this.medidaM.bind(this)} />
                            </div>
                            <div class="form-group">
                                <label for="categoriaM" class="col-form-label">Categoria:</label>
                                <select class="form-control" id="categoriaM" onChange={this.categoriaM.bind(this)}>
                                    <option selected>...</option>
                                    <option>Frutas</option>
                                    <option>Vegetales</option>
                                    <option>Lacteos</option>
                                    <option>Panaderia</option>
                                    <option>Emprendimientos</option>
                                    <option>Farmacia</option>
                                    <option>Abarrotes</option>
                                    <option>Donaciones</option>
                                    <option>Limpieza</option>
                                    <option>Proteinas</option>
                                    <option>Combos</option>
                                    <option>Mayoreo</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Descripción</label>
                                <textarea class="form-control" height="100px" id="descM" onChange={this.descM.bind(this)}></textarea>
                            </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary" style={{backgroundColor: '#8adb72', borderColor: '#8adb72'}} onClick={this.addBot.bind(this)}>Confirmar</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    addBot () {
        if (this.state.modi.nombre) {
            if (this.state.modi.img) {
                if (this.state.modi.Unidad) {
                    if (this.state.modi.precio) {
                        if (this.state.modi.Categoria) {
                            request
                                .get('https://prueba-next-u-react.firebaseio.com/productos/' + this.state.modi.Categoria.charAt(0).toUpperCase()+this.state.modi.Categoria.slice(1).toLowerCase() + '.json')
                                .set('Content-Type','aplication/json') 
                                .then((res => {
                                    this.state.modi.local = res.body.length.toString();
                                    this.state.modi.id = (Math.max(...this.state.ids) + 1).toString();
                                    console.log(this.state.modi);
                                    firebase.database().ref('productos/' + this.state.modi.Categoria.charAt(0).toUpperCase()+this.state.modi.Categoria.slice(1).toLowerCase() + '/' + res.body.length.toString()).set(this.state.modi).then(ok =>{
                                        console.log('ok');
                                        alert('Producto Añadido');
                                        window.location.reload();
                                    });
                                }));
                        } else {
                            alert('Llene todos los campos');
                        }
                    } else {
                        alert('Llene todos los campos');
                    }
                } else {
                    alert('Llene todos los campos');
                }
            } else {
                alert('Llene todos los campos');
            }
        } else {
            alert('Llene todos los campos');
        }
    }

    anadir (event) {
        document.getElementById(event.target.id).innerHTML = "Añadir";
    }
    
    cambiar () {
        console.log(this.state.modi);
        firebase.database().ref('productos/' + this.state.modi.Categoria.charAt(0).toUpperCase()+this.state.modi.Categoria.slice(1).toLowerCase() + '/' + this.state.modi.local).set(this.state.modi).then(ok =>{
            console.log('ok');
            alert('Producto Actualizado');
            window.location.reload();
        });
    } 

    nameM (event) {
        this.state.modi.nombre = event.target.value;
    }

    imgM (event) {
        this.state.modi.img = event.target.value;
    }

    medidaM (event) {
        this.state.modi.Unidad = event.target.value;
    }

    precioM (event) {
        this.state.modi.precio = event.target.value;
    }

    idM (event) {
        this.state.modi.id = event.target.value;
    }

    categoriaM (event) {
        this.state.modi.Categoria = event.target.value;
    }

    descM (event) {
        this.state.modi.descripcion = event.target.value;
    }

    dispM (event) {
        if (document.getElementById('dispM').getAttribute('name') == 'true') {
            document.getElementById('dispM').setAttribute('name', 'false');
            document.getElementById('dispM').removeAttribute('checked');
            this.state.modi.disponible = 'false';
            console.log('false');
        } else {
            document.getElementById('dispM').setAttribute('name', 'true');
            document.getElementById('dispM').setAttribute('checked', '');
            this.state.modi.disponible = 'true';
            console.log('true');
        }
    }

    buscar2 (event) {
        const palabra= event.target.value;
        const n = palabra.length - 1;
        const tabla = document.getElementById('dibujar');
        tabla.innerHTML="";
        const fruta = this.state.buscar;
        const length = fruta.length;
        if (palabra == ''){ 
            tabla.innerHTML="";
        } else {
            const tb = document.createElement('table');
            tb.className = 'table';
            const head = document.createElement('thead');

            const trH = document.createElement('tr');

            const img = document.createElement('th');
            img.setAttribute('scope', 'col');
            const imgText = document.createTextNode('Imagen');
            img.style.textAlign = 'center';
            img.appendChild(imgText);

            const nombre = document.createElement('th');
            nombre.setAttribute('scope', 'col');
            const textNombre = document.createTextNode('Nombre');
            nombre.style.textAlign = 'center';
            nombre.appendChild(textNombre);

            const precio = document.createElement('th');
            precio.setAttribute('scope', 'col');
            const textPrecio = document.createTextNode('Precio Unitario');
            precio.style.textAlign = 'center';
            precio.appendChild(textPrecio);

            const unidad = document.createElement('th');
            unidad.setAttribute('scope', 'col');
            const textUnidad = document.createTextNode('Medida');
            unidad.style.textAlign = 'center';
            unidad.appendChild(textUnidad);

            const id = document.createElement('th');
            id.setAttribute('scope', 'col');
            const textId = document.createTextNode('Id');
            id.style.textAlign = 'center';
            id.appendChild(textId);

            const disp = document.createElement('th');
            disp.setAttribute('scope', 'col');
            const textDisp = document.createTextNode('Disponible');
            disp.style.textAlign = 'center';
            disp.appendChild(textDisp);

            const edit = document.createElement('th');
            edit.setAttribute('scope', 'col');

            const body = document.createElement('tbody');

            trH.appendChild(img);
            trH.appendChild(nombre);
            trH.appendChild(precio);
            trH.appendChild(unidad);
            trH.appendChild(id);
            trH.appendChild(disp);
            trH.appendChild(edit);

            head.appendChild(trH);
            tb.appendChild(head);
            tb.appendChild(body);
            tabla.appendChild(tb);
            
            for (let i = 0; i < length; i++) {
                if (palabra.charAt(0).toLowerCase() == fruta[i].nombre.charAt(0).toLowerCase()){
                    if (palabra.charAt(n).toLowerCase() == fruta[i].nombre.charAt(n).toLowerCase()){
                        const tr = document.createElement('tr');

                        const img = document.createElement('td');
                        const imgText = document.createElement('img');
                        imgText.src = fruta[i].img;
                        imgText.style.width = '20%';
                        imgText.style.display = 'block';
                        imgText.style.margin = '0 auto';
                        img.style.maxWidth = '175px';
                        img.appendChild(imgText);

                        const nombre = document.createElement('td');
                        const textNombre = document.createTextNode(fruta[i].nombre);
                        nombre.style.textAlign = 'center';
                        nombre.style.maxWidth = '175px';
                        nombre.appendChild(textNombre);

                        const precio = document.createElement('td');
                        const textPrecio = document.createTextNode(fruta[i].precio);
                        precio.style.textAlign = 'center';
                        precio.style.maxWidth = '175px';
                        precio.appendChild(textPrecio);

                        const unidad = document.createElement('td');
                        const textUnidad = document.createTextNode(fruta[i].Unidad);
                        unidad.style.textAlign = 'center';
                        unidad.style.maxWidth = '175px';
                        unidad.appendChild(textUnidad);

                        const id = document.createElement('td');
                        const textId = document.createTextNode(fruta[i].id);
                        id.style.textAlign = 'center';
                        id.style.maxWidth = '175px';
                        id.appendChild(textId);

                        let textDisp = document.createTextNode('No');
                        const disp = document.createElement('td');
                        if (fruta[i].disponible == 'true') {
                            textDisp = document.createTextNode('Si');
                        } else {
                            textDisp = document.createTextNode('No');
                        }
                        disp.style.textAlign = 'center';
                        disp.appendChild(textDisp);

                        const edit = document.createElement('th');
                        const textEdit = document.createElement('i');
                        edit.setAttribute('data-toggle', 'modal');
                        edit.setAttribute('data-target', '#editModal');
                        textEdit.className = 'fas fa-edit icon';
                        edit.appendChild(textEdit);

                        tr.appendChild(img);
                        tr.appendChild(nombre);
                        tr.appendChild(precio);
                        tr.appendChild(unidad);
                        tr.appendChild(id);
                        tr.appendChild(disp);
                        tr.appendChild(edit);

                        body.appendChild(tr);

                        edit.onclick = () => {
                            let objectAux = {};
                            if (fruta[i].descripcion) {
                                objectAux = {
                                    Unidad: fruta[i].Unidad,
                                    disponible: fruta[i].disponible,
                                    id: fruta[i].id,
                                    img: fruta[i].img,
                                    nombre: fruta[i].nombre,
                                    precio: fruta[i].precio,
                                    Categoria: fruta[i].Categoria,
                                    local: fruta[i].local,
                                    descripcion: fruta[i].descripcion
                                }

                                document.getElementById('imgM').setAttribute('value', fruta[i].img);
                                document.getElementById('nameM').setAttribute('value', fruta[i].nombre);
                                document.getElementById('precioM').setAttribute('value', fruta[i].precio);
                                document.getElementById('medidaM').setAttribute('value', fruta[i].Unidad);
                                document.getElementById('categoriaM').setAttribute('value', fruta[i].Categoria);
                                document.getElementById('categoriaM').placeholder = fruta[i].Categoria.charAt(0).toUpperCase()+fruta[i].Categoria.slice(1).toLowerCase();
                                const textArea = document.createTextNode(fruta[i].descripcion)
                                document.getElementById('descM').appendChild(textArea);
                                if (fruta[i].disponible == 'true') {
                                    document.getElementById('dispM').setAttribute('checked', '');
                                    document.getElementById('dispM').setAttribute('name', 'true');
                                } else {
                                    document.getElementById('dispM').removeAttribute('checked');
                                    document.getElementById('dispM').setAttribute('name', 'false');
                                }
                                this.setState({modi: objectAux});

                            } else {
                                objectAux = {
                                    Unidad: fruta[i].Unidad,
                                    disponible: fruta[i].disponible,
                                    id: fruta[i].id,
                                    img: fruta[i].img,
                                    nombre: fruta[i].nombre,
                                    precio: fruta[i].precio,
                                    Categoria: fruta[i].Categoria,
                                    local: fruta[i].local
                                }

                                document.getElementById('imgM').setAttribute('value', fruta[i].img);
                                document.getElementById('nameM').setAttribute('value', fruta[i].nombre);
                                document.getElementById('precioM').setAttribute('value', fruta[i].precio);
                                document.getElementById('medidaM').setAttribute('value', fruta[i].Unidad);
                                document.getElementById('categoriaM').setAttribute('value', fruta[i].Categoria);
                                document.getElementById('categoriaM').placeholder = fruta[i].Categoria.charAt(0).toUpperCase()+fruta[i].Categoria.slice(1).toLowerCase();
                                if (fruta[i].disponible == 'true') {
                                    document.getElementById('dispM').setAttribute('checked', '');
                                    document.getElementById('dispM').setAttribute('name', 'true');
                                } else {
                                    document.getElementById('dispM').removeAttribute('checked');
                                    document.getElementById('dispM').setAttribute('name', 'false');
                                }
                                this.setState({modi: objectAux});
                            }
                        }
                    }
                }
            }
        }

    }

    esconder () {
        const size1 = screen.height - 60 - 60;
        if (screen.width < 700) {
            document.getElementById('comienza').setAttribute('hidden', '');
            document.getElementById('head').setAttribute('hidden', '');
            document.getElementById('barrera').style.boxShadow = '2px 2px rgba(184,184,184,1)';
            document.getElementById('tableas').style.height = size1.toString()+'px';
        }
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
                if (fruta[i].disponible == "true"){
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
                    img.lang = fruta[i].id;
                    img.style.maxHeight = '157px';
                    img.style.minHeight = '157px';
                    if (fruta[i].descripcion) {
                        img.setAttribute("data-toggle", "modal");
                        img.setAttribute("data-target", "#exampleModalCenter");
                        img.onclick = (event) => {
                            var imgModal = document.getElementById('imgModal');
                            imgModal.innerHTML="";
                            var datosModal = document.getElementById('datosModal');

                            datosModal.innerHTML="";
                            document.getElementById("exampleModalCenterTitle").innerHTML=fruta[i].nombre.toUpperCase();
                            var img = document.createElement('img');
                            img.src=fruta[i].img;
                            img.style.width="100%";
                            imgModal.appendChild(img);
                            var nombre= document.createElement('h4');
                            nombre.innerHTML=fruta[i].nombre.toUpperCase();
                            datosModal.appendChild(nombre);
                            var precio= document.createElement('p');
                            var textPrice = document.createTextNode('Precio: $'+fruta[i].precio);
                            precio.appendChild(textPrice);
                            datosModal.appendChild(precio);
                            var descrip = document.createElement('p');
                            descrip.style.marginTop = '20px';
                            descrip.style.textAlign = 'left';
                            var descripText = document.createTextNode(fruta[i].descripcion);
                            descrip.appendChild(descripText);
                            datosModal.appendChild(descrip);
                        };
                    };
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
                    bot.lang = fruta[i].Unidad;
                    bot.onclick = (add) =>{
                        if (this.state.value > 0) {

                            document.getElementById(add.currentTarget.id).style.animation = "miAnimacion2 3s";
                            document.getElementById(add.currentTarget.id).innerHTML = "Listo";
            
                            const objectAux = {
                                img: '',
                                nombre: '',
                                precio: '', 
                                cantidad: '',
                                id: '',
                                unidad: '',
                            }
            
                            objectAux.img = add.currentTarget.id.slice(0, -fruta[i].id.length);
                            objectAux.nombre = this.state.nombre.slice(0, (-this.state.id.length));
                            objectAux.precio = add.currentTarget.name;
                            objectAux.cantidad = this.state.value;
                            objectAux.id = this.state.id;
                            objectAux.unidad = add.currentTarget.lang;
            
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
                                divCol1.className = 'col-3';
                                divCol1.style.padding = '5px';
                                const divCol2 = document.createElement('div');
                                divCol2.className = 'col-4';
                                divCol2.style.padding = '5px';
                                const divCol3 = document.createElement('div');
                                divCol3.className = 'col-3';
                                divCol3.style.padding = '5px';
                                const divCol4 = document.createElement('div');
                                divCol4.className = 'col-2';
                                divCol4.style.padding = '5px';
                                divCol4.onclick = () =>{
                                    if (this.state.pagar.length == 1){
                                        const tabla = document.getElementById('carritoBody');
                                        tabla.innerHTML = '';
                                        const h4 = document.createElement('h4');
                                        h4.style.textAlign = 'center';
                                        h4.style.fontWeight = 'bold';
                                        h4.style.marginBottom = '40px';
                                        h4.style.marginTop = '20px';
                                        const h4Text = document.createTextNode('No has agregado productos');
                                        h4.appendChild(h4Text);
                                        tabla.appendChild(h4);

                                        const img = document.createElement('img');
                                        img.src = "https://res.cloudinary.com/indev/image/upload/v1587361319/frutas/WhatsApp_Image_2020-04-19_at_23.40.56_wmrt9q.jpg";
                                        img.style.width = "65%";
                                        img.style.display= 'block';
                                        img.style.margin = '0 auto';
                                        tabla.appendChild(img);
                                        this.setState({pagar: []});
                                        window.sessionStorage.removeItem('array');

                                        document.getElementById('precioCarro').innerHTML = '$0';
                                        window.localStorage.setItem('totalPagar', '0');

                                    } else {
                                        tabla.removeChild(divRow);
                                        const array = JSON.parse(window.sessionStorage.getItem('array'));
                                        array.splice(i, 1);
                                        this.state.pagar.splice(i, 1);
                                        window.sessionStorage.setItem('array', JSON.stringify(array));

                                        const resta = parseFloat(window.localStorage.getItem('totalPagar')).toFixed(2) - suma;
                                        document.getElementById('precioCarro').innerHTML = '$'+(resta).toFixed(2).toString();
                                        window.localStorage.setItem('totalPagar', (resta).toFixed(2).toString());
                                        document.getElementById('descuentof').innerHTML = '';
                                        document.getElementById('totalPagarYa').innerHTML = '$'+resta.toFixed(2);
                                        window.localStorage.removeItem('cupon');
                                    }
                                };
                                divRow.appendChild(divCol1);
                                divRow.appendChild(divCol2);
                                divRow.appendChild(divCol3);
                                divRow.appendChild(divCol4);
            
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

                                // Quitar Productos
                                const x = document.createElement('i');
                                x.className = "fas fa-times";
                                x.style.display = "block";
                                x.style.margin = '0 auto';
                                x.style.marginTop = "25px";
                                x.style.width = "20px";
                                x.lang = i;
                                divCol4.appendChild(x);
            
                                // agregar todo
                                tabla.appendChild(divRow);
            
                                // TOTAL
                                document.getElementById('precioCarro').innerHTML = '$'+(total +2 ).toFixed(2).toString();
                                window.localStorage.setItem('totalPagar', +(total +2 ).toFixed(2).toString());
                                document.getElementById('descuentof').innerHTML = '';
                                document.getElementById('totalPagarYa').innerHTML = '$'+(total + 2).toFixed(2);
                                window.localStorage.removeItem('cupon');
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
        } else {
                for (let i = 0; i <length; i++) {
                    if (palabra.charAt(0).toLowerCase() == fruta[i].nombre.charAt(0).toLowerCase()){
                        if (palabra.charAt(n).toLowerCase() == fruta[i].nombre.charAt(n).toLowerCase()){
                            if (fruta[i].disponible == "true"){
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
                                img.lang = fruta[i].id;
                                img.style.maxHeight = '157px';
                                img.style.minHeight = '157px';
                                if (fruta[i].descripcion) {
                                    img.setAttribute("data-toggle", "modal");
                                    img.setAttribute("data-target", "#exampleModalCenter");
                                    img.onclick = (event) => {
                                        var imgModal = document.getElementById('imgModal');
                                        imgModal.innerHTML="";
                                        var datosModal = document.getElementById('datosModal');
            
                                        datosModal.innerHTML="";
                                        document.getElementById("exampleModalCenterTitle").innerHTML=fruta[i].nombre.toUpperCase();
                                        var img = document.createElement('img');
                                        img.src=fruta[i].img;
                                        img.style.width="100%";
                                        imgModal.appendChild(img);
                                        var nombre= document.createElement('h4');
                                        nombre.innerHTML=fruta[i].nombre.toUpperCase();
                                        datosModal.appendChild(nombre);
                                        var precio= document.createElement('p');
                                        var textPrice = document.createTextNode('Precio: $'+fruta[i].precio);
                                        precio.appendChild(textPrice);
                                        datosModal.appendChild(precio);
                                        var descrip = document.createElement('p');
                                        descrip.style.marginTop = '20px';
                                        descrip.style.textAlign = 'left';
                                        var descripText = document.createTextNode(fruta[i].descripcion);
                                        descrip.appendChild(descripText);
                                        datosModal.appendChild(descrip);
                                    };
                                };
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
                                bot.lang = fruta[i].Unidad;
                                bot.onclick = (add) =>{
                                    if (this.state.value > 0) {

                                        document.getElementById(add.currentTarget.id).style.animation = "miAnimacion2 3s";
                                        document.getElementById(add.currentTarget.id).innerHTML = "Listo";
                        
                                        const objectAux = {
                                            img: '',
                                            nombre: '',
                                            precio: '', 
                                            cantidad: '',
                                            id: '',
                                            unidad: ''
                                        }
                        
                                        objectAux.img = add.currentTarget.id.slice(0, -fruta[i].id.length);
                                        objectAux.nombre = this.state.nombre.slice(0, (-this.state.id.length));
                                        objectAux.precio = add.currentTarget.name;
                                        objectAux.cantidad = this.state.value;
                                        objectAux.id = this.state.id;
                                        objectAux.unidad = add.currentTarget.lang;
                        
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
                                            divCol1.className = 'col-3';
                                            divCol1.style.padding = '5px';
                                            const divCol2 = document.createElement('div');
                                            divCol2.className = 'col-4';
                                            divCol2.style.padding = '5px';
                                            const divCol3 = document.createElement('div');
                                            divCol3.className = 'col-3';
                                            divCol3.style.padding = '5px';
                                            const divCol4 = document.createElement('div');
                                            divCol4.className = 'col-2';
                                            divCol4.style.padding = '5px';
                                            divCol4.onclick = () =>{
                                                if (this.state.pagar.length == 1){
                                                    const tabla = document.getElementById('carritoBody');
                                                    tabla.innerHTML = '';
                                                    const h4 = document.createElement('h4');
                                                    h4.style.textAlign = 'center';
                                                    h4.style.fontWeight = 'bold';
                                                    h4.style.marginBottom = '40px';
                                                    h4.style.marginTop = '20px';
                                                    const h4Text = document.createTextNode('No has agregado productos');
                                                    h4.appendChild(h4Text);
                                                    tabla.appendChild(h4);

                                                    const img = document.createElement('img');
                                                    img.src = "https://res.cloudinary.com/indev/image/upload/v1587361319/frutas/WhatsApp_Image_2020-04-19_at_23.40.56_wmrt9q.jpg";
                                                    img.style.width = "65%";
                                                    img.style.display= 'block';
                                                    img.style.margin = '0 auto';
                                                    tabla.appendChild(img);
                                                    this.setState({pagar: []});
                                                    window.sessionStorage.removeItem('array');

                                                    document.getElementById('precioCarro').innerHTML = '$0';
                                                    window.localStorage.setItem('totalPagar', '0');

                                                } else {
                                                    tabla.removeChild(divRow);
                                                    const array = JSON.parse(window.sessionStorage.getItem('array'));
                                                    array.splice(i, 1);
                                                    this.state.pagar.splice(i, 1);
                                                    window.sessionStorage.setItem('array', JSON.stringify(array));

                                                    const resta = parseFloat(window.localStorage.getItem('totalPagar')).toFixed(2) - suma;
                                                    document.getElementById('precioCarro').innerHTML = '$'+(resta).toFixed(2).toString();
                                                    window.localStorage.setItem('totalPagar', (resta).toFixed(2).toString());
                                                    document.getElementById('descuentof').innerHTML = '';
                                                    document.getElementById('totalPagarYa').innerHTML = '$'+resta.toFixed(2);
                                                    window.localStorage.removeItem('cupon');
                                                }
                                            };
                                            divRow.appendChild(divCol1);
                                            divRow.appendChild(divCol2);
                                            divRow.appendChild(divCol3);
                                            divRow.appendChild(divCol4);
                        
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

                                            // Quitar Productos
                                            const x = document.createElement('i');
                                            x.className = "fas fa-times";
                                            x.style.display = "block";
                                            x.style.margin = '0 auto';
                                            x.style.marginTop = "25px";
                                            x.style.width = "20px";
                                            x.lang = i;
                                            divCol4.appendChild(x);
                                            
                                            // agregar todo
                                            tabla.appendChild(divRow);
                        
                                            // TOTAL
                                            document.getElementById('precioCarro').innerHTML = '$'+(total +2 ).toFixed(2).toString();
                                            window.localStorage.setItem('totalPagar', +(total +2 ).toFixed(2).toString());
                                            document.getElementById('descuentof').innerHTML = '';
                                            document.getElementById('totalPagarYa').innerHTML = '$'+(total + 2).toFixed(2);
                                            window.localStorage.removeItem('cupon');
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
        document.getElementById('adminBusc').setAttribute('hidden', '');
        document.getElementById('serchWid').removeAttribute('hidden');

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
                if (fruta[i].disponible == "true"){
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
                    img.lang = fruta[i].id;
                    img.style.maxHeight = '157px';
                    img.style.minHeight = '157px';
                    if (fruta[i].descripcion) {
                        img.setAttribute("data-toggle", "modal");
                        img.setAttribute("data-target", "#exampleModalCenter");
                        img.onclick = (event) => {
                            var imgModal = document.getElementById('imgModal');
                            imgModal.innerHTML="";
                            var datosModal = document.getElementById('datosModal');

                            datosModal.innerHTML="";
                            document.getElementById("exampleModalCenterTitle").innerHTML=fruta[i].nombre.toUpperCase();
                            var img = document.createElement('img');
                            img.src=fruta[i].img;
                            img.style.width="100%";
                            imgModal.appendChild(img);
                            var nombre= document.createElement('h4');
                            nombre.innerHTML=fruta[i].nombre.toUpperCase();
                            datosModal.appendChild(nombre);
                            var precio= document.createElement('p');
                            var textPrice = document.createTextNode('Precio: $'+fruta[i].precio);
                            precio.appendChild(textPrice);
                            datosModal.appendChild(precio);
                            var descrip = document.createElement('p');
                            descrip.style.marginTop = '20px';
                            descrip.style.textAlign = 'left';
                            var descripText = document.createTextNode(fruta[i].descripcion);
                            descrip.appendChild(descripText);
                            datosModal.appendChild(descrip);
                        };
                    };
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
                    bot.lang = fruta[i].Unidad;
                    bot.onclick = (add) =>{
                        if (this.state.value > 0) {

                            document.getElementById(add.currentTarget.id).style.animation = "miAnimacion2 3s";
                            document.getElementById(add.currentTarget.id).innerHTML = "Listo";
            
                            const objectAux = {
                                img: '',
                                nombre: '',
                                precio: '', 
                                cantidad: '',
                                id: '',
                                unidad: ''
                            }
            
                            objectAux.img = add.currentTarget.id.slice(0, -fruta[i].id.length);
                            objectAux.nombre = this.state.nombre.slice(0, (-this.state.id.length));
                            objectAux.precio = add.currentTarget.name;
                            objectAux.cantidad = this.state.value;
                            objectAux.id = this.state.id;
                            objectAux.unidad = add.currentTarget.lang;
            
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
                                divCol1.className = 'col-3';
                                divCol1.style.padding = '5px';
                                const divCol2 = document.createElement('div');
                                divCol2.className = 'col-4';
                                divCol2.style.padding = '5px';
                                const divCol3 = document.createElement('div');
                                divCol3.className = 'col-3';
                                divCol3.style.padding = '5px';
                                const divCol4 = document.createElement('div');
                                divCol4.className = 'col-2';
                                divCol4.style.padding = '5px';
                                divCol4.onclick = () =>{
                                    if (this.state.pagar.length == 1){
                                        const tabla = document.getElementById('carritoBody');
                                        tabla.innerHTML = '';
                                        const h4 = document.createElement('h4');
                                        h4.style.textAlign = 'center';
                                        h4.style.fontWeight = 'bold';
                                        h4.style.marginBottom = '40px';
                                        h4.style.marginTop = '20px';
                                        const h4Text = document.createTextNode('No has agregado productos');
                                        h4.appendChild(h4Text);
                                        tabla.appendChild(h4);
            
                                        const img = document.createElement('img');
                                        img.src = "https://res.cloudinary.com/indev/image/upload/v1587361319/frutas/WhatsApp_Image_2020-04-19_at_23.40.56_wmrt9q.jpg";
                                        img.style.width = "65%";
                                        img.style.display= 'block';
                                        img.style.margin = '0 auto';
                                        tabla.appendChild(img);
                                        this.setState({pagar: []});
                                        window.sessionStorage.removeItem('array');
            
                                        document.getElementById('precioCarro').innerHTML = '$0';
                                        window.localStorage.setItem('totalPagar', '0');
            
                                    } else {
                                        tabla.removeChild(divRow);
                                        const array = JSON.parse(window.sessionStorage.getItem('array'));
                                        array.splice(i, 1);
                                        this.state.pagar.splice(i, 1);
                                        window.sessionStorage.setItem('array', JSON.stringify(array));
            
                                        const resta = parseFloat(window.localStorage.getItem('totalPagar')).toFixed(2) - suma;
                                        document.getElementById('precioCarro').innerHTML = '$'+(resta).toFixed(2).toString();
                                        window.localStorage.setItem('totalPagar', (resta).toFixed(2).toString());
                                        document.getElementById('descuentof').innerHTML = '';
                                        document.getElementById('totalPagarYa').innerHTML = '$'+resta.toFixed(2);
                                        window.localStorage.removeItem('cupon');
                                    }
                                };
                                divRow.appendChild(divCol1);
                                divRow.appendChild(divCol2);
                                divRow.appendChild(divCol3);
                                divRow.appendChild(divCol4);
            
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

                                // Quitar Productos
                                const x = document.createElement('i');
                                x.className = "fas fa-times";
                                x.style.display = "block";
                                x.style.margin = '0 auto';
                                x.style.marginTop = "25px";
                                x.style.width = "20px";
                                x.lang = i;
                                divCol4.appendChild(x);
            
                                // agregar todo
                                tabla.appendChild(divRow);
            
                                // TOTAL
                                document.getElementById('precioCarro').innerHTML = '$'+(total +2 ).toFixed(2).toString();
                                window.localStorage.setItem('totalPagar', +(total +2 ).toFixed(2).toString());
                                document.getElementById('descuentof').innerHTML = '';
                                document.getElementById('totalPagarYa').innerHTML = '$'+(total + 2).toFixed(2);
                                window.localStorage.removeItem('cupon');
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
        }));
    }

    abarrotes () {
        document.getElementById('abarrotes').style.animation = "carrusel2 0.3s";
        setTimeout(function() {document.getElementById('abarrotes').style.animation = "none";}, 300);
        document.getElementById('adminBusc').setAttribute('hidden', '');
        document.getElementById('serchWid').removeAttribute('hidden');

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
                if (fruta[i].disponible == "true"){
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
                    img.lang = fruta[i].id;
                    img.style.maxHeight = '157px';
                    img.style.minHeight = '157px';
                    if (fruta[i].descripcion) {
                        img.setAttribute("data-toggle", "modal");
                        img.setAttribute("data-target", "#exampleModalCenter");
                        img.onclick = (event) => {
                            var imgModal = document.getElementById('imgModal');
                            imgModal.innerHTML="";
                            var datosModal = document.getElementById('datosModal');

                            datosModal.innerHTML="";
                            document.getElementById("exampleModalCenterTitle").innerHTML=fruta[i].nombre.toUpperCase();
                            var img = document.createElement('img');
                            img.src=fruta[i].img;
                            img.style.width="100%";
                            imgModal.appendChild(img);
                            var nombre= document.createElement('h4');
                            nombre.innerHTML=fruta[i].nombre.toUpperCase();
                            datosModal.appendChild(nombre);
                            var precio= document.createElement('p');
                            var textPrice = document.createTextNode('Precio: $'+fruta[i].precio);
                            precio.appendChild(textPrice);
                            datosModal.appendChild(precio);
                            var descrip = document.createElement('p');
                            descrip.style.marginTop = '20px';
                            descrip.style.textAlign = 'left';
                            var descripText = document.createTextNode(fruta[i].descripcion);
                            descrip.appendChild(descripText);
                            datosModal.appendChild(descrip);
                        };
                    };
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
                    bot.lang = fruta[i].Unidad;
                    bot.onclick = (add) =>{
                        if (this.state.value > 0) {

                            document.getElementById(add.currentTarget.id).style.animation = "miAnimacion2 3s";
                            document.getElementById(add.currentTarget.id).innerHTML = "Listo";
            
                            const objectAux = {
                                img: '',
                                nombre: '',
                                precio: '', 
                                cantidad: '',
                                id: '',
                                unidad: ''
                            }
            
                            objectAux.img = add.currentTarget.id.slice(0, -fruta[i].id.length);
                            objectAux.nombre = this.state.nombre.slice(0, (-this.state.id.length));
                            objectAux.precio = add.currentTarget.name;
                            objectAux.cantidad = this.state.value;
                            objectAux.id = this.state.id;
                            objectAux.unidad = add.currentTarget.lang;
            
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
                                divCol1.className = 'col-3';
                                divCol1.style.padding = '5px';
                                const divCol2 = document.createElement('div');
                                divCol2.className = 'col-4';
                                divCol2.style.padding = '5px';
                                const divCol3 = document.createElement('div');
                                divCol3.className = 'col-3';
                                divCol3.style.padding = '5px';
                                const divCol4 = document.createElement('div');
                                divCol4.className = 'col-2';
                                divCol4.style.padding = '5px';
                                divCol4.onclick = () =>{
                                    if (this.state.pagar.length == 1){
                                        const tabla = document.getElementById('carritoBody');
                                        tabla.innerHTML = '';
                                        const h4 = document.createElement('h4');
                                        h4.style.textAlign = 'center';
                                        h4.style.fontWeight = 'bold';
                                        h4.style.marginBottom = '40px';
                                        h4.style.marginTop = '20px';
                                        const h4Text = document.createTextNode('No has agregado productos');
                                        h4.appendChild(h4Text);
                                        tabla.appendChild(h4);
            
                                        const img = document.createElement('img');
                                        img.src = "https://res.cloudinary.com/indev/image/upload/v1587361319/frutas/WhatsApp_Image_2020-04-19_at_23.40.56_wmrt9q.jpg";
                                        img.style.width = "65%";
                                        img.style.display= 'block';
                                        img.style.margin = '0 auto';
                                        tabla.appendChild(img);
                                        this.setState({pagar: []});
                                        window.sessionStorage.removeItem('array');
            
                                        document.getElementById('precioCarro').innerHTML = '$0';
                                        window.localStorage.setItem('totalPagar', '0');
            
                                    } else {
                                        tabla.removeChild(divRow);
                                        const array = JSON.parse(window.sessionStorage.getItem('array'));
                                        array.splice(i, 1);
                                        this.state.pagar.splice(i, 1);
                                        window.sessionStorage.setItem('array', JSON.stringify(array));
            
                                        const resta = parseFloat(window.localStorage.getItem('totalPagar')).toFixed(2) - suma;
                                        document.getElementById('precioCarro').innerHTML = '$'+(resta).toFixed(2).toString();
                                        window.localStorage.setItem('totalPagar', (resta).toFixed(2).toString());
                                        document.getElementById('descuentof').innerHTML = '';
                                        document.getElementById('totalPagarYa').innerHTML = '$'+resta.toFixed(2);
                                        window.localStorage.removeItem('cupon');
                                    }
                                };
                                divRow.appendChild(divCol1);
                                divRow.appendChild(divCol2);
                                divRow.appendChild(divCol3);
                                divRow.appendChild(divCol4);
            
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

                                // Quitar Productos
                                const x = document.createElement('i');
                                x.className = "fas fa-times";
                                x.style.display = "block";
                                x.style.margin = '0 auto';
                                x.style.marginTop = "25px";
                                x.style.width = "20px";
                                x.lang = i;
                                divCol4.appendChild(x);
                    
                                // agregar todo
                                tabla.appendChild(divRow);
            
                                // TOTAL
                                document.getElementById('precioCarro').innerHTML = '$'+(total +2 ).toFixed(2).toString();
                                window.localStorage.setItem('totalPagar', +(total +2 ).toFixed(2).toString());
                                document.getElementById('descuentof').innerHTML = '';
                                document.getElementById('totalPagarYa').innerHTML = '$'+(total + 2).toFixed(2);
                                window.localStorage.removeItem('cupon');
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
        }));
    }

    empren () {
        document.getElementById('empren').style.animation = "carrusel2 0.3s";
        setTimeout(function() {document.getElementById('empren').style.animation = "none";}, 300);
        document.getElementById('adminBusc').setAttribute('hidden', '');
        document.getElementById('serchWid').removeAttribute('hidden');

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
        .get('https://prueba-next-u-react.firebaseio.com/productos/Emprendimientos.json')
        .set('Content-Type','aplication/json') 
        .then((res => {
            const fruta = res.body;
            const tabla = document.getElementById('dibujar');
            const n = fruta.length;
            tabla.innerHTML = '';
            for (let i = 0;  i < n; i++) {
                if (fruta[i].disponible == "true"){
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
                    img.lang = fruta[i].id;
                    img.style.maxHeight = '157px';
                    img.style.minHeight = '157px';
                    if (fruta[i].descripcion) {
                        img.setAttribute("data-toggle", "modal");
                        img.setAttribute("data-target", "#exampleModalCenter");
                        img.onclick = (event) => {
                            var imgModal = document.getElementById('imgModal');
                            imgModal.innerHTML="";
                            var datosModal = document.getElementById('datosModal');

                            datosModal.innerHTML="";
                            document.getElementById("exampleModalCenterTitle").innerHTML=fruta[i].nombre.toUpperCase();
                            var img = document.createElement('img');
                            img.src=fruta[i].img;
                            img.style.width="100%";
                            imgModal.appendChild(img);
                            var nombre= document.createElement('h4');
                            nombre.innerHTML=fruta[i].nombre.toUpperCase();
                            datosModal.appendChild(nombre);
                            var precio= document.createElement('p');
                            var textPrice = document.createTextNode('Precio: $'+fruta[i].precio);
                            precio.appendChild(textPrice);
                            datosModal.appendChild(precio);
                            var descrip = document.createElement('p');
                            descrip.style.marginTop = '20px';
                            descrip.style.textAlign = 'left';
                            var descripText = document.createTextNode(fruta[i].descripcion);
                            descrip.appendChild(descripText);
                            datosModal.appendChild(descrip);
                        };
                    };
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
                    bot.lang = fruta[i].Unidad;
                    bot.onclick = (add) =>{
                        if (this.state.value > 0) {

                            document.getElementById(add.currentTarget.id).style.animation = "miAnimacion2 3s";
                            document.getElementById(add.currentTarget.id).innerHTML = "Listo";
            
                            const objectAux = {
                                img: '',
                                nombre: '',
                                precio: '', 
                                cantidad: '',
                                id: '',
                                unidad: ''
                            }
            
                            objectAux.img = add.currentTarget.id.slice(0, -fruta[i].id.length);
                            objectAux.nombre = this.state.nombre.slice(0, (-this.state.id.length));
                            objectAux.precio = add.currentTarget.name;
                            objectAux.cantidad = this.state.value;
                            objectAux.id = this.state.id;
                            objectAux.unidad = add.currentTarget.lang;
            
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
                                divCol1.className = 'col-3';
                                divCol1.style.padding = '5px';
                                const divCol2 = document.createElement('div');
                                divCol2.className = 'col-4';
                                divCol2.style.padding = '5px';
                                const divCol3 = document.createElement('div');
                                divCol3.className = 'col-3';
                                divCol3.style.padding = '5px';
                                const divCol4 = document.createElement('div');
                                divCol4.className = 'col-2';
                                divCol4.style.padding = '5px';
                                divCol4.onclick = () =>{
                                    if (this.state.pagar.length == 1){
                                        const tabla = document.getElementById('carritoBody');
                                        tabla.innerHTML = '';
                                        const h4 = document.createElement('h4');
                                        h4.style.textAlign = 'center';
                                        h4.style.fontWeight = 'bold';
                                        h4.style.marginBottom = '40px';
                                        h4.style.marginTop = '20px';
                                        const h4Text = document.createTextNode('No has agregado productos');
                                        h4.appendChild(h4Text);
                                        tabla.appendChild(h4);
            
                                        const img = document.createElement('img');
                                        img.src = "https://res.cloudinary.com/indev/image/upload/v1587361319/frutas/WhatsApp_Image_2020-04-19_at_23.40.56_wmrt9q.jpg";
                                        img.style.width = "65%";
                                        img.style.display= 'block';
                                        img.style.margin = '0 auto';
                                        tabla.appendChild(img);
                                        this.setState({pagar: []});
                                        window.sessionStorage.removeItem('array');
            
                                        document.getElementById('precioCarro').innerHTML = '$0';
                                        window.localStorage.setItem('totalPagar', '0');
            
                                    } else {
                                        tabla.removeChild(divRow);
                                        const array = JSON.parse(window.sessionStorage.getItem('array'));
                                        array.splice(i, 1);
                                        this.state.pagar.splice(i, 1);
                                        window.sessionStorage.setItem('array', JSON.stringify(array));
            
                                        const resta = parseFloat(window.localStorage.getItem('totalPagar')).toFixed(2) - suma;
                                        document.getElementById('precioCarro').innerHTML = '$'+(resta).toFixed(2).toString();
                                        window.localStorage.setItem('totalPagar', (resta).toFixed(2).toString());
                                        document.getElementById('descuentof').innerHTML = '';
                                        document.getElementById('totalPagarYa').innerHTML = '$'+resta.toFixed(2);
                                        window.localStorage.removeItem('cupon');
                                    }
                                };
                                divRow.appendChild(divCol1);
                                divRow.appendChild(divCol2);
                                divRow.appendChild(divCol3);
                                divRow.appendChild(divCol4);
            
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

                                // Quitar Productos
                                const x = document.createElement('i');
                                x.className = "fas fa-times";
                                x.style.display = "block";
                                x.style.margin = '0 auto';
                                x.style.marginTop = "25px";
                                x.style.width = "20px";
                                x.lang = i;
                                divCol4.appendChild(x);
                    
                                // agregar todo
                                tabla.appendChild(divRow);
            
                                // TOTAL
                                document.getElementById('precioCarro').innerHTML = '$'+(total +2 ).toFixed(2).toString();
                                window.localStorage.setItem('totalPagar', +(total +2 ).toFixed(2).toString());
                                document.getElementById('descuentof').innerHTML = '';
                                document.getElementById('totalPagarYa').innerHTML = '$'+(total + 2).toFixed(2);
                                window.localStorage.removeItem('cupon');
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
        }));
    }

    leche () {
        document.getElementById('lyh').style.animation = "carrusel2 0.3s";
        setTimeout(function() {document.getElementById('lyh').style.animation = "none";}, 300);
        document.getElementById('adminBusc').setAttribute('hidden', '');
        document.getElementById('serchWid').removeAttribute('hidden');

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
                if (fruta[i].disponible == "true"){
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
                    img.lang = fruta[i].id;
                    img.style.maxHeight = '157px';
                    img.style.minHeight = '157px';
                    if (fruta[i].descripcion) {
                        img.setAttribute("data-toggle", "modal");
                        img.setAttribute("data-target", "#exampleModalCenter");
                        img.onclick = (event) => {
                            var imgModal = document.getElementById('imgModal');
                            imgModal.innerHTML="";
                            var datosModal = document.getElementById('datosModal');

                            datosModal.innerHTML="";
                            document.getElementById("exampleModalCenterTitle").innerHTML=fruta[i].nombre.toUpperCase();
                            var img = document.createElement('img');
                            img.src=fruta[i].img;
                            img.style.width="100%";
                            imgModal.appendChild(img);
                            var nombre= document.createElement('h4');
                            nombre.innerHTML=fruta[i].nombre.toUpperCase();
                            datosModal.appendChild(nombre);
                            var precio= document.createElement('p');
                            var textPrice = document.createTextNode('Precio: $'+fruta[i].precio);
                            precio.appendChild(textPrice);
                            datosModal.appendChild(precio);
                            var descrip = document.createElement('p');
                            descrip.style.marginTop = '20px';
                            descrip.style.textAlign = 'left';
                            var descripText = document.createTextNode(fruta[i].descripcion);
                            descrip.appendChild(descripText);
                            datosModal.appendChild(descrip);
                        };
                    };
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
                    bot.lang = fruta[i].Unidad;
                    bot.onclick = (add) =>{
                        if (this.state.value > 0) {

                            document.getElementById(add.currentTarget.id).style.animation = "miAnimacion2 3s";
                            document.getElementById(add.currentTarget.id).innerHTML = "Listo";
            
                            const objectAux = {
                                img: '',
                                nombre: '',
                                precio: '', 
                                cantidad: '',
                                id: '',
                                unidad: ''
                            }
            
                            objectAux.img = add.currentTarget.id.slice(0, -fruta[i].id.length);
                            objectAux.nombre = this.state.nombre.slice(0, (-this.state.id.length));
                            objectAux.precio = add.currentTarget.name;
                            objectAux.cantidad = this.state.value;
                            objectAux.id = this.state.id;
                            objectAux.unidad = add.currentTarget.lang;
            
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
                                divCol1.className = 'col-3';
                                divCol1.style.padding = '5px';
                                const divCol2 = document.createElement('div');
                                divCol2.className = 'col-4';
                                divCol2.style.padding = '5px';
                                const divCol3 = document.createElement('div');
                                divCol3.className = 'col-3';
                                divCol3.style.padding = '5px';
                                const divCol4 = document.createElement('div');
                                divCol4.className = 'col-2';
                                divCol4.style.padding = '5px';
                                divCol4.onclick = () =>{
                                    if (this.state.pagar.length == 1){
                                        const tabla = document.getElementById('carritoBody');
                                        tabla.innerHTML = '';
                                        const h4 = document.createElement('h4');
                                        h4.style.textAlign = 'center';
                                        h4.style.fontWeight = 'bold';
                                        h4.style.marginBottom = '40px';
                                        h4.style.marginTop = '20px';
                                        const h4Text = document.createTextNode('No has agregado productos');
                                        h4.appendChild(h4Text);
                                        tabla.appendChild(h4);
            
                                        const img = document.createElement('img');
                                        img.src = "https://res.cloudinary.com/indev/image/upload/v1587361319/frutas/WhatsApp_Image_2020-04-19_at_23.40.56_wmrt9q.jpg";
                                        img.style.width = "65%";
                                        img.style.display= 'block';
                                        img.style.margin = '0 auto';
                                        tabla.appendChild(img);
                                        this.setState({pagar: []});
                                        window.sessionStorage.removeItem('array');
            
                                        document.getElementById('precioCarro').innerHTML = '$0';
                                        window.localStorage.setItem('totalPagar', '0');
            
                                    } else {
                                        tabla.removeChild(divRow);
                                        const array = JSON.parse(window.sessionStorage.getItem('array'));
                                        array.splice(i, 1);
                                        this.state.pagar.splice(i, 1);
                                        window.sessionStorage.setItem('array', JSON.stringify(array));
            
                                        const resta = parseFloat(window.localStorage.getItem('totalPagar')).toFixed(2) - suma;
                                        document.getElementById('precioCarro').innerHTML = '$'+(resta).toFixed(2).toString();
                                        window.localStorage.setItem('totalPagar', (resta).toFixed(2).toString());
                                        document.getElementById('descuentof').innerHTML = '';
                                        document.getElementById('totalPagarYa').innerHTML = '$' + resta.toFixed(2);
                                        window.localStorage.removeItem('cupon');
                                    }
                                };
                                divRow.appendChild(divCol1);
                                divRow.appendChild(divCol2);
                                divRow.appendChild(divCol3);
                                divRow.appendChild(divCol4);
            
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

                                // Quitar Productos
                                const x = document.createElement('i');
                                x.className = "fas fa-times";
                                x.style.display = "block";
                                x.style.margin = '0 auto';
                                x.style.marginTop = "25px";
                                x.style.width = "20px";
                                x.lang = i;
                                divCol4.appendChild(x);
            
                                // agregar todo
                                tabla.appendChild(divRow);
            
                                // TOTAL
                                document.getElementById('precioCarro').innerHTML = '$'+(total +2 ).toFixed(2).toString();
                                window.localStorage.setItem('totalPagar', +(total +2 ).toFixed(2).toString());
                                document.getElementById('descuentof').innerHTML = '';
                                document.getElementById('totalPagarYa').innerHTML = '$' + (total+2).toFixed(2);
                                window.localStorage.removeItem('cupon');
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
        }));
    }

    medicina () {
        document.getElementById('medicina').style.animation = "carrusel2 0.3s";
        setTimeout(function() {document.getElementById('medicina').style.animation = "none";}, 300);
        document.getElementById('adminBusc').setAttribute('hidden', '');
        document.getElementById('serchWid').removeAttribute('hidden');

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
                if (fruta[i].disponible == "true"){
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
                    img.lang = fruta[i].id;
                    img.style.maxHeight = '157px';
                    img.style.minHeight = '157px';
                    if (fruta[i].descripcion) {
                        img.setAttribute("data-toggle", "modal");
                        img.setAttribute("data-target", "#exampleModalCenter");
                        img.onclick = (event) => {
                            var imgModal = document.getElementById('imgModal');
                            imgModal.innerHTML="";
                            var datosModal = document.getElementById('datosModal');

                            datosModal.innerHTML="";
                            document.getElementById("exampleModalCenterTitle").innerHTML=fruta[i].nombre.toUpperCase();
                            var img = document.createElement('img');
                            img.src=fruta[i].img;
                            img.style.width="100%";
                            imgModal.appendChild(img);
                            var nombre= document.createElement('h4');
                            nombre.innerHTML=fruta[i].nombre.toUpperCase();
                            datosModal.appendChild(nombre);
                            var precio= document.createElement('p');
                            var textPrice = document.createTextNode('Precio: $'+fruta[i].precio);
                            precio.appendChild(textPrice);
                            datosModal.appendChild(precio);
                            var descrip = document.createElement('p');
                            descrip.style.marginTop = '20px';
                            descrip.style.textAlign = 'left';
                            var descripText = document.createTextNode(fruta[i].descripcion);
                            descrip.appendChild(descripText);
                            datosModal.appendChild(descrip);
                        };
                    };
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
                    bot.lang = fruta[i].Unidad;
                    bot.onclick = (add) =>{
                        if (this.state.value > 0) {

                            document.getElementById(add.currentTarget.id).style.animation = "miAnimacion2 3s";
                            document.getElementById(add.currentTarget.id).innerHTML = "Listo";
            
                            const objectAux = {
                                img: '',
                                nombre: '',
                                precio: '', 
                                cantidad: '',
                                id: '',
                                unidad: ''
                            }
            
                            objectAux.img = add.currentTarget.id.slice(0, -fruta[i].id.length);
                            objectAux.nombre = this.state.nombre.slice(0, (-this.state.id.length));
                            objectAux.precio = add.currentTarget.name;
                            objectAux.cantidad = this.state.value;
                            objectAux.id = this.state.id;
                            objectAux.unidad = add.currentTarget.lang;
            
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
                                divCol1.className = 'col-3';
                                divCol1.style.padding = '5px';
                                const divCol2 = document.createElement('div');
                                divCol2.className = 'col-4';
                                divCol2.style.padding = '5px';
                                const divCol3 = document.createElement('div');
                                divCol3.className = 'col-3';
                                divCol3.style.padding = '5px';
                                const divCol4 = document.createElement('div');
                                divCol4.className = 'col-2';
                                divCol4.style.padding = '5px';
                                divCol4.onclick = () =>{
                                    if (this.state.pagar.length == 1){
                                        const tabla = document.getElementById('carritoBody');
                                        tabla.innerHTML = '';
                                        const h4 = document.createElement('h4');
                                        h4.style.textAlign = 'center';
                                        h4.style.fontWeight = 'bold';
                                        h4.style.marginBottom = '40px';
                                        h4.style.marginTop = '20px';
                                        const h4Text = document.createTextNode('No has agregado productos');
                                        h4.appendChild(h4Text);
                                        tabla.appendChild(h4);
            
                                        const img = document.createElement('img');
                                        img.src = "https://res.cloudinary.com/indev/image/upload/v1587361319/frutas/WhatsApp_Image_2020-04-19_at_23.40.56_wmrt9q.jpg";
                                        img.style.width = "65%";
                                        img.style.display= 'block';
                                        img.style.margin = '0 auto';
                                        tabla.appendChild(img);
                                        this.setState({pagar: []});
                                        window.sessionStorage.removeItem('array');
            
                                        document.getElementById('precioCarro').innerHTML = '$0';
                                        window.localStorage.setItem('totalPagar', '0');
            
                                    } else {
                                        tabla.removeChild(divRow);
                                        const array = JSON.parse(window.sessionStorage.getItem('array'));
                                        array.splice(i, 1);
                                        this.state.pagar.splice(i, 1);
                                        window.sessionStorage.setItem('array', JSON.stringify(array));
            
                                        const resta = parseFloat(window.localStorage.getItem('totalPagar')).toFixed(2) - suma;
                                        document.getElementById('precioCarro').innerHTML = '$'+(resta).toFixed(2).toString();
                                        window.localStorage.setItem('totalPagar', (resta).toFixed(2).toString());
                                        document.getElementById('descuentof').innerHTML = '';
                                        document.getElementById('totalPagarYa').innerHTML = '$'+resta.toFixed(2);
                                        window.localStorage.removeItem('cupon');
                                    }
                                };
                                divRow.appendChild(divCol1);
                                divRow.appendChild(divCol2);
                                divRow.appendChild(divCol3);
                                divRow.appendChild(divCol4);
            
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

                                // Quitar Productos
                                const x = document.createElement('i');
                                x.className = "fas fa-times";
                                x.style.display = "block";
                                x.style.margin = '0 auto';
                                x.style.marginTop = "25px";
                                x.style.width = "20px";
                                x.lang = i;
                                divCol4.appendChild(x);
            
                                // agregar todo
                                tabla.appendChild(divRow);
            
                                // TOTAL
                                document.getElementById('precioCarro').innerHTML = '$'+(total +2 ).toFixed(2).toString();
                                window.localStorage.setItem('totalPagar', +(total +2 ).toFixed(2).toString());
                                document.getElementById('descuentof').innerHTML = '';
                                document.getElementById('totalPagarYa').innerHTML = '$'+(total + 2).toFixed(2);
                                window.localStorage.removeItem('cupon');
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
        }));
    }

    vegetales () {
        document.getElementById('vegetales').style.animation = "carrusel2 0.3s";
        setTimeout(function() {document.getElementById('vegetales').style.animation = "none";}, 300);
        document.getElementById('adminBusc').setAttribute('hidden', '');
        document.getElementById('serchWid').removeAttribute('hidden');

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
            console.log(res.body);
            const fruta = res.body;
            const tabla = document.getElementById('dibujar');
            const n = fruta.length;
            tabla.innerHTML = '';
            for (let i = 0;  i < n; i++) {
                if (fruta[i].disponible == "true"){
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
                    img.lang = fruta[i].id;
                    img.style.maxHeight = '157px';
                    img.style.minHeight = '157px';
                    if (fruta[i].descripcion) {
                        img.setAttribute("data-toggle", "modal");
                        img.setAttribute("data-target", "#exampleModalCenter");
                        img.onclick = (event) => {
                            var imgModal = document.getElementById('imgModal');
                            imgModal.innerHTML="";
                            var datosModal = document.getElementById('datosModal');

                            datosModal.innerHTML="";
                            document.getElementById("exampleModalCenterTitle").innerHTML=fruta[i].nombre.toUpperCase();
                            var img = document.createElement('img');
                            img.src=fruta[i].img;
                            img.style.width="100%";
                            imgModal.appendChild(img);
                            var nombre= document.createElement('h4');
                            nombre.innerHTML=fruta[i].nombre.toUpperCase();
                            datosModal.appendChild(nombre);
                            var precio= document.createElement('p');
                            var textPrice = document.createTextNode('Precio: $'+fruta[i].precio);
                            precio.appendChild(textPrice);
                            datosModal.appendChild(precio);
                            var descrip = document.createElement('p');
                            descrip.style.marginTop = '20px';
                            descrip.style.textAlign = 'left';
                            var descripText = document.createTextNode(fruta[i].descripcion);
                            descrip.appendChild(descripText);
                            datosModal.appendChild(descrip);
                        };
                    };
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
                    bot.lang = fruta[i].Unidad;
                    bot.onclick = (add) =>{
                        if (this.state.value > 0) {

                            document.getElementById(add.currentTarget.id).style.animation = "miAnimacion2 3s";
                            document.getElementById(add.currentTarget.id).innerHTML = "Listo";
            
                            const objectAux = {
                                img: '',
                                nombre: '',
                                precio: '', 
                                cantidad: '',
                                id: '',
                                unidad: ''
                            }
            
                            objectAux.img = add.currentTarget.id.slice(0, -fruta[i].id.length);
                            objectAux.nombre = this.state.nombre.slice(0, (-this.state.id.length));
                            objectAux.precio = add.currentTarget.name;
                            objectAux.cantidad = this.state.value;
                            objectAux.id = this.state.id;
                            objectAux.unidad = add.currentTarget.lang;
            
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
                                divCol1.className = 'col-3';
                                divCol1.style.padding = '5px';
                                const divCol2 = document.createElement('div');
                                divCol2.className = 'col-4';
                                divCol2.style.padding = '5px';
                                const divCol3 = document.createElement('div');
                                divCol3.className = 'col-3';
                                divCol3.style.padding = '5px';
                                const divCol4 = document.createElement('div');
                                divCol4.className = 'col-2';
                                divCol4.style.padding = '5px';
                                divCol4.onclick = () =>{
                                    if (this.state.pagar.length == 1){
                                        const tabla = document.getElementById('carritoBody');
                                        tabla.innerHTML = '';
                                        const h4 = document.createElement('h4');
                                        h4.style.textAlign = 'center';
                                        h4.style.fontWeight = 'bold';
                                        h4.style.marginBottom = '40px';
                                        h4.style.marginTop = '20px';
                                        const h4Text = document.createTextNode('No has agregado productos');
                                        h4.appendChild(h4Text);
                                        tabla.appendChild(h4);
            
                                        const img = document.createElement('img');
                                        img.src = "https://res.cloudinary.com/indev/image/upload/v1587361319/frutas/WhatsApp_Image_2020-04-19_at_23.40.56_wmrt9q.jpg";
                                        img.style.width = "65%";
                                        img.style.display= 'block';
                                        img.style.margin = '0 auto';
                                        tabla.appendChild(img);
                                        this.setState({pagar: []});
                                        window.sessionStorage.removeItem('array');
            
                                        document.getElementById('precioCarro').innerHTML = '$0';
                                        window.localStorage.setItem('totalPagar', '0');
            
                                    } else {
                                        tabla.removeChild(divRow);
                                        const array = JSON.parse(window.sessionStorage.getItem('array'));
                                        array.splice(i, 1);
                                        this.state.pagar.splice(i, 1);
                                        window.sessionStorage.setItem('array', JSON.stringify(array));
            
                                        const resta = parseFloat(window.localStorage.getItem('totalPagar')).toFixed(2) - suma;
                                        document.getElementById('precioCarro').innerHTML = '$'+(resta).toFixed(2).toString();
                                        window.localStorage.setItem('totalPagar', (resta).toFixed(2).toString());
                                        document.getElementById('descuentof').innerHTML = '';
                                        document.getElementById('totalPagarYa').innerHTML = '$'+resta.toFixed(2);
                                        window.localStorage.removeItem('cupon');
                                    }
                                };
                                divRow.appendChild(divCol1);
                                divRow.appendChild(divCol2);
                                divRow.appendChild(divCol3);
                                divRow.appendChild(divCol4);
            
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

                                // Quitar Productos
                                const x = document.createElement('i');
                                x.className = "fas fa-times";
                                x.style.display = "block";
                                x.style.margin = '0 auto';
                                x.style.marginTop = "25px";
                                x.style.width = "20px";
                                x.lang = i;
                                divCol4.appendChild(x);
            
                                // agregar todo
                                tabla.appendChild(divRow);
            
                                // TOTAL
                                document.getElementById('precioCarro').innerHTML = '$'+(total +2 ).toFixed(2).toString();
                                window.localStorage.setItem('totalPagar', +(total +2 ).toFixed(2).toString());
                                document.getElementById('descuentof').innerHTML = '';
                                document.getElementById('totalPagarYa').innerHTML = '$'+(total + 2).toFixed(2);
                                window.localStorage.removeItem('cupon');
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
        }));
    }

    pan () {
        document.getElementById('pan').style.animation = "carrusel2 0.3s";
        setTimeout(function() {document.getElementById('pan').style.animation = "none";}, 300);
        document.getElementById('adminBusc').setAttribute('hidden', '');
        document.getElementById('serchWid').removeAttribute('hidden');

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
                if (fruta[i].disponible == "true"){
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
                    img.lang = fruta[i].id;
                    img.style.maxHeight = '157px';
                    img.style.minHeight = '157px';
                    if (fruta[i].descripcion) {
                        img.setAttribute("data-toggle", "modal");
                        img.setAttribute("data-target", "#exampleModalCenter");
                        img.onclick = (event) => {
                            var imgModal = document.getElementById('imgModal');
                            imgModal.innerHTML="";
                            var datosModal = document.getElementById('datosModal');

                            datosModal.innerHTML="";
                            document.getElementById("exampleModalCenterTitle").innerHTML=fruta[i].nombre.toUpperCase();
                            var img = document.createElement('img');
                            img.src=fruta[i].img;
                            img.style.width="100%";
                            imgModal.appendChild(img);
                            var nombre= document.createElement('h4');
                            nombre.innerHTML=fruta[i].nombre.toUpperCase();
                            datosModal.appendChild(nombre);
                            var precio= document.createElement('p');
                            var textPrice = document.createTextNode('Precio: $'+fruta[i].precio);
                            precio.appendChild(textPrice);
                            datosModal.appendChild(precio);
                            var descrip = document.createElement('p');
                            descrip.style.marginTop = '20px';
                            descrip.style.textAlign = 'left';
                            var descripText = document.createTextNode(fruta[i].descripcion);
                            descrip.appendChild(descripText);
                            datosModal.appendChild(descrip);
                        };
                    };
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
                    bot.lang = fruta[i].Unidad;
                    bot.onclick = (add) =>{
                        if (this.state.value > 0) {

                            document.getElementById(add.currentTarget.id).style.animation = "miAnimacion2 3s";
                            document.getElementById(add.currentTarget.id).innerHTML = "Listo";
            
                            const objectAux = {
                                img: '',
                                nombre: '',
                                precio: '', 
                                cantidad: '',
                                id: '',
                                unidad: ''
                            }
            
                            objectAux.img = add.currentTarget.id.slice(0, -fruta[i].id.length);
                            objectAux.nombre = this.state.nombre.slice(0, (-this.state.id.length));
                            objectAux.precio = add.currentTarget.name;
                            objectAux.cantidad = this.state.value;
                            objectAux.id = this.state.id;
                            objectAux.unidad = add.currentTarget.lang;
            
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
                                divCol1.className = 'col-3';
                                divCol1.style.padding = '5px';
                                const divCol2 = document.createElement('div');
                                divCol2.className = 'col-4';
                                divCol2.style.padding = '5px';
                                const divCol3 = document.createElement('div');
                                divCol3.className = 'col-3';
                                divCol3.style.padding = '5px';
                                const divCol4 = document.createElement('div');
                                divCol4.className = 'col-2';
                                divCol4.style.padding = '5px';
                                divCol4.onclick = () =>{
                                    if (this.state.pagar.length == 1){
                                        const tabla = document.getElementById('carritoBody');
                                        tabla.innerHTML = '';
                                        const h4 = document.createElement('h4');
                                        h4.style.textAlign = 'center';
                                        h4.style.fontWeight = 'bold';
                                        h4.style.marginBottom = '40px';
                                        h4.style.marginTop = '20px';
                                        const h4Text = document.createTextNode('No has agregado productos');
                                        h4.appendChild(h4Text);
                                        tabla.appendChild(h4);
            
                                        const img = document.createElement('img');
                                        img.src = "https://res.cloudinary.com/indev/image/upload/v1587361319/frutas/WhatsApp_Image_2020-04-19_at_23.40.56_wmrt9q.jpg";
                                        img.style.width = "65%";
                                        img.style.display= 'block';
                                        img.style.margin = '0 auto';
                                        tabla.appendChild(img);
                                        this.setState({pagar: []});
                                        window.sessionStorage.removeItem('array');
            
                                        document.getElementById('precioCarro').innerHTML = '$0';
                                        window.localStorage.setItem('totalPagar', '0');
            
                                    } else {
                                        tabla.removeChild(divRow);
                                        const array = JSON.parse(window.sessionStorage.getItem('array'));
                                        array.splice(i, 1);
                                        this.state.pagar.splice(i, 1);
                                        window.sessionStorage.setItem('array', JSON.stringify(array));
            
                                        const resta = parseFloat(window.localStorage.getItem('totalPagar')).toFixed(2) - suma;
                                        document.getElementById('precioCarro').innerHTML = '$'+(resta).toFixed(2).toString();
                                        window.localStorage.setItem('totalPagar', (resta).toFixed(2).toString());
                                        document.getElementById('descuentof').innerHTML = '';
                                        document.getElementById('totalPagarYa').innerHTML = '$'+resta.toFixed(2);
                                        window.localStorage.removeItem('cupon');
                                    }
                                };
                                divRow.appendChild(divCol1);
                                divRow.appendChild(divCol2);
                                divRow.appendChild(divCol3);
                                divRow.appendChild(divCol4);
            
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

                                // Quitar Productos
                                const x = document.createElement('i');
                                x.className = "fas fa-times";
                                x.style.display = "block";
                                x.style.margin = '0 auto';
                                x.style.marginTop = "25px";
                                x.style.width = "20px";
                                x.lang = i;
                                divCol4.appendChild(x);
            
                                // agregar todo
                                tabla.appendChild(divRow);
            
                                // TOTAL
                                document.getElementById('precioCarro').innerHTML = '$'+(total +2 ).toFixed(2).toString();
                                window.localStorage.setItem('totalPagar', +(total +2 ).toFixed(2).toString());
                                document.getElementById('descuentof').innerHTML = '';
                                document.getElementById('totalPagarYa').innerHTML = '$'+(total + 2).toFixed(2);
                                window.localStorage.removeItem('cupon');
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
        }));
    }

    donaciones () {
        document.getElementById('donaciones').style.animation = "carrusel2 0.3s";
        setTimeout(function() {document.getElementById('donaciones').style.animation = "none";}, 300);
        document.getElementById('adminBusc').setAttribute('hidden', '');
        document.getElementById('serchWid').removeAttribute('hidden');

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
                if (fruta[i].disponible == "true"){
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
                    img.lang = fruta[i].id;
                    img.style.maxHeight = '157px';
                    img.style.minHeight = '157px';
                    if (fruta[i].descripcion) {
                        img.setAttribute("data-toggle", "modal");
                        img.setAttribute("data-target", "#exampleModalCenter");
                        img.onclick = (event) => {
                            var imgModal = document.getElementById('imgModal');
                            imgModal.innerHTML="";
                            var datosModal = document.getElementById('datosModal');

                            datosModal.innerHTML="";
                            document.getElementById("exampleModalCenterTitle").innerHTML=fruta[i].nombre.toUpperCase();
                            var img = document.createElement('img');
                            img.src=fruta[i].img;
                            img.style.width="100%";
                            imgModal.appendChild(img);
                            var nombre= document.createElement('h4');
                            nombre.innerHTML=fruta[i].nombre.toUpperCase();
                            datosModal.appendChild(nombre);
                            var precio= document.createElement('p');
                            var textPrice = document.createTextNode('Precio: $'+fruta[i].precio);
                            precio.appendChild(textPrice);
                            datosModal.appendChild(precio);
                            var descrip = document.createElement('p');
                            descrip.style.marginTop = '20px';
                            descrip.style.textAlign = 'left';
                            var descripText = document.createTextNode(fruta[i].descripcion);
                            descrip.appendChild(descripText);
                            datosModal.appendChild(descrip);
                        };
                    };
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
                    bot.lang = fruta[i].Unidad;
                    bot.onclick = (add) =>{
                        if (this.state.value > 0) {

                            document.getElementById(add.currentTarget.id).style.animation = "miAnimacion2 3s";
                            document.getElementById(add.currentTarget.id).innerHTML = "Listo";
            
                            const objectAux = {
                                img: '',
                                nombre: '',
                                precio: '', 
                                cantidad: '',
                                id: '',
                                unidad: ''
                            }
            
                            objectAux.img = add.currentTarget.id.slice(0, -fruta[i].id.length);
                            objectAux.nombre = this.state.nombre.slice(0, (-this.state.id.length));
                            objectAux.precio = add.currentTarget.name;
                            objectAux.cantidad = this.state.value;
                            objectAux.id = this.state.id;
                            objectAux.unidad = add.currentTarget.lang;
            
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
                                divCol1.className = 'col-3';
                                divCol1.style.padding = '5px';
                                const divCol2 = document.createElement('div');
                                divCol2.className = 'col-4';
                                divCol2.style.padding = '5px';
                                const divCol3 = document.createElement('div');
                                divCol3.className = 'col-3';
                                divCol3.style.padding = '5px';
                                const divCol4 = document.createElement('div');
                                divCol4.className = 'col-2';
                                divCol4.style.padding = '5px';
                                divCol4.onclick = () =>{
                                    if (this.state.pagar.length == 1){
                                        const tabla = document.getElementById('carritoBody');
                                        tabla.innerHTML = '';
                                        const h4 = document.createElement('h4');
                                        h4.style.textAlign = 'center';
                                        h4.style.fontWeight = 'bold';
                                        h4.style.marginBottom = '40px';
                                        h4.style.marginTop = '20px';
                                        const h4Text = document.createTextNode('No has agregado productos');
                                        h4.appendChild(h4Text);
                                        tabla.appendChild(h4);
            
                                        const img = document.createElement('img');
                                        img.src = "https://res.cloudinary.com/indev/image/upload/v1587361319/frutas/WhatsApp_Image_2020-04-19_at_23.40.56_wmrt9q.jpg";
                                        img.style.width = "65%";
                                        img.style.display= 'block';
                                        img.style.margin = '0 auto';
                                        tabla.appendChild(img);
                                        this.setState({pagar: []});
                                        window.sessionStorage.removeItem('array');
            
                                        document.getElementById('precioCarro').innerHTML = '$0';
                                        window.localStorage.setItem('totalPagar', '0');
            
                                    } else {
                                        tabla.removeChild(divRow);
                                        const array = JSON.parse(window.sessionStorage.getItem('array'));
                                        array.splice(i, 1);
                                        this.state.pagar.splice(i, 1);
                                        window.sessionStorage.setItem('array', JSON.stringify(array));
            
                                        const resta = parseFloat(window.localStorage.getItem('totalPagar')).toFixed(2) - suma;
                                        document.getElementById('precioCarro').innerHTML = '$'+(resta).toFixed(2).toString();
                                        window.localStorage.setItem('totalPagar', (resta).toFixed(2).toString());
                                        document.getElementById('descuentof').innerHTML = '';
                                        document.getElementById('totalPagarYa').innerHTML = '$'+resta.toFixed(2);
                                        window.localStorage.removeItem('cupon');
                                    }
                                };
                                divRow.appendChild(divCol1);
                                divRow.appendChild(divCol2);
                                divRow.appendChild(divCol3);
                                divRow.appendChild(divCol4);
            
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

                                // Quitar Productos
                                const x = document.createElement('i');
                                x.className = "fas fa-times";
                                x.style.display = "block";
                                x.style.margin = '0 auto';
                                x.style.marginTop = "25px";
                                x.style.width = "20px";
                                x.lang = i;
                                divCol4.appendChild(x);
            
                                // agregar todo
                                tabla.appendChild(divRow);
            
                                // TOTAL
                                document.getElementById('precioCarro').innerHTML = '$'+(total +2 ).toFixed(2).toString();
                                window.localStorage.setItem('totalPagar', +(total +2 ).toFixed(2).toString());
                                document.getElementById('descuentof').innerHTML = '';
                                document.getElementById('totalPagarYa').innerHTML = '$'+(total + 2).toFixed(2);
                                window.localStorage.removeItem('cupon');
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
        }));
    }

    limpieza () {
        document.getElementById('limpieza').style.animation = "carrusel2 0.3s";
        setTimeout(function() {document.getElementById('limpieza').style.animation = "none";}, 300);
        document.getElementById('adminBusc').setAttribute('hidden', '');
        document.getElementById('serchWid').removeAttribute('hidden');

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
        .get('https://prueba-next-u-react.firebaseio.com/productos/Limpieza.json')
        .set('Content-Type','aplication/json') 
        .then((res => {
            const fruta = res.body;
            const n = fruta.length;
            tabla.innerHTML = '';
            for (let i = 0;  i < n; i++) {
                if (fruta[i].disponible == "true"){
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
                    img.lang = fruta[i].id;
                    img.style.maxHeight = '157px';
                    img.style.minHeight = '157px';
                    if (fruta[i].descripcion) {
                        img.setAttribute("data-toggle", "modal");
                        img.setAttribute("data-target", "#exampleModalCenter");
                        img.onclick = (event) => {
                            var imgModal = document.getElementById('imgModal');
                            imgModal.innerHTML="";
                            var datosModal = document.getElementById('datosModal');

                            datosModal.innerHTML="";
                            document.getElementById("exampleModalCenterTitle").innerHTML=fruta[i].nombre.toUpperCase();
                            var img = document.createElement('img');
                            img.src=fruta[i].img;
                            img.style.width="100%";
                            imgModal.appendChild(img);
                            var nombre= document.createElement('h4');
                            nombre.innerHTML=fruta[i].nombre.toUpperCase();
                            datosModal.appendChild(nombre);
                            var precio= document.createElement('p');
                            var textPrice = document.createTextNode('Precio: $'+fruta[i].precio);
                            precio.appendChild(textPrice);
                            datosModal.appendChild(precio);
                            var descrip = document.createElement('p');
                            descrip.style.marginTop = '20px';
                            descrip.style.textAlign = 'left';
                            var descripText = document.createTextNode(fruta[i].descripcion);
                            descrip.appendChild(descripText);
                            datosModal.appendChild(descrip);
                        };
                    };
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
                    bot.lang = fruta[i].Unidad;
                    bot.onclick = (add) =>{
                        if (this.state.value > 0) {

                            document.getElementById(add.currentTarget.id).style.animation = "miAnimacion2 3s";
                            document.getElementById(add.currentTarget.id).innerHTML = "Listo";
            
                            const objectAux = {
                                img: '',
                                nombre: '',
                                precio: '', 
                                cantidad: '',
                                id: '',
                                unidad: ''
                            }
            
                            objectAux.img = add.currentTarget.id.slice(0, -fruta[i].id.length);
                            objectAux.nombre = this.state.nombre.slice(0, (-this.state.id.length));
                            objectAux.precio = add.currentTarget.name;
                            objectAux.cantidad = this.state.value;
                            objectAux.id = this.state.id;
                            objectAux.unidad = add.currentTarget.lang;
            
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
                                divCol1.className = 'col-3';
                                divCol1.style.padding = '5px';
                                const divCol2 = document.createElement('div');
                                divCol2.className = 'col-4';
                                divCol2.style.padding = '5px';
                                const divCol3 = document.createElement('div');
                                divCol3.className = 'col-3';
                                divCol3.style.padding = '5px';
                                const divCol4 = document.createElement('div');
                                divCol4.className = 'col-2';
                                divCol4.style.padding = '5px';
                                divCol4.onclick = () =>{
                                    if (this.state.pagar.length == 1){
                                        const tabla = document.getElementById('carritoBody');
                                        tabla.innerHTML = '';
                                        const h4 = document.createElement('h4');
                                        h4.style.textAlign = 'center';
                                        h4.style.fontWeight = 'bold';
                                        h4.style.marginBottom = '40px';
                                        h4.style.marginTop = '20px';
                                        const h4Text = document.createTextNode('No has agregado productos');
                                        h4.appendChild(h4Text);
                                        tabla.appendChild(h4);
            
                                        const img = document.createElement('img');
                                        img.src = "https://res.cloudinary.com/indev/image/upload/v1587361319/frutas/WhatsApp_Image_2020-04-19_at_23.40.56_wmrt9q.jpg";
                                        img.style.width = "65%";
                                        img.style.display= 'block';
                                        img.style.margin = '0 auto';
                                        tabla.appendChild(img);
                                        this.setState({pagar: []});
                                        window.sessionStorage.removeItem('array');
            
                                        document.getElementById('precioCarro').innerHTML = '$0';
                                        window.localStorage.setItem('totalPagar', '0');
            
                                    } else {
                                        tabla.removeChild(divRow);
                                        const array = JSON.parse(window.sessionStorage.getItem('array'));
                                        array.splice(i, 1);
                                        this.state.pagar.splice(i, 1);
                                        window.sessionStorage.setItem('array', JSON.stringify(array));
            
                                        const resta = parseFloat(window.localStorage.getItem('totalPagar')).toFixed(2) - suma;
                                        document.getElementById('precioCarro').innerHTML = '$'+(resta).toFixed(2).toString();
                                        window.localStorage.setItem('totalPagar', (resta).toFixed(2).toString());
                                        document.getElementById('descuentof').innerHTML = '';
                                        document.getElementById('totalPagarYa').innerHTML = '$'+resta.toFixed(2);
                                        window.localStorage.removeItem('cupon');
                                    }
                                };
                                divRow.appendChild(divCol1);
                                divRow.appendChild(divCol2);
                                divRow.appendChild(divCol3);
                                divRow.appendChild(divCol4);
            
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

                                // Quitar Productos
                                const x = document.createElement('i');
                                x.className = "fas fa-times";
                                x.style.display = "block";
                                x.style.margin = '0 auto';
                                x.style.marginTop = "25px";
                                x.style.width = "20px";
                                x.lang = i;
                                divCol4.appendChild(x);
            
                                // agregar todo
                                tabla.appendChild(divRow);
            
                                // TOTAL
                                document.getElementById('precioCarro').innerHTML = '$'+(total +2 ).toFixed(2).toString();
                                window.localStorage.setItem('totalPagar', +(total +2 ).toFixed(2).toString());
                                document.getElementById('descuentof').innerHTML = '';
                                document.getElementById('totalPagarYa').innerHTML = '$'+(total + 2).toFixed(2);
                                window.localStorage.removeItem('cupon');
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
        }));
    }

    proteinas () {
        document.getElementById('proteinas').style.animation = "carrusel2 0.3s";
        setTimeout(function() {document.getElementById('proteinas').style.animation = "none";}, 300);
        document.getElementById('adminBusc').setAttribute('hidden', '');
        document.getElementById('serchWid').removeAttribute('hidden');

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
        .get('https://prueba-next-u-react.firebaseio.com/productos/Proteinas.json')
        .set('Content-Type','aplication/json') 
        .then((res => {
            const fruta = res.body;
            const n = fruta.length;
            tabla.innerHTML = '';
            for (let i = 0;  i < n; i++) {
                if (fruta[i].disponible == "true"){
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
                    img.lang = fruta[i].id;
                    img.style.maxHeight = '157px';
                    img.style.minHeight = '157px';
                    if (fruta[i].descripcion) {
                        img.setAttribute("data-toggle", "modal");
                        img.setAttribute("data-target", "#exampleModalCenter");
                        img.onclick = (event) => {
                            var imgModal = document.getElementById('imgModal');
                            imgModal.innerHTML="";
                            var datosModal = document.getElementById('datosModal');

                            datosModal.innerHTML="";
                            document.getElementById("exampleModalCenterTitle").innerHTML=fruta[i].nombre.toUpperCase();
                            var img = document.createElement('img');
                            img.src=fruta[i].img;
                            img.style.width="100%";
                            imgModal.appendChild(img);
                            var nombre= document.createElement('h4');
                            nombre.innerHTML=fruta[i].nombre.toUpperCase();
                            datosModal.appendChild(nombre);
                            var precio= document.createElement('p');
                            var textPrice = document.createTextNode('Precio: $'+fruta[i].precio);
                            precio.appendChild(textPrice);
                            datosModal.appendChild(precio);
                            var descrip = document.createElement('p');
                            descrip.style.marginTop = '20px';
                            descrip.style.textAlign = 'left';
                            var descripText = document.createTextNode(fruta[i].descripcion);
                            descrip.appendChild(descripText);
                            datosModal.appendChild(descrip);
                        };
                    };
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
                    bot.lang = fruta[i].Unidad;
                    bot.onclick = (add) =>{
                        if (this.state.value > 0) {

                            document.getElementById(add.currentTarget.id).style.animation = "miAnimacion2 3s";
                            document.getElementById(add.currentTarget.id).innerHTML = "Listo";
            
                            const objectAux = {
                                img: '',
                                nombre: '',
                                precio: '', 
                                cantidad: '',
                                id: '',
                                unidad: ''
                            }
            
                            objectAux.img = add.currentTarget.id.slice(0, -fruta[i].id.length);
                            objectAux.nombre = this.state.nombre.slice(0, (-this.state.id.length));
                            objectAux.precio = add.currentTarget.name;
                            objectAux.cantidad = this.state.value;
                            objectAux.id = this.state.id;
                            objectAux.unidad = add.currentTarget.lang;
            
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
                                divCol1.className = 'col-3';
                                divCol1.style.padding = '5px';
                                const divCol2 = document.createElement('div');
                                divCol2.className = 'col-4';
                                divCol2.style.padding = '5px';
                                const divCol3 = document.createElement('div');
                                divCol3.className = 'col-3';
                                divCol3.style.padding = '5px';
                                const divCol4 = document.createElement('div');
                                divCol4.className = 'col-2';
                                divCol4.style.padding = '5px';
                                divCol4.onclick = () =>{
                                    if (this.state.pagar.length == 1){
                                        const tabla = document.getElementById('carritoBody');
                                        tabla.innerHTML = '';
                                        const h4 = document.createElement('h4');
                                        h4.style.textAlign = 'center';
                                        h4.style.fontWeight = 'bold';
                                        h4.style.marginBottom = '40px';
                                        h4.style.marginTop = '20px';
                                        const h4Text = document.createTextNode('No has agregado productos');
                                        h4.appendChild(h4Text);
                                        tabla.appendChild(h4);
            
                                        const img = document.createElement('img');
                                        img.src = "https://res.cloudinary.com/indev/image/upload/v1587361319/frutas/WhatsApp_Image_2020-04-19_at_23.40.56_wmrt9q.jpg";
                                        img.style.width = "65%";
                                        img.style.display= 'block';
                                        img.style.margin = '0 auto';
                                        tabla.appendChild(img);
                                        this.setState({pagar: []});
                                        window.sessionStorage.removeItem('array');
            
                                        document.getElementById('precioCarro').innerHTML = '$0';
                                        window.localStorage.setItem('totalPagar', '0');
            
                                    } else {
                                        tabla.removeChild(divRow);
                                        const array = JSON.parse(window.sessionStorage.getItem('array'));
                                        array.splice(i, 1);
                                        this.state.pagar.splice(i, 1);
                                        window.sessionStorage.setItem('array', JSON.stringify(array));
            
                                        const resta = parseFloat(window.localStorage.getItem('totalPagar')).toFixed(2) - suma;
                                        document.getElementById('precioCarro').innerHTML = '$'+(resta).toFixed(2).toString();
                                        window.localStorage.setItem('totalPagar', (resta).toFixed(2).toString());
                                        document.getElementById('descuentof').innerHTML = '';
                                        document.getElementById('totalPagarYa').innerHTML = '$'+resta.toFixed(2);
                                        window.localStorage.removeItem('cupon');
                                    }
                                };
                                divRow.appendChild(divCol1);
                                divRow.appendChild(divCol2);
                                divRow.appendChild(divCol3);
                                divRow.appendChild(divCol4);
            
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

                                // Quitar Productos
                                const x = document.createElement('i');
                                x.className = "fas fa-times";
                                x.style.display = "block";
                                x.style.margin = '0 auto';
                                x.style.marginTop = "25px";
                                x.style.width = "20px";
                                x.lang = i;
                                divCol4.appendChild(x);
            
                                // agregar todo
                                tabla.appendChild(divRow);
            
                                // TOTAL
                                document.getElementById('precioCarro').innerHTML = '$'+(total +2 ).toFixed(2).toString();
                                window.localStorage.setItem('totalPagar', +(total +2 ).toFixed(2).toString());
                                document.getElementById('descuentof').innerHTML = '';
                                document.getElementById('totalPagarYa').innerHTML = '$'+(total + 2).toFixed(2);
                                window.localStorage.removeItem('cupon');
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
        }));
    }

    combos () {
        document.getElementById('combos').style.animation = "carrusel2 0.3s";
        setTimeout(function() {document.getElementById('combos').style.animation = "none";}, 300);
        document.getElementById('adminBusc').setAttribute('hidden', '');
        document.getElementById('serchWid').removeAttribute('hidden');

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
        .get('https://prueba-next-u-react.firebaseio.com/productos/Combos.json')
        .set('Content-Type','aplication/json') 
        .then((res => {
            const fruta = res.body;
            const n = fruta.length;
            tabla.innerHTML = '';
            for (let i = 0;  i < n; i++) {
                if (fruta[i].disponible == "true"){
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
                    img.lang = fruta[i].id;
                    img.style.maxHeight = '157px';
                    img.style.minHeight = '157px';
                    if (fruta[i].descripcion) {
                        img.setAttribute("data-toggle", "modal");
                        img.setAttribute("data-target", "#exampleModalCenter");
                        img.onclick = (event) => {
                            var imgModal = document.getElementById('imgModal');
                            imgModal.innerHTML="";
                            var datosModal = document.getElementById('datosModal');

                            datosModal.innerHTML="";
                            document.getElementById("exampleModalCenterTitle").innerHTML=fruta[i].nombre.toUpperCase();
                            var img = document.createElement('img');
                            img.src=fruta[i].img;
                            img.style.width="100%";
                            imgModal.appendChild(img);
                            var nombre= document.createElement('h4');
                            nombre.innerHTML=fruta[i].nombre.toUpperCase();
                            datosModal.appendChild(nombre);
                            var precio= document.createElement('p');
                            var textPrice = document.createTextNode('Precio: $'+fruta[i].precio);
                            precio.appendChild(textPrice);
                            datosModal.appendChild(precio);
                            var descrip = document.createElement('p');
                            descrip.style.marginTop = '20px';
                            descrip.style.textAlign = 'left';
                            var descripText = document.createTextNode(fruta[i].descripcion);
                            descrip.appendChild(descripText);
                            datosModal.appendChild(descrip);
                        };
                    };
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
                    bot.lang = fruta[i].Unidad;
                    bot.onclick = (add) =>{
                        if (this.state.value > 0) {

                            document.getElementById(add.currentTarget.id).style.animation = "miAnimacion2 3s";
                            document.getElementById(add.currentTarget.id).innerHTML = "Listo";
            
                            const objectAux = {
                                img: '',
                                nombre: '',
                                precio: '', 
                                cantidad: '',
                                id: '',
                                unidad: ''
                            }
            
                            objectAux.img = add.currentTarget.id.slice(0, -fruta[i].id.length);
                            objectAux.nombre = this.state.nombre.slice(0, (-this.state.id.length));
                            objectAux.precio = add.currentTarget.name;
                            objectAux.cantidad = this.state.value;
                            objectAux.id = this.state.id;
                            objectAux.unidad = add.currentTarget.lang;
            
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
                                divCol1.className = 'col-3';
                                divCol1.style.padding = '5px';
                                const divCol2 = document.createElement('div');
                                divCol2.className = 'col-4';
                                divCol2.style.padding = '5px';
                                const divCol3 = document.createElement('div');
                                divCol3.className = 'col-3';
                                divCol3.style.padding = '5px';
                                const divCol4 = document.createElement('div');
                                divCol4.className = 'col-2';
                                divCol4.style.padding = '5px';
                                divCol4.onclick = () =>{
                                    if (this.state.pagar.length == 1){
                                        const tabla = document.getElementById('carritoBody');
                                        tabla.innerHTML = '';
                                        const h4 = document.createElement('h4');
                                        h4.style.textAlign = 'center';
                                        h4.style.fontWeight = 'bold';
                                        h4.style.marginBottom = '40px';
                                        h4.style.marginTop = '20px';
                                        const h4Text = document.createTextNode('No has agregado productos');
                                        h4.appendChild(h4Text);
                                        tabla.appendChild(h4);
            
                                        const img = document.createElement('img');
                                        img.src = "https://res.cloudinary.com/indev/image/upload/v1587361319/frutas/WhatsApp_Image_2020-04-19_at_23.40.56_wmrt9q.jpg";
                                        img.style.width = "65%";
                                        img.style.display= 'block';
                                        img.style.margin = '0 auto';
                                        tabla.appendChild(img);
                                        this.setState({pagar: []});
                                        window.sessionStorage.removeItem('array');
            
                                        document.getElementById('precioCarro').innerHTML = '$0';
                                        window.localStorage.setItem('totalPagar', '0');
            
                                    } else {
                                        tabla.removeChild(divRow);
                                        const array = JSON.parse(window.sessionStorage.getItem('array'));
                                        array.splice(i, 1);
                                        this.state.pagar.splice(i, 1);
                                        window.sessionStorage.setItem('array', JSON.stringify(array));
            
                                        const resta = parseFloat(window.localStorage.getItem('totalPagar')).toFixed(2) - suma;
                                        document.getElementById('precioCarro').innerHTML = '$'+(resta).toFixed(2).toString();
                                        window.localStorage.setItem('totalPagar', (resta).toFixed(2).toString());
                                        document.getElementById('descuentof').innerHTML = '';
                                        document.getElementById('totalPagarYa').innerHTML = '$'+resta.toFixed(2);
                                        window.localStorage.removeItem('cupon');
                                    }
                                };
                                divRow.appendChild(divCol1);
                                divRow.appendChild(divCol2);
                                divRow.appendChild(divCol3);
                                divRow.appendChild(divCol4);
            
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

                                // Quitar Productos
                                const x = document.createElement('i');
                                x.className = "fas fa-times";
                                x.style.display = "block";
                                x.style.margin = '0 auto';
                                x.style.marginTop = "25px";
                                x.style.width = "20px";
                                x.lang = i;
                                divCol4.appendChild(x);
            
                                // agregar todo
                                tabla.appendChild(divRow);
            
                                // TOTAL
                                document.getElementById('precioCarro').innerHTML = '$'+(total +2 ).toFixed(2).toString();
                                window.localStorage.setItem('totalPagar', +(total +2 ).toFixed(2).toString());
                                document.getElementById('descuentof').innerHTML = '';
                                document.getElementById('totalPagarYa').innerHTML = '$'+(total + 2).toFixed(2);
                                window.localStorage.removeItem('cupon');
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
        }));
    }

    mayoreo () {
        document.getElementById('mayoreo').style.animation = "carrusel2 0.3s";
        setTimeout(function() {document.getElementById('mayoreo').style.animation = "none";}, 300);
        document.getElementById('adminBusc').setAttribute('hidden', '');
        document.getElementById('serchWid').removeAttribute('hidden');

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
        .get('https://prueba-next-u-react.firebaseio.com/productos/Mayoreo.json')
        .set('Content-Type','aplication/json') 
        .then((res => {
            const fruta = res.body;
            const n = fruta.length;
            tabla.innerHTML = '';
            for (let i = 0;  i < n; i++) {
                if (fruta[i].disponible == "true"){
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
                    img.lang = fruta[i].id;
                    img.style.maxHeight = '157px';
                    img.style.minHeight = '157px';
                    if (fruta[i].descripcion) {
                        img.setAttribute("data-toggle", "modal");
                        img.setAttribute("data-target", "#exampleModalCenter");
                        img.onclick = (event) => {
                            var imgModal = document.getElementById('imgModal');
                            imgModal.innerHTML="";
                            var datosModal = document.getElementById('datosModal');

                            datosModal.innerHTML="";
                            document.getElementById("exampleModalCenterTitle").innerHTML=fruta[i].nombre.toUpperCase();
                            var img = document.createElement('img');
                            img.src=fruta[i].img;
                            img.style.width="100%";
                            imgModal.appendChild(img);
                            var nombre= document.createElement('h4');
                            nombre.innerHTML=fruta[i].nombre.toUpperCase();
                            datosModal.appendChild(nombre);
                            var precio= document.createElement('p');
                            var textPrice = document.createTextNode('Precio: $'+fruta[i].precio);
                            precio.appendChild(textPrice);
                            datosModal.appendChild(precio);
                            var descrip = document.createElement('p');
                            descrip.style.marginTop = '20px';
                            descrip.style.textAlign = 'left';
                            var descripText = document.createTextNode(fruta[i].descripcion);
                            descrip.appendChild(descripText);
                            datosModal.appendChild(descrip);
                        };
                    };
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
                    bot.lang = fruta[i].Unidad;
                    bot.onclick = (add) =>{
                        if (this.state.value > 0) {

                            document.getElementById(add.currentTarget.id).style.animation = "miAnimacion2 3s";
                            document.getElementById(add.currentTarget.id).innerHTML = "Listo";
            
                            const objectAux = {
                                img: '',
                                nombre: '',
                                precio: '', 
                                cantidad: '',
                                id: '',
                                unidad: ''
                            }
            
                            objectAux.img = add.currentTarget.id.slice(0, -fruta[i].id.length);
                            objectAux.nombre = this.state.nombre.slice(0, (-this.state.id.length));
                            objectAux.precio = add.currentTarget.name;
                            objectAux.cantidad = this.state.value;
                            objectAux.id = this.state.id;
                            objectAux.unidad = add.currentTarget.lang;
            
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
                                divCol1.className = 'col-3';
                                divCol1.style.padding = '5px';
                                const divCol2 = document.createElement('div');
                                divCol2.className = 'col-4';
                                divCol2.style.padding = '5px';
                                const divCol3 = document.createElement('div');
                                divCol3.className = 'col-3';
                                divCol3.style.padding = '5px';
                                const divCol4 = document.createElement('div');
                                divCol4.className = 'col-2';
                                divCol4.style.padding = '5px';
                                divCol4.onclick = () =>{
                                    if (this.state.pagar.length == 1){
                                        const tabla = document.getElementById('carritoBody');
                                        tabla.innerHTML = '';
                                        const h4 = document.createElement('h4');
                                        h4.style.textAlign = 'center';
                                        h4.style.fontWeight = 'bold';
                                        h4.style.marginBottom = '40px';
                                        h4.style.marginTop = '20px';
                                        const h4Text = document.createTextNode('No has agregado productos');
                                        h4.appendChild(h4Text);
                                        tabla.appendChild(h4);
            
                                        const img = document.createElement('img');
                                        img.src = "https://res.cloudinary.com/indev/image/upload/v1587361319/frutas/WhatsApp_Image_2020-04-19_at_23.40.56_wmrt9q.jpg";
                                        img.style.width = "65%";
                                        img.style.display= 'block';
                                        img.style.margin = '0 auto';
                                        tabla.appendChild(img);
                                        this.setState({pagar: []});
                                        window.sessionStorage.removeItem('array');
            
                                        document.getElementById('precioCarro').innerHTML = '$0';
                                        window.localStorage.setItem('totalPagar', '0');
            
                                    } else {
                                        tabla.removeChild(divRow);
                                        const array = JSON.parse(window.sessionStorage.getItem('array'));
                                        array.splice(i, 1);
                                        this.state.pagar.splice(i, 1);
                                        window.sessionStorage.setItem('array', JSON.stringify(array));
            
                                        const resta = parseFloat(window.localStorage.getItem('totalPagar')).toFixed(2) - suma;
                                        document.getElementById('precioCarro').innerHTML = '$'+(resta).toFixed(2).toString();
                                        window.localStorage.setItem('totalPagar', (resta).toFixed(2).toString());
                                        document.getElementById('descuentof').innerHTML = '';
                                        document.getElementById('totalPagarYa').innerHTML = '$'+resta.toFixed(2);
                                        window.localStorage.removeItem('cupon');
                                    }
                                };
                                divRow.appendChild(divCol1);
                                divRow.appendChild(divCol2);
                                divRow.appendChild(divCol3);
                                divRow.appendChild(divCol4);
            
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

                                // Quitar Productos
                                const x = document.createElement('i');
                                x.className = "fas fa-times";
                                x.style.display = "block";
                                x.style.margin = '0 auto';
                                x.style.marginTop = "25px";
                                x.style.width = "20px";
                                x.lang = i;
                                divCol4.appendChild(x);
            
                                // agregar todo
                                tabla.appendChild(divRow);
            
                                // TOTAL
                                document.getElementById('precioCarro').innerHTML = '$'+(total +2 ).toFixed(2).toString();
                                window.localStorage.setItem('totalPagar', +(total +2 ).toFixed(2).toString());
                                document.getElementById('descuentof').innerHTML = '';
                                document.getElementById('totalPagarYa').innerHTML = '$'+(total + 2).toFixed(2);
                                window.localStorage.removeItem('cupon');
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
                        .get('https://prueba-next-u-react.firebaseio.com/productos/Emprendimientos.json')
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
                                        .get('https://prueba-next-u-react.firebaseio.com/productos/Abarrotes.json')
                                        .set('Content-Type','aplication/json') 
                                        .then((res => {
                                            const n = res.body.length;
                                            for (let i = 0; i<n; i++){
                                                this.state.buscar.push(res.body[i]);
                                            }
                                            request
                                            .get('https://prueba-next-u-react.firebaseio.com/productos/Proteinas.json')
                                            .set('Content-Type','aplication/json') 
                                            .then((res => {
                                                const n = res.body.length;
                                                for (let i = 0; i<n; i++){
                                                    this.state.buscar.push(res.body[i]);
                                                }
                                                request
                                                .get('https://prueba-next-u-react.firebaseio.com/productos/Limpieza.json')
                                                .set('Content-Type','aplication/json') 
                                                .then((res => {
                                                    const n = res.body.length;
                                                    for (let i = 0; i<n; i++){
                                                        this.state.buscar.push(res.body[i]);
                                                    }
                                                    request
                                                    .get('https://prueba-next-u-react.firebaseio.com/productos/Combos.json')
                                                    .set('Content-Type','aplication/json') 
                                                    .then((res => {
                                                        const n = res.body.length;
                                                        for (let i = 0; i<n; i++){
                                                            this.state.buscar.push(res.body[i]);
                                                        }
                                                        request
                                                        .get('https://prueba-next-u-react.firebaseio.com/productos/Mayoreo.json')
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
                                                                    const ids = [];
                                                                    tabla.innerHTML="";
                                                                    const fruta = this.state.buscar;
                                                                    const length = fruta.length;
                                                                    for (let i = 0; i <length; i++) {
                                                                        this.state.ids.push(parseFloat(fruta[i].id));
                                                                        if (fruta[i].disponible == "true") {
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
                                                                            img.lang = fruta[i].id;
                                                                            img.style.maxHeight = '157px';
                                                                            img.style.minHeight = '157px';
                                                                            if (fruta[i].descripcion) {
                                                                                img.setAttribute("data-toggle", "modal");
                                                                                img.setAttribute("data-target", "#exampleModalCenter");
                                                                                img.onclick = (event) => {
                                                                                    var imgModal = document.getElementById('imgModal');
                                                                                    imgModal.innerHTML="";
                                                                                    var datosModal = document.getElementById('datosModal');
                                                        
                                                                                    datosModal.innerHTML="";
                                                                                    document.getElementById("exampleModalCenterTitle").innerHTML=fruta[i].nombre.toUpperCase();
                                                                                    var img = document.createElement('img');
                                                                                    img.src=fruta[i].img;
                                                                                    img.style.width="100%";
                                                                                    imgModal.appendChild(img);
                                                                                    var nombre= document.createElement('h4');
                                                                                    nombre.innerHTML=fruta[i].nombre.toUpperCase();
                                                                                    datosModal.appendChild(nombre);
                                                                                    var precio= document.createElement('p');
                                                                                    var textPrice = document.createTextNode('Precio: $'+fruta[i].precio);
                                                                                    precio.appendChild(textPrice);
                                                                                    datosModal.appendChild(precio);
                                                                                    var descrip = document.createElement('p');
                                                                                    descrip.style.marginTop = '20px';
                                                                                    descrip.style.textAlign = 'left';
                                                                                    var descripText = document.createTextNode(fruta[i].descripcion);
                                                                                    descrip.appendChild(descripText);
                                                                                    datosModal.appendChild(descrip);
                                                                                };
                                                                            };
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
                                                                            bot.lang = fruta[i].Unidad;
                                                                            bot.onclick = (add) =>{
                                                                                if (this.state.value > 0) {

                                                                                    document.getElementById(add.currentTarget.id).style.animation = "miAnimacion2 3s";
                                                                                    document.getElementById(add.currentTarget.id).innerHTML = "Listo";
                                                                    
                                                                                    const objectAux = {
                                                                                        img: '',
                                                                                        nombre: '',
                                                                                        precio: '', 
                                                                                        cantidad: '',
                                                                                        id: '',
                                                                                        unidad: '',
                                                                                    }
                                                                    
                                                                                    objectAux.img = add.currentTarget.id.slice(0, -fruta[i].id.length);
                                                                                    objectAux.nombre = this.state.nombre.slice(0, (-this.state.id.length));
                                                                                    objectAux.precio = add.currentTarget.name;
                                                                                    objectAux.cantidad = this.state.value;
                                                                                    objectAux.id = this.state.id;
                                                                                    objectAux.unidad = add.currentTarget.lang;
                                                                    
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
                                                                                        divCol1.className = 'col-3';
                                                                                        divCol1.style.padding = '5px';
                                                                                        const divCol2 = document.createElement('div');
                                                                                        divCol2.className = 'col-4';
                                                                                        divCol2.style.padding = '5px';
                                                                                        const divCol3 = document.createElement('div');
                                                                                        divCol3.className = 'col-3';
                                                                                        divCol3.style.padding = '5px';
                                                                                        const divCol4 = document.createElement('div');
                                                                                        divCol4.className = 'col-2';
                                                                                        divCol4.style.padding = '5px';
                                                                                        divCol4.onclick = () =>{
                                                                                            if (this.state.pagar.length == 1){
                                                                                                const tabla = document.getElementById('carritoBody');
                                                                                                tabla.innerHTML = '';
                                                                                                const h4 = document.createElement('h4');
                                                                                                h4.style.textAlign = 'center';
                                                                                                h4.style.fontWeight = 'bold';
                                                                                                h4.style.marginBottom = '40px';
                                                                                                h4.style.marginTop = '20px';
                                                                                                const h4Text = document.createTextNode('No has agregado productos');
                                                                                                h4.appendChild(h4Text);
                                                                                                tabla.appendChild(h4);

                                                                                                const img = document.createElement('img');
                                                                                                img.src = "https://res.cloudinary.com/indev/image/upload/v1587361319/frutas/WhatsApp_Image_2020-04-19_at_23.40.56_wmrt9q.jpg";
                                                                                                img.style.width = "65%";
                                                                                                img.style.display= 'block';
                                                                                                img.style.margin = '0 auto';
                                                                                                tabla.appendChild(img);
                                                                                                this.setState({pagar: []});
                                                                                                window.sessionStorage.removeItem('array');

                                                                                                document.getElementById('precioCarro').innerHTML = '$0';
                                                                                                window.localStorage.setItem('totalPagar', '0');

                                                                                            } else {
                                                                                                tabla.removeChild(divRow);
                                                                                                const array = JSON.parse(window.sessionStorage.getItem('array'));
                                                                                                array.splice(i, 1);
                                                                                                this.state.pagar.splice(i, 1);
                                                                                                window.sessionStorage.setItem('array', JSON.stringify(array));

                                                                                                const resta = parseFloat(window.localStorage.getItem('totalPagar')).toFixed(2) - suma;
                                                                                                document.getElementById('precioCarro').innerHTML = '$'+(resta).toFixed(2).toString();
                                                                                                window.localStorage.setItem('totalPagar', (resta).toFixed(2).toString());
                                                                                                document.getElementById('descuentof').innerHTML = '';
                                                                                                document.getElementById('totalPagarYa').innerHTML = '$'+resta.toFixed(2);
                                                                                                window.localStorage.removeItem('cupon');
                                                                                            }
                                                                                        };
                                                                                        divRow.appendChild(divCol1);
                                                                                        divRow.appendChild(divCol2);
                                                                                        divRow.appendChild(divCol3);
                                                                                        divRow.appendChild(divCol4);
                                                                    
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

                                                                                        // Quitar Productos
                                                                                        const x = document.createElement('i');
                                                                                        x.className = "fas fa-times";
                                                                                        x.style.display = "block";
                                                                                        x.style.margin = '0 auto';
                                                                                        x.style.marginTop = "25px";
                                                                                        x.style.width = "20px";
                                                                                        x.lang = i;
                                                                                        divCol4.appendChild(x);
                                                                    
                                                                                        // agregar todo
                                                                                        tabla.appendChild(divRow);
                                                                    
                                                                                        // TOTAL
                                                                                        document.getElementById('precioCarro').innerHTML = '$'+(total +2 ).toFixed(2).toString();
                                                                                        window.localStorage.setItem('totalPagar', +(total +2 ).toFixed(2).toString());
                                                                                        document.getElementById('descuentof').innerHTML = '';
                                                                                        document.getElementById('totalPagarYa').innerHTML = '$'+(total + 2).toFixed(2);
                                                                                        window.localStorage.removeItem('cupon');
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
                                                                }));
                                                            }));
                                                     }));
                                                }));
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