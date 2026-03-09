import { useState, useEffect } from "react";
import { oscars2026Nominations } from "../data";

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown = () => {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {      
      const targetDate = new Date(oscars2026Nominations.ceremonyDate).getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeRemaining({ days, hours, minutes, seconds });
      } else {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8 text-center">
      <div className="flex justify-center gap-4">
        <div className="bg-black bg-opacity-50 rounded-lg p-2 min-w-20">
          <div className="text-white text-2xl font-bold">
            {String(timeRemaining.days).padStart(2, "0")}
          </div>
          <div className="text-amber-300 text-sm font-semibold mt-2">Días</div>
        </div>
        <div className="bg-black bg-opacity-50 rounded-lg p-2 min-w-20">
          <div className="text-white text-2xl font-bold">
            {String(timeRemaining.hours).padStart(2, "0")}
          </div>
          <div className="text-amber-300 text-sm font-semibold mt-2">Horas</div>
        </div>
        <div className="bg-black bg-opacity-50 rounded-lg p-2 min-w-20">
          <div className="text-white text-2xl font-bold">
            {String(timeRemaining.minutes).padStart(2, "0")}
          </div>
          <div className="text-amber-300 text-sm font-semibold mt-2">
            Minutos
          </div>
        </div>
        <div className="bg-black bg-opacity-50 rounded-lg p-2 min-w-20">
          <div className="text-white text-2xl font-bold">
            {String(timeRemaining.seconds).padStart(2, "0")}
          </div>
          <div className="text-amber-300 text-sm font-semibold mt-2">
            Segundos
          </div>
        </div>
      </div>
    </div>
  );
};
