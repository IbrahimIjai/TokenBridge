
import { useAccount } from "wagmi";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

export function getCustomTokenBalances() {
  const { address } = useAccount();
  const {
    data: balanceData,
    isError,
    isLoading,
  } = useScaffoldContractRead({ contractName: "WETH9", functionName: "balanceOf", args: [address] });

  return { data: balanceData, isError, isLoading };
}
