import React, { useEffect } from 'react'
import axios from 'axios'

import useDebounce from '../components/hooks/search/useDebounce'
import { useState } from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Search() {
    const [data, setData] = React.useState([])
    const [search, setSearch] = React.useState('')
    const debouncedSearchTerm = useDebounce(search, 500);
    useEffect(() => {
        if(search.length > 3) {
            const fetchData = async () => {
                try {
                    const res = await axios.get(`${process.env.API_URL}/api/jobe?title=${search}`)
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
      <Combobox.Label className="block text-sm font-medium text-gray-700">Assigned to</Combobox.Label>
      <div className="relative mt-1">
        <Combobox.Input
          className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          onChange={(event) => setSearch(event.target.value)}
          displayValue={(item) => item?.title}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>

        {data.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {data.map((item) => (
              <Combobox.Option
                key={item.id}
                value={item}
                className={({ active }) =>
                  classNames(
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                    active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <span className={classNames('block truncate', selected && 'font-semibold')}>{item.title}</span>

                    {selected && (
                      <span
                        className={classNames(
                          'absolute inset-y-0 right-0 flex items-center pr-4',
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
