import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';

import { StatsObject } from '../constants/types';

const useStats = () => {
  const { user } = useAuth0();
  const userId = user?.sub?.split('|')[2] || '';
  const savedStats = localStorage.getItem(userId);

  const initStats = savedStats
    ? JSON.parse(savedStats)
    : {
        currentStreak: 0,
        distribution: new Array(6).fill(0),
        maxStreak: 0,
        totalPlayed: 0,
        totalWon: 0,
      };

  const [localStats, setLocalStats] = useState<StatsObject>(initStats);

  const getStats = (): StatsObject => {
    return localStats;
  };

  const getWinPercentage = (): string => {
    return !localStats.totalPlayed
      ? 'N/A'
      : Math.round((localStats.totalWon / localStats.totalPlayed) * 100) + '%';
  };

  const setStats = (winningTurn: number) => {
    setLocalStats(prev => {
      const updatedStats = { ...prev };
      updatedStats.totalPlayed += 1;

      if (winningTurn > 0) {
        updatedStats.currentStreak += 1;
        updatedStats.distribution[winningTurn - 1] += 1;
        updatedStats.totalWon += 1;

        if (updatedStats.currentStreak > updatedStats.maxStreak) {
          updatedStats.maxStreak += 1;
        }
      } else {
        updatedStats.currentStreak = 0;
      }

      localStorage.setItem(userId, JSON.stringify(updatedStats));
      return updatedStats;
    });
  };

  return { getStats, getWinPercentage, setStats };
};

export default useStats;
