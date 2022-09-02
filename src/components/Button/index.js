import React from "react";
import PropTypes from "prop-types";

const variants = { FillWhiteA700: "bg-white_A700 text-red_900" };
const sizes = {
  sm: "lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] p-[27px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className}  ${variants[variant] || ""} ${
        sizes[size] || ""
      } common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf(["FillWhiteA700"]),
  size: PropTypes.oneOf(["sm"]),
};
Button.defaultProps = { className: "", variant: "FillWhiteA700", size: "sm" };

export { Button };
