import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Mail, Play, X } from 'lucide-react';

// --- ICONOS DE REDES ---

const BehanceIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 7H14V9H22V7ZM22 11H14V13H22V11ZM22 15H14V17H22V15ZM7.6 13C8.8 13 9.6 12.4 9.6 11.2C9.6 10.3 9.1 9.7 8.2 9.4C9 9 9.3 8.4 9.3 7.7C9.3 6.6 8.5 6 7.2 6H2V18H7.9C9.5 18 10.4 17.1 10.4 15.6C10.4 14.3 9.4 13.4 7.6 13ZM4.5 8H6.9C7.6 8 7.9 8.3 7.9 8.9C7.9 9.5 7.5 9.8 6.8 9.8H4.5V8ZM4.5 11.7H7.1C7.9 11.7 8.3 12.1 8.3 12.8C8.3 13.6 7.8 13.9 6.9 13.9H4.5V11.7Z" />
  </svg>
);

const ArtStationIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.878 17.653L7.756 21.322C7.306 22.094 6.634 22.502 5.922 22.502H1.67C0.852 22.502 0.548 21.607 1.096 21.055L9.878 17.653ZM22.422 21.055C22.971 21.607 22.666 22.502 21.849 22.502H17.597C16.885 22.502 16.213 22.094 15.763 21.322L13.642 17.653L22.422 21.055ZM11.76 14.397L17.75 3.978C18.196 3.201 19.231 3.201 19.678 3.978L21.35 6.886C21.794 7.658 21.528 8.643 20.756 9.091L11.76 14.397ZM10.428 15.176L1.516 9.917C0.744 9.468 0.478 8.484 0.922 7.712L3.922 2.518C4.366 1.745 5.397 1.745 5.842 2.518L10.428 15.176Z" />
  </svg>
);

// --- COMPONENTE PRINCIPAL ---

const Portfolio = () => {
  const containerRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState('Piezas Gráficas');
  const [selectedItem, setSelectedItem] = useState(null); // Estado para el modal

  const TOTAL_SLIDES = 5;

  const personalInfo = {
    name: "JUAN PABLO GIRALDO",
    title: "Diseñador Digital y Multimedia",
    email: "jpgacosta1@gmail.com"
  };

  const tools = [
    { 
      name: "Photoshop", 
      icon: <img src="https://static.wixstatic.com/media/342780_0ba26e993f414c278187cf0604b47c04~mv2.png/v1/fill/w_130,h_126,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/adobe-photoshop-logo.png" alt="Photoshop" className="w-10 h-10 object-contain" /> 
    },
    { 
      name: "Illustrator", 
      icon: <img src="https://static.wixstatic.com/media/342780_292ed9cadf3a4054bde55e3a4e9d6063~mv2.png/v1/fill/w_130,h_126,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/adobe-Illustrator-logo.png" alt="Illustrator" className="w-10 h-10 object-contain" /> 
    },
    { 
      name: "After Effects", 
      icon: <img src="https://static.wixstatic.com/media/342780_ff8710172bb44b5982310b7cd01b0576~mv2.png/v1/fill/w_130,h_126,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/adobe-after-effects-logo.png" alt="After Effects" className="w-10 h-10 object-contain" /> 
    },
    { 
      name: "Blender", 
      icon: <img src="https://static.wixstatic.com/media/342780_476eae578db34478b60743cd6cb7cd3b~mv2.png/v1/fill/w_154,h_126,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Blender_logo.png" alt="Blender" className="w-10 h-10 object-contain" /> 
    },
    { 
      name: "WordPress", 
      icon: <img src="https://s.w.org/style/images/about/WordPress-logotype-wmark-white.png" alt="WordPress" className="w-10 h-10 object-contain" /> 
    },
    { 
      name: "Figma", 
      icon: <img src="https://cdn.sanity.io/images/599r6htc/regionalized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png" alt="Figma" className="w-10 h-10 object-contain" /> 
    },
  ];

  const clients = [
    { 
      name: "Finca Raíz", 
      logo: "https://mcusercontent.com/0736a0f569b2e01bb8d73d293/images/c99c088d-b6ed-3a67-87b3-321f546b0b53.png" 
    },
    { 
      name: "Cliente 1", 
      logo: "https://static.wixstatic.com/media/342780_e900b2ef68e14bcc9546cb01e82c273e~mv2.png/v1/crop/x_314,y_214,w_657,h_449/fill/w_316,h_216,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%20Principal_MAR6-01.png" 
    },
    { 
      name: "Asylum", 
      logo: "https://i.revistapym.com.co/cms/2024/02/29082715/LOGO-ASYLUM-ROJO-1.png" 
    },
    { 
      name: "Cliente 3", 
      logo: "https://static.wixstatic.com/media/342780_324e708d8e4c4cf0888778809f448ef5~mv2.png/v1/fill/w_430,h_142,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/342780_324e708d8e4c4cf0888778809f448ef5~mv2.png" 
    },
    { 
      name: "Alegría", 
      logo: "https://static.wixstatic.com/media/342780_40e292e42a5c4e6c8545dc4c79462b56~mv2.png/v1/fill/w_292,h_124,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%20alegr%C3%ADa.png" 
    },
    { 
      name: "Cliente 5", 
      logo: "https://static.wixstatic.com/media/342780_408ce4fa0e134315a42859171150b797~mv2.png/v1/crop/x_89,y_119,w_821,h_771/fill/w_230,h_216,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo%20principal%20completo.png" 
    },
  ];

  const categories = ['Piezas Gráficas', 'Video', 'Diseño Web', '3D'];

  const projects = [
    // --- PIEZAS GRÁFICAS ---
    { id: 101, category: "Piezas Gráficas", image: "https://static.wixstatic.com/media/342780_592c434fc6cc4c168eea8ac21886a9f1~mv2.png" },
    { id: 102, category: "Piezas Gráficas", image: "https://static.wixstatic.com/media/342780_582c19417f9549628ff946c4c47c5b84~mv2.png" },
    { id: 103, category: "Piezas Gráficas", image: "https://static.wixstatic.com/media/342780_09013a86424c43edbf82c3975a6df7ef~mv2.png" },
    { id: 104, category: "Piezas Gráficas", image: "https://ik.imagekit.io/Juanpa/Frame%201.png" },
    { id: 105, category: "Piezas Gráficas", image: "https://ik.imagekit.io/Juanpa/Frame%202.png" },
    { id: 106, category: "Piezas Gráficas", image: "https://ik.imagekit.io/Juanpa/Frame%203.png" },
    { id: 107, category: "Piezas Gráficas", image: "https://ik.imagekit.io/Juanpa/Portada%20Revista%20Iris.png" },
    
    // --- VIDEO ---
    { id: 201, category: "Video", image: "https://ik.imagekit.io/Juanpa/Video%20Testimonios%20EI_1.mp4" },
    { id: 202, category: "Video", image: "https://ik.imagekit.io/Juanpa/Emily%20Clavel.mp4" },
    { id: 203, category: "Video", image: "https://ik.imagekit.io/Juanpa/Reel%20Optimizacio%CC%81n%20Xua.mp4?tr=orig" },
    { id: 204, category: "Video", image: "https://ik.imagekit.io/Juanpa/Campan%CC%83a%20_17%20-%20Reel2.mp4" },
    { id: 205, category: "Video", image: "https://ik.imagekit.io/Juanpa/Campan%CC%83a%20_17%20-%20Reel3.mp4" },
    { id: 206, category: "Video", image: "https://video.wixstatic.com/video/342780_0f96911a63e64abebcd9e1308ecb9d1b/1080p/mp4/file.mp4" },
    { id: 207, category: "Video", image: "https://video.wixstatic.com/video/342780_5438101c79de44c293c629eeea61a6f4/720p/mp4/file.mp4" },

    // --- DISEÑO WEB ---
    { id: 301, category: "Diseño Web", image: "https://static.wixstatic.com/media/342780_ca6b75536645479fa416c8ec8ee16d3c~mv2.png" },
    { id: 302, category: "Diseño Web", image: "https://static.wixstatic.com/media/342780_68984f6caf794f86a684a6064514da95~mv2.png" },
    { id: 303, category: "Diseño Web", image: "https://static.wixstatic.com/media/342780_c105f5ea1cd24329af16ed1513439515~mv2.png" },
    { id: 304, category: "Diseño Web", image: "https://static.wixstatic.com/media/342780_37dc0ce90575470a842db452002f4ad7~mv2.png" },
    { id: 305, category: "Diseño Web", image: "https://static.wixstatic.com/media/342780_102190c5bc8c4eae823d2809076b3408~mv2.png" },
    { id: 306, category: "Diseño Web", image: "https://static.wixstatic.com/media/342780_8c16fd6aa13f42ccaac86db2ff2c4203~mv2.png" },

    // --- 3D ---
    { id: 401, category: "3D", image: "https://static.wixstatic.com/media/342780_9586a88b0f8a4b8ea9d80dfe0e029153~mv2.png" },
    { id: 402, category: "3D", image: "https://static.wixstatic.com/media/342780_21e44268d7ca4def9d06bfa38eb25805~mv2.png" },
    { id: 403, category: "3D", image: "https://static.wixstatic.com/media/342780_6532c05a43af46bba11e1574c71f6e8a~mv2.png" },
    { id: 404, category: "3D", image: "https://static.wixstatic.com/media/342780_6372738dc4da488c98c9d8f8cbfb81a0~mv2.png" },
    { id: 405, category: "3D", image: "https://static.wixstatic.com/media/342780_5f05ca0967374560912aa772efb7a22f~mv2.png" },
    { id: 406, category: "3D", image: "https://static.wixstatic.com/media/342780_05a1728aadc24d0d8fff087223d6d7b8~mv2.png" },
    { id: 407, category: "3D", image: "https://static.wixstatic.com/media/342780_a7c90dc64301432a948d2d84eb1bbb3a~mv2.jpg" },
  ];

  // Scroll Logic Inteligente
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      // 1. Detectar si estamos sobre el contenedor de scroll vertical del portafolio
      const scrollContainer = e.target.closest('.portfolio-scroll-container');

      if (scrollContainer) {
        const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
        const hasVerticalScroll = scrollHeight > clientHeight;

        if (hasVerticalScroll) {
          const isAtTop = scrollTop === 0;
          const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 1;

          if ((e.deltaY > 0 && !isAtBottom) || (e.deltaY < 0 && !isAtTop)) {
            return;
          }
        }
      }

      if (e.deltaY === 0) return;
      e.preventDefault();
      container.scrollLeft += e.deltaY * 3; 
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    const handleScroll = () => {
      const slideWidth = container.offsetWidth;
      const currentScroll = container.scrollLeft;
      const index = Math.round(currentScroll / slideWidth);
      setActiveSlide(index);
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSlide = (index) => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      containerRef.current.scrollTo({
        left: width * index,
        behavior: 'smooth'
      });
    }
  };

  // Filtramos pero NO paginamos
  const filteredProjects = projects.filter(p => p.category === activeCategory);
  
  // Eliminamos la lógica de paginación
  // const totalPages ...
  // const currentProjects = filteredProjects.slice...
  // const nextPage ...
  // const prevPage ...

  // Usamos todos los proyectos filtrados directamente
  const currentProjects = filteredProjects;

  const isVideo = (url) => url.includes('.mp4');

  // Función para abrir el modal
  const openModal = (item) => {
    setSelectedItem(item);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="bg-neutral-900 text-white font-sans h-screen w-screen overflow-hidden relative selection:bg-cyan-500 selection:text-black">
      
      {/* Navegación Inferior */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-6 bg-black/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
        <button
          onClick={() => scrollToSlide(activeSlide - 1)}
          disabled={activeSlide === 0}
          className={`text-white hover:text-cyan-400 transition-colors ${activeSlide === 0 ? 'opacity-20 cursor-not-allowed' : ''}`}
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex gap-4">
          {[...Array(TOTAL_SLIDES)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSlide === idx ? 'bg-cyan-400 w-8' : 'bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => scrollToSlide(activeSlide + 1)}
          disabled={activeSlide === TOTAL_SLIDES - 1}
          className={`text-white hover:text-cyan-400 transition-colors ${activeSlide === TOTAL_SLIDES - 1 ? 'opacity-20 cursor-not-allowed' : ''}`}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div 
        ref={containerRef}
        className="flex h-full w-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        
        {/* SLIDE 1: HERO */}
        <section className="flex-none w-screen h-screen snap-center relative flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://cdnb.artstation.com/p/assets/images/images/041/211/923/large/juan-pablo-giraldo-escenario-final-1.jpg?1631072117" 
              alt="Background" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
          </div>

          <div className="relative z-10 text-left w-full max-w-6xl px-8 md:px-20 animate-fade-in-up">
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 drop-shadow-lg">
              {personalInfo.name}
            </h1>
            <div className="h-1 w-32 bg-cyan-400 mb-6"></div>
            <h2 className="text-2xl md:text-4xl font-light text-cyan-400 tracking-widest uppercase">
              {personalInfo.title}
            </h2>
            <p className="mt-8 text-gray-400 max-w-lg text-lg">
              Desliza para explorar mi universo digital.
            </p>
          </div>
          
          <div className="absolute right-10 bottom-10 hidden md:flex items-center gap-2 text-gray-500 animate-pulse">
            <span>SCROLL</span>
            <ChevronRight />
          </div>
        </section>

        {/* SLIDE 2: ABOUT */}
        <section className="flex-none w-screen h-screen snap-center relative flex items-center justify-center bg-neutral-900">
           <div className="absolute inset-0 overflow-hidden pointer-events-none">
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
           </div>

           <div className="relative z-10 w-full max-w-4xl px-8 md:px-20 flex flex-col justify-center h-full">
             <div className="mb-12">
               <h3 className="text-5xl md:text-6xl font-bold mb-8 text-white">Sobre Mí</h3>
               <p className="text-xl md:text-3xl font-light text-gray-300 leading-relaxed text-justify md:text-left">
                 Soy <span className="text-cyan-400 font-medium">Diseñador Digital y Multimedia</span> egresado de la Universidad Colegio Mayor de Cundinamarca. Tengo experiencia en edición de fotos y video, branding, diseño web y creación de contenido gráfico para redes sociales. 
               </p>
               <p className="text-xl md:text-3xl font-light text-gray-300 leading-relaxed mt-6 text-justify md:text-left">
                 Me apasiona desarrollar piezas creativas que integren estrategia, innovación visual y comunicación efectiva.
               </p>
             </div>

             <div>
               <h4 className="text-cyan-400 font-bold tracking-[0.2em] uppercase mb-6 text-sm border-b border-white/10 pb-2 w-fit">Software & Herramientas</h4>
               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                 {tools.map((tool, index) => (
                   <div 
                     key={index} 
                     className="flex flex-col items-center justify-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 hover:border-cyan-500/30 hover:-translate-y-1 transition-all duration-300 group"
                   >
                     <div>
                       {tool.icon}
                     </div>
                     <span className="text-sm font-medium text-gray-300 group-hover:text-white uppercase tracking-wider text-center">{tool.name}</span>
                   </div>
                 ))}
               </div>
             </div>
           </div>
        </section>

        {/* SLIDE 3: CLIENTES */}
        <section className="flex-none w-screen h-screen snap-center relative flex flex-col items-center justify-center bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-black to-black opacity-50"></div>
          
          <div className="z-10 text-center px-4 w-full">
            <h3 className="text-sm md:text-base font-bold tracking-[0.3em] text-cyan-500 mb-4 uppercase">Trayectoria</h3>
            <h2 className="text-4xl md:text-6xl font-bold mb-10">Marcas para las que he trabajado</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto items-center">
              {clients.map((client, idx) => (
                <div key={idx} className="group relative flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-300 cursor-default h-32 md:h-40">
                  <img 
                    src={client.logo} 
                    alt={`Logo de ${client.name}`}
                    className="max-w-full max-h-full object-contain p-2"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SLIDE 4: PORTFOLIO GRID */}
        <section className="flex-none w-screen h-screen snap-center relative bg-neutral-900 flex flex-col overflow-hidden">
          <div className="px-8 md:px-20 pt-12 pb-6 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6 bg-neutral-900 z-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-2">Portafolio</h2>
              <div className="flex flex-wrap gap-4 mt-6">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 ${
                      activeCategory === cat 
                        ? 'bg-cyan-400 text-black shadow-[0_0_15px_rgba(34,211,238,0.5)]' 
                        : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Paginación eliminada */}
          </div>

          <div className="flex-1 p-8 md:p-20 relative overflow-y-auto portfolio-scroll-container">
            {currentProjects.length > 0 ? (
              <div className="flex flex-wrap gap-4 justify-center">
                {currentProjects.map((project) => (
                  <div 
                    key={project.id} 
                    className="relative group h-[250px] md:h-[300px] flex-auto max-w-2xl rounded-lg overflow-hidden border border-white/5 bg-neutral-800 cursor-pointer"
                    onClick={() => openModal(project)}
                  >
                    {isVideo(project.image) ? (
                      <video
                        src={project.image}
                        className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    ) : (
                      <img 
                        src={project.image} 
                        alt={project.category} 
                        className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                      />
                    )}
                    
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 p-2 rounded-full">
                        {isVideo(project.image) ? <Play size={24} className="text-white" /> : <span className="text-white text-sm font-bold">VER +</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center w-full h-full text-gray-500">
                <p>No hay proyectos en esta categoría aún.</p>
              </div>
            )}
          </div>
        </section>

        {/* SLIDE 5: CONTACTO */}
        <section className="flex-none w-screen h-screen snap-center relative flex items-center justify-center bg-gradient-to-br from-neutral-900 to-black">
          <div className="max-w-4xl w-full px-8 text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-8">¿Tienes una idea?</h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Estoy disponible para proyectos freelance y colaboraciones creativas. Hagamos algo increíble juntos.
            </p>
            
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="inline-flex items-center gap-4 bg-cyan-500 text-black px-10 py-5 rounded-full text-xl font-bold hover:bg-cyan-400 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.5)]"
            >
              <Mail /> Contáctame
            </a>

            <div className="mt-20 flex justify-center gap-12">
              <a 
                href="https://www.behance.net/juanpagiraldo3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors group"
              >
                <div className="p-4 bg-white/5 rounded-full group-hover:bg-[#1769ff]/20 group-hover:text-[#1769ff] transition-all duration-300 border border-transparent group-hover:border-[#1769ff]/50">
                  <BehanceIcon size={28} />
                </div>
                <span className="text-sm">Behance</span>
              </a>
              <a 
                href="https://juanpag722.artstation.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors group"
              >
                <div className="p-4 bg-white/5 rounded-full group-hover:bg-[#13aff0]/20 group-hover:text-[#13aff0] transition-all duration-300 border border-transparent group-hover:border-[#13aff0]/50">
                  <ArtStationIcon size={28} />
                </div>
                <span className="text-sm">ArtStation</span>
              </a>
            </div>

            <footer className="absolute bottom-8 w-full left-0 text-center text-gray-600 text-sm">
              © {new Date().getFullYear()} {personalInfo.name}. Todos los derechos reservados.
            </footer>
          </div>
        </section>

      </div>
      
      {/* MODAL PARA VER PROYECTOS */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10 transition-opacity duration-300"
          onClick={closeModal}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2 bg-black/50 rounded-full"
            onClick={closeModal}
          >
            <X size={32} />
          </button>
          
          <div 
            className="relative max-w-7xl w-full max-h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Evitar cierre al hacer clic dentro del contenido
          >
            {isVideo(selectedItem.image) ? (
              <video
                src={selectedItem.image}
                className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
                controls
                autoPlay
                playsInline
              />
            ) : (
              <img 
                src={selectedItem.image} 
                alt={selectedItem.category} 
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
            )}
          </div>
        </div>
      )}

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;