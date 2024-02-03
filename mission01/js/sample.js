

// queryselector

/* eslint-disable */


const idField = document.querySelector('#idField');

const submmit = document.querySelector('.btn')




// eventListner

function handleCheckId() {
  console.log(this.value)
  if (this.value === 'success') {
    console.log('yeaha')
  } else {
    idField.classList.add('is-active')
  }

}

function handleCheckSubmit(e) {
  e.preventDefault()
  console.log('제출')
}



submmit.addEventListener('click', handleCheckSubmit);
idField.addEventListener('input', handleCheckId)



// preventDefault

