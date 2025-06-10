// Regex para validar correo electrónico
export const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/;

// Regex para contraseña de seguridad media:
// Al menos 6 caracteres, una mayúscula, una minúscula, un número
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;
