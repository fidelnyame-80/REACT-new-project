import { Plus } from "lucide-react";
import React from 'react'

const Follow = () => {
  return (
 <button className="flex items-center gap-2  bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-[gray] hover:text-white transition cursor-pointer">
      <Plus size={16} />
      Follow
    </button>  )
}

export default Follow