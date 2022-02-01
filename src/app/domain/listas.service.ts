import { Injectable } from "@angular/core";
import { Component } from "@angular/core";

@Injectable()

export class ListasService {
	people: Person[];
	constructor(){
	this.people = [
		{
			cargo: 'Director',
			name: 'Ricardo Villanueva',
			image: 'res://director',
			descripcion: 'Director de la Universidad',
			},
		{
		cargo: 'Estudiante',
		name: 'Alejandro Garcia Arana',
		image: 'res://alejandro',
		descripcion: 'Estudiante de la carrera Ingenieria en nanotecnología',
		},
		{
		cargo: 'Servicio de limpieza',
		name: 'Pedro Torres',
		image: 'res://pedro',
		descripcion: 'Trabajor del turno matutino',
		},
		{
		cargo: 'Profesora',
		name: 'Raquel Lara',
		image: 'res://raquel',
		descripcion: 'Profesora de la materia de nanoelectronica',
		}
	]
	}

	buscar(){
		return this.people;
	}
	OnItemTap(args){
		console.log("Index: "+args.index);
		const select = this.people[args.index];
		console.log("Nombre: "+select.name);
		global.nombreU = select.name;
		global.cargoU = select.cargo;
		global.descripcionU = select.descripcion;
		global.imageU = select.image;

	}
	
}
class Person{
  
	constructor(public cargo: string, public name: string, public image: string, public descripcion: string){}
}

