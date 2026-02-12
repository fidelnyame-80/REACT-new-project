import { create } from "zustand"

export const userUsersStore = create((set) => ({
    users: [],

    addNewUser:(newUser) => set((state) => ({
     users:[...state.users,{...newUser,id:Date.now()}]
    })),

    handleDelete:(idDelete) =>
        set((state) =>({
            users: state.users.filters(
                (user) => user.id !== idDelete
            )
        })
)

   
}))

export default userUsersStore;