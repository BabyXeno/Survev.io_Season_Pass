import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';
import { Quest } from '../types/seasonPass';

interface Props {
  quests: Quest[];
  onQuestComplete: (questId: string) => void;
}

export const QuestList: React.FC<Props> = ({ quests, onQuestComplete }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4">Daily Quests</h2>
      <div className="space-y-4">
        {quests.map((quest) => (
          <div 
            key={quest.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div>
              <h3 className="font-semibold">{quest.title}</h3>
              <p className="text-sm text-gray-600">{quest.description}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-purple-600">
                +{quest.xpReward} XP
              </span>
              <button
                onClick={() => onQuestComplete(quest.id)}
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                {quest.completed ? (
                  <CheckCircle className="w-6 h-6" />
                ) : (
                  <Circle className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}