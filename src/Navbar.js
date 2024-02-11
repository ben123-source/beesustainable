import { useNavigate } from "react-router-dom";
import logo from './/bee.png';

const Navbar = () => {
    const navigate = useNavigate();

    return(
        <div>
            <div className='bg-[#FFF3AC] w-screen h-14 flex justify-between items-center'>
                <div className='flex items-center h-full ml-2'>
                    <img src={logo} alt="beelogo" className="h-1/2"/>
                    <button onClick={() => navigate("/")} className='hover:underline-dashed text-black hover:cursor-pointer ml-3'>BeeSustainable</button>
                </div>
                <div className='flex items-center justify-center gap-4 mr-6'>
                    <ul className='flex gap-6 mr-4'>
                        <button onClick={() => navigate("/")} className='hover:underline-dashed text-black hover:cursor-pointer'>Home</button>
                        <button onClick={() => navigate("/tracker")} className='hover:underline-dashed text-black hover:cursor-pointer'>Tracker</button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
