import React from 'react';
import Image from 'next/image';
export default function Banner() {

    return (
        <div className="w-full ">
            <div className="w-full flex items-center justify-center bg-[#2458BD] relative h-[600px] md:h-[456px] ">
                <Image
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="/images/wallpaper_Vector_Banner.svg"
                    style={{ objectFit: 'cover' }} // Using style for object-fit
                    width={400}
                    height={40}
                    alt="Banner"
                />
                <div className="w-full flex items-center justify-center h-full absolute top-0 left-0">
                    <div className="xl:w-[1140px] h-full flex items-end justify-end">
                        <div className="w-full md:w-[548px] p-3 h-full text-white flex flex-col items-start justify-around">
                            <h1 className='text-[40px] font-thin mb-10'>Cansado de ficar de fora? <br /><span className='font-bold'>Nós temos a solução !!!</span></h1>
                            <p className='text-2xl font-thin'> Conheça a AstroCode e expanda a visibilidade da sua marca para o espaço digital agora mesmo!</p>
                            <div className="w-full flex flex-col md:flex-row items-center">

                                <button className="w-[300px] h-16 mb-2 md:m-0 flex items-center justify-center text-[#133881] text-2xl font-bold bg-[#d9ac0e] hover:bg-[#d9c50e] rounded-[20px]">
                                    Começe agora mesmo
                                </button>

                                <button className="w-[216px] h-16 ml-3 flex items-center justify-center text-[#133881] text-2xl font-semibold bg-white hover:bg-[#d4d2d2] rounded-[20px]">
                                    Saiba Mais
                                </button>
                            </div>
                        </div>

                        <Image
                            className="w-auto h-full hidden xl:block object-cover"
                            src="/images/Banner_PC.svg"
                            style={{ objectFit: 'cover' }} // Updated to use the style attribute
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