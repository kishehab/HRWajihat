import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './material-module/material-module.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { TestGroundComponent } from './test-ground/test-ground.component';
import {
          MatSnackBarModule,
          MatSidenavModule,
          MatCheckboxModule,
          MatListModule,
          MatButtonToggleModule,
          MatToolbarModule,
          MatIconModule,
          MatChipsModule,
          MatDialogModule,
          MatTabsModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { SlideMenuComponent } from './slide-menu/slide-menu.component';
import { LayoutGridComponent } from './layout-grid/layout-grid.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { HeadComponent } from './head/head.component';
import { BoardComponent } from './board/board.component';
import { ClearAllDialogComponent } from './clear-all-dialog/clear-all-dialog.component';




@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    TestGroundComponent,
    routingComponents,
    FooterComponent,
    SlideMenuComponent,
    LayoutGridComponent,
    HeadComponent,
    BoardComponent,
    ClearAllDialogComponent,
  ],
  entryComponents: [ClearAllDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatChipsModule,
    MatDialogModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
