import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatToolbarModule, MatGridListModule, MatMenuModule, MatFormFieldModule, MatInputModule, MatIconModule, MatListModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

const materialComponebtModules = [
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatGridListModule,
  MatMenuModule,
  FlexLayoutModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatListModule
];
@NgModule({
  imports: [
    materialComponebtModules
  ],
  exports: [
    materialComponebtModules
  ]
})
export class MaterialModuleModule { }
