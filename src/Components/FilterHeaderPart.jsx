

export default function FilterHeaderPart({startIndex,endIndex,setProductsPerPage}){
    return(
        <div
        id="filter-bar"
        className="bg-[#f8f1e7] flex justify-around items-center h-20 w-full"
      >
        <div className="flex justify-center gap-7 w-3/4 items-center">
          <div className="flex cursor-pointer justify-between items-center w-20">
            <img src="/images/system-uicons_filtering.png" alt="icon" />
            <p className="font-poppins text-lg font-normal">Filter</p>
          </div>

          <img className="cursor-pointer" src="/images/Vector.png" alt="icon" />
          <img
            className="cursor-pointer"
            src="/images/bi_view-list.png"
            alt="icon"
          />
          <div
            className="font-poppins text-center text-lg font-normal"
            style={{
              borderLeft: "2px solid black",
              height: "30px",
              paddingLeft: "18px",
            }}
          >
            Showing {startIndex}–{endIndex > 32 ? 32 : endIndex} of 32
            results
          </div>
        </div>

        <div className="flex justify-end mr-7 gap-6 w-2/3">
          <div className="flex justify-between w-28 items-center">
            <p className="font-poppins text-lg font-normal">Show</p>
            <div className="bg-white h-14 w-14 text-center pt-4 text-xl font-poppins font-normal">
              <select
                className="border-none outline-none w-12 text-center appearance-none custom-select"
                onChange={(e) => setProductsPerPage(Number(e.target.value))}
              >
                <option value="8">8</option>
                <option value="16">16</option>
                <option value="32">32</option>
              </select>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <p className="font-poppins text-lg font-normal pr-4">Sort by</p>
            <div className="bg-white h-14 w-44 text-center pt-4 text-xl font-poppins font-normal">
              Default
            </div>
          </div>
        </div>
      </div>
    )
}