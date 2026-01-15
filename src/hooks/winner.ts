import { useAccount, useWatchContractEvent } from "wagmi";
import { useState } from "react";
import abi from "@/abi/Raffly.json";
import { CONTRACT_ADDRESS } from "@/lib/constant";
import type { Log } from "viem";

type WinnerPickedLog = Log & {
  args: {
    recentWinner: `0x${string}`;
  };
};

export function useWinnerModal() {
  const { address } = useAccount();

  const [showWinnerModal, setShowWinnerModal] = useState(false);
  const [showLoserModal, setShowLoserModal] = useState(false);

  useWatchContractEvent({
    address: CONTRACT_ADDRESS,
    abi,
    eventName: "WinnerPicked",
    onLogs(logs) {
      if (!address) return;

      const log = logs[0] as WinnerPickedLog;

      const winner = log.args.recentWinner as string;
      const roundId = log.blockNumber !== null ? log.blockNumber.toString() : "pending";

      const storageKey = `raffly-winner-${roundId}-${address}`;

      // already shown → do nothing
      if (localStorage.getItem(storageKey)) return;

      if (winner.toLowerCase() === address.toLowerCase()) {
        setShowWinnerModal(true);
      } else {
        setShowLoserModal(true);
      }

      localStorage.setItem(storageKey, "shown");
    },
  });

  return {
    showWinnerModal,
    setShowWinnerModal,
    showLoserModal,
    setShowLoserModal,
  };
}
