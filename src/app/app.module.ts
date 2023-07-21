import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from './services/service.service';
import { HttpClientModule } from '@angular/common/http';
import { PagesModule } from './pages/pages.module';

//import { NgxMaskModule }  from 'ngx-mask';
//import { NgxMaskDirective, NgxMaskPipe, provideNgxMask }  from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PagesModule, 
   /// :: Add o HttpClientModule para requisições com webApi    
   HttpClientModule,
   //NgxMaskDirective, NgxMaskPipe
   ///NgxMaskModule.forRoot()
  ],
  providers: [
    /// :: Precisa add os services da aplicação
    ServiceService,
    //provideNgxMask()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
