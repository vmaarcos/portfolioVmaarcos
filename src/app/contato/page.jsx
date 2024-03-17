import React from "react";

const Contato = () => {
  return (
    <div className="container mx-auto py-10">
      {/* card do zap com link */}

      <div className="w-24 h-24 rounded-md flex items-center justify-center border-cyan-500 border-2 mx-auto my-auto">
        <a
          href="https://wa.link/3jb0mr"
          className="flex items-center justify-center"
        >
          <img className="" src="/WhatsApp_icon.png" alt="" />
        </a>
      </div>

      <h1 className="text-3xl font-bold mb-5">Entre em Contato</h1>
      <form>
        <input type="text" placeholder="Seu Nome" className="input-field" />
        <input type="email" placeholder="Seu E-mail" className="input-field" />
        <textarea placeholder="Sua Mensagem" className="input-field"></textarea>
        <button type="submit" className="btn">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contato;
