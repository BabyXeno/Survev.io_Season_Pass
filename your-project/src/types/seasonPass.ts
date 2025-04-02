export interface Quest {
    id: string;
    title: string;
    description: string;
    xpReward: number; 
    completed: boolean;
  }
  
  export interface CosmeticItem {
    id: string;
    name: string;
    description: string;
    rarity: 'common' | 'rare' | 'epic' | 'legendary';
    type: 'emote' | 'skin' | 'accessory';
    levelRequired: number;
    imageUrl: string;
  }
  
  export interface SeasonPass {
    id: number;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    currentLevel: number;
    maxLevel: number;
    currentXP: number;
    xpNeededForNextLevel: number;
    items: CosmeticItem[];
    quests: Quest[];
  }