interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrial: () => string;
  getCoupon(couponname: string): number;
}
const user: User = {
  dbId: 22,
  email: "h@h.com",
  userId: 1,
  startTrial: () => {
    return "start trial";
  },
  getCoupon: (couponname: "amol") => {
    return 100;
  },
};
