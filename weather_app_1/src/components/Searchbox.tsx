import React from 'react'
import { CiSearch } from "react-icons/ci";

type Props = {}

function Searchbox({}: Props) {
  return (
    <form className='flex-relative items-center justify-center h-10'>
        <input type="text" placeholder='Searcg location...' className='px-4 py-2 wo[230px] border border-gray-300  ' />
        <button>
            <CiSearch />
        </button>
    </form>
  )
}

export default Searchbox