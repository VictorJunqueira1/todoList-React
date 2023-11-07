"use client";

import { TodoItem } from "@/types/TodoItem";
import { useEffect, useState } from "react";

export const Home = () => {
  const [itemInput, setItemInput] = useState('')
  const [list, setList] = useState<TodoItem[]>([
    { label: 'Fazer bolo', checked: false },
    { label: 'Fazer uma receita', checked: false },
  ])

  const handleAddButton = () => {
    if (itemInput.trim() === '') return;
    setList(
      [...list,
      { label: itemInput, checked: false }
      ]
    );
    setItemInput('');
  }

  const handleDelete = (index: number) => {
    setList(list.filter((item, key) => key !== index));
  }

  return (
    <div className="h-screen w-full flex items-center justify-center flex-col gap-6">
      <h1 className="font-bold text-2xl">Lista de Tarefas</h1>

      <div>
        <label className="border-2 border-none bg-slate-600 rounded-lg p-6">
          <input type="text"
            className="p-4 py-2 rounded-sm"
            placeholder="O que deseja fazer?"
            value={itemInput}
            onChange={e => setItemInput(e.target.value)}
            onKeyUp={(e) => {
              if(e.key === "Enter") handleAddButton()
            }}
          />
          <button
            className="text-white m-2 p-2" onClick={handleAddButton}>Adicionar
          </button>
        </label>
      </div>

      <p className="my-4">{list.length} Itens na Lista</p>

      <div>
        <ul className="w-full max-w-lg list-disc pl-5">{
          list.map((item, index) => (
            <li key={index}>{item.label} - <button className="hover:underline" onClick={() => handleDelete(index)}>Deletar Tarefa</button></li>
          ))
        }
        </ul>
      </div>

    </div>
  )
}

export default Home;