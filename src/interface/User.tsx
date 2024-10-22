export default interface User {
    role: string;
    cart: { [key: string]: number };
}
