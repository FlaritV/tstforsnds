export const placement = (overlayRef, triggerRef) => {
  if (overlayRef.current && triggerRef.current) {
    const overlayRect = overlayRef.current.getBoundingClientRect();
    const triggerRect = triggerRef.current.getBoundingClientRect();

    const hasXSapce = triggerRect.left + triggerRect.width > overlayRect.width;
    const hasYSpace =
      window.innerHeight - triggerRect.top - triggerRect.height <
      overlayRect.height;

    overlayRef.current.style.left = `${
      hasXSapce
        ? triggerRect.left + triggerRect.width - overlayRect.width
        : triggerRect.left
    }px`;

    overlayRef.current.style.top = `${
      hasYSpace
        ? triggerRect.top - overlayRect.height
        : triggerRect.top + triggerRect.height
    }px`;
  }
};
