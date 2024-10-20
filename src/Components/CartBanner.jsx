import { Link } from 'react-router-dom'
import { RightOutlined } from '@ant-design/icons'

function CartBanner({text}){
    return(
        <div className="flex items-center justify-center  " style={{backgroundColor:'#EFEFEF'}}>
        <div className="relative w-full h-72 p-8 bg-white">
          <img
            alt="Interior with a plant, chair, and lamp"
            className="absolute inset-0 object-cover w-full h-full"
            src='/images/Rectangle 1.png'
           
          />
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-8  bg-opacity-75">
            <h1 className='text-5xl font-semibold font-poppins'>{text}</h1>
           <div className='mt-4 font-poppins flex gap-2 text-lg '>
           <Link to={'/'} className=' font-medium text-[#9F9F9F]'> Home  </Link><RightOutlined /><p className='font-normal'>{text}</p> 
           </div>
          </div>
        </div>
      </div>
    )
}

export default CartBanner