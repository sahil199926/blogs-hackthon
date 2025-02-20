"use client";
import { ShoppingCart, ChevronDown } from "lucide-react";

const FloatingBar = () => {
  const currenciesWithSymbol = [
    { currency: "USD", symbol: "$" },
    { currency: "INR", symbol: "₹" },
    { currency: "JYP", symbol: "¥" },
    { currency: "EUR", symbol: "€" },
    { currency: "GBP", symbol: "£" },
  ];

  const totalCartPrice = 434000;
  const licenseType = "Team license";

  const formatCurrency = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <section className="fixed bottom-0 left-0 right-0 z-10 bg-neutral-950 px-4 py-3 text-white">
      <div className="mx-auto flex w-[95%] min-w-max max-w-[1440px] flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex w-full flex-row items-start justify-between gap-2 md:flex-col">
          <div className="flex items-start space-x-2 md:items-center">
            <label htmlFor="currency-select" className="text-Body-Medium-16">
              Price
            </label>

            {/* 
              Custom select wrapper:
              - relative container for the absolute ChevronDown
            */}
            <div className="relative inline-block">
              <select
                id="currency-select"
                className="appearance-none border-none bg-gray-800 px-2 py-1 pr-8 text-white outline-none ring-1 ring-white">
                {currenciesWithSymbol.map((currency) => (
                  <option key={currency.currency} value={currency.currency}>
                    {currency.symbol} {currency.currency}
                  </option>
                ))}
              </select>

              {/* Custom ChevronDown icon */}
              <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-300" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <span className="text-Display-Semibold-20">
              ₹{formatCurrency(totalCartPrice)}
            </span>
            <span className="hidden px-1 md:block">|</span>
            <span className="text-Body-Regular-14 opacity-80">
              {licenseType}
            </span>
          </div>
        </div>

        <div className="flex w-full items-center justify-end gap-2 text-Link-medium-16">
          <button className="flex w-1/2 flex-row items-center justify-center gap-2 bg-Accent-Orange-50 px-3 py-4 text-Accent-Orange-950 transition hover:bg-orange-300 md:w-fit md:px-6">
            <ShoppingCart className="h-5 w-5" />
            <span>Add To Cart</span>
          </button>
          <button className="w-1/2 bg-Accent-Orange-950 p-3 py-4 text-white transition hover:bg-orange-700 md:w-fit md:px-11">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default FloatingBar;
