import Image from "next/image";
import Navbar from "../Navbar/page";
import img1 from "../../../public/img1.jpg";
import img2 from "../../../public/img2.jpg";
import Footer from "../footer/page";



export default function Product() {
  return (
    <div>
     <Navbar/>
     <h1 className="text-center text-2xl py-40">Welcome to <span className="text-red-600 font-semibold">Clean Sweep</span>  – your one-stop destination for premium cleaning products and solutions. Whether you're a homeowner, business owner, or cleaning professional, we have everything you need to achieve spotless spaces with ease.

Browse our wide range of cleaning products, including our signature Blue Toilet Cleaner and Floor Cleaner Concentrate, designed to simplify your cleaning routine and deliver outstanding results every time.

Explore our informative blog for cleaning tips, tricks, and hacks to help you make the most of our products and keep your spaces looking their best.

Shop now and experience the difference with Clean Sweep – where cleanliness meets innovation.</h1>

<h1 className="text-center text-3xl font-semibold text-red-500 mb-10 "> Our Products</h1>
     <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
  <div className="ps-40 object-cover">
  <Image className="rounded-lg" src={img1} width={300} height={300} style={{objectFit:"cover"}} alt="" />
   
  </div>
  
  <div className="mx-2 text-wrap">
    <h1 className="text-red-500 text-4xl font-bold p-2 me-4">Blue Toilet Cleaner:</h1>
<p className="text-2xl justify-center p-3"> 
Say goodbye to stubborn stains and odors with our powerful Blue Toilet Cleaner. Formulated to tackle even the toughest grime, our blue solution leaves your toilet bowl sparkling clean and smelling fresh. With its easy-to-use design and fast-acting formula, maintaining a pristine bathroom has never been simpler. </p>

  </div>
</div >
     <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 my-9">
  <div className="ps-40 object-cover">
  <Image className="rounded-lg" src={img2} width={300} height={300} style={{objectFit:"cover"}} alt="" />
   
  </div>
  
  <div className="mx-2 text-wrap">
    <h1 className="text-red-500 text-4xl font-bold p-2 me-4 ">Big Toilet Cleaner:</h1>
<p className="text-2xl justify-center p-3"> 
• Tough stain removal <br />
• Gentle on surfaces <br />
• 10x more limescale removal vs. ordinary detergents <br />
• Kills 99.9% of germs <br />
• Helps fight odour and unpleasant smells </p>

  </div>
</div >
     <Footer/>
    </div>
  );
}