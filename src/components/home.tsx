import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "./header";

export default function Home() {
     return (
          <div className="h-screen bg-gray-950 text-white flex flex-col px-8 py-4">
               <Header />
               <div className="h-screen max-w-full flex flex-col items-center mt-8">
                    <div className="text-center flex flex-col mt-8">
                         <p className="text-lg text-gray-300 mb-4">
                              Connect your wallet to join the raffle and view live stats.
                         </p>
                         <div className="self-center">
                              <ConnectButton />
                         </div>
                    </div>

                    <Card className="bg-gray-900 border-gray-800 mt-10 max-w-3xl">
                         <CardHeader>
                              <CardTitle className="text-gray-200">About This Raffle</CardTitle>
                         </CardHeader>
                         <CardContent className="text-gray-400">
                              <p>
                                   Join the raffle by contributing ETH for a chance to win the entire pool when the timer expires.
                                   Everyone has equal odds, fully on-chain & fair!
                              </p>
                         </CardContent>
                    </Card>

                    <footer className="text-center text-gray-500 text-sm mt-auto">
                         💻 Created by <a href="https://jaymandevv.vercel.app/" target="_blank" className="text-blue-400 hover:underline">Jayman</a>
                    </footer>
               </div>
          </div>
     );
}
