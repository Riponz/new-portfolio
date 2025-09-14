import React from 'react'

function Navbar() {
  return (
    <div className='w-screen fixed top-0 left-0 z-20 font-semibold h-[5vh] flex justify-between items-center px-10 text-white'>
        <div className="name uppercase">Diganta Biswas</div>
        <div className="menu flex justify-center items-center gap-2">
            {/* <div className="menu-items uppercase"></div> */}
            <div className="menu-items uppercase">contact</div>
            <div className="menu-items uppercase">linkedin</div>
        </div>
    </div>
  )
}

export default Navbar