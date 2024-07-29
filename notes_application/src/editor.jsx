import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faL, faStrikethrough } from '@fortawesome/free-solid-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faImage, faList, faListCheck } from '@fortawesome/free-solid-svg-icons'
import SideBar from './sideBar'

const Editor = () => {
  return (
    <div className='w-2/5 m-auto bg-gray-200 flex justify-between'>
        <div>
            <div className='flex gap-4'>
                <button>Write</button>
                <button>Preview</button>
            </div>
            <div className='flex gap-5'>
                <p className='font-bold'>H</p>
                <p className='font-bold'>B</p>
                <p className='font-bold italic'>I</p>
                <span>< FontAwesomeIcon icon={faStrikethrough}/></span>
            </div>

            <div className='flex gap-5'>
                <span>< FontAwesomeIcon icon={faLink}/></span>
                <span>< FontAwesomeIcon icon={faQuoteRight}/></span>
                <span>< FontAwesomeIcon icon={faCode}/></span>
                <span>< FontAwesomeIcon icon={faImage}/></span>
                <span>< FontAwesomeIcon icon={faList}/></span>
                <span>< FontAwesomeIcon icon={faListCheck}/></span>
            </div>
            <textarea name="" id="" placeholder="# Type your markdown note's title ~~here~~"/>
        </div>
        
    </div>
  )
}

export default Editor