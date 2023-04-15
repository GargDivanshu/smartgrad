import React from 'react'
import SearchBar from './../common/SearchBar';
import{AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import AppCard from './../Card/AppCard';
import { app } from './../../utils/app';
import { featureInfo } from './../../utils/feature';
import Featured from './../Card/Featured';


const Mainscreen = () => {

  const [featureArrow, setFeatureArrow] = React.useState(0)
  //const [popularArrow, setPopularArrow] = useState(0)
  //const [showCategory, setShowCategory] = useState(0)

  function featureLeft() {
    if (featureArrow > 0) {
      setFeatureArrow(featureArrow - 1)
    }
  }

  function featureRight(){
    if (featureArrow < featureInfo.length-5) {
      setFeatureArrow(featureArrow + 1)
    }
  }


  return (
    <div
    className="w-full max-w-[1000px] ml-[227px] px-[48px] pt-[40px]"
    >

        <div className="flex justify-between">
            <div className="flex flex-col">
              <h1
              className="text-[20px] font-bold text-darkblue"
              >App Store</h1>
              <h1
              className="text-btntextgray text-[15px]"
              >Connecting people, technology and the workplace.</h1>
            </div>

            <SearchBar
              className="text-gray"
            />
        </div>

        <div
        className="mt-[40px] mb-[25px] flex justify-between"
        >
          <span>Featured Categories</span>

<div className="flex">
<div className="hover:bg-gray rounded-md p-2 w-[40px]">
   <AiOutlineArrowLeft
    onClick={()=> {featureLeft()}}
    fontSize={15} className="mx-auto my-auto cursor-pointer"
   />
   </div>
   <div className="hover:bg-gray rounded-md p-2 w-[40px]">
   <AiOutlineArrowRight
    onClick={()=> {featureRight()}}
    fontSize={15} className="mx-auto my-auto cursor-pointer"
   />
   </div>
</div>

</div>
<div className=" flex overflow-x-scroll scroll-pl-6 snap-x scroll-auto no-scrollbar mx-auto">
{

  featureInfo.slice(featureArrow, featureArrow + 9).map((item) => (
<Featured
key={item.title}
  title={item.title}
  featureNo={item.featureNo}
/>
))

}

        </div>


        <div
        className="mt-[40px] mb-[25px] justify-between"
        >
        <h1
          className="text-[16px] font-semibold text-darkblue"
          >Most Popular</h1>


<div className="grid grid-cols-4 gap-2">
          {
            app.map((item) => (
              <AppCard
                logo={item.logo}
                name={item.name} 
                text={item.text}
                width={item.width}
                height={item.height}
                padding={item.padding}
              />
            ))
          }

          </div>
        </div>

        

    </div>
  )
}

export default Mainscreen