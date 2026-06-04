function Button({ text, onClick }) {
  return (

    <button
      onClick={onClick}
      className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800"
    >
      {text}
    </button>

  );
}

export default Button;