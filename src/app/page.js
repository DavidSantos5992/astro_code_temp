import Header from "@/components/Header";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Image from "next/image";
import MyServices from "@/components/MyServices";
import Whyhire from "@/components/WhyHire";
import Faq from "@/components/Faq";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
export default function Home() {
  return (
    <div className="relative">
      <Header />
      <Banner />
      <About />
      <MyServices />
      <div className="xl:w-[1240px] p-4 mx-auto bg-white flex flex-col md:flex-row items-center gap-3">

        <div className=" flex-col">
          <div className="mb-16 ">
            <div className="text-[#133881] text-2xl font-bold">Aplicações Responsivas</div>
            <div className="text-black text-4xl font-bold mb-2">Sites Mobile e Desktop</div>
            <div className="w-[178px] h-[0px] border-2 border-[#133881]"></div>
          </div>
          <p className="md:w-[531px] text-black text-2xl ">Oferecemos cobertura completa para o seu site ser acessível em qualquer plataforma, garantindo assim cobertura completa para os seus clientes acessarem de onde desejarem</p>
        </div>

        <div className="md:w-[650px]">
          <Image
            className="w-full h-auto md:w-auto md:h-full  object-cover"
            src="/images/cliente_valor_de_uma_vida.svg"
            width={400}
            height={40}
            alt="Banner"
          />
        </div>

      </div>
      <Whyhire />
      <Faq />
      <ScrollToTopButton />
      <Footer />
      <WhatsappButton />
    </div>
  );
}
