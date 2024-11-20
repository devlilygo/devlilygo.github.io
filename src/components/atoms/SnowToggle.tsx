'use client';

import React, { useState } from 'react';
import Snowfall from 'react-snowfall';
import Snowball from '@/images/snow-globe-snow-svgrepo-com.svg';
import SnowballBW from '@/images/snow-globe-snow-svgrepo-com-black-and-white.svg';

const SnowToggle = () => {
  const [isSnowing, setIsSnowing] = useState(false);

  const toggleSnow = () => setIsSnowing((prev) => !prev);

  return (
    <div>
      {/* 눈 효과 */}
      {isSnowing && <Snowfall snowflakeCount={200} />}
      {isSnowing ? (
        <Snowball
          className="w-16 h-16 p-2 hover:cursor-pointer"
          onClick={toggleSnow}
        />
      ) : (
        <SnowballBW
          className="w-16 h-16 p-2 hover:cursor-pointer"
          onClick={toggleSnow}
        />
      )}
    </div>
  );
};

export default SnowToggle;
