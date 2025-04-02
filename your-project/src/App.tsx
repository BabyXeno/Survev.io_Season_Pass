import React, { useState } from 'react';
import { SEASON_PASS_1 } from './data/seasonPass';
import { SeasonPassProgress } from './components/SeasonPassProgress';
import { QuestList } from './components/QuestList';
import { RewardTrack } from './components/RewardTrack';

function App() {
  const [seasonPass, setSeasonPass] = useState(SEASON_PASS_1);

  const handleQuestComplete = (questId: string) => {
    setSeasonPass(prev => {
      const updatedQuests = prev.quests.map(quest =>
        quest.id === questId ? { ...quest, completed: !quest.completed } : quest
      );

      const completedQuest = prev.quests.find(q => q.id === questId);
      let newXP = prev.currentXP;
      let newLevel = prev.currentLevel;

      if (completedQuest && !completedQuest.completed) {
        newXP += completedQuest.xpReward;
        while (newXP >= prev.xpNeededForNextLevel && newLevel < prev.maxLevel) {
          newXP -= prev.xpNeededForNextLevel;
          newLevel++;
        }
      }

      return {
        ...prev,
        quests: updatedQuests,
        currentXP: newXP,
        currentLevel: newLevel
      };
    });
  };

  return (
    <div className="min-h-screen bg-[#0a1014] p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-white">Survev.io2 Pass</h1>
        <RewardTrack 
          items={seasonPass.items} 
          currentLevel={seasonPass.currentLevel}
          endDate={seasonPass.endDate}
          currentXP={seasonPass.currentXP}
          xpNeededForNextLevel={seasonPass.xpNeededForNextLevel}
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <QuestList 
              quests={seasonPass.quests} 
              onQuestComplete={handleQuestComplete} 
            />
          </div>
          <div className="lg:col-span-2">
            <SeasonPassProgress seasonPass={seasonPass} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;