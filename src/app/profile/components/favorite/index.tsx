'use client';

import { SquarePen, X } from 'lucide-react';
import { useState } from 'react';

export function FavoriteCard() {
  const [input, setInput] = useState('');
  const [showInput, setShowInput] = useState(false);

  function handleButton() {
    setShowInput(!showInput);

    setInput('');
  }

  return (
    <div className="w-full bg-gray-900 rounded-lg p-4 h-44 text-white flex justify-between flex-col">
      {showInput ? (
        <div className="flex items-center justify-center gap-3">
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            className="bg-slate-200 w-full rounded-md h-8 text-black px-2"
          />
          <button onClick={handleButton} className="cursor-pointer">
            <X size={24} color="#fff" />
          </button>
        </div>
      ) : (
        <button
          className="self-start hover:scale-110 transition-all duration-200 cursor-pointer"
          onClick={handleButton}
        >
          <SquarePen size={24} color="#fff" />
        </button>
      )}

      <p className="font-bold text-white">Adicionar jogo</p>
    </div>
  );
}
