import { User}  from "./types";

export  async function getUsers(): Promise<User[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(response);
    if (!response.ok) {
      throw new Error(response.toString());
    }
    return response.json();
  }