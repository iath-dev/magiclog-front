import React, { useState } from 'react';
import { loginSchema } from '../../schemas/schemas';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Alert, Button, FormInput } from '../../components';

const LoginPage = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = loginSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: { [key: string]: string } = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
    } else {
      setErrors({});
      login(form.username, form.password)
        .then((user) => {
          switch (user.role) {
            case 'admin':
              navigate('/admin', { replace: true });
              break;
            case 'seller':
              navigate('/seller', { replace: true });
              break;
            case 'buyer':
              navigate('/buyer', { replace: true });
              break;
            default:
              navigate('/auth/login', { replace: true });
          }
        })
        .catch(() => {
          setErrors({
            general: 'Credenciales incorrectas. Inténtalo de nuevo.',
          });
        });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="username"
            label="Correo electrónico"
            placeholder="Correo electrónico"
            value={form.username}
            onChange={handleChange}
            hasError={!!errors.username}
            error={errors.username}
          />
          <FormInput
            type="password"
            name="password"
            label="Contraseña"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
            hasError={!!errors.password}
            error={errors.password}
            helperText="Debe tener al menos 6 caracteres, una mayúscula, una minúscula y un número."
          />
          {errors.general && <Alert variant="danger" message={errors.general} />}
          <Button
            type="submit"
            variant={Object.keys(errors).length > 0 ? 'danger' : 'primary'}
            fullWidth
          >
            Entrar
          </Button>
        </form>
        <p className="mt-4 text-sm text-gray-600 text-center">
          ¿No tienes cuenta?{' '}
          <a href="/auth/register" className="text-indigo-600 hover:underline">
            Regístrate
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
