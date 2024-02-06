function isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
}

function isValidPhoneNumber(phoneNumber: string): boolean {
    const phoneNumberRegex = /^\d{10}$/;
    return phoneNumberRegex.test(phoneNumber);
}

export { isValidEmail, isValidPhoneNumber };