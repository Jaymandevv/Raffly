import { useWatchContractEvent } from "wagmi";
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from "../ui/table";
import PlayerRow from "./player-row";
import { usePlayersList } from "@/lib/raffle";
import { CONTRACT_ADDRESS } from "@/lib/constant";
import abi from "@/abi/Raffly.json"
import { useEffect } from "react";



function PlayersList() {

     const { data: players, refetch } = usePlayersList()

     useWatchContractEvent({
          address: CONTRACT_ADDRESS,
          abi,
          eventName: "RaffleEntered",
          onLogs: () => {
               refetch()
          },
     });
     useWatchContractEvent({
          address: CONTRACT_ADDRESS,
          abi,
          eventName: "WinnerPicked",
          onLogs: () => {
               refetch()
          },
     });

     useEffect(() => {
          const intervalId = setInterval(() => {
               refetch();
          }, 60_000);

          return () => clearInterval(intervalId);
     }, [refetch]);


     return (
          <Table className="overflow-x-scroll h-full">
               <TableCaption className="mt-auto">A list of Players that entered the Raffle.</TableCaption>
               <TableHeader>
                    <TableRow>
                         <TableHead className=""></TableHead>
                         <TableHead className="w-[100px]">Player</TableHead>
                         <TableHead>Time</TableHead>
                         <TableHead>Entrance Fee</TableHead>
                    </TableRow>
               </TableHeader>
               <TableBody>
                    {players && players.map((player, index) => (
                         <PlayerRow player={player} index={index} key={index} />
                    ))}
               </TableBody>
          </Table>
     )
}


export default PlayersList;