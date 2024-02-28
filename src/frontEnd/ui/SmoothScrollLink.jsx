export const SmoothScrollLink = ({ to, children }) => {
  const handleClick = (event) => {
    event.preventDefault();
    const targetId = to;
    const targetElement = document.getElementById(targetId);

    if (targetId) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ display: 'inline' }} onClick={handleClick}>
      {children}
    </div>
  );
};
