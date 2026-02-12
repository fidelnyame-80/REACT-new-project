import React from 'react'
import userUsersStore from '../Store/usersStore'

const userlist = () => {
    const users = userUsersStore ((state) => state.users)
    const handleDelete = userUsersStore((state) => state.handleDelete)
  return (
    <div className='border-1 w-100 border-gray-100 shadow-md h-130'>
      <h3 className='text-center font-bold p-2'>Gamer List</h3>
      <ul>
        {users.map((gamer) =>{
            return(
                <div key={gamer.id} className='p-2 shadow-md my-4 border-1 border-gray-200 m-2'>
                    <strong>{gamer.name}</strong> - {gamer.email}
                 <br />
                 <button style={{backgroundColor: "pink", color: "white"}} className='p-1 rounded-sm' onClick={() => handleDelete}></button>

                </div>
            )
        } 
        )}
      </ul>
    </div>

  )
}

export default userlist;
