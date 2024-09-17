'use client'
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Função para verificar a direção do scroll
  const toggleVisibility = () => {
    const currentScrollY = window.scrollY;

    // Mostrar o botão apenas se o usuário estiver descendo
    if (currentScrollY > 300 && currentScrollY > lastScrollY) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    // Atualiza a última posição de scroll
    setLastScrollY(currentScrollY);
  };

  // Função para rolar até o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [lastScrollY]);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 left-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all"
        >
          <FaArrowUp size={30} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
