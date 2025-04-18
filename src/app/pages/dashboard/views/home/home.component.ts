import { Component, Renderer2, ViewChild } from '@angular/core';
import { AppSidebar } from '../../../../layout/component/app.sidebar';
import { AppTopbar } from '../../../../layout/component/app.topbar';
import { LayoutService } from '../../../../layout/service/layout.service';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AppLayout } from "../../../../layout/component/app.layout";

@Component({
  selector: 'app-home',
      imports: [AppLayout],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
