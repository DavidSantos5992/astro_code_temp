// components/WhatsappButton.js
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappButton = () => {
    const phoneNumber = '5511998252377'; // Código do país + número
    const message = 'Olá, gostaria de conversar com a equipe Astro Code';

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg flex items-center space-x-2 hover:bg-green-600 transition-all"
        >
            <FaWhatsapp size={24} />
            <span>WhatsApp</span>
        </a>
    );
};

export default WhatsappButton;
