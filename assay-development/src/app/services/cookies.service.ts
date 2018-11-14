
import { Injectable } from "@angular/core";

@Injectable()
export class CookiesService {

  getASpecyficCookieValue(nameOfValue: string): string {
    const cookies: string = document.cookie;
    const index = cookies.search(nameOfValue);
    let value = "";

    if (index === -1) return "";
    else {
      for (let i = index + nameOfValue.length + 1; i < cookies.length; i++) {
        if (cookies.charAt(i) === ";") return value;
        else value += cookies.charAt(i);
      }
    }
    return value;
  }

  setCookie(name: string, expDays: number, path: string, value: string) {
    const date = new Date();
    date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
    const expireDate = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expireDate + ";path=" + path;
  }

  deleteCookie(name) {
    document.cookie = name+'=; Max-Age=-99999999;';  
  }

}