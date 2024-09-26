import '../App.css'

function Banner() {
    return (
        <div className="flex items-center justify-center  " style={{backgroundColor:'#EFEFEF'}}>
        <div className="relative w-full p-8 bg-white">
          <img
            alt="Interior with a plant, chair, and lamp"
            className="absolute inset-0 object-cover w-full h-full"
            src='/images/images12.png'           
          />
          <div className="relative z-10 flex items-center justify-end w-full h-full p-8  bg-opacity-75">
            <div className="max-w-md p-8 rounded-lg" style={{backgroundColor:'#FFF3E3'}}>
              <p className="text-sm font-semibold text-gray-600">New Arrival</p>
              <h1 className="mt-2 text-4xl font-bold " style={{color:'#B88E2F'}}>
                Discover Our New Collection
              </h1>
              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
              <button className="px-6 py-3 mt-6 text-white rounded hover:bg-yellow-800" style={{backgroundColor:'#B88E2F'}}>
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      


    )
}


export default Banner