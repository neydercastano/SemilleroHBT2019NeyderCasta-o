import { Component, OnInit } from '@angular/core';
import { SemilleroDTO } from '../../dto/semillero.dto';


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
     * Atributo que contiene los valores de las variables a luego llamar en "bienvenida-semillero" y se muestra en "bienvenida-component"
     */
  public nombre_autor : string = 'Neyder Castaño Navarro' ;

   /**
     * Atributo que contiene los valores de las variables a luego llamar en "bienvenida-semillero" y se muestra en "bienvenida-component"
     */
  public ciudad : string = 'Montería - Córdoba - Colombia';

 /**
     * Atributos que contienen los valores de las variables SemilleroDto"
     */
  public semilleroDto : SemilleroDTO;
  public semilleroDto2 : SemilleroDTO;
  public semilleroDto3 : SemilleroDTO;
  public semilleroDto4 : SemilleroDTO;
  public semilleroDto5 : SemilleroDTO;

   /**
     * Atributo que contiene los valores de las lista Array que se muestra en "bienvenida-component"
     */
  public listaDatosComic: Array<SemilleroDTO>;
  
  
  constructor() {
    console.log("entro al constructor del componente bienvenida");
  }


  ngOnInit(): void {
    

    this.semilleroDto = new SemilleroDTO();    
    this.semilleroDto.nombre = "Batman";
    this.semilleroDto.editorial = "Dc";
    this.semilleroDto.tematica = "Aventura";
    this.semilleroDto.numeroPaginas = 100;
    this.semilleroDto.estado = "INACTIVO";
    this.semilleroDto.precio = 8000.00;
    this.semilleroDto.tematica = "AVENTURAS"
    this.semilleroDto.autores = "Steven J";
    this.semilleroDto.color = true;

    this.semilleroDto2 = new SemilleroDTO();    
    this.semilleroDto2.nombre = "Superman";
    this.semilleroDto2.editorial = "Dc";
    this.semilleroDto2.tematica = "Animados";
    this.semilleroDto2.numeroPaginas = 170;
    this.semilleroDto2.estado = "ACTIVO";
    this.semilleroDto2.precio = 5000.00;
    this.semilleroDto2.tematica = "AVENTURAS"
    this.semilleroDto2.autores = "Alberto V";
    this.semilleroDto2.color = false;

    
    this.semilleroDto3 = new SemilleroDTO();    
    this.semilleroDto3.nombre = "Ironman";
    this.semilleroDto3.editorial = "Marvel";
    this.semilleroDto3.tematica = "Animaccion";
    this.semilleroDto3.numeroPaginas = 90;
    this.semilleroDto3.estado = "INACTIVO";
    this.semilleroDto3.precio = 10000.00;
    this.semilleroDto3.tematica = "Guerra"
    this.semilleroDto3.autores = "Juan G";
    this.semilleroDto3.color = true;

    this.semilleroDto4 = new SemilleroDTO();    
    this.semilleroDto4.nombre = "Mujer Maravilla";
    this.semilleroDto4.editorial = "DC";
    this.semilleroDto4.tematica = "Aventura";
    this.semilleroDto4.numeroPaginas = 120;
    this.semilleroDto4.estado = "ACTIVO";
    this.semilleroDto4.precio = 15000.00;
    this.semilleroDto4.tematica = "AVENTURAS"
    this.semilleroDto4.autores = "Staan Lee";
    this.semilleroDto4.color = true;

    this.semilleroDto5 = new SemilleroDTO();    
    this.semilleroDto5.nombre = "Capitan America";
    this.semilleroDto5.editorial = "Marvel";
    this.semilleroDto5.tematica = "Justicia";
    this.semilleroDto5.numeroPaginas = 160;
    this.semilleroDto5.estado = "ACTIVO";
    this.semilleroDto5.precio = 50000.00;
    this.semilleroDto5.tematica = "AVENTURAS"
    this.semilleroDto5.autores = "Marvel";
    this.semilleroDto5.color = true;

    this.listaDatosComic = new Array<SemilleroDTO>();
   this.listaDatosComic.push(this.semilleroDto);
   this.listaDatosComic.push(this.semilleroDto2);
   this.listaDatosComic.push(this.semilleroDto3);
   this.listaDatosComic.push(this.semilleroDto4);
   this.listaDatosComic.push(this.semilleroDto5);
   

   
  }


   

  }

