import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

interface LoserModalProp {
     showLoserModal: boolean;
     setShowLoserModal: (v: boolean) => void;
}


function LoserModal({ showLoserModal, setShowLoserModal }: LoserModalProp) {
     return (<Dialog open={showLoserModal} onOpenChange={setShowLoserModal}>
          <DialogContent className="bg-black/90 border border-white/20 text-white">
               <DialogHeader>
                    <DialogTitle className="text-xl">
                         Better luck next time 🍀
                    </DialogTitle>
               </DialogHeader>

               <p className="text-sm text-gray-400">
                    You didn’t win this round, but a new raffle has started.
                    Enter again for another chance.
               </p>
          </DialogContent>
     </Dialog>
     )
}

export default LoserModal;