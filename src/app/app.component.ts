import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  @Input() param: string = "Default Param Value";

  @Output() onEmit: EventEmitter<any> = new EventEmitter();

  emitEvent() {
    this.onEmit.emit(new Date());
  }
}
