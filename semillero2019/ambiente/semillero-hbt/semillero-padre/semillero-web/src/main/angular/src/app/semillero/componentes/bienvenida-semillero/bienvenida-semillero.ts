import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * @description Componente bienvenida, el cual contiene el nombre del autor
 * 
 * @author Neyder Castaño Navarro 
 */
@Component({
  selector: 'bienvenida-semillero',
  templateUrl: './bienvenida-semillero.html',
})
export class Bienvenidasemillero implements OnInit {
   /**
     * Atributos que contiene los valores de las variables a luego llamar en "bienvenida-semillero" y se muestra en "bienvenida-component"
     */
  public nombre_autor : string = 'Neyder Castaño Navarro' ;
  public ciudad : string = 'Montería - Córdoba - Colombia';
  
  
  
  constructor() {
    console.log("entro al constructor del componente bienvenida");
  }

  ngOnInit(): void {
    
    }
}
