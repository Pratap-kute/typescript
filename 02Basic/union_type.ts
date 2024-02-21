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
