import React from 'react';
import Tag from './Tag';
import Counter from './Counter';
import Image from 'next/image';

interface AchieverCardProps {
    title: string;
    description: string;
    image: string;
}

const AchieverCard: React.FC<AchieverCardProps> = ({ title, description, image }) => {
    return (
        <section className="max-sm:px-[10px] sm:px-[30px] lg:px-[50px] xl:px-[100px] py-[50px] bg-gradient-to-b from-white-700 to-blue-50">
        <div className="flex flex-row ">
            <div className="flex-1 p-4">
                <Tag
                    label='Impact'
                    textColor='text-[#A28610]'
                    backgroundColor='bg-[#F9F1D2]'
                />
                <h2 className="my-2 text-3xl font-[500]">{title}</h2>
                <p className="my-6 leading-6">{description}</p>
                <div className="grid grid-cols-2 gap-[10px]">
                  <Counter
                   icon = {'/images/Icon.png'}
                   number={100}
                   label={'students'}
                  />
                  <Counter
                   icon = {'/images/Icon.png'}
                   number={200}
                   label={'students'}
                  />
                  <Counter
                   icon = {'/images/Icon.png'}
                   number={300}
                   label={'students'}
                  />
                  <Counter
                   icon = {'/images/Icon.png'}
                   number={400}
                   label={'students'}
                  />
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center max-h-[420px] px-6">
                <Image src={image} alt={title} width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' , objectFit: 'cover', borderRadius:'20px'}} />
            </div>
        </div>
        </section>
    );
};

export default AchieverCard;

  