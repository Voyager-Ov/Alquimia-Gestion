# Gestion-Alquimia - Gestión de Lavanderías

**Gestion-Alquimia** es una aplicación web escalable diseñada para gestionar una franquicia de lavanderías. La plataforma permite la gestión eficiente de pedidos, usuarios, suscripciones y finanzas tanto para los clientes como para los administradores de la lavandería.

## Propósito

El objetivo principal de este proyecto es construir una aplicación web de gestión para una franquicia de lavanderías que permita:

- **Administradores**: Gestionar pedidos, usuarios, servicios, y consultar estadísticas financieras de la lavandería.
- **Usuarios**: Consultar el estado de sus pedidos, ver cuántos lavados le quedan, hacer pedidos y realizar un seguimiento de sus servicios.

## Tecnologías utilizadas

### Backend
- **Django**: Framework web para Python que facilita la creación de aplicaciones robustas.
- **Django REST Framework**: Para construir una API RESTful.
- **PostgreSQL**: Base de datos relacional utilizada por defecto con Django.
- **JWT**: Para la autenticación de usuarios.

### Frontend
- **Angular**: Framework para construir aplicaciones web interactivas.
- **HTML5, CSS3, Bootstrap**: Para el diseño responsivo y estructuración de la interfaz de usuario.
- **RxJS**: Para manejar operaciones asincrónicas y eventos en el frontend.

### Otras Herramientas
- **Vercel**: Para el despliegue de la aplicación.
- **Postman**: Para realizar pruebas a la API.

### Para Administradores
- **Gestión de pedidos**: Ver todos los pedidos, junto con detalles como tipo de servicio, cliente, estado del pedido, etc.
- **Gestión de usuarios**: Acceder a información sobre los clientes registrados, suscripciones y actividad.
- **Finanzas**: Consultar estadísticas y estado de pagos de la lavandería.
- **Panel de administración**: Una consola donde se gestionan todos los aspectos de la lavandería.

### Para Usuarios
- **Gestión de pedidos**: Los usuarios pueden ver el estado de sus pedidos y servicios, así como el historial de pedidos anteriores.
- **Suscripciones**: Los usuarios podrán visualizar cuántos lavados les quedan y gestionar sus suscripciones.
- **Autenticación y seguridad**: Inicio de sesión integrado con Google, iCloud, Gmail y autenticación biométrica (huella dactilar, si es necesario).

### Funcionalidades futuras
- **Notificaciones**: Implementación de un sistema de notificaciones para mantener informados a los usuarios sobre el estado de sus pedidos y suscripciones.
- **Sistema de pagos**: Integración con pasarelas de pago como Mercado Libre, Naranja X y otras APIs disponibles.


## Despliegue

El frontend y backend se desplegarán utilizando **Vercel**. La base de datos y las configuraciones se gestionarán a través de los archivos de configuración de Django.

## Contribuciones

Las contribuciones son bienvenidas. Si tienes alguna idea o mejora, abre un **issue** o envía un **pull request**.

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

¡Gracias por utilizar **Gestion-Alquimia** para la gestión de tu lavandería!
