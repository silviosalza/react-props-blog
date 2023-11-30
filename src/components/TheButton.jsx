function TheButton({ testo }) {
  return (
    <button className="bg-green-700 hover:bg-black text-white font-bold py-2 px-4 rounded">
      {testo}
    </button>
  );
}

export default TheButton;
