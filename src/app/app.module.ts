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
          MatTabsModule,
          MatSlideToggleModule,
          MatRadioModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { SlideMenuComponent } from './slide-menu/slide-menu.component';
import { LayoutGridComponent } from './layout-grid/layout-grid.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { HeadComponent } from './head/head.component';
import { BoardComponent } from './board/board.component';
import { ClearAllDialogComponent } from './clear-all-dialog/clear-all-dialog.component';
import { TileServiceService } from './tile-service.service';
import { ButtonWidgetComponent } from './button-widget/button-widget.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { ToolbarServiceService } from './toolbar-service.service';
import { DragDropModule } from '@angular/cdk/drag-drop';





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
    ButtonWidgetComponent,
    ToolbarComponent,
    SideNavigationComponent,
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
    MatTabsModule,
    MatSlideToggleModule,
    MatRadioModule,
    DragDropModule
    
  ],
  providers: [TileServiceService, ToolbarServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
