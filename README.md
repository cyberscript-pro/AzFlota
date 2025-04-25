
## Getting Started

First, run the development server:

## Crear archivo .env y copiar el codido de .template.env al archivo .env, tambien debe crear la pase de datos manualmente el su gestor de base de datos PostgreSQL con el nombre azflota y crear un usuario y contraseña  como se indica el el archivo .template.env

Despues de hacer lo anterior para ejecutar el proyecto haga los comandos siguientes en orden asegurese de tener internet:

```bash
npm i -g pnpm

pnpm install

pnp prisma migrate dev --name init

pnpm dev "debe tener internet para correr el proyecto"
```


