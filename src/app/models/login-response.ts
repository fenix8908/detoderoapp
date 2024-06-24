export class LoginResponse {
  tokenResponse!: string;
  refreshToken!: string;

  constructor(jwtToken: string, jwtTokenRefresh: string) {
    this.tokenResponse = jwtToken;
    this.refreshToken = jwtTokenRefresh;
  }

  get getJwtToken(): string {
    return this.tokenResponse;
  }

  set jwtToken(valor: string) {
    this.tokenResponse = valor;
  }

  get getJwtTokenRefresh(): string {
    return this.refreshToken;
  }

  set jwtTokenRefresh(value: string) {
    this.refreshToken = value;
  }
}
