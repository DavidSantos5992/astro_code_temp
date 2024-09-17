import Image from "next/image";

export default function Whyhire() {

    return (
        <div className="xl:w-[1240px] p-4 mx-auto  bg-white items-center gap-3 ">

            <div className="relative flex justify-center items-center flex-col">
                <div className=" text-center ml-4 text-black text-2xl md:text-4xl font-bold mb-5">Por que a AstroCode é a melhor opção para o seu negócio?</div>
                <div className="w-[80%] h-[0px]  border-2 border-[#133881]"></div>
            </div>

            <div className="w-[80%] md:h-[988px] bg-[#306eebe3] rounded-3xl mx-auto mt-20 overflow-hidden flex-col md:flex md:flex-wrap ">

                <div className="w-full md:w-[50%]  md:h-[494px] ">

                    <h3 className="text-white text-center mt-3 text-[26px] font-bold "> Quais resultados oferecemos?</h3>
                    <div className="w-[80%] h-[0px] mx-auto border-2 border-white"></div>

                    <p className="w-[80%] mb-3 md:mb-0 mx-auto mt-3 text-white text-xl ">Os serviços que oferecemos conversam entre sí homogeneamente e se complementam, fazendo assim com que a sua empresa sempre chegue cada vez mais longe e eleve o patamar constantemente. Além de trazer uma visibilidade digital completa, também pensamos nos demais aspectos: como a impressão que seus clientes terão ao acessar, quanto tempo a atenção deles será mantida, como guia-los para saber mais sobre a sua marca e produtos e por fim, o que todos querem, fechar negócio.</p>


                </div>

                <div className="w-full md:w-[50%] md:h-[494px]  relative">
                    <Image
                        className="w-full h-auto md:w-auto md:h-full  object-cover"
                        src="/images/card1.jpg"
                        width={400}
                        height={40}
                        alt="Banner"
                    />

                    <div className="w-full h-full md:w-full md:h-full  absolute top-0 left-0 flex items-center justify-center">
                        <Image
                            className="w-auto h-[40%]  object-cover"
                            src="/images/iconCard.svg"
                            width={400}
                            height={40}
                            alt="Banner"
                        />
                    </div>

                </div>

                <div className="w-full md:w-[50%] md:h-[494px] hidden md:block  relative">
                    <Image
                        className="w-full h-auto md:w-auto md:h-full  object-cover"
                        src="/images/card2.jpg"
                        width={400}
                        height={40}
                        alt="Banner"
                    />

                    <div className="w-full h-full md:w-full md:h-full  absolute top-0 left-0 flex items-center justify-center">
                        <Image
                            className="w-auto h-[40%]  object-cover"
                            src="/images/iconCard2.svg"
                            width={400}
                            height={40}
                            alt="Banner"
                        />
                    </div>

                </div>

                <div className="w-full md:w-[50%] md:h-[494px]">

                    <h3 className="text-white w-[90%] text-center mt-3 text-[26px] font-bold ">A imagem que você passa</h3>
                    <div className="w-[80%] h-[0px] mx-auto border-2 border-white"></div>

                    <p className="w-[80%] mb-3 md:mb-0 mx-auto mt-3 text-white text-xl ">Nos atentamos também ao que sua marca simboliza, não só para você, mas também para o mundo, queremos que se sinta representado em suas ideias e que consiga transmiti-las para as demais pessoas, que elas consigam identificar ao primeiro relance que um produto veio de você, construindo assim uma primeira impressão atrativa e de encher os olhos e uma identidade visual sólida que mantenha um padrão profissional e elegante, que transmita confiança e acima de tudo, que leve o seu sonho adiante!</p>


                </div>

                <div className="w-full md:w-[50%] md:h-[494px]  md:hidden  relative">
                    <Image
                        className="w-full h-auto md:w-auto md:h-full  object-cover"
                        src="/images/card2.jpg"
                        width={400}
                        height={40}
                        alt="Banner"
                    />

                    <div className="w-full h-full md:w-full md:h-full  absolute top-0 left-0 flex items-center justify-center">
                        <Image
                            className="w-auto h-[40%]  object-cover"
                            src="/images/iconCard2.svg"
                            width={400}
                            height={40}
                            alt="Banner"
                        />
                    </div>

                </div>

            </div>

        </div>
    )
}