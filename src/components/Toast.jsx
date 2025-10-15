export const Toast = ({ message, visible }) => {
  return (
    <div
      className={`fixed top-4 right-4 z-50 max-w-xs p-4 rounded-lg shadow-lg transition-opacity duration-300
        ${visible ? 'opacity-100 bg-green-100 border border-green-300 text-green-800' : 'opacity-0 pointer-events-none'}
      `}
    >
      <p className="text-sm">{message}</p>
    </div>
  );
};