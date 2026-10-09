// =====================================================
// MAIN.JS - Componentes compartidos y utilidades globales
// =====================================================

(function () {
  "use strict";

  // ====== ICONOS SVG ======
  const ICONS = {
    code: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"/></svg>',
    mobile: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"/></svg>',
    settings: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.5 7.5 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.5 6.5 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6Z"/></svg>',
    cloud: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"/></svg>',
    briefcase: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.106-.403.196-.624.275a48.4 48.4 0 0 1-8.516.667c-2.985 0-5.86-.243-8.516-.667a6.07 6.07 0 0 1-.624-.275m4.5-8.006A48.142 48.142 0 0 1 12 6.337c2.985 0 5.86.243 8.516.667m0 0a48.4 48.4 0 0 1 .624.275M3.75 7.794c-.194.106-.403.196-.624.275m0 0a48.142 48.142 0 0 0-3.063.51A2.25 2.25 0 0 0 .001 10.811v5.387c0 .962.605 1.737 1.434 2.026a48.43 48.43 0 0 0 1.315.36m16.5-1.296a2.25 2.25 0 0 0 1.314-2.026V10.81a2.25 2.25 0 0 0-1.063-1.95 48.4 48.4 0 0 0-3.063-.51m-16.5 0a48.142 48.142 0 0 1 3.063-.51m0 0V6.337c0-1.181.86-2.218 2.012-2.376A48.342 48.342 0 0 1 12 3.75c2.485 0 4.86.198 7.125.563"/></svg>',
    palette: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.637L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.761 6.761 0 0 1-5.043 0"/></svg>',
    support: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M16.712 4.33a9.65 9.65 0 0 1 1.48 8.488m2.152-9.494a9.683 9.683 0 0 0-9.687 9.673 9.682 9.682 0 0 0-3.388-.751m12.075.002a9.687 9.687 0 0 1-9.674 9.674 9.682 9.682 0 0 1-3.388-.75M3.75 9.673a9.683 9.683 0 0 0 9.674 9.674 9.682 9.682 0 0 0 3.388-.75M3 6h.008v.008H3V6Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM21 18.75h.008v.008H21v-.008Zm-.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/></svg>',
    link: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"/></svg>',
    lightbulb: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"/></svg>',
    award: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-4.5A3.375 3.375 0 0 0 19.125 10.875h-.375m-13.5 0v-.375c0-.621.504-1.125 1.125-1.125H6.75m9.75-3.75V6.75A3.375 3.375 0 0 0 13.125 3.375h-2.25A3.375 3.375 0 0 0 7.5 6.75v3.75M3 16.811V8.69c0-.864.466-1.66 1.21-2.092l5.394-3.105a2.25 2.25 0 0 1 2.222 0L17.31 6.598c.744.432 1.21 1.228 1.21 2.092v8.121c0 .864-.466 1.66-1.21 2.092l-5.484 3.158a2.25 2.25 0 0 1-2.222 0L4.21 18.903A1.973 1.973 0 0 1 3 16.811Z"/></svg>',
    heart: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/></svg>',
    eye: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>',
    check: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>',
    x: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/></svg>',
    chevron: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>',
    menu: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>',
    arrow: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/></svg>',
    up: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"/></svg>',
    map: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/></svg>',
    phone: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/></svg>',
    mail: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/></svg>',
    clock: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>',
    facebook: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.89h2.54V9.797c0-2.508 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12Z"/></svg>',
    twitter: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
    linkedin: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.339 18V10.49H5.997V18h2.342ZM7.168 9.5a1.357 1.357 0 1 0 0-2.714 1.357 1.357 0 0 0 0 2.714ZM18 18v-4.493c0-2.474-1.32-3.626-3.083-3.626-1.422 0-2.06.84-2.413 1.43V10.49h-2.342c.031.671 0 7.51 0 7.51h2.342v-4.193c0-.224.016-.448.082-.607.18-.729.592-1.484 1.286-1.484.907 0 1.27.69 1.27 1.702V18H18Z"/></svg>',
    instagram: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>',
    github: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
    youtube: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
    star: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>',
    starEmpty: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/></svg>'
  };

  window.ICONS = ICONS;

  // ====== UTILIDADES ======
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const create = (html) => {
    const tpl = document.createElement("template");
    tpl.innerHTML = html.trim();
    return tpl.content.firstElementChild;
  };

  window.$ = $;
  window.$$ = $$;
  window.create = create;

  // ====== LOADER ======
  function initLoader() {
    const loader = $(".page-loader");
    if (!loader) return;
    window.addEventListener("load", () => {
      setTimeout(() => loader.classList.add("hidden"), 300);
    });
  }

  // ====== NAVBAR ======
  function initNavbar() {
    const navbar = $("#navbar");
    if (!navbar) return;
    const hamburger = $(".hamburger", navbar);
    const mobileMenu = $(".mobile-menu", navbar);
    const path = window.location.pathname.split("/").pop() || "index.html";

    $$(".nav-link", navbar).forEach((link) => {
      const href = link.getAttribute("href");
      if (href === path || (path === "" && href === "index.html")) {
        link.classList.add("active");
      }
    });

    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) navbar.classList.add("scrolled");
      else navbar.classList.remove("scrolled");
    });

    if (hamburger && mobileMenu) {
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        mobileMenu.classList.toggle("open");
      });

      $$(".mobile-menu .nav-link", navbar).forEach((link) => {
        link.addEventListener("click", () => {
          hamburger.classList.remove("active");
          mobileMenu.classList.remove("open");
        });
      });
    }
  }

  // ====== REVEAL ON SCROLL ======
  function initReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );
    $$(".reveal, .reveal-left, .reveal-right, .reveal-scale").forEach((el) => {
      observer.observe(el);
    });
  }

  // ====== CONTADORES ANIMADOS ======
  function initCounters() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.dataset.target, 10);
            const suffix = el.dataset.suffix || "";
            const duration = 1800;
            const start = performance.now();
            function tick(now) {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const value = Math.floor(eased * target);
              el.textContent = value.toLocaleString("es-MX") + suffix;
              if (progress < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    $$(".counter").forEach((c) => observer.observe(c));
  }

  // ====== SKILL BARS ======
  function initSkillBars() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const fill = entry.target;
            const width = fill.dataset.width || "0";
            fill.style.width = width + "%";
            observer.unobserve(fill);
          }
        });
      },
      { threshold: 0.5 }
    );
    $$(".skill-bar-fill").forEach((f) => observer.observe(f));
  }

  // ====== ACCORDION ======
  function initAccordion() {
    $$(".accordion-item").forEach((item) => {
      const header = $(".accordion-header", item);
      if (!header) return;
      header.addEventListener("click", () => {
        const wasActive = item.classList.contains("active");
        $$(".accordion-item").forEach((i) => i.classList.remove("active"));
        if (!wasActive) item.classList.add("active");
      });
    });
  }

  // ====== SCROLL TO TOP ======
  function initScrollTop() {
    const btn = $(".scroll-top");
    if (!btn) return;
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) btn.classList.add("visible");
      else btn.classList.remove("visible");
    });
    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ====== TOAST ======
  window.showToast = function (message, type = "success") {
    const old = $(".toast");
    if (old) old.remove();
    const toast = create(`<div class="toast toast-${type}">${message}</div>`);
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add("show"));
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  };

  // ====== LIGHTBOX ======
  function initLightbox() {
    const lightbox = $("#lightbox");
    if (!lightbox) return;
    $$("[data-lightbox]").forEach((item) => {
      item.addEventListener("click", () => {
        const content = item.dataset.lightbox;
        $(".lightbox-content", lightbox).innerHTML = content;
        lightbox.classList.add("active");
        document.body.style.overflow = "hidden";
      });
    });
    $(".lightbox-close", lightbox).addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    function closeLightbox() {
      lightbox.classList.remove("active");
      document.body.style.overflow = "";
    }
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeLightbox();
    });
  }

  // ====== RENDER FOOTER ======
  function renderShared() {
    const navbarMount = $("#navbar-mount");
    const footerMount = $("#footer-mount");
    const scrollTopMount = $("#scroll-top-mount");

    if (navbarMount) {
      navbarMount.innerHTML = `
        <nav id="navbar" class="navbar fixed top-0 left-0 right-0 z-50 px-4 lg:px-8 py-4 transition-all duration-300">
          <div class="max-w-7xl mx-auto flex items-center justify-between">
            <a href="index.html" class="flex items-center gap-2 group">
              <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white text-xl shadow-lg group-hover:scale-110 transition-transform">
                D
              </div>
              <span class="text-xl font-bold gradient-text hidden sm:inline">${APP_DATA.empresa.nombre}</span>
            </a>
            <div class="hidden lg:flex items-center gap-8">
              <a class="nav-link text-slate-200 hover:text-white" href="index.html">Inicio</a>
              <a class="nav-link text-slate-200 hover:text-white" href="nosotros.html">Nosotros</a>
              <a class="nav-link text-slate-200 hover:text-white" href="servicios.html">Servicios</a>
              <a class="nav-link text-slate-200 hover:text-white" href="precios.html">Precios</a>
              <a class="nav-link text-slate-200 hover:text-white" href="horario-clases.html">Cursos</a>
              <a class="nav-link text-slate-200 hover:text-white" href="contacto.html">Contacto</a>
            </div>
            <a href="contacto.html" class="hidden lg:inline-block px-5 py-2.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold btn-glow">
              Cotizar Proyecto
            </a>
            <button class="hamburger lg:hidden" aria-label="Abrir menú">
              <span></span><span></span><span></span>
            </button>
          </div>
          <div class="mobile-menu lg:hidden">
            <div class="pt-4 mt-4 border-t border-indigo-500/20 flex flex-col gap-3 pb-4">
              <a class="nav-link text-slate-200 hover:text-white py-2" href="index.html">Inicio</a>
              <a class="nav-link text-slate-200 hover:text-white py-2" href="nosotros.html">Nosotros</a>
              <a class="nav-link text-slate-200 hover:text-white py-2" href="servicios.html">Servicios</a>
              <a class="nav-link text-slate-200 hover:text-white py-2" href="precios.html">Precios</a>
              <a class="nav-link text-slate-200 hover:text-white py-2" href="horario-clases.html">Cursos</a>
              <a class="nav-link text-slate-200 hover:text-white py-2" href="contacto.html">Contacto</a>
              <a href="contacto.html" class="mt-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-center btn-glow">
                Cotizar Proyecto
              </a>
            </div>
          </div>
        </nav>
      `;
    }

    if (footerMount) {
      footerMount.innerHTML = `
        <footer class="footer mt-20 border-t border-indigo-500/10 bg-slate-950/60 backdrop-blur-sm">
          <div class="max-w-7xl mx-auto px-4 lg:px-8 py-12">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div class="flex items-center gap-2 mb-4">
                  <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white text-xl">
                    D
                  </div>
                  <span class="text-xl font-bold gradient-text">${APP_DATA.empresa.nombre}</span>
                </div>
                <p class="text-slate-400 text-sm leading-relaxed mb-4">${APP_DATA.empresa.descripcionCorta}</p>
                <div class="flex gap-3">
                  <a href="${APP_DATA.empresa.redes.facebook}" class="w-9 h-9 rounded-lg bg-slate-800 hover:bg-indigo-600 flex items-center justify-center transition-colors">${ICONS.facebook}</a>
                  <a href="${APP_DATA.empresa.redes.twitter}" class="w-9 h-9 rounded-lg bg-slate-800 hover:bg-indigo-600 flex items-center justify-center transition-colors">${ICONS.twitter}</a>
                  <a href="${APP_DATA.empresa.redes.linkedin}" class="w-9 h-9 rounded-lg bg-slate-800 hover:bg-indigo-600 flex items-center justify-center transition-colors">${ICONS.linkedin}</a>
                  <a href="${APP_DATA.empresa.redes.instagram}" class="w-9 h-9 rounded-lg bg-slate-800 hover:bg-indigo-600 flex items-center justify-center transition-colors">${ICONS.instagram}</a>
                  <a href="${APP_DATA.empresa.redes.github}" class="w-9 h-9 rounded-lg bg-slate-800 hover:bg-indigo-600 flex items-center justify-center transition-colors">${ICONS.github}</a>
                </div>
              </div>
              <div>
                <h4 class="text-white font-semibold mb-4">Empresa</h4>
                <ul class="space-y-2 text-sm">
                  <li><a href="nosotros.html" class="text-slate-400 hover:text-indigo-400 transition-colors">Sobre Nosotros</a></li>
                  <li><a href="servicios.html" class="text-slate-400 hover:text-indigo-400 transition-colors">Servicios</a></li>
                  <li><a href="precios.html" class="text-slate-400 hover:text-indigo-400 transition-colors">Precios</a></li>
                  <li><a href="horario-clases.html" class="text-slate-400 hover:text-indigo-400 transition-colors">Cursos</a></li>
                </ul>
              </div>
              <div>
                <h4 class="text-white font-semibold mb-4">Legal</h4>
                <ul class="space-y-2 text-sm">
                  <li><a href="privacidad.html" class="text-slate-400 hover:text-indigo-400 transition-colors">Políticas de Privacidad</a></li>
                  <li><a href="terminos.html" class="text-slate-400 hover:text-indigo-400 transition-colors">Términos y Condiciones</a></li>
                  <li><a href="contacto.html" class="text-slate-400 hover:text-indigo-400 transition-colors">Contacto</a></li>
                </ul>
              </div>
              <div>
                <h4 class="text-white font-semibold mb-4">Contacto</h4>
                <ul class="space-y-3 text-sm text-slate-400">
                  <li class="flex gap-2 items-start">
                    <span class="text-indigo-400 mt-0.5 flex-shrink-0">${ICONS.map}</span>
                    <span>${APP_DATA.empresa.direccion}</span>
                  </li>
                  <li class="flex gap-2 items-center">
                    <span class="text-indigo-400 flex-shrink-0">${ICONS.phone}</span>
                    <a href="tel:${APP_DATA.empresa.telefono}" class="hover:text-indigo-400">${APP_DATA.empresa.telefono}</a>
                  </li>
                  <li class="flex gap-2 items-center">
                    <span class="text-indigo-400 flex-shrink-0">${ICONS.mail}</span>
                    <a href="mailto:${APP_DATA.empresa.email}" class="hover:text-indigo-400">${APP_DATA.empresa.email}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="mt-10 pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
              <p class="text-slate-500 text-sm">© 2026 ${APP_DATA.empresa.nombre}. Todos los derechos reservados.</p>
              <p class="text-slate-500 text-sm">Hecho con <span class="text-red-500">♥</span> en México</p>
            </div>
          </div>
        </footer>
      `;
    }

    if (scrollTopMount) {
      scrollTopMount.innerHTML = `<button class="scroll-top" aria-label="Volver arriba">${ICONS.up}</button>`;
    }
  }

  // ====== INIT ======
  document.addEventListener("DOMContentLoaded", () => {
    initLoader();
    renderShared();
    initNavbar();
    initReveal();
    initCounters();
    initSkillBars();
    initAccordion();
    initScrollTop();
    initLightbox();
  });
})();