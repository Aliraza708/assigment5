

function Card({ item }) {
  return (


    <div className="flex flex-wrap  gap-8 items-center justify-center min-h-screen ">
      {item.map((data) => {
        const { categories, image, price, title, id,  } = data


        return (

          <div key={id} className="bg-white border  overflow-hidden max-w-xs w-72">

            <div className="relative">
              <img
                src={image}
                alt="A minimalist flower pot on an orange leather sofa"
                className="w-full h-72 object-cover"
              />
              {/* <div className="absolute top-2 right-2 bg-teal-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            New
          </div> */}
            </div>
            <div className="p-4" style={{ backgroundColor: '#F4F5F7' }}>
              <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
              <p className="text-gray-600">{categories}</p>
              <p className="text-gray-800 font-semibold mt-2">Rp {price}</p>
            </div>
          </div>
        )
      })}

    </div>
  )

}

export default Card