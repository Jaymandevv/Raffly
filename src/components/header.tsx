import { ConnectButton } from "@rainbow-me/rainbowkit";

function Header() {
     return <header className="w-full px-2 mobile:px-0 flex justify-between items-center">
          <h1 className="text-xl mobile:text-3xl font-bold text-center">Raffly</h1>
          <ConnectButton />
     </header>
}

export default Header;