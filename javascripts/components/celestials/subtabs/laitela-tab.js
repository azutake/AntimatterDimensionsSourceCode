"use strict";

Vue.component("laitela-tab", {
  data() {
    return {
      matter: new Decimal(0),
      nextUnlock: "",
      matterEffectPercentage: "",
      dimMultNerf: 0,
    };
  },
  methods: {
    update() {
      this.matter = player.celestials.laitela.matter;
      this.nextUnlock = Laitela.nextMatterDimensionThreshold;
      this.matterEffectPercentage = Laitela.matterEffectPercentage;
      this.dimMultNerf = Laitela.dimMultNerf;
      this.realityReward = Laitela.realityReward;
    },
    startRun() {
      Laitela.startRun();
    },
    buyUnlock(info) {
      Laitela.buyUnlock(info);
    },
    hasUnlock(info) {
      return Laitela.has(info);
    },
    canBuyUnlock(info) {
      return Laitela.canBuyUnlock(info);
    },
    unlockClassObject(info) {
      return {
        "o-laitela-shop-button-bought": this.hasUnlock(info), 
        "o-laitela-shop-button-available": this.canBuyUnlock(info)
      };
    }
  },
  computed: {
    dimensions: () => MatterDimensionState.list,
    runUnlockThresholds: () => laitelaRunUnlockThresholds,
    unlocksInfo: () => LAITELA_UNLOCKS,
    activeDimensions() {
      return this.dimensions.filter(d => d.amount.neq(0));
    }
  },
  template:
    `<div class="l-laitela-celestial-tab">
      <button class="o-laitela-run-button" @click="startRun">Start La'itela's Reality, tickspeed is disabled and all dimension multipliers are decreased based on matter, currently x^{{ shorten(dimMultNerf, 3, 3) }}
      <br>
      Multiply all matter dimensions based on highest AM reached, Currently: {{ shorten(realityReward, 2, 2)}}x</button>
      <div class="o-laitela-matter-amount">You have {{ shorten(matter, 2, 0) }} Matter</div>
      <div>Matter causes your dimension cost multipliers to increase {{ matterEffectPercentage }} slower</div>
      <matter-dimension-row
        v-for="(dimension, i) in activeDimensions"
        :key="i"
        :dimension="dimension"
      />
      <div>{{ nextUnlock }}</div>
      <div class="l-laitela-unlocks-container">
        <button 
          v-for="unlock in unlocksInfo" 
          :key="unlock.id" 
          class="o-laitela-shop-button"
          :class="unlockClassObject(unlock)"
          @click="buyUnlock(unlock)"> 
            {{ unlock.description }} <br/> Costs: {{ shorten(unlock.price, 2, 2) }} matter 
            <span v-if="unlock.value"><br/>Currently: {{ unlock.format(unlock.value()) }}</span>
        </button>
      </div>
    </div>`
});