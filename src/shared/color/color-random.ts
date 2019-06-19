export default class ColorRandom {
    private static count = 0;

    private static colors: string[] = [
      '#F44336',
      '#2196F3',
      '#cddc39',
      '#4caf50',
      '#6d4c41',
    ]

    public static get(): string {
      const color = this.colors[this.count];
      this.count = this.count + 1;
      if (this.count === this.colors.length) {
        this.count = 0;
      }
      return color;
    }
}
