import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

interface WinnerModalProps {
     showWinnerModal: boolean;
     setShowWinnerModal: (v: boolean) => void
}

function WinnerModal({ showWinnerModal, setShowWinnerModal }: WinnerModalProps) {


     return (
          <Dialog open={showWinnerModal} onOpenChange={setShowWinnerModal}>
               <DialogContent className="bg-black/90 border border-green-500 text-white">
                    <DialogHeader>
                         <DialogTitle className="text-2xl text-green-400">
                              🎉 You Won!
                         </DialogTitle>
                    </DialogHeader>

                    <p className="text-sm text-gray-300">
                         Congratulations! You are the winner of this raffle.
                         Your reward has been sent to your wallet.
                    </p>
               </DialogContent>
          </Dialog>


     )
}

export default WinnerModal;