export function Button({ children, className }) {
  return (
    <button
      className={`bg-[#7b1e24] text-white px-4 py-2 rounded-lg hover:bg-red-900 transition ${className}`}
    >
      {children}
    </button>
  );
}
