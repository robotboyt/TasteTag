import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const Home = () => {
  const [qrcode, setQrcode] = useState(false);

  const getQrCode = () => {
    setQrcode(!qrcode);
  };

  return (
    <div>
      Home
      <div>
        <button onClick={getQrCode}>get qr</button>
        {qrcode ? (
          <QRCodeCanvas level="H" size={200} value="http://localhost:5173/" />
        ) : null}
      </div>
    </div>
  );
};

export default Home;
