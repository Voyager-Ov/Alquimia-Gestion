export interface CustomUser {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    is_active: boolean;
    is_staff: boolean;
    date_joined: Date;
    last_login?: Date;
    tipo_de_usuario: string
}