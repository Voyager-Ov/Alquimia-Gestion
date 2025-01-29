import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
// import login y register
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
// import admin
import { AdminComponent } from './admin/admin.component';
import { AdminDasboardComponent } from './admin/admin_pages/admin-dasboard/admin-dasboard.component';
import { ClientesAdminComponent } from './admin/admin_pages/clientes-admin/clientes-admin.component';
import { PedidosAdminComponent } from './admin/admin_pages/pedidos-admin/pedidos-admin.component';
import { SuscriptoresAdminComponent } from './admin/admin_pages/suscriptores-admin/suscriptores-admin.component';
// import client
import { ClientDasboardComponent } from './client/client-dasboard/client-dasboard.component';
import { ClientProfileComponent } from './client/client-profile/client-profile.component';
import { ClientPedidosComponent } from './client/client-pedidos/client-pedidos.component';
// import page not found
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Rutas de la aplicacion
export const routes: Routes = [
    // inicio de sesion
    { path: 'inicio-de-sesion', component: LoginComponent }, 
    { path: 'registro', component: RegisterComponent},

    // administrador
    {
    path: 'admin',
    component: AdminComponent, // Layout del admin
    children: [
      { path: 'dashboard', component: AdminDasboardComponent },
      { path: 'pedidos', component: PedidosAdminComponent },
      { path: 'suscripciones', component: SuscriptoresAdminComponent },
      { path: 'clientes', component: ClientesAdminComponent }
        ]
    },

    // cliente
    { path: 'cliente/dashboard', component: ClientDasboardComponent},
    { path: 'cliente/pedidos', component: ClientPedidosComponent},
    { path: 'cliente/perfil', component: ClientProfileComponent},

    // redireccionamiento
    { path: '', redirectTo: 'inicio-de-sesion', pathMatch: 'full' }, // Redirigir a login por defecto
    { path: '**', component: PageNotFoundComponent } // Page not found
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
