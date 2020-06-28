/* Still https://github.com/react-component/util/blob/master/src/ref.ts */

export const fillRef = (ref, node) => {
  if (typeof ref === 'function') {
    ref(node);
  } else if (typeof ref === 'object' && ref && 'current' in ref) {
    ref.current = node;
  }
};

export const composeRef = (...refs) => {
  return (node) => {
    refs.forEach((ref) => {
      fillRef(ref, node);
    });
  };
};

export const supportRef = (nodeOrComponent) => {
  // Function component node
  if (
    nodeOrComponent.type &&
    nodeOrComponent.type.prototype &&
    !nodeOrComponent.type.prototype.render
  ) {
    return false;
  }

  // Class component
  if (
    typeof nodeOrComponent === 'function' &&
    nodeOrComponent.prototype &&
    !nodeOrComponent.prototype.render
  ) {
    return false;
  }

  return true;
};
