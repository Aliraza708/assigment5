import { Link } from "react-router-dom"


function Card({ item }) {

  return (
    <div className="flex  flex-wrap  gap-8 items-center justify-center min-h-screen ">
      {item.map((data) => {
        const { categories, image, price, title, id, add } = data


        return (
          <Link to={`/Shop/${id}`} key={id} className="bg-white  border h-[400px] overflow-hidden max-w-xs w-72">

            <div className="relative group w-full h-72">
              {/* Image */}
              <img
                src={image}
                alt="A minimalist flower pot on an orange leather sofa"
                className="w-full cursor-pointer h-72 object-cover"
              />

              {/* Hover overlay with Add to Cart button */}
              <div className="absolute inset-0 flex items-center justify-center bg-[#636363] bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-white hover:opacity-95 text-yellow-600 font-semibold py-2 px-4 rounded shadow">
                  Add to cart
                </button>
              </div>

              {/* Conditional label for "New" */}
              {add === 'new' && (
                <div className="absolute top-2 right-2 h-10 text-center bg-teal-500 text-white text-sm font-semibold px-1.5 py-2.5 rounded-full">
                  New
                </div>
              )}

              {/* Conditional label for "-50%" sale */}
              {add === 'sal' && (
                <div className="absolute top-2 right-2 h-10 text-center bg-red-700 text-white text-sm font-semibold px-1 py-2.5 rounded-full">
                  -50%
                </div>
              )}
            </div>

            <div className="p-4" style={{ backgroundColor: '#F4F5F7' }}>
              <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
              <p className="text-gray-600">{categories}</p>
              <p className="text-gray-800 font-semibold mt-2">Rp {price}</p>
            </div>

          </Link>
        )
      })}

    </div>
  )

}

export default Card