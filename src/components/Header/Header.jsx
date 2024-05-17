import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import Logo from "@/assets/website/logo.png";
import { MenuProfile } from "../MenuProfile/MenuProfile";
import DarkMode from "./DarkMode";

export const Header = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Header */}
      <div className="bg-primary/60 py-3">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            {/* Logo e Título da Header */}
            <a href="#" className="font- text-2xl sm:text-2xl flex gap-2">
              <img
                src={Logo}
                alt="Cara de gato https://pt.vecteezy.com/png-gratis/fofa"
                className="w-10"
              />
              Cats List
            </a>
          </div>

          {/* Componentes à direita da Header */}
          <div className="flex items-center gap-8">
            {/* Campo de adicionar gatinho */}
            <div className="flex items-center gap-8">
              <div className="relative -mr-7 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground flex items-center px-2 py-1 shadow-lg dark:bg-secondary/25  light:bg-secondary/30 dark:text-white duration-100 ">
                <button className="flex text-white items-center ">
                  <FaPlus className="mr-1 h-3 w-3 text-white group-hover:text-primary" />
                  Add a cat
                </button>
              </div>
            </div>

            {/* Botão Avatar */}
            <div>
              <div className="mr-4" >
                <button
                  className="mr-2 flex items-center bg-gradient-to-r from-primary to-secondary transition-all duration-200 rounded-full"
                  onClick={() => setShowPopup(true)}
                >
                  <RxAvatar className="text-4xl text-white drop-shadow-sm cursor-pointer rounded-full" />
                </button>
              </div>
              {showPopup && (
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 border border-gray-300 z-50 shadow-md dark:bg-secondary/20 dark:text-white duration-200">
                  <MenuProfile />
                                    <button
                    onClick={() => setShowPopup(false)}
                    className="shadow-md dark:bg-secondary/20 dark:text-white duration-100"
                  >
                    Fechar Popup
                  </button>
                </div>
              )}
            </div>

            {/* Darkmode Switch */}
            <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
              {/* Conteúdo restante da Header omitido para brevidade */}

              {/* Darkmode Switch */}
              <div className="absolute right-0 top-0 flex items-center gap-4">
                <DarkMode />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
