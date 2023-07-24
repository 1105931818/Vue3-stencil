export class Token {
    _token: string | null;
    constructor() {
        this._token = this.getToken();
    }

    get token() {
        return this.getToken();
    }

    set token(newT) {
        this.setToken(newT as string);
    }

    public setToken(token: string) {
        sessionStorage.setItem('TOKEN', token);
        console.log(11111);
    }

    public getToken(): string | null {
        return sessionStorage.getItem('TOKEN');
    }

    public removeToken() {
        sessionStorage.removeItem('TOKEN');
    }
}

export default new Token();
