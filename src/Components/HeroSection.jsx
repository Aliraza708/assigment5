
function Hero() {
    return (
        <div className="mt-9 w-full ">
            <div className="text-center leading-10 ">
              <h1 className="text-3xl font-bold">Browse The Range</h1>
            <h1 className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>   
            </div>
         <div className="flex flex-wrap p-3 w-full   gap-6 justify-evenly mt-7 items-center">
           <div >
                <div className="card__content">
                    <img src="/images/images11.png" alt="Dining"  />
                </div>
                <h1 className="text-xl text-center font-semibold pt-4">Dining</h1>
            </div>  
            <div >
                <div className="card__content">
                    <img src="/images/images1.png" alt="Living"  />
                </div>
                <h1 className="text-xl text-center font-semibold pt-4">Living</h1>
            </div>
             <div >
                <div className="card__content">
                    <img src="/images/images10.png" alt="bedroom"  />
                </div>
                <h1 className="text-xl text-center font-semibold pt-4">Bedroom</h1>
            </div>
         </div>
           

        </div>


    )
}
export default Hero