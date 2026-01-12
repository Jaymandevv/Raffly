import { Dialog, DialogContent } from "./ui/dialog"

interface TxHashDialogProp {
     hash: string
     setOpenHash: (open: boolean) => void
     openHash: boolean

}


function TxHashDialog({ hash, openHash, setOpenHash }: TxHashDialogProp) {
     return (<Dialog open={openHash} onOpenChange={setOpenHash}>
          <DialogContent className="backdrop-blur-xl border border-white/20 bg-white" >
               <div>
                    <h1 className="text-center font-semibold text-lg">
                         Transaction successful ✅
                    </h1>
                    <div>
                         <p>
                              Congratulations, you have enter the raffle successfully
                         </p>
                         <p>View your transaction here</p>
                         <p className="w-full">
                              Tx Hash: <a
                                   href={`https://sepolia.etherscan.io/tx/${hash}`}
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="text-blue-600 underline"
                              >
                                   {`https://sepolia.etherscan.io/tx/${hash.slice(0, 4)}`}
                              </a>
                         </p>
                    </div>
               </div>

          </DialogContent>
     </Dialog>)
}

export default TxHashDialog