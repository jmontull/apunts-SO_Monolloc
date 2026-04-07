import { defineConfig } from "vitepress";

// export default defineConfig({
//   title: "Apunts S.O Monolloc",
//   description: "Documentació de classe",
// });

export default defineConfig({
  title: "Apunts S.O Monolloc",
  description: "Documentació de classe de Sistemes Operatius",
  base: "/apunts-SO_Monolloc/",

  appearance: true,

  head: [["link", { rel: "icon", href: "/logo.png" }]],

  themeConfig: {
    nav: [
      { text: "🏠 Inicio", link: "/" },
      { text: "🐧 Linux Básico", link: "/linux-basico/" },
      { text: "👥 Usuarios", link: "/usuarios/" },
      { text: "🔐 Permisos", link: "/permisos/" },
    ],

    sidebar: [
      {
        text: "🐧 Linux Básico",
        items: [
          { text: "📘 Introducción", link: "/linux-basico/" },
          { text: "📂 Navegación", link: "/linux-basico/navegacion" },
          { text: "📁 Archivos y carpetas", link: "/linux-basico/archivos" },
          { text: "⚙️ Comandos básicos", link: "/linux-basico/comandos" },
        ],
      },
      {
        text: "👥 Gestión de usuarios",
        items: [
          { text: "👤 Usuarios en Linux", link: "/usuarios/" },
          { text: "➕ Crear usuarios", link: "/usuarios/crear" },
          { text: "🔁 Cambiar usuario", link: "/usuarios/cambiar" },
          { text: "❌ Eliminar usuarios", link: "/usuarios/eliminar" },
        ],
      },
      {
        text: "🔐 Permisos",
        items: [
          { text: "📖 Permisos rwx", link: "/permisos/" },
          { text: "🧠 chmod y chown", link: "/permisos/comandos" },
          { text: "🔢 Permisos numéricos", link: "/permisos/numeros" },
        ],
      },
    ],

    outlineTitle: "Contenido",

    socialLinks: [{ icon: "github", link: "https://github.com/tuusuario" }],

    footer: {
      message: "Apunts de Sistemes Operatius",
      copyright: "© 2026",
    },
  },
});
