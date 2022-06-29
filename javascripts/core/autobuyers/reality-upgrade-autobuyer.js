import { Autobuyer, AutobuyerState } from "./autobuyer";

class RealityUpgradeAutobuyerState extends AutobuyerState {
  get name() {
    return RealityUpgrade(this.id).config.name;
  }

  get data() {
    return player.auto.realityUpgrades.all[this.id - 1];
  }

  get isUnlocked() {
    return Ra.unlocks.instantECAndRealityUpgradeAutobuyers.canBeApplied;
  }

  tick() {
    RealityUpgrade(this.id).purchase();
  }

  static get entryCount() { return 5; }
  static get autobuyerGroupName() { return "Reality Upgrade"; }
  static get isActive() { return player.auto.realityUpgrades.isActive; }
  static set isActive(value) { player.auto.realityUpgrades.isActive = value; }
}

Autobuyer.realityUpgrade = RealityUpgradeAutobuyerState.createAccessor();
