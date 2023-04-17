import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {GrFormSubtract} from 'react-icons/gr'



const Origin = () => {

    const [sub, setSub] = React.useState(true)


  return (
    <div className="min-h-screen max-h-fit w-screen bg-gradient-to-b from-[#FCF1DD] via-transparent to-[#FCF1DD]">

    <div className="relative px-[230px]">
       <div className="absloute bottom-0 flex justify-between pt-[60px] h-[105px]">
        <img 
        className="h-[41px] w-[108px] aspect-auto "
            src="https://fitmint.io/v2/logo.svg"
        />

        <button 
        className="w-[77px] h-[45px] rounded-2xl bg-white Russo font-[600]">
            Login
        </button>
       </div> 
       </div>


       <div className="flex justify-between text-5xl mt-[125px] mx-[300px]">
       <div className="w-[310px]">
          <h1 className=" Intro">honouring <br/> our <span className="italic">origin</span></h1>
        <h1 className="text-base text-[#6B7280] font-semibold">ntroducing the Origin Pass for our early believers, to unlock the future.</h1>


        <button className="w-full bg-[#2C2C2D] text-white rounded-2xl text-base Intro p-3 mt-[35px]">
          CLAIM NOW
        </button>

        <h1 className="text-slate-500 text-xs underline self-center mt-3 hover:opacity-90 cursor-pointer text-center">
            What's an origin pass ?
        </h1>
        </div>
       </div>


       <div className="mx-[300px] mt-[126px]">
        <img
            src="team (1).svg"
        />

        <div className="flex justify-between mt-[40px]">
           <div className="w-[320px] text-[#64748b] font-light text-base">
           In an ever-evolving crescendo of possibilities. One of these possibilities, on which we're working on, is to make the world fitter. Getting you closer to your future self - a healthier you. <br/><br/>

Get ready to embark on this new adventure with Fitmint 2.0, where you are empowered with an avatar, a version of yourself who is the hero of our new game. <br/><br/>

Start as a Rookie and make the hero's journey to become the Greatest Of All Time (G.O.A.T.)! <br/><br/>

But, as a new chapter begins, we also want to honour our ORIGINS. <br/><br/>

When we began our project, enthusiasts from all over the world came to join us on our mission. We went through some great changes & challenges - the whole nine yards, together.
           </div>

           <div className="w-[320px] text-[#64748b] font-light text-base">
           Now, on our new adventure, we're making sure that you get exclusive access like no one else. And to get that access, for a lifetime, you'll be getting the Origin Pass NFT. <br/><br/>

We'll be opening the doors to our power-packed premium features for free, just for our Origin Pass holders! Features for which every other Fitminter would have to purchase a monthly/annual subscription to experience. <br/><br/>

In addition to this, Origin Pass holders would also get access to UltraFIT 2.0 Contest, where they can win real cash prizes from a weekly prize pool of 2000+ USDC! <br/><br/>

Only 15,619 limited edition Origin Pass NFTs would be minted, which would soon be tradable on the Marketplace, at a price of your choosing. And there's a lot more coming, stay tuned. <br/><br/>
           </div>
        </div>     
       </div>

       <div className="w-screen mt-[250px]">
            <img 
            className="w-full" 
                src="testimonials.svg"
            />
        </div>

        <div className="w-[320px] text-[#AEAEAE] font-light text-base mx-auto mt-[250px]">
            <div className="Intro text-black text-3xl">
            Origin Pass
            </div>

            <h1 className="text-base font-normal my-[14px]">An NFT Pass so exclusive that it will naturally bring with it loads of exclusive benefits. Here's what you get:</h1>

            <h1 className="my-[10px] font-semibold ">PERKS</h1>

            <div 
            onClick={() => setSub(!sub)}
            className="flex justify-between mb-[30px] cursor-pointer">
            <h1 className="text-black font-semibold">Lifetime premium subscription</h1>

            {
                (sub) ? 
                <GrFormSubtract 
            fontSize={15} className="text-black my-auto font-bold"
            /> :
                <AiOutlinePlus
                fontSize={15} className="text-black my-auto font-bold" 
            /> }
            </div>

            {
                (sub) ? (
                <h1>You'll unlock all premium-tier features for a lifetime on the app for free, for which every other Fitminter would have to purchase a monthly/annual subscription to experience</h1>) : null}
        </div>
    </div>
  )
}

export default Origin