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
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
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
<Box sx={{ 
    minWidth: 'fit-content',
    height: '27px',
 }}>
<FormControl fullWidth>
<InputLabel id="demo-controlled-open-select-label">No. of E.</InputLabel>
<Select
        labelId="demo-select-small"
        id="demo-select-small"
        value="no. of e"
        label="No. of E"
        onChange={handleChange}
        // onFocus="none"
        // className="w-full"
        sx={{ 
    minWidth: 'fit-content',
    height: '34px',
    onNodeFocus: "none"
 }}
      >
          <MenuItem value="1-10">
          <em>1-10</em>
        </MenuItem>
      
        <MenuItem value="1-10">
          <em>11-25</em>
        </MenuItem>

        <MenuItem value="1-10">
          <em>26-50</em>
        </MenuItem>

        <MenuItem value="1-10">
          <em>50-100</em>
        </MenuItem>

      </Select>
      </FormControl>
      </Box>
</div>

<div className="w-[92px] h-[37px] m-2">
<Box sx={{ 
    minWidth: 'fit-content',
    height: '27px',
 }}>
<FormControl fullWidth>
<InputLabel id="demo-controlled-open-select-label">No. of M.</InputLabel>
<Select
        labelId="demo-select-small"
        id="demo-select-small"
        value="no. of M"
        label="No. of M"
        onChange={handleChange}
       
        // className="w-full"
        sx={{ 
    minWidth: 'fit-content',
    height: '34px',
    onNodeFocus: "none"
 }}
      >
          <MenuItem value="1-10">
          <em>1-10</em>
        </MenuItem>
      
        <MenuItem value="1-10">
          <em>11-25</em>
        </MenuItem>

        <MenuItem value="1-10">
          <em>26-50</em>
        </MenuItem>

        <MenuItem value="1-10">
          <em>50-100</em>
        </MenuItem>

      </Select>
      </FormControl>
      </Box>
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
<FormControlLabel control={<Checkbox 
  sx={{
 
    '&.Mui-checked': {
      color: "lightgray",
    },
  }}
defaultChecked />}  />
<h1 className="text-[0.875rem] m-auto w-full text-center">label</h1> 
</div>

</div>

<div className="flex">
<div className="w-[320px] h-[340px] m-2">
<textarea 
placeholder="about company"
    className="text-[0.875rem] resize-none w-full h-full rounded-md border-[1px] border-lightgray p-2 focus:outline-none"
/>

</div>

<div className="w-[550px] h-[340px] m-2">
<textarea 
placeholder="description"
    className="text-[0.875rem] resize-none w-full h-full rounded-md border-[1px] border-lightgray p-2 focus:outline-none"
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