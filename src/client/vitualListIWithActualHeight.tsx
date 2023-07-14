import React, { memo, useState, useMemo, useCallback, useRef } from 'react';

// 有确定高度
const VirList3 = memo(function ({
  list = [],
  containerHeight = 800,
  ItemBox = <></>,
  itemHeight = 50,
  ...props
}) {
  const ContainerRef = useRef();
  const [startIndex, setStartIndex] = useState(0);
  // 用于撑开Container的盒子，计算其高度
  const wraperHeight = useMemo(
    function () {
      return list.length * itemHeight;
    },
    [list, itemHeight]
  );
  // 可视区域最多显示的条数
  const limit = useMemo(
    function () {
      return Math.ceil(containerHeight / itemHeight);
    },
    [startIndex]
  );
  // 当前可视区域显示的列表的结束索引
  const endIndex = useMemo(
    function () {
      return Math.min(startIndex + limit, list.length - 1);
    },
    [startIndex, limit]
  );

  const handleSrcoll = useCallback(
    function (e) {
      if (e.target !== ContainerRef.current) return;
      const scrollTop = e.target.scrollTop;
      const currentIndex = Math.floor(scrollTop / itemHeight);
      if (currentIndex !== startIndex) {
        setStartIndex(currentIndex);
      }
    },
    [ContainerRef, itemHeight, startIndex]
  );

  const renderList = useCallback(
    function () {
      const rows = [];
      for (let i = startIndex; i <= endIndex; i++) {
        // 渲染每个列表项
        rows.push(
          <ItemBox
            data={i}
            key={i}
            style={{
              width: '100%',
              height: itemHeight - 1 + 'px',
              borderBottom: '1px solid #aaa',
              position: 'absolute',
              top: i * itemHeight + 'px',
              left: 0,
              right: 0,
            }}
          />
        );
      }
      return rows;
    },
    [startIndex, endIndex, ItemBox]
  );

  return (
    <div
      className="container"
      style={{
        height: containerHeight + 'px',
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
      ref={ContainerRef}
      onScroll={handleSrcoll}
    >
      <div
        className="listBox"
        style={{
          height: wraperHeight + 'px',
          backgroundColor: 'pink',
          position: 'relative',
        }}
      >
        {renderList()}
      </div>
    </div>
  );
});

const VirList = () => {
  const [items] = useState(Array(10000).fill(1));
  const ItemBox = memo(function ({ data = '', index = 0, style = {} }) {
    return (
      <div style={style} id={`item-${index}`}>
        {data}
      </div>
    );
  });
  return (
    <div>
      <VirList3 list={items} containerHeight={500} ItemBox={ItemBox} />
    </div>
  );
};

// 无确定高度

export default VirList;
