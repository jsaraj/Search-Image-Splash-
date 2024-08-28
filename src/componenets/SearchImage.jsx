
import { HiSearchCircle } from "react-icons/hi";
import React, { useState } from 'react'

function SearchImage() {

    const [value, setValue] = useState("");
    const [result, setResult] = useState("");

    const fetchImg = () => {
        fetch(`https://api.unsplash.com/search/photos/?client_id=DGozjz6Jac1c-fE_wufJs99cVdN0N-T7OMzZ4KKesdQ&query=${value}`)
            .then(res => res.json())
            .then(data => {
                setResult(data.results);
                console.log(result);
            })

    }


    return (
        <>
            <div className='flex justify-center space-x-20 items-center h-20 shadow-md bg-gray-100'>
                <span className="text-lg text-orange-400">Search : </span>
                <input type='text' placeholder='Example: car' value={value} onChange={(e) => { setValue(e.target.value) }} className="focus:outline-none rounded-md border px-3 py-1 border-orange-400 placeholder:text-orange-400 shadow-md text-orange-400 w-3/12 placeholder:opacity-40"></input>
                <HiSearchCircle size={35} className="cursor-pointer" color="orange" onClick={fetchImg} />

            </div>
            <div className="flex flex-wrap justify-center items-center pt-5">
                {
                    result && result.map((item, index) => {
                        return(
                            <img className="w-1/4 h-72 object-cover" key={index} src={item.urls.full}></img>
                        )
                        
                    })
                }
            </div>
        </>
    )
}

export default SearchImage