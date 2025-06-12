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
  stock: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: 'El stock debe ser un número mayor a 0',
  }),
  sku: z.string().min(1, 'El SKU es requerido'),
});

export const filterSchema = z
  .object({
    name: z.string().optional(),
    sku: z.string().optional(),
    minPrice: z.union([z.string(), z.number()]).optional(),
    maxPrice: z.union([z.string(), z.number()]).optional(),
  })
  .refine(
    (data) => {
      if (data.minPrice && data.maxPrice) {
        return Number(data.minPrice) <= Number(data.maxPrice);
      }
      return true;
    },
    {
      message: 'El precio mínimo no puede ser mayor al máximo',
      path: ['maxPrice'],
    }
  );
