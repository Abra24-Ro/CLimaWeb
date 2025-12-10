import { Linkedin, Facebook, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full bg-white/10 backdrop-blur-sm border-t border-white/20 py-4 flex flex-col md:flex-row items-center justify-between px-4 gap-4">
      {/* Texto */}
      <p className="text-white/80 text-sm">
        &copy; {new Date().getFullYear()} Weather App. Todos los derechos
        reservados.
      </p>

      {/* Iconos sociales */}
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/Abra24-Ro"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition-colors"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/robinson-ojeda-9273a4346/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 transition-colors"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a
          href="https://facebook.com/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-600 transition-colors"
        >
          <Facebook className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
};
