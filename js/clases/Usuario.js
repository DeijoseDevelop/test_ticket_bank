export default class Usuario{

    static contador = 0;

    constructor(fecha, hora, codigoUsuario, idUnico){
        this._fecha = fecha;
        this._hora = hora;
        this._codigoUsuario = codigoUsuario;
        this._idUnico = idUnico;
        this._contador = ++Usuario.contador;
    }
    get fecha(){
        return this._fecha;
    }
    set fecha(fecha){
        this._fecha = fecha;
    }
    get hora(){
        return this._hora;
    }
    set hora(hora){
        this._hora = hora;
    }
    get codigoUsuario(){
        return this._codigoUsuario;
    }
    set codigoUsuario(codigoUsuario){
        this._codigoUsuario = codigoUsuario;
    }
    get idUnico(){
        return this._idUnico;
    }
    set idUnico(idUnico){
        this._idUnico = idUnico;
    }
    get contador(){
        return this._contador;
    }
}