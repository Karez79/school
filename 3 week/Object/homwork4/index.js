const student = {
  fullName: 'Максим',
  experienceInMonths: 12,
  stack: ['HTML', 'CSS', 'JavaScript', 'React'],
};

const giveJobToStudent = (student, jobName) => {
  console.log(
    `Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${jobName}`
  );
  return {
    ...student,
    job: jobName, // добавляем новое свойство job
  };
};

const updatedStudent = giveJobToStudent(student, 'веб-разработчик');
console.log(updatedStudent);
