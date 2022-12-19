import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import  Router  from 'next/router';


export default function Trading_down() {

  const [Data, setData] = useState("")

    const currencies = [
        {
          value: 'Hammer',
          label: 'Hammer',
        },
        {
          value: 'piercing pattern',
          label: 'piercing pattern',
        },
        {
          value: 'Morning Star',
          label: 'Morning Star',
        },
        {
          value: 'Inverted Hammer',
          label: 'Inverted Hammer',
        },
      ];

      const adder = () => {
        localStorage.setItem('user_data',Data)
        localStorage.setItem('submitted',"true")
        Router.push('/userresult')
      }

    return (
        <div className="w-1/2 mb-10 rounded-md flex p-5 justify-center mt-9 bg-blue-100">
            <h1 className="p-3 mr-4">Select a Graph which is going to be next </h1>
            
            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              defaultValue="Hammer"
              helperText="Please select your Graph"
              onChange={(e) => {
                setData(e.target.value)
                console.log(Data);
              }}
              >
              {
                currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))
              }
            </TextField>
            
            <button onClick={adder} type="button" className="text-white h-max ml-7 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">GO...</button>

        </div>
    )
}