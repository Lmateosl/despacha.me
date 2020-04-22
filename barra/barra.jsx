import React from 'react';
import './barra.css';
import {
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import {Link, BrowserRouter as Router, NavLink} from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import firebase from 'firebase';
import * as request from 'superagent';
import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import * as crypto from 'crypto-js';

class Barra extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props);

        this.state = {
            phone: "",
            email: '',
            password: '',
            tarjeta: '',
            dueno: '',
            fecha: '',
            cvc: '',
            focus: '',
            descrip: '',
            dir: '',
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
            <div id = "barrera">
                <div className="row justify-content-between" id="comienzaTodo">
                    <div className="col-12 col-lg-4 icon" id="comienza"><img src="https://res.cloudinary.com/indev/image/upload/v1587357151/frutas/logodes-01_ew51z2.png" width="45%" id="logoInicio"/></div>
                    <div className="col-12 col-lg-2" id="menuInicio">
                        <div className="row">
                            <div className="col-lg-4" id="casaInicio">
                                <NavLink to="/" className="navItem"><i className="fas fa-home icon"></i></NavLink>
                            </div>
                            <div className="col-6 col-lg-4 navItem">
                                <div class="btn-group dropleft" id="carroInicio">
                                    <a id="carrito" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="navItem"><i class="fas fa-shopping-cart icon" id="iconoCarrito"></i></a>
                                    <div className="dropdown-menu" id="dropCarro">
                                        <div id="carritoBody">
                                            <h4 style={{textAlign: 'center', fontWeight: 'bold', marginBottom: '40px', marginTop: '20px'}}>No has agreagado productos</h4>
                                            <img src="https://res.cloudinary.com/indev/image/upload/v1587361319/frutas/WhatsApp_Image_2020-04-19_at_23.40.56_wmrt9q.jpg" width="65%" style={{display: 'block', margin: '0 auto'}} />
                                        </div>
                                        <div class="dropdown-divider"></div>
                                        <div id="carritoFoot">
                                            <p style={{textAlign: 'center', margin: '5px'}} hidden>IVA: $0</p>
                                            <p style={{textAlign: 'center', margin: '5px'}}>Envío: $2</p>
                                            <h1 id="precioCarro" style={{marginTop: '5px'}}>0$</h1>
                                            <button type="button" id="botonModal1" class="btn btn-success" data-toggle="modal" data-target="#exampleModal" hidden>Pagar</button>
                                            <button type="button" id="botonModal2" class="btn btn-success" data-toggle="modal" data-target="#exampleModal3" onClick={this.reiniciarPago.bind(this)}>Pagar</button>
                                            <Button color="secondary" id="espacio1" onClick={this.cancelar.bind(this)}>Cancelar</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-4">
                                <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="navItem" id="userIn" hidden><i class="fas fa-user icon"></i></a>
                                <div className="dropdown-menu">
                                    <h6 className="dropdown-header" id="cuenta">Cuenta</h6>
                                    <div class="dropdown-divider"></div>
                                    <a className="dropdown-item" onClick={this.logout.bind(this)}><i class="fas fa-sign-out-alt icon2"></i>Cerrar Sesión</a>
                                </div>
                                <a className="navItem" id="userOut"><i class="fas fa-sign-in-alt icon" data-toggle="modal" data-target="#exampleModal"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>{this.props.children}</div>

                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modalIniciar">Iniciar Sesión</h5>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div id="iniciarC">
                                <div className="form-group">
                                    <label for="recipient-name" className="col-form-label">Correo:</label>
                                    <input type="email" className="form-control" id="recipient-name" onChange={this.correo1.bind(this)}/>
                                </div>
                                <div className="form-group">
                                    <label for="recipient-name" className="col-form-label">Contraseña:</label>
                                    <input type="password" className="form-control" id="recipient-name" onChange={this.key3.bind(this)}/>
                                </div>
                            </div>
                            <div id="crearC" hidden>
                                <div className="form-group">
                                    <label for="recipient-name" className="col-form-label">Nombre:</label>
                                    <input type="text" className="form-control" id="recipient-name" onChange={this.nombre.bind(this)}/>
                                    <small id="nombreHelp" className="form-text">Nombres y apellidos. Ejem: Carlos Sánchez .</small>
                                </div>
                                <div className="form-group">
                                    <label for="recipient-name" className="col-form-label">Correo:</label>
                                    <input type="email" className="form-control" id="recipient-name" onChange={this.correo1.bind(this)}/>
                                    <small id="mailHelp" className="form-text">Ingrese su email.</small>
                                </div>
                                <div className="form-group">
                                    <label for="recipient-name" className="col-form-label">Celular:</label>
                                    <PhoneInput
                                        country={'us'}
                                        value=''
                                        onChange={this.numero.bind(this)}
                                    />
                                    <small id="numeroHelp" className="form-text">Selecione su región y coloque su número.</small>
                                </div>
                                <div className="form-group">
                                    <label for="recipient-name" className="col-form-label">Contraseña:</label>
                                    <input type="password" className="form-control" id="recipient-name" onChange={this.key.bind(this)}/>
                                    <small id="key1Help" className="form-text">Las contraseña debe tener mas 6 digitos.</small>
                                </div>
                                <div className="form-group">
                                    <label for="recipient-name" className="col-form-label">Confirmar Contraseña:</label>
                                    <input type="password" className="form-control" id="recipient-name" onChange={this.key1.bind(this)}/>
                                    <small id="keyHelp" className="form-text" hidden>Las contraseñas no coinciden</small>
                                </div>
                                <div className="form-group">
                                    <label for="recipient-name" className="col-form-label">Cédula:</label>
                                    <input type="text" className="form-control" id="recipient-name" onChange={this.cedula.bind(this)}/>
                                    <small id="cedulaHelp" className="form-text ">Ingrese su número de cédula. Ejem: 1101113321.</small>
                                </div>
                            </div>
                            <div id="botonesSesion">
                                <button type="button" class="btn btn-success" id="botonCon" data-dismiss="modal" style={{backgroundColor: '#8adb72', borderColor: '#8adb72'}} onClick={this.logIn.bind(this)}>Confirmar</button>
                                <button type="button" class="btn btn-secondary" id="botonCan" data-dismiss="modal">Cancelar</button>
                            </div>
                            <div id="botonesSesion2" hidden>
                                <button type="button" class="btn btn-success" id="botonCon" data-dismiss="modal" style={{backgroundColor: '#8adb72', borderColor: '#8adb72'}} onClick={this.singIn.bind(this)} >Confirmar</button>
                                <button type="button" class="btn btn-secondary" id="botonCan" data-dismiss="modal">Cancelar</button>
                            </div>
                            <div id="tenerCuenta"> 
                                <a className="form-text text-muted" id='crearCuenta' name="1" onClick={this.noTenerC.bind(this)}>¿No tienes cuenta? Crea una aquí.</a>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
                <div class="modal fade" id="exampleModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-body">
                            <div id="seleccionarPago">
                                <h3 style={{marginTop: '30px', marginBottom: '40px', textAlign: 'center', fontWeight: 'bold'}}>Selecione su método de pago:</h3>
                                <button type="button" class="btn btn-primary" style={{display: 'block', margin: '0 auto', backgroundColor:'#8adb72', borderColor: "#8adb72"}} onClick={this.credito.bind(this)}>Tarjeta de Crédito</button>
                                <h5 style={{marginTop: '20px', marginBottom: '20px', textAlign: 'center', fontWeight: 'bold'}}>O</h5>
                                <button type="button" class="btn btn-primary" style={{display: 'block', margin: '0 auto', backgroundColor:'#8adb72', borderColor: "#8adb72", marginBottom: '50px'}} onClick={this.trans.bind(this)}>Tranferencia Bancaria</button>
                            </div>
                            <div id="cuentasPago" style={{padding: '20px'}} hidden>
                                <h5 style={{textAlign: 'center', fontWeight: 'bold', marginTop: '5px', marginBottom: '30px'}}>Cuentas:</h5>
                                <div id="cuenta1">
                                    <p className="datosPago">BANCO DE PICHINCHA</p>
                                    <p className="datosPago">CUENTA CORRIENTE</p>
                                    <p className="datosPago">#2100183416</p>
                                    <p className="datosPago">RUC: 1191760871001</p>
                                    <p className="datosPago">Mail: contabilidad@enerwicorp.com</p>
                                </div>
                                <div id="cuenta2">
                                    <p className="datosPago">BANCO DE LOJA</p>
                                    <p className="datosPago">CUENTA CORRIENTE</p>
                                    <p className="datosPago">#2902103942</p>
                                    <p className="datosPago">RUC: 1191760871001</p>
                                    <p className="datosPago">Mail: contabilidad@enerwicorp.com</p>
                                </div>
                                <p>Al confirmar se reservará el pedido y recibirá un mensaje por WhatsApp, el cual, tendrá que responder con el comprobante de transacción. Puede ser un archivo pdf o un screen-shot. Una vez confirmado el pago su pedido será despachado.</p>
                                <button type="button" class="btn btn-primary" id="confirTar" data-dismiss="modal" style={{marginTop: '20px'}} onClick={this.transferencia.bind(this)}>Confirmar</button>
                                <button type="button" class="btn btn-secondary" id="cancelarTar" data-dismiss="modal">Cancelar</button>
                            </div>
                                <form id="formPago" hidden>
                                    <h5 style={{textAlign: 'center', fontWeight: 'bold', marginTop: '20px', marginBottom: '30px'}}>Proceder a pagar</h5>
                                    <div className="form-group" id="tarjeta">
                                        <Cards
                                            number={this.state.tarjeta}
                                            name={this.state.dueno}
                                            expiry={this.state.fecha}
                                            cvc={this.state.cvc}
                                            focus={this.state.focus}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="recipient-name" className="col-form-label">Número de tarjeta:</label>
                                        <input type="text" className="form-control" id="recipient-name" onKeyUp={this.tarjeta.bind(this)}/>
                                        <small id="tarjetaHelp" className="form-text text-muted">Ingrese los dígitos de su trajeta. Ejem: 1111222233334444</small>
                                    </div>
                                    <div className="form-group">
                                        <label for="recipient-name" className="col-form-label">Nombre del titular de la tarjeta:</label>
                                        <input type="text" className="form-control" id="recipient-name" onKeyUp={this.dueno.bind(this)}/>
                                        <small id="nombreHelp" className="form-text text-muted"></small>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-6">
                                            <label for="recipient-name" className="col-form-label">Fecha de expiracion:</label>
                                            <input type="text" className="form-control" id="fechaEx" onKeyUp={this.fecha.bind(this)}/>
                                            <small id="nombreHelp" className="form-text text-muted">Ejem: 21/23 o 21-23</small>
                                        </div>
                                        <div className="form-group col-6">
                                            <label for="recipient-name" className="col-form-label">CVC:</label>
                                            <input type="text" className="form-control" id="recipient-name" onKeyUp={this.cvc.bind(this)}/>
                                            <small id="nombreHelp" className="form-text"></small>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="recipient-name" className="col-form-label">Dirección:</label>
                                        <input type="text" className="form-control" id="recipient-name" onChange={this.dirreccion.bind(this)}/>
                                        <small id="nombreHelp" className="form-text text-muted">Ejem: Bolivar 24-34 y Miguel Riofrío</small>
                                    </div>
                                    <div className="form-group" id="textDesc2">
                                        <label for="recipient-name" className="col-form-label">Descripción:</label>
                                        <textarea name="textarea" rows="4" cols="35" onChange={this.descrip.bind(this)}></textarea>
                                        <small id="nombreHelp" className="form-text text-muted">Ejem: Casa de 2 pisos. Cerramiento blanco con cerca Eléctrica. Primer timbre</small>
                                    </div>
                                    <div className="form-group" id="textDesc">
                                        <label for="recipient-name" className="col-form-label">Descripción:</label>
                                        <textarea name="textarea" rows="4" cols="47" onChange={this.descrip.bind(this)}></textarea>
                                        <small id="nombreHelp" className="form-text text-muted">Ejem: Casa de 2 pisos. Cerramiento blanco con cerca Eléctrica. Primer timbre</small>
                                    </div>
                                    <button type="button" class="btn btn-primary" id="confirTar" data-dismiss="modal" onClick={this.pagarTarjeta.bind(this)}>Confirmar</button>
                                    <button type="button" class="btn btn-secondary" id="cancelarTar" data-dismiss="modal">Cancelar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="staticBackdrop" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-body">
                                <p style={{textAlign: 'center', marginTop: '30px', fontSize: '20px', fontWeight: 'bold'}}><i class="fas fa-check" style={{color: '#8adb72', marginRight: '20px'}}></i>Iniciaste Sesión</p>
                            </div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal" style={{backgroundColor: '#8adb72', borderColor: '#8adb72'}}>Continuar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="modal2" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-body">
                                <p style={{textAlign: 'center', marginTop: '30px', fontSize: '20px', fontWeight: 'bold'}}><i class="fas fa-window-close" style={{color: 'red', marginRight: '20px'}}></i>Llene todos lo campos</p>
                            </div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal" style={{backgroundColor: '#8adb72', borderColor: '#8adb72'}}>Continuar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="modal3" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-body">
                                <p style={{textAlign: 'center', marginTop: '30px', fontSize: '20px', fontWeight: 'bold'}}><i class="fas fa-window-close" style={{color: 'red', marginRight: '20px'}}></i>No ha agregado productos en el carrito.</p>
                            </div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal" style={{backgroundColor: '#8adb72', borderColor: '#8adb72'}}>Continuar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="modal4" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content" style={{backgroundColor: 'rgba(0, 0, 0, 0.0)', borderColor: 'rgba(0, 0, 0, 0.0)'}}>
                        <div class="d-flex justify-content-center">
                                <div class="spinner-border" role="status" style={{width: '30px', height: '30px', color: '#8adb72'}}>
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    logout(){
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("conectado");
        window.history.pushState(null, '', '/');
        window.location.reload();
    }

    noTenerC (event) {
        if (event.target.name == 1) {
            console.log('no tiene');
            document.getElementById('crearCuenta').setAttribute('name', '2');
            document.getElementById('crearC').removeAttribute('hidden');
            document.getElementById('iniciarC').setAttribute('hidden', '');
            document.getElementById('crearCuenta').innerHTML = "¿Ya tienes una cuenta? Inicia sesión aquí."; 
            document.getElementById('modalIniciar').innerHTML = "Crear Cuenta"; 
            document.getElementById('botonesSesion2').removeAttribute('hidden');
            document.getElementById('botonesSesion').setAttribute('hidden', '');
        }else {
            console.log('tiene');
            document.getElementById('crearCuenta').setAttribute('name', '1');
            document.getElementById('iniciarC').removeAttribute('hidden');
            document.getElementById('crearC').setAttribute('hidden', '');
            document.getElementById('crearCuenta').innerHTML = "¿No tienes cuenta? Crea una aquí.";
            document.getElementById('modalIniciar').innerHTML = "Iniciar Sesión"; 
            document.getElementById('botonesSesion').removeAttribute('hidden');
            document.getElementById('botonesSesion2').setAttribute('hidden', '');
        }
    }

    nombre (event) {
        this.setState({nombre: event.target.value});
    } 

    cedula (event) {
        this.setState({cedula: event.target.value});
    } 

    numero(event) {
        console.log(event);
        this.setState({numero: event});
      }

    correo1 (event) {
        this.setState({email: event.target.value});
    }

    key (event) {
        this.setState({password2: event.target.value});
    }

    key1 (event) {
        if (event.target.value == this.state.password2) {
            this.setState({password: event.target.value});
            document.getElementById('keyHelp').setAttribute('hidden', '');
        } else {
            document.getElementById('keyHelp').removeAttribute('hidden');
        }
    }

    key3 (event) {
        this.setState({password: event.target.value});
    }

    singIn () {
        const url = window.location.href.split('/');
        const object = {
            nombre: this.state.nombre,
            numero: '+'+this.state.numero,
            cedula: this.state.cedula,
            email: this.state.email
        }
        if(this.state.nombre){
            document.getElementById('nombreHelp').style.color = 'rgb(33, 37, 41)';
            if(this.state.cedula.length == 10){
                document.getElementById('cedulaHelp').style.color = 'rgb(33, 37, 41)';
                if(this.state.numero.length == 12){
                    $('#modal4').modal('show');
                    document.getElementById('numeroHelp').style.color = 'rgb(33, 37, 41)';
                    const email = this.state.email;
                    const password =  this.state.password;
                    firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(res => {
                        firebase.database().ref('Login/' + res.user.uid).set(object).then(ok =>{
                            $('#modal4').modal('hide');                           
                            window.localStorage.setItem('token', res.user.uid);
                            window.sessionStorage.setItem('sesion', 'si');
                            window.history.pushState(null, '', '/');
                            window.location.reload();
                        });
                    })
                    .catch(function(error) {
                        // Handle Errors here.
                        alert(error.message)
                        $('#modal4').modal('hide');
                    });
                }else {
                    document.getElementById('numeroHelp').style.color = 'red';
                    alert('Ingrese el codigo de su región seguido de su número omitiendo el primer 0');
                }
            }else {
                document.getElementById('cedulaHelp').style.color = 'red'
                alert('Ingrese los 10 dígitos de su cédula');
            }
        }else {
            document.getElementById('nombreHelp').style.color = 'red';
        }
    }

    logIn () {
        const email = this.state.email;
        const password =  this.state.password;
        $('#modal4').modal('show');
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then(res => {
              $('#modal4').modal('hide');
              window.localStorage.setItem('token', res.user.uid);
              window.history.pushState(null, '', '/');
              window.location.reload();
          })
          .catch(function(error) {
            // Handle Errors here.
            alert(error.message);
            $('#modal4').modal('hide');
          });
    }

    cancelar(){
        window.sessionStorage.clear();
        window.history.pushState(null, '', '/');
        window.location.reload();
    }

    tarjeta (event) {
        this.setState({focus: 'number'});

        this.setState({tarjeta: event.target.value})
    }

    dueno (event) {
        this.setState({focus: 'name'});

        this.setState({dueno: event.target.value})
    }

    fecha (event) {
        this.setState({focus: 'expiry'});

        this.setState({fecha: event.target.value})
    }

    cvc (event) {
        this.setState({focus: 'cvc'});

        this.setState({cvc: event.target.value})
    }

    dirreccion (event) {
        this.setState({dir: event.target.value});
    }

    descrip (event) {
        this.setState({descrip: event.target.value});
    }

    pagarTarjeta () {
        let mes = '';
        let anio = '';
        if (window.sessionStorage.getItem('array')){
            if (this.state.tarjeta.length > 0){
                if (this.state.dueno.length > 0) {
                    if (this.state.fecha.length > 0) {
                        if (this.state.cvc.length > 0) {
                            $('#modal4').modal('show');
                            if (this.state.fecha.length ==4){
                                mes = this.state.fecha.charAt(0)+this.state.fecha.charAt(1);
                                anio = this.state.fecha.slice(2)
                            } else if (this.state.fecha.length == 5) {
                                mes = this.state.fecha.charAt(0)+this.state.fecha.charAt(1);
                                anio = this.state.fecha.slice(3)
                            } else {
                                alert('Fecha mal ingresada');
                            }
                            const objetc4 = {
                                datos: JSON.parse(window.localStorage.getItem('conectado')),
                                pedido: JSON.parse(window.sessionStorage.getItem('array')),
                                direccion: this.state.dir,
                                descripcion: this.state.descrip,
                                monto: parseFloat(window.localStorage.getItem('totalPagar')).toFixed(2),
                                tipo: 'credito'
                            }

                            var datos = {
                                cardNumber: this.state.tarjeta,
                                expirationMonth: mes,
                                expirationYear: anio,
                                holderName: this.state.dueno.toUpperCase(),
                                securityCode: this.state.cvc
                            }
                            /*const datos = {cardNumber: '4500810001450922', expirationMonth: '02', expirationYear: '23', 
                            holderName: 'LUIS SANCHEZ L', securityCode: '466'};*/

                            const key = crypto.enc.Utf8.parse('adf36d46c58344129ffae86f1ed197c3');
                            const iv = crypto.enc.Utf8.parse(''); 
                            const encrypted = crypto.AES.encrypt(JSON.stringify(datos), key,{ iv: iv });

                            var codificado = encrypted.ciphertext.toString(crypto.enc.Base64); 

                            const object2 = {
                                data: codificado,
                                documentId: JSON.parse(window.localStorage.getItem('conectado')).cedula.toString(),
                                amount: parseFloat(window.localStorage.getItem('totalPagar')).toFixed(2)*100,
                                amountWithoutTax: parseFloat(window.localStorage.getItem('totalPagar')).toFixed(2)*100,
                                clientTransactionId: window.localStorage.getItem('transId').toString(),
                                email: JSON.parse(window.localStorage.getItem('conectado')).email.toString()
                            };

                            request
                                .post('https://pay.payphonetodoesposible.com/api/v2/transaction/create')
                                .send(object2)
                                .set('authorization','Bearer aHlQqxjRs8yMhM18BtdykUKfpgvRQ_mY8YNqkSHmLrnP1gmrLSEoGxIqPDoZRaM06dVMYk8cLXyB9BmzDRG4GyEXqiqolxG1p2arppfntkjlTSlx2T-fGlACbuqr7m2EMn_OBSce37p6ZKnVisyltv9jhQ0sU1VaHyKa6cFDMmKdWKcyhnek55lyMl0UPjp1cifDQ6EHVA1-pw2vndYfvEFYPgEc-Kc3eLHIAnOecabTHBPNA7Ny5z8elAZ4Jrpxcj95AhNx18XdWlqK1SJKQl-j3z2fa_nWyIjmp_3tuE0tBGp_VSGYR6_qKoxyvhkAM91W0Q') 
                                .then(res => {
                                    console.log(res);
                                    request
                                        .put('https://prueba-next-u-react.firebaseio.com/transacion.json')
                                        .send({id: parseFloat(window.localStorage.getItem('transId'))})
                                        .then(ok => {
                                            firebase.database().ref('pedidos/' + window.localStorage.getItem('transId'),).set(objetc4).then(ok =>{
                                                if (res.body.statusCode == 2){
                                                    alert('Pago no realizado');
                                                    window.location.reload();
                                                }else {
                                                    $('#modal4').modal('hide');                           
                                                    console.log(res);
                                                    alert('Pago Aprobado');
                                                    window.sessionStorage.setItem('pago', 'aprobado');
                                                    window.location.reload();
                                                }
                                            });
                                        });
                                })
                                .catch(err =>{
                                    console.log(err);
                                    alert('No se ha podido realizar el pago. Verifique los datos de tarjeta.')
                                    window.location.reload();
                                });
                        } else {
                            $('#modal2').modal('show')
                        }
                    } else {
                        $('#modal2').modal('show')
                    }
                } else {
                    $('#modal2').modal('show')
                }
            } else {
                $('#modal2').modal('show')
            }
        } else {
            $('#modal3').modal('show')
        }
    }

    credito () {
        document.getElementById('formPago').removeAttribute('hidden');
        document.getElementById('cuentasPago').setAttribute('hidden', '');
        document.getElementById('seleccionarPago').setAttribute('hidden', '');
    }

    trans () {
        document.getElementById('cuentasPago').removeAttribute('hidden');
        document.getElementById('formPago').setAttribute('hidden', '');
        document.getElementById('seleccionarPago').setAttribute('hidden', '');
    }

    reiniciarPago () {
        document.getElementById('seleccionarPago').removeAttribute('hidden');
        document.getElementById('formPago').setAttribute('hidden', '');
        document.getElementById('cuentasPago').setAttribute('hidden', '');
    }

    transferencia () {
        if (window.sessionStorage.getItem('array')){
            const objetc4 = {
                datos: JSON.parse(window.localStorage.getItem('conectado')),
                pedido: JSON.parse(window.sessionStorage.getItem('array')),
                direccion: this.state.dir,
                descripcion: this.state.descrip,
                monto: parseFloat(window.localStorage.getItem('totalPagar')).toFixed(2),
                tipo: 'transferencia'
            }

            $('#modal4').modal('show');

            request
                .put('https://prueba-next-u-react.firebaseio.com/transacion.json')
                .send({id: parseFloat(window.localStorage.getItem('transId'))})
                .then(res => {
                    firebase.database().ref('pedidos/' + window.localStorage.getItem('transId'),).set(objetc4).then(ok =>{
                        const productos = JSON.parse(window.sessionStorage.getItem('array'));
                        const n = productos.length;
                        let mensaje = '';
                        for (let i = 0; i < n; i++) {
                            const menos = productos[i].id.length;
                            mensaje = mensaje +  productos[i].cantidad.toString() + ' ' + productos[i].nombre.slice(0, -menos).toString() + '\n'
                        }
                        const nombre = JSON.parse(window.localStorage.getItem('conectado')).nombre.split(' ');
                        const hola = nombre[0].charAt(0)+nombre[0].slice(1);
                        request
                            .post('https://api.chat-api.com/instance119141/sendMessage?token=t8p1ghjgg3zxmlmz')
                            .send({
                                phone: JSON.parse(window.localStorage.getItem('conectado')).numero, 
                                body: "Hola "+hola+ "👋, has reservado un pedido para pagar con transferencia en despacha.me\n\n🧾Pedido:\n\n "+ mensaje +"\n💳Total: $"+parseFloat(window.localStorage.getItem('totalPagar')).toFixed(2)+"\n\nPuedes realizar tu pago a las siguientes cuentas:\n\nBANCO DE PICHINCHA\n CUENTA CORRIENTE\n#2100183416\nRUC: 1191760871001\nMail: contabilidad@enerwicorp.com.\n\nBANCO DE LOJA\nCUENTA CORRIENTE\n#2902103942\nRUC: 1191760871001\nMail: contabilidad@enerwicorp.com\n\nResponde este mensaje con un comprobante de transacción. Puede ser un archivo pdf o un screen-shot. Una vez confirmado el pago su pedido será despachado. 😎"
                            })
                            .then(res => {
                                window.sessionStorage.removeItem('array');
                                request
                                    .post('https://api.chat-api.com/instance119141/sendMessage?token=t8p1ghjgg3zxmlmz')
                                    .send({
                                        phone: '593993560952', 
                                        body: "Hola Augusto 👋, han hecho una reserva de un pedido para pagar con transferencia en despacha.me\n\n🧾Pedido:\n\n "+ mensaje +"\n💳Total: $"+parseFloat(window.localStorage.getItem('totalPagar')).toFixed(2)+"\n\nPosiblemente envíen el comprobante de pago por este medio.\n\n Datos del cliente:\n\nNombre: "+JSON.parse(window.localStorage.getItem('conectado')).nombre+"\nCédula: "+JSON.parse(window.localStorage.getItem('conectado')).cedula+"\nNúmero: "+JSON.parse(window.localStorage.getItem('conectado')).numero
                                    })
                                    .then(res => {
                                        window.location.reload();
                                    });
                            });
                    });
                });
        } else {
            $('#modal3').modal('show');
        }
    }

    componentDidMount() {

        if(window.localStorage.getItem('token')){
            document.getElementById('userIn').removeAttribute('hidden');
            document.getElementById('userOut').setAttribute('hidden', '');
            document.getElementById('botonModal2').removeAttribute('hidden');
            document.getElementById('botonModal1').setAttribute('hidden', '');
            $('#staticBackdrop').modal('show');
            request
                .get('https://prueba-next-u-react.firebaseio.com/Login/'+window.localStorage.getItem('token')+'.json')
                .set('Content-Type','aplication/json') 
                .then(res =>{
                    window.localStorage.setItem('conectado', JSON.stringify(res.body));
                    if (window.sessionStorage.getItem('sesion')) {
                        console.log('entra');
                        const nombre = JSON.parse(window.localStorage.getItem('conectado')).nombre.split(' ');
                        const hola = nombre[0].charAt(0)+nombre[0].slice(1);
                        window.sessionStorage.removeItem('sesion');
                        request
                            .post('https://api.chat-api.com/instance119141/sendMessage?token=t8p1ghjgg3zxmlmz')
                            .send({
                                phone: JSON.parse(window.localStorage.getItem('conectado')).numero, 
                                body: "Hola "+hola+ "👋, gracias por crearte una cuenta en despacha.me\n\nBienvenido al futuro de menos apps, más soluciones😎 Recuerda que puedes suscribirte a nuestro plan de entrega de alimentos mensual.\n\nVisita:despacha.me"
                            })
                            .then(res => {
                                console.log(res);
                            });
                    }
                })
                .catch(err =>{alert('No se han podido cargar los datos de sesión, vuelva a intentarlo')});
       } else {
            document.getElementById('userOut').removeAttribute('hidden');
            document.getElementById('userIn').setAttribute('hidden', '');
            document.getElementById('botonModal1').removeAttribute('hidden');
            document.getElementById('botonModal2').setAttribute('hidden', '');
       }

        request
            .get('https://prueba-next-u-react.firebaseio.com/transacion.json')
            .set('Content-Type','aplication/json') 
            .then((res => {
                const aux = parseFloat(res.body.id) + 1;
                window.localStorage.setItem('transId', aux);
            }));

        if (window.sessionStorage.getItem('pago')) {
            const productos = JSON.parse(window.sessionStorage.getItem('array'));
            const n = productos.length;
            let mensaje = '';
            for (let i = 0; i < n; i++) {
                const menos = productos[i].id.length;
                mensaje = mensaje + '\n' + productos[i].cantidad.toString() + ' ' + productos[i].nombre.slice(0, -menos).toString()
            }
            const nombre = JSON.parse(window.localStorage.getItem('conectado')).nombre.split(' ');
            const hola = nombre[0].charAt(0)+nombre[0].slice(1);
            request
                .post('https://api.chat-api.com/instance119141/sendMessage?token=t8p1ghjgg3zxmlmz')
                .send({
                    phone: JSON.parse(window.localStorage.getItem('conectado')).numero, 
                    body: "Hola "+hola+ "👋, gracias por tu pago en despacha.me\n\n🧾Pedido:\n\ "+ mensaje +"\n\n💳Total: $"+parseFloat(window.localStorage.getItem('totalPagar')).toFixed(2)+"\n\n🕐Hora de Entrega: En 24 horas máximo.\n\nHemos enviado el voucher a su correo 📩.\n\nSi tiene preguntas responde a este mensaje 😎"
                })
                .then(res => {
                    console.log(res);
                    request
                        .post('https://api.chat-api.com/instance119141/sendMessage?token=t8p1ghjgg3zxmlmz')
                        .send({
                            phone: JSON.parse(window.localStorage.getItem('conectado')).numero, 
                            body: "Hola Augusto 👋, han hecho una compra en despacha.me\n\n🧾Pedido:\n\n "+ mensaje +"\n💳Total: $"+parseFloat(window.localStorage.getItem('totalPagar')).toFixed(2)+"\n\n Datos del cliente:\n\nNombre: "+JSON.parse(window.localStorage.getItem('conectado')).nombre+"\nCédula: "+JSON.parse(window.localStorage.getItem('conectado')).cedula+"\nNúmero: "+JSON.parse(window.localStorage.getItem('conectado')).numero+"\nDirección: "+this.state.dir+"\nDescripción: "+this.state.descrip
                        })
                        .then(res => {
                            window.location.reload();
                        });
                });
        }

        if (window.sessionStorage.getItem('array')){
            if (window.sessionStorage.getItem('pago')) {
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
                window.sessionStorage.removeItem('pago');
                window.sessionStorage.removeItem('array');
            }else {    
                document.getElementById('iconoCarrito').style.animation = "miAnimacion 1s";
                document.getElementById('iconoCarrito').style.color = "#ff6666";
                document.getElementById('iconoCarrito').style.fontSize = "25px";

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
                    nombre.style.fontWeight = 'bold'
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
                    document.getElementById('precioCarro').innerHTML = '$'+total.toFixed(2).toString();
                }
            }
        }

       document.getElementById('tableas').onscroll = () =>{
           const size1 = screen.height - 60 - 60;
           const size2 = screen.height - 133.7 - 141 - 60;
           if (screen.width < 700) {
                if (document.getElementById('tableas').scrollTop > 180) {
                    document.getElementById('comienza').setAttribute('hidden', '');
                    document.getElementById('head').setAttribute('hidden', '');
                    document.getElementById('barrera').style.boxShadow = '2px 2px rgba(184,184,184,1)';
                    document.getElementById('tableas').style.height = size1.toString()+'px';
                } else {
                    document.getElementById('comienza').removeAttribute('hidden');
                    document.getElementById('head').removeAttribute('hidden');
                    document.getElementById('barrera').style.boxShadow = 'none'
                    document.getElementById('tableas').style.height = size2.toString()+'px';
                }
           } 
       }
       if (screen.width < 700) {
            document.getElementById('textDesc').setAttribute('hidden', '');
            document.getElementById('textDesc2').removeAttribute('hidden');
       }else {
            document.getElementById('textDesc2').setAttribute('hidden', '');
            document.getElementById('textDesc').removeAttribute('hidden');
       }
    } 
}

export default Barra;