import React from 'react';
import Login from './login/login.jsx';
import './main.css';
import { Button } from 'reactstrap';
import Barra from './barra/barra.jsx';
import Tabla from './tabla/tabla.jsx';
import { BrowserRouter as Router, Switch, Route, HashRouter } from 'react-router-dom';
import Carro from './carro/carro.jsx';


class App extends React.Component{
    constructor(){
      super()
      this.state= {
        carrito: "",
        aux: 0
      }
    }

    render(){
      return(
        <HashRouter>
          <div id="opac" onClick={this.upadate.bind(this)}>
            <div id="barras">
              <Barra numero={this.state.carrito} />
            </div>
            <div id="espacio"></div>
            <div id="cuerpo">
            <Switch>
                <Route exact path="/" component={Tabla}/>
                <Route path="/carrito" component={Carro}/>
            </Switch>
            </div>
            <div id="bottom"></div>
          </div>
        </HashRouter>
      );
    }

  upadate(){
    var tx=document.createTextNode("");
    if(window.sessionStorage.getItem('array')){
      var n = JSON.parse(window.sessionStorage.getItem('array')).length;;
      if(n > this.state.aux){
        this.state.aux= n;
        for(var i=0; i<n; i++){
        var x = i+1;
        }
        document.getElementById('carrito').innerHTML="";
        const f = document.createElement('i');
        f.className="fas fa-shopping-cart icon";
        f.id = 'carroInicio';
        f.style.marginRight="1px";
        tx.nodeValue=x.toString();
        document.getElementById('carrito').appendChild(f);
        f.style.animation = "miAnimacion 1s";
        f.style.color="#ff6666";
        f.style.fontSize="25px";
        setTimeout (function (){f.style.animation = 'none'}, 1100);
        x = 0;
      }
    }else {
      this.state.aux = 0;
      document.getElementById('carrito').innerHTML="";
      const f = document.createElement('i');
      f.className="fas fa-shopping-cart icon";
      f.id = 'carroInicio';
      f.style.marginRight="1px";
      f.style.color="black";
      f.style.fontSize="20px";
      document.getElementById('carrito').appendChild(f);
    }
  } 

    componentDidMount(){
    }
}

export default App;
