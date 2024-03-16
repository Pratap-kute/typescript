interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
}
const user: User = { dbId: 22, email: "h@h.com", userId: 1 };
