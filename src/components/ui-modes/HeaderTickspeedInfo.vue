<script>
import GameSpeedDisplay from "@/components/GameSpeedDisplay";

export default {
  name: "HeaderTickspeedInfo",
  components: {
    GameSpeedDisplay
  },
  data() {
    return {
      mult: new Decimal(0),
      tickspeed: new Decimal(0),
      galaxyCount: 0,
      purchasedTickspeed: 0,
      freeTickspeed: 0,
    };
  },
  computed: {
    tickspeedDisplay() {
      return this.$t("message.totalTickSpeed", { tickSpeed: format(this.tickspeed, 2, 3) });
    },
    perUpgrade() {
      if (InfinityChallenge(3).isRunning)
        return this.$t("message.tickSpeedUpgradesGiveToAllAds", {
          rate: formatX(1.05 + this.galaxyCount * 0.005, 3, 3)
        });
      return this.$t("message.adsProduceFasterPerTickSpeedUpgrade", { rate: formatX(this.mult.reciprocal(), 2, 3) });
    },
  },
  methods: {
    update() {
      this.mult.copyFrom(Tickspeed.multiplier);
      this.tickspeed.copyFrom(Tickspeed.perSecond);
      this.galaxyCount = player.galaxies;
      this.purchasedTickspeed = player.totalTickBought;
      this.freeTickspeed = FreeTickspeed.amount;
    },
  },
};
</script>

<template>
  <div>
    <br>
    {{ perUpgrade }}
    <br>
    {{ tickspeedDisplay }}
    <br>
    <GameSpeedDisplay />
  </div>
</template>

<style scoped>

</style>
