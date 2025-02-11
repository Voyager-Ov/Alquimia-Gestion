export interface FormField {
    key: string;         // Nombre de la propiedad en el objeto
    label: string;       // Etiqueta para mostrar
    type: string;        // Tipo de input (text, number, email, etc.)
    options?: Array<{          // Opciones solo para tipo 'select'
      value: any; 
      label: string;
    }>;
    value?: any; // Valor inicial
    validators?: any[]; // Validadores
  }