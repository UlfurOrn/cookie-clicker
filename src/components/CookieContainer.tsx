import cookieLogo from "../assets/cookie.png";
import { useState } from "react";

function CookieContainer() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Cookies: {count}</h1>
      <img src={cookieLogo} alt="Cookie" onClick={() => setCount(count + 1)} />
    </div>
  );
}

export default CookieContainer;
