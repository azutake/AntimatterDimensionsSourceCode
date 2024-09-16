import { DC } from "../../constants";
import { i18n } from "@/core/i18n";

export const normalAchievements = [
  {
    id: 11,
    name: i18n.t("achievements.normal.11.name"),
    description: i18n.t("achievements.normal.11.description"),
    checkEvent: GAME_EVENT.ACHIEVEMENT_EVENT_OTHER,
  },
  {
    id: 12,
    name: i18n.t("achievements.normal.12.name"),
    description: i18n.t("achievements.normal.12.description"),
    checkEvent: GAME_EVENT.ACHIEVEMENT_EVENT_OTHER,
  },
  {
    id: 13,
    name: i18n.t("achievements.normal.13.name"),
    description: i18n.t("achievements.normal.13.description"),
    checkEvent: GAME_EVENT.ACHIEVEMENT_EVENT_OTHER,
  },
  {
    id: 14,
    name: i18n.t("achievements.normal.14.name"),
    description: i18n.t("achievements.normal.14.description"),
    checkEvent: GAME_EVENT.ACHIEVEMENT_EVENT_OTHER,
  },
  {
    id: 15,
    name: i18n.t("achievements.normal.15.name"),
    description: i18n.t("achievements.normal.15.description"),
    checkEvent: GAME_EVENT.ACHIEVEMENT_EVENT_OTHER,
  },
  {
    id: 16,
    name: i18n.t("achievements.normal.16.name"),
    get description() {
      return Enslaved.isRunning
        ? i18n.t("achievements.normal.16.descriptionWithEnslaved")
        : i18n.t("achievements.normal.16.descriptionWithoutEnslaved");
    },
    checkEvent: GAME_EVENT.ACHIEVEMENT_EVENT_OTHER,
  },
  {
    id: 17,
    name: i18n.t("achievements.normal.17.name"),
    description: i18n.t("achievements.normal.17.description"),
    checkEvent: GAME_EVENT.ACHIEVEMENT_EVENT_OTHER,
  },
  {
    id: 18,
    name: i18n.t("achievements.normal.18.name"),
    get description() {
      return Enslaved.isRunning
        ? i18n.t("achievements.normal.18.descriptionWithEnslaved")
        : i18n.t("achievements.normal.18.descriptionWithoutEnslaved");
    },
    checkEvent: GAME_EVENT.ACHIEVEMENT_EVENT_OTHER,
  },
  {
    id: 21,
    name: i18n.t("achievements.normal.21.name"),
    description: i18n.t("achievements.normal.21.description"),
    checkRequirement: () => true,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() { return i18n.t("achievements.normal.21.reward", [formatInt(100)]); },
    effect: 100
  },
  {
    id: 22,
    name: i18n.t("achievements.normal.22.name"),
    get description() { return i18n.t("achievements.normal.22.description", [formatInt(50)]); },
    checkRequirement: () => NewsHandler.uniqueTickersSeen >= 50,
    checkEvent: GAME_EVENT.REALITY_RESET_AFTER
  },
  {
    id: 23,
    name: i18n.t("achievements.normal.23.name"),
    get description() { return i18n.t("achievements.normal.23.description", [formatInt(99)]); },
    checkRequirement: () => AntimatterDimension(8).amount.eq(99),
    get reward() { return i18n.t("achievements.normal.23.reward", [formatPercents(0.1)]); },
    effect: 1.1
  },
  {
    id: 24,
    name: i18n.t("achievements.normal.24.name"),
    get description() { return i18n.t("achievements.normal.24.description", [format(DC.E80)]); },
    checkRequirement: () => Currency.antimatter.exponent >= 80,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 25,
    name: i18n.t("achievements.normal.25.name"),
    get description() { return i18n.t("achievements.normal.25.description", [formatInt(10)]); },
    checkRequirement: () => DimBoost.purchasedBoosts >= 10,
    checkEvent: GAME_EVENT.DIMBOOST_AFTER
  },
  {
    id: 26,
    name: i18n.t("achievements.normal.26.name"),
    description: i18n.t("achievements.normal.26.description"),
    checkRequirement: () => true,
    checkEvent: GAME_EVENT.GALAXY_RESET_BEFORE
  },
  {
    id: 27,
    name: i18n.t("achievements.normal.27.name"),
    get description() { return i18n.t("achievements.normal.27.name", [formatInt(2)]); },
    checkRequirement: () => player.galaxies >= 2,
    checkEvent: GAME_EVENT.GALAXY_RESET_AFTER
  },
  {
    id: 28,
    name: i18n.t("achievements.normal.28.name"),
    get description() {
      return i18n.t("achievements.normal.28.description", [format(DC.E150)]);
    },
    checkRequirement: () => AntimatterDimension(1).amount.exponent >= 150,
    checkEvent: GAME_EVENT.ACHIEVEMENT_EVENT_OTHER,
    get reward() { return i18n.t("achievements.normal.28.reward", [formatPercents(0.1)]); },
    effect: 1.1
  },
  {
    id: 31,
    name: i18n.t("achievements.normal.31.name"),
    get description() { return i18n.t("achievements.normal.31.description", [formatX(DC.E31)]); },
    checkRequirement: () => AntimatterDimensions.all.some(x => x.multiplier.exponent >= 31),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() { return i18n.t("achievements.normal.31.reward", [formatPercents(0.05)]); },
    effect: 1.05
  },
  {
    id: 32,
    name: i18n.t("achievements.normal.32.name"),
    get description() { return i18n.t("achievements.normal.32.description", [formatX(600)]); },
    checkRequirement: () => !NormalChallenge(8).isOnlyActiveChallenge && Sacrifice.totalBoost.gte(600),
    checkEvent: GAME_EVENT.SACRIFICE_RESET_AFTER,
    get reward() {
      return i18n.t("achievements.normal.32.reward", {
        before:
          Sacrifice.getSacrificeDescription({ "Achievement32": false, "Achievement57": false, "Achievement88": false }),
        after:
          Sacrifice.getSacrificeDescription({ "Achievement32": true, "Achievement57": false, "Achievement88": false })
      });
    },
    effect: 0.1,
  },
  {
    id: 33,
    name: i18n.t("achievements.normal.33.name"),
    get description() { return i18n.t("achievements.normal.33.description", [formatInt(10)]); },
    checkRequirement: () => Currency.infinities.gte(10),
    checkEvent: GAME_EVENT.BIG_CRUNCH_AFTER
  },
  {
    id: 34,
    name: i18n.t("achievements.normal.34.name"),
    description: i18n.t("achievements.normal.34.description"),
    checkRequirement: () => AntimatterDimension(8).totalAmount.eq(0),
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() { return i18n.t("achievements.normal.34.reward", [formatPercents(0.02)]); },
    effect: 1.02
  },
  {
    id: 35,
    name: i18n.t("achievements.normal.35.name"),
    get description() {
      return PlayerProgress.realityUnlocked()
        ? i18n.t("achievements.normal.35.descriptionRealityWithUnlocked", [formatInt(6)])
        : i18n.t("achievements.normal.35.descriptionRealityWithoutUnlocked", [formatInt(6)]);
    },
    checkRequirement: () => Date.now() - player.lastUpdate >= 21600000,
    checkEvent: GAME_EVENT.GAME_TICK_BEFORE
  },
  {
    id: 36,
    name: i18n.t("achievements.normal.36.name"),
    get description() {
      return i18n.t("achievements.normal.36.description", [formatInt(1)]);
    },
    checkRequirement: () => player.galaxies === 1,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() { return i18n.t("achievements.normal.36.reward", [format(1.02, 2, 2)]); },
    effect: 1 / 1.02
  },
  {
    id: 37,
    name: i18n.t("achievements.normal.37.name"),
    get description() { return i18n.t("achievements.normal.37.description", [formatInt(2)]); },
    checkRequirement: () => Time.thisInfinityRealTime.totalHours <= 2,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() { return i18n.t("achievements.normal.37.reward", [formatInt(5000)]); },
    effect: 5000
  },
  {
    id: 38,
    name: i18n.t("achievements.normal.38.name"),
    get description() {
      return i18n.t("achievements.normal.38.description");
    },
    checkRequirement: () => player.requirementChecks.infinity.noSacrifice,
    checkEvent: GAME_EVENT.GALAXY_RESET_BEFORE
  },
  {
    id: 41,
    name: i18n.t("achievements.normal.41.name"),
    get description() { return i18n.t("achievements.normal.41.description", [formatInt(16)]); },
    checkRequirement: () => player.infinityUpgrades.size >= 16,
    checkEvent: [
      GAME_EVENT.INFINITY_UPGRADE_BOUGHT,
      GAME_EVENT.REALITY_RESET_AFTER,
      GAME_EVENT.REALITY_UPGRADE_TEN_BOUGHT
    ],
    get reward() {
      return i18n.t("achievements.normal.41.reward", [formatX(2)]);
    },
  },
  {
    id: 42,
    name: i18n.t("achievements.normal.42.name"),
    get description() {
      return i18n.t("achievements.normal.42.description", [format(DC.E63)]);
    },
    checkRequirement: () =>
      Currency.antimatter.exponent >= 63 &&
      Currency.antimatter.productionPerSecond.gt(Currency.antimatter.value),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 43,
    name: i18n.t("achievements.normal.43.name"),
    description: i18n.t("achievements.normal.43.description"),
    checkRequirement: () => {
      const multipliers = Array.range(1, 8).map(tier => AntimatterDimension(tier).multiplier);
      for (let i = 0; i < multipliers.length - 1; i++) {
        if (multipliers[i].gte(multipliers[i + 1])) return false;
      }
      return true;
    },
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() {
      return i18n.t("achievements.normal.43.reward", [formatPercents(0.08), formatPercents(0.07)]);
    }
  },
  {
    id: 44,
    name: i18n.t("achievements.normal.44.name"),
    get description() {
      return i18n.t("achievements.normal.44.description", [formatInt(30)]);
    },
    checkRequirement: () => AchievementTimers.marathon1
      .check(Currency.antimatter.productionPerSecond.gt(Currency.antimatter.value), 30),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
  },
  {
    id: 45,
    name: i18n.t("achievements.normal.45.name"),
    get description() { return i18n.t("achievements.normal.45.description", [format(DC.E29)]); },
    checkRequirement: () => Tickspeed.current.exponent <= -26,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() { return i18n.t("achievements.normal.45.reward", [formatX(1.02, 0, 2)]); },
    effect: 0.98
  },
  {
    id: 46,
    name: i18n.t("achievements.normal.46.name"),
    get description() { return i18n.t("achievements.normal.46.description", [format(DC.E12)]); },
    checkRequirement: () => AntimatterDimension(7).amount.exponent >= 12,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 47,
    name: i18n.t("achievements.normal.47.name"),
    get description() { return i18n.t("achievements.normal.47.description", [formatInt(3)]); },
    checkRequirement: () => NormalChallenges.all.countWhere(c => c.isCompleted) >= 3,
    checkEvent: [GAME_EVENT.BIG_CRUNCH_AFTER, GAME_EVENT.REALITY_RESET_AFTER, GAME_EVENT.REALITY_UPGRADE_TEN_BOUGHT],
  },
  {
    id: 48,
    name: i18n.t("achievements.normal.48.name"),
    get description() { return i18n.t("achievements.normal.48.description", [formatInt(12)]); },
    checkRequirement: () => NormalChallenges.all.countWhere(c => !c.isCompleted) === 0,
    checkEvent: [GAME_EVENT.BIG_CRUNCH_AFTER, GAME_EVENT.REALITY_RESET_AFTER, GAME_EVENT.REALITY_UPGRADE_TEN_BOUGHT],
    get reward() { return i18n.t("achievements.normal.48.reward", [formatPercents(0.1)]); },
    effect: 1.1
  },
  {
    id: 51,
    name: i18n.t("achievements.normal.51.name"),
    description: i18n.t("achievements.normal.51.description"),
    checkRequirement: () => player.break,
    checkEvent: [GAME_EVENT.BREAK_INFINITY, GAME_EVENT.REALITY_RESET_AFTER, GAME_EVENT.REALITY_UPGRADE_TEN_BOUGHT],
  },
  {
    id: 52,
    name: i18n.t("achievements.normal.52.name"),
    description: i18n.t("achievements.normal.52.description"),
    checkRequirement: () => Autobuyer.antimatterDimension.zeroIndexed.concat(Autobuyer.tickspeed)
      .every(a => a.isUnlocked && a.hasMaxedInterval),
    checkEvent: [GAME_EVENT.REALITY_RESET_AFTER, GAME_EVENT.REALITY_UPGRADE_TEN_BOUGHT]
  },
  {
    id: 53,
    name: i18n.t("achievements.normal.53.name"),
    description: i18n.t("achievements.normal.53.description"),
    // The upgradeable autobuyers are dimensions, tickspeed, dimension boost,
    // galaxy, and big crunch (the ones you get from normal challenges).
    // We don't count autobuyers which can be upgraded via e.g. perks as upgradeable.
    checkRequirement: () => Autobuyers.upgradeable
      .every(a => a.isUnlocked && a.hasMaxedInterval),
    checkEvent: [GAME_EVENT.REALITY_RESET_AFTER, GAME_EVENT.REALITY_UPGRADE_TEN_BOUGHT]
  },
  {
    id: 54,
    name: i18n.t("achievements.normal.54.name"),
    get description() { return i18n.t("achievements.normal.54.description", [formatInt(10)]); },
    checkRequirement: () => Time.thisInfinityRealTime.totalMinutes <= 10,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() { return i18n.t("achievements.normal.54.reward", [format(5e5)]); },
    effect: 5e5
  },
  {
    id: 55,
    name: i18n.t("achievements.normal.55.name"),
    get description() { return i18n.t("achievements.normal.55.description", [formatInt(1)]); },
    checkRequirement: () => Time.thisInfinityRealTime.totalMinutes <= 1,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() { return i18n.t("achievements.normal.55.reward", [format(5e10)]); },
    effect: 5e10
  },
  {
    id: 56,
    name: i18n.t("achievements.normal.56.name"),
    get description() {
      return i18n.t("achievements.normal.56.description", [formatInt(3)]);
    },
    checkRequirement: () => NormalChallenge(2).isOnlyActiveChallenge && Time.thisInfinityRealTime.totalMinutes <= 3,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() {
      return i18n.t("achievements.normal.56.reward", [formatInt(3)]);
    },
    effect: () => Math.max(6 / (Time.thisInfinity.totalMinutes + 3), 1),
    effectCondition: () => Time.thisInfinity.totalMinutes < 3,
    formatEffect: value => `${formatX(value, 2, 2)}`
  },
  {
    id: 57,
    name: i18n.t("achievements.normal.57.name"),
    get description() {
      return i18n.t("achievements.normal.57.description", [formatInt(3)]);
    },
    checkRequirement: () => NormalChallenge(8).isOnlyActiveChallenge && Time.thisInfinityRealTime.totalMinutes <= 3,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() {
      return i18n.t("achievements.normal.57.reward", {
        before:
          Sacrifice.getSacrificeDescription({ "Achievement32": true, "Achievement57": false, "Achievement88": false }),
        after:
          Sacrifice.getSacrificeDescription({ "Achievement32": true, "Achievement57": true, "Achievement88": false })
      });
    },
    effect: 0.1
  },
  {
    id: 58,
    name: i18n.t("achievements.normal.58.name"),
    get description() { return i18n.t("achievements.normal.58.description", [formatInt(3)]); },
    checkRequirement: () => NormalChallenge(9).isOnlyActiveChallenge && Time.thisInfinityRealTime.totalMinutes <= 3,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() {
      return i18n.t("achievements.normal.58.reward", [formatInt(10), formatPercents(0.01)]);
    },
    effect: 1.01
  },
  {
    id: 61,
    name: i18n.t("achievements.normal.61.name"),
    get description() {
      return `Get all of your Antimatter Dimension Autobuyer bulk amounts to
        ${formatInt(Autobuyer.antimatterDimension.bulkCap)}.`;
    },
    checkRequirement: () => Autobuyer.antimatterDimension.zeroIndexed.every(x => x.hasMaxedBulk),
    checkEvent: [GAME_EVENT.REALITY_RESET_AFTER, GAME_EVENT.REALITY_UPGRADE_TEN_BOUGHT,
      GAME_EVENT.SAVE_CONVERTED_FROM_PREVIOUS_VERSION],
    reward: "Dimension Autobuyer bulks are unlimited."
  },
  {
    id: 62,
    name: i18n.t("achievements.normal.62.name"),
    get description() { return `Reach ${format(DC.E8)} Infinity Points per minute.`; },
    checkRequirement: () => Player.bestRunIPPM.exponent >= 8,
    checkEvent: GAME_EVENT.BIG_CRUNCH_AFTER
  },
  {
    id: 63,
    name: i18n.t("achievements.normal.63.name"),
    description: i18n.t("achievements.normal.63.description"),
    checkRequirement: () => Currency.infinityPower.gt(1),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 64,
    name: i18n.t("achievements.normal.64.name"),
    description: i18n.t("achievements.normal.64.description"),
    checkRequirement: () => player.galaxies === 0 && DimBoost.purchasedBoosts === 0 && NormalChallenge.isRunning,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() { return `Antimatter Dimensions 1-4 are ${formatPercents(0.25)} stronger.`; },
    effect: 1.25
  },
  {
    id: 65,
    name: i18n.t("achievements.normal.65.name"),
    get description() { return `Get the sum of all of your Normal Challenge times under ${formatInt(3)} minutes.`; },
    checkRequirement: () => Time.challengeSum.totalMinutes < 3,
    checkEvent: [GAME_EVENT.BIG_CRUNCH_AFTER, GAME_EVENT.REALITY_RESET_AFTER],
    get reward() {
      return `All Antimatter Dimensions are stronger in the first ${formatInt(3)} minutes of Infinities,
      but only in Challenges.`;
    },
    effect: () => (Player.isInAnyChallenge ? Math.max(4 / (Time.thisInfinity.totalMinutes + 1), 1) : 1),
    effectCondition: () => Player.isInAnyChallenge && Time.thisInfinity.totalMinutes < 3,
    formatEffect: value => `${formatX(value, 2, 2)}`
  },
  {
    id: 66,
    name: i18n.t("achievements.normal.66.name"),
    get description() { return `Get more than ${format(DC.E58)} ticks per second.`; },
    checkRequirement: () => Tickspeed.current.exponent <= -55,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() { return `Multiply starting tickspeed by ${formatX(1.02, 0, 2)}.`; },
    effect: 0.98
  },
  {
    id: 67,
    name: i18n.t("achievements.normal.67.name"),
    description: i18n.t("achievements.normal.67.description"),
    checkRequirement: () => InfinityChallenges.completed.length > 0,
    checkEvent: [GAME_EVENT.INFINITY_CHALLENGE_COMPLETED, GAME_EVENT.REALITY_RESET_AFTER]
  },
  {
    id: 68,
    name: i18n.t("achievements.normal.68.name"),
    get description() {
      return `Complete the 3rd Antimatter Dimension Autobuyer Challenge in ${formatInt(10)} seconds or less.`;
    },
    checkRequirement: () => NormalChallenge(3).isOnlyActiveChallenge && Time.thisInfinityRealTime.totalSeconds <= 10,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() { return `1st Antimatter Dimensions are ${formatPercents(0.5)} stronger.`; },
    effect: 1.5
  },
  {
    id: 71,
    name: i18n.t("achievements.normal.71.name"),
    description: i18n.t("achievements.normal.71.description"),
    checkRequirement: () =>
      NormalChallenge(2).isOnlyActiveChallenge &&
      AntimatterDimension(1).amount.eq(1) &&
      DimBoost.purchasedBoosts === 0 &&
      player.galaxies === 0,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() { return `1st Antimatter Dimensions are ${formatInt(3)} times stronger.`; },
    effect: 3
  },
  {
    id: 72,
    name: i18n.t("achievements.normal.72.name"),
    get description() {
      return `Get all Antimatter Dimension multipliers over ${formatX(Decimal.NUMBER_MAX_VALUE, 1)}.`;
    },
    checkRequirement: () => AntimatterDimensions.all.every(x => x.multiplier.gte(Decimal.NUMBER_MAX_VALUE)),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() { return `All Antimatter Dimensions are ${formatPercents(0.1)} stronger.`; },
    effect: 1.1
  },
  {
    id: 73,
    name: i18n.t("achievements.normal.73.name"),
    get description() { return `Get ${formatPostBreak(DC.D9_9999E9999, 4)} antimatter.`; },
    checkRequirement: () => Currency.antimatter.gte(DC.D9_9999E9999),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    reward: "Antimatter Dimensions gain a multiplier based on current antimatter.",
    effect: () => Currency.antimatter.value.pow(0.00002).plus(1),
    formatEffect: value => `${formatX(value, 2, 2)}`
  },
  {
    id: 74,
    name: i18n.t("achievements.normal.74.name"),
    get description() { return `Get the sum of all best Normal Challenge times under ${formatInt(5)} seconds.`; },
    checkRequirement: () => Time.challengeSum.totalSeconds < 5,
    checkEvent: [GAME_EVENT.BIG_CRUNCH_AFTER, GAME_EVENT.REALITY_RESET_AFTER],
    get reward() { return `All Antimatter Dimensions are ${formatPercents(0.4)} stronger, but only in challenges.`; },
    effect: 1.4,
    effectCondition: () => Player.isInAnyChallenge
  },
  {
    id: 75,
    name: i18n.t("achievements.normal.75.name"),
    description: i18n.t("achievements.normal.75.description"),
    checkRequirement: () => InfinityDimension(4).isUnlocked,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    reward: i18n.t("achievements.normal.75.reward"),
    effect: () => Achievements.power
  },
  {
    id: 76,
    name: i18n.t("achievements.normal.76.name"),
    get description() { return `Play for ${formatInt(8)} days.`; },
    checkRequirement: () => Time.totalTimePlayed.totalDays >= 8,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    reward: i18n.t("achievements.normal.76.reward"),
    effect: () => Math.max(Math.pow(Time.totalTimePlayed.totalDays / 2, 0.05), 1),
    formatEffect: value => `${formatX(value, 2, 2)}`
  },
  {
    id: 77,
    name: i18n.t("achievements.normal.77.name"),
    get description() { return `Reach ${format(1e6)} Infinity Power.`; },
    checkRequirement: () => Currency.infinityPower.exponent >= 6,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 78,
    name: i18n.t("achievements.normal.78.name"),
    get description() { return `Infinity in under ${formatInt(250)}ms.`; },
    checkRequirement: () => Time.thisInfinityRealTime.totalMilliseconds <= 250,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() {
      return `Start with ${format(5e25)} antimatter.`;
    },
    effect: 5e25
  },
  {
    id: 81,
    name: i18n.t("achievements.normal.81.name"),
    get description() { return `Beat Infinity Challenge 5 in ${formatInt(15)} seconds or less.`; },
    checkRequirement: () => InfinityChallenge(5).isRunning && Time.thisInfinityRealTime.totalSeconds <= 15,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE
  },
  {
    id: 82,
    name: i18n.t("achievements.normal.82.name"),
    get description() { return `Complete all ${formatInt(8)} Infinity Challenges.`; },
    checkRequirement: () => InfinityChallenges.completed.length === 8,
    checkEvent: [GAME_EVENT.INFINITY_CHALLENGE_COMPLETED, GAME_EVENT.REALITY_RESET_AFTER],
  },
  {
    id: 83,
    name: i18n.t("achievements.normal.83.name"),
    get description() { return `Get ${formatInt(50)} Antimatter Galaxies.`; },
    checkRequirement: () => player.galaxies >= 50,
    checkEvent: GAME_EVENT.GALAXY_RESET_AFTER,
    get reward() { return `Tickspeed is just over ${formatPercents(0.05)} faster per Antimatter Galaxy.`; },
    effect: () => DC.D0_95.pow(player.galaxies),
    formatEffect: value => `${formatX(value.recip(), 2, 2)}`
  },
  {
    id: 84,
    name: i18n.t("achievements.normal.84.name"),
    get description() { return `Reach ${formatPostBreak("1e35000")} antimatter.`; },
    checkRequirement: () => Currency.antimatter.exponent >= 35000,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    reward: i18n.t("achievements.normal.84.reward"),
    effect: () => Currency.antimatter.value.pow(0.00002).plus(1),
    formatEffect: value => `${formatX(value, 2, 2)}`
  },
  {
    id: 85,
    name: i18n.t("achievements.normal.85.name"),
    get description() { return `Big Crunch for ${format(DC.E150)} Infinity Points.`; },
    checkRequirement: () => gainedInfinityPoints().exponent >= 150,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() { return `Additional ${formatX(4)} multiplier to Infinity Points.`; },
    effect: 4
  },
  {
    id: 86,
    name: i18n.t("achievements.normal.86.name"),
    get description() { return `Reach ${formatX(1000)} faster per Tickspeed upgrade.`; },
    checkRequirement: () => Tickspeed.multiplier.recip().gte(1000),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() { return `All Galaxies are ${formatPercents(0.01)} stronger.`; },
    effect: 1.01
  },
  {
    id: 87,
    name: i18n.t("achievements.normal.87.name"),
    get description() { return `Infinity ${format(DC.D2E6)} times.`; },
    checkRequirement: () => Currency.infinities.gt(DC.D2E6),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() {
      return `Infinities more than ${formatInt(5)} seconds long
      give ${formatX(250)} more Infinities.`;
    },
    effect: 250,
    effectCondition: () => Time.thisInfinity.totalSeconds > 5
  },
  {
    id: 88,
    name: i18n.t("achievements.normal.88.name"),
    get description() {
      return `Get a ${formatX(Decimal.NUMBER_MAX_VALUE, 1, 0)} multiplier in a single Dimensional Sacrifice.`;
    },
    checkRequirement: () => Sacrifice.nextBoost.gte(Decimal.NUMBER_MAX_VALUE),
    checkEvent: GAME_EVENT.SACRIFICE_RESET_BEFORE,
    get reward() {
      return `Dimensional Sacrifice is stronger.
      ${Sacrifice.getSacrificeDescription({ "Achievement32": true, "Achievement57": true, "Achievement88": false })} ➜
      ${Sacrifice.getSacrificeDescription({ "Achievement32": true, "Achievement57": true, "Achievement88": true })}`;
    },
    effect: 0.1
  },
  {
    id: 91,
    name: i18n.t("achievements.normal.91.name"),
    get description() {
      return `Big Crunch for ${format(DC.E200)} Infinity Points in ${formatInt(2)} seconds or less.`;
    },
    checkRequirement: () => gainedInfinityPoints().exponent >= 200 && Time.thisInfinityRealTime.totalSeconds <= 2,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() {
      return `All Antimatter Dimensions are significantly stronger in the
      first ${formatInt(5)} seconds of Infinities.`;
    },
    effect: () => Math.max((5 - Time.thisInfinity.totalSeconds) * 60, 1),
    effectCondition: () => Time.thisInfinity.totalSeconds < 5,
    formatEffect: value => `${formatX(value, 2, 2)}`
  },
  {
    id: 92,
    name: i18n.t("achievements.normal.92.name"),
    get description() {
      return `Big Crunch for ${format(DC.E250)} Infinity Points in ${formatInt(20)} seconds or less.`;
    },
    checkRequirement: () => gainedInfinityPoints().exponent >= 250 && Time.thisInfinityRealTime.totalSeconds <= 20,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() {
      return `All Antimatter Dimensions are significantly stronger in the
      first ${formatInt(60)} seconds of Infinities.`;
    },
    effect: () => Math.max((1 - Time.thisInfinity.totalMinutes) * 100, 1),
    effectCondition: () => Time.thisInfinity.totalMinutes < 1,
    formatEffect: value => `${formatX(value, 2, 2)}`
  },
  {
    id: 93,
    name: i18n.t("achievements.normal.93.name"),
    get description() { return `Big Crunch for ${format(DC.E300)} Infinity Points.`; },
    checkRequirement: () => gainedInfinityPoints().exponent >= 300,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() { return `Additional ${formatX(4)} multiplier to Infinity Points.`; },
    effect: 4
  },
  {
    id: 94,
    name: i18n.t("achievements.normal.94.name"),
    get description() { return `Reach ${format(DC.E260)} Infinity Power.`; },
    checkRequirement: () => Currency.infinityPower.exponent >= 260,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    reward: i18n.t("achievements.normal.94.reward"),
    effect: 2
  },
  {
    id: 95,
    name: i18n.t("achievements.normal.95.name"),
    get description() { return `Gain ${format(Decimal.NUMBER_MAX_VALUE, 1, 0)} Replicanti in ${formatInt(1)} hour.`; },
    get reward() { return `You keep your Replicanti and ${formatInt(1)} Replicanti Galaxy on Infinity.`; },
    checkRequirement: () =>
      (Replicanti.amount.eq(Decimal.NUMBER_MAX_VALUE) || player.replicanti.galaxies > 0) &&
      Time.thisInfinityRealTime.totalHours <= 1,
    checkEvent: GAME_EVENT.REPLICANTI_TICK_AFTER
  },
  {
    id: 96,
    name: i18n.t("achievements.normal.96.name"),
    description: i18n.t("achievements.normal.96.description"),
    checkRequirement: () => true,
    checkEvent: GAME_EVENT.ETERNITY_RESET_BEFORE
  },
  {
    id: 97,
    name: i18n.t("achievements.normal.97.name"),
    get description() { return `Get the sum of Infinity Challenge times under ${format(6.66, 2, 2)} seconds.`; },
    checkRequirement: () => Time.infinityChallengeSum.totalSeconds < 6.66,
    checkEvent: [GAME_EVENT.BIG_CRUNCH_AFTER, GAME_EVENT.REALITY_RESET_AFTER],
  },
  {
    id: 98,
    name: i18n.t("achievements.normal.98.name"),
    description: i18n.t("achievements.normal.98.description"),
    checkRequirement: () => InfinityDimension(8).isUnlocked,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 101,
    name: i18n.t("achievements.normal.101.name"),
    description: i18n.t("achievements.normal.101.description"),
    checkRequirement: () => player.requirementChecks.eternity.onlyAD8,
    checkEvent: GAME_EVENT.ETERNITY_RESET_BEFORE
  },
  {
    id: 102,
    name: i18n.t("achievements.normal.102.name"),
    description: i18n.t("achievements.normal.102.description"),
    checkRequirement: () => EternityMilestone.all.every(m => m.isReached),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 103,
    name: i18n.t("achievements.normal.103.name"),
    get description() { return `Reach ${formatPostBreak(DC.D9_99999E999, 5, 0)} Infinity Points.`; },
    checkRequirement: () => Currency.infinityPoints.exponent >= 1000,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() {
      return `Make the Infinity Point formula better. log(x)/${formatInt(308)} ➜ log(x)/${formatFloat(307.8, 1)}`;
    },
    effect: 307.8
  },
  {
    id: 104,
    name: i18n.t("achievements.normal.104.name"),
    get description() { return `Eternity in under ${formatInt(30)} seconds.`; },
    checkRequirement: () => Time.thisEternity.totalSeconds <= 30,
    checkEvent: GAME_EVENT.ETERNITY_RESET_BEFORE,
    get reward() { return `Start Eternities with ${format(5e25)} Infinity Points.`; },
    effect: 5e25
  },
  {
    id: 105,
    name: i18n.t("achievements.normal.105.name"),
    get description() { return `Have ${formatInt(308)} Tickspeed upgrades from Time Dimensions.`; },
    checkRequirement: () => player.totalTickGained >= 308,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    reward: i18n.t("achievements.normal.105.reward"),
    effect: () => Tickspeed.perSecond.pow(0.000005),
    formatEffect: value => `${formatX(value, 2, 2)}`
  },
  {
    id: 106,
    name: i18n.t("achievements.normal.106.name"),
    get description() { return `Get ${formatInt(10)} Replicanti Galaxies in ${formatInt(15)} seconds.`; },
    checkRequirement: () => Replicanti.galaxies.total >= 10 && Time.thisInfinity.totalSeconds <= 15,
    checkEvent: GAME_EVENT.REPLICANTI_TICK_AFTER
  },
  {
    id: 107,
    name: i18n.t("achievements.normal.107.name"),
    get description() { return `Eternity with less than ${formatInt(10)} Infinities.`; },
    checkRequirement: () => Currency.infinities.lt(10),
    checkEvent: GAME_EVENT.ETERNITY_RESET_BEFORE
  },
  {
    id: 108,
    name: i18n.t("achievements.normal.108.name"),
    get description() { return `Eternity with exactly ${formatInt(9)} Replicanti.`; },
    checkRequirement: () => Replicanti.amount.round().eq(9),
    checkEvent: GAME_EVENT.ETERNITY_RESET_BEFORE
  },
  {
    id: 111,
    name: i18n.t("achievements.normal.111.name"),
    get description() {
      return `Have all your Infinities in your past ${formatInt(10)} Infinities be at least
      ${format(Decimal.NUMBER_MAX_VALUE, 1, 0)} times higher Infinity Points than the previous one.`;
    },
    checkRequirement: () => {
      if (player.records.recentInfinities.some(i => i[0] === Number.MAX_VALUE)) return false;
      const infinities = player.records.recentInfinities.map(run => run[2]);
      for (let i = 0; i < infinities.length - 1; i++) {
        if (infinities[i].lt(infinities[i + 1].times(Decimal.NUMBER_MAX_VALUE))) return false;
      }
      return true;
    },
    checkEvent: GAME_EVENT.BIG_CRUNCH_AFTER,
    reward: i18n.t("achievements.normal.111.reward")
  },
  {
    id: 112,
    name: i18n.t("achievements.normal.112.name"),
    get description() { return `Get the sum of Infinity Challenge times below ${formatInt(750)}ms.`; },
    checkRequirement: () => Time.infinityChallengeSum.totalMilliseconds < 750,
    checkEvent: [GAME_EVENT.BIG_CRUNCH_AFTER, GAME_EVENT.REALITY_RESET_AFTER]
  },
  {
    id: 113,
    name: i18n.t("achievements.normal.113.name"),
    get description() { return `Eternity in under ${formatInt(250)}ms.`; },
    checkRequirement: () => Time.thisEternity.totalMilliseconds <= 250,
    checkEvent: GAME_EVENT.ETERNITY_RESET_BEFORE,
    get reward() { return `Gain ${formatX(2)} more Eternities.`; },
    effect: 2,
  },
  {
    id: 114,
    name: i18n.t("achievements.normal.114.name"),
    description: i18n.t("achievements.normal.114.description"),
    checkRequirement: () => true,
    checkEvent: GAME_EVENT.CHALLENGE_FAILED,
    reward: i18n.t("achievements.normal.114.reward"),
    effect: () => "Sense of accomplishment (fading)"
  },
  {
    id: 115,
    name: i18n.t("achievements.normal.115.name"),
    description: i18n.t("achievements.normal.115.description"),
    checkEvent: GAME_EVENT.ACHIEVEMENT_EVENT_OTHER,
  },
  {
    id: 116,
    name: i18n.t("achievements.normal.116.name"),
    get description() { return `Eternity with only ${formatInt(1)} Infinity.`; },
    checkRequirement: () => Currency.infinities.lte(1),
    checkEvent: GAME_EVENT.ETERNITY_RESET_BEFORE,
    reward: i18n.t("achievements.normal.116.reward"),
    effect: () => Decimal.pow(Currency.infinitiesTotal.value.clampMin(1), LOG10_2 / 4).powEffectOf(TimeStudy(31)),
    cap: () => Effarig.eternityCap,
    formatEffect: value => {
      // Since TS31 is already accounted for in the effect prop, we need to "undo" it to display the base value here
      const mult = formatX(value, 2, 2);
      return TimeStudy(31).canBeApplied
        ? `${formatX(value.pow(1 / TimeStudy(31).effectValue), 2, 1)} (After TS31: ${mult})`
        : mult;
    }
  },
  {
    id: 117,
    name: i18n.t("achievements.normal.117.name"),
    get description() { return `Bulk buy ${formatInt(750)} Dimension Boosts at once.`; },
    checkRequirement: ([bulk]) => bulk >= 750,
    checkEvent: GAME_EVENT.DIMBOOST_AFTER,
    get reward() {
      return `The multiplier from Dimension Boosts to Antimatter Dimensions is ${formatPercents(0.01)} higher.`;
    },
    effect: 1.01
  },
  {
    id: 118,
    name: i18n.t("achievements.normal.118.name"),
    get description() { return `Get a total Dimensional Sacrifice multiplier of ${formatPostBreak(DC.E9000)}.`; },
    checkRequirement: () => Sacrifice.totalBoost.exponent >= 9000,
    checkEvent: GAME_EVENT.SACRIFICE_RESET_AFTER,
    reward: i18n.t("achievements.normal.118.reward"),
  },
  {
    id: 121,
    name: i18n.t("achievements.normal.121.name"),
    get description() { return `Reach ${formatPostBreak("1e30008")} Infinity Points.`; },
    checkRequirement: () => Currency.infinityPoints.exponent >= 30008,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 122,
    name: i18n.t("achievements.normal.122.name"),
    description: i18n.t("achievements.normal.122.name"),
    checkRequirement: () => player.requirementChecks.eternity.onlyAD1,
    checkEvent: GAME_EVENT.ETERNITY_RESET_BEFORE
  },
  {
    id: 123,
    name: i18n.t("achievements.normal.123.name"),
    get description() { return `Complete ${formatInt(50)} unique Eternity Challenge tiers.`; },
    checkRequirement: () => EternityChallenges.completions >= 50,
    checkEvent: GAME_EVENT.ETERNITY_RESET_AFTER
  },
  {
    id: 124,
    name: i18n.t("achievements.normal.124.name"),
    get description() {
      return `Have your Infinity Power per second exceed your Infinity Power
      for ${formatInt(60)} consecutive seconds during a single Infinity.`;
    },
    checkRequirement: () => AchievementTimers.marathon2
      .check(
        !EternityChallenge(7).isRunning &&
        InfinityDimension(1).productionPerSecond.gt(Currency.infinityPower.value),
        60
      ),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 125,
    name: i18n.t("achievements.normal.125.name"),
    get description() {
      return `Reach ${format(DC.E90)} Infinity Points without having any Infinities
      or any 1st Antimatter Dimensions in your current Eternity.`;
    },
    checkRequirement: () => Currency.infinityPoints.exponent >= 90 &&
      player.requirementChecks.eternity.noAD1 && Currency.infinities.eq(0),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    reward: i18n.t("achievements.normal.125.reward"),
    effect() {
      const thisInfinity = Time.thisInfinity.totalSeconds * 10 + 1;
      return DC.D2.pow(Math.log(thisInfinity) * Math.min(Math.pow(thisInfinity, 0.11), 500));
    },
    cap: () => Effarig.eternityCap,
    formatEffect: value => `${formatX(value, 2, 2)}`
  },
  {
    id: 126,
    name: i18n.t("achievements.normal.126.name"),
    get description() { return `Have ${formatInt(180)} times more Replicanti Galaxies than Antimatter Galaxies.`; },
    checkRequirement: () => Replicanti.galaxies.total >= 180 * player.galaxies && player.galaxies > 0,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() {
      return `Replicanti Galaxies divide your Replicanti by ${format(Decimal.NUMBER_MAX_VALUE, 1, 0)}
      instead of resetting them to ${formatInt(1)}.`;
    },
  },
  {
    id: 127,
    name: i18n.t("achievements.normal.127.name"),
    get description() { return `Reach ${format(Decimal.NUMBER_MAX_VALUE, 1, 0)} Eternity Points.`; },
    checkRequirement: () => Currency.eternityPoints.gte(Decimal.NUMBER_MAX_VALUE),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 128,
    name: i18n.t("achievements.normal.128.name"),
    get description() { return `Reach ${formatPostBreak("1e22000")} Infinity Points without any Time Studies.`; },
    checkRequirement: () => Currency.infinityPoints.exponent >= 22000 && player.timestudy.studies.length === 0,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    reward: i18n.t("achievements.normal.128.reward"),
    effect: () => Math.max(player.timestudy.studies.length, 1),
    formatEffect: value => `${formatX(value)}`
  },
  {
    id: 131,
    name: i18n.t("achievements.normal.131.name"),
    get description() { return `Get ${format(DC.D2E9)} Banked Infinities.`; },
    checkRequirement: () => Currency.infinitiesBanked.gt(DC.D2E9),
    checkEvent: [GAME_EVENT.ETERNITY_RESET_AFTER, GAME_EVENT.SAVE_CONVERTED_FROM_PREVIOUS_VERSION],
    get reward() {
      return `You gain ${formatX(2)} times more Infinities and
      after Eternity you permanently keep ${formatPercents(0.05)} of your Infinities as Banked Infinities.`;
    },
    effects: {
      infinitiesGain: 2,
      bankedInfinitiesGain: () => Currency.infinities.value.times(0.05).floor()
    }

  },
  {
    id: 132,
    name: i18n.t("achievements.normal.132.name"),
    get description() {
      return `Have ${formatInt(569)} Antimatter Galaxies without gaining any
        Replicanti Galaxies in your current Eternity.`;
    },
    checkRequirement: () => player.galaxies >= 569 && player.requirementChecks.eternity.noRG,
    checkEvent: GAME_EVENT.GALAXY_RESET_AFTER,
    reward: i18n.t("achievements.normal.132.reward"),
    effect: () => 1.22 * Math.max(Math.pow(player.galaxies, 0.04), 1),
    formatEffect: value => `${formatX(value, 2, 2)}`
  },
  {
    id: 133,
    name: i18n.t("achievements.normal.133.name"),
    get description() {
      return `Reach ${formatPostBreak(DC.E200000)} Infinity Points without
      buying any Infinity Dimensions or the ${formatX(2)} Infinity Point multiplier.`;
    },
    checkRequirement: () =>
      Array.dimensionTiers.map(InfinityDimension).every(dim => dim.baseAmount === 0) &&
      player.IPMultPurchases === 0 &&
      Currency.infinityPoints.exponent >= 200000,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    reward: i18n.t("achievements.normal.133.reward")
  },
  {
    id: 134,
    name: i18n.t("achievements.normal.134.name"),
    get description() { return `Reach ${formatPostBreak(DC.E18000)} Replicanti.`; },
    checkRequirement: () => Replicanti.amount.exponent >= 18000,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() {
      return `You gain Replicanti ${formatInt(2)} times faster under ${format(replicantiCap(), 1)} Replicanti.`;
    }
  },
  {
    id: 135,
    name: i18n.t("achievements.normal.135.name"),
    get description() { return `Get more than ${formatPostBreak("1e8296262")} ticks per second.`; },
    checkRequirement: () => Tickspeed.current.exponent <= -8296262,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 136,
    name: i18n.t("achievements.normal.136.name"),
    description: i18n.t("achievements.normal.136.name"),
    checkEvent: GAME_EVENT.ACHIEVEMENT_EVENT_OTHER,
  },
  {
    id: 137,
    name: i18n.t("achievements.normal.137.name"),
    get description() {
      return `Get ${formatPostBreak("1e260000")} antimatter
      in ${formatInt(1)} minute or less while Dilated.`;
    },
    checkRequirement: () =>
      Currency.antimatter.exponent >= 260000 &&
      Time.thisEternity.totalMinutes <= 1 &&
      player.dilation.active,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() { return `Gain ${formatX(2)} Dilated Time and Time Theorems while Dilated.`; },
    effect: () => (player.dilation.active ? 2 : 1),
  },
  {
    id: 138,
    name: i18n.t("achievements.normal.138.name"),
    get description() {
      return `Reach ${formatPostBreak("1e26000")} Infinity Points without any Time Studies while Dilated.`;
    },
    checkRequirement: () =>
      player.timestudy.studies.length === 0 &&
      player.dilation.active &&
      Currency.infinityPoints.exponent >= 26000,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    reward: i18n.t("achievements.normal.138.reward")
  },
  {
    id: 141,
    name: i18n.t("achievements.normal.141.name"),
    description: i18n.t("achievements.normal.141.name"),
    checkRequirement: () => true,
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
    get reward() {
      return `${formatX(4)} Infinity Point gain, and increase the multiplier for buying ${formatInt(10)}
      Antimatter Dimensions by +${format(0.1, 0, 1)}.`;
    },
    effects: {
      ipGain: 4,
      buyTenMult: 0.1
    }
  },
  {
    id: 142,
    name: i18n.t("achievements.normal.142.name"),
    description: i18n.t("achievements.normal.142.name"),
    checkRequirement: () => Player.automatorUnlocked,
    checkEvent: [GAME_EVENT.REALITY_RESET_AFTER, GAME_EVENT.REALITY_UPGRADE_BOUGHT, GAME_EVENT.PERK_BOUGHT,
      GAME_EVENT.BLACK_HOLE_UNLOCKED],
    get reward() { return `Dimension Boosts are ${formatPercents(0.5)} stronger.`; },
    effect: 1.5,
  },
  {
    id: 143,
    name: i18n.t("achievements.normal.143.name"),
    get description() {
      return `Have all your Eternities in your past ${formatInt(10)} Eternities be at least
      ${format(Decimal.NUMBER_MAX_VALUE, 1, 0)} times higher Eternity Points than the previous one.`;
    },
    checkRequirement: () => {
      if (player.records.recentEternities.some(i => i[0] === Number.MAX_VALUE)) return false;
      const eternities = player.records.recentEternities.map(run => run[2]);
      for (let i = 0; i < eternities.length - 1; i++) {
        if (eternities[i].lt(eternities[i + 1].times(Decimal.NUMBER_MAX_VALUE))) return false;
      }
      return true;
    },
    checkEvent: GAME_EVENT.ETERNITY_RESET_AFTER,
    reward: i18n.t("achievements.normal.143.reward")
  },
  {
    id: 144,
    name: i18n.t("achievements.normal.144.name"),
    description: i18n.t("achievements.normal.144.name"),
    checkRequirement: () => BlackHole(1).isUnlocked,
    checkEvent: GAME_EVENT.BLACK_HOLE_UNLOCKED,
  },
  {
    id: 145,
    name: i18n.t("achievements.normal.145.name"),
    description: i18n.t("achievements.normal.145.name"),
    checkRequirement: () => BlackHoles.list.some(bh => bh.interval < bh.duration),
    checkEvent: GAME_EVENT.BLACK_HOLE_UPGRADE_BOUGHT,
    get reward() { return `Black Hole intervals are ${formatPercents(0.1)} shorter.`; },
    effect: 0.9
  },
  {
    id: 146,
    name: i18n.t("achievements.normal.146.name"),
    description: i18n.t("achievements.normal.146.description"),
    checkRequirement: () => player.reality.perks.size === Perks.all.length,
    checkEvent: GAME_EVENT.PERK_BOUGHT,
    get reward() { return `+${formatPercents(0.01)} Glyph rarity.`; },
    effect: 1
  },
  {
    id: 147,
    name: i18n.t("achievements.normal.147.name"),
    description: i18n.t("achievements.normal.147.description"),
    checkRequirement: () => RealityUpgrades.allBought,
    checkEvent: GAME_EVENT.REALITY_UPGRADE_BOUGHT,
    reward: i18n.t("achievements.normal.147.reward")
  },
  {
    id: 148,
    name: i18n.t("achievements.normal.148.name"),
    description: i18n.t("achievements.normal.148.description"),
    checkRequirement: () => BASIC_GLYPH_TYPES
      .every(type => Glyphs.activeList.some(g => g.type === type)),
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
    reward: i18n.t("achievements.normal.148.reward"),
    effect: () => (new Set(Glyphs.activeWithoutCompanion.map(g => g.type))).size,
    formatEffect: value => `+${formatInt(value)}`
  },
  {
    id: 151,
    name: i18n.t("achievements.normal.151.name"),
    get description() {
      return `Get ${formatInt(800)} Antimatter Galaxies without
      buying 8th Antimatter Dimensions in your current Infinity.`;
    },
    checkRequirement: () => player.galaxies >= 800 && player.requirementChecks.infinity.noAD8,
    checkEvent: GAME_EVENT.GALAXY_RESET_AFTER,
    reward: i18n.t("achievements.normal.151.reward")
  },
  {
    id: 152,
    name: i18n.t("achievements.normal.152.name"),
    get description() { return `Have ${formatInt(100)} Glyphs in your inventory.`; },
    checkRequirement: () => Glyphs.inventoryList.length >= 100,
    checkEvent: GAME_EVENT.GLYPHS_CHANGED
  },
  {
    id: 153,
    name: i18n.t("achievements.normal.153.name"),
    description: i18n.t("achievements.normal.153.description"),
    checkRequirement: () => player.requirementChecks.reality.noAM,
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
  },
  {
    id: 154,
    name: i18n.t("achievements.normal.154.name"),
    get description() { return `Reality in under ${formatInt(5)} seconds (game time).`; },
    checkRequirement: () => Time.thisReality.totalSeconds <= 5,
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
    get reward() { return `${formatPercents(0.1)} chance each Reality of ${formatX(2)} Realities and Perk Points.`; },
    effect: 0.1
  },
  {
    id: 155,
    name: i18n.t("achievements.normal.155.name"),
    get description() { return `Play for ${formatFloat(13.7, 1)} billion years.`; },
    checkRequirement: () => Time.totalTimePlayed.totalYears > 13.7e9,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() { return `Black Hole durations are ${formatPercents(0.1)} longer.`; },
    effect: 1.1
  },
  {
    id: 156,
    name: i18n.t("achievements.normal.156.name"),
    description: i18n.t("achievements.normal.156.name"),
    checkRequirement: () => player.requirementChecks.reality.noPurchasedTT,
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
    get reward() { return `Gain ${formatX(2.5, 0, 1)} generated Time Theorems, and a free coupon to McDonalds™️.`; },
    effect: 2.5
  },
  {
    id: 157,
    name: i18n.t("achievements.normal.157.name"),
    get description() { return `Get a Glyph with ${formatInt(4)} effects.`; },
    checkRequirement: () => Glyphs.activeList.concat(Glyphs.inventoryList).map(
      glyph => getGlyphEffectsFromBitmask(glyph.effects, 0, 0)
        .filter(effect => effect.isGenerated).length
    ).max() >= 4,
    checkEvent: GAME_EVENT.GLYPHS_CHANGED
  },
  {
    id: 158,
    name: i18n.t("achievements.normal.158.name"),
    description: i18n.t("achievements.normal.158.description"),
    checkRequirement: () => BlackHole(1).isPermanent && BlackHole(2).isPermanent,
    checkEvent: GAME_EVENT.BLACK_HOLE_UPGRADE_BOUGHT,
    get reward() { return `Black Hole power increased by ${formatPercents(0.1)}.`; },
    effect: 1.1
  },
  {
    id: 161,
    name: i18n.t("achievements.normal.161.name"),
    get description() { return `Get ${formatPostBreak(DC.E1E8)} antimatter while Dilated.`; },
    checkRequirement: () => Currency.antimatter.exponent >= 100000000 && player.dilation.active,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 162,
    name: i18n.t("achievements.normal.162.name"),
    description: i18n.t("achievements.normal.162.description"),
    checkRequirement: () => player.timestudy.studies.length >= 58,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 163,
    name: i18n.t("achievements.normal.163.name"),
    get description() {
      return `Complete all the Eternity Challenges ${formatInt(5)} times with less than ${formatInt(1)}
      second (game time) in your current Reality.`;
    },
    checkRequirement: () => EternityChallenges.all.map(ec => ec.completions).min() >= 5 &&
      Time.thisReality.totalSeconds <= 1,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 164,
    name: i18n.t("achievements.normal.164.name"),
    get description() { return `Get ${format(Decimal.NUMBER_MAX_VALUE, 1)} Infinities.`; },
    checkRequirement: () => Currency.infinitiesTotal.gte(Decimal.NUMBER_MAX_VALUE),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() { return `Gain ×${formatInt(1024)} more Infinities.`; },
    effect: 1024
  },
  {
    id: 165,
    name: i18n.t("achievements.normal.165.name"),
    get description() { return `Get a level ${formatInt(5000)} Glyph with all Glyph level factors equally weighted.`; },
    checkRequirement: () => gainedGlyphLevel().actualLevel >= 5000 &&
      ["repl", "dt", "eternities"].every(
        i => player.celestials.effarig.glyphWeights[i] === player.celestials.effarig.glyphWeights.ep),
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
    reward: i18n.t("achievements.normal.165.reward")
  },
  {
    id: 166,
    name: i18n.t("achievements.normal.166.name"),
    get description() { return `Get a Glyph with level exactly ${formatInt(6969)}.`; },
    checkRequirement: () => gainedGlyphLevel().actualLevel === 6969,
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
    get reward() { return `+${formatInt(69)} to Glyph level.`; },
    effect: 69
  },
  {
    id: 167,
    name: i18n.t("achievements.normal.167.name"),
    get description() { return `Reach ${format(Decimal.NUMBER_MAX_VALUE, 1, 0)} Reality Machines.`; },
    checkRequirement: () => Currency.realityMachines.gte(Decimal.NUMBER_MAX_VALUE),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    reward: i18n.t("achievements.normal.167.reward"),
    effect: () => Math.clampMin(1, Currency.realityMachines.value.log2()),
    formatEffect: value => `${formatX(value, 2, 2)}`
  },
  {
    id: 168,
    name: i18n.t("achievements.normal.168.name"),
    get description() { return `Get ${formatInt(50)} total Ra Celestial Memory levels.`; },
    checkRequirement: () => Ra.totalPetLevel >= 50,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() { return `Get ${formatPercents(0.1)} more memories.`; },
    effect: 1.1
  },
  {
    id: 171,
    name: i18n.t("achievements.normal.171.name"),
    description: i18n.t("achievements.normal.171.description"),
    checkRequirement: () => Object.values(player.reality.glyphs.sac).every(s => s > 0),
    checkEvent: GAME_EVENT.GLYPHS_CHANGED,
    get reward() { return `Glyph sacrifice is ${formatX(2)} stronger.`; },
    effect: 2,
  },
  {
    id: 172,
    name: i18n.t("achievements.normal.172.name"),
    get description() {
      return `Reality for ${format(Decimal.NUMBER_MAX_VALUE, 1)} Reality Machines without having
      any Charged Infinity Upgrades, having any equipped Glyphs, or buying any Triad Studies.`;
    },
    checkRequirement: () => MachineHandler.gainedRealityMachines.gte(Decimal.NUMBER_MAX_VALUE) &&
      player.celestials.ra.charged.size === 0 && Glyphs.activeWithoutCompanion.length === 0 &&
      player.requirementChecks.reality.noTriads,
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
  },
  {
    id: 173,
    name: i18n.t("achievements.normal.173.name"),
    get description() { return `Reach ${formatPostBreak(DC.D9_99999E999, 5, 0)} Reality Machines.`; },
    checkRequirement: () => player.reality.realityMachines.gte(DC.D9_99999E999),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 174,
    name: i18n.t("achievements.normal.174.name"),
    description: i18n.t("achievements.normal.174.description"),
    checkRequirement: () => true,
    checkEvent: GAME_EVENT.SINGULARITY_RESET_BEFORE
  },
  {
    id: 175,
    name: i18n.t("achievements.normal.175.name"),
    get description() { return `Get ${formatInt(Ra.alchemyResourceCap)} of all Alchemy Resources.`; },
    checkRequirement: () => AlchemyResources.all.every(x => x.amount >= Ra.alchemyResourceCap),
    checkEvent: GAME_EVENT.REALITY_RESET_AFTER,
    get reward() {
      return `Synergism can go above ${formatPercents(1)} and Momentum increases ${formatX(10)} faster.`;
    },
    effect: 10,
  },
  {
    id: 176,
    name: i18n.t("achievements.normal.176.name"),
    description: i18n.t("achievements.normal.176.description"),
  },
  {
    id: 177,
    name: i18n.t("achievements.normal.177.name"),
    description: i18n.t("achievements.normal.177.description"),
    checkRequirement: () => SingularityMilestones.all.every(x => x.completions > 0),
    checkEvent: GAME_EVENT.SINGULARITY_RESET_AFTER,
  },
  {
    id: 178,
    name: i18n.t("achievements.normal.178.name"),
    get description() { return `Get ${formatInt(100000)} Antimatter Galaxies.`; },
    checkRequirement: () => player.galaxies >= 100000,
    checkEvent: GAME_EVENT.GALAXY_RESET_AFTER,
    get reward() { return `All Galaxies are ${formatPercents(0.01)} stronger.`; },
    effect: 1.01
  },
  {
    id: 181,
    displayId: 666,
    name: i18n.t("achievements.normal.181.name"),
    description: i18n.t("achievements.normal.181.description"),
    checkRequirement: () => Pelle.isDoomed,
    checkEvent: GAME_EVENT.REALITY_RESET_AFTER,
  },
  {
    id: 182,
    name: i18n.t("achievements.normal.182.name"),
    description: i18n.t("achievements.normal.182.description"),
    checkRequirement: () => PelleUpgrade.antimatterDimAutobuyers1.canBeApplied &&
      PelleUpgrade.antimatterDimAutobuyers2.canBeApplied,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 183,
    name: i18n.t("achievements.normal.183.name"),
    description: i18n.t("achievements.normal.183.description"),
    checkRequirement: () => Pelle.isDoomed && InfinityChallenge(5).isCompleted,
    checkEvent: GAME_EVENT.INFINITY_CHALLENGE_COMPLETED,
    // Weirdly specific reward? Yes, its V's ST bonus because we forgot to disable it
    // when balancing Pelle and only realised too late.
    get reward() { return `All Antimatter Dimensions are raised to ${formatPow(1.0812403840463596, 0, 3)}`; },
    effect: 1.0812403840463596
  },
  {
    id: 184,
    name: i18n.t("achievements.normal.184.name"),
    description: i18n.t("achievements.normal.184.description"),
    checkRequirement: () => PelleStrikes.eternity.hasStrike,
    checkEvent: GAME_EVENT.PELLE_STRIKE_UNLOCKED
  },
  {
    id: 185,
    name: i18n.t("achievements.normal.185.name"),
    description: i18n.t("achievements.normal.185.description"),
    checkRequirement: () => PelleStrikes.ECs.hasStrike,
    checkEvent: GAME_EVENT.PELLE_STRIKE_UNLOCKED
  },
  {
    id: 186,
    displayId: 181,
    name: i18n.t("achievements.normal.186.name"),
    description: i18n.t("achievements.normal.186.description"),
  },
  {
    id: 187,
    name: i18n.t("achievements.normal.187.name"),
    description: i18n.t("achievements.normal.187.description"),
    checkRequirement: () => PelleStrikes.dilation.hasStrike,
    checkEvent: GAME_EVENT.PELLE_STRIKE_UNLOCKED,
    // We forgot to disable a singularity milestone while balancing Pelle; now it's disabled
    // and this upgrade has the same effect as it used to.
    get reward() {
      return `Increase the multiplier per repeatable Dilated Time
      multiplier upgrade by ${formatX(1.35, 0, 2)}.`;
    },
    effect: 1.35
  },
  {
    id: 188,
    name: i18n.t("achievements.normal.188.name"),
    description: i18n.t("achievements.normal.188.name"),
    checkRequirement: () => GameEnd.endState > END_STATE_MARKERS.GAME_END && !GameEnd.removeAdditionalEnd,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
];
