import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';
import s from './qrCodeGenerator.module.css'
import { GENERATE_DATA } from '../../constants';

export const QrCodeGenerator = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState(''); 
    
   const onClickHandler= ()=>{
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA)) || [];
        localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]))
      setResult(value);
      setValue('');
    }

    const onChangeHandler = (event) => {
        setValue(event.target.value)
        setResult('');

    }

    return (
        <div className={s.container}>
            <input
             type="text"
             placeholder='Введите текст...'
             onChange={onChangeHandler}
             value={value}
             className={s.input}
            />
            <button type='button' onClick={onClickHandler}>Сгенерировать QR</button>
            {result && <div className={s.qrWrapper}><QRCodeSVG value={result} /></div> }

        </div>
    );
};