import React, { useState } from "react";
import { Link } from "react-router-dom";

const Emails = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleCreateClick = () => {
    setIsSubmitted(true);
    // Aquí puedes agregar lógica adicional, como enviar datos a un servidor
    alert(`Gracias por suscripción, ${firstName} ${lastName}!`);
    // Limpiar los campos de texto
    setEmail("");
    setFirstName("");
    setLastName("");
    setIsSubmitted(false); // Habilitar la edición nuevamente
  };

  return (
    <div>
      {/* Title */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-4 mb-10">
        <div>
          <h1 className="font-bold text-gray-100 text-xl">Suscripción</h1>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>-</span>
            <span>Emails</span>
          </div>
        </div>
      </div>
      {/* Portada */}
      <div className="bg-secondary-100 p-8 rounded-tl-lg rounded-tr-lg grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="p-8">
          <h1 className="text-3xl mb-8">Ingrese su información para suscribirse</h1>
          <form>
            <div className="relative mb-4">
              <input
                type="text"
                className="bg-secondary-900 outline-none py-2 pr-4 pl-10 rounded-lg placeholder:text-gray-500 w-full"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitted}
              />
            </div>
            <div className="relative mb-4">
              <input
                type="text"
                className="bg-secondary-900 outline-none py-2 pr-4 pl-10 rounded-lg placeholder:text-gray-500 w-full"
                placeholder="Nombre(s)"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                disabled={isSubmitted}
              />
            </div>
            <div className="relative mb-4">
              <input
                type="text"
                className="bg-secondary-900 outline-none py-2 pr-4 pl-10 rounded-lg placeholder:text-gray-500 w-full"
                placeholder="Apellidos"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                disabled={isSubmitted}
              />
            </div>
          </form>
        </div>
      </div>
      {/* Button */}
      <div className="bg-secondary-100 p-8 rounded-bl-lg rounded-br-lg">
        <div className="flex justify-center">
          <button className="bg-primary/90 text-black hover:bg-primary flex items-center gap-2 py-2 px-4 rounded-lg transition-colors" onClick={handleCreateClick} disabled={isSubmitted}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Emails;