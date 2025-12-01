import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from "../ui/table";
import PlayerRow from "./player-row";
import { usePlayersList } from "@/lib/raffle";



function PlayersList() {

     const { data: players } = usePlayersList()

     return (
          <Table>
               <TableCaption>A list of Players that entered the Raffle.</TableCaption>
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
               {/* <TableFooter>
                    <TableRow>
                         <TableCell colSpan={3}>Total</TableCell>
                         <TableCell className="text-right">$2,500.00</TableCell>
                    </TableRow>
               </TableFooter> */}
          </Table>
     )
}


export default PlayersList;