export {};
let score: number | string;

score = 10;

score = "10";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let amol: User | Admin = { name: "Amol", id: 1 };
amol = { username: "amol", id: 1 };

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toUpperCase();
  }
}

const data: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const data1: (number | string)[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "10"];

let seatallocation: "aisle" | "middle" | "window";

seatallocation = "aisle";
seatallocation = "middle";
