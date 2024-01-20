import BannerCard from "../home/BannerCard"

const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-blue-100 flex items-center">
        <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/* left side */}
        <div className="md:w-1/2 space-y-8 h-full">
            <h2 className="text-xl font-bold leading-snug text-black">The Digital Repository: &nbsp;
            <span className="text-blue-700">Sharing Wisdom, Igniting Minds.</span></h2>
            <p className="md:w-4/5"> 📚 Welcome to our student-powered platform—your gateway to free knowledge! Dive into a vast collection of donated books, generously shared by your peers. 🌟 Experience the joy of giving and receiving wisdom. Plus, amplify your voice in our Blog section, where experiences and insights are shared. 📖 Embrace the spirit of learning, sharing, and community on a platform designed for students, by students. 🚀 
            </p>
            <div>
                <input type="search" name="search" id="search" placeholder="Search your Book here" className="py-2 px-2 rounded-s-sm outline-none" />
                <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200"> Search</button>
            </div>
        </div>

        {/* right side */}
        <div>
            <BannerCard/>
        </div>

        </div>
    </div>
  )
}

export default Banner