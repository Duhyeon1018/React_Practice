import React, { useState } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 ID
  const [deletedItem, setDeletedItem] = useState(null); // 최근 삭제된 항목을 저장
  const [isAscending, setIsAscending] = useState(true); // 정렬 상태를 관리

  // 텍스트 입력 변화 처리
  const onChange = (e) => setInputText(e.target.value);

  // 항목 추가 처리
  const onClick = () => {
    if (names.some((name) => name.text === inputText)) {
      alert('중복된 항목이 존재합니다!');
      return; // 중복 항목 추가 방지
    }

    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1); // nextId 값을 1 증가
    setNames(nextNames); // names 값을 업데이트
    setInputText(''); // inputText를 비운다
  };

  // 항목 삭제 처리
  const onRemove = (id) => {
    const confirmation = window.confirm('정말 삭제하시겠습니까?');
    if (confirmation) {
      const removedItem = names.find((name) => name.id === id); // 삭제된 항목
      setDeletedItem(removedItem); // 최근 삭제된 항목 저장
      const nextNames = names.filter((name) => name.id !== id);
      setNames(nextNames); // names 값을 업데이트하여 삭제 처리
    }
  };

  // 항목 수정 기능 (우클릭)
  const onRightClick = (id, e) => {
    e.preventDefault(); // 기본 우클릭 메뉴 방지
    const newText = prompt('수정할 텍스트를 입력하세요');
    if (newText && newText.trim() !== '') {
      setNames(
        names.map((name) =>
          name.id === id ? { ...name, text: newText } : name,
        ),
      );
    }
  };

  // 삭제 취소 (최근 삭제된 항목 복원)
  const onUndoRemove = () => {
    if (deletedItem) {
      setNames([...names, deletedItem]);
      setDeletedItem(null);
    } else {
      alert('복원할 항목이 없습니다.');
    }
  };

  // 항목 정렬 기능
  const toggleSort = () => {
    const sortedNames = [...names].sort((a, b) => {
      if (isAscending) {
        return a.text.localeCompare(b.text); // 오름차순
      } else {
        return b.text.localeCompare(a.text); // 내림차순
      }
    });

    setNames(sortedNames); // 정렬된 names 배열로 상태 업데이트
    setIsAscending(!isAscending); // 정렬 상태 토글
  };

  const namesList = names.map((name) => (
    <li
      key={name.id}
      onDoubleClick={() => onRemove(name.id)} // 더블 클릭으로 항목 삭제
      onClick={() => onItemClick(name.id)} // 클릭으로 ID 확인
      onContextMenu={(e) => onRightClick(name.id, e)} // 우클릭으로 항목 수정
    >
      {name.text}
    </li>
  ));

  return (
    <div>
      <input
        value={inputText}
        onChange={onChange}
        placeholder="항목을 입력하세요"
      />
      <button onClick={onClick}>추가</button>
      <button onClick={toggleSort}>
        {isAscending ? '내림차순 정렬' : '오름차순 정렬'}
      </button>
      <button onClick={onUndoRemove}>삭제 취소</button>
      <ul>{namesList}</ul>

      {/* 삭제된 항목 표시 */}
      {deletedItem && (
        <div>
          <p>최근 삭제된 항목: {deletedItem.text}</p>
        </div>
      )}
    </div>
  );
};

export default IterationSample;
