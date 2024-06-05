import React from 'react'
import { FaGithub , FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonaLinesFill} from 'react-icons/bs'

const SocialLinks = () => {
  return (
    <div>
       <ul>
        <li>
            <a href="">
                {" "}
                <>
                Linkedin <FaLinkedin /> 
                </>
            </a>
        </li>
       </ul>
    </div>
  )
}

export default SocialLinks