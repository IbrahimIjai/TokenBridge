import {, useState } from "react";
import { NUMBER_REGEX } from "../Swap/utils";
import { InputBase } from "../scaffold-eth";
import BridgeButton from "./BridgeButton";
import NetworksSelectBoxIn from "./NetworkSelectBoxIn";
import NetworksSelectBoxOut from "./NetworkSelectBoxOut";
import { useNetwork } from "wagmi";
import { enabledChains } from "~~/services/web3/wagmiConnectors";

export interface Appstate {
  networkIn: number;
  networkOut: number;
  tokenAmount: string;
}

const Bridge2 = () => {
  const { chain: connectedChain } = useNetwork();
  const [value, setValue] = useState<Appstate>({
    networkIn: connectedChain?.id ?? 1,
    networkOut: 56,
    tokenAmount: "",
  });

  console.log(enabledChains);
  const handleTokenAmountChange = (amount: string) => {
    setValue(prevState => ({
      ...prevState,
      tokenAmount: amount,
    }));
  };

  const handleSetNetwork = (networkId: number, isnetWorkIn: boolean) => {
    if (isnetWorkIn && networkId == value.networkOut) {
      const prevNetworkIn = value.networkIn;
      setValue(prevState => ({
        ...prevState,
        networkIn: networkId,
        networkOut: prevNetworkIn,
      }));
      return;
    }

    isnetWorkIn
      ? setValue(prevState => ({
          ...prevState,
          networkIn: networkId,
        }))
      : setValue(prevState => ({
          ...prevState,
          networkOut: networkId,
        }));
  };


  return (
    <section className="min-h-[400px] flex flex-col gap-8 rounded-lg bg-base-100 border border-gray-400 dark:border-gray-700 p-2 lg:w-[480px] max-w-full">
      <NetworksSelectBoxIn setterFun={handleSetNetwork} networkIn={value.networkIn} networkOut={value.networkOut} />
      <NetworksSelectBoxOut setterFun={handleSetNetwork} networkIn={value.networkIn} networkOut={value.networkOut} />

      <div className="px-2 py-4 bg-primary/30 rounded-2xl">
        <InputBase
          placeholder="0.00"
          darkText
          value={value.tokenAmount}
          onChange={e => handleTokenAmountChange(e)}
          error={
            Boolean(value.tokenAmount) &&
            !NUMBER_REGEX.test(value.tokenAmount?.toString() ? value.tokenAmount?.toString() : "")
          }
        />
      </div>

      <BridgeButton tokenAmount={value.tokenAmount} networkIn={value.networkIn} networkOut={value.networkOut} />
    </section>
  );
};

export default Bridge2;
