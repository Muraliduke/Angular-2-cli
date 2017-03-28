
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Injectable()
export class MyService{



    private heroesUrl = 'http://www.json-generator.com/api/json/get/bQDyPjpjzC?indent=2';  // URL to web API

    constructor (private http: Http) {}

    getjso() {
        return this.http.get(this.heroesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }


    private extractData(res: Response) {
       // console.log("service");
        //console.log(res);
        let body = res.json();
       // console.log(body);

        return body || { };
    }


    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let a:any;
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }






}

