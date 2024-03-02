// 로컬 스토리지에 저장
export function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.warn(e); // 오류 메세지 출력
  }
}

// 로컬 스토리지에서 불러오기
export function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}
