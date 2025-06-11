import React, { useState } from 'react';
import { registerSchema } from '../../schemas/schemas';
import { registerService } from '../../services';
import { useNavigate } from 'react-router-dom';
import type { RegisterRequest } from '../../types/auth';
import { Alert, Button, Input, Select } from '../../components';

interface RegisterForm extends RegisterRequest {
  confirm: string;
}

const RegisterPage = () => {
  const navigate =  useNavigate()
  const [form, setForm] = useState<RegisterForm>({ username: '', password: '', confirm: '', role: "admin" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = registerSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: { [key: string]: string } = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
    } else {
      setErrors({});

      registerService(form).then(() => {
        navigate('/auth/login', { replace: true });
      }).catch((error) => {
        console.error(error);
        setErrors({ general: 'Error al registrar. Inténtalo de nuevo.' });
      }
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Registro</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <Input
            type="email"
            name="username"
            label="Correo electrónico"
            placeholder="Correo electrónico"
            value={form.username}
            onChange={handleChange}
            error={!!errors.username}
            errorMessage={errors.username}
          />
          <Input
            type="password"
            name="password"
            label="Contraseña"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
            error={!!errors.password}
            errorMessage={errors.password}
            helperText="Debe tener al menos 6 caracteres, una mayúscula, una minúscula y un número."
          />
          <Input
            type="password"
            name="confirm"
            label="Confirmar contraseña"
            placeholder="Confirmar contraseña"
            value={form.confirm}
            onChange={handleChange}
            error={!!errors.confirm}
            errorMessage={errors.confirm}
          />
          <Select label='Rol' name='role' onChange={handleChange} options={[
            { value: 'buyer', label: 'Comprador' },
            { value: 'seller', label: 'Vendedor' },
            { value: 'admin', label: 'Administrador' }
          ]} />
          {errors.general && <Alert variant="danger" message={errors.general} />}
          <Button
            type="submit"
            variant={Object.keys(errors).length > 0 ? 'danger' : 'primary'}
            fullWidth
          >
            Registrarse
          </Button>
        </form>
        <p className="mt-4 text-sm text-gray-600 text-center">
          ¿Ya tienes cuenta?{' '}
          <a href="/auth/login" className="text-indigo-600 hover:underline">
            Inicia sesión
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
