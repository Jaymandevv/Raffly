import { useAccount } from "wagmi"
import Header from "./components/header"
import RaffleInfo from "./components/raffle-info"
import PlayersList from "./components/Table/player-list"
import Home from "./components/home"

function App() {
  const { isConnected } = useAccount()

  return (
    <>
      {
        isConnected ? <div className="max-w-[1200px] mx-auto h-screen my-4">
          <Header />
          <RaffleInfo />
          <div className="border h-[65%] mt-4 rounded-lg">
            <PlayersList />
          </div>
        </div>
          : <Home />
      }
    </>
  )
}

export default App
