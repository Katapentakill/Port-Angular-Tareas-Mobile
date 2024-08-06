export interface JwtPayload {
  email: string;  // Email del usuario
  sub: number;    // ID del usuario
  role: string;   // Rol del usuario
}
