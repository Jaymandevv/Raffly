
import { usePlayersList, useRaffleRead } from "@/lib/raffle";
import How from "./how";
import EnterRaffleDialog from "./raffle-dialog";
import Timer from "./timer";
import { CONTRACT_ADDRESS } from "@/lib/constant";
import { useAccount, useBalance, useWatchContractEvent } from "wagmi";
import { useEffect } from "react";
import { Loader2Icon } from "lucide-react";
import abi from "@/abi/Raffly.json"


const RAFFLE_STATUS = ["Open", "Calculating"]


function RaffleInfo() {

     const { data: players } = usePlayersList()
     const { data: status, refetch: refetchStatus } = useRaffleRead("getRaffleState")
     const { data, isLoading, refetch, isRefetching } = useBalance({
          address: CONTRACT_ADDRESS,
     })
     const { address } = useAccount()
     const isPlayer = players?.map(player => player.playerAddress).includes(address as string);

     useWatchContractEvent({
          address: CONTRACT_ADDRESS,
          abi,
          eventName: "WinnerPicked",
          onLogs: () => {
               refetchStatus();
          },
     });


     useEffect(() => {
          const interval = setInterval(() => {
               refetch();
          }, 10000);

          return () => clearInterval(interval);
     }, [refetch]);

     return (<div className="bg-gradient-to-br from-black via-[#0B5FFF] to-[#093B8D] flex justify-between rounded-lg items-center px-4 py-3 mt-6 text-white">
          <div className="space-y-2">
               <div className="flex gap-4">
                    <div>
                         {!isLoading || !isRefetching ? <p className="text-xl font-semibold text-white">
                              {data?.formatted} {data?.symbol}
                         </p> : <Loader2Icon className="animate-spin" />}
                         <p className="text-sm">Raffle pool</p>
                    </div>

                    <div className="self-start flex items-center gap-1">
                         <div className={`h-2 w-2 rounded-full ${RAFFLE_STATUS[status as number] === "Open" ? "bg-green-500" : "bg-rose-500"}`}></div>
                         <p>{RAFFLE_STATUS[status as number]}</p>
                    </div>

               </div>
               <div className="flex gap-2">
                    <How />
                    <EnterRaffleDialog status={status as number} isPlayer={isPlayer as boolean} />
               </div>
          </div>

          <div>
               <Timer status={status} />
          </div>
     </div >)
}

export default RaffleInfo;