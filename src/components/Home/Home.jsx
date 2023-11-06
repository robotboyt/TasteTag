import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const Home = () => {
  const [qrcode, setQrcode] = useState(false);
  const [url, setUrl] = useState(null);

  const getQrCode = () => {
    setQrcode(!qrcode);
  };

  return (
    <div>
      Home
      <div>
        <input
          type="text"
          onChange={(e) => setUrl(e.target.value)}
          value={url}
        />
        <button onClick={getQrCode}>get qr</button>
        {qrcode ? <QRCodeCanvas level="H" size={200} value={url} /> : null}
      </div>
    </div>
  );
};

export default Home;
