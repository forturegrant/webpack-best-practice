import { createWorkInProgress } from './ReactFiber';
import { beginWork } from './ReactFiberBeginWork';
// 当前正在更新的根
let workInProgressRoot = null;

// 当前正在更新fiber节点
let workInProgress = null;

/**
 * 不管如何更新，不管谁来更新，都会调度到这个方法里
 * @param {*} fiber
 */
export function scheduleUpdateOnFiber (fiber) {
  const fiberRoot = markUpdateLaneFromFiberToRoot(fiber);
  performSyncWorkOnRoot(fiberRoot);
}

/**
 * 根据老的fiber树和更新对象创建新的fiber树，然后根据新的fiber树去更新真实DOM
 * @param {*} fiberRoot
 */
function performSyncWorkOnRoot (fiberRoot) {
  workInProgressRoot = fiberRoot;
  workInProgress = createWorkInProgress(workInProgressRoot.current);
  workLoopSync();
}

/**
 * 开始自上而下构建新的fiber树
 */
function workLoopSync () {
  while (workInProgress) {
    performUnitWork(workInProgress);
  }
}

/**
 * 执行单个工作单元
 * workInProgress　要处理的fiber
 */
function performUnitWork (unitOfWork) {
  // 获取当前正在构建的fiber的替身
  const current = unitOfWork.alternate;
  // 开始构建当前fiber的子fiber链表
  // 它会返回下一个要处理的fiber，一般都是unitOfWork的大儿子
  const next = beginWork(current, unitOfWork);
  // 当前的fiber还有子节点
  if (next) {
    workInProgress = next;
  } else {
    // 如果当前fiber没有子fiber，那么当前的fiber就算完成
    // completeUnitOfWork(unitOfWork);
  }
}

function markUpdateLaneFromFiberToRoot (sourceFiber) {
  let node = sourceFiber;
  let parent = node.return;
  while (parent) {
    // 一直往上找到fiber树的根节点
    node = parent;
    parent = parent.return;
  }
  // node其实就是fiber树的根节点，hostFiberRoot.stateNode  div#root
  return node.stateNode;
}
