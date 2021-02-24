function agregarFila(){
    //Se recupera la tabla
    let tbl = document.getElementById('part1');
    // Se recupera resultados
    let usuario = document.getElementById('usuario').value;
    let contra = document.getElementById('contra').value;
    let tipo = document.getElementById('tipo').value;
    
    tbl.insertRow(-1).innerHTML = `<td class='existe'>${usuario}</td><td>${contra}</td><td>${tipo}</td><td>Nuevo</td>`;

}