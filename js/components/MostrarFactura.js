export const mostrarFactura = (date, hour, codigoUsuario, id, contador)=>{
    if(contador !== 0){
        alert(`                                         BANCOLOMBIA \n
                                            ${date}
                                            ${hour}
                                            Su numero de ticket es:
                                            ${codigoUsuario}
                                            ID: ${id}
                                            Hay ${contador} personas antes que usted con la misma letra
               `);
    } else {
        alert(`                                          BANCOLOMBIA \n
                                            ${date}
                                            ${hour}
                                            Su numero de ticket es:
                                            ${codigoUsuario}
                                            ID: ${id}
                                            Usted es el primero
               `);
    }
}