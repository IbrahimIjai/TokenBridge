import React from "react";
import { NUMBER_REGEX } from "../Swap/utils";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { formatUnits, parseEther } from "viem";
import { useAccount } from "wagmi";
import { useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

type SwapButtonProps = {
  networkIn: number;
  networkOut: number;
  tokenAmount: string;
};

const BridgeButton: React.FC<SwapButtonProps> = ({ networkIn, networkOut, tokenAmount }) => {
  const { isConnected, isConnecting, address } = useAccount();
  const { openConnectModal } = useConnectModal();
  const {
    data: cusTokenBalance,
    // isError,
    // isLoading: isCusTokenLoading,
  } = useScaffoldContractRead({ contractName: "customToken", functionName: "balanceOf", args: [address] });

  const inSufficientFunds = cusTokenBalance && cusTokenBalance < Number(tokenAmount);

  //   const { writeAsync, isLoading } = useScaffoldContractWrite({
  //     contractName: "Bridge",
  //     functionName: "deposit",
  //     args: [address, tokenAmount, networkOut],
  //   });

  const { writeAsync, isLoading } = useScaffoldContractWrite({
    contractName: "Bridge",
    functionName: "deposit",
    address: "0x4060d5D726D435CF32899ac5c7f633Ff4c9feaD2",
    args: [address as string, Number(tokenAmount), networkOut],
  });

  return (
    <>
      {isConnected && tokenAmount !== "" ? (
        <button
          className="w-full py-2 text-center rounded-lg cursor-pointer btn btn-secondary"
          onClick={() => writeAsync?.()}
          disabled={
            isLoading ||
            !NUMBER_REGEX.test(tokenAmount.toString()) ||
            inSufficientFunds ||
            tokenAmount.toString() === ""
          }
        >
          {isLoading ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : !tokenAmount ? (
            <span>Enter Amount</span>
          ) : (
            <span>{inSufficientFunds ? "Insufficient Balance" : "Bridge Now"}</span>
          )}
        </button>
      ) : (
        <button
          onClick={openConnectModal}
          disabled={isConnecting}
          className="w-full py-2 text-center rounded-lg cursor-pointer btn btn-secondary"
        >
          {isConnecting && <span className="loading loading-spinner loading-sm"></span>}
          <span>Connect Wallet</span>
        </button>
      )}
    </>
  );
};

export default BridgeButton;
