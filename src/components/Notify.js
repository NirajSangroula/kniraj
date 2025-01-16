function notify(message, timeout) {
    const container = document.createElement('div');
    const style = {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'black',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    fontSize: '16px',
    textAlign: 'center',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
  }
  Object.assign(container.style, style)
  container.textContent = message;
  document.body.appendChild(container);

  const timer = setTimeout(() => {
    document.body.removeChild(container);
  }, timeout);

  return () => clearTimeout(timer);
}

export default notify;
