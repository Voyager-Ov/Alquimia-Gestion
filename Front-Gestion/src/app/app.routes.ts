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
import { PerfilAdminComponent } from './admin/admin_pages/perfil-admin/perfil-admin.component';
import { ConfigAdminComponent } from './admin/admin_pages/config-admin/config-admin.component';
import { FinanzasAdminComponent } from './admin/admin_pages/finanzas-admin/finanzas-admin.component';
import { InventarioAdminComponent } from './admin/admin_pages/inventario-admin/inventario-admin.component';
import { MaquinariaAdminComponent } from './admin/admin_pages/maquinaria-admin/maquinaria-admin.component';
import { EmpleadosAdminComponent } from './admin/admin_pages/empleados-admin/empleados-admin.component';

// import client
import { ClientComponent } from './client/client.component';
import { ClientDasboardComponent } from './client/client-pages/client-dasboard/client-dasboard.component';
import { PerfilClienteComponent } from './client/client-pages/perfil-cliente/perfil-cliente.component';
import { SuscripcionClientComponent } from './client/client-pages/suscripcion-client/suscripcion-client.component';
import { ClientPedidosComponent } from './client/client-pages/client-pedidos/client-pedidos.component';
import { ClientConfigComponent } from './client/client-pages/client-config/client-config.component';

// import page not found
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// guardas
import { AdminGuard } from './core/guards/admin/admin.guard';
import { ClienteGuard } from './core/guards/client/client.guard';
import { FormComponent } from './shared/form/form.component';



// Rutas de la aplicacion
export const routes: Routes = [
    // inicio de sesion
    { path: 'inicio-de-sesion', component: LoginComponent }, 
    { path: 'registro', component: RegisterComponent},
    { path: 'form', component: FormComponent },

    // administrador
    {
    path: 'admin', 
    component: AdminComponent, // Layout del admin
    canActivate: [AdminGuard], 
    children: [
      { path: 'dashboard', component: AdminDasboardComponent },
      { path: 'pedidos', component: PedidosAdminComponent },
      { path: 'suscripciones', component: SuscriptoresAdminComponent },
      { path: 'clientes', component: ClientesAdminComponent },
      { path: 'finanzas', component: FinanzasAdminComponent },
      { path: 'inventario', component: InventarioAdminComponent },
      { path: 'Maquinaria', component: MaquinariaAdminComponent },
      { path: 'Empleados', component: EmpleadosAdminComponent },
      { path: 'configuraciones', component: ConfigAdminComponent },
      { path: 'perfil', component: PerfilAdminComponent}
      ]
    },

    // cliente
    {
      path: "cliente", 
      component: ClientComponent,
      canActivate: [ClienteGuard], 
      children: [
        { path: 'dashboard', component: ClientDasboardComponent, },
        { path: 'mis-pedidos', component: ClientPedidosComponent},
        { path: 'mis-suscripcion', component: SuscripcionClientComponent },
        { path: 'perfil', component: PerfilClienteComponent},
        { path: 'configuracion', component: ClientConfigComponent },
      ]
    },

    // redireccionamiento
    { path: '', redirectTo: 'inicio-de-sesion', pathMatch: 'full' }, // Redirigir a login por defecto
    { path: '**', component: PageNotFoundComponent }, // Page not found
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
