import React, { useState, useEffect, useRef, useCallback, RefObject } from 'react'


export default function Menu() {
  //const handler: undefined | (() => void)
  //const handlerRef = useRef<undefined | (() => void)>(handler)
  const ref = useRef<HTMLDivElement>(null)

  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const ifClickedOutside = (e: MouseEvent) => {
      if (menuOpen && ref.current && !ref.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', ifClickedOutside)

    return () => {
      document.removeEventListener('mousedown', ifClickedOutside)
    }
  }, [menuOpen])
  
  
  // console.log(menuOpen)
  // const toggle = () => {
  //   setMenuOpen(menuOpen ? false : true)
  //   console.log(menuOpen)
  // }
  // const node = useRef<HTMLDivElement>()
  // useOnClickOutside(node, menuOpen ? toggle : undefined)
  return (
    <div ref={ref}>
      <button onClick={() => {setMenuOpen(menuOpen => !menuOpen)}}>
        Menu
      </button>
      {menuOpen && (
        <ul>
          <li>Explore</li>
          <li>Notifications</li>
          <li>Disconnect</li>
        </ul>
      )}
    </div>
  );
}


