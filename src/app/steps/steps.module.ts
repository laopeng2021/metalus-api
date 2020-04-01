import { NgModule } from '@angular/core';
import { StepsEditorComponent } from './components/steps-editor/steps-editor.component';
import { StepsSelectorComponent } from './components/selector/steps-selector/steps-selector.component';
import { StepsCategoryComponent } from './components/selector/steps-category/steps-category.component';
import { StepsListComponent } from './components/selector/steps-list/steps-list.component';
import { DesignerModule } from '../designer/designer.module';
import { SharedModule } from '../shared/shared.module';
import { CodeEditorModule } from '../code-editor/code-editor.module';

@NgModule({
  imports: [
    SharedModule,
    DesignerModule,
    CodeEditorModule,
  ],
  declarations: [
    StepsEditorComponent,
    StepsSelectorComponent,
    StepsCategoryComponent,
    StepsListComponent,
  ],
  exports: [
    StepsSelectorComponent,
  ]
})

export class StepsModule {}
