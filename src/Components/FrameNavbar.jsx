


export default function FrameNavbar(){
    return(
        <div className="bg-[#FAF3EA] pt-6 mt-6 p-4 h-28 pl-5 flex justify-between">
            <div className="flex gap-2">
                <div>
                  <img  className="h-14"  src="./images/trophy 1.png" alt="" />  
                </div>
                <div>
                    <h1 className="font-poppins font-semibold">High Quality</h1>
                    <span className="font-poppins font-extralight ">crafted from top materials</span>
                </div>
                

            </div>
            <div className="flex gap-2">
                <div>
                  <img  className="h-14"  src="./images/guarantee.png" alt="" />  
                </div>
                <div>
                    <h1 className="font-poppins font-semibold">Warranty Protection</h1>
                    <span className="font-poppins font-extralight ">Over 2 years</span>
                </div>
                

            </div>
            <div className="flex gap-2">
                <div>
                  <img  className="h-14"  src="./images/shipping.png" alt="" />  
                </div>
                <div>
                    <h1 className="font-poppins font-semibold">Free Shipping</h1>
                    <span className="font-poppins font-extralight ">Order over 150 $</span>
                </div>
                

            </div>
            <div className="flex gap-2">
                <div>
                  <img className="h-14" src="./images/customer-support.png" alt="" />  
                </div>
                <div>
                    <h1 className="font-poppins font-semibold">24 / 7 Support</h1>
                    <span className="font-poppins font-extralight ">Dedicated support</span>
                </div>
                

            </div>

        </div>
    )
}