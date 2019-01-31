export const createAdminObject = () => {
  localStorage.setItem('admin', JSON.stringify({
    email: 'admin@admin.com',
    password: 'admin'
  }));
}

export const getAdmin = () => JSON.parse(localStorage.getItem('admin'));

export const isAdmin = user => {
  const admin = getAdmin();
  return (user.email === admin.email && user.password === admin.password);
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

export const deleteUser = email => {
  let users = getUsers();
  users = users.filter(u => u.email !== email);
  localStorage.setItem('users', JSON.stringify(users));
}


