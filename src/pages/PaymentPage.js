import React, { useState } from 'react';
import masterCard from "../assets/mastercard.svg"
import visa from "../assets/visa.svg"
import { Link } from "react-router-dom"
import Nav from '../components/nav';

const PaymentPage = (props) => {
    const { price, setPrice } = props;

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsEmailValid(validateEmail(inputEmail));
  };

  const handleExpiryDateChange = (e) => {
    const input = e.target.value.replace(/\D/g, ''); 
    if (input.length > 2) {
      
      setExpiryDate(input.slice(0, 2) + '/' + input.slice(2));
    } else {
      setExpiryDate(input);
    }
  };

  const handleCardNumberChange = (e) => {
    const input = e.target.value.replace(/\D/g, ''); 
    const formattedInput = input.replace(/(\d{4})(?=\d)/g, '$1 '); 
    setCardNumber(formattedInput);
  };

  const handlePaymentSubmit = () => {
    console.log('Payment Information:', {
      email,
      cardNumber,
      expiryDate,
      cvv,
      cardholderName,
    });
  };

  const isFormValid = () => {
    return (
      email !== '' &&
      cardNumber !== '' &&
      expiryDate !== '' &&
      cvv !== '' &&
      cardholderName !== ''
    );
  };

  return (
    <div className='flex flex-col  items-center h-screen bg-gray-950 '>
        <div  className='w-full bg-gray-900' >
             <Nav/>
        </div>
       
      <div className='w-96  flex flex-col mt-14 border border-blue-800 rounded-sm p-5 items-center gap-3 '>
        <div>
          <h1 className='text-3xl text-white'>Pay with card</h1>
        </div>
        <div className='flex flex-col text-white '>
          <label>Email :</label>
          <input
            className={`border text-black rounded-md ${isEmailValid ? '' : 'border-red-500'}`}
            type="text"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
          {!isEmailValid && (
            <p className="text-red-500">Please enter a valid email address.</p>
          )}
        </div>
        <div className='flex flex-col text-white'>
          <label>Card Number :</label>
          <div className=' relative '>
            <div>
              <input
                className="border rounded-md py-1 text-black"
                type="text"
                name="cardNumber"
                value={cardNumber}
                onChange={handleCardNumberChange}
                maxLength="19" 
                placeholder="xxxx xxxx xxxx xxxx" 
                required
              />
            </div>


            <div className="visa transform  text-black flex absolute  right-1 top-2"> {/* Adjust the position of the icons */}
              {cardNumber.startsWith('4') && <img src={visa} alt="Visa" className="w-7 border rounded-sm " />}
              {cardNumber.startsWith('5') && <img src={masterCard} alt="Mastercard" className="w-7 border rounded-sm" />}
            </div>

          </div>


        </div>
        <div className='flex flex-col text-white'>
          <label>Expiry Date :</label>
          <input
            className='border rounded-md text-black'
            type="text"
            name="expiryDate"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            maxLength="5"
            pattern="\d\d/\d{4}"
            placeholder="MM/YYYY"
            required
          />
        </div>
        <div className='flex flex-col text-white'>
          <label>CVV :</label>
          <input className='border rounded-md text-black' maxLength={3} type="text" name="cvv" value={cvv} onChange={(e) => setCvv(e.target.value)} />
        </div>
        <div className='flex flex-col text-white'>
          <label>Cardholder Name :</label>
          <input className='border rounded-md text-black' type="text" name="cardholderName" value={cardholderName} onChange={(e) => setCardholderName(e.target.value)} />
        </div>
        <div className='flex flex-col'>
          <label className='flex justify-center text-red-700'>Total Price :</label>
          <div className='text-green-600 '> {price} </div>
        </div>
        <div>
          {isFormValid() ? (
            <Link
              to="/ordered"
              className='text-white border bg-gray-700 hover:bg-gray-600 px-2 rounded-md p-1 font-bold'
              onClick={handlePaymentSubmit}
            >
              Submit Payment
            </Link>
          ) : (
            <div className='text-white border bg-gray-700 opacity-50 cursor-not-allowed px-2 rounded-md p-1 font-bold'>
              Submit Payment
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PaymentPage;
