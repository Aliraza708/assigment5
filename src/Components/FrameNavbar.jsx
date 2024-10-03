


export default function FrameNavbar(){
    return(
        <div className="bg-[#FAF3EA] pt-6  mt-6 p-4 h-auto pl-5 flex flex-wrap justify-between  ">
        <div className="w-full sm:w-1/2 md:w-1/4  flex gap-2 mb-4 custom-breakpoint:w-1/2">
          <div>
            <img className="h-14" src="./images/trophy 1.png" alt="trophy" />
          </div>
          <div>
            <h1 className="font-poppins font-semibold">High Quality</h1>
            <span className="font-poppins font-extralight">crafted from top materials</span>
          </div>
        </div>
        
        <div className="w-full sm:w-1/2 md:w-1/4 flex gap-2 mb-4 custom-breakpoint:w-1/2">
          <div>
            <img className="h-14" src="./images/guarantee.png" alt="guarantee" />
          </div>
          <div>
            <h1 className="font-poppins font-semibold">Warranty Protection</h1>
            <span className="font-poppins font-extralight">Over 2 years</span>
          </div>
        </div>
        
        <div className="w-full sm:w-1/2 md:w-1/4 flex gap-2 mb-4 custom-breakpoint:w-1/2">
          <div>
            <img className="h-14" src="./images/shipping.png" alt="shipping" />
          </div>
          <div>
            <h1 className="font-poppins font-semibold">Free Shipping</h1>
            <span className="font-poppins font-extralight">Order over 150 $</span>
          </div>
        </div>
        
        <div className="w-full sm:w-1/2 md:w-1/4 flex gap-2 custom-breakpoint:w-1/2">
          <div>
            <img className="h-14" src="./images/customer-support.png" alt="customer support" />
          </div>
          <div>
            <h1 className="font-poppins font-semibold">24 / 7 Support</h1>
            <span className="font-poppins font-extralight">Dedicated support</span>
          </div>
        </div>
      </div>
      
      
    )
}