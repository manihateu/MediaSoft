import React from 'react';
import { useNavigate } from 'react-router-dom';

export interface IBoardProps {
    title: string,
    subtitle: string,
    boardId: number
}

export function Board ({title, subtitle, boardId}:IBoardProps) {
    const navigate = useNavigate()
  return (
    <div className="flex rounded-xl bg-gray-100 h-32 w-32 shadow justufy-start" onClick={() => navigate(`/board/${boardId}`)}>
        <div className="mt-3 ml-3">
            <h1 className='text-lg'>{title}</h1>
            <p className=''>{subtitle}</p>
        </div>
    </div>
  );
}
