import React, { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "./ui/dialog"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { useWriteContract } from "wagmi"
import { parseEther } from "viem"
import { CONTRACT_ADDRESS } from "@/lib/constant"
import abi from "@/abi/Raffly.json"
import TxHashDialog from "./txhashDialog"



function EnterRaffleDialog({ status, isPlayer }: { status: number, isPlayer: boolean }) {
     const [open, setOpen] = useState(false)
     const [openHash, setOpenHash] = useState(false)
     const [value, setValue] = useState("")
     const [txhash, setTxHash] = useState("")




     const { writeContractAsync, isPending } = useWriteContract()


     const _handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          setValue(e.target.value)
     }


     async function handleEnterRaffle() {
          if (!value) return
          try {
               const transaction = await writeContractAsync({
                    address: CONTRACT_ADDRESS,
                    abi,
                    functionName: 'enterRaffle',
                    value: parseEther(value),
               })
               setOpen(false)
               setTxHash(transaction)

               setOpenHash(true)
          }

          catch (err) {
               console.error('Transaction cancelled or failed:', err)
          }
     }

     return (
          <>
               <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger disabled={status === 1 || isPlayer}>
                         <Button className="!text-xs bg-black mobile:text-base cursor-pointer" disabled={status === 1 || isPlayer}>Enter Raffle</Button>
                    </DialogTrigger>
                    <DialogContent className="bg-white">
                         <DialogHeader>
                              Enter Raffle
                         </DialogHeader>
                         <div className="flex flex-col gap-4">
                              <div className="space-y-2">
                                   <Label htmlFor="amount">Amount</Label>
                                   <Input placeholder="Enter amount" id="amount" onChange={(e) => _handleOnChange(e)} value={value} />
                              </div>
                              <Button onClick={handleEnterRaffle} disabled={isPending} className="bg-black text-white self-start">{isPending ? "Entering.." : "Enter"}</Button>
                         </div>


                    </DialogContent>
               </Dialog>
               <TxHashDialog hash={txhash ?? ""} openHash={openHash} setOpenHash={setOpenHash} />

          </>
     )
}

export default EnterRaffleDialog