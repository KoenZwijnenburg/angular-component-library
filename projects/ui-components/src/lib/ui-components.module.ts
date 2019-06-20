import { NgModule } from '@angular/core';
import { UiComponentsComponent } from './ui-components.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [UiComponentsComponent, ButtonComponent],
  imports: [
  ],
  exports: [UiComponentsComponent, ButtonComponent]
})
export class UiComponentsModule { }
