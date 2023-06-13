import { Board } from '@/components/MainBoardBoardsComponent';
import React from 'react';

export function MainBoard () {
  return (
    <div className=''>
        <h1 className='text-xl mt-3 ml-3'>Welcome to boards</h1>
        <div className="mt-3 flex px-3 justify-start gap-2 flex-wrap">
            <Board title='board' subtitle='board' boardId={1}/>
        </div>
    </div>
  );
}
