import React, { useState } from 'react';

const PassportGenerator = () => {
  const [passportNumber, setPassportNumber] = useState('');

  const generateRandomString = (length) => {
   let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%$!@*&^@#$^';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
                              
  const generatePassportNumber = () => {
    const  newPassportNumber = setPassportNumber("");
    setPassportNumber(newPassportNumber);
  };

  return (
    <div >
      <input type='number' value={setPassportNumber} onClick={setPassportNumber} ></input>
      <button onClick={generatePassportNumber}>Kod Yaz</button>
      <p>Kodun: {passportNumber}</p>
    </div>
  );
};

export default PassportGenerator;