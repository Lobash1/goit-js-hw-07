
//  3 завдання - якщо в інпут нічого не введено,
//   не забувайте підставляти “Anonymous”.
// 4 завдання - всі інпути заповнені. 
// Тільки тоді виводимо об’єкт у консоль.
// І це має бути саме об’єкт з двома властивостями, не рядок.
//   У 3 та 4 завданнях необхідно використовувати 
// метод для рядків trim() - String.prototype.trim()


const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

console.log(input, output);

input.addEventListener('input', (event) => {
    const trimValue = event.target.value.trim();
    output.textContent = trimValue || 'Anonymous';
    console.log(trimValue);
});

 