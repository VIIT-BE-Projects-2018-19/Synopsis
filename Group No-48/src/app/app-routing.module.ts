import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsgFormComponent } from './components/msg-form/msg-form.component';     // Add your component here
import { MsgDisplistComponent } from './components/msg-displist/msg-displist.component';  // Add your component here
import { AppComponent } from  './app.component';
//This is my case 
const routes: Routes = [
    {
        path: 'chat',
        component: MsgFormComponent
    },
    {
        path: 'chat',
        component: MsgDisplistComponent
    },
    {
        path: '',
        component: AppComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }