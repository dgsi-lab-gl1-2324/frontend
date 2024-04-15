import API from "./api";
export{
 //TODO: Exportar todas las funciones de la API   
    postClientes,
    getEmpleados
}
//TODO: implementar las llamadas a la API
function postClientes(email,name) {
    return API.post('/clientes',  {email,name}).then(({ data }) => data);
}
function getEmpleados(email){
    return API.get(`/empleados?email=${email}`).then(({ data }) => data);
}