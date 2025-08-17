export default class PublicationTitle {
    public value: string;

    constructor(value: string) {
        this.isValid(value);
        this.value = value;
    }

    private isValid(title: string): void {
        if (title.length < 2) {
            throw new Error("Title must be at least 2 characters")
        }
    }
}
