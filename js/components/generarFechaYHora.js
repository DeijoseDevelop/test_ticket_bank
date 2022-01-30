export const generarFechaYHora = ()=>{
    let fecha = new Date();
    let dia = fecha.getDate();
    let mes = fecha.getMonth();
    let anio = fecha.getFullYear();
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    let fechaYHora;

    if(10 > mes+1){
        if(10 > minutos && 10 > segundos){
            console.log('ambos')
            fechaYHora  = {date: `${dia}/0${mes+1}/${anio}`, hour: `${horas}:0${minutos}:0${segundos}`};
        } else if(10 > minutos){
            console.log('solo minutos')
            fechaYHora  = {date: `${dia}/0${mes+1}/${anio}`, hour: `${horas}:0${minutos}:${segundos}`};
        } else if(10 > segundos){
            console.log('solo segundos')
            fechaYHora  = {date: `${dia}/0${mes+1}/${anio}`, hour: `${horas}:${minutos}:0${segundos}`};
        } else{
            fechaYHora  = {date: `${dia}/0${mes+1}/${anio}`, hour: `${horas}:${minutos}:${segundos}`};
        }
    } else{
        if(10 > minutos && 10 > segundos){
            console.log('ambos')
            fechaYHora  = {date: `${dia}/${mes+1}/${anio}`, hour: `${horas}:0${minutos}:0${segundos}`};
        } else if(10 > minutos){
            console.log('solo minutos')
            fechaYHora  = {date: `${dia}/${mes+1}/${anio}`, hour: `${horas}:0${minutos}:${segundos}`};
        } else if(10 > segundos){
            console.log('solo segundos')
            fechaYHora  = {date: `${dia}/${mes+1}/${anio}`, hour: `${horas}:${minutos}:0${segundos}`};
        } else{
            fechaYHora  = {date: `${dia}/${mes+1}/${anio}`, hour: `${horas}:${minutos}:${segundos}`};
        }
    }
    return fechaYHora;
}