import {ErrorHandler, Injectable, Injector} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {LocationStrategy} from "@angular/common";
import {Router} from "@angular/router";

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {

  constructor(private httpClient: HttpClient, private locationStrategy: LocationStrategy, private injector: Injector) {
    super();
  }

  override handleError(error: any): void {

    let routers = this.injector.get(Router)

    let errorEvent= {
      url: 'URL: ' + routers.url,
      path: this.locationStrategy.path(),
      message: error.message?? error.toString(),
      handler: 'GlobalErrorHandler',
      user: 'the-id-of-the-cuttent-user',
      time: new Date(),
      stack: error.stack
    }

    this.httpClient.post('http://localhost:3002/error', errorEvent)
      .subscribe(() => {
        }
      )
  }

}
