import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from 'src/app/app.component';
import { OpenAiComponent } from 'src/app/components/open-ai/open-ai.component';

const routes: Routes = [{ path: '', component: OpenAiComponent }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
