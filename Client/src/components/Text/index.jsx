import React from "react";

const sizeClasses = {
  txtPoppinsBold15: "font-bold font-poppins",
  txtInterRegular21: "font-inter font-normal",
  txtInterRegular10: "font-inter font-normal",
  txtInterMedium12: "font-inter font-medium",
  txtInterSemiBold15: "font-inter font-semibold",
  txtInterMedium13: "font-inter font-medium",
  txtInterLight11Gray900: "font-inter font-light",
  txtInterLight11: "font-inter font-light",
  txtInterLight12: "font-inter font-light",
  txtInterMedium12Gray900: "font-inter font-medium",
  txtInterLight10: "font-inter font-light",
  txtInterRegular44: "font-inter font-normal",
  txtInterRegular22: "font-inter font-normal",
  txtInterRegular33: "font-inter font-normal",
  txtInterRegular45: "font-inter font-normal",
  txtInterRegular35: "font-inter font-normal",
  txtInterRegular36: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
