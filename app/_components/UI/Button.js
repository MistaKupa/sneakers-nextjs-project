import { IoAdd, IoCartOutline, IoRemove } from "react-icons/io5";

function Button({
  onClick,
  children,
  type,
  iconSize,
  iconColor,
  className,
  increment,
  decrement,
  disabled,
}) {
  const buttonStyles = {
    addToCart:
      "flex items-center justify-center gap-3 w-full bg-newPrimary hover:bg-newPrimaryHover active:bg-newPrimaryHover py-4 rounded-xl transition-all duration-300",
    quantity:
      "flex items-center justify-around bg-dark-200 w-full py-4 rounded-xl",
    main: "flex items-center justify-center gap-3 w-full bg-newPrimary hover:bg-newPrimaryHover active:bg-newPrimaryHover py-4 rounded-xl transition-all duration-300",
  };

  const icons = {
    addToCart: (
      <IoCartOutline size={iconSize} className={className} color={iconColor} />
    ),
    increment: (
      <IoAdd size={iconSize} className={className} color={iconColor} />
    ),
    decrement: (
      <IoRemove size={iconSize} className={className} color={iconColor} />
    ),
  };

  return (
    <button
      onClick={onClick}
      className={`${buttonStyles[type]} ${
        disabled
          ? "cursor-not-allowed opacity-75 hover:bg-newPrimary"
          : "cursor-pointer"
      }`}
      disabled={disabled}
    >
      {type === "addToCart" && (
        <>
          <span>{icons[type]}</span>
          {children}
        </>
      )}

      {type === "quantity" && (
        <>
          <span onClick={decrement}>{icons.decrement}</span>
          {children}
          <span onClick={increment}>{icons.increment}</span>
        </>
      )}

      {type === "main" && <>{children}</>}
    </button>
  );
}

export default Button;
