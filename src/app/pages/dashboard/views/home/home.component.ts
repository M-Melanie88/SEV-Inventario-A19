import { Component, Renderer2, ViewChild } from '@angular/core';
import { LayoutService } from '../../../../layout/service/layout.service';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ApplayoutComponent } from '../../components/applayout/applayout.component';

@Component({
  selector: 'app-home',
      imports: [ApplayoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
