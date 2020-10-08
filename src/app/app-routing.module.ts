import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactListComponent } from './contact-list/contact-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ContactListComponent, data: { animation: { page: 'listPage' } } },
  { path: 'detail/:id', component: ContactDetailComponent, data: { animation: { page: 'detailPage' } } },
  { path: 'edit', component: ContactEditComponent, data: { animation: { page: 'editPage' } } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
