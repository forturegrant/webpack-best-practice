import { createElement, setInitialProperties } from './ReactDOMComponent';
export function shouldSetTextContent (type, props) {
  return typeof props.children === 'string' || typeof props.children === 'number';
}

export function createInstance (type) {
  return createElement(type);
}

export function finalizeInitialChildren (domElement, type, props) {
  setInitialProperties(domElement, type, props)
}
