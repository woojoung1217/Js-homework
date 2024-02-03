/*by woojoung YOON */


/* ------------------ 요구사항 명세 ----------------- */

/*
1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리
*/

/* ------------------- logic ------------------ */



const user = {
  id: 'asd@naver.com',
  pw: 'spdlqj123!@'
}


// global 

// *전역* 아이디 와 비밀번호의 통과여부 상태 

let perfectId = false;
let perfectPassword = false;



const userEmail = document.querySelector('#userEmail');
const userPassword = document.querySelector('#userPassword');
const submmitBtn = document.querySelector('.btn-login');




/**css를 조건에 따라 추가 해주는 함수 items 에는 userEmail 과 userPassword 를 받아 조건 부 처리 */
function addClassList(items) {
  if (items === userEmail) {
    items.classList.add('is--invalid');
  } else if (items === userPassword) {
    let dis = document.getElementById('userPasswordError');
    dis.style.display = 'block';
  }
}

/** 조건에 따라 css 속성을 안 보이게 해주는 함수 */
function removeClassList(items) {
  if (items === userEmail) {
    items.classList.remove('is--invalid');
  } else if (items === userPassword) {
    let dis = document.getElementById('userPasswordError');
    dis.style.display = 'none';
  }
}




/* ------------------ handle fuction ------------------ */


function handleId() {
  let valueToLength = this.value.length;
  perfectId = user.id === this.value;

  let isCorrectId = emailReg(this.value) //로직 불린 반환
  if (valueToLength == 0) {
    isCorrectId = true;
  }
  return isCorrectId ? removeClassList(userEmail) : addClassList(userEmail)
}


function handlePassword() {
  let valueToLength = this.value.length;
  let isCorrectPassword = pwReg(this.value);
  perfectPassword = user.pw === this.value;
  console.log(perfectPassword);
  if (valueToLength == 0 || null) {
    isCorrectPassword = true;
  }
  return isCorrectPassword ? removeClassList(userPassword) : addClassList(userPassword)
}


function handleSubmit(e) {
  e.preventDefault();

  if (perfectId && perfectPassword) {
    window.location.href = 'welcome.html'
  } else if (perfectPassword === false) {
    let dis = document.getElementById('userPasswordError');
    dis.innerHTML = '아이디 혹은 비밀번호가 잘못 됐습니다. ';
  }
}


userEmail.addEventListener('input', handleId)
userPassword.addEventListener('input', handlePassword)
submmitBtn.addEventListener('click', handleSubmit)





/* ---------------- auth login ---------------- */

function emailReg(text) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(text).toLowerCase())
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}











