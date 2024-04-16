import CookieContainer from "./CookieContainer";
import {useState} from "react";

function CookieClicker() {
  const [cookieCount, setCookieCount] = useState(0);

  return (
    <div>
      <CookieContainer cookieCount={cookieCount} onClick={() => setCookieCount(cookieCount + 1)}/>
    </div>
  );
}

export default CookieClicker;
