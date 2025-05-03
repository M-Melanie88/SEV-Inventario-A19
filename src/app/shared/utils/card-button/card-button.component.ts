import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-button',
  imports: [RouterLink, NgClass],
  templateUrl: './card-button.component.html',
  styleUrl: './card-button.component.scss',
})
export class CardButtonComponent {
  @Input() ruta!: string;       
  @Input() titulo!: string;    
  @Input() cantidad!: number;  
  @Input() subtitulo!: string; 
  @Input() icono!: string;      
}
