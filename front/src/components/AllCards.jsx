import React from 'react'
import Card from './Card';
import { CardData } from './../utils/CardData';



const AllCards = () => {
  return (
    <div className="grid grid-cols-4 gap-2 p-[16px] w-full min-h-fit">
        {CardData.map((item) => (
            <Card
            key={item.img}
            level={item.level}
            img={item.img}
            title={item.title}
            />
        ))
            }
    </div>
  )
}

export default AllCards