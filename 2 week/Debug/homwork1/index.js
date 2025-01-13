let health = prompt('Введите число параметра "здоровье" для персонажа')
if (health <= 0 || !health) {  
  alert('Параметр "здоровье" должен быть больше нуля!')
  console.log(health)
} else { 
  alert(`Параметр "здоровье" равен ${health}`);
  console.log(health)
} 