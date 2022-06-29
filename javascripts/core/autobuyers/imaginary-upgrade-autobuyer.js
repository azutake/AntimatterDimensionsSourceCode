import { Autobuyer, AutobuyerState } from "./autobuyer";

class ImaginaryUpgradeAutobuyerState extends AutobuyerState {
  get name() {
    return ImaginaryUpgrade(this.id).config.name;
  }

  get data() {
    return player.auto.imaginaryUpgrades.all[this.id - 1];
  }

  get isUnlocked() {
    return ImaginaryUpgrade(20).isBought;
  }

  tick() {
    ImaginaryUpgrade(this.id).purchase();
  }

  static get entryCount() { return 10; }
  static get autobuyerGroupName() { return "Imaginary Upgrade"; }
  static get isActive() { return player.auto.imaginaryUpgrades.isActive; }
  static set isActive(value) { player.auto.imaginaryUpgrades.isActive = value; }
}

Autobuyer.imaginaryUpgrade = ImaginaryUpgradeAutobuyerState.createAccessor();
