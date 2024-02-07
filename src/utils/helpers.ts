export function isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
}

export function isValidName(name: string): boolean {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
}

export function isValidMessage(message: string): boolean {
    return message.length > 0;
}
