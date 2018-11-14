import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { environment } from "src/environments/environment";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './app.reducers';
import { AuthEffects } from './store/auth/auth.effects';
import { PromptEffects } from './store/prompt/prompt.effects';

import { HandleRequestService } from "src/app/services/handle-request-service";
import { AuthGuard } from "src/app/services/auth.guard";
import { CookiesService } from "src/app/services/cookies.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects, PromptEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [HandleRequestService, AuthGuard, CookiesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
