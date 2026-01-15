import WinnerModal from "./winner-modal";
import LoserModal from "./loser-modal";
import { useWinnerModal } from "@/hooks/winner";

function ResultModal() {

     const { setShowLoserModal, setShowWinnerModal, showLoserModal, showWinnerModal } = useWinnerModal()


     return (
          <>
               <WinnerModal setShowWinnerModal={setShowWinnerModal} showWinnerModal={showWinnerModal} />
               <LoserModal setShowLoserModal={setShowLoserModal} showLoserModal={showLoserModal} />
          </>
     )
}

export default ResultModal;