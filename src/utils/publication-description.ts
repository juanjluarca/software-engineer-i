export default class PublicationDescription {
    public value: string;

    constructor(value: string) {
        this.isValid(value);
        this.value = value;
    }

    private isValid(description: string): void {
        if (description.length < 5) {
            throw new Error("Description must be at least 5 characters")
        }
    }
}

