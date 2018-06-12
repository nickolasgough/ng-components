export class NgNavButton {
  icon: string;
  label: string;
  action: () => void;

  constructor(icon: string, label: string, action: () => void) {
    this.icon = icon;
    this.label = label;
    this.action = action;
  }
}
