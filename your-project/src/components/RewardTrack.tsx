import React from 'react';
import { Lock, Shield, Star } from 'lucide-react';
import { CosmeticItem, SeasonPass } from '../types/seasonPass';

interface Props {
  items: CosmeticItem[];
  currentLevel: number;
  endDate: string;
  currentXP: number;
  xpNeededForNextLevel: number;
}

export const RewardTrack: React.FC<Props> = ({ 
  items, 
  currentLevel, 
  endDate,
  currentXP,
  xpNeededForNextLevel
}) => {
  const formatTimeRemaining = (endDate: string) => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = end.getTime() - now.getTime();
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    return `${days}d ${hours}h ${minutes}m`;
  };

  // Calculate progress percentage between current level and next level
  const calculateProgress = () => {
    return (currentXP / xpNeededForNextLevel) * 100;
  };

  const progress = calculateProgress();

  // Calculate the total width percentage for the gold line
  const calculateTotalProgressWidth = () => {
    // Calculate segment width (space between two levels)
    const segmentWidth = 100 / (items.length - 1);
    
    // Width for completed levels
    const completedWidth = (currentLevel - 1) * segmentWidth;
    
    // Width for current level progress
    const currentProgress = (progress / 100) * segmentWidth;
    
    return completedWidth + currentProgress;
  };

  return (
    <div className="bg-gradient-to-b from-[#1a2328] to-[#2d3c44] rounded-lg p-6 shadow-lg">
      <div className="relative">
        {/* Level track */}
        <div className="flex justify-between mb-2">
          {items.map((item) => (
            <div 
              key={item.id}
              className="flex flex-col items-center"
            >
              <div className="w-12 h-8 bg-[#2d3c44] flex items-center justify-center rounded-t-lg border-t-2 border-x-2 border-[#3a4b54]">
                <span className="text-white font-bold">{item.levelRequired}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Progress line */}
        <div className="absolute top-[4.5rem] left-12 right-12 h-1 bg-[#3a4b54]">
          {/* Completed levels line */}
          <div 
            className="absolute h-full bg-gradient-to-r from-yellow-500 to-yellow-400"
            style={{ 
              width: `${calculateTotalProgressWidth()}%`,
              transition: 'width 0.3s ease-in-out'
            }}
          />
          
          {/* Level markers */}
          {items.map((_, index) => (
            <div
              key={index}
              className={`absolute w-3 h-3 rounded-full -top-1 
                ${index <= currentLevel - 1 ? 'bg-yellow-400' : 'bg-[#3a4b54]'}`}
              style={{ 
                left: `${(index / (items.length - 1)) * 100}%`,
                transform: 'translateX(-50%)',
                border: '2px solid #2d3c44'
              }}
            />
          ))}
        </div>

        {/* Items track */}
        <div className="flex justify-between">
          {items.map((item) => (
            <div 
              key={item.id}
              className={`relative w-24 h-24 ${
                currentLevel >= item.levelRequired 
                  ? 'bg-[#2d3c44]' 
                  : 'bg-[#1a2328]'
              } rounded-lg border-2 border-[#3a4b54] overflow-hidden`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                {item.type === 'skin' && (
                  <Shield className={`w-12 h-12 ${
                    currentLevel >= item.levelRequired 
                      ? 'text-green-400' 
                      : 'text-gray-600'
                  }`} />
                )}
              </div>
              {currentLevel < item.levelRequired && (
                <div className="absolute top-2 right-2">
                  <Lock className="w-4 h-4 text-gray-400" />
                </div>
              )}
              {item.rarity === 'legendary' && (
                <div className="absolute top-2 left-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Premium banner */}
        <div className="mt-4 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 p-3 rounded-lg flex items-center justify-center gap-2">
          <Shield className="w-6 h-6 text-black" />
          <span className="text-black font-bold uppercase">Unlock all gold items</span>
          <Shield className="w-6 h-6 text-black" />
        </div>

        {/* Season end timer */}
        <div className="mt-2 bg-[#3a4b54] p-2 rounded text-center">
          <span className="text-yellow-400">Season Ends: </span>
          <span className="text-white">{formatTimeRemaining(endDate)}</span>
        </div>
      </div>
    </div>
  );
}