import React,{useState,useEffect} from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import axios from 'axios';
import CheckoutForm from '../stripe/checkout';
const stripePromise = loadStripe('pk_test_51Kdx2kD33nciG82oZggoP6sxVsJM49G67K98kfWrsuMJOvDzGwpo4EdOGeG010gvjv0PRFuz8QNjgWb8EZaHcUHa00eMGTG7pa');// set the address of server

export default function Payment() {
    const [clientSecret, setClientSecret] = useState("");
    useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      axios.post("api/job/sponsor",{}, {
        headers: { 
            "Content-Type": "application/json" 
        },
        body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
      })
        .then((res) => res.data)
        .then((data) => setClientSecret(data.clientSecret));
    }, []);

    const appearance = {
        theme: 'stripe',
      };
      
    const options = {
        // passing the client secret obtained from the server
        clientSecret: clientSecret,
        appearance: appearance,
      };
  return (
    <div>
        {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
            <div className='mx-auto'>
            <CheckoutForm />
            
            </div>
        </Elements>
        )}
 
    </div>


  )
}
