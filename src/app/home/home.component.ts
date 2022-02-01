import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { EventData } from '@nativescript/core'
import { Application } from '@nativescript/core';
import * as dialogs from "tns-core-modules/ui/dialogs";

let platform;
@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  
  
})
export class HomeComponent implements OnInit {
  constructor() {

  }
  
  /*doLater(fn) {setTimeout(fn,1000);}*/
  ngOnInit(): void {
    /*this.doLater(() =>
    dialogs.action("Mensaje", "Cancelar!", ["Opcion1","Opcion2"])
            .then((result) => {
              console.log("resultado: "+ result);
              if (result === "Opcion1") {
                this.doLater(() =>
                  dialogs.alert({
                    title: "Titulo 1",
                    message: "mje 1",
                    okButtonText: "btn 1"
                  }).then(() => console.log("cerrado 1!")));
              } else if (result === "Opcion2") {
                this.doLater(() =>
                  dialogs.alert({
                    title: "Titulo 2",
                    message: "mje 2",
                    okButtonText: "btn 2"
                  }).then(() => console.log("cerrado 2!")));
                  }
            }));
            /*const toastOptions: Toast.ToastOptions = {text: "hello word", duration: Toast.DURATION.SHORT};
            this.doLater(() => Toast.show(toastOptions));*/
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

}

