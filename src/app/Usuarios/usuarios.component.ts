import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application, Color, EventData, Image, Label, Page } from '@nativescript/core'
import { ReviewsService } from "../domain/reviews.service"
import { RouterExtensions } from '@nativescript/angular';
import { ToastDuration, ToastPosition, Toasty } from "@triniwiz/nativescript-toasty"

@Component({
  selector: 'Usuarios',
  templateUrl: './usuarios.component.html',
})
export class UsuariosComponent implements OnInit {
  name: Label;
  descripcion: Label;
  cargo: Label;
  constructor(public review: ReviewsService, private routerExtensions: RouterExtensions) {
    // Use the component constructor to inject providers.
  }

  public pageLoaded(args: EventData) {
    this.review.newreview();
    var page = <Page>args.object;
    this.name = <Label>page.getViewById("name");
    this.name.text =global.nombreU+"\n";
    this.cargo = <Label>page.getViewById("cargo");
    this.cargo.text ="Cargo: "+global.cargoU;
    this.descripcion = <Label>page.getViewById("descripcion");
    this.descripcion.text ="Descripción: "+global.descripcionU+"\n";

    const img = page.getViewById("image") as Image;
    img.src = global.imageU;
}

  ngOnInit(): void {
    // Init your component properties here.
  }

  like(){
    new Toasty({ text: 'Te agrada esta persona' })
  .setToastDuration(ToastDuration.SHORT)
  .setToastPosition(ToastPosition.BOTTOM)
  .setTextColor(new Color('white'))
  .setBackgroundColor('#8fce00')
  .show();
    
  }
  dislike(){
    new Toasty({ text: 'Te desagrada esta persona' })
  .setToastDuration(ToastDuration.SHORT)
  .setToastPosition(ToastPosition.BOTTOM)
  .setTextColor(new Color('white'))
  .setBackgroundColor('#ff9999')
  .show();
  }
  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
  onPull(args){
    this.review.newreview();
    const  pullRefresh = args.object; 
    setTimeout(() => {
    pullRefresh.refreshing = false;
     }, 1000);
     console.log("recargado con exito");
  }
  
}
