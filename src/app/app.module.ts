import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel'
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ModalModule } from 'ngx-bootstrap/modal'
import { LoginComponent } from './Login/Login.component';

registerLocaleData(en);

@NgModule({
  declarations: [		
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SubHeaderComponent,
      HomeComponent,
      LoginComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzCarouselModule,
    MatSliderModule,
    MatMenuModule,
    MatCardModule,
    SlickCarouselModule,
    ModalModule.forRoot()
  ],
  exports:[
    NzCarouselModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US },NzCarouselModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
