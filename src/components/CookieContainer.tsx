import cookieLogo from "/cookie.png";


interface CookieContainerProps {
    cookieCount: number;
    onClick: () => void;
}

function CookieContainer({cookieCount, onClick}: CookieContainerProps) {
  return (
    <div>
      <h1>Cookies: {cookieCount}</h1>
      <img src={cookieLogo} alt="Cookie" onClick={onClick} />
    </div>
  );
}

export default CookieContainer;
