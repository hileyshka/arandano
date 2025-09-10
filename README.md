# arándano App

Inicio de Proyecto de aplicación móvil de tienda de ropa y accesorios.  
Los usuarios podrán explorar el catálogo, gestionar su carrito, guardar sus medidas y probar prendas con un modelo virtual.

---

## Tecnologías usadas
- [React Native](https://reactnative.dev/) (con [Expo](https://expo.dev/))  
- [React Navigation](https://reactnavigation.org/) para la navegación por pestañas  
- [Supabase](https://supabase.com/) para la autenticación y almacenamiento de datos de usuarios  
- [TypeScript](https://www.typescriptlang.org/) para tipado  

---

## Estructura de la App
Actualmente la app tiene cuatro pantallas principales:  
- Home → bienvenida y presentación de la marca.  
- Catálogo → espacio para mostrar productos.  
- Perfil & Medidas → permite que el usuario guarde sus medidas en Supabase.  
- Carrito → lista de productos seleccionados para compra.  

---

## Estilo inicial
- Paleta base en negro minimalista con tipografía serif.  
- Interfaz simple con navegación inferior (bottom tabs).  
- La estética final (colores, fuentes, imágenes) se personalizará en fases siguientes.  

---

## Cómo correr el proyecto

Clonar el repositorio:
   ```bash
   git clone git@github.com:hileyshka/arandano.git
   cd arandano-app

- Instalar insdependencias:
   npm install

- Levantar el proyecto con Expo:
   npx expo start

- Escanea el QR en tu celular con la app Expo Go.

## Próximos pasos
- Mejorar la interfaz visual (colores, tipografía y branding).
- Ampliar el catálogo con datos reales.
- Implementar login de usuario con Supabase.
- Desarrollar el modelo virtual de probador de prendas.

! Proyecto creado por Hileyshka Roig. <3
