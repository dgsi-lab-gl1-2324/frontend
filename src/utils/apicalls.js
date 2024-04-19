import API from "./api";
export{
 //TODO: Exportar todas las funciones de la API   
    postClientes,
    getEmpleados,
    postCont,
    getContratos,
    getContratosByCliente,
    putContrato
}
//TODO: implementar las llamadas a la API
function postClientes(email,name) {
    return API.post('/clientes',  {email,name}).then(({ data }) => data);
}
function getEmpleados(email){
    return API.get(`/empleados?email=${email}`).then(({ data }) => data);
}
function postCont(contratacion){
    return API.post('/contratacion', contratacion).then(({ data }) => data);
}
function getContratos(){
    return API.get('/contratacion').then(({ data }) => data);
}
function getContratosByCliente(email){
    return API.get(`/contratacion/${email}`).then(({ data }) => data);
}
function putContrato(id,resolucion){
    return API.put(`/contratacion/${id}`, {resolucion}).then(({ data }) => data);
}