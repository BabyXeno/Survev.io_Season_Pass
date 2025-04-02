import React from 'react';
import { Trophy } from 'lucide-react';
import { SeasonPass } from '../types/seasonPass';

interface Props {
  seasonPass: SeasonPass;
}

export const SeasonPassProgress: React.FC<Props> = ({ seasonPass }) => {
  const progress = (seasonPass.currentXP / seasonPass.xpNeededForNextLevel) * 100;

  return (
    <div className="bg-[#1a2328] rounded-lg p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Trophy className="w-6 h-6 text-yellow-500" />
          <h2 className="text-xl font-bold text-white">{seasonPass.name}</h2>
        </div>
        <span className="text-sm text-gray-400">Level {seasonPass.currentLevel}/{seasonPass.maxLevel}</span>
      </div>
      
      <div className="relative w-full h-4 bg-[#2d3c44] rounded-full overflow-hidden">
        <div 
          className="absolute h-full bg-gradient-to-r from-yellow-500 to-yellow-400 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="mt-2 flex justify-between text-sm text-gray-400">
        <span>{seasonPass.currentXP} XP</span>
        <span>{seasonPass.xpNeededForNextLevel} XP</span>
      </div>
    </div>
  );
}