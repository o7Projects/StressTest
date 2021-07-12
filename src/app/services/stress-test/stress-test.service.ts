import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StressTestService {

  constructor(private http: HttpClient,
  ) { }


  getAll(url, contentType, Authorization = "", params = null) {
    let headers = this.setHeaders(contentType, Authorization);
    return this.http
      .get(url, { headers: headers, params: params })
      .pipe();
  }


  getResource(url, id, contentType, Authorization = "") {
    url += "/" + id;
    let headers = this.setHeaders(contentType, Authorization);
    return this.http
      .get(url, { headers: headers })
      .pipe();
  }


  Create(url, resource, contentType, Authorization = "") {

    let headers = this.setHeaders(contentType, Authorization);
    let x = this.http
      .post(url, resource, { headers: headers })
      .pipe();
    return x;
  }

  Patch(url, resource, contentType, Authorization = "") {
    let headers = this.setHeaders(contentType, Authorization);
    return this.http
      .patch(url, resource, { headers: headers })
      .pipe();
  }

  Destroy(url, id, contentType, Authorization = "") {
    let headers = this.setHeaders(contentType, Authorization);
    url += "/" + id;
    return this.http
      .delete(url, { headers: headers })
      .pipe();
  }

  setHeaders(contentType, Auth) {
    let headers = new HttpHeaders();


    if (this.checkAuthorizationExist(Auth)) {
      headers = headers
        .set("Content-Type", contentType)
        .set("Authorization", Auth)

    } else {
      headers = headers
        .set("Content-Type", contentType)

    }

    return headers;
  }


  checkAuthorizationExist(Auth) {
    if (Auth == "") {
      return false;
    }
    return true;
  }
}
