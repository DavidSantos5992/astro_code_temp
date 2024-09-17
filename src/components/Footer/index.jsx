import Image from "next/image";
import Link from "next/link";
const Footer = () => {
    return (
        <footer className="bg-[#133881] text-white py-8">
            <div className="xl:w-[1240px] p-4 gap-3 container mx-auto flex flex-col md:flex-row justify-between items-center">
                <Link href={'/'}
                    className="mb-6 md:mb-0"
                >
                    <Image
                        src="/images/logo_espaco_digital.svg"
                        className="w-auto h-full"
                        width={150}
                        height={40}
                        alt="Logo"
                    />
                </Link>

                {/* <div className="mb-6 md:mb-0">
                    <h2 className="text-lg font-semibold">Siga-nos</h2>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="hover:text-gray-400">Facebook</a>
                        <a href="#" className="hover:text-gray-400">Instagram</a>
                        <a href="#" className="hover:text-gray-400">Twitter</a>
                    </div>
                </div> */}

                <div>
                    <p className="text-sm">&copy; {new Date().getFullYear()} AstroCode Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
