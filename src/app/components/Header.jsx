import React from 'react';
import Image from 'next/image';
import siteLogo from '/src/app/img/logo-dark.png';

function Header() {
  return (
    <header>

        {/* Left */}
        <div>
            <Image
                src={siteLogo}
                alt='Website Logo'
                
            />
        </div>
      
    </header>
  )
}

export default Header
