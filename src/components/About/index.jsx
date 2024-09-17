import React from 'react';
import Image from 'next/image';
export default function About() {

    return (
        <section id='about' className='w-full'>
            <div className="xl:w-[1240px] p-4 mx-auto bg-white flex flex-col md:flex-row items-center gap-3">

                <div className="w-full md:w-[50%] h-full ">

                    <div className="  h-[103px] ">
                        <h2 className="text-[#133881] text-2xl font-bold">como trabalhamos</h2>
                        <h3 className="text-black text-[40px] font-bold mb-3">Quem nós somos</h3>
                        <div className="w-[178px] h-[0px]  border-2 border-[#133881]"></div>
                    </div>

                    <p className=" text-2xl font-normal mt-4">
                        A AstroCode é uma empresa no ramo da tecnologia que tem como finalidade oferecer soluções tecnológicas para o seu comércio, abrangemos serviços que cobrem toda a extensão do e-commerce para você elevar o patamar da sua marca para dimensões estratosféricas!!!
                    </p>

                    <Image
                        className="w-auto h-full mt-10 object-cover"
                        src="/images/group1.svg"
                        width={400}
                        height={40}
                        alt="Banner"
                    />

                </div>

                <div className="w-full md:w-[50%] h-full ">

                    <Image
                        className="w-auto h-full mt-16 hidden md:block object-cover"
                        src="/images/group2.svg"
                        width={400}
                        height={40}
                        alt="Banner"
                    />


                    <p className=" text-2xl font-normal mt-4">
                        Temos profissionais capacitados para fazer sua empresa decolar, destacando a sua empresa de forma elegante e bem posicionada no maior outdoor do mundo: a internet.Afinal, seu trabalho e esforço merecem ser vistos, e ninguém melhor do que a AstroCode para te proporcionar a visibilidade necessária, confira as informações abaixo e não perca mais tempo, conquiste seu legado no espaço digital agora mesmo!!!
                    </p>

                    <Image
                        className="w-auto h-full mt-16  md:hidden object-cover"
                        src="/images/group2.svg"
                        width={400}
                        height={40}
                        alt="Banner"
                    />

                </div>

            </div>
        </section>
    )
}