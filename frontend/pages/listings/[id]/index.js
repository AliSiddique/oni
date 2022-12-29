import React from 'react'
import SingleListings from '../../../components/listings/single'
import axios from 'axios'

export default function OneListing({listing}) {

  return (
    <div>
    

        <SingleListings listing={listing} />
    </div>
  )
}
export const getServerSideProps = async (context) => {
    const {id} = context.query
    const res = await axios.get(`${process.env.API_URL}/api/job/${id}`)
    const listing = await res.data
    console.log(listing);
    return {
        props: {
        listing,
        },
    }
}