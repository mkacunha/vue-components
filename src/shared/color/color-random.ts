export default class ColorRandom {
    private static count = 0;
    private static colors: string[] = [
        '#F44336',
        '#2196F3',
        '#cddc39',
        '#4caf50',
        '#6d4c41'
    ]
    
    private constructor() {

    }

    public static get(): string {
        let color = this.colors[this.count];
        this.count++;
        if (this.count === this.colors.length) {
            this.count = 0;
        }
        return color;
    }
}