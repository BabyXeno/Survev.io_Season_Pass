import React, { useState, useEffect } from 'react';
import { Shield, Smile, Eye, Shirt, RadioIcon as RadioactiveIcon, Trophy, Star, Check, Lock, Sword, Crown, Heart, Zap, Diamond, Flame } from 'lucide-react';
interface Reward {
  id: number;
  icon: React.ReactNode;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythic';
  isPremium: boolean;
  position: number;
  image?: string;
}

interface Quest {
  id: number;
  title: string;
  gp: number;
  completed: boolean;
  removing?: boolean;
}

const questPool = [
  'Win a match with 10+ kills',
  'Survive in the red zone for 2 minutes',
  'Find 3 golden potatoes',
  'Deal 1000 damage in a single match',
  'Use 5 different weapons in one match',
  'Heal teammates 5 times',
  'Get 3 kills with grenades',
  'Travel 5000 meters in vehicles',
  'Break 50 obstacles',
  'Reach top 5 in solo mode',
  'Win a match without healing items',
  'Get 5 kills with pistols only',
  'Survive 3 matches for 10+ minutes',
  'Find 3 airdrops',
  'Win a match in squad mode',
  'Get 3 melee kills',
  'Use 10 bandages in one match',
  'Deal damage with 5 different weapons',
  'Break 20 trees',
  'Find rare loot in 3 different locations',
  'Win a match with full health',
  'Get 3 kills within 1 minute',
  'Survive in the final circle for 2 minutes',
  'Find 5 scopes in one match',
  'Win without using any scopes',
  'Get 5 kills from behind cover',
  'Travel the entire map border',
  'Find 3 mythic weapons',
];

function App() {
  const [currentGP, setCurrentGP] = useState(0);
  const [quests, setQuests] = useState<Quest[]>([]);
  const [displayedQuests, setDisplayedQuests] = useState<Quest[]>([]);

  const getRandomQuest = (): Quest => {
    const randomTitle = questPool[Math.floor(Math.random() * questPool.length)];
    const randomGP = Math.floor(Math.random() * (50 - 20 + 1)) + 20; // Random GP
    return {
      id: Math.random(),
      title: randomTitle,
      gp: randomGP,
      completed: false,
    };
  };

  useEffect(() => {
    // Initialize with 25 random quests
    const initialQuests = Array.from({ length: 25 }, () => getRandomQuest());
    setQuests(initialQuests);

    // Set initial displayed quests
    setDisplayedQuests(initialQuests.slice(0, 3));
  }, []);

  const rewards: Reward[] = [
    // Free Pass Rewards (Top Row)
    { id: 1, icon: <Shield size={24} />, rarity: 'common', isPremium: false, position: 1, image: '/Better_Pass/images/image1.png' },
    { id: 2, icon: <Eye size={24} />, rarity: 'rare', isPremium: false, position: 2, image: '/Better_Pass/images/image2.png' },
    { id: 3, icon: <RadioactiveIcon size={24} />, rarity: 'legendary', isPremium: false, position: 3, image: 'item3.png' },
    { id: 4, icon: <Trophy size={24} />, rarity: 'mythic', isPremium: false, position: 4, image: 'item4.png' },
    { id: 5, icon: <Shield size={24} />, rarity: 'common', isPremium: false, position: 5, image: 'item5.png' },
    { id: 6, icon: <Sword size={24} />, rarity: 'rare', isPremium: false, position: 6, image: 'item6.png' },
    { id: 7, icon: <Crown size={24} />, rarity: 'epic', isPremium: false, position: 7, image: 'item7.png' },
    { id: 8, icon: <Heart size={24} />, rarity: 'common', isPremium: false, position: 8, image: 'item8.png' },
    { id: 9, icon: <Zap size={24} />, rarity: 'legendary', isPremium: false, position: 9, image: 'item9.png' },
    { id: 10, icon: <Diamond size={24} />, rarity: 'mythic', isPremium: false, position: 10, image: 'item10.png' },
    { id: 11, icon: <Flame size={24} />, rarity: 'rare', isPremium: false, position: 11, image: 'item11.png' },
    { id: 12, icon: <Shield size={24} />, rarity: 'common', isPremium: false, position: 12, image: 'item12.png' },
    { id: 13, icon: <Trophy size={24} />, rarity: 'legendary', isPremium: false, position: 13, image: 'item13.png' },
    { id: 14, icon: <Eye size={24} />, rarity: 'epic', isPremium: false, position: 14, image: 'item14.png' },
    { id: 15, icon: <Sword size={24} />, rarity: 'rare', isPremium: false, position: 15, image: 'item15.png' },
    { id: 16, icon: <Crown size={24} />, rarity: 'mythic', isPremium: false, position: 16, image: 'item16.png' },
    { id: 17, icon: <Heart size={24} />, rarity: 'common', isPremium: false, position: 17, image: 'item17.png' },
    { id: 18, icon: <Zap size={24} />, rarity: 'legendary', isPremium: false, position: 18, image: 'item18.png' },
    { id: 19, icon: <Diamond size={24} />, rarity: 'epic', isPremium: false, position: 19, image: 'item19.png' },
    { id: 20, icon: <Flame size={24} />, rarity: 'rare', isPremium: false, position: 20, image: 'item20.png' },
    { id: 21, icon: <Shield size={24} />, rarity: 'mythic', isPremium: false, position: 21, image: 'item21.png' },
    { id: 22, icon: <Trophy size={24} />, rarity: 'legendary', isPremium: false, position: 22, image: 'item22.png' },
    { id: 23, icon: <Eye size={24} />, rarity: 'epic', isPremium: false, position: 23, image: 'item23.png' },
    { id: 24, icon: <Sword size={24} />, rarity: 'rare', isPremium: false, position: 24, image: 'item24.png' },
    { id: 25, icon: <Crown size={24} />, rarity: 'mythic', isPremium: false, position: 25, image: 'item25.png' },

    // Premium Pass Rewards (Bottom Row)
    { id: 26, icon: <Smile size={24} />, rarity: 'uncommon', isPremium: true, position: 1, image: '/Better_Pass/images/image26.png' },
    { id: 27, icon: <Shirt size={24} />, rarity: 'epic', isPremium: true, position: 2, image: '/Better_Pass/images/image27.png' },
    { id: 28, icon: <Trophy size={24} />, rarity: 'mythic', isPremium: true, position: 3, image: 'item28.png' },
    { id: 29, icon: <RadioactiveIcon size={24} />, rarity: 'legendary', isPremium: true, position: 4, image: 'item29.png' },
    { id: 30, icon: <Crown size={24} />, rarity: 'epic', isPremium: true, position: 5, image: 'item30.png' },
    { id: 31, icon: <Diamond size={24} />, rarity: 'mythic', isPremium: true, position: 6, image: 'item31.png' },
    { id: 32, icon: <Flame size={24} />, rarity: 'legendary', isPremium: true, position: 7, image: 'item32.png' },
    { id: 33, icon: <Sword size={24} />, rarity: 'epic', isPremium: true, position: 8, image: 'item33.png' },
    { id: 34, icon: <Heart size={24} />, rarity: 'mythic', isPremium: true, position: 9, image: 'item34.png' },
    { id: 35, icon: <Zap size={24} />, rarity: 'legendary', isPremium: true, position: 10, image: 'item35.png' },
    { id: 36, icon: <Shield size={24} />, rarity: 'epic', isPremium: true, position: 11, image: 'item36.png' },
    { id: 37, icon: <Trophy size={24} />, rarity: 'mythic', isPremium: true, position: 12, image: 'item37.png' },
    { id: 38, icon: <Eye size={24} />, rarity: 'legendary', isPremium: true, position: 13, image: 'item38.png' },
    { id: 39, icon: <Crown size={24} />, rarity: 'epic', isPremium: true, position: 14, image: 'item39.png' },
    { id: 40, icon: <Diamond size={24} />, rarity: 'mythic', isPremium: true, position: 15, image: 'item40.png' },
    { id: 41, icon: <Flame size={24} />, rarity: 'legendary', isPremium: true, position: 16, image: 'item41.png' },
    { id: 42, icon: <Sword size={24} />, rarity: 'epic', isPremium: true, position: 17, image: 'item42.png' },
    { id: 43, icon: <Heart size={24} />, rarity: 'mythic', isPremium: true, position: 18, image: 'item43.png' },
    { id: 44, icon: <Zap size={24} />, rarity: 'legendary', isPremium: true, position: 19, image: 'item44.png' },
    { id: 45, icon: <Shield size={24} />, rarity: 'epic', isPremium: true, position: 20, image: 'item45.png' },
    { id: 46, icon: <Trophy size={24} />, rarity: 'mythic', isPremium: true, position: 21, image: 'item46.png' },
    { id: 47, icon: <Eye size={24} />, rarity: 'legendary', isPremium: true, position: 22, image: 'item47.png' },
    { id: 48, icon: <Crown size={24} />, rarity: 'epic', isPremium: true, position: 23, image: 'item48.png' },
    { id: 49, icon: <Diamond size={24} />, rarity: 'mythic', isPremium: true, position: 24, image: 'item49.png' },
    { id: 50, icon: <Flame size={24} />, rarity: 'legendary', isPremium: true, position: 25, image: 'item50.png' },
  ];

  const getRarityColor = (rarity: string) => {
    const colors = {
      common: 'bg-gray-400',
      uncommon: 'bg-green-500',
      rare: 'bg-blue-500',
      epic: 'bg-purple-500',
      legendary: 'bg-orange-500',
      mythic: 'bg-red-500',
    };
    return colors[rarity as keyof typeof colors];
  };

  const handleQuestComplete = (questId: number) => {
    setDisplayedQuests((prevDisplayedQuests) => {
      // Mark the quest as complete and initiate removal
      const updatedQuests = prevDisplayedQuests.map((quest) => {
        if (quest.id === questId && !quest.completed) {
          setCurrentGP((prev) => prev + quest.gp);
          return { ...quest, completed: true, removing: true };
        }
        return quest;
      });

      return updatedQuests;
    });

    // After animation, replace the completed quest with a new random quest
    setTimeout(() => {
      setDisplayedQuests((prevDisplayedQuests) => {
        const newQuests = prevDisplayedQuests.filter((q) => q.id !== questId);

        // Get a new random quest that is not already displayed
        let newQuest: Quest;
        do {
          newQuest = getRandomQuest();
        } while (newQuests.some((q) => q.title === newQuest.title));

        // Ensure that the new quest doesn't match an existing quest.

        // Add the new quest and ensure we only have a max of 3
        const finalQuests = [...newQuests, newQuest].slice(0, 3);
        return finalQuests;
      });
    }, 500);
  };

  const calculateLevel = (gp: number) => {
    let level = 1;
    let remainingGP = gp;

    while (remainingGP >= 0) {
      const requiredGP = level === 1 ? 100 : 100 + (level - 1) * 10;
      if (remainingGP < requiredGP) break;
      remainingGP -= requiredGP;
      level++;
    }

    const currentLevelGP = level === 1 ? 100 : 100 + (level - 1) * 10;
    return {
      level: level - 1,
      progress: remainingGP,
      required: currentLevelGP,
    };
  };

  const levelInfo = calculateLevel(currentGP);
  const progressPercent = (levelInfo.progress / levelInfo.required) * 100;

  // Calculate the full progress based on total GP
  const fullProgressPercent = (currentGP / (25 * 100 + 24 * 10)) * 100;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">SurvivX.io Pass #1</h1>
          <div className="flex items-center gap-2">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FFD700'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3C/svg%3E"
              alt="Golden Potato"
              className="w-6 h-6"
            />
            <span className="text-xl font-bold">{currentGP} GP</span>
          </div>
        </div>

        {/* New Progress Line */}
        <div className="h-2 bg-gray-700 rounded-full mb-4">
          <div
            className="h-full bg-yellow-500 rounded-full transition-all duration-300"
            style={{ width: `${fullProgressPercent}%` }}
          />
        </div>

        <div className="bg-gray-800 rounded-lg p-6 mb-6 overflow-x-auto">
          <div className="min-w-[2000px]">
            <div className="flex">
              {/* Left side labels */}
              <div className="flex flex-col justify-between mr-4 py-2">
                <div className="text-sm font-bold">FREE PASS</div>
                <div className="text-sm font-bold text-yellow-500">
                  PREMIUM PASS
                </div>
              </div>

              {/* Pass content */}
              <div className="flex-1">
                {/* Free Pass Row */}
                <div className="relative mb-1">
                  <div className="grid grid-cols-25 gap-4">
                    {rewards
                      .filter((reward) => !reward.isPremium)
                      .map((reward) => (
                        <div key={reward.id} className="relative">
                          <div
                            className={`
                          ${getRarityColor(reward.rarity)}
                          w-full aspect-square rounded-lg flex items-center justify-center
                          ${
                            levelInfo.level >= reward.position
                              ? 'opacity-100'
                              : 'opacity-50'
                          }
                          border-2 border-gray-600 transition-opacity duration-300
                        `}
                          >
                            {/* ADDED THIS CONDITIONAL RENDERING */}
                            {reward.image ? (
                              <img
                                src={reward.image}
                                alt={`Reward ${reward.id}`}
                                className="w-10 h-10 object-contain"
                              />
                            ) : (
                              reward.icon
                            )}
                            <div className="absolute -top-3 -right-3 bg-gray-700 rounded-full p-1 text-xs">
                              {reward.position}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Rewards Progression Line */}
                <div className="h-2 bg-gray-700 my-1 relative">
                  <div
                    className="h-full bg-yellow-500 transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>

                {/* Premium Pass Row */}
                <div className="relative mt-1">
                  <div className="grid grid-cols-25 gap-4">
                    {rewards
                      .filter((reward) => reward.isPremium)
                      .map((reward) => (
                        <div key={reward.id} className="relative">
                          <div
                            className={`
                          ${getRarityColor(reward.rarity)}
                          w-full aspect-square rounded-lg flex items-center justify-center
                          ${
                            levelInfo.level >= reward.position
                              ? 'opacity-100'
                              : 'opacity-50'
                          }
                          border-2 border-yellow-500 transition-opacity duration-300
                        `}
                          >
                            {/* ADDED THIS CONDITIONAL RENDERING */}
                            {reward.image ? (
                              <img
                                src={reward.image}
                                alt={`Reward ${reward.id}`}
                                className="w-10 h-10 object-contain"
                              />
                            ) : (
                              reward.icon
                            )}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Unlock Banner */}
            <div className="mt-4 bg-yellow-500 rounded-lg p-2 flex items-center justify-center gap-2">
              <Lock size={20} className="text-black" />
              <span className="font-bold text-black">
                UNLOCK ALL GOLD ITEMS
              </span>
              <Lock size={20} className="text-black" />
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Daily Quests</h2>
          <div className="space-y-4">
            {displayedQuests.map((quest) => (
              <div
                key={quest.id}
                className={`flex items-center justify-between bg-gray-700 p-4 rounded-lg transition-all duration-300 ${
                  quest.removing
                    ? 'opacity-0 transform translate-x-full'
                    : 'opacity-100 transform translate-x-0'
                }`}
              >
                <div>
                  <h3 className="font-medium">{quest.title}</h3>
                  <p className="text-sm text-gray-400">{quest.gp} GP</p>
                </div>
                <button
                  onClick={() => handleQuestComplete(quest.id)}
                  disabled={quest.completed}
                  className={`p-2 rounded-full ${
                    quest.completed
                      ? 'bg-green-500 cursor-not-allowed'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                >
                  <Check size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
