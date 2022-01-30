export const menu = ()=>{
    let letra = '';
    let tipo = prompt('Elige una opción:  1.Asesoria, 2.Tramites, 3.Creditos ');
    if(tipo == 1){
        letra = 'A';
    } else if(tipo == 2){
        letra = 'T';
    } else if(tipo == 3){
        letra = 'C';
    }
    return [letra, tipo];
}