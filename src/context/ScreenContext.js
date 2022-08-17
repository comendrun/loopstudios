import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const ScreenContext = createContext();

export function ScreenProvider({ children }) {
  const [scrollTopValue, setScrollTopValue] = useState(false);

  const scrollingValue = (headingElement) => {
    const scroll = document.documentElement.scrollTop;
    setScrollTopValue(scroll);
  };

  window.addEventListener("scroll", scrollingValue);

  return (
    <ScreenContext.Provider value={{ scrollTopValue, scrollingValue }}>
      {children}
    </ScreenContext.Provider>
  );
}

export default ScreenContext;
