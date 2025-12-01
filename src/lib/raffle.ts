import { useReadContract } from "wagmi";
import abi from "../abi/Raffly.json";
import { CONTRACT_ADDRESS } from "./constant";
import { useQuery } from "@tanstack/react-query";
import { config } from "@/wagmi";
import { readContract } from "@wagmi/core";

export function useRaffleRead(functionName: string) {
  const result = useReadContract({
    abi,
    address: CONTRACT_ADDRESS,
    functionName,
  });

  return result;
}

export function usePlayersList() {
  const data = useQuery({
    queryKey: ["players"],
    queryFn: async () => {
      const data = await readContract(config, {
        address: CONTRACT_ADDRESS as `0x${string}`,
        abi: abi,
        functionName: "getPlayers",
      });
      return data as {
        playerAddress: string;
        amountPaid: bigint;
        timeEntered: bigint;
      }[];
    },
    refetchInterval: 10_000,
  });

  return data;
}
