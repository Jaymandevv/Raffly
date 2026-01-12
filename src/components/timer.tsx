"use client";

import { useEffect, useState } from "react";
import { useReadContract, useWatchContractEvent } from "wagmi";
import abi from "@/abi/Raffly.json";
import { CONTRACT_ADDRESS } from "@/lib/constant";

export default function Timer({ status }: { status: number }) {
     const [timeLeft, setTimeLeft] = useState(0);

     const { data: lastTimestamp, refetch: refetchTimestamp } = useReadContract({
          address: CONTRACT_ADDRESS,
          abi,
          functionName: "getLastTimestamp",
     });

     const { data: interval } = useReadContract({
          address: CONTRACT_ADDRESS,
          abi,
          functionName: "getInterval",
     });


     useWatchContractEvent({
          address: CONTRACT_ADDRESS,
          abi,
          eventName: "RaffleEntered",
          onLogs: () => {
               refetchTimestamp();
          },
     });


     useEffect(() => {
          if (status !== 0 || !lastTimestamp || !interval) return;

          const endTime = (Number(lastTimestamp) + Number(interval)) * 1000;

          const updateCountdown = () => {
               const now = Date.now();
               const diff = Math.max(endTime - now, 0);
               setTimeLeft(diff);
          };
          updateCountdown();
          const intervalId = setInterval(updateCountdown, 1000);
          return () => clearInterval(intervalId);
     }, [lastTimestamp, interval, status]);

     useEffect(() => {
          if (status !== 0) {
               setTimeLeft(0);
          }
     }, [status]);

     const hours = Math.floor(timeLeft / (1000 * 60 * 60));
     const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

     if (status === 1) return (
          <p>🎉 Winner being picked...</p>
     )

     return (
          <div className="text-center">
               {timeLeft > 0 ? (
                    <>
                         <h3>Resets in</h3>
                         <div className="flex gap-3 justify-center">
                              {[
                                   { label: "Hour", value: hours },
                                   { label: "Min", value: minutes },
                                   { label: "Sec", value: seconds },
                              ].map((t) => (
                                   <div
                                        key={t.label}
                                        className="flex flex-col justify-between items-center p-2 rounded-sm text-xs md:text-base  md:p-6 md:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg mt-4"
                                   >
                                        <span>{String(t.value).padStart(2, "0")}</span>
                                        <span>{t.label}</span>
                                   </div>
                              ))}
                         </div>
                    </>
               ) : (
                    <p>Enter Raffle</p>
               )}
          </div>
     );
}


