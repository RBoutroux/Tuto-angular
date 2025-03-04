import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

  checkAuthenticate(login: string, password: string): string {
    var result = JSON.stringify({"ok": 0});
    if(login == 'admin' && password == 'admin') {
      result = JSON.stringify({"ok": 1});
    }
    return result;
  }
}
