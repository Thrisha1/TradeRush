import Box from '@mui/material/Box';
import Stockdet from './Stockdet';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import Router from 'next/router';


export default function Adminresult() {

  const [Data, setData] = useState("")
  const [Text, setText] = useState("")

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

      const insights = () => {
        const check = localStorage.getItem('user_data')
        if(check === Data) {
          localStorage.setItem("result",true)
          localStorage.setItem("insights",Text)
        }
        else
        {
          localStorage.setItem("result",false)
          localStorage.setItem("insights",Text)
        }
        localStorage.setItem("published","true")
        Router.push('/')
      }

    return (
        <div class="w-100 flex">
            <div class="w-50 rounded-md flex flex-col p-5 justify-center mt-9">
                <div className="w-100 rounded-md flex p-5 justify-center mt-9 bg-blue-100">
                    <h1 className="p-3 mr-4">The result is </h1>
                      
                      <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    defaultValue="Hammer"
                    helperText="Selected Currency"
                    onChange={(e)=> {setData(e.target.value)}}
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>

                      
                </div>
                <div class="mt-10">
              
                    <form>
                      <label for="message" class="block mb-2 font-medium text-gray-900 dark:text-dark text-2xl">Insights</label>
                      <textarea value={Text} onChange={(e)=> {setText(e.target.value)}} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Why this?..."></textarea>
                      <button onClick={()=> insights()} type="button" className="mt-5 text-white h-max mx-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>

                </div>
           </div>
      </div>
    )
}