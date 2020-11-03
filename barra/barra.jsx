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
            veri: 1,
            efectivo: 'exacto',
            admin: [],
            usuarioMetodos: []
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
                            <div className="col-6 col-lg-4 navItem" aria-haspopup="true" aria-expanded="false" onClick = {this.abrirDrop.bind(this)}>
                                <div id="carroInicio">
                                    <a id="carrito"  className="navItem" ><i class="fas fa-shopping-cart icon" id="iconoCarrito"></i></a>
                                    <div className="dropdown-menu" id="dropCarro">
                                        <div id="carritoBody">
                                            <h4 style={{textAlign: 'center', fontWeight: 'bold', marginBottom: '40px', marginTop: '20px'}}>No has agreagado productos</h4>
                                            <img src="https://res.cloudinary.com/indev/image/upload/v1587361319/frutas/WhatsApp_Image_2020-04-19_at_23.40.56_wmrt9q.jpg" width="65%" style={{display: 'block', margin: '0 auto'}} />
                                        </div>
                                        <div class="dropdown-divider"></div>
                                        <div id="carritoFoot">
                                            <p style={{textAlign: 'center', margin: '5px'}} hidden>IVA: $0</p>
                                            <p style={{textAlign: 'center', margin: '5px'}}>Envío: $2</p>
                                            <p style={{textAlign: 'center', margin: '5px', marginBottom: '20px'}} id="descuentof"></p>
                                            <h1 id="precioCarro" style={{marginTop: '5px'}}>0$</h1>
                                            <button type="button" id="botonModal1" class="btn btn-success" data-toggle="modal" data-target="#exampleModal" hidden>Pagar</button>
                                            <button type="button" id="botonModal2" class="btn btn-success" data-toggle="modal" data-target="#exampleModal3" onClick={this.reiniciarPago.bind(this)}>Pagar</button>
                                            <Button color="secondary" id="espacio1" onClick={this.cancelar.bind(this)}>Vaciar Carrito</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-4">
                                <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="navItem" id="userIn" hidden><i class="fa fa-user icon"></i></a>
                                <div className="dropdown-menu">
                                    <h6 className="dropdown-header" id="cuenta">Cuenta</h6>
                                    <div class="dropdown-divider"></div>
                                    <a className="dropdown-item" onClick={this.logout.bind(this)}><i class="fas fa-sign-out-alt icon2"></i>Cerrar Sesión</a>
                                    <a className="dropdown-item" id="adminSi" onClick={this.admin.bind(this)} hidden><i class="fas fa-users-cog icon2"></i>Admin</a>
                                </div>
                                <a className="navItem" id="userOut"><i class="fas fa-user-times icon" data-toggle="modal" data-target="#exampleModal"></i></a>
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
                                    <small id="numeroHelp" className="form-text">Selecione su región y coloque su número omitiendo el 0. Ejem: +593995258574.</small>
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
                                <button type="button" class="btn btn-success" id="botonCon" data-dismiss="modal" style={{backgroundColor: '#8adb72', borderColor: '#8adb72'}} onClick={this.logIn.bind(this)}>Continuar</button>
                                <button type="button" class="btn btn-secondary" id="botonCan" data-dismiss="modal">Cancelar</button>
                            </div>
                            <div id="botonesSesion2" hidden>
                                <button type="button" class="btn btn-success" id="botonCon" style={{backgroundColor: '#8adb72', borderColor: '#8adb72'}} onClick={this.enviarMen.bind(this)} >Continuar</button>
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
                                <h3 style={{textAlign: 'center', fontWeight: 'bold', marginTop: '20px', marginBottom: '20px'}}>Total a pagar:</h3>
                                <p style={{textAlign: 'center', margin: '5px', marginBottom: '20px'}} id="descuentof"></p>
                                <h3 id="totalPagarYa" style={{textAlign: 'center', fontWeight: 'bold', marginBottom: '20px'}}>$0</h3>
                                <button type="button" class="btn btn-primary" style={{display: 'block', margin: '0 auto', backgroundColor:'#ff6666', borderColor: "#ff6666"}} data-toggle="modal" data-target="#modal7" data-dismiss="modal">Cupón</button>
                                <h3 style={{marginTop: '25px',paddingTop: '15px', marginBottom: '40px', textAlign: 'center', fontWeight: 'bold', borderTop: '1px solid gainsboro'}}>Selecione su método de pago:</h3>
                                <button type="button" class="btn btn-primary" style={{display: 'block', margin: '0 auto', backgroundColor:'#8adb72', borderColor: "#8adb72", marginBottom: '20px'}} onClick={this.credito.bind(this)}>Tarjeta de Crédito</button>
                                <button type="button" class="btn btn-primary" style={{display: 'block', margin: '0 auto', backgroundColor:'#8adb72', borderColor: "#8adb72", marginBottom: '20px'}} onClick={this.trans.bind(this)}>Tranferencia Bancaria</button>
                                <button type="button" class="btn btn-primary" style={{display: 'block', margin: '0 auto', backgroundColor:'#8adb72', borderColor: "#8adb72", marginBottom: '50px'}} onClick={this.efectivo.bind(this)}>Pago en efectivo</button>
                            </div>
                            <div id="tarjetasPagar" style={{padding: '20px', width: '100%'}} hidden>
                                <h5 style={{textAlign: 'center', fontWeight: 'bold', marginTop: '5px', marginBottom: '30px'}}>Seleccione la tarjeta con la que realizará el pago:</h5>
                                <div id="llenarTarjetas" style={{width: '100%'}}></div>
                                <p className="form-text text-muted" id="tarjetas" style={{textAlign: 'center', marginTop: '15px', fontSize: '15px'}} onClick={this.otraTarjeta.bind(this)}>Pagar con otra tarjeta</p>
                            </div>
                            <div id="cuentasPago" style={{padding: '20px'}} hidden>
                                <h5 style={{textAlign: 'center', fontWeight: 'bold', marginTop: '5px', marginBottom: '30px'}}>Pago con transferencia:</h5>
                                <p>1. Llene los campos de dirección y descripción.<br></br>
                                    2. Seleccione “Confirmar”.<br></br>
                                    3. Los datos de transferencia le llegarán a su WhatsApp.<br></br>
                                    4. Respoda el mensaje de WhatsApp con el comprobante de deposito.<br></br>
                                    5. ¡Su pedido será <strong>Despachado!</strong>.<br></br>
                                    </p>
                                <div className="form-group">
                                    <label for="recipient-name" className="col-form-label">Dirección:</label>
                                    <input type="text" className="form-control" id="recipient-name" onChange={this.dirreccion.bind(this)}/>
                                    <small id="nombreHelp" className="form-text text-muted">Ejem: Bolivar 24-34 y Miguel Riofrío</small>
                                </div>
                                <div className="form-group" id="textDesc21">
                                    <label for="recipient-name" className="col-form-label">Descripción:</label>
                                    <textarea name="textarea" rows="4" cols="33" onChange={this.descrip.bind(this)}></textarea>
                                    <small id="nombreHelp" className="form-text text-muted">Ejem: Casa de 2 pisos. Cerramiento blanco con cerca Eléctrica. Primer timbre</small>
                                </div>
                                <div className="form-group" id="textDesc1">
                                    <label for="recipient-name" className="col-form-label">Descripción:</label>
                                    <textarea name="textarea" rows="4" cols="40" onChange={this.descrip.bind(this)}></textarea>
                                    <small id="nombreHelp" className="form-text text-muted">Ejem: Casa de 2 pisos. Cerramiento blanco con cerca Eléctrica. Primer timbre</small>
                                </div>
                                <button type="button" class="btn btn-primary" id="confirTar" data-dismiss="modal" style={{marginTop: '20px'}} onClick={this.transferencia.bind(this)}>Confirmar</button>
                                <button type="button" class="btn btn-secondary" id="cancelarTar" data-dismiss="modal">Cancelar</button>
                            </div>
                            <div id="efectivoPago" style={{padding: '20px'}} hidden>
                                <h5 style={{textAlign: 'center', fontWeight: 'bold', marginTop: '5px', marginBottom: '30px'}}>Pago en efectivo</h5>
                                <p>ATENCIÓN: Al confirmar se guardará su pedido y lo recibirá en un máximo de 24 horas. Un mensaje por WhatsApp le será enviado como confirmación.</p>
                                <div className="form-group">
                                    <label for="recipient-name" className="col-form-label">Cambio:</label>
                                    <input type="text" className="form-control" id="recipient-name" placeholder="40.00" onChange={this.billete.bind(this)}/>
                                    <small id="nombreHelp" className="form-text text-muted">Si no tiene disponible el monto exacto de la compra, ingrese el valor que dispone para tener su cambio listo.</small>
                                </div>
                                <div className="form-group">
                                    <label for="recipient-name" className="col-form-label">Dirección:</label>
                                    <input type="text" className="form-control" id="recipient-name" onChange={this.dirreccion.bind(this)}/>
                                    <small id="nombreHelp" className="form-text text-muted">Ejem: Bolivar 24-34 y Miguel Riofrío</small>
                                </div>
                                <div className="form-group" id="textDesc31">
                                    <label for="recipient-name" className="col-form-label">Descripción:</label>
                                    <textarea name="textarea" rows="4" cols="33" onChange={this.descrip.bind(this)}></textarea>
                                    <small id="nombreHelp" className="form-text text-muted">Ejem: Casa de 2 pisos. Cerramiento blanco con cerca Eléctrica. Primer timbre</small>
                                </div>
                                <div className="form-group" id="textDesc3">
                                    <label for="recipient-name" className="col-form-label">Descripción:</label>
                                    <textarea name="textarea" rows="4" cols="40" onChange={this.descrip.bind(this)}></textarea>
                                    <small id="nombreHelp" className="form-text text-muted">Ejem: Casa de 2 pisos. Cerramiento blanco con cerca Eléctrica. Primer timbre</small>
                                </div>
                                <button type="button" class="btn btn-primary" id="confirTar" data-dismiss="modal" style={{marginTop: '20px'}} onClick={this.efect.bind(this)}>Confirmar</button>
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
                                    <div class="custom-control custom-switch" style={{marginBottom: '20px'}}>
                                        <input type="checkbox" id="metodoPago" name="false" class="custom-control-input" onClick={this.guardarPago.bind(this)}/>
                                        <label class="custom-control-label" for="metodoPago">Guardar método de pago</label>
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
                            <div class="modal-body" id='mensajeMal'>
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
                <div class="modal fade" id="confirmarNum" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-body" id="confirCall">
                                <p style={{textAlign: 'center', marginTop: '20px', marginBottom: '20px', fontSize: '20px', fontWeight: 'bold'}}>Estamos mejorando por usted.<br></br> Ingrese sus datos para un corta verificación</p>
                                <div className="form-group">
                                    <label for="recipient-name" className="col-form-label">Nombre:</label>
                                    <input type="text" className="form-control" id="recipient-name" onChange={this.nombre.bind(this)}/>
                                    <small id="nombreHelp">Nombres y apellidos. Ejem: Carlos Sánchez .</small>
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
                                    <small id="numeroHelp" className="form-text">Selecione su región y coloque su número. Ejem: +593995258574.</small>
                                </div>
                                <div className="form-group">
                                    <label for="recipient-name" className="col-form-label">Cédula:</label>
                                    <input type="text" className="form-control" id="recipient-name" onChange={this.cedula.bind(this)}/>
                                    <small id="cedulaHelp" className="form-text ">Ingrese su número de cédula. Ejem: 1101113321.</small>
                                </div>
                            </div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" onClick={this.cancelarVer.bind(this)} style={{backgroundColor: '#8adb72', borderColor: '#8adb72'}}>Continuar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="modal5" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-body" id='mensajeMal'>
                                <p style={{textAlign: 'center', marginTop: '30px', fontSize: '20px', fontWeight: 'bold'}}>Ingrese el código enviado a su WhatsApp. Puede tardar unos segundos.</p>
                                <input style={{display: 'block', margin: '0 auto', width: '60%'}} onChange={this.codigoCel.bind(this)}/>
                            </div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" style={{backgroundColor: '#8adb72', borderColor: '#8adb72'}} onClick={this.singIn.bind(this)}>Continuar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="modal6" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-body" id='mensajeMal'>
                                <p id="descMen" style={{textAlign: 'center', marginTop: '30px', fontSize: '20px', fontWeight: 'bold'}}>El valor de su compra debe ser mayor a $30.</p>
                            </div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" style={{backgroundColor: '#8adb72', borderColor: '#8adb72'}} data-dismiss="modal">Confirmar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="modal7" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-body" id='mensajeMal'>
                                <p style={{textAlign: 'center', marginTop: '30px', fontSize: '20px', fontWeight: 'bold'}}>Ingrese el código del cupón.</p>
                                <input style={{display: 'block', margin: '0 auto', width: '60%'}} onChange={this.codigoCupon.bind(this)}/>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                <button type="button" class="btn btn-secondary" style={{backgroundColor: '#8adb72', borderColor: '#8adb72'}} onClick={this.descuento.bind(this)}>Continuar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    

    guardarPago (event) {
        if (document.getElementById('metodoPago').getAttribute('name') == 'false') {
            document.getElementById('metodoPago').setAttribute('name', 'true');
            document.getElementById('metodoPago').setAttribute('checked', true);
            console.log('true');
        } else {
            document.getElementById('metodoPago').setAttribute('name', 'false');
            document.getElementById('metodoPago').setAttribute('checked', false);
            console.log('false');
        }
    }

    admin () {
        document.getElementById('dibujar').innerHTML = '';
        document.getElementById('serchWid').setAttribute('hidden', '');
        document.getElementById('adminBusc').removeAttribute('hidden');
    }
 
    billete (event) {
        this.setState({efectivo: event.target.value});
    }

    codigoCupon (event) {
        this.setState({codigoCupon: event.target.value});
    }

    descuento () {
        if (window.localStorage.getItem('cupon')) {
            document.getElementById('descMen').innerHTML = 'Este cupón ya se ha activado antes';
            $('#modal7').modal('hide');
            $('#modal6').modal('show');
        } else {
            if (this.state.nombreDesc == this.state.codigoCupon){
                if (window.localStorage.getItem('totalPagar')) {
                    if (parseFloat(window.localStorage.getItem('totalPagar')) > 30) {
                        request
                            .post('https://us1.api.voucherify.io/v1/vouchers/'+this.state.descCod+'/redemption')
                            .set('X-App-Id', 'd3fb9a6b-41c8-4c7d-a94a-3793318c58bf')
                            .set('X-App-Token', 'c7ffc529-5da3-4a6c-966b-432bb4f65f24')
                            .send({})
                            .then(res => {
                                const desc = res.body.voucher.discount.amount_off/100;
                                window.localStorage.setItem('valorDesc', desc.toString());
                                const descTotal = parseFloat(window.localStorage.getItem('totalPagar')) - desc;
                                document.getElementById('descuentof').innerHTML = 'Descuento: -$' + desc;
                                document.getElementById('totalPagarYa').innerHTML = '$'+descTotal.toFixed(2);
                                document.getElementById('precioCarro').innerHTML = '$'+descTotal.toFixed(2);
                                document.getElementById('descMen').innerHTML = 'Tu cupón ha sido activado';
                                $('#modal7').modal('hide');
                                $('#modal6').modal('show');
                                window.localStorage.setItem('totalPagar', descTotal.toFixed(2).toString());
                                window.localStorage.setItem('cupon', 'activo');
                            })
                    } else {
                        document.getElementById('descMen').innerHTML = 'El valor de su compra debe ser mayor a $30.';
                        $('#modal7').modal('hide');
                        $('#modal6').modal('show');
                    }
                }
            } else {
                document.getElementById('descMen').innerHTML = 'El código del cupón es incorrecto';
                $('#modal7').modal('hide');
                $('#modal6').modal('show');
            }
        }
    }

    codigoCel (event) {
        console.log(event.target.value);
        this.setState({codigo: event.target.value});
    }

    enviarMen () {
        if(this.state.nombre){
            document.getElementById('nombreHelp').style.color = 'rgb(33, 37, 41)';
            if(this.state.cedula.length == 10){
                document.getElementById('cedulaHelp').style.color = 'rgb(33, 37, 41)';
                    $('#exampleModal').modal('hide');
                    $('#modal5').modal('show');
                    request
                        .post('https://api.chat-api.com/instance119141/sendMessage?token=t8p1ghjgg3zxmlmz')
                        .send({
                            phone: this.state.numero, 
                            body: "Tu código es: "+window.localStorage.getItem('transId').toString()
                        })
                        .then(res => {
                            console.log(res);
                        });
                }else {
                    document.getElementById('cedulaHelp').style.color = 'red'
                    alert('Ingrese los 10 dígitos de su cédula');
                }
            }else {
                document.getElementById('nombreHelp').style.color = 'red';
            }
    }

    logout(){
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("conectado");
        window.history.pushState(null, '', '/');
        firebase.auth().signOut().then(function() {
            console.log('deslogueado');
          });
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
        if (this.state.codigo == window.localStorage.getItem('transId').toString()) {
            const url = window.location.href.split('/');
            const object = {
                nombre: this.state.nombre,
                numero: '+'+this.state.numero,
                cedula: this.state.cedula,
                email: this.state.email,
                verificado: true,
            }
            $('#modal5').modal('hide');
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
        } else {
            alert('Ingrese bien el código o verifique su número');
            window.location.reload();
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
        window.sessionStorage.removeItem('array');
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
        window.localStorage.setItem('dir', this.state.dir);
    }

    descrip (event) {
        this.setState({descrip: event.target.value});
        window.localStorage.setItem('descrip', this.state.descrip);
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
                                            firebase.database().ref('pedidos/' + window.localStorage.getItem('transId')).set(objetc4).then(ok =>{
                                                if (res.body.statusCode == 2){
                                                    alert('Pago no realizado');
                                                    window.location.reload();
                                                }else {
                                                    const email1 = JSON.parse(window.localStorage.getItem('conectado'));
                                                    const productos = JSON.parse(window.sessionStorage.getItem('array'));
                                                    const n = productos.length;
                                                    let mensaje = '';
                                                    for (let i = 0; i < n; i++) {
                                                        const menos = productos[i].id.length;
                                                        mensaje = mensaje +  productos[i].cantidad.toString() + ' ' + productos[i].nombre.toString() + ' / ' + productos[i].unidad + '\n';
                                                    }
                                                    const nombre = JSON.parse(window.localStorage.getItem('conectado')).nombre.split(' ');
                                                    const hola = nombre[0].charAt(0)+nombre[0].slice(1);
                                                    let templateParams = {
                                                        message_html: mensaje + '\n\n 💳Total: $'+parseFloat(window.localStorage.getItem('totalPagar')).toFixed(2),
                                                        send_to: email1.email,
                                                        cc_to: "juandiegopalacio@aol.com",
                                                        nombre: hola
                                                    };
                                                    if (document.getElementById('metodoPago').getAttribute('name') == 'true') {
                                                        firebase.database().ref('Login/'+window.localStorage.getItem('token') + '/metodos/' + this.state.numTarj).set({
                                                            tarjeta: codificado,
                                                            numero: this.state.tarjeta.slice(0, 4),
                                                            nombre: this.state.dueno.toUpperCase(),
                                                            id: this.state.numTarj,
                                                            direc: this.state.dir,
                                                            desc: this.state.descrip
                                                        }).then(ok =>{
                                                        });
                                                    }
                                                    emailjs.send('gmail', 'template_pxRoAu15', templateParams)
                                                        .then(res => {
                                                            console.log('Email successfully sent!')
                                                        })
                                                        .catch(err =>{console.log(err);})
                                                    request
                                                        .post('https://api.chat-api.com/instance119141/sendMessage?token=t8p1ghjgg3zxmlmz')
                                                        .send({
                                                            phone: JSON.parse(window.localStorage.getItem('conectado')).numero, 
                                                            body: "Hola "+hola+ "👋, gracias por tu pago en despacha.me\n\n🧾Pedido:\n\ "+ mensaje +"\n\n💳Total: $"+parseFloat(window.localStorage.getItem('totalPagar')).toFixed(2)+"\n\n🕐Hora de Entrega: En 24 horas máximo.\n\nHemos enviado el voucher a su correo 📩.\n\nSi tiene preguntas responde a este mensaje 😎"
                                                        })
                                                        .then(res => {
                                                            request
                                                                .post('https://api.chat-api.com/instance119141/sendMessage?token=t8p1ghjgg3zxmlmz')
                                                                .send({
                                                                    phone: '593993560952', 
                                                                    body: "Hola Augusto 👋, han hecho una compra en despacha.me\n\n🧾Pedido:\n\n "+ mensaje +"\n💳Total: $"+parseFloat(window.localStorage.getItem('totalPagar')).toFixed(2)+"\n\n Datos del cliente:\n\nNombre: "+JSON.parse(window.localStorage.getItem('conectado')).nombre+"\nCédula: "+JSON.parse(window.localStorage.getItem('conectado')).cedula+"\nNúmero: "+JSON.parse(window.localStorage.getItem('conectado')).numero+"\nDirección: "+window.localStorage.getItem('dir')+"\nDescripción: "+window.localStorage.getItem('descrip')
                                                                })
                                                                .then(res => {
                                                                    $('#modal4').modal('hide');                           
                                                                    console.log(res);
                                                                    alert('Pago Aprobado');
                                                                    window.sessionStorage.setItem('pago');
                                                                    window.localStorage.removeItem('cupon');
                                                                    window.location.reload();
                                                                });
                                                        });
                                                }
                                            });
                                        });
                                })
                                .catch(err =>{
                                    console.log(err);
                                    alert('No se ha podido realizar el pago. Verifique los datos de tarjeta.');
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
        if (this.state.metodoPag){
            document.getElementById('formPago').setAttribute('hidden', '');
            document.getElementById('cuentasPago').setAttribute('hidden', '');
            document.getElementById('seleccionarPago').setAttribute('hidden', '');
            document.getElementById('efectivoPago').setAttribute('hidden', '');
            document.getElementById('tarjetasPagar').removeAttribute('hidden');

            const tarjetas = document.getElementById('llenarTarjetas');
            tarjetas.innerHTML = '';
            const n = this.state.usuarioMetodos.length;
            for (let i = 0; i < n; i ++) {
               const div1 = document.createElement('div');
               div1.style.width = '100%';
               div1.style.display = 'block';
               div1.style.margin = '0 auto';
               div1.style.padding = '10px';
               
               const div2 = document.createElement('div');
               div2.style.border = '1px solid rgb(255, 102, 102)';
               div2.style.borderRadius = '10px';
               div2.style.padding = '5px';
               div2.style.paddingTop = '5px';
               div2.style.backgroundColor = 'rgb(255, 102, 102)';
               div2.style.color = 'white';
               div2.style.fontWeight = 'bold';
               div2.onmouseover = () => {
                    div2.style.animation = 'tarjetas 0.7s';
                    setTimeout (function (){div2.style.animation = 'none'}, 700);
                    div2.style.backgroundColor = '#8adb72';
                    div2.style.borderColor = '#8adb72';
               }
               div2.onmouseout = () => {
                    div2.style.animation = 'none'
                    div2.style.backgroundColor = '#ff6666';
                    div2.style.borderColor = '#ff6666';
               }
               div2.onclick = () => {
                if (window.sessionStorage.getItem('array')){
                    $('#modal4').modal('show');
                    const objetc4 = {
                        datos: JSON.parse(window.localStorage.getItem('conectado')),
                        pedido: JSON.parse(window.sessionStorage.getItem('array')),
                        direccion: this.state.dir,
                        descripcion: this.state.descrip,
                        monto: parseFloat(window.localStorage.getItem('totalPagar')).toFixed(2),
                        tipo: 'credito'
                    }

                    const object2 = {
                        data: this.state.usuarioMetodos[i].tarjeta,
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
                                    firebase.database().ref('pedidos/' + window.localStorage.getItem('transId')).set(objetc4).then(ok =>{
                                        if (res.body.statusCode == 2){
                                            alert('Pago no realizado');
                                            window.location.reload();
                                        }else {
                                            const email1 = JSON.parse(window.localStorage.getItem('conectado'));
                                            const productos = JSON.parse(window.sessionStorage.getItem('array'));
                                            const n = productos.length;
                                            let mensaje = '';
                                            for (let i = 0; i < n; i++) {
                                                const menos = productos[i].id.length;
                                                mensaje = mensaje +  productos[i].cantidad.toString() + ' ' + productos[i].nombre.toString() + ' / ' + productos[i].unidad + '\n';
                                            }
                                            const nombre = JSON.parse(window.localStorage.getItem('conectado')).nombre.split(' ');
                                            const hola = nombre[0].charAt(0)+nombre[0].slice(1);
                                            let templateParams = {
                                                message_html: mensaje + '\n\n 💳Total: $'+parseFloat(window.localStorage.getItem('totalPagar')).toFixed(2),
                                                send_to: email1.email,
                                                cc_to: "juandiegopalacio@aol.com",
                                                nombre: hola
                                            };
                                    
                                            emailjs.send('gmail', 'template_pxRoAu15', templateParams)
                                                .then(res => {
                                                    console.log('Email successfully sent!')
                                                })
                                                .catch(err =>{console.log(err);})
                                            request
                                                .post('https://api.chat-api.com/instance119141/sendMessage?token=t8p1ghjgg3zxmlmz')
                                                .send({
                                                    phone: JSON.parse(window.localStorage.getItem('conectado')).numero, 
                                                    body: "Hola "+hola+ "👋, gracias por tu pago en despacha.me\n\n🧾Pedido:\n\ "+ mensaje +"\n\n💳Total: $"+parseFloat(window.localStorage.getItem('totalPagar')).toFixed(2)+"\n\n🕐Hora de Entrega: En 24 horas máximo.\n\nHemos enviado el voucher a su correo 📩.\n\nSi tiene preguntas responde a este mensaje 😎"
                                                })
                                                .then(res => {
                                                    request
                                                        .post('https://api.chat-api.com/instance119141/sendMessage?token=t8p1ghjgg3zxmlmz')
                                                        .send({
                                                            phone: '593993560952', 
                                                            body: "Hola Augusto 👋, han hecho una compra en despacha.me\n\n🧾Pedido:\n\n "+ mensaje +"\n💳Total: $"+parseFloat(window.localStorage.getItem('totalPagar')).toFixed(2)+"\n\n Datos del cliente:\n\nNombre: "+JSON.parse(window.localStorage.getItem('conectado')).nombre+"\nCédula: "+JSON.parse(window.localStorage.getItem('conectado')).cedula+"\nNúmero: "+JSON.parse(window.localStorage.getItem('conectado')).numero+"\nDirección: "+this. this.state.usuarioMetodos[i].direc+"\nDescripción: "+ this.state.usuarioMetodos[i].desc
                                                        })
                                                        .then(res => {
                                                            $('#modal4').modal('hide');                           
                                                            console.log(res);
                                                            alert('Pago Aprobado');
                                                            window.sessionStorage.setItem('pago');
                                                            window.localStorage.removeItem('cupon');
                                                            window.location.reload();
                                                        });
                                                });
                                        }
                                    });
                                });
                        })
                        .catch(err =>{
                            console.log(err);
                            alert('No se ha podido realizar el pago. Verifique los datos de tarjeta.');
                            window.location.reload();
                        });
                } else {
                    $('#modal3').modal('show')
                }
               }

               const p2 = document.createElement('p');
               p2.style.marginBottom = '5px';
               p2.style.textAlign = 'center';
               const textp2 = document.createTextNode(this.state.usuarioMetodos[i].nombre);
               p2.appendChild(textp2);

               const p = document.createElement('p');
               p.style.textAlign = 'center';
               p.style.marginBottom = '5px';
               const pText = document.createTextNode(this.state.usuarioMetodos[i].numero + ' **** **** ****');
               p.appendChild(pText);

               div2.appendChild(p2);
               div2.appendChild(p);
               div1.appendChild(div2);
               tarjetas.appendChild(div1);
            }
        } else {
            document.getElementById('formPago').removeAttribute('hidden');
            document.getElementById('cuentasPago').setAttribute('hidden', '');
            document.getElementById('seleccionarPago').setAttribute('hidden', '');
            document.getElementById('efectivoPago').setAttribute('hidden', '');
            document.getElementById('tarjetasPagar').setAttribute('hidden', '');
        }
    }

    otraTarjeta () {
        document.getElementById('formPago').removeAttribute('hidden');
        document.getElementById('cuentasPago').setAttribute('hidden', '');
        document.getElementById('seleccionarPago').setAttribute('hidden', '');
        document.getElementById('efectivoPago').setAttribute('hidden', '');
        document.getElementById('tarjetasPagar').setAttribute('hidden', '');
    }

    trans () {
        document.getElementById('cuentasPago').removeAttribute('hidden');
        document.getElementById('formPago').setAttribute('hidden', '');
        document.getElementById('seleccionarPago').setAttribute('hidden', '');
        document.getElementById('efectivoPago').setAttribute('hidden', '');
        document.getElementById('tarjetasPagar').setAttribute('hidden', '');
    }

    efectivo () {
        document.getElementById('efectivoPago').removeAttribute('hidden');
        document.getElementById('cuentasPago').setAttribute('hidden', '');
        document.getElementById('seleccionarPago').setAttribute('hidden', '');
        document.getElementById('formPago').setAttribute('hidden', '');
        document.getElementById('tarjetasPagar').setAttribute('hidden', '');
    }

    reiniciarPago () {
        document.getElementById('seleccionarPago').removeAttribute('hidden');
        document.getElementById('formPago').setAttribute('hidden', '');
        document.getElementById('cuentasPago').setAttribute('hidden', '');
        document.getElementById('efectivoPago').setAttribute('hidden', '');
        document.getElementById('tarjetasPagar').setAttribute('hidden', '');
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

            const email1 = JSON.parse(window.localStorage.getItem('conectado'));

            request
                .put('https://prueba-next-u-react.firebaseio.com/transacion.json')
                .send({id: parseFloat(window.localStorage.getItem('transId'))})
                .then(res => {
                    firebase.database().ref('pedidos/' + window.localStorage.getItem('transId')).set(objetc4).then(ok =>{
                        const productos = JSON.parse(window.sessionStorage.getItem('array'));
                        const n = productos.length;
                        let mensaje = '';
                        for (let i = 0; i < n; i++) {
                            const menos = productos[i].id.length;
                            mensaje = mensaje +  productos[i].cantidad.toString() + ' ' + productos[i].nombre.toString() + ' / ' + productos[i].unidad + '\n';
                        }
                        const nombre = JSON.parse(window.localStorage.getItem('conectado')).nombre.split(' ');
                        const hola = nombre[0].charAt(0)+nombre[0].slice(1);
                        let templateParams = {
                            message_html: mensaje + '\n\n 💳Total: $'+parseFloat(window.localStorage.getItem('totalPagar')).toFixed(2),
                            send_to: email1.email,
                            cc_to: "juandiegopalacio@aol.com",
                            nombre: hola
                        };
                
                        emailjs.send('gmail', 'tranferencia', templateParams)
                            .then(res => {
                                console.log('Email successfully sent!')
                            })
                            .catch(err =>{console.log(err);})
                        request
                            .post('https://eu101.chat-api.com/instance119141/sendMessage?token=t8p1ghjgg3zxmlmz')
                            .send({
                                phone: JSON.parse(window.localStorage.getItem('conectado')).numero, 
                                body: "Hola "+hola+ "👋, has reservado un pedido para pagar con transferencia en despacha.me\n\n🧾Pedido:\n\n "+ mensaje +"\n💳Total: $"+parseFloat(window.localStorage.getItem('totalPagar')).toFixed(2)+"\n\nPuedes realizar tu pago a las siguientes cuentas:\n\nBANCO PACÍFICO\n CUENTA DE AHORROS\n#1053768906\nAUGUSTO DANIEL ABENDAÑO PEÑA\nCI: 1104341506\nMail: augustoap@enerwicorp.com.\n\nResponde este mensaje con un comprobante de transacción. Puede ser un archivo pdf o un screen-shot. Una vez confirmado el pago su pedido será despachado. 😎"
                            })
                            .then(res => {
                                console.log('entro');
                                window.sessionStorage.removeItem('array');
                                request
                                    .post('https://eu101.chat-api.com/instance119141/sendMessage?token=t8p1ghjgg3zxmlmz')
                                    .send({
                                        phone: '593993560952', 
                                        body: "Hola Augusto 👋, han hecho una reserva de un pedido para pagar con transferencia en despacha.me\n\n🧾Pedido:\n\n "+ mensaje +"\n💳Total: $"+parseFloat(window.localStorage.getItem('totalPagar')).toFixed(2)+"\n\nPosiblemente envíen el comprobante de pago por este medio.\n\n Datos del cliente:\n\nNombre: "+JSON.parse(window.localStorage.getItem('conectado')).nombre+"\nCédula: "+JSON.parse(window.localStorage.getItem('conectado')).cedula+"\nNúmero: "+JSON.parse(window.localStorage.getItem('conectado')).numero+"\nDirección: "+window.localStorage.getItem('dir')+"\nDescripción: "+window.localStorage.getItem('descrip')
                                    })
                                    .then(res => {
                                        window.sessionStorage.setItem('pago', '');
                                        window.localStorage.removeItem('cupon');
                                        window.location.reload();
                                    }).catch(err =>{alert(err);window.location.reload()});
                            }).catch(err =>{alert(err);window.location.reload()});
                    });
                });
        } else {
            $('#modal3').modal('show');
        }
    }

    efect () {
        if (window.sessionStorage.getItem('array')){
            const objetc4 = {
                datos: JSON.parse(window.localStorage.getItem('conectado')),
                pedido: JSON.parse(window.sessionStorage.getItem('array')),
                direccion: this.state.dir,
                descripcion: this.state.descrip,
                monto: parseFloat(window.localStorage.getItem('totalPagar')).toFixed(2),
                tipo: 'efectivo'
            }

            $('#modal4').modal('show');

            const email1 = JSON.parse(window.localStorage.getItem('conectado'));

            request
                .put('https://prueba-next-u-react.firebaseio.com/transacion.json')
                .send({id: parseFloat(window.localStorage.getItem('transId'))})
                .then(res => {
                    firebase.database().ref('pedidos/' + window.localStorage.getItem('transId')).set(objetc4).then(ok =>{
                        const productos = JSON.parse(window.sessionStorage.getItem('array'));
                        const n = productos.length;
                        let mensaje = '';
                        for (let i = 0; i < n; i++) {
                            const menos = productos[i].id.length;
                            mensaje = mensaje +  productos[i].cantidad.toString() + ' ' + productos[i].nombre.toString() + ' / ' + productos[i].unidad + '\n';
                        }
                        const nombre = JSON.parse(window.localStorage.getItem('conectado')).nombre.split(' ');
                        const hola = nombre[0].charAt(0)+nombre[0].slice(1);
                        let templateParams = {
                            message_html: mensaje + '\n\n 💳Total: $'+parseFloat(window.localStorage.getItem('totalPagar')).toFixed(2),
                            send_to: email1.email,
                            cc_to: "juandiegopalacio@aol.com",
                            nombre: hola
                        };
                
                        emailjs.send('gmail', 'tranferencia', templateParams)
                            .then(res => {
                                console.log('Email successfully sent!')
                            })
                            .catch(err =>{console.log(err);})
                        request
                            .post('https://eu101.chat-api.com/instance119141/sendMessage?token=t8p1ghjgg3zxmlmz')
                            .send({
                                phone: JSON.parse(window.localStorage.getItem('conectado')).numero, 
                                body: "Hola "+hola+ "👋, has realizado un pedido para pagar con efectivo en despacha.me\n\n🧾Pedido:\n\n "+ mensaje +"\n💳Total: $"+parseFloat(window.localStorage.getItem('totalPagar')).toFixed(2)+"\n\nTu pedido será Despachado y te llegará en un máximo de 24 horas 😎"
                            })
                            .then(res => {
                                console.log('entro');
                                window.sessionStorage.removeItem('array');
                                request
                                    .post('https://eu101.chat-api.com/instance119141/sendMessage?token=t8p1ghjgg3zxmlmz')
                                    .send({
                                        phone: '593993560952', 
                                        body: "Hola Augusto 👋, han hecho un pedido para pagar con efectivo en despacha.me\n\n🧾Pedido:\n\n "+ mensaje +"\n💳Total: $"+parseFloat(window.localStorage.getItem('totalPagar')).toFixed(2)+"\n\n Datos del cliente:\n\nNombre: "+JSON.parse(window.localStorage.getItem('conectado')).nombre+"\nCédula: "+JSON.parse(window.localStorage.getItem('conectado')).cedula+"\nNúmero: "+JSON.parse(window.localStorage.getItem('conectado')).numero+"\nDirección: "+window.localStorage.getItem('dir')+"\nDescripción: "+window.localStorage.getItem('descrip')+"\nCambio: "+this.state.efectivo
                                    })
                                    .then(res => {
                                        window.sessionStorage.setItem('pago', '');
                                        window.localStorage.removeItem('cupon');
                                        window.location.reload();
                                    }).catch(err =>{alert(err);window.location.reload()});
                            }).catch(err =>{alert(err);window.location.reload()});
                    });
                });
        } else {
            $('#modal3').modal('show');
        }
    }

    abrirDrop () {
        document.getElementById('dropCarro').classList.toggle('show');
    }

    cancelarVer () {
        if (this.state.veri == 1){
            if (this.state.nombre){
                if (this.state.cedula){
                    if (this.state.numero){
                        if (this.state.email){
                            const tabla = document.getElementById('confirCall');
                            tabla.innerHTML = '';
                            const p = document.createElement('p');
                            p.style.textAlign = 'center';
                            p.style.fontWeight = 'bold';
                            p.style.marginBottom = '20px';
                            const textP = document.createTextNode('Ingrese el código enviado a su WhatsApp. \n Puede tardar unos segundos.');
                            p.appendChild(textP);
                            const input = document.createElement('input');
                            input.style.width = '60%';
                            input.style.display = 'block';
                            input.style.margin = '0 auto';
                            input.onchange = (add) =>{
                                this.setState({codigo: add.currentTarget.value});
                            };
                            tabla.appendChild(p);
                            tabla.appendChild(input);
                            this.setState({veri: 2});
                            request
                                .post('https://api.chat-api.com/instance119141/sendMessage?token=t8p1ghjgg3zxmlmz')
                                .send({
                                    phone: this.state.numero, 
                                    body: "Tu código es: "+window.localStorage.getItem('transId').toString()
                                })
                                .then(res => {
                                    console.log(res);
                                });
                        }else {
                            alert('Llene todos los campos.');
                        }
                    }else {
                        alert('Llene todos los campos.');
                    }
                }else {
                    alert('Llene todos los campos.');
                }
            }else {
                alert('Llene todos los campos.');
            }
        } else {
            if (this.state.codigo == window.localStorage.getItem('transId').toString()) {
                const object = {
                    nombre: this.state.nombre,
                    numero: '+'+this.state.numero,
                    cedula: this.state.cedula,
                    email: this.state.email,
                    verificado: true,
                }
                firebase.database().ref('Login/' + window.localStorage.getItem('token')).set(object).then(ok =>{                          
                    window.history.pushState(null, '', '/');
                    window.location.reload();
                });
            } else {
                alert('Código erroneo. Verifique que su número sea el correcto');
                window.location.reload();
            }
        }
    }

    componentDidMount() {

        if(window.localStorage.getItem('token')){
            document.getElementById('userIn').removeAttribute('hidden');
            document.getElementById('userOut').setAttribute('hidden', '');
            document.getElementById('botonModal2').removeAttribute('hidden');
            document.getElementById('botonModal1').setAttribute('hidden', '');
            request
                .get('https://prueba-next-u-react.firebaseio.com/Login/'+window.localStorage.getItem('token')+'.json')
                .set('Content-Type','aplication/json') 
                .then(res =>{
                    if (res.body.verificado){
                        $('#staticBackdrop').modal('show');
                        this.setState({usuarioMetodos: res.body.metodos});
                        window.localStorage.setItem('conectado', JSON.stringify(res.body));
                        if (res.body.metodos){
                            const nm = res.body.metodos.length - 1;
                            const idTarje = res.body.metodos[nm].id + 1;
                            this.setState({numTarj: idTarje});
                            this.setState({metodoPag: true});
                        } else {
                            this.setState({numTarj: 0});
                        }
                        console.log(JSON.parse(window.localStorage.getItem('conectado')).metodos);
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
                    } else {
                        $('#confirmarNum').modal('show');
                    }
                })
                .catch(err =>{$('#confirmarNum').modal('show');});
            if (window.localStorage.getItem('token') == 'iG92oeoLi1WQqOwzk4gbxMXUZQk1' || window.localStorage.getItem('token') == 'vGRTu62ZGaQL3KgBzGVHpH7zbpF3' || window.localStorage.getItem('token') == 'fgh94r8ghYTN9944j9nNNwzs4wq1') {
                document.getElementById('adminSi').removeAttribute('hidden');
            }
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
                tabla.appendChild(img);

                window.localStorage.setItem('totalPagar', '0');
                
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
                    divCol1.className = 'col-3';
                    divCol1.style.padding = '5px';
                    const divCol2 = document.createElement('div');
                    divCol2.className = 'col-3';
                    divCol2.style.padding = '5px';
                    const divCol3 = document.createElement('div');
                    divCol3.className = 'col-3';
                    divCol3.style.padding = '5px';
                    const divCol4 = document.createElement('div');
                    divCol4.className = 'col-3';
                    divCol4.style.padding = '5px';
                    divCol4.onclick = () =>{
                        if (JSON.parse(window.sessionStorage.getItem('array')).length == 1){
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
                    document.getElementById('precioCarro').innerHTML = '$'+window.localStorage.getItem('totalPagar');
                    document.getElementById('descuentof').innerHTML = '';
                    document.getElementById('totalPagarYa').innerHTML = '$'+window.localStorage.getItem('totalPagar');
                }
            }
        } else {
            window.localStorage.setItem('totalPagar', '0');
        }

       document.getElementById('tableas').onscroll = () =>{
           const size1 = screen.height - 60 - 60;
           const size2 = screen.height - 133.7 - 141 - 60;
           if (screen.width < 700) {
                if (document.getElementById('tableas').scrollTop > 0) {
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
            document.getElementById('textDesc1').setAttribute('hidden', '');
            document.getElementById('textDesc21').removeAttribute('hidden');
            document.getElementById('textDesc31').removeAttribute('hidden');
            document.getElementById('textDesc3').setAttribute('hidden', '');
            document.getElementById('carroInicio').className = '';
       }else {
            document.getElementById('textDesc2').setAttribute('hidden', '');
            document.getElementById('textDesc').removeAttribute('hidden');
            document.getElementById('textDesc1').removeAttribute('hidden');
            document.getElementById('textDesc21').setAttribute('hidden', '');
            document.getElementById('textDesc31').setAttribute('hidden','');
            document.getElementById('textDesc3').removeAttribute('hidden');
            document.getElementById('carroInicio').className = "btn-group dropleft";
       }

       request
        .get('https://prueba-next-u-react.firebaseio.com/descuento/id.json')
        .set('Content-Type','aplication/json')
        .then(res =>{
            this.setState({descCod: res.body});
            request
                .get('https://prueba-next-u-react.firebaseio.com/descuento/nombre.json')
                .set('Content-Type','aplication/json')
                .then(res =>{
                    this.setState({nombreDesc: res.body});
                });
        });
    } 
}

export default Barra;