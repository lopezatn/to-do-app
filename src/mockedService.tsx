interface UserData {
  username: string;
  name: string;
}

const loginUser = (
  username: string,
  password: string
): UserData | undefined => {
  if (username === "admin" && password === "admin") {
    return { username, name: "Toto Caputo" };
  } else {
    return undefined;
  }
};

export default loginUser;
