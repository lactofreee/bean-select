export const BASE_URL = "http://localhost:8000";
const BASE_URL_FASTAPI_WITH_NGROK = "https://43e5-110-9-240-94.ngrok-free.app";
const UID = "b3Blbn"; // 브라질 시티오 아라우카리아 옐로우 카투아이

export async function fetchData() {
  return fetch(`${BASE_URL}/data`).then((res) => res.json());
}

export async function fetchProductSearchData() {
  return fetch(`${BASE_URL_FASTAPI_WITH_NGROK}/product/serach?uid=${UID}`).then(
    (res) => res.json()
  );
}

export async function fetchProductData() {
  return fetch(`${BASE_URL}/productData`).then((res) => res.json());
}

export async function fetchUserInfo() {
  return fetch(`${BASE_URL}/userInfo`).then((res) => res.json());
}

// comment창에서 데이터를 입력하면 onSubmitHandler를 통해 서버에 POST 요청을 보냄


//쌩으로 서버에 post 요청 보내보기
//async 사용해서 post 요청 보내기
//react query tkdydgotj post 요청 관리하기