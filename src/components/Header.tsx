
import React from 'react';
import { format } from 'date-fns';

const Header = () => {
  const [currentTime, setCurrentTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="bg-gradient-to-r from-nokia-blue to-nokia-lightblue p-4 text-white rounded-full mb-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="font-bold text-3xl text-white">NOKIA</div>
        </div>
        <div className="text-center font-bold text-2xl">
          SMART SCREW DRIVER SYSTEM
        </div>
        <div className="text-right">
          <div className="text-lg">{format(currentTime, 'dd MMMM yyyy')}</div>
          <div className="text-2xl font-bold">{format(currentTime, 'HH:mm')}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
