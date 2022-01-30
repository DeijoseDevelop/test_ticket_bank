import { menu } from './menu.js';
import { generarCodigoUsuario } from './generarCodigoUsuario.js';
import { generarId } from './generarId.js';
import { generarFechaYHora } from './generarFechaYHora.js';
import { mostrarFactura } from './mostrarFactura.js';

let numero = [99, 99, 99];
let contador = [-1, -1, -1];

export const bucleCentinela = ()=>{

    let salir = 1;
    while(salir == 1){
        let fechaYHora = generarFechaYHora();
        let { date, hour } = fechaYHora;
        let id = generarId();
        let codigoUsuario;
        let traerMenu = menu();
        let [letra, tipo] = traerMenu;
        if(tipo == 1){
            contador[0]++;
            letra = 'A';
            codigoUsuario = generarCodigoUsuario(letra, ++numero[0]);
            mostrarFactura(date, hour, codigoUsuario, id, contador[0]);
        } else if(tipo == 2){
            contador[1]++;
            letra = 'T';
            codigoUsuario = generarCodigoUsuario(letra, ++numero[1]);
            mostrarFactura(date, hour, codigoUsuario, id, contador[1]);
        } else if(tipo == 3){
            contador[2]++;
            letra = 'C';
            codigoUsuario = generarCodigoUsuario(letra, ++numero[2]);
            mostrarFactura(date, hour, codigoUsuario, id, contador[2]);
        }
        salir = prompt('Desea continuar?  1.Continuar, 2.Salir');
    }
}