import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application, Color, ItemEventData, Label, View } from '@nativescript/core'
import { ListasService } from "../domain/listas.service"
import { RouterExtensions } from '@nativescript/angular';
import { ToastDuration, ToastPosition, Toasty } from '@triniwiz/nativescript-toasty';

let count=0;
lbl: Label;


@Component({
  selector: 'Personal',
  templateUrl: './personal.component.html',
  

})
export class PersonalComponent implements OnInit {
  
  resultados: Arrayresultados[];
  personSelect: Select[];
  @ViewChild("layout") layout: ElementRef;
  constructor(public people: ListasService, private routerExtensions: RouterExtensions) {
  }
  
  ngOnInit(): void {

  }

  textFieldValue: string ="";
    @Output() search: EventEmitter<string> = new EventEmitter();
    
  onButtonTap(args): void {
    console.log(this.textFieldValue);
    if (this.textFieldValue.length > 2 ){
        this.search.emit(this.textFieldValue);
        this.buscarAhora(args);
    }
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  OnItemTap(args: ItemEventData){
    
    this.routerExtensions.navigate(['/usuarios'], {
      transition: {
        name: 'slideTop',
      },
    })

    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.closeDrawer()
    return this.people.OnItemTap(args);
  }

  buscarAhora(s:string){
  
  this.resultados = this.people.buscar().filter((x) => x.cargo.indexOf(this.textFieldValue)>=0);
  const id = this.textFieldValue;
  if (id=="Director"){
    this.animacion();
  }else if(id=="Aseo"){
    this.animacion();
  }else if(id=="Profesor"){
    this.animacion();
  }else if(id=="Estudiante"){
    this.animacion();
  }else{
    this.cargonoencontrado();
  }
  }
  cargonoencontrado() {
    new Toasty({ text: 'Cargo no encontrado' })
  .setToastDuration(ToastDuration.SHORT)
  .setToastPosition(ToastPosition.BOTTOM)
  .setTextColor(new Color('white'))
  .setBackgroundColor('#ff9999')
  .show();
  const layout = <View>this.layout.nativeElement;
  layout.animate({
    backgroundColor: new Color("red"),
    duration: 300,
    delay: 50
  }).then(() => layout.animate({
    backgroundColor: new Color("white"),
    duration: 300,
    delay: 50
  }));
  }

animacion(){
  const layout = <View>this.layout.nativeElement;
    layout.animate({
    backgroundColor: new Color("green"),
    duration: 270,
    delay: 50
    }).then(() => layout.animate({
    backgroundColor: new Color("white"),
    duration: 270,
    delay: 50
  }));
}
  
  mostrarTodos(){
    this.animacion();
    this.resultados = this.people.buscar();
  }
  mensajeinvalid(){
    new Toasty({ text: 'Ingresa un cargo antes de buscar' })
  .setToastDuration(ToastDuration.SHORT)
  .setToastPosition(ToastPosition.BOTTOM)
  .setTextColor(new Color('white'))
  .setBackgroundColor('#ff9999')
  .show();
  const layout = <View>this.layout.nativeElement;
  layout.animate({
    backgroundColor: new Color("red"),
    duration: 300,
    delay: 50
  }).then(() => layout.animate({
    backgroundColor: new Color("white"),
    duration: 300,
    delay: 50
  }));
  }
}
class Select{
	constructor(public id: number, public name: string, public image: string){}
}
class Arrayresultados{
	constructor(public cargo: string, public name: string, public image: string){}
}



