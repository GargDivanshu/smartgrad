import React from 'react'
import Profilesider from './../../components/Profilesider';
import Input from './../../components/common/Input';
import MenuBar from './../../components/common/MenuBar';
import TextBtn from './../../components/common/TextBtn';
import Sider from './../../components/Sider';
import { useRouter } from 'next/router';
import {FiKey} from 'react-icons/fi'
import {SlEnvolopeLetter} from 'react-icons/sl'
import {HiCode} from 'react-icons/hi'
import {AiOutlineTeam} from 'react-icons/ai'
import { BiLeftArrowAlt } from 'react-icons/bi';
import Dropdown from './../../components/common/Dropdown';


const CreateComp = () => {

    const router = useRouter()
    const [employee, setEmployee] = React.useState('');

    const handleChange = (event) => {
      setEmployee(event.target.value);
    };

  return (
    <div
    className="bg-white w-screen min-h-screen"
    >

    {/* sider start */}
        <Sider>
    <div>
<button 
onClick={() => {
  router.push("/companies")
}}
className="w-full mb-[26px] flex px-[16px] py-[13px] my-auto text-[13px] hover:bg-[#EAEAEA]">
<BiLeftArrowAlt
className="my-auto"
  fontSize={20}
/>
   <span className="mx-1 my-auto text-[15px] ">  Create Company Profile</span>
</button>



</div>

    </Sider>

    {/* sider end */}

    <div className="ml-[240px]">

    <div className="mx-auto py-[100px] max-w-fit px-8">


<form
className="border-[1px] border-lightgrayBg rounded-lg p-4"
>


<div className="flex">

<div className="w-[250px] h-[37px] m-2">
    <Input 
        text="company name"
    />
</div>

<div className="w-[320px] h-[37px] m-2">
<Input
text="tagline"
 />

</div>

<div className="w-[92px] h-[37px] m-2">
<Input
text="Funding"
 />
</div>


<div className="w-[92px] h-[37px] m-2">
<Dropdown 
  text={"No. of E"}
  options={["1-10", "11-25", "26-50", "51-100", "100+"]}
/>

</div>

<div className="w-[92px] h-[37px] m-2">
<Dropdown 
  text="No. of M"
  options={["1-10", "11-25", "26-50", "51-100", "100+"]}
/>

</div>

</div>


<div className="flex">
<div className="w-[320px] h-[37px] m-2">
<Input 
        text="Logo Url"
    />

</div>


<div className="w-[500px] h-[37px] m-2 my-auto">
<Input
text="Tags"
 />

</div>

<div className="flex">

<input 
  type="checkbox"
  className="w-4 h-4 my-auto"
/>

{/* <FormControlLabel control={<Checkbox 
  sx={{
 
    '&.Mui-checked': {
      color: "lightgray",
    },
  }}
defaultChecked />}  />
<h1 className="text-[0.875rem] m-auto w-full text-center">label</h1>  */}
</div>

</div>

<div className="flex">
<div className="w-[320px] h-[340px] max-h-[340px] m-2">
{/* <textarea 
placeholder="about company"
    className="text-[0.875rem] resize-none w-full h-full rounded-md border-[1px] border-lightgray p-2 focus:outline-none"
/> */}

  <MenuBar
      placeholder="About Company"
    />


</div>

<div className="w-[550px] h-[340px] max-h-[340px] m-2">
{/* <textarea 
placeholder="description"
    className="text-[0.875rem] resize-none w-full h-full rounded-md border-[1px] border-lightgray p-2 focus:outline-none"
/> */}

<MenuBar 
  placeholder="description"
/>

</div>
</div>

<div className="flex justify-end w-[875px]">
<TextBtn 
    text="Save"
/>
</div>
</form>


    </div>
    </div>
    </div>
  )
}

export default CreateComp