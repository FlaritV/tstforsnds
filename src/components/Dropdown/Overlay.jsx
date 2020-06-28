import ReactDOM from 'react-dom';

const Overlay = ({ children }) => {
  return ReactDOM.createPortal(children, document.querySelector('body'));
};

export default Overlay;
