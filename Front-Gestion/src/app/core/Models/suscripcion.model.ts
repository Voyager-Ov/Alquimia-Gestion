export interface suscripcion {
    id: number;
    usuario: {
        id: number;
        username: string;
      };
    fecha_inicio: Date;
    fecha_fin: Date;
    tipo: string;
    estado: string;
}