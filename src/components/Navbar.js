import logo from '../img/mamuju.png';

function Navbar() {
  return (
    <nav className="fixed top-0 bg-green-600 flex w-full p-2 space-x-4 justify-between items-center">
      <div className="font-bold text-lg text-white pl-2 pr-2 cursor-pointer ">
        BikinSurat
      </div>
      <div className="group  img-container relative ">
        <img src={logo} alt="" />

        <div className="absolute w-max right-0 top-[45px] bg-gray-600/80 text-white rounded p-2 scale-0 group-hover:scale-100 ">
          <p>Desa Tommo</p>
          <p>Mamuju, Sulawesi Barat</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
