import { formatDistanceToNow } from "date-fns"
import { TableCell, TableRow } from "../ui/table"
import { formatEther } from "viem";
interface PlayerRowProp {
     player: IPlayer;
     index: number
}

function timeAgo(timestamp: bigint) {
     return formatDistanceToNow(Number(timestamp) * 1000, { addSuffix: true })
}
function PlayerRow({ player, index }: PlayerRowProp) {

     console.log(typeof index)
     return (<TableRow key={player.playerAddress}>
          <TableCell className="font-medium">{index + 1}</TableCell>
          <TableCell className="font-medium">{player.playerAddress}</TableCell>
          <TableCell>{timeAgo(player.timeEntered)}</TableCell>
          <TableCell>{formatEther(player.amountPaid)} ETH</TableCell>
     </TableRow>)
}

export default PlayerRow