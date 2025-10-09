import { createContext, useContext, useState, ReactNode } from "react";

type Currency = "USD" | "EUR" | "GBP";

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (usdPrice: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const currencyRates = {
  USD: { rate: 1, symbol: "$", label: "United States Dollars" },
  EUR: { rate: 1, symbol: "€", label: "Euros" },
  GBP: { rate: 1, symbol: "£", label: "Great Britain Pounds" },
};

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState<Currency>("USD");

  const formatPrice = (price: number): string => {
    const { symbol } = currencyRates[currency];
    return `${symbol}${price}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
};

export const currencies = [
  { code: "USD" as Currency, label: "United States Dollars" },
  { code: "EUR" as Currency, label: "Euros" },
  { code: "GBP" as Currency, label: "Great Britain Pounds" },
];
