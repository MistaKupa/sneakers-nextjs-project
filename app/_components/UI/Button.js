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
}) {
  const buttonStyles = {
    addToCart:
      "flex items-center justify-center gap-3 w-full bg-newPrimary hover:bg-orangePale active:bg-orangePale py-4 rounded-xl transition-all duration-300",
    quantity:
      "flex items-center justify-around bg-dark-200 w-full py-4 rounded-xl",
    main: "flex items-center justify-center gap-3 w-full bg-newPrimary hover:bg-orangePale active:bg-orangePale py-4 rounded-xl transition-all duration-300",
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
    <button onClick={onClick} className={`${buttonStyles[type]}`}>
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
