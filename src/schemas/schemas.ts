import { z } from 'zod';
import { emailRegex, passwordRegex } from '../utils/regex';

export const loginSchema = z.object({
  username: z.string().regex(emailRegex, 'Correo inválido'),
  password: z.string(),
});

export const registerSchema = z
  .object({
    username: z.string().regex(emailRegex, 'Correo inválido'),
    password: z
      .string()
      .regex(
        passwordRegex,
        'La contraseña debe tener al menos 6 caracteres, una mayúscula, una minúscula y un número'
      ),
    confirm: z.string(),
    role: z.enum(['admin', 'buyer', 'seller'], {
      errorMap: () => ({ message: 'El rol es requerido' }),
    }),
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
