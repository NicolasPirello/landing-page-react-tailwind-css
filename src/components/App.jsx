import '../styles/App.css';
import video from "../video/video-menos-calidad.webm"
import { BsYoutube, BsLinkedin, BsGithub } from "react-icons/bs";
import { MdOutlineWeb } from "react-icons/md";


function App() {

  return (

    <body>

      <section className="absolute w-full min-h-screen px-20 py-10 flex justify-between items-center md:flex-row flex-col">

        {/* Logo */}

        <header className='absolute left-0 top-0 w-full py-10 px-16 flex items-center justify-center z-50 text-white text-center'>

          <a href="" className='flex items-center justify-center'>
            <span className='text-3xl font-bolder text-white capitalize -tracking-wider'>Usando Tailwind CSS</span>
          </a>

        </header>

        { /* Video y Overlay */ }

        <video loop autoPlay muted className='absolute top-0 left-0 w-full h-full object-cover -z-10'>
          <source src={video} type="video/mp4"/>
        </video>

        <div className='absolute top-0 left-0 w-full h-full bg-black/75'></div>

        { /* Texto */ }

        <div className='px-0 py-32 flex flex-wrap flex-col items-start gap-4 z-50 text-white lg:w-3/5 md:1/2 md:px-10'>

          <h1 className='text-3xl font-semibold text-center'>Bienvenidos</h1>
          <p className='leading-relaxed mt-4 text-gray-200 md:block'>Esta es un Landing Page creada con <strong>React</strong> (Create react app) y estilizada con <strong>Tailwind CSS.</strong> Es el primer proyecto donde estilizo con este framework. Al costado dejo mis redes sociales con mi Portafolio donde tengo alojados mis otros proyectos.</p>
          <button className='text-black bg-white border-0 py-2 px-8 my-4 font-semibold tracking-widest uppercase hover:bg-gray-300 hover:scale-125 transition'>Explora</button>

        </div>

        { /* Iconos */ }

        <div className="z-50 flex md:flex-col flex-row gap-10">

          <a href="https://nicolaspirello.com" target="_blank">
            <MdOutlineWeb className="text-white/50 w-8 h-8 hover:text-white hover:scale-150 transition" />
          </a>

          <a href="https://www.linkedin.com/in/nicolas-pirello/" target="_blank">
            <BsLinkedin className="text-white/50 w-8 h-8 hover:text-white hover:scale-150 transition" />
          </a>

          <a href="https://github.com/NicolasPirello" target="_blank">
            <BsGithub className="text-white/50 w-8 h-8 hover:text-white hover:scale-150 transition" />
          </a>


          <a href="" target="_blank">
            <BsYoutube className="text-white/50 w-8 h-8 hover:text-white hover:scale-150 transition" />
          </a>
         

        </div>

      </section>

    </body>

  );
}

export default App;
