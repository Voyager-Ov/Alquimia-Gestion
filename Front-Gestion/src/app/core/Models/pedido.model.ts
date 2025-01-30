export interface pedido {
    id: string;
    username: string;
    descripcion: string;
    fecha_de_recepcion: string;
    fecha_de_entrega: string;
    precio: number;
    estado_de_pedido: string;
    estado_de_pago: string;
    [key: string]: any;
}