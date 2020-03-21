import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompositionsHttpService } from '@core/http/compositions-http.service';
import { OriginCountriesHttpService } from '@core/http/origin-countries-http.service';
import { SessionHttpService } from '@core/http/session-http.service';
import { Auth } from '@shared/enums/auth.enum';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-pre-product-new-smart',
  template: `
    <app-pre-product-new (submit)="submit($event)"></app-pre-product-new>
  `
})
export class PreProductNewSmartComponent implements OnInit {
  userAuthes: Auth[];
  userCompanyCode: string;

  constructor(
    private activedRoute: ActivatedRoute,
    private router: Router,
    private sessionService: SessionHttpService,
    private originCountriesHttpService: OriginCountriesHttpService,
    private compositionsHttpService: CompositionsHttpService
  ) { }

  ngOnInit() {
    combineLatest(
      this.activedRoute.paramMap,
      this.activedRoute.queryParamMap
    ).subscribe(([paramMap, queryParamMap]) => {
      const session = this.sessionService.getSavedSession();
      // this.userAuthes = session.authes;
      // this.userCompanyCode = session.companyCode;

      // forkJoin(
      //   this.originCountriesHttpService.findAll(),
      //   this.compositionsHttpService.findAll()
      // ).pipe(
      //   tap(([ocs, compositions]) => { })
      // );
    });
  }

  submit(formValue): void {
    // console.log('formVal:', formValue);
    // this.router.navigate(['products', 1, 'edit']);
  }
}
