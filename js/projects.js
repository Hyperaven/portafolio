const projects = [
    {
        id: 'sisga',
        title: 'SISGA - Gestión Académica',
        category: 'web',
        shortDescription: 'Sistema de gestión académica integrado con CRM vTiger. Control de notas y entregables con roles definidos.',
        fullDescription: 'Sistema integral de gestión académica desarrollado bajo un patrón MVC adaptado. Implementa una arquitectura de doble base de datos (MySQL) para sincronizar información académica desde vTiger CRM y gestionar usuarios locales. Cuenta con roles diferenciados (Admin, Profesor, Alumno), seguridad avanzada (CSRF, Bcrypt) y generación dinámica de reportes de progreso y alertas de rendimiento.',
        stack: ['PHP 7.4', 'MVC Pattern', 'MySQL', 'vTiger CRM', 'Tailwind CSS', 'AJAX'],
        mainImage: 'img/projects/sisga/sisga-main.png',
        gallery: [
            // Autenticación y Seguridad
            { 
                url: 'img/projects/sisga/sisga-login-security.png',
                caption: 'Autenticación segura con encriptación Bcrypt y diseño limpio en Tailwind CSS.'
            },
            { 
                url: 'img/projects/sisga/sisga-password-forgot.png',
                caption: 'Flujo de recuperación de credenciales automatizado vía email.'
            },
            { 
                url: 'img/projects/sisga/sisga-activate-account.png',
                caption: 'Onboarding: Sincronización y activación automática de usuarios desde vTiger.'
            },

            // Rol: Administrador
            { 
                url: 'img/projects/sisga/sisga-admin-dashboard.png',
                caption: 'Dashboard administrativo: Métricas globales y accesos rápidos.'
            },
            { 
                url: 'img/projects/sisga/sisga-admin-users.png',
                caption: 'Gestión de usuarios: Filtrado avanzado y control de roles.'
            },
            { 
                url: 'img/projects/sisga/sisga-admin-users-edit.png',
                caption: 'Edición de perfiles: Validación de integridad de datos (Server-side & Client-side).'
            },
            { 
                url: 'img/projects/sisga/sisga-admin-teacher-assignments.png',
                caption: 'Módulo de Asignaciones: Vinculación lógica entre cursos vTiger y docentes locales.'
            },

            // Rol: Profesor
            { 
                url: 'img/projects/sisga/sisga-teacher-dashboard.png',
                caption: 'Panel Docente: Resumen de actividad académica y cargas asignadas.'
            },
            { 
                url: 'img/projects/sisga/sisga-teacher-all-students.png',
                caption: 'Directorio de Alumnos: Búsqueda instantánea asíncrona (AJAX).'
            },
            { 
                url: 'img/projects/sisga/sisga-teacher-deliverables-overview.png',
                caption: 'Matriz de Seguimiento: Vista comparativa de rendimiento con alertas de estado.'
            },
            { 
                url: 'img/projects/sisga/sisga-teacher-student-view-deliverables.png',
                caption: 'Detalle por Alumno: Historial completo de entregas y calificaciones.'
            },
            { 
                url: 'img/projects/sisga/sisga-teacher-student-deliverables.png',
                caption: 'Evaluación: Modal interactivo para feedback cualitativo y cambio de estados.'
            },
            { 
                url: 'img/projects/sisga/sisga-teacher-course-instances.png',
                caption: 'Organización Académica: Agrupación de cursos por período lectivo.'
            },
            { 
                url: 'img/projects/sisga/sisga-teacher-profile.png',
                caption: 'Perfil Docente: Gestión de credenciales y datos de contacto.'
            },

            // Rol: Estudiante
            { 
                url: 'img/projects/sisga/sisga-student-dashboard.png',
                caption: 'Portal del Estudiante: Visualización clara de metas y progreso.'
            },
            { 
                url: 'img/projects/sisga/sisga-student-courses.png',
                caption: 'Mis Cursos: Acceso centralizado a asignaturas inscritas.'
            },
            { 
                url: 'img/projects/sisga/sisga-student-deliverables.png',
                caption: 'Seguimiento Académico: Estado de tareas pendientes y completadas.'
            },
            { 
                url: 'img/projects/sisga/sisga-student-profile.png',
                caption: 'Perfil del Estudiante: Autogestión de cuenta.'
            }
        ]
    },
    {
        id: 'diplomados',
        title: 'Diplomados Online',
        category: 'web', //categoria es ecommerce, wordpress
        shortDescription: 'Plataforma de venta académica en WordPress con integración a medida (Vanilla JS) hacia vTiger CRM.',
        fullDescription: 'E-commerce especializado en educación digital construido sobre WordPress y WooCommerce. La característica principal es su sistema de matriculación personalizado: en lugar de plugins estándar, desarrollé una solución propia utilizando HTML, CSS y Vanilla JavaScript inyectados vía Elementor. Este script valida los datos del cliente en el frontend y gestiona la comunicación asíncrona para registrar pagos y estudiantes directamente en el CRM vTiger, garantizando una sincronización de datos limpia y sin intermediarios.',
        stack: ['WordPress', 'WooCommerce', 'Vanilla JS', 'Elementor Custom Code', 'vTiger API'],
        mainImage: 'img/projects/diplomadosonline/diplomadosonline-main.png',
        gallery: [
            //FRONTEND
            { 
                url: 'img/projects/diplomadosonline/diplomados-home-hero.png',
                caption: 'Página de Inicio: Diseño corporativo con búsqueda dinámica y avales universitarios visibles.'
            },
            { 
                url: 'img/projects/diplomadosonline/diplomados-product-detail.png',
                caption: 'Ficha de Producto: Plantilla de WooCommerce personalizada para conversión educativa con video integrado.'
            },
            { 
                url: 'img/projects/diplomadosonline/diplomados-payment-form.png',
                caption: 'Integración CRM: Formulario de registro de pagos que sincroniza datos automáticamente con vTiger.'
            },

            //BACKEND
            { 
                url: 'img/projects/diplomadosonline/diplomados-code-logic.png',
                caption: 'Lógica Frontend: Script personalizado (Vanilla JS) para validación y envío de datos al CRM.'
            },
            { 
                url: 'img/projects/diplomadosonline/diplomados-backend-woo.png',
                caption: 'Gestión de Catálogo: Administración de cursos y diplomados mediante el núcleo de WooCommerce.'
            },
            { 
                url: 'img/projects/diplomadosonline/diplomados-backend-security.png',
                caption: 'Seguridad Perimetral: Implementación de Firewall y escaneo de amenazas con Wordfence.'
            }
        ]
    },
    {
        id: 'crm-vtiger',
        title: 'Vtiger CRM - Automatización de Procesos',
        category: 'infra',
        shortDescription: 'Implementación avanzada de CRM con workflows automatizados, reportes a medida y suite VTExpert.',
        fullDescription: 'Configuración y personalización profunda de vTiger CRM Community Edition. El proyecto incluye la integración de la suite VTExpert para potenciar funcionalidades críticas: diseñador de módulos personalizados, generador de PDFs dinámicos y dashboards avanzados. Se implementaron workflows complejos para la automatización del ciclo de ventas (notificaciones transaccionales post-pago conectadas al E-commerce) y macros para la gestión masiva de registros, asegurando la integridad de datos mediante copias de seguridad automatizadas.',
        stack: ['vTiger CRM', 'VTExpert Suite', 'Workflow Automation', 'MySQL', 'SMTP/Mail', 'Linux Admin', 'Apache'],
        mainImage: 'img/projects/vtiger/vtiger-dashboard-main.png',
        gallery: [
            { 
                url: 'img/projects/vtiger/vtiger-dashboard-vtexpert.png',
                caption: 'Inteligencia de Negocios: Dashboard personalizado con KPIs en tiempo real (VTExpert).'
            },
            { 
                url: 'img/projects/vtiger/vtiger-workflow-logic.png',
                caption: 'Automatización: Lógica de flujos de trabajo para notificaciones de pago y cambios de estado.'
            },
            { 
                url: 'img/projects/vtiger/vtiger-pdf-designer.png', 
                caption: 'Documentación Dinámica: Plantillas de facturación y recibos diseñadas con PDF Maker.' 
            },
            { 
                url: 'img/projects/vtiger/vtiger-email-templates.png', 
                caption: 'Comunicación: Diseño de plantillas de correo transaccionales integradas vía SMTP.' 
            },
            { 
                url: 'img/projects/vtiger/vtiger-custom-module.png', 
                caption: 'Extensibilidad: Creación y configuración de módulos personalizados para necesidades específicas.' 
            }
        ]
    },
    {
        id: 'campus',
        title: 'Campus Virtual - LMS Integral',
        category: 'lms',
        shortDescription: 'Plataforma de E-learning basada en el framework WPLMS con certificación automatizada.',
        fullDescription: 'Implementación completa de un entorno virtual de aprendizaje utilizando la suite WPLMS sobre WordPress. La plataforma gestiona el ciclo educativo completo: desde la matriculación y el seguimiento del progreso estudiantil a través de dashboards interactivos, hasta la evaluación y emisión automática de certificados en PDF. Cuenta con perfiles diferenciados (Instructor/Estudiante), seguridad perimetral con Wordfence y una estructura curricular multimedia.',
        stack: ['WordPress', 'WPLMS Suite', 'BuddyPress', 'PDF Certificates', 'Wordfence'],
        mainImage: 'img/projects/campus/campus-student-dashboard.png',
        gallery: [
            // Vistas del Estudiante
            { 
                url: 'img/projects/campus/campus-student-courses.png', 
                caption: 'Cursos del Estudiante: Vista centralizada de cursos activos.'
            },
            { 
                url: 'img/projects/campus/campus-course-status.png', 
                caption: 'Interfaz de Aprendizaje: Navegación secuencial por unidades, videos y cuestionarios (Quizzes).' 
            },
            { 
                url: 'img/projects/campus/campus-certificate.png', 
                caption: 'Certificación Automática: Generación dinámica de diplomas en PDF basada en criterios de finalización.' 
            },

            // Vistas de Gestión / Backend
            { 
                url: 'img/projects/campus/campus-curriculum-builder.png', 
                caption: 'Gestión Curricular: Estructuración de módulos, unidades y evaluaciones desde el backend.' 
            },
            { 
                url: 'img/projects/campus/campus-admin-stats.png', 
                caption: 'Analítica LMS: Reportes de actividad, calificaciones y rendimiento de los cursos.' 
            }
        ] 
    },
    {
        id: 'dolscan',
        title: 'DolScan - Logística de Eventos QR',
        category: 'web',
        shortDescription: 'Sistema híbrido (Web/Local) para control de asistencia y protocolo en eventos masivos sin dependencia de internet.',
        fullDescription: 'Solución integral diseñada para la gestión logística de graduaciones. El sistema implementa una arquitectura dual: un portal web público para que los asistentes consulten su credencial y un entorno local (desplegado sobre Laragon) para la operación en sitio. El módulo local funciona totalmente offline y sincroniza tres interfaces en tiempo real: Escaneo (Staff), Protocolo/Orador (Lista dinámica de asistentes en sala) y Administración (Métricas y generación de QRs con la librería phpqrcode).',
        stack: ['PHP', 'MySQL Local', 'Tailwind CSS', 'JavaScript', 'phpqrcode Lib', 'Offline-First'],
        mainImage: 'img/projects/dolscan/dolscan-main.png',
        gallery: [
            // 1. Portal Web (Público)
            { 
                url: 'img/projects/dolscan/dolscan-public-qr.png', 
                caption: 'Portal Público: Interfaz de autogestión donde el usuario genera su pase de acceso mediante ID.' 
            },
            
            // 2. Operación en Sitio (Staff y Orador)
            { 
                url: 'img/projects/dolscan/dolscan-staff-scanner.png', 
                caption: 'Rol de Staff: Escáner de alto rendimiento para validación de ingresos offline.' 
            },
            { 
                url: 'img/projects/dolscan/dolscan-speaker-view.png', 
                caption: 'Vista de Orador: Lista dinámica filtrada que muestra solo a los asistentes presentes en sala.' 
            },
            { 
                url: 'img/projects/dolscan/dolscan-speaker-history.png', // NUEVA
                caption: 'Control de Protocolo: Historial de llamados con función "Deshacer" para corrección de errores en vivo.' 
            },

            // 3. Administración y Datos
            { 
                url: 'img/projects/dolscan/dolscan-admin-dashboard.png', 
                caption: 'Dashboard General: Visualización gráfica de KPIs y métricas de asistencia en tiempo real.' 
            },
            { 
                url: 'img/projects/dolscan/dolscan-metrics-table.png', // NUEVA
                caption: 'Auditoría de Evento: Tabla de resumen general para el cuadre final de diplomas entregados.' 
            },
            { 
                url: 'img/projects/dolscan/dolscan-qr-generation.png', 
                caption: 'Gestión Local: Generación de QRs y registro de incidencias directamente en la base de datos local.' 
            }
        ]
    },
    {
        id: 'reto500k',
        title: 'Plataforma Reto 500K - Sistema de Formación',
        category: 'web', // O 'app' dado que es una aplicación completa
        shortDescription: 'Aplicación web de gestión educativa con arquitectura MVC propia, roles avanzados y lógica secuencial.',
        fullDescription: 'Plataforma integral desarrollada en PHP 8 bajo una arquitectura MVC personalizada sin frameworks. El sistema gestiona ciclos formativos con progresión estricta (desbloqueo secuencial de tareas) y validación financiera. Implementa patrones de diseño avanzados como Singleton, Factory, Active Record y una Capa de Servicios (Service Layer) para desacoplar la lógica de negocio. Cuenta con paneles diferenciados para Administradores, Gestores y Participantes, manejando desde la inscripción y pagos hasta la evaluación de entregables.',
        stack: ['PHP 8', 'MVC Pattern', 'Service Layer', 'MySQL', 'Active Record', 'JavaScript'],
        mainImage: 'img/projects/reto500k/admin-dashboard-main.png', // Asegúrate de que esta imagen exista
        gallery: [
            // --- ROL: ADMINISTRADOR (El Control Total) ---
            { 
                url: 'img/projects/reto500k/admin-dashboard-metrics.png', 
                caption: 'Admin Dashboard: Visualización de KPIs globales (Ingresos, Usuarios, Inscripciones) en tiempo real.' 
            },
            { 
                url: 'img/projects/reto500k/admin-users-crud.png', 
                caption: 'Gestión de Usuarios: CRUD completo con paginación y búsqueda, implementado con patrón Active Record.' 
            },
            { 
                url: 'img/projects/reto500k/admin-programs-config.png', 
                caption: 'Configuración de Programas: Creación de ciclos formativos y definición de reglas de negocio.' 
            },
            { 
                url: 'img/projects/reto500k/admin-tasks-manager.png', 
                caption: 'Gestión de Contenido: Editor de tareas con fechas de publicación y criterios de desbloqueo.' 
            },
            { 
                url: 'img/projects/reto500k/admin-payments-global.png', 
                caption: 'Auditoría Financiera: Vista global de transacciones y estados de pago del sistema.' 
            },
            { 
                url: 'img/projects/reto500k/admin-reports-performance.png', 
                caption: 'Reportes Avanzados: Generación de tablas de clasificación y exportación de data a Excel.' 
            },

            // --- ROL: GESTOR (La Operación Diaria) ---
            { 
                url: 'img/projects/reto500k/gestor-dashboard.png', 
                caption: 'Dashboard Operativo: Vista enfocada en tareas pendientes y validaciones diarias.' 
            },
            { 
                url: 'img/projects/reto500k/gestor-inscriptions.png', 
                caption: 'Control de Acceso: Validación manual de solicitudes de inscripción y perfiles.' 
            },
            { 
                url: 'img/projects/reto500k/gestor-payments-validation.png', 
                caption: 'Conciliación de Pagos: Interfaz para aprobar/rechazar comprobantes bancarios y liberar acceso.' 
            },
            { 
                url: 'img/projects/reto500k/gestor-task-evaluation.png', 
                caption: 'Evaluación Académica: Sistema de calificación y feedback directo a las entregas de los participantes.' 
            },

            // --- ROL: PARTICIPANTE (La Experiencia de Usuario) ---
            { 
                url: 'img/projects/reto500k/student-dashboard.png', 
                caption: 'Mi Progreso: Dashboard del estudiante con resumen de avance y próxima tarea pendiente.' 
            },
            { 
                url: 'img/projects/reto500k/student-programs-catalog.png', 
                caption: 'Catálogo de Formación: Vista de programas disponibles y gestión de suscripciones.' 
            },
            { 
                url: 'img/projects/reto500k/student-payment-flow.png', 
                caption: 'Pasarela de Pago: Registro de comprobantes y gestión de estado de cuenta.' 
            },
            { 
                url: 'img/projects/reto500k/student-task-list-locked.png', 
                caption: 'Lógica Secuencial: Listado de tareas con bloqueo condicional (Candado) hasta completar requisitos.' 
            },
            { 
                url: 'img/projects/reto500k/student-task-submission.png', 
                caption: 'Aula Virtual: Vista de consumo de contenido y formulario de entrega de tareas.' 
            },
            
            // --- ARQUITECTURA / EXTRA ---
            { 
                url: 'img/projects/reto500k/system-login.png', 
                caption: 'Seguridad: Sistema de autenticación robusto con encriptación de credenciales.' 
            },
            { 
                url: 'img/projects/reto500k/system-profile.png', 
                caption: 'Autogestión: Edición de perfil de usuario y preferencias de cuenta.' 
            }
        ]
    }
];
