const peopleWaiting = [
  'Кристина',
  'Олег',
  'Кирилл',
  'Мария',
  'Светлана',
  'Артем',
  'Глеб',
];
console.log(`Изначально людей в очереди:`, peopleWaiting.length);

const giveParcel = () => {
  for (let i = 0; i < 3; i++) {
    const firstPerson = peopleWaiting.shift(); // Удаляем первого человека из очереди
    console.log(
      `${firstPerson} получил(а) свою посылку. В очереди осталось ${peopleWaiting.length} человек.`
    );
  }
  console.log(peopleWaiting);
};

const leaveQueueWithoutParcel = () => {
  const remainingPeople = peopleWaiting.length;
  console.log('сколько людей осталось', remainingPeople);
  for (let i = 0; i < remainingPeople; i++) {
    const person = peopleWaiting.pop(); // Удаляем с конца очереди
    console.log(`${person} не дождался(ась) и ушел(ла).`);
  }
};

giveParcel();
leaveQueueWithoutParcel();
