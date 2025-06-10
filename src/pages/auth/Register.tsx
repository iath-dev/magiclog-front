import React, { useState } from "react";
import { z } from "zod";

const registerSchema = z.object({
  name: z.string().min(2, "El nombre es requerido"),
  email: z.string().email("Correo inválido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  confirm: z.string()
}).refine((data) => data.password === data.confirm, {
  message: "Las contraseñas no coinciden",
  path: ["confirm"],
});

const RegisterPage = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      // Aquí iría la lógica de registro
      alert("Registro exitoso!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Registro</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre completo"
            className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
          <input
            type="password"
            name="confirm"
            placeholder="Confirmar contraseña"
            className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={form.confirm}
            onChange={handleChange}
          />
          {errors.confirm && <span className="text-red-500 text-sm">{errors.confirm}</span>}
          <button type="submit" className="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">Registrarse</button>
        </form>
        <p className="mt-4 text-sm text-gray-600 text-center">
          ¿Ya tienes cuenta? <a href="/auth/login" className="text-indigo-600 hover:underline">Inicia sesión</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
