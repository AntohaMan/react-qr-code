import { GENERATE_DATA } from "../constants";
import { QRCodeSVG } from 'qrcode.react';


export const GenerateHistory = () => {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA)) || [];
    return (
        <div>
            {data.map((el, i) => (<p key={i}>{el} <QRCodeSVG value={el} /></p> ))}
        </div>
    );
}