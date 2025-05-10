import { useState, useEffect } from 'react';

export default function AudioIcon() {

    const [volumeLevel, setVolumeLevel] = useState(0);
    const [scale, setScale] = useState(1);
    const [waveAmplitude, setWaveAmplitude] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setVolumeLevel(5); // Consistent speed
            setWaveAmplitude(1.5); // Consistent amplitude
            setScale(1.2); // Consistent scale
        }, 1000);
        return () => clearInterval(interval);
    }, []);

  return (
    <svg width="20" height="20" viewBox="0 0 20 20" style={{
        transform: `scale(${scale})`,
        transition: 'transform 0.1s ease-out'
      }}>
        <g>
          <rect x="2" y="8" width="2" height="4" fill="#111">
            <animate attributeName="height" values={`4;${4 + waveAmplitude * 2};4`} dur={`${volumeLevel === 0 ? '1000s' : 1/volumeLevel}s`} repeatCount="indefinite" />
            <animate attributeName="y" values={`8;${8 - waveAmplitude};8`} dur={`${volumeLevel === 0 ? '1000s' : 1/volumeLevel}s`} repeatCount="indefinite" />
          </rect>
          <rect x="6" y="6" width="2" height="8" fill="#111">
            <animate attributeName="height" values={`8;${8 + waveAmplitude * 1.5};8`} dur={`${volumeLevel === 0 ? '1000s' : 1/volumeLevel}s`} begin="0.1s" repeatCount="indefinite" />
            <animate attributeName="y" values={`6;${6 - waveAmplitude * 0.75};6`} dur={`${volumeLevel === 0 ? '1000s' : 1/volumeLevel}s`} begin="0.1s" repeatCount="indefinite" />
          </rect>
          <rect x="10" y="4" width="2" height="12" fill="#111">
            <animate attributeName="height" values={`12;${12 + waveAmplitude * 1.2};12`} dur={`${volumeLevel === 0 ? '1000s' : 1/volumeLevel}s`} repeatCount="indefinite" />
            <animate attributeName="y" values={`4;${4 - waveAmplitude * 0.6};4`} dur={`${volumeLevel === 0 ? '1000s' : 1/volumeLevel}s`} repeatCount="indefinite" />
          </rect>
          <rect x="14" y="6" width="2" height="8" fill="#111">
            <animate attributeName="height" values={`8;${8 + waveAmplitude * 1.5};8`} dur={`${volumeLevel === 0 ? '1000s' : 1/volumeLevel}s`} begin="0.05s" repeatCount="indefinite" />
            <animate attributeName="y" values={`6;${6 - waveAmplitude * 0.75};6`} dur={`${volumeLevel === 0 ? '1000s' : 1/volumeLevel}s`} begin="0.05s" repeatCount="indefinite" />
          </rect>
          <rect x="18" y="8" width="2" height="4" fill="#111">
            <animate attributeName="height" values={`4;${4 + waveAmplitude * 2};4`} dur={`${volumeLevel === 0 ? '1000s' : 1/volumeLevel}s`} begin="0.1s" repeatCount="indefinite" />
            <animate attributeName="y" values={`8;${8 - waveAmplitude};8`} dur={`${volumeLevel === 0 ? '1000s' : 1/volumeLevel}s`} begin="0.1s" repeatCount="indefinite" />
          </rect>
        </g>
      </svg>
  );
}