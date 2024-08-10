import { clsx } from "clsx";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "InsideLab",
  description:
    "Insidelab Coworking. Crea, Conecta y Crece en nuestros espacios de trabajo flexible",
  navItems: [
    {
      label: "Nosotros",
      href: "/about",
    },
    {
      label: "Espacios",
      href: "/spots",
    },
    {
      label: "Servicios",
      href: "/services",
      icon: "chevrondownicon",
      children: [
        {
          title: "Inside Talks",
          href: "/inside-talks",
        },
        {
          title: "Inside Business",
          href: "/inside-business",
        },
      ],
    },
    {
      label: "Eventos",
      href: "/events",
    },
    {
      label: "Contáctanos",
      href: "/contact",
    },
  ],
  navMenu: {
    closeIcon: "xcloseicon",
    cover: "/images/logo-light.png",
    items: [
      {
        label: "Nosotros",
        href: "/about",
      },
      {
        label: "Espacios",
        href: "/spots",
      },
      {
        label: "Servicios",
        href: "/services",
        icon: "chevrondownicon",
        children: [
          {
            label: "Inside Talks",
            href: "/inside-talks",
          },
          {
            label: "Inside Business",
            href: "/inside-business",
          },
        ],
      },
      {
        label: "Eventos",
        href: "/events",
      },
      {
        label: "Contáctanos",
        href: "/contact",
      },
    ],
  },
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
  template: {
    layout: "mainlayout",
    name: "insidelab-template",
    sections: [
      {
        className: "bg-white w-full cover-wrapper xs:cover-dark",
        name: "cover",
        background: "/images/coworkers.png",
        floatButton: {
          icon: "whatsappicon",
          label: "Escríbenos",
          link: "https://wa.me/573503261366?text=Hola%2C%20quiero%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20espacios%20del%20coworking.",
        },
        titleStyle: {
          transform: "translateY(-78px)",
        },
        title:
          "<span>Crea, Conecta y Crece</span> en nuestros espacios de trabajo flexible",
        actions: [
          {
            label: "Agendar Asesoría",
            icon: "calendaricon",
            link: "/reserve?calendly_url=insidelabcoworking/asesoria-espacios-1",
            className: "btn-primary",
            type: "primary",
          },
        ],
      },
      {
        name: "footer",
        logo: "/images/logo-light.png",
        socials: [
          {
            icon: "instagramicon",
            link: "https://www.instagram.com/coworking_insidelab",
          },
          {
            icon: "facebookicon",
            link: "https://www.facebook.com/coworkinginsidelab?mibextid=ZbWKwL",
          },
          {
            icon: "linkedinicon",
            link: "https://www.linkedin.com/company/insidelab-coworking/",
          },
        ],
        sections: [
          {
            title: "Servicios",
            items: [
              {
                label: "Inside Talks",
                link: "/inside-talks",
              },
              {
                label: "Inside Business",
                link: "/inside-business",
              },
            ],
          },
          {
            title: "Información",
            items: [
              {
                label: "Nosotros",
                link: "/about",
              },
              {
                label: "Espacios",
                link: "/spots",
              },
              {
                label: "Eventos",
                link: "/events",
              },
            ],
          },
          {
            title: "Contáctanos",
            items: [
              {
                icon: "mailicon",
                label: "insidelabcoworking<br />@gmail.com",
              },
              {
                icon: "phoneicon",
                label: "(+57) 350 326 1366",
              },
              {
                icon: "locationicon",
                label:
                  "Centro Comercial Gran Centro L-1-133 Carrera 53 # 68 - 57",
              },
            ],
          },
        ],
      },
    ],
    theme: {
      fontFamily: {
        sansSerif: '-apple-system, "Helvetica Neue", Arial, sans-serif',
        mono: "Menlo, Monaco, monospace",
      },
      colors: {
        background: "#141518",
        primary: "#b3c444",
        secundary: "#37B39F",
        whatsapp: "#25D366",
        "--nextui-primary": "#b3c444",
        "grey-dark": "#212121",
        danger: "#F1063F",
        white: "#FAFAFA",
        dark: "#000000",
        red: "#FF0000",
        default: "#FFF",
        yellow: "yellow",
        yellowLigth: "#F8CD5B",
        "color-yellow-light": "#ffce00",
        "color-gray-dark-light": "#23313b",
        "color-green-light": "rgb(0 203 169)",
        "dark-color-light": "#313638",
        "tag-color-light": "#FF5722",
        "grey-light-bg": "#f8f8f8",
        "dark-light": "rgba(0, 0, 0, 0.4)",
        "color-grey-light": "#979797",
        "grey-light": "#e4e4e4",
        "bg-grey-light": "#f2f2f2",
        "board-color-blue": "#0079bf",
        "board-color-green": "#519839",
        "board-color-purple": "#89609e",
        "board-color-pink": "#cd5a91",
        "board-color-orange-light": "#d29034",
        "board-color-green-light": "#4bbf6b",
        "board-color-blue-light": "#00aecc",
        "board-color-grey-light": "#838c91",
        "tag-color-orange-light": "#FAAD14",
        "tag-color-grey-light": "#808080",
        "text-color-grey": "#3b4144",
        "text-color-black-light": "#444444",
        "text-secundary": "#37B39F",
        "color-text-light": "#4AA8A0",
        "color-text-black-light": "#8C8C8C",
      },
    },
    pages: [
      {
        layout: "mainlayout",
        slug: "home",
        sections: [
          {
            className: "flex gap-2 justify-start items-center",
            name: "marquee",
            elements: [
              {
                src: "/images/wow-pass.png",
              },
              {
                src: "/images/1524-agencia.png",
              },
              {
                src: "/images/checking-travel.png",
              },
              {
                src: "/images/Pragma-light.png",
              },
              {
                src: "/images/DMJ.png",
                className: "bg-white rounded-[50%]",
              },
            ],
          },
          {
            className: "bg-white min-w-full",
            components: [
              {
                name: "tabpanel",
                title:
                  "<span>Trabaja en espacios flexibles</span> que se adaptan a tú necesidad y las de tu negocio",
                tabs: [
                  {
                    label: "Coworkers",
                    title: "Coworkers",
                    cover: "/images/coworkers.png",
                    tag: {
                      text: "Trae tu pc y tus ideas",
                      icon: "ideaicon",
                    },
                    description:
                      "<strong>Espacios individuales en sala compartida,</strong> la mejor opción para autónomos, freelancers, nómadas digitales y en general para todas las mentes que necesitan un espacio de trabajo profesional.<br><strong>Incluye:</strong> Sillas ergonómicas, climatización, servicios públicos, internet de fibra óptica, Café y agua",
                    actions: [
                      {
                        label: "Reservar ahora",
                        icon: "calendaricon",
                        link: "/reserve?calendly_url=insidelabcoworking/asesoria-espacios-1",
                        className: "btn-primary",
                        type: "primary",
                      },
                    ],
                  },
                  {
                    label: "Freelance Lab",
                    title: "Freelance Lab",
                    cover: "/images/freelance-lab.jpg",
                    tag: {
                      text: "Oficinas privadas",
                      icon: "chairicon",
                    },
                    description:
                      "<strong>Oficina privada para equipos pequeños de trabajo,</strong> que cuenta con todos los servicios de una oficina tradicional para una experiencia de calidad con sus colaboradores y clientes, aquí podrán llevar a cabo sus proyectos y crecer de manera exponencial.<br/> <strong>Incluye: </strong>Privacidad, mobiliario, climatización, servicios públicos, internet de fibra óptica, servicio de recepción, Horas de salas de juntas (T&C), Café y agua.",
                    actions: [
                      {
                        label: "Reservar ahora",
                        icon: "calendaricon",
                        link: "/reserve?calendly_url=insidelabcoworking/asesoria-espacios-1",
                        className: "btn-primary",
                        type: "primary",
                      },
                    ],
                  },
                  {
                    label: "Inside Team",
                    title: "Inside Team",
                    cover: "/images/inside-team.jpg",
                    tag: {
                      text: "Ven con tu equipo y crece",
                      icon: "arrowgrowthicon",
                    },
                    description:
                      "<strong>Oficina privada para equipos medianos de trabajo</strong> (hasta 6 puestos), que cuenta con todos los servicios de una oficina tradicional, sácale todo el potencial a tus proyectos y crea tu rutina profesional en un entorno cómodo y seguro para tus colaboradores.<br /><strong>Incluye: </strong>privacidad, mobiliario, climatización, servicios públicos, internet de fibra óptica, servicio de recepción, horas en sala de juntas (T&C), café y agua.",
                    actions: [
                      {
                        label: "Reservar ahora",
                        icon: "calendaricon",
                        link: "/reserve?calendly_url=insidelabcoworking/asesoria-espacios-1",
                        className: "btn-primary",
                        type: "primary",
                      },
                    ],
                  },
                  {
                    label: "Coworking Lab",
                    title: "Coworking Lab",
                    cover: "/images/coworking-lab.jpg",
                    tag: {
                      text: "Internet de alta velocidad, tablero y televisor",
                      icon: "interneticon",
                    },
                    description:
                      "Sala de juntas equipada con televisor y tablero de vidrio, ideal para reuniones corporativas, actividades educativas, cierre de negocios y atención al cliente.<br /><strong>Incluye: </strong>privacidad, mobiliario, climatización, Audiovisuales, servicios públicos, internet de fibra óptica, servicio de recepción, café y agua.",
                    actions: [
                      {
                        label: "Reservar ahora",
                        icon: "calendaricon",
                        link: "/reserve?calendly_url=insidelabcoworking/asesoria-espacios-1",
                        className: "btn-primary",
                        type: "primary",
                      },
                    ],
                  },
                  {
                    label: "Oficina Virtual",
                    title: "Oficina Virtual",
                    cover: "/images/corredor.jpg",

                    tag: {
                      text: "Recepción de correspondencia",
                      icon: "deliveryicon",
                    },
                    description:
                      "<strong>Permite que tu empresa o proyecto tenga presencia en Barranquilla</strong> con una oficina virtual, contarás con el uso del domicilio comercial en excelente ubicación, con servicio de recepción de paquetería y correspondencia y acceso a sala de juntas y escritorios ajustados a necesidad (Aplican términos & condiciones)",
                    actions: [
                      {
                        label: "Reservar ahora",
                        icon: "calendaricon",
                        link: "/reserve?calendly_url=insidelabcoworking/asesoria-espacios-1",
                        className: "btn-primary",
                        type: "primary",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            components: [
              {
                name: "carousel",
                theme: "dark",
                title: "<span>Experiencias</span> de nuestros coworkers:",
                items: [
                  {
                    description:
                      "Nuestra firma DMJ Consultores & Abogados ha encontrado en Inside Lab, un aliado estratégico para nuestro desarrollo y crecimiento empresarial. Con sus óptimas y cómodas instalaciones, y el personal idóneo que presta sus servicios, nos permite entregarle a nuestros clientes experiencias únicas y confortables; si lo que buscas es un espacio acogedor, con una gran ubicación, Inside Lab siempre será la mejor opción.",
                    author: "Daniel Noriega",
                    profile: "DMJ Consultores & Abogados",
                    picture: "/images/DMJ.png",
                  },
                  {
                    description:
                      "Inside Lab ofrece un entorno de coworking excepcional con diseño moderno que fomenta la colaboración. Destaca por su atención y compromiso hacia el bienestar, con instalaciones completas y conexión a internet de alta velocidad. Es una comunidad que respalda el crecimiento personal y profesional. Recomendado para emprendedores y creativos en busca de un entorno estimulante; una elección sólida para alcanzar metas profesionales.",
                    author: "Jesus Prieto",
                    profile: "Embajador de Notion Barranquilla",
                    picture: "/images/jesus-prieto.png",
                  },
                  {
                    description:
                      "Como Directora de Crecimiento del Caribe, agradezco a Inside Lab por su espacio de alta calidad que ha transformado la vida de la comunidad pragmática. La atmósfera y comodidades facilitan la interacción entre pragmáticos del Atlántico. Inside Lab ha sido fundamental para mejorar mi experiencia y la de los pragmáticos. Nos sentimos afortunados de ser parte de esta comunidad que impulsa nuestro crecimiento profesional y personal.",
                    author: "Gisselle Sarmiento",
                    profile: "Pragma",
                    picture: "/images/Pragma.png",
                  },
                  {
                    description:
                      "Como emprendedor, encontrar un espacio que se adapte a las necesidades cambiantes de mi startup ha sido esencial. Inside Lab no solo ofrece esa flexibilidad, sino que también se encarga de todos los detalles.",
                    author: "Javier López",
                    profile: "Emprendedor Tecnológico",
                    picture: "",
                  },
                  {
                    description:
                      "Inside Lab es una gran comunidad donde la conexión y el crecimiento son prioridades. Los eventos que realizan me han permitido conectar con nuevas empresas.",
                    author: "María Torres",
                    profile: "Consultora de Marketing Digital",
                    picture: "",
                  },
                  {
                    description:
                      "Inside a sido el lugar en donde hemos podido llevar nuestra agencia de marketing a otro nivel, un lugar que nos da la oportunidad de crecer y contactar con otras personas.",
                    author: "Maria Alejandra Sanchez",
                    profile: "Comunicadora Social",
                    picture: "",
                  },
                ],
                actions: [
                  {
                    label: "Reserva ahora",
                    icon: "calendaricon",
                    link: "/reserve?calendly_url=insidelabcoworking/asesoria-espacios-1",
                    className: "btn-primary",
                    type: "primary",
                  },
                ],
              },
            ],
          },
          {
            name: "banner",
            theme: "dark",
            background: "/images/banner-background.avif",
            title:
              "Conoce la agenda de nuestros eventos y únete a nuestra comunidad",
            description: "<span>ESPACIOS PARA CONECTAR</span>",
            actions: [
              {
                label: "Ver todos los eventos",
                link: "/events/fuckup",
                className: "btn-primary",
                type: "primary",
              },
            ],
          },
        ],
      },
      {
        layout: "bloglayout",
        slug: "about",
        sections: [
          {
            components: [
              {
                name: "gallery",
                style: {
                  marginTop: 75,
                },
                itemLayout: "center",
                size: 600,
                title:
                  '<span>"Conectar, Crear y Crecer no debe ser</span> el privilegio de unos, si no la oportunidad de todos"',
                description: "Founders",
                settings: {
                  arrows: false,
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  variableWidth: true,
                  responsive: [
                    {
                      breakpoint: 1600,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                      },
                    },
                    {
                      breakpoint: 1200,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                      },
                    },
                    {
                      breakpoint: 992,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        // infinite: false,
                      },
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                      },
                    },
                    {
                      breakpoint: 576,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1,
                      },
                    },
                    {
                      breakpoint: 360,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                      },
                    },
                  ],
                },
                items: [
                  {
                    label: "foto 1",
                    src: "/images/_angela-aguilar.jpeg",
                    tag: "Angela Aguilar",
                    tagFade: false,
                  },
                  {
                    label: "foto 2",
                    src: "/images/_daniela-martinez.jpeg",
                    tag: "Daniela Martínez",
                    tagFade: false,
                  },
                ],
              },
            ],
          },
          {
            className: "bg-black",
            components: [
              {
                name: "listitem",
                title: "¿Quiénes somos?",
                theme: "dark",
                description:
                  "Somos un Coworking que impulsa el ecosistema empresarial y emprendedor  a través de nuestros espacios habilitados para trabajar de manera colaborativa, gestando escenarios de construcción de ciudad.<br /> GENERAMOS espacios flexibles, cómodos y adecuados para CREAR -CONECTAR Y CRECER dentro de la ciudad de Barranquilla. <br /><br /> Visítanos y vive la experiencia <strong>INSIDE LAB.</strong>",
                cover: "/images/quienes-somos.png",
                center: true,
              },
            ],
          },
          {
            className: "bg-white",
            components: [
              {
                name: "tabpanel",
                title: "Nuestros espacios",

                tabs: [
                  {
                    label: "Espacios para Crear",
                    title: "Espacios para Crear",
                    cover: "/images/about-photo-tabpanel-1.png",
                    description:
                      "Contamos con espacios de oficinas adecuadas a tu neceisdad, aquí podrás como independiente, freelancer, emprendedor o empresario (PYMES), crear y llevar a cabo tus proyectos.",
                    actions: [
                      {
                        label: "Conoce todos los espacios",
                        link: "/spots",
                        className: "btn-primary",
                        type: "primary",
                      },
                    ],
                  },
                  {
                    label: "Espacios para Conectar",
                    title: "Espacios para Conectar",
                    cover: "/images/about-photo-tabpanel-2.png",
                    description:
                      "Generamos escenarios de construcción de ciudad a través del Impulso de un movimiento denominado",
                    actions: [
                      {
                        label: "Conoce nuestros eventos",
                        link: "/events",
                        className: "btn-primary",
                        type: "primary",
                      },
                    ],
                  },
                  {
                    label: "Espacios para Crecer",
                    title: "Espacios para Crecer",
                    cover: "/images/about-photo-tabpanel-3.png",
                    description:
                      "En este espacio brindamos Formación, construimos comunidad y generamos articulación.",
                    actions: [
                      {
                        label: "Conoce más",
                        link: "/inside-talks",
                        className: "btn-primary",
                        type: "primary",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            className: "flex gap-2 justify-start min-h-fit py-[12px]",
            name: "marquee",
            theme: "dark",
            title: "Comunidad Inside",
            elements: [
              {
                src: "/images/wow-pass.png",
              },
              {
                src: "/images/1524-agencia.png",
              },
              {
                src: "/images/checking-travel.png",
              },
              {
                src: "/images/Pragma-light.png",
              },
              {
                src: "/images/DMJ.png",
                className: "bg-white rounded-[50%]",
              },
            ],
          },
        ],
      },
      {
        layout: "bloglayout",
        slug: "spots",
        sections: [
          {
            className: "bg-white",
            style: {
              marginTop: 75,
            },
            components: [
              {
                name: "listitem",
                title: "Espacios para <span>Crear</span>",
                theme: "light",
                description:
                  "Contamos con espacios de oficinas, adecuadas a tu neceisdad, aquí podrás como independiente, freelancer, emprendedor o empresario (PYMES), crear y llevar a cabo tus proyectos.",
                cover: "/images/coworking-lab.jpg",
                actions: [
                  {
                    label: "Reservar ahora",
                    icon: "calendaricon",
                    link: "/reserve?calendly_url=insidelabcoworking/asesoria-espacios-1",
                    className: "btn-primary",
                    type: "primary",
                  },
                ],
              },
            ],
          },
          {
            className: "bg-white min-w-full",
            components: [
              {
                name: "tabpanel",
                title: "Nuestros espacios",
                className: "title-dark",
                description:
                  "Contamos con  diversos espacios de oficina que se adecuan a tu necesidad, podrás usarlos  por <span class='font-bold'>horas, días, semanas o meses.</span>",
                tabs: [
                  {
                    label: "Coworkers",
                    title: "Coworkers",
                    cover: "/images/coworkers.png",
                    tag: {
                      text: "Trae tu pc y tus ideas",
                      icon: "ideaicon",
                    },
                    description:
                      "<strong>Espacios individuales en sala compartida,</strong> la mejor opción para autónomos, freelancers, nómadas digitales y en general para todas las mentes que necesitan un espacio de trabajo profesional.<br><strong>Incluye:</strong> Sillas ergonómicas, climatización, servicios públicos, internet de fibra óptica, Café y agua",
                    actions: [
                      {
                        label: "Reservar ahora",
                        icon: "calendaricon",
                        link: "/reserve?calendly_url=insidelabcoworking/asesoria-espacios-1",
                        className: "btn-primary",
                        type: "primary",
                      },
                    ],
                  },
                  {
                    label: "Freelance Lab",
                    title: "Freelance Lab",
                    cover: "/images/freelance-lab.jpg",
                    tag: {
                      text: "Oficinas privadas",
                      icon: "chairicon",
                    },
                    description:
                      "<strong>Oficina privada para equipos pequeños de trabajo,</strong> que cuenta con todos los servicios de una oficina tradicional para una experiencia de calidad con sus colaboradores y clientes, aquí podrán llevar a cabo sus proyectos y crecer de manera exponencial.<br/> <strong>Incluye: </strong>Privacidad, mobiliario, climatización, servicios públicos, internet de fibra óptica, servicio de recepción, Horas de salas de juntas (T&C), Café y agua.",
                    actions: [
                      {
                        label: "Reservar ahora",
                        icon: "calendaricon",
                        link: "/reserve?calendly_url=insidelabcoworking/asesoria-espacios-1",
                        className: "btn-primary",
                        type: "primary",
                      },
                    ],
                  },
                  {
                    label: "Inside Team",
                    title: "Inside Team",
                    cover: "/images/inside-team.jpg",
                    tag: {
                      text: "Ven con tu equipo y crece",
                      icon: "arrowgrowthicon",
                    },
                    description:
                      "<strong>Oficina privada para equipos medianos de trabajo</strong> (hasta 6 puestos), que cuenta con todos los servicios de una oficina tradicional, sácale todo el potencial a tus proyectos y crea tu rutina profesional en un entorno cómodo y seguro para tus colaboradores.<br /><strong>Incluye: </strong>privacidad, mobiliario, climatización, servicios públicos, internet de fibra óptica, servicio de recepción, horas en sala de juntas (T&C), café y agua.",
                    actions: [
                      {
                        label: "Reservar ahora",
                        icon: "calendaricon",
                        link: "/reserve?calendly_url=insidelabcoworking/asesoria-espacios-1",
                        className: "btn-primary",
                        type: "primary",
                      },
                    ],
                  },
                  {
                    label: "Coworking Lab",
                    title: "Coworking Lab",
                    cover: "/images/coworking-lab.jpg",
                    tag: {
                      text: "Internet de alta velocidad, tablero y televisor",
                      icon: "interneticon",
                    },
                    description:
                      "Sala de juntas equipada con televisor y tablero de vidrio, ideal para reuniones corporativas, actividades educativas, cierre de negocios y atención al cliente.<br /><strong>Incluye: </strong>privacidad, mobiliario, climatización, Audiovisuales, servicios públicos, internet de fibra óptica, servicio de recepción, café y agua.",
                    actions: [
                      {
                        label: "Reservar ahora",
                        icon: "calendaricon",
                        link: "/reserve?calendly_url=insidelabcoworking/asesoria-espacios-1",
                        className: "btn-primary",
                        type: "primary",
                      },
                    ],
                  },
                  {
                    label: "Oficina Virtual",
                    title: "Oficina Virtual",
                    cover: "/images/corredor.jpg",
                    tag: {
                      text: "Recepción de correspondencia",
                      icon: "deliveryicon",
                    },
                    description:
                      "<strong>Permite que tu empresa o proyecto tenga presencia en Barranquilla</strong> con una oficina virtual, contarás con el uso del domicilio comercial en excelente ubicación, con servicio de recepción de paquetería y correspondencia y acceso a sala de juntas y escritorios ajustados a necesidad (Aplican términos & condiciones)",
                    actions: [
                      {
                        label: "Reservar ahora",
                        icon: "calendaricon",
                        link: "/reserve?calendly_url=insidelabcoworking/asesoria-espacios-1",
                        className: "btn-primary",
                        type: "primary",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            className: "bg-black",
            components: [
              {
                name: "slide",
                title:
                  "Conoce más de nuestros espacios para <span>Crear</span>",
                theme: "dark",
                settings: {
                  infinite: true,
                  arrows: true,
                  dots: true,
                  slidesToScroll: 4,
                },
                items: [
                  {
                    label: "image-gallery-1",
                    src: "/images/spots-photo-gallery-1.png",
                  },
                  {
                    label: "image-gallery-2",
                    src: "/images/spots-photo-gallery-2.png",
                  },
                  {
                    label: "image-gallery-3",
                    src: "/images/spots-photo-gallery-3.png",
                  },
                  {
                    label: "image-gallery-4",
                    src: "/images/spots-photo-gallery-4.png",
                  },
                  {
                    label: "image-gallery-5",
                    src: "/images/spots-photo-gallery-5.png",
                  },
                  {
                    label: "image-gallery-6",
                    src: "/images/spots-photo-gallery-6.png",
                  },
                  {
                    label: "image-gallery-7",
                    src: "/images/spots-photo-gallery-7.png",
                  },
                  {
                    label: "image-gallery-8",
                    src: "/images/spots-photo-gallery-8.png",
                  },
                  {
                    label: "image-gallery-9",
                    src: "/images/spots-photo-gallery-9.png",
                  },
                  {
                    label: "image-gallery-10",
                    src: "/images/spots-photo-gallery-10.png",
                  },
                  {
                    label: "image-gallery-11",
                    src: "/images/spots-photo-gallery-11.png",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        layout: "bloglayout",
        slug: "inside-talks",
        sections: [
          {
            className: "bg-white my-lg",
            style: {
              marginTop: 75,
            },
            components: [
              {
                name: "listitem",
                className: "py-6",
                cover: "/images/inside-talks-cover.png",
                size: 350,
                logo: {
                  src: "/images/inside-talks-logo.png",
                  label: "inside-talks-logo",
                  height: 130,
                  width: 130,
                },
                description:
                  "Conversaciones que nacen de adentro es un espacio de aprendizaje (workshops) donde proveemos herramientas aplicables en prácticas para el ser y el hacer. En este espacio construimos una comunidad de aprendizaje, conocimiento y generamos articulación.",
                actions: [
                  {
                    label: "Conoce aquí la agenda",
                    icon: "calendaricon",
                    link: "/reserve?calendly_url=insidelabcoworking/asesoria-espacios-1",
                    className: "btn-primary",
                    type: "primary",
                  },
                ],
              },
            ],
          },
          {
            className: "bg-black",
            components: [
              {
                name: "slide",
                title: "Espacio para <span>Crecer</span> Inside Talks",
                theme: "dark",
                items: [
                  {
                    label: "image-gallery-1",
                    src: "/images/inside-talks-gallery-photo-1.png",
                  },
                  {
                    label: "image-gallery-2",
                    src: "/images/inside-talks-gallery-photo-2.png",
                  },
                  {
                    label: "image-gallery-3",
                    src: "/images/inside-talks-gallery-photo-3.png",
                  },
                  {
                    label: "image-gallery-4",
                    src: "/images/inside-talks-gallery-photo-4.png",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        layout: "bloglayout",
        slug: "inside-business",
        sections: [
          {
            className: "bg-white",
            style: {
              marginTop: 75,
            },
            components: [
              {
                name: "listitem",
                cover: "/images/inside-business-gallery-photo-3.png",
                title: "Inside Talks <span>Business</span>",
                size: 350,
                description:
                  "Movimiento activo que impulsa las conversaciones difíciles entorno al fracaso dentro y fuera de lo laboral, entendiendo el fracaso como una realidad universal, dinámica y transversal de la vida misma.<br />El objetivo es Co-construir con todo el equipo de trabajo herramientas para gestionar el fracaso y sus consecuencias potencializando y fortaleciendo el ser para el saber hacer, abriendo paso a la innovación. <br /><br />Si quieres vivir la experiencia dentro de tu empresa reserva ahora una cita.",
                actions: [
                  {
                    label: "Reserva aquí",
                    icon: "calendaricon",
                    link: "/reserve?calendly_url=insidelabcoworking/asesoria-espacios-1",
                    className: "btn-primary",
                    type: "primary",
                  },
                ],
              },
            ],
          },
          {
            className: "bg-black",
            components: [
              {
                name: "slide",
                title:
                  "Conoce más de nuestros espacios para <span>Crecer</span>",
                theme: "dark",
                items: [
                  {
                    label: "image-gallery-1",
                    src: "/images/inside-business-gallery-photo-1.png",
                  },
                  {
                    label: "image-gallery-2",
                    src: "/images/inside-business-gallery-photo-2.png",
                  },
                  {
                    label: "image-gallery-3",
                    src: "/images/inside-business-gallery-photo-3.png",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        layout: "bloglayout",
        slug: "events",
        sections: [
          {
            className: "bg-white w-full",
            name: "cover",
            background: "/images/fuckup.jpg",
            title: "Espacios creados para Conectar",
            theme: "dark",
            description: `Generamos escenarios de construcción de ciudad a través de herramientas del <strong>ser</strong> para el <strong>hacer</strong> con el impulso de fuckup night y mujeres sin filtro.`,
            actionClassName: "flex flex-row justify-start items-centered gap-1",
            descriptionClassName: "max-w-[400px]",
            titleClassName: clsx("max-w-lg"),
            actions: [
              {
                name: "image",
                alt: "fuckup",
                height: 65,
                width: 115,
                className: "tool-item",
                src: "/images/fuckup-event.png",
              },
              {
                name: "image",
                alt: "mujeres sin filtro",
                width: 115,
                height: 65,
                className: "tool-item",
                src: "/images/mujeres-sin-filtro.png",
              },
            ],
          },
          {
            className: "bg-white min-w-full",
            components: [
              {
                name: "tabpanel",
                title: "Eventos para que <span>Conectes</span>",
                tabs: [
                  {
                    icon: "calendaricon",
                    label: "Fuck Up Night",
                    title: "Fuck Up Night",
                    cover: "/images/events-photo-slide-2.png",
                    description:
                      "Busca promover las historias de fracaso, para llevar a los asistentes a reconciliarse con la idea de que el fracaso es universal, incómodo y dinámico, que es inevitable pero que es un gran instructor o impulsor para la vida.<br /><br /><strong>Este es un evento como espacio para cuestionar y resignificar el paradigma del fracaso</strong> rompiendo con el tabú y dando paso a la innovación y creatividad.<br /><br />Conoce las fechas de nuestros próximos encuentros",
                    actions: [
                      {
                        label: "Conoce aquí la agenda",
                        link: "/events/fuckup",
                        className: "btn-primary",
                        type: "primary",
                      },
                    ],
                  },
                  {
                    icon: "calendaricon",
                    label: "Mujeres sin Filtro",
                    title: "Mujeres sin Filtro",
                    cover: "/images/events-photo-tabpanel-2.webp",
                    description:
                      "¡Hablemos de fracaso con enfoque de género! MSF es una línea de Fuck Up Night en apoyo con el BID, que busca brindar un espacio seguro donde las mujeres podamos compartir los retos a los que nos enfrentamos en la actualidad. <br /><br /> <strong>En este espacio le abrimos la puerta a conversaciones reales para conectar desde la vulnerabilidad</strong>, y brindar herramientas para superar los paradigmas alrededor del fracaso a través de eventos, conferencias y talleres periódicos.<br /><br />Conoce las fechas de nuestros próximos encuentros, animate y se parte.",
                    actions: [
                      {
                        label: "Conoce aquí la agenda",
                        link: "/events/mujeres-sin-filtro",
                        className: "btn-primary",
                        type: "primary",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        layout: "bloglayout",
        slug: "fuckup",
        sections: [
          {
            className: "bg-white w-full",
            name: "cover",
            background: "/images/fuckup.jpg",
            title: "Espacios creados para Conectar",
            theme: "dark",
            description: `Generamos escenarios de construcción de ciudad a través del <span>Impulso de diferentes movimientos</span> como:`,
            actionClassName: "flex flex-row justify-start items-centered gap-1",
            descriptionClassName: "max-w-[400px]",
            titleClassName: clsx("max-w-lg"),
            actions: [
              {
                name: "image",
                alt: "fuckup",
                height: 65,
                width: 115,
                className: "tool-item",
                src: "/images/fuckup-event.png",
              },
              {
                name: "image",
                alt: "mujeres sin filtro",
                width: 115,
                height: 65,
                className: "tool-item",
                src: "/images/mujeres-sin-filtro.png",
              },
            ],
          },
          {
            className: "bg-white",
            components: [
              {
                name: "listcard",
                title: "Conoce las próximas fechas",
                items: [
                  {
                    cover: "/images/fuckup-photo-listcard-1.png",
                    title: "FuckUp Night",
                    location: [
                      {
                        label: "Por confirmar...",
                        icon: "locationicon",
                      },
                      {
                        label: "Jueves 21, Marzo 2024",
                        icon: "calendaricon",
                      },
                      {
                        label: "6:30 p.m.",
                        icon: "clockicon",
                      },
                    ],
                    actions: [
                      {
                        label: "Reservar",
                        link: "/reserve?calendly_url=insidelabcoworking/asesoria-espacios-1",
                        className: "btn-primary",
                        type: "primary",
                      },
                    ],
                  },
                  {
                    cover: "/images/fuckup-photo-listcard-2.png",
                    title: "FuckUp Night",
                    location: [
                      {
                        label: "Por confirmar...",
                        icon: "locationicon",
                      },
                      {
                        label: "Jueves 20, Junio 2024",
                        icon: "calendaricon",
                      },
                      {
                        label: "6:30 p.m.",
                        icon: "clockicon",
                      },
                    ],
                    actions: [
                      {
                        label: "Reservar",
                        link: "/reserve?calendly_url=insidelabcoworking/asesoria-espacios-1",
                        className: "btn-primary",
                        type: "primary",
                      },
                    ],
                  },
                  {
                    cover: "/images/fuckup-photo-listcard-3.png",
                    title: "FuckUp Night",
                    location: [
                      {
                        label: "Por confirmar...",
                        icon: "locationicon",
                      },
                      {
                        label: "Jueves 10, Octubre 2024",
                        icon: "calendaricon",
                      },
                      {
                        label: "6:30 p.m.",
                        icon: "clockicon",
                      },
                    ],
                    actions: [
                      {
                        label: "Reservar",
                        link: "/reserve?calendly_url=insidelabcoworking/asesoria-espacios-1",
                        className: "btn-primary",
                        type: "primary",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            className: "slide-dark bg-black",
            components: [
              {
                name: "slide",
                title: "Fuckup Nights",
                theme: "dark",
                items: [
                  {
                    label: "image-gallery-1",
                    src: "/images/events-photo-slide-1.png",
                  },
                  {
                    label: "image-gallery-2",
                    src: "/images/events-photo-slide-2.png",
                  },
                  {
                    label: "image-gallery-3",
                    src: "/images/events-photo-slide-3.png",
                  },
                  {
                    label: "image-gallery-4",
                    src: "/images/events-photo-slide-4.png",
                  },
                  {
                    label: "image-gallery-5",
                    src: "/images/events-photo-slide-5.png",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        layout: "bloglayout",
        slug: "mujeres-sin-filtro",
        sections: [
          {
            className: "bg-white w-full",
            name: "cover",
            background: "/images/mujeres-sin-filtro.jpg",
            title: "Espacios creados para Conectar",
            theme: "dark",
            description: `Generamos escenarios de construcción de ciudad a través del <span>Impulso de diferentes movimientos</span> como:`,
            actionClassName: "flex flex-row justify-start items-centered gap-1",
            descriptionClassName: "max-w-[400px]",
            titleClassName: clsx("max-w-lg"),
            actions: [
              {
                name: "image",
                alt: "mujeres sin filtro",
                width: 115,
                height: 65,
                className: "tool-item",
                src: "/images/mujeres-sin-filtro.png",
              },
              {
                name: "text",
                type: "h1",
                text: "Mujeres que construyen ciudad",
                className:
                  "tool-item text-lg text-white text-bold text-[50px] max-w-[200px]",
              },
            ],
          },
          {
            className: "bg-white",
            components: [
              {
                name: "listcard",
                title: "Conoce las próximas fechas",
                items: [
                  {
                    cover: "/images/about-photo-gallery-1.png",
                    title: "FuckUp Night",
                    location: [
                      {
                        label: "Calle 100 # 56 - 12 Hotel GHL Collection",
                        icon: "locationicon",
                      },
                      {
                        label: "Sábado 06, Enero 2023",
                        icon: "calendaricon",
                      },
                      {
                        label: "6:00 p.m.",
                        icon: "clockicon",
                      },
                    ],
                    actions: [
                      {
                        label: "Reservar",
                        link: "/reserve?calendly_url=insidelabcoworking/asesoria-espacios-1",
                        className: "btn-primary",
                        type: "primary",
                      },
                    ],
                  },
                  {
                    cover: "/images/events-photo-tabpanel-2.webp",
                    title: "FuckUp Night",
                    location: [
                      {
                        label: "Calle 100 # 56 - 12 Hotel GHL Collection",
                        icon: "locationicon",
                      },
                      {
                        label: "Sábado 06, Enero 2023",
                        icon: "calendaricon",
                      },
                      {
                        label: "6:00 p.m.",
                        icon: "clockicon",
                      },
                    ],
                    actions: [
                      {
                        label: "Reservar",
                        link: "/reserve?calendly_url=insidelabcoworking/asesoria-espacios-1",
                        className: "btn-primary",
                        type: "primary",
                      },
                    ],
                  },
                  {
                    cover: "/images/about-photo-gallery-1.png",
                    title: "FuckUp Night",
                    location: [
                      {
                        label: "Calle 100 # 56 - 12 Hotel GHL Collection",
                        icon: "locationicon",
                      },
                      {
                        label: "Sábado 06, Enero 2023",
                        icon: "calendaricon",
                      },
                      {
                        label: "6:00 p.m.",
                        icon: "clockicon",
                      },
                    ],
                    actions: [
                      {
                        label: "Reservar",
                        link: "/reserve?calendly_url=insidelabcoworking/asesoria-espacios-1",
                        className: "btn-primary",
                        type: "primary",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            className: "slide-dark bg-black",
            components: [
              {
                name: "slide",
                title: "Experiencia en Mujeres sin Filtro",
                theme: "dark",
                items: [
                  {
                    label: "image-gallery-1",
                    src: "/images/mujeres-photo-slide-1.png",
                  },
                  {
                    label: "image-gallery-2",
                    src: "/images/mujeres-photo-slide-2.png",
                  },
                  {
                    label: "image-gallery-3",
                    src: "/images/mujeres-photo-slide-3.png",
                  },
                  {
                    label: "image-gallery-4",
                    src: "/images/mujeres-photo-slide-4.png",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        layout: "bloglayout",
        slug: "contact",
        sections: [
          {
            className:
              "pt-[100px] grid grid-cols-1 md:grid-cols-2 gap-1 bg-white",
            components: [
              {
                name: "form",
                title: "Contáctanos",
                description: "Juntos podemos Crear, Conectar y Crecer",
                submitButtonText: "Enviar datos",
                className: "h-full w-full py-6",
                defaultValues: {
                  type: "lead",
                  topic: "insidelab",
                },
                resource: "coupon-codes",
                fields: [
                  {
                    name: "first_name",
                    // label: "Nombre",
                    placeholder: "Escribe tu nombre",
                    className: "form-text-input",
                    validation: {
                      required: "Debe ingresar su nombre",
                    },
                  },
                  {
                    name: "last_name",
                    // label: "Apellido",
                    placeholder: "Escribe tu apellido",
                    className: "form-text-input",
                  },
                  {
                    name: "email",
                    // label: "E-mail",
                    placeholder: "Escribe tú mejor e-mail",
                    validation: {
                      required: "Debe ingresar su correo",
                    },
                    type: "email",
                    className: "form-text-input",
                  },
                  {
                    name: "phone",
                    // label: "Teléfono",
                    placeholder: "(+57) Escribe tu teléfono",
                    className: "form-text-input",
                  },
                  {
                    name: "message",
                    // label: "Deja tu mensaje aquí.",
                    placeholder: "Deja tu mensaje aquí.",
                    xtype: "textarea",
                    fullWidth: true,
                    className: "form-text-area resize-none",
                  },
                  {
                    name: "terms-of-service",
                    label: "Aceptar los terminos y condiciones de servicio",
                    labelClassname: "w-fit",
                    xtype: "checkbox",
                    fullWidth: true,
                    validation: {
                      required: "Debes aceptar los terminos y condiciones",
                    },
                    className: "form-checkbox-input",
                    containerClassname: "flex gap-2 w-fit",
                  },
                ],
                links: [
                  {
                    href: "/docs/terminos-y-condiciones.docx.pdf",
                    label: "Terminos y Condiciones",
                  },
                  {
                    href: "/docs/politica-tratamiento-datos.docx.pdf",
                    label: "Política de Tratamiento de Datos",
                  },
                ],
              },
              {
                name: "map",
                lat: 10.996737,
                lng: -74.799909,
                className: "bg-grey-light",
                width: "100%",
                height: "92%",
                loaded: true,
              },
            ],
          },
          {
            className: "bg-black",
            components: [
              {
                name: "subfooter",
                theme: "dark",
                items: [
                  {
                    icon: "mailicon",
                    label:
                      "Escríbenos a nuestro correo: <br />insidelabcoworking@gmail.com",
                  },
                  {
                    icon: "phoneicon",
                    label: "Llámanos al:<br /> (+57) 350 326 1366",
                  },
                  {
                    icon: "locationicon",
                    label:
                      "Centro Comercial Gran Centro L-1-133 Carrera 53 # 68 - 57",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        layout: "bloglayout",
        slug: "reserve",
        sections: [
          {
            className: "calendly-section bg-white h-[970px]",
            components: [
              {
                name: "headline",
                title: "Agendamiento de asesoría gratuita",
                className: "",
                titleClassName: "flex-col-reverse gap-2 px-1 md:px-0",
                content: {
                  className: "",
                  name: "calendly",
                  url: "insidelabcoworking/asesoria-espacios",
                  options:
                    "hide_event_type_details=1&hide_gdpr_banner=1&text_color=0e3a2b&primary_color=59eb89",
                },
              },
            ],
          },
        ],
      },
      {
        layout: "bloglayout",
        slug: "blogs",
        sections: [
          {
            className: "bg-white w-full",
            name: "cover",
            background: "/images/fuckup.jpg",
            title: "Espacios creados para Conectar",
            theme: "dark",
            description: `Generamos escenarios de construcción de ciudad a través del <span>Impulso de diferentes movimientos</span> como:`,
            actions: [
              {
                label: "Agendar Asesoría",
                icon: "calendaricon",
                link: "/reserve?calendly_url=insidelabcoworking/asesoria-espacios-1?calendly_url=donecdigitalfactory/consultorias?hide_event_type_details=1&hide_gdpr_banner=1&text_color=0e3a2b&primary_color=59eb89",
                className: "btn-primary",
                type: "primary",
              },
            ],
          },
          {
            className: "marquee flex gap-2 justify-start items-center",
            name: "marquee",
            elements: [
              {
                src: "/images/about-photo-carousel-2.png",
              },
              {
                src: "/images/about-photo-carousel-5.png",
              },
              {
                src: "/images/about-photo-carousel-9.png",
                className: "bg-white rounded-[50%]",
              },
              {
                src: "/images/1524-agencia.png",
              },
              {
                src: "/images/wow-pass.png",
              },
              {
                src: "/images/checking-travel-light.png",
              },
              {
                src: "/images/DMJ.png",
                className: "bg-white rounded-[50%]",
              },
              {
                src: "/images/Pragma-light.png",
              },
            ],
          },
        ],
      },
    ],
  },
};
