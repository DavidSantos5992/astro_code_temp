'use client'
import React from 'react';
import Image from 'next/image';
import { useState } from "react";

export default function Faq() {
    const [isOpen, setIsOpen] = useState(false);
    const [openIndex, setOpenIndex] = useState(null); // Estado para rastrear qual FAQ está aberto

    const toggleFAQ = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    const faq = [
        {
            question: 'Como serão orquestrados os projetos?',
            answer: 'Uma reunião de alinhamento será agendada, na qual teremos um briefing. Após isso, tudo será encaminhado para o time de desenvolvimento, onde todas as etapas serão cumpridas e entregues nos prazos determinados.'
        },

        {
            question: 'Como será prestado o suporte?',
            answer: 'Todo o suporte será prestado em nosso servidor do Discord, através do sistema de tickets, ou pelo WhatsApp. Basta abrir uma solicitação em qualquer uma das plataformas, e todas as suas dúvidas serão sanadas o mais brevemente possível.'
        },

    ]
    return (
        <section id='about' className='w-full '>
            <div className="xl:w-[1240px] p-4 pb-20 mx-auto bg-white flex flex-col md:flex-row items-center gap-3">

                <div className="w-full md:w-[70%]">

                    <div className="  h-[103px] ">
                        <h2 className="text-[#133881] text-2xl font-bold">F.A.Q</h2>
                        <h3 className="text-black text-[40px] font-bold mb-3">Perguntas Frequentes</h3>
                        <div className="w-[178px] h-[0px]  border-2 border-[#133881]"></div>
                    </div>

                    <div className="mt-28 md:mt-10">
                        {
                            faq.map((op, index) => (
                                <div key={index} className=" px-5 max-w-2xl rounded-3xl text-white bg-[#133881] mx-auto mt-8">

                                    <div className="flex items-center py-4 cursor-pointer relative" onClick={() => toggleFAQ(index)}>
                                        <Image
                                            className="w-5 h-full mr-3 object-cover"
                                            src="/images/interrogacao.svg"
                                            width={400}
                                            height={40}
                                            alt="Interrogação"
                                        />
                                        <h2 className="max-w-[80%] text-xl font-semibold">{op.question}</h2>
                                        <Image
                                            className={`w-auto h-3 absolute right-0 top-7 mr-3 object-cover ${openIndex === index ? "rotate-180 transition-all" : "rotate-0 transition-all"}`}
                                            src="/images/arrow.svg"
                                            width={400}
                                            height={40}
                                            alt="Seta"
                                        />
                                    </div>

                                    <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openIndex === index ? "max-h-[600px]" : "max-h-0"}`}>
                                        <div className="pb-4 pt-4 border-t-2">
                                            <p className="text-xl">{op.answer}</p>
                                        </div>
                                    </div>

                                </div>
                            ))
                        }
                    </div>


                </div>

            </div>
        </section>
    )
}




