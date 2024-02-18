# assignment
react로 간단한 CRUD 만들기

- [x] 게시물 생성
   - 게시물 입력되도록 form 컴포넌트 추가
   - 입력 버튼 누르면 제목, 내용 useState로 저장
  
- [x] 게시물 보기
   - 저장된 게시물 Lists 컴포넌트 추가
   - useState로 저장된 게시물 데이터 props로 받아와서 뿌리기

- [x] 게시물 수정
   - 선택된 게시물과 수정된 게시물 id값 같은지 검사 후 form에 데이터 가져오기
   - Lists 컴포넌트에서 게시물 선택하면 form에 수정 모드 UI로 변경
   
- [x] 게시물 수정
   - Lists 컴포넌트에서 게시물 클릭시 form에 수정 모드 UI로 변경 
   - 선택된 게시물 데이터 찾아 useState로 저장해서 form 에 불러오기
   - 수정버튼 클릭 시선택된 게시물과 수정된 게시물 id값 같으면 수정된 데이터로 저장
   
- [x] 게시물 삭제
   - 선택된 게시물 id값이 아닌 데이터들만 저장
  
- [x] handleReadClick, handleDeleteClick 함수 재생성 및 Lists 컴포넌트 불필요한 렌더링 및  방지 
   - 똑같은 props를 넘겨 받았을 때 같은 결과를 렌더링 하고 있어 불필요한 컴포넌트 렌더링을 방지하기 위해 React.memo를 사용해서 처리함. 이전과 같은 props가 들어올때는 렌더링 과정을 스킵하고 가장 최근에 렌더링된 결과를 재사용함.
  - handleReadClick, handleDeleteClick 함수 useCallback으로 재생성 방지 처리하여 자식 컴포넌트에 props로 함수를 내려주기 때문에 리렌더링 되지 않도록 함.




