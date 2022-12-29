import axios from 'axios'
import React, { useEffect } from 'react'
import { useReducer } from 'react'
import {getCookie} from 'cookies-next'
import { fetchUserInfo, getToken, getUserInfo } from '../../../redux/slices/auth/authSlice'
import { useAppDispatch } from '../../../redux/store/store'
import { useSelector } from 'react-redux'
export default function CreateListing() {
    const dispatch = useAppDispatch();
  const user = useSelector(getUserInfo);
const token = useSelector(getToken)
console.log(token);
  useEffect(() => {
    dispatch(fetchUserInfo());
  }, [dispatch]);


const [formaData, setFormData] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
        title: 'from the frontend',
        description: 'idk',
        location: '16 hounslow gardens',
        price: '24333',
        email: 'alis@gmail.com',
        salary: '67',
        address: '16 hounslow gardens',
        bedrooms: '2',
        bathrooms: '3',
        garage: '5',
        sqft: '544',
        lotSize: '43345',
        yearBuilt: '2022',
        daysOnMarket: '334',
        hoaPerMonth: '4434',
        property_type: 'flat',
        status: 'for sale',
    }
)
const handleSubmit = (e) => {

    e.preventDefault()
    console.log(formaData)
    try {
         axios.post(`${process.env.API_URL}/api/job/create/`,formaData,{
            headers: {
                'Authorization': `Token ${token}`
            }
         })
         console.log(token + "after");
    } catch (error) {
        console.log(error)
    }


}
  return (
    <div>
        {user.username}
        <form >
            <input
             type="text" 
             placeholder="Title"
                value={formaData.title}
                onChange={e => setFormData({title: e.target.value})}
             />
            <input type="text" placeholder="Description"
                value={formaData.description}
                onChange={e => setFormData({description: e.target.value})}
            />
            <input
             type="text"
              placeholder="Location"
                value={formaData.location}
                onChange={e => setFormData({location: e.target.value})}

              />
            <input 
            type="text" 
            placeholder="Price"

            value={formaData.price}
            onChange={e => setFormData({price: e.target.value})}

            />
 
            <input 
            type="text" 
            placeholder="Email"
            value={formaData.email}
            onChange={e => setFormData({email: e.target.value})}
            />
 
            <input
             type="text"
              placeholder="Salary"
                value={formaData.salary}
                onChange={e => setFormData({salary: e.target.value})}
              />
              
            <input
             type="text"
              placeholder="Address"
                value={formaData.address}
                onChange={e => setFormData({address: e.target.value})}
              />
            <input 
            type="text" 
            placeholder="Bedrooms"
                value={formaData.bedrooms}
                onChange={e => setFormData({bedrooms: e.target.value})}
            />
            <input
             type="text"
              placeholder="Bathrooms"
              value={formaData.bathrooms}
                onChange={e => setFormData({bathrooms: e.target.value})}
              />
            <input
             type="text"
              placeholder="Garage"
              value={formaData.garage}
                onChange={e => setFormData({garage: e.target.value})}
              />
              
            <input type="text" placeholder="Sqft"
            value={formaData.sqft}
                onChange={e => setFormData({sqft: e.target.value})}
            />
            <input
             type="text"
              placeholder="Lot Size"
                value={formaData.lotSize}
                onChange={e => setFormData({lotSize: e.target.value})}
              />
            <input 
            type="text" 
            placeholder="Year Built"
            value={formaData.yearBuilt}
                onChange={e => setFormData({yearBuilt: e.target.value})}
            />
            <input type="text" placeholder="Days On Market"
            value={formaData.daysOnMarket}
                onChange={e => setFormData({daysOnMarket: e.target.value})}
            />
            <input
             type="text"
              placeholder="HOA Per M
              onth"
              value={formaData.hoaPerMonth}
                onChange={e => setFormData({hoaPerMonth: e.target.value})}
              />
            <input
            type="text" 
            placeholder="Property T
            ype"
            value={formaData.property_Type}
                onChange={e => setFormData({propertyType: e.target.value})}
            />
            <button onClick={handleSubmit}>Submit</button>

        </form>
    </div>
  )
}
