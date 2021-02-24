function agregarFila(){
    //Se recupera la tabla
    let tbl = document.getElementById('part1');
    let rowCount = tbl.rows.length;
    // Se recupera resultados
    let usuario = document.getElementById('usuario').value;
    let contra = document.getElementById('contra').value;
    let tipo = document.getElementById('tipo').value;
    let repetido = 0;

    if(rowCount < 2){
        tbl.insertRow(-1).innerHTML = `<td class='usuario_agregado'>${usuario}</td><td>${contra}</td><td>${tipo}</td><td>Nuevo</td>`;
    }else{
        //tbl.insertRow(-1).innerHTML = `<td class='usuario_agregado'>${usuario}</td><td>${contra}</td><td>${tipo}</td><td>Nuevo</td>`;
        //Comprobar valores de usuario
        let valores = document.getElementsByClassName('usuario_agregado')
        for(propiedad in valores){ 
            let valor = valores[propiedad].innerHTML; // ! Acceder a valores
            if(usuario == valor){
                tbl.insertRow(-1).innerHTML = `<td class='usuario_agregado'>${usuario}</td><td>${contra}</td><td>${tipo}</td><td>Existe</td>`;
                repetido = 1;
                break;
            }
        }
        //Agregar la fila para datos no repetidos:
        if(repetido ==0){
            tbl.insertRow(-1).innerHTML = `<td class='usuario_agregado'>${usuario}</td><td>${contra}</td><td>${tipo}</td><td>Nuevo</td>`;

        }
    }
    repetido=0;
}