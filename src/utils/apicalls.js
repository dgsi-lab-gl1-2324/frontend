import API from "./api";
export{
 //TODO: Exportar todas las funciones de la API   
    postClientes,
    getEmpleados
}
//TODO: implementar las llamadas a la API
function postClientes(id) {
    return API.post('/clientes/:'+{id}).then(({ data }) => data);
}
function getEmpleados(id){
    return API.get('/empleados/:'+{id}).then(({ data }) => data);
}