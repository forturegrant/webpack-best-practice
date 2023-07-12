import React, { memo, useState, useMemo, useCallback, useRef } from 'react';

const Item = ({ item }) => {
  return (
    <div
      style={{
        backgroundColor: 'red',
        height: '50px',
        position: 'absolute',
        top: item.i * 50,
      }}
    >
      {item.item}
    </div>
  );
};

const VirList = ({ arr }) => {
  const [startIndex, setStartIndex] = useState(0);
  const wrapperHeight = 500000;
  const containerHeight = 500;

  // 当前可视区域显示的列表的结束索引
  //   const endIndex = useMemo(
  //     function () {
  //       return Math.min(startIndex + limit, list.length - 1);
  //     },
  //     [startIndex, limit]
  //   );

  const handleScroll = (e) => {
    console.log(e.target.scrollTop);
    const index = Math.floor(e.target.scrollTop / 50);
    setStartIndex(index);
  };

  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i >= startIndex && i <= startIndex + 10) {
      newArr.push({
        item: arr[i],
        i,
      });
    }
  }

  console.log(newArr, 'newArr');

  return (
    <div
      style={{ height: `${containerHeight}px`, overflowY: 'auto' }}
      onScroll={handleScroll}
    >
      <div
        style={{
          height: `${wrapperHeight}px`,
          position: 'relative',
        }}
      >
        {newArr.map((item, index) => (
          <Item item={item} />
        ))}
      </div>
    </div>
  );
};

export default VirList;
