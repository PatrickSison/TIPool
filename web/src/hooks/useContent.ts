import type { CardDTO, RiftboundContentDTO } from '#/types';
import { useMemo } from 'react';

const mockCards: RiftboundContentDTO = {
  game: 'Riftbound',
  version: '1.0.0',
  lastUpdated: new Date().toISOString(),
  sets: [
    {
      id: 'core-set-1',
      version: '1.0.0',
      lastUpdated: new Date().toISOString(),
      sets: [
        {
          id: 'card-001',
          collectorNumber: 1,
          set: 'core-set-1',
          name: 'Riftwalker',
          description: 'A mysterious wanderer between worlds',
          type: 'Unit',
          rarity: 'Rare',
          faction: 'Neutral',
          stats: {
            energy: 3,
            might: 4,
            cost: 5,
            power: 6,
          },
          keywords: ['Haste', 'Lifelink'],
          art: {
            thumbnailURL: 'https://via.placeholder.com/200x280?text=Riftwalker',
            fullURL: 'https://via.placeholder.com/400x560?text=Riftwalker',
            artist: 'Sarah Mitchell',
          },
          flavorText: 'The rifts speak to those who listen.',
          tags: ['legendary', 'magic', 'humanoid'],
        },
        {
          id: 'card-002',
          collectorNumber: 2,
          set: 'core-set-1',
          name: 'Void Echo',
          description: 'An echo from the void dimension',
          type: 'Spell',
          rarity: 'Common',
          faction: 'Shadow',
          stats: {
            energy: 2,
            might: 2,
            cost: 3,
            power: 3,
          },
          keywords: ['Draw', 'Discard'],
          art: {
            thumbnailURL: 'https://via.placeholder.com/200x280?text=VoidEcho',
            fullURL: 'https://via.placeholder.com/400x560?text=VoidEcho',
            artist: 'Marcus Chen',
          },
          flavorText: 'Silence falls when the void speaks.',
          tags: ['spell', 'shadow', 'void'],
        },
        {
          id: 'card-003',
          collectorNumber: 3,
          set: 'core-set-1',
          name: 'Crystalline Guardian',
          description: 'An ancient protector of magical artifacts',
          type: 'Unit',
          rarity: 'Uncommon',
          faction: 'Order',
          stats: {
            energy: 4,
            might: 3,
            cost: 4,
            power: 5,
          },
          keywords: ['Barrier', 'Ward'],
          art: {
            thumbnailURL: 'https://via.placeholder.com/200x280?text=Guardian',
            fullURL: 'https://via.placeholder.com/400x560?text=Guardian',
            artist: 'Elena Rodriguez',
          },
          flavorText: 'Crystal holds the line against chaos.',
          tags: ['elemental', 'guardian', 'magic'],
        },
        {
          id: 'card-004',
          collectorNumber: 4,
          set: 'core-set-1',
          name: 'Ember Storm',
          description: 'Unleash the fury of burning inferno',
          type: 'Spell',
          rarity: 'Rare',
          faction: 'Chaos',
          stats: {
            energy: 5,
            might: 6,
            cost: 6,
            power: 7,
          },
          keywords: ['Burn', 'Chain'],
          art: {
            thumbnailURL: 'https://via.placeholder.com/200x280?text=Storm',
            fullURL: 'https://via.placeholder.com/400x560?text=Storm',
            artist: 'James Anderson',
          },
          flavorText: 'Chaos consumes all in its path.',
          tags: ['fire', 'chaos', 'spell'],
        },
        {
          id: 'card-005',
          collectorNumber: 5,
          set: 'core-set-1',
          name: 'Moon Warden',
          description: 'Protects the balance between light and dark',
          type: 'Unit',
          rarity: 'Legendary',
          faction: 'Neutral',
          stats: {
            energy: 3,
            might: 5,
            cost: 7,
            power: 8,
          },
          keywords: ['Vigilance', 'Lifelink', 'Flying'],
          art: {
            thumbnailURL: 'https://via.placeholder.com/200x280?text=Warden',
            fullURL: 'https://via.placeholder.com/400x560?text=Warden',
            artist: 'Lisa Park',
          },
          flavorText:
            'Balance is maintained by those strong enough to preserve it.',
          tags: ['legendary', 'guardian', 'neutral'],
        },
      ],
    },
    {
      id: 'expansion-1',
      version: '1.0.0',
      lastUpdated: new Date().toISOString(),
      sets: [
        {
          id: 'card-101',
          collectorNumber: 1,
          set: 'expansion-1',
          name: 'Timerift Sorcerer',
          description: 'Bends time to their will',
          type: 'Unit',
          rarity: 'Rare',
          faction: 'Order',
          stats: {
            energy: 4,
            might: 3,
            cost: 5,
            power: 6,
          },
          keywords: ['Time', 'Rewind'],
          art: {
            thumbnailURL: 'https://via.placeholder.com/200x280?text=Sorcerer',
            fullURL: 'https://via.placeholder.com/400x560?text=Sorcerer',
            artist: 'David Kim',
          },
          flavorText: 'Yesterday never changes, but tomorrow always will.',
          tags: ['mage', 'time', 'order'],
        },
        {
          id: 'card-102',
          collectorNumber: 2,
          set: 'expansion-1',
          name: 'Primal Titan',
          description: 'An ancient beast of raw power',
          type: 'Unit',
          rarity: 'Legendary',
          faction: 'Chaos',
          stats: {
            energy: 6,
            might: 7,
            cost: 8,
            power: 9,
          },
          keywords: ['Rampage', 'Trample', 'Regenerate'],
          art: {
            thumbnailURL: 'https://via.placeholder.com/200x280?text=Titan',
            fullURL: 'https://via.placeholder.com/400x560?text=Titan',
            artist: 'Nina Patel',
          },
          flavorText: "Nature bows to the titan's will.",
          tags: ['beast', 'legendary', 'primal'],
        },
        {
          id: 'card-103',
          collectorNumber: 3,
          set: 'expansion-1',
          name: 'Shadow Whisper',
          description: 'Secrets move through the darkness',
          type: 'Spell',
          rarity: 'Uncommon',
          faction: 'Shadow',
          stats: {
            energy: 2,
            might: 1,
            cost: 2,
            power: 2,
          },
          keywords: ['Hidden', 'Evasion'],
          art: {
            thumbnailURL: 'https://via.placeholder.com/200x280?text=Whisper',
            fullURL: 'https://via.placeholder.com/400x560?text=Whisper',
            artist: 'Thomas Wright',
          },
          flavorText: 'In shadow, all things are possible.',
          tags: ['shadow', 'spell', 'stealth'],
        },
        {
          id: 'card-104',
          collectorNumber: 4,
          set: 'expansion-1',
          name: 'Holy Radiance',
          description: 'Divine light banishes all darkness',
          type: 'Spell',
          rarity: 'Rare',
          faction: 'Order',
          stats: {
            energy: 3,
            might: 2,
            cost: 4,
            power: 5,
          },
          keywords: ['Heal', 'Purify', 'Holy'],
          art: {
            thumbnailURL: 'https://via.placeholder.com/200x280?text=Radiance',
            fullURL: 'https://via.placeholder.com/400x560?text=Radiance',
            artist: 'Amanda Foster',
          },
          flavorText: 'Light prevails where faith burns bright.',
          tags: ['holy', 'light', 'order'],
        },
        {
          id: 'card-105',
          collectorNumber: 5,
          set: 'expansion-1',
          name: 'Rift Collector',
          description: 'Harvests energy from the rifts themselves',
          type: 'Unit',
          rarity: 'Common',
          faction: 'Neutral',
          stats: {
            energy: 2,
            might: 2,
            cost: 3,
            power: 3,
          },
          keywords: ['Ramp', 'Harvest'],
          art: {
            thumbnailURL: 'https://via.placeholder.com/200x280?text=Collector',
            fullURL: 'https://via.placeholder.com/400x560?text=Collector',
            artist: 'Robert Hayes',
          },
          flavorText: 'Every rift is a resource waiting to be claimed.',
          tags: ['neutral', 'utility', 'rift'],
        },
      ],
    },
  ],
};

interface UseContentProps {}

interface UseContentResult {
  cards: CardDTO[];
  getCardById?: (id: string) => CardDTO | undefined;
}

export const useContent = (props?: UseContentProps): UseContentResult => {
  const cards = useMemo(() => {
    return mockCards.sets.flatMap((set) => set.sets);
  }, [mockCards]);

  return {
    cards,
  };
};
