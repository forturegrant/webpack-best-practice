import { REACT_ELEMENT_TYPE } from './ReactSymbols';
import { createFiberFromElement } from './ReactFiber';
import { Placement } from './ReactFiberFlags';

function childReconciler (shouldTrackSideEffects) {
  function reconcileSingleElement (returnFiber, currentFirstChild, element) {
    const crated = createFiberFromElement(element);
    crated.return = returnFiber;
    return crated;
  }

  function placeSingleChild (newFiber) {
    // 如果当前需要跟踪副作用，并且当前这个新的fiber它的替身不存在
    if (shouldTrackSideEffects && !newFiber.alternate) {
      // 给这个新fiber添加一个副作用，表示在未来提交阶段的DOM操作中回向真实DOM树中添加此节点
      newFiber.flags = Placement;
    }
    return newFiber;
  }

  function reconcilerChildFibers (returnFiber, currentFirstChild, newChild) {
    // 判断newChild是不是一个对象，如果是的话说明新的虚拟DOM只有一个React元素节点
    const isObject = typeof newChild === 'object' && newChild;
    if (isObject) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          return placeSingleChild(reconcileSingleElement(returnFiber, currentFirstChild, newChild))
      }
    }
  }
  return reconcilerChildFibers;
}

export const reconcileChildFibers = childReconciler(true);
export const mountChildFibers = childReconciler(false);
