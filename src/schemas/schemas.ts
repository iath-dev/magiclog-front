import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Correo inválido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

export const registerSchema = z
  .object({
    name: z.string().min(2, 'El nombre es requerido'),
    email: z.string().email('Correo inválido'),
    password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: 'Las contraseñas no coinciden',
    path: ['confirm'],
  });

export const productSchema = z.object({
  name: z.string().min(2, 'El nombre es requerido'),
  price: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: 'El precio debe ser un número mayor a 0',
  }),
  sku: z.string().min(1, 'El SKU es requerido'),
});
