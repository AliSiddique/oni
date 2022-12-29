import React, { useEffect } from 'react'
import axios from 'axios'

import useDebounce from '../hooks/search/useDebounce'
import { useState } from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'
import { useRouter } from 'next/router'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Search({keywords,setKeywords,location,setLocation}) {
    const router = useRouter()
    const [data, setData] = React.useState([])
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(keywords)
        if(keywords ) {
            let searchQuery = `?keywords=${keywords}`
            if(location) {
                searchQuery += `&location
                =${location}`
            }
            router.push(`/listings${searchQuery}&page=1`)
        } else {
            router.push('/listings?page=1')
        }
    }
 
    const debouncedSearchTerm = useDebounce(keywords, 500);
    useEffect(() => {
        if(keywords.length > 3) {
            const fetchData = async () => {
                try {
                    const res = await axios.get(`${process.env.API_URL}/api/jobe?title=${keywords}`)
                    console.log(res.data)
                    setData(res.data)
    
                } catch (error) {
                    console.log(error)
                }
             
            }
            fetchData()
        }
       
    }, [debouncedSearchTerm])

  return (
    <div className='mx-auto '>
    <Combobox as="div" value={data} onChange={setData}>
      <div className="relative ">
        <Combobox.Input
          className="w-full rounded-md border border-gray-300 bg-white   shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          onChange={(event) => setKeywords(event.target.value)}
          displayValue={(item) => item?.title}
          onSubmit={onSubmit}
        />
    

        {data.length > 0 && (
          <Combobox.Options className="absolute z-10 max-h-60 w-full overflow-auto  bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {data.map((item) => (
              <Combobox.Option
                key={item.id}
                value={item}
                className={({ active }) =>
                  classNames(
                    'relative font-bold cursor-default select-none py-2 pl-3 pr-9',
                    active ? 'bg-sky-600 text-white' : 'text-gray-900'
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <span  className={classNames('block truncate', selected && 'font-semibold')}>{item.title}</span>

                    {selected && (
                      <span
                        className={classNames(
                          'absolute font-bold inset-y-0 right-0 flex items-center pr-4',
                          active ? 'text-white' : 'text-indigo-600'
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
    </div>
  )
}
