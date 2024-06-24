export class LoginRequest {

  private username!:string;
  private password!: string;

  public get usuario(): string {
    return this.username;
  }
  public set usuario(value: string) {
    this.username = value;
  }

  public get contraseña(): string {
    return this.password;
  }
  public set contraseña(value: string) {
    this.password = value;
  }


}
