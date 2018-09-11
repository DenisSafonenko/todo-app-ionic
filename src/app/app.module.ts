import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import TodoApp from './app.component';

import { TodoStore } from './services/store';

@NgModule({
  declarations: [
    TodoApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(TodoApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    TodoApp,
  ],
  providers: [
    StatusBar,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TodoStore,
  ]
})
export class AppModule {
}
