import React from "react";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

// import { useDarkMode } from "usehooks-ts";

const NetworksSelectBox: React.FC = () => {
  //   const { isDarkMode } = useDarkMode();

  return (
    <div>
      <p>Assets from</p>
      <div className="px-4 py-3 cursor-pointer rounded-2xl bg-primary/40">
        <div className="w-full dropdown dropdown-bottom">
          <div tabIndex={0} role="button" className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 overflow-hidden rounded-full">
                <Image src={bsc} fill objectFit="cover" alt={`NetworkIcon`} />
              </div>
              <p>Binance Smart Chain</p>
            </div>
            <ChevronDownIcon className="w-6 h-6" />
          </div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NetworksSelectBox;

const bsc = "https://raw.githubusercontent.com/sushiswap/list/master/logos/network-logos/bsc.jpg";
const polygon = "https://raw.githubusercontent.com/sushiswap/list/master/logos/network-logos/polygon.jpg";
const eth = "https://raw.githubusercontent.com/sushiswap/list/master/logos/network-logos/ethereum.jpg";
