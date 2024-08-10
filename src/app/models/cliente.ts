export class Cliente {
    id?:number;
    nombre:string;
    apellido:string;
    email:string;
    telefono:string;
    direccion:string;
    fechaRegistro:string;

    constructor(id:number,nombre:string,apellido:string, email:string,telefono:string, direccion:string, fechaRegistro:string){
      this.id = id
      this.nombre= nombre;
      this.apellido= apellido;
      this.email = email;
      this.telefono = telefono;
      this.direccion = direccion;
      this.fechaRegistro = fechaRegistro;
    }



}
