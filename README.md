# 멋쟁이사자처럼🦁 Js-homework [1]

---

# 로그인 기능 구현하기 
 - 정규 표현식을 통한 아이디 , 비밀번호 유효성 검사
 - 아이디 or 비밀번호가 일치하지 않으면 경고를 보여주는 css 클래스 추가or삭제
# 추가구현 
 - 입력 도중 값을 지워 버리면 처음에 뜬 경고문이 사라 지도록 구현

 ---
💥💥💥💥

[결과물 보러가기](https://stalwart-halva-7ac27c.netlify.app)

💥💥💥💥

# 주요코드 🔨 함수분리

```js
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
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

// global

// *전역* 아이디 와 비밀번호의 통과여부 상태


let perfectId = false;
let perfectPassword = false;



const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const submmitBtn = document.querySelector(".btn-login");



/* ------------------ handle fuction ------------------ */

/** ID input 값에 변환이 있을 때 실행되는 함수 */
function handleId() {
  let valueToLength = this.value.length;
  perfectId = user.id === this.value;
  let isCorrectId = emailReg(this.value); //로직 불린 반환
  if (valueToLength == 0) isCorrectId = true;
  return isCorrectId ? removeClassList(userEmail) : addClassList(userEmail);
}

/** password input 값에 변환이 있을 때 실행되는 함수  */
function handlePassword() {
  let valueToLength = this.value.length;
  let isCorrectPassword = pwReg(this.value);
  perfectPassword = user.pw === this.value;
  if (valueToLength == 0 || null) isCorrectPassword = true;
  return isCorrectPassword
    ? removeClassList(userPassword)
    : addClassList(userPassword);
}

/** 제출 함수 조건이 둘다 참 인 경우 location 변경 */
function handleSubmit(e) {
  e.preventDefault();
  console.log(perfectId, perfectPassword);
  if (perfectId && perfectPassword) {
    console.log(perfectId, perfectPassword);
    location.href = "welcome.html";
  } else if (perfectPassword === false || perfectId === false) {
    alert("아이디 비밀번호를 다시 확인해주세요");
  }
}

userEmail.addEventListener("input", handleId);
userPassword.addEventListener("input", handlePassword);
submmitBtn.addEventListener("click", handleSubmit);


 // CSS control 
/**css를 조건에 따라 추가 해주는 함수 items 에는 userEmail 과 userPassword 를 받아 조건 부 처리 */

function addClassList(items) {
  if (items === userEmail) {
    items.classList.add("is--invalid");
  } else if (items === userPassword) {
    let dis = document.getElementById("userPasswordError");
    dis.style.display = "block";
  }
}

/** 조건에 따라 css 속성을 안 보이게 해주는 함수 */
function removeClassList(items) {
  if (items === userEmail) {
    items.classList.remove("is--invalid");
  }   else if (perfectPassword === false || perfectId === false) {
    alert('아이디 비밀번호를 다시 확인해주세요')
  }
}

/* ---------------- auth login ---------------- */

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}
```
