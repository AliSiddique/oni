import React from 'react'
import Listings from '../../components/listings'
import axios from 'axios'
import Navbar from '../../components/listings/client/Navbar';
import Filters from '../../components/listings/filters/Filters';
import Pagination from 'react-js-pagination'
import { useRouter } from 'next/router'
export default function Index({listings}) {
console.log(listings.resPerPage);
const router = useRouter()
let { page = 1,keywords } = router.query
const {jobs,count,resPerPage} = listings
let queryParams;
if(typeof window !== 'undefined'){
  queryParams = new URLSearchParams(window.location.search)
}
const handlePageChange = (pageNumber) => {
  if(queryParams.has('page')){
    queryParams.set('page',pageNumber)
  } else {
    queryParams.append('page',pageNumber)
  }
  router.push({
    search: queryParams.toString()
  })
}
  return (
    <div>
     <Navbar/>
    <Filters/>
      {listings.jobs.map((listing) => (
        <>
         <Listings listing={listing}/>
        </>
      ))}
      <div className='text-center  '>
        {resPerPage < count && (
          <Pagination
          className='flex border-t border-gray-200 bg-white px-4 py-3 sm:px-6 rounded-lg'
            activePage={page}
            innerClass="flex justify-center"
            itemsCountPerPage={resPerPage}
            totalItemsCount={count}
            onChange={handlePageChange}
            nextPageText={'Next'}
            prevPageText={'Prev'}
            firstPageText={'First'}
            lastPageText={'Last'}
            itemClass="relative z-10 inline-flex items-center border border-indigo-500 bg--500 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
            linkClass="flex"
          />
        )}
        </div>
    </div>
  )
}
export const getServerSideProps = async ({query}) => {
  const keywords = query.keywords || ''
  const location = query.location || ''
  const pages = query.page || ''
  const queryStr = `?keywords=${keywords}&location=${location}&page=${pages}`
  const res = await axios.get(`${process.env.API_URL}/api/jobs${queryStr}`)
  const listings = await res.data
  return {
    props: {
      listings,
    },
  }
}