"use client";
import { useState, useEffect } from "react";

export default function Countdown({ targetDate }: any) {
  const [timeLeft, setTimeLeft] = useState<any>({});
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);
  const timerComponents = Object.keys(timeLeft);
  return (
    <div className="flex text-2xl border gap-5 p-5 rounded-lg">
      {timerComponents.map((interval: any) => {
        if (!timeLeft[interval]) {
          return null;
        }
        console.log(timeLeft[interval]);
        return (
          <div
            key={interval}
            className="flex flex-col items-center justify-center"
          >
            {timeLeft[interval] ? (
              <>
                <span key={interval} className="text-4xl font-bold">
                  {timeLeft[interval]}
                </span>
                <span>{interval}</span>
              </>
            ) : (
              <p className="flex">O evento acabou 😢</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
