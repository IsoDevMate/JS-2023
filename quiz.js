async function getUsers(names) {
  const baseUrl = 'https://api.github.com/users/';

  const fetchUser = async (name) => {
    const url = baseUrl + name;

    try {
      const response = await fetch(url);

      if (response.ok) {
        const user = await response.json();
        return user;
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  };

  const userPromises = names.map((name) => fetchUser(name));
  const users = await Promise.all(userPromises);

  return users;
}
