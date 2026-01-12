import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Button } from "./ui/button"

const steps = [
     {
          title: "Connect Your Wallet 🔐",
          desc: "Use MetaMask or any supported wallet. Make sure you're on the Sepolia Ethereum Test Network.",
     },
     {
          title: "Enter the Raffle 🎟️",
          desc: "Pay a small entry fee (minimum of 0.01 ETH) to join the current round. You can only enter the raffle once.",
     },
     {
          title: "Countdown Begins ⏳",
          desc: "Once the first player joins, the timer starts. When it ends, no new entries are accepted.",
     },
     {
          title: "Winner Is Picked 🎉",
          desc: "The smart contract automatically picks a random winner and sends them the entire ETH pool.",
     },
     {
          title: "New Round Starts 🔁",
          desc: "After each raffle, the list resets and a new round starts automatically.",
     },
];


function How() {
     const [open, setOpen] = useState(false)

     return (<Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger>
               <Button className="!text-xs mobile:text-base cursor-pointer bg-black">How it works</Button>
          </DialogTrigger>
          <DialogContent className="bg-white">
               <DialogHeader>
                    <DialogTitle>How it works</DialogTitle>
                    <DialogDescription>
                         This action cannot be undone. This will permanently delete your account
                         and remove your data from our servers.
                    </DialogDescription>
               </DialogHeader>

               <div>
                    {steps.map((step, i) => (
                         <div key={i} className="flex flex-col">
                              <div className="flex gap-2 font-semibold">
                                   <span>{i + 1}.</span>
                                   <span>{step.title}</span>
                              </div>
                              <p className="ml-4 text-sm italic text-slate-700">{step.desc}</p>
                         </div>

                    ))}
               </div>
          </DialogContent>
     </Dialog>)
}

export default How