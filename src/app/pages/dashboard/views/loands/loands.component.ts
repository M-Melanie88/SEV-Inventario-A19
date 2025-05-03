import { Component, Renderer2, ViewChild } from '@angular/core';
import { CrudComponent } from '../../components/crud/crud.component';
import { SidebarComponent } from '../../../../shared/components/sidebar/sidebar.component';
import { TopbarComponent } from '../../../../shared/components/topbar/topbar.component';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { LayoutService } from '../../../../layout/service/layout.service';


@Component({
  selector: 'app-loands',
  imports: [   CrudComponent,
      SidebarComponent,
      TopbarComponent,
      CommonModule,
      RouterModule,],
  templateUrl: './loands.component.html',
  styleUrl: './loands.component.scss'
})
export class LoandsComponent {

  menuOutsideClickListener: any;

  @ViewChild(SidebarComponent) sidebarComponent!: SidebarComponent;

  @ViewChild(TopbarComponent) topbarComponent!: TopbarComponent;

  constructor(public layoutService: LayoutService) {}

  get containerClass() {
    return {
      'layout-overlay':
        this.layoutService.layoutConfig().menuMode === 'overlay',
      'layout-static': this.layoutService.layoutConfig().menuMode === 'static',
      'layout-static-inactive':
        this.layoutService.layoutState().staticMenuDesktopInactive &&
        this.layoutService.layoutConfig().menuMode === 'static',
      'layout-overlay-active':
        this.layoutService.layoutState().overlayMenuActive,
      'layout-mobile-active':
        this.layoutService.layoutState().staticMenuMobileActive,
    };
  }
}
