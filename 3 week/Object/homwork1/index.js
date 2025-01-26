const users = [
  {
    username: 'David',
    status: 'online',
    lastActivity: 10,
  },
  {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22,
  },
  {
    username: 'Bob',
    status: 'online',
    lastActivity: 104,
  },
];

const onlineUsers = users.filter((users) => users.status === 'online');
console.log(onlineUsers);

const usersOnlineNames = onlineUsers.map((onlineUser) => onlineUser.username);
console.log(
  'usersOnlineNames',
  `Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`
);
