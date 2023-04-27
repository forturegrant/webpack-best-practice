import { HostRoot, HostComponent } from './ReactWorkTags';
import { reconcileChildFibers, mountChildFibers } from './ReactChildFiber';

export function beginWork (current, workInProgress) {
  switch (workInProgress.tag) {
    case HostRoot:
      return updateHostRoot(current, workInProgress);
    case HostComponent:
      return updateHostComponent(current, workInProgress);
  }
}

/**
 *
 * @param {*} current
 * @param {*} workInProgress
 */
function updateHostRoot (current, workInProgress) {
  const updateQuene = workInProgress.updateQuene;
  const nextChildren = updateQuene.shared.pending.payload.element;
  // 处理子节点，根据老fiber和新的虚拟dom进行对比，创建新的fiber树
  reconcileChildren(current, workInProgress, nextChildren);
  // 返回第一个子fiber
  return workInProgress.child;
}

export function reconcileChildren (current, workInProgress, nextChildren) {
  // 如果current有值，说明这是更新
  if (current) {
    workInProgress.child = reconcileChildFibers(
      workInProgress, // 新fiber
      current.child, // 老fiber的第一个子节点fiber
      nextChildren
    );
  } else {
    workInProgress.child = mountChildFibers(
      workInProgress, // 新fiber
      current && current.child,
      nextChildren
    );
  }
}
