import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ChildComponentComponent } from "./child-component/child-component.component";

import { createCustomElement } from "@angular/elements";
@NgModule({
  declarations: [AppComponent, ChildComponentComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const appComponentElement = createCustomElement(AppComponent, {
      injector: this.injector
    });
    customElements.define("app-root", appComponentElement);
  }
}
