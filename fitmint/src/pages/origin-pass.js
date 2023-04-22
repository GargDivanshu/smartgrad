import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {GrFormSubtract} from 'react-icons/gr'
import {AiFillInstagram} from 'react-icons/ai'
import {BsDiscord, BsTwitter} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'


const Origin = () => {

    const [sub, setSub] = React.useState(true);
    const [comp, setComp] = React.useState(true);
    const [mystery, setMystery] = React.useState(true)

    const [one, setOne] = React.useState(false);
    const [two, setTwo] = React.useState(false);
    const [three, setThree] = React.useState(false);
    const [four, setFour] = React.useState(false);
    const [five, setFive] = React.useState(false);
    const [six, setSix] = React.useState(false);
    const [seven, setSeven] = React.useState(false);


  return (
    <div className="min-h-screen max-h-fit w-screen bg-gradient-to-b from-[#FCF1DD] via-[#F8F8F8] to-[#FCF1DD]">

    <div className="relative mx-auto px-[230px]">
       <div className="absloute max-w-[800px] mx-auto bottom-0 flex justify-between pt-[60px] h-[105px]">
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
       <div className="w-[310px] max-w-[312px]">
          <h1 className=" Intro">honouring <br/> our <span className="italic">origin</span></h1>
        <h1 className="text-base text-[#6B7280] font-semibold">ntroducing the Origin Pass for our early believers, to unlock the future.</h1>


        <button className="w-full bg-[#2C2C2D] text-white rounded-2xl text-base Intro p-3 mt-[35px]">
          CLAIM NOW
        </button>

        <h1 className="text-slate-500 text-xs underline self-center mt-3 hover:opacity-90 cursor-pointer text-center">
            What s an origin pass ?
        </h1>
        </div>
       </div>


       <div className="mx-[300px] mt-[126px] max-w-fit mx-auto">
        <img
            src="team (1).svg"
        />

        <div className="flex justify-between mt-[40px]">
           <div className="mx-2 w-[320px] text-[#64748b] font-light text-base">
           In an ever-evolving crescendo of possibilities. One of these possibilities, on which we re working on, is to make the world fitter. Getting you closer to your future self - a healthier you. <br/><br/>

Get ready to embark on this new adventure with Fitmint 2.0, where you are empowered with an avatar, a version of yourself who is the hero of our new game. <br/><br/>

Start as a Rookie and make the hero s journey to become the Greatest Of All Time (G.O.A.T.)! <br/><br/>

But, as a new chapter begins, we also want to honour our ORIGINS. <br/><br/>

When we began our project, enthusiasts from all over the world came to join us on our mission. We went through some great changes & challenges - the whole nine yards, together.
           </div>

           <div className=" mx-2 w-[320px] text-[#64748b] font-light text-base">
           Now, on our new adventure, we re making sure that you get exclusive access like no one else. And to get that access, for a lifetime, you ll be getting the Origin Pass NFT. <br/><br/>

We ll be opening the doors to our power-packed premium features for free, just for our Origin Pass holders! Features for which every other Fitminter would have to purchase a monthly/annual subscription to experience. <br/><br/>

In addition to this, Origin Pass holders would also get access to UltraFIT 2.0 Contest, where they can win real cash prizes from a weekly prize pool of 2000+ USDC! <br/><br/>

Only 15,619 limited edition Origin Pass NFTs would be minted, which would soon be tradable on the Marketplace, at a price of your choosing. And there s a lot more coming, stay tuned. <br/><br/>
           </div>
        </div>     
       </div>

       <div className="w-screen mt-[250px]">
            <img 
            className="w-full" 
                src="testimonials.svg"
            />
        </div>

        <div className="w-[340px] text-[#AEAEAE] font-light text-base mx-auto mt-[250px] border-b-[1px] border-[#EDEDED]">
            <div className="Intro text-black text-3xl">
            Origin Pass
            </div>

            <h1 className="text-base font-normal my-[14px]">An NFT Pass so exclusive that it will naturally bring with it loads of exclusive benefits. Here s what you get:</h1>

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
                <h1 className="mb-[30px]">You ll unlock all premium-tier features for a lifetime on the app for free, for which every other Fitminter would have to purchase a monthly/annual subscription to experience</h1>) : null
                }


                <div 
            onClick={() => setComp(!comp)}
            className="flex justify-between mb-[30px] cursor-pointer">
            <h1 className="text-black font-semibold">Ultrafit competitions</h1>

            {
                (comp) ? 
                <GrFormSubtract 
            fontSize={15} className="text-black my-auto font-bold"
            /> :
                <AiOutlinePlus
                fontSize={15} className="text-black my-auto font-bold" 
            /> }
            </div>

            {
                (comp) ? (
                <h1 className="mb-[30px]">Chance to participate & win in UltraFIT Contest with a weekly prize pool of 2000+ USDC. This competition will be running weekly/bi-weekly until we bring the subscription layer on the app</h1>) : null
                }


                <div 
            onClick={() => setMystery(!mystery)}
            className="flex justify-between mb-[30px] cursor-pointer">
            <h1 className="text-black font-semibold">Mystery boxes</h1>

            {
                (mystery) ? 
                <GrFormSubtract 
            fontSize={15} className="text-black my-auto font-bold"
            /> :
                <AiOutlinePlus
                fontSize={15} className="text-black my-auto font-bold" 
            /> }
            </div>

            {
                (mystery) ? (
                    <div>
                <h1 className="mb-[30px]">Mystery Box (MB) airdrops to Origin Pass Holders containing exclusive assets, which would depend on the Sneaker NFTs you exchanged for the Pass:
               </h1>


               <div>
                <li className="my-[10px]">For each OG Sneaker NFT that you ve exchanged for the Pass, you ll get 2 Mystery Boxes. For each MG Sneaker NFT, you ll get 1 Mystery Box.</li>

                <li className="my-[10px]"><span
                className="text-black font-semibold"
                >Level 50 Sneakers:</span> G.O.A.T. Asset MBs</li>

                <li><span
                className="text-black font-semibold"
                >Level 41 - 49 Sneakers:</span>  Olympian Asset MBs</li>

                <li className="my-[10px]"><span
                className="text-black font-semibold"
                >Level 31 - 40 Sneakers:</span> Champion Asset MBs</li>

                <li className="my-[10px]"><span
                className="text-black font-semibold"
                >Level 21 - 30 Sneakers:</span> Champion Asset MBs</li>

                <li className="my-[10px]"><span
                className="text-black font-semibold"
                >Level 11 - 20 Sneakers:</span> Athlete Asset MBs</li>

                <li className="my-[10px]"><span
                className="text-black font-semibold"
                >Level 1 - 10 Sneakers:</span>  Challenger Asset MBs</li>

                <li className="my-[10px]"><span
                className="text-black font-semibold"
                >Level 0 Sneakers: </span>Rookie Asset MBs</li>

                <li className="my-[10px]">These assets are currently masterpieces-in-progress and we will airdrop them to you as soon as they are ready. Stay tuned for more details.</li>

               </div>
              
               </div>
               ) : null
                }



        </div>


        <div className="mt-[190px] w-[768px] max-w-[768px] mb-[125px] mx-auto">
             <h1 className="Intro text-[1.875rem]">FAQS</h1>
{/* font-bold Russo */}

             {/* FAQ QUES ONE */}
             <div 
             onClick={() => setOne(!one)}
             className="my-[30px] border-b-[1px] cursor-pointer border-[#EDEDED]">
             <div className="flex justify-between">
                <h1 className="Intro text-xl py-[23px] ">What Is an Origin Pass NFT?</h1>
                {
                (one) ? 
                <GrFormSubtract 
            fontSize={15} className="text-black my-auto font-bold"
            /> :
                <AiOutlinePlus
                fontSize={15} className="text-black my-auto font-bold" 
            /> }
             </div>   
                {
                    (one) ? 
                    <h1 className="text-[#515563] font-light py-[15px]">An Origin Pass NFT is a limited edition NFT that unlocks a lifetime access to the premium features on the Fitmint app. Most importantly, this Pass would be dropped ONLY to our Sneaker NFT Holders to experience premium features for free.<br/><br/>

                 These features are currently a work-in-progress and will continue to be added onto the app in the upcoming days.</h1> : null 
                 }
             </div>


            {/* FAQ QUES TWO */}
             <div 
             onClick={() => setTwo(!two)}
             className="my-[30px] border-b-[1px] cursor-pointer border-[#EDEDED]">
             <div className="flex justify-between">
                <h1 className="Intro text-xl py-[23px] ">How many Sneakers do I need to claim one Origin Pass NFT?</h1>
                {
                (two) ? 
                <GrFormSubtract 
            fontSize={15} className="text-black my-auto font-bold"
            /> :
                <AiOutlinePlus
                fontSize={15} className="text-black my-auto font-bold" 
            /> }
             </div>   
                {
                    (two) ? 
                    <h1 className="text-[#515563] font-light py-[15px]">For each Sneaker NFT you hold, be it OG Basics or MG Glides, you will get one Origin Pass NFT. For instance, you will get 3 Origin Passes for 2 OGs & 1 MG.</h1> : null 
                    }
             </div>


             {/* FAQ QUES THREE */}
             <div 
             onClick={() => setThree(!three)}
             className="my-[30px] border-b-[1px] cursor-pointer border-[#EDEDED]">
             <div className="flex justify-between">
                <h1 className="Intro text-xl py-[23px] ">What is the benefit of converting my higher level Sneakers to Origin Pass NFT?</h1>
                {
                (three) ? 
                <GrFormSubtract 
            fontSize={15} className="text-black my-auto font-bold"
            /> :
                <AiOutlinePlus
                fontSize={15} className="text-black my-auto font-bold" 
            /> }
             </div>   
               { 
                (three) ?
                <>
                <h1 className="text-[#515563] font-light py-[15px]">Mystery Box (MB) airdrops to Origin Pass Holders containing exclusive assets, which would depend on the Sneaker NFTs you exchanged for the Pass:</h1>
                <br/> <br/>

                <div>
                    <li>For each OG Sneaker NFT that you have exchanged for the Pass, you will get 2 Mystery Boxes. For each MG Sneaker NFT, you will get 1 Mystery Box.</li>

                    <li className="my-[10px]"><span
                className="text-black font-semibold"
                >Level 50 Sneakers:</span> G.O.A.T. Asset MBs</li>

                <li><span
                className="text-black font-semibold"
                >Level 41 - 49 Sneakers:</span>  Olympian Asset MBs</li>

                <li className="my-[10px]"><span
                className="text-black font-semibold"
                >Level 31 - 40 Sneakers:</span> Champion Asset MBs</li>

                <li className="my-[10px]"><span
                className="text-black font-semibold"
                >Level 21 - 30 Sneakers:</span> Champion Asset MBs</li>

                <li className="my-[10px]"><span
                className="text-black font-semibold"
                >Level 11 - 20 Sneakers:</span> Athlete Asset MBs</li>

                <li className="my-[10px]"><span
                className="text-black font-semibold"
                >Level 1 - 10 Sneakers:</span>  Challenger Asset MBs</li>

                <li className="my-[10px]"><span
                className="text-black font-semibold"
                >Level 0 Sneakers: </span>Rookie Asset MBs</li>

                <li>These assets are currently masterpieces-in-progress and we will airdrop them to you as soon as they are ready. Stay tuned for more details.</li>


                </div>
                </> : null}
                
                
             </div>


             {/* FAQ QUES FOUR */}
             <div 
             onClick={() => setFour(!four)}
             className="my-[30px] border-b-[1px] cursor-pointer border-[#EDEDED]">
             <div className="flex justify-between">
                <h1 className="Intro text-xl py-[23px] ">What will happen to my Sneakers?</h1>
                {
                (four) ? 
                <GrFormSubtract 
            fontSize={15} className="text-black my-auto font-bold"
            /> :
                <AiOutlinePlus
                fontSize={15} className="text-black my-auto font-bold" 
            /> }
             </div>   
                {(four) ?
                    <h1 className="text-[#515563] font-light py-[15px]">Once you claim your Origin Pass against your sneakers, you will still be able to use your sneakers to workout and earn in the current app. But at the Fitmint 2.0 launch, your sneaker NFTs will be burned and you will be able to see your origin pass in the new app.</h1> : null
                }
             </div>



             {/* FAQ QUES FIVE */}
             <div 
             onClick={() => setFive(!five)}
             className="my-[30px] border-b-[1px] cursor-pointer border-[#EDEDED]">
             <div className="flex justify-between">
                <h1 className="Intro text-xl py-[23px] ">When will my Origin Pass benefits end?</h1>
                {
                (five) ? 
                <GrFormSubtract 
            fontSize={15} className="text-black my-auto font-bold"
            /> :
                <AiOutlinePlus
                fontSize={15} className="text-black my-auto font-bold" 
            /> }
             </div>   
               { 
                (five) ? 
                <h1 className="text-[#515563] font-light py-[15px]">Never! You will get a lifetime free access of our premium app features with the Origin Pass.</h1>
                : null
                }
             </div>


             {/* FAQ QUES SIX */}
             <div 
             onClick={() => setSix(!six)}
             className="my-[30px] border-b-[1px] cursor-pointer border-[#EDEDED]">
             <div className="flex justify-between">
                <h1 className="Intro text-xl py-[23px] ">Will Origin Pass be tradable?</h1>
                {
                (six) ? 
                <GrFormSubtract 
            fontSize={15} className="text-black my-auto font-bold"
            /> :
                <AiOutlinePlus
                fontSize={15} className="text-black my-auto font-bold" 
            /> }
             </div>   
                {
                    (six) ? 
                    <h1 className="text-[#515563] font-light py-[15px]">Yes! We will be launching a marketplace with Fitmint 2.0, where you will be able to buy/sell the passes at a price of your choosing!</h1>
                    : null
                    }
             </div>


             {/* FAQ QUES SEVEN */}
             <div 
             onClick={() => setSeven(!seven)}
             className="my-[30px] border-b-[1px] cursor-pointer border-[#EDEDED]">
             <div className="flex justify-between">
                <h1 className="Intro text-xl py-[23px] ">Will I be able to access Area 51 with Origin Pass?</h1>
                {
                (seven) ? 
                <GrFormSubtract 
            fontSize={15} className="text-black my-auto font-bold"
            /> :
                <AiOutlinePlus
                fontSize={15} className="text-black my-auto font-bold" 
            /> }
             </div>   
               { 
                
                (seven) ?
                <h1 className="text-[#515563] font-light py-[15px]">At the moment, Origin Pass NFT holders will not be getting access to Area 51.</h1>
                : null
                }
             </div>
        </div>


        <div className="mx-auto mt-[180px] px-[250px] pb-[180px]">
             <div className="flex justify-between w-[750px] max-w-[750px] mx-auto relative">
             

             <div>
             <img 
             className="w-[212px]"
                src="https://fitmint.io/fitmint2logo.svg"
             />
             <div className="my-3 text-[#7C7A76] font-semibold">Read more about fitmint 2.0</div>
             </div>

             <div className="absolute right-0 bottom-0">
             <div className="flex">
                 <AiFillInstagram
                    fontSize={25}
                    className="mx-2"
                 />
                 <BsDiscord
                    fontSize={25}
                    className="mx-2"
                 />
                 <BsTwitter
                    fontSize={25}
                    className="mx-2"
                 />
                 <FaTelegramPlane
                    fontSize={25}
                    className="mx-2"
                 />
             </div>
             <div className="my-3 text-[#7C7A76] font-semibold text-center">
             hello@fitmint.io
             </div>
             </div>
             </div>

             <div className="text-[#7C7A76] font-base my-[62px] text-[14px]">
             © Fitmint | All rights reserved • privacy policy
             </div>

             </div>

        
    </div>
  )
}

export default Origin


// // {AiFillInstagram} from 'react-icons/ai'
// import {BsDiscord, BsTwitter} from 'react-icons/bs'
// import {FaTelegramPlane}