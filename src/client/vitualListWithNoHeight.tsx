import React, {
  memo,
  useState,
  useMemo,
  useCallback,
  useRef,
  useEffect,
} from "react";
import { idText, isIfStatement, ListFormat } from "typescript";

const VirList4 = memo(function ({
  list = [],
  containerHeight = 800,
  ItemBox = <></>,
  estimatedItemHeight = 90,
  ...props
}) {
  const ContainerRef = useRef();
  const WraperRef = useRef();
  const [startIndex, setStartIndex] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const [positionCache, setPositionCache] = useState(function () {
    const positList = [];
    list.forEach((_, i) => {
      positList[i] = {
        index: i,
        height: estimatedItemHeight,
        top: i * estimatedItemHeight,
        bottom: (i + 1) * estimatedItemHeight,
      };
    });
    return positList;
  });

  const limit = useMemo(
    function () {
      let sum = 0;
      let i = 0;
      for (; i < positionCache.length; i++) {
        sum += positionCache[i].height;
        if (sum >= containerHeight) {
          break;
        }
      }
      return i;
    },
    [positionCache]
  );

  const endIndex = useMemo(
    function () {
      return Math.min(startIndex + limit, list.length - 1);
    },
    [startIndex, limit]
  );

  const wraperHeight = useMemo(
    function () {
      let len = positionCache.length;
      if (len !== 0) {
        return positionCache[len - 1].bottom;
      }
      return list.length * estimatedItemHeight;
    },
    [list, positionCache, estimatedItemHeight]
  );

  useEffect(
    function () {
      const nodeList = WraperRef.current.childNodes;
      const positList = [...positionCache];
      let needUpdate = false;
      nodeList.forEach((node, i) => {
        let newHeight = node.getBoundingClientRect().height;
        const nodeID = Number(node.id.split("-")[1]);
        const oldHeight = positionCache[nodeID]["height"];
        const dValue = oldHeight - newHeight;
        if (dValue) {
          needUpdate = true;
          positList[nodeID].height = node.getBoundingClientRect().height;
          positList[nodeID].bottom =
            nodeID > 0
              ? positList[nodeID - 1].bottom + positList[nodeID].height
              : positList[nodeID].height;
          positList[nodeID].top = nodeID > 0 ? positList[nodeID - 1].bottom : 0;
          for (let j = nodeID + 1, len = positList.length; j < len; j++) {
            positList[j].top = positList[j - 1].bottom;
            positList[j].bottom += dValue;
          }
        }
      });
      if (needUpdate) {
        setPositionCache(positList);
      }
    },
    [scrollTop]
  );

  const getTransform = useCallback(
    function () {
      return `translate3d(0,${
        startIndex >= 1 ? positionCache[startIndex - 1].bottom : 0
      }px,0)`;
    },
    [positionCache, startIndex]
  );

  const handleSrcoll = useCallback(
    function (e) {
      if (e.target !== ContainerRef.current) return;
      const scrollTop = e.target.scrollTop;
      setScrollTop(scrollTop);
      const currentStartIndex = getStartIndex(scrollTop);
      console.log(currentStartIndex);
      if (currentStartIndex !== startIndex) {
        setStartIndex(currentStartIndex);
        console.log(startIndex + "====--" + limit + "--====" + endIndex);
      }
    },
    [ContainerRef, estimatedItemHeight, startIndex]
  );

  const renderList = useCallback(
    function () {
      const rows = [];
      for (let i = startIndex; i <= endIndex; i++) {
        rows.push(
          <ItemBox
            data={list[i]}
            index={i}
            key={i}
            style={{
              width: "100%",
              borderBottom: "1px solid #aaa",
            }}
          />
        );
      }
      return rows;
    },
    [startIndex, endIndex, ItemBox]
  );

  const CompareResult = {
    eq: 1,
    lt: 2,
    gt: 3,
  };

  const getStartIndex = (scrollTop) => {
    let idx = binarySearch(
      positionCache,
      scrollTop,
      (currentValue, targetValue) => {
        const currentCompareValue = currentValue.bottom;
        if (currentCompareValue === targetValue) {
          return CompareResult.eq;
        }
        if (currentCompareValue < targetValue) {
          return CompareResult.lt;
        }
        return CompareResult.gt;
      }
    );
    const targetItem = positionCache[idx];
    if (targetItem.bottom < scrollTop) {
      idx += 1;
    }
    return idx;
  };

  const binarySearch = (list, value, compareFunc) => {
    let start = 0;
    let end = list.length - 1;
    let tempIndex = null;
    while (start <= end) {
      tempIndex = Math.floor((start + end) / 2);
      const midValue = list[tempIndex];
      const compareRes = compareFunc(midValue, value);
      if (compareRes === CompareResult.eq) {
        return tempIndex;
      }
      if (compareRes === CompareResult.lt) {
        start = tempIndex + 1;
      } else if (compareRes === CompareResult.gt) {
        end = tempIndex - 1;
      }
    }
    return tempIndex;
  };

  return (
    <div
      className="container"
      style={{
        height: containerHeight + "px",
        overflowY: "auto",
        overflowX: "hidden",
      }}
      ref={ContainerRef}
      onScroll={handleSrcoll}
    >
      <div
        className="listBox"
        style={{
          height: wraperHeight + "px",
          backgroundColor: "pink",
          position: "relative",
        }}
      >
        <div
          className="wraper"
          style={{
            transform: getTransform(),
          }}
          ref={WraperRef}
        >
          {renderList()}
        </div>
      </div>
    </div>
  );
});

const VirList = () => {
  let items2 = [];
  for (let i = 0; i < 500; i++) {
    let ran = Math.random(1);
    if (ran < 0.2) {
      items2.push(
        i +
          "--啊锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕"
      );
    } else if (ran < 0.6) {
      items2.push(
        i +
          "--哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
      );
    } else {
      items2.push(
        i +
          "--的滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答的点点滴滴点点滴滴点点滴滴点点滴滴点点滴滴的多点点滴滴点点滴滴点点滴滴点点滴滴点点滴滴"
      );
    }
  }
  const ItemBox = memo(function ({ data = "", index = 0, style = {} }) {
    return (
      <div style={style} id={`item-${index}`}>
        {data}
      </div>
    );
  });
  return (
    <div>
      <VirList4 list={items2} containerHeight={500} ItemBox={ItemBox} />
    </div>
  );
};

export default VirList;
