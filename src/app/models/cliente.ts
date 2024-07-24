export class Cliente {

    nombre:string;
    apellido:string;
    email:string;
    telefono:string;
    direccion:string;
    fechaRegistro:string;

    constructor(nombre:string,apellido:string, email:string,telefono:string, direccion:string, fechaRegistro:string){
      this.nombre= nombre;
      this.apellido= apellido;
      this.email = email;
      this.telefono = telefono;
      this.direccion = direccion;
      this.fechaRegistro = fechaRegistro;
    }



}
