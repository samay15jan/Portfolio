import React from "react";

const SVG = ({ filteredUrl }) => {
  return (
    <>
      <svg
        className="absolute"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="90"
          cy="20"
          r="20"
          stroke="gray"
          strokeWidth="0.2"
          fill="none"
        />
        <svg
          className="rocket"
          width="2"
          height="69"
          x="75"
          y="5"
          viewBox="0 0 64 64"
        >
          <path
            fill={filteredUrl.primaryColor}
            d="M63.029,42.285l-13.08-7.848c-0.175,4.299-0.787,8.26-1.494,11.562H64v-2
    C64,43.297,63.632,42.646,63.029,42.285z"
          />
          <path
            fill={filteredUrl.primaryColor}
            d="M46.905,52H62c1.104,0,2-0.896,2-2v-2H47.999C47.625,49.537,47.245,50.889,46.905,52z"
          />
          <path
            fill={filteredUrl.primaryColor}
            d="M14.051,34.438l-13.08,7.848C0.368,42.646,0,43.297,0,44v2h15.545
    C14.839,42.697,14.226,38.737,14.051,34.438z"
          />
          <path
            fill={filteredUrl.primaryColor}
            d="M0,48v2c0,1.104,0.896,2,2,2h15.095c-0.34-1.111-0.72-2.463-1.093-4H0z"
          />
          <path
            fill={filteredUrl.primaryColor}
            d="M32,64c2.06,0,4.239-2.343,4.837-6h-9.672C27.763,61.656,29.94,64,32,64z"
          />
          <path
            fill={filteredUrl.secondaryColor}
            d="M33.109,0.336C32.773,0.112,32.387,0,32,0s-0.773,0.112-1.109,0.336C23.692,5.135,16,15.974,16,32
    c0,4.399,0.516,8.508,1.181,12h29.639C47.484,40.508,48,36.399,48,32C48,15.974,40.308,5.135,33.109,0.336z M32,30
    c-3.313,0-6-2.687-6-6s2.687-6,6-6s6,2.687,6,6S35.313,30,32,30z"
          />
          <circle fill={filteredUrl.primaryColor} cx="32" cy="24" r="4" />
          <path
            fill={filteredUrl.secondaryColor}
            d="M20.143,54.742C20.447,55.502,21.183,56,22,56h20c0.817,0,1.553-0.498,1.857-1.258
    c0.097-0.24,1.427-3.62,2.554-8.742H17.589C18.716,51.122,20.046,54.502,20.143,54.742z"
          />
        </svg>
      </svg>
      <style>
        {`
      .rocket {
        transform-origin: 90px 20px;
        animation: orbit 15s linear infinite;
      }
      @keyframes orbit {
        0% { transform: rotate(0deg) translate(20px); }
        100% { transform: rotate(360deg) translate(20px); }
      }
    `}
      </style>
    </>
  );
};

export default SVG;
