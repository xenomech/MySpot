import React from 'react'

export default function FilterPills({ item, filter, setFilter }) {
  if (item.id === filter) {
    return (
      <div className="m-2 p-2 px-4 border-2 text-white border-blue-500 bg-blue-500 rounded-xl cursor-pointer" onClick={() => setFilter(item.id)}>
        <p>{item.id}</p>
      </div>
    )
  } else {
    return (
      <div className="m-2 p-2 px-4 border-2 border-gray-500 dark:border-gray-700 hover:border-2 hover:border-blue-500 hover:text-white hover:bg-blue-500 rounded-xl transition-all duration-200 ease-in-out cursor-pointer" onClick={() => setFilter(item.id)}>
        <p>{item.id}</p>
      </div>
    )
  }
}
