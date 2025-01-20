import React, { useState, useMemo, useCallback } from 'react';

const getAverage = (numbers) => {
  console.log('평균값 계산 중..');
  if (numbers.length === 0) return 0;
  // reduce, 내장함수, -> 이전값을 받아서, 행위를 해서, 새로운 값을 누적해서 반환.
  // reduce(콜백함수, 초깃값)
  const sum = numbers.reduce((a, b) => a + b, 0); // 초기값 0 추가
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  // 실습 1-1, 숫자인 경우만 업데이트 해보기.
  const onChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value.trim() !== '') {
      console.log('숫자인 경우만, onChange');
      setNumber(value);
    }
    // console.log("숫자가 아닌 경우만, onChange")
    // setNumber(e.target.value);
  };

  // 실습4, 응용1, 마지막에 추가된 요소의 인덱스를 기억하기.
  const [lastAddedIndex, setLastAddedIndex] = useState(null);

  // 실습 1-2, 공백 입력시 유효성 체크.
  // 추가로, 해당 함수를 매번 새로 생성?, 재사용?
  // useCallback 이용하면 됨.
  const onInsert = useCallback(() => {
    // parseInt(number, 10), number 문자열로 된 숫자, 숫자 타입 변경,
    // 진법 10 진법 표기.
    // 유효성 체크
    const parsedNumber = parseInt(number, 10);
    if (isNaN(parsedNumber) && parsedNumber < 0) {
      setNumber('');
      // inputEl.current.focus();
      return;
    }

    const nextList = list.concat(parseInt(number, 10));
    setList(nextList);
    setNumber('');

    // 실습 4-2 , 인덱스 추가. 최근 추가된 숫자 요소의 인덱스
    // 실습 5 , 적용을 하면, 기존은 무조건 마지막 요소의 인덱스만
    // 추가를 했다면, 입력된 값과, 현재 평균값을 비교해서, 다시
    // 인덱스를 재설정 해야함.
    setLastAddedIndex(nextList.length - 1);
  }, [number, list]);

  // useMemo, 추가, 기존 평균 구하는 함수를 메모 이용하기.
  const avg = useMemo(() => getAverage(list), [list]);
  // 실습 2, 사용하기전, 콘솔 확인 해보기.
  // 숫자 입력 중에도, 불필요한 연산을 계속함.
  // const avg = getAverage(list);

  return (
    <div>
      <input
        value={number}
        onChange={onChange}
        placeholder="숫자를 입력하세요"
      />
      <button onClick={onInsert}>추가</button>
      <ul>
        {/* 실습 5, 응용2, 평균값 기준 필터링, filter 내장함수 이용 */}
        {list
          // 1차로, list에서 각 요소를 다 순회 하면서, 평균 보다 큰 요소를
          // 따로 뽑아서 새로운 배열 생성
          .filter((value) => value > avg)
          // 1차로 , 새롭게 뽑은 배열을 가지고, 다시 map 함수를 사용.
          .map((value, index) => (
            <li
              key={index}
              style={{ color: index === lastAddedIndex ? 'red' : 'black' }}
            >
              {value}
            </li>
          ))}
      </ul>
      <div>
        {/* <b>평균값:</b> {getAverage(list)} */}
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
