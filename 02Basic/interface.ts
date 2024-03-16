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

// below is reopening of interface User basically extending it
// it's just fancy way of saying adding more properties to the interface
interface User {
  githubId?: string;
}

//inheritance in interface
interface Admin extends User {
  role: "admin" | "superadmin";
}
