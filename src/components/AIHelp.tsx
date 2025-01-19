import React, { useState } from 'react'

const AIHelp = ({ items = [] }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="mt-4 pt-2">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center text-sm text-gray-500 hover:text-gray-500 focus:outline-none"
      >
        <span className="ml-2">{isExpanded ? ' ▾' : ' ▸'}</span>
        <span className="ml-2 italic">
          View where AI was used within this post
        </span>
      </button>

      {isExpanded && (
        <ul className="ml-4 mt-2 list-inside list-disc space-y-1 text-sm text-gray-500">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default AIHelp
