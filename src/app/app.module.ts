import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { NikitacmdComponent } from './nikitacmd/nikitacmd.component';
import { PinkalcmdComponent } from './pinkalcmd/pinkalcmd.component';
import {appRoutingProviders,routing} from './routes';
import { AccordionModule,AlertModule,ButtonsModule, DatepickerModule,BsDropdownModule,CarouselModule,CollapseModule,ModalModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    NikitacmdComponent,
    PinkalcmdComponent,
],
  imports: [
    BrowserModule,
      routing,
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    DatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot()


],

providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
