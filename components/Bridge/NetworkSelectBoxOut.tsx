import React from "react";
import Image from "next/image";
import { Appstate } from ".";
import { extendprops } from "./NetworkSelectBoxIn";
import { ImageMap, bridge_chains_data, image_map, networkname_map } from "./utils";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

// import { useDarkMode } from "usehooks-ts";

const NetworksSelectBoxOut: React.FC<Omit<Appstate, "tokenAmount"> & extendprops> = ({
  tokenAmount,
  networkOut,
  networkIn,
  setterFun,
}) => {
  return (
    <div>
      <div className="py-2">
        <p>Assets To</p>
      </div>
      <div className="px-4 py-3 cursor-pointer rounded-2xl bg-primary/40">
        <div className="w-full dropdown dropdown-bottom">
          <div tabIndex={0} role="button" className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 overflow-hidden rounded-full">
                <Image src={image_map[networkOut as keyof ImageMap]} fill objectFit="cover" alt={`NetworkIcon`} />
              </div>
              <p>{networkname_map[networkOut as keyof ImageMap]}</p>
            </div>
            <ChevronDownIcon className="w-6 h-6" />
          </div>
          <ul tabIndex={0} className="dropdown-content gap-4 p-3 z-[1] menu shadow bg-base-100 rounded-box w-full">
            {bridge_chains_data
              .filter(item => item.id !== networkIn)
              .map((item, i) => {
                return (
                  <div key={i} className="flex items-center justify-between" onClick={() => setterFun(item.id, false)}>
                    <div className="flex items-center gap-3">
                      <div className="relative w-8 h-8 overflow-hidden rounded-full">
                        <Image src={item.url} fill objectFit="cover" alt={`NetworkIcon`} />
                      </div>
                      <p>{item.chainName}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronDownIcon className="w-6 h-6" />
                    </div>
                  </div>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NetworksSelectBoxOut;
