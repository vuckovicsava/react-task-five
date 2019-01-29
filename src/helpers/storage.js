export const createAdminObject = () => {
  localStorage.setItem('admin', JSON.stringify({
    email: 'admin@admin.com',
    password: 'admin'
  }));
}

export const createUsers = () => {
  if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([]));
  }
}

export const getUsers = () => {
  return JSON.parse(localStorage.getItem('users'));
}

export const createUser = user => {
  const users = getUsers();
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
}

export const findUserByEmail = email => {
  const users = getUsers();
  return users.find(u => u.email === email);
}



