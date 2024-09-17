import React from 'react';
import Image from 'next/image';

export default function MyServices() {

    return (
        <section id='myServices' className='w-full '>
            <div className="w-full bg-white xl:bg-[#2458BD] relative flex flex-col md:flex-row items-center justify-center ">

                <Image
                    className="w-full h-full hidden xl:block object-cover"
                    src="/images/group3.svg"
                    width={400}
                    height={40}
                    alt="Banner"
                />

                <Image
                    className="w-full h-full xl:hidden object-cover"
                    src="/images/group4.svg"
                    width={400}
                    height={40}
                    alt="Banner"
                />

                <div className="w-full flex  items-center justify-center absolute left-0">

                    <div className="w-full xl:w-[1240px]  h-full p-4 mx-auto flex flex-col items-center gap-3">

                        <p className="text-white text-3xl font-bold my-20 xl:m-0 xl:mb-3">Confira Nossos Serviços</p>

                        <div className="flex flex-col xl:flex-row gap-44 xl:gap-3">

                        <button className="w-[70%] mx-auto xl:mx-0 box-border p-3 py-10 bg-[#133881] rounded-[30px] border-2 border-white md:transition-transform md:duration-300 md:ease-in-out md:hover:scale-110 ">

                                <p className="text-white text-2xl font-bold mx-auto text-center mb-10 ">Design Gráfico</p>

                                <Image
                                    className="w-[85px] h-[85px] mx-auto object-cover mb-10"
                                    src="/images/iconsDesignsvg.svg"
                                    width={400}
                                    height={40}
                                    alt="Banner"
                                />

                                <p className=" text-center text-white text-base mx-auto">Seja atrativo aos olhos dos seus clientes e prenda a atenção deles se destacando dos demais, com a AstroCode tomando a linha de frente por você. Oferecemos a confecção de qualquer tipo de arte gráfica: posts, portfólio, logotipo, identidade visual, banner, elementos gráficos, e tudo que você venha a precisar profissionalmente!</p>

                            </button>

                            <button className="w-[70%] mx-auto xl:mx-0 box-border p-3 py-10 bg-[#133881] rounded-[30px] border-2 border-white md:transition-transform md:duration-300 md:ease-in-out md:hover:scale-110 ">

                                <p className="text-white text-2xl font-bold mx-auto text-center mb-10 ">Desenvolvimento Web</p>

                                <Image
                                    className="w-[85px] h-[85px] mx-auto object-cover mb-10"
                                    src="/images/iconsWeb.svg"
                                    width={400}
                                    height={40}
                                    alt="Banner"
                                />

                                <p className=" text-center text-white text-base mx-auto">Criamos um site do zero para a sua marca, alinhado com as suas preferências em relação a funcionalidades e estilo, tornando o seu site a melhor versão dele mesmo com elegância, otimização e ranqueamento no algoritmo de busca, sendo atrativo, funcional e bem posicionado para potenciais clientes não te perderem de vista e marcando uma ótima impressão ao acessar! </p>

                            </button>

                            <button className="w-[70%] mx-auto xl:mx-0 box-border p-3 py-10 bg-[#133881] rounded-[30px] border-2 border-white md:transition-transform md:duration-300 md:ease-in-out md:hover:scale-110 ">

                                <p className="text-white text-2xl font-bold mx-auto text-center mb-10 ">Estruturação</p>

                                <Image
                                    className="w-[85px] h-[85px] mx-auto object-cover mb-10"
                                    src="/images/estruturacao.svg"
                                    width={400}
                                    height={40}
                                    alt="Banner"
                                />

                                <p className=" text-center text-white text-base mx-auto">Quando o assunto é atrair ou ser encontrado a AstroCode vai garantir que te achem quando busquem: com o Google My Business e toda a estruturação necessária, independente de onde ou quem seja, você será encontrado, fornecendo toda a informação e direcionamento que seus clientes precisam e assim formando a ponte para os seus negócios não só fluírem, mas decolarem!</p>

                            </button>


                        </div>

                    </div>

                </div>


            </div>
        </section>
    )
}