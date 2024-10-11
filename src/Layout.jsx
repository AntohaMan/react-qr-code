import { QrCodeGenerator } from  "./Components/Generate/QrCodeGenerator";
import { QrCodeScanner } from "./Components/Scan/QrCodeScanner";
import { Navigation } from "./Components/Navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import { GenerateHistory } from "./Components/GenerateHIstory";
import { ScanHistory } from "./Components/ScanHistory";

const Layout = () => {
    return (
        <div>
           <Navigation/>
            <Routes>                
                <Route path="/generate" element={<QrCodeGenerator/>} />
                <Route path="/scan" element={ <QrCodeScanner/>} />
                <Route path="/generateHistor" element={ <GenerateHistory/>} />
                <Route path="/scanHistory" element={ <ScanHistory/>} />

            </Routes>
            
           
        </div>
    );
};
export {Layout};

