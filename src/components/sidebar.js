import React from 'react'
import {RxHamburgerMenu} from 'react-icons/rx';
import {GrHomeRounded} from 'react-icons/gr';
import {SiPlaycanvas} from 'react-icons/si';
import {BsCollectionPlay} from 'react-icons/bs';
import {MdVideoLibrary} from 'react-icons/md';


function Sidebar() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '0 10px'}}>
        

        <RxHamburgerMenu style={{ width: '25px', height: '25px', padding: '10px 0'}}/>
        <GrHomeRounded style={{ width: '25px', height: '25px', padding: '10px 0'}}/>
        <SiPlaycanvas style={{ width: '25px', height: '25px', padding: '10px 0'}}/>
        <BsCollectionPlay style={{ width: '25px', height: '25px', padding: '10px 0'}}/>
        <MdVideoLibrary style={{ width: '25px', height: '25px', padding: '10px 0'}}/>
        

    </div>
  )
}

export default Sidebar
