import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZone1 from "../../../assets/images/qZone1.png";
import qZone2 from "../../../assets/images/qZone2.png";
import qZone3 from "../../../assets/images/qZone3.png";

const RightSideNav = () => {
    return (
        <div>
            {/* log in  */}
            <div className='p-4 mb-7'>
                <h2 className="text-2xl mb-4 font-semibold text-[#403F3F]">Login with</h2>
                <button className='btn btn-outline w-full mb-2'>
                    < FaGoogle />
                    Login with Google
                </button>
                <button className='btn btn-outline w-full'>
                    < FaGithub />
                    Login with Github
                </button>
            </div>
            {/* find us on */}
            <div className='p-4'>
                <h2 className="text-2xl mb-4 font-semibold text-[#403F3F]">Find Us On</h2>
                <a className='p-4 flex items-center text-[16px] text-[#706F6F] font-medium border rounded-t-md' href="">
                    <FaFacebookF className='mr-3' />
                    <span>Facebook</span>
                </a>
                <a className='p-4 flex items-center text-[16px] text-[#706F6F] font-medium border border-x' href="">
                    <FaTwitter className='mr-3' />
                    <span>Twitter</span>
                </a>
                <a className='p-4 flex items-center text-[16px] text-[#706F6F] font-medium border rounded-b-md' href="">
                    <FaInstagram className='mr-3' />
                    <span>Instagram</span>
                </a>
            </div>
            {/* log in  */}
            <div className='p-4 mb-7 '>
                <div className="p-1 bg-[#F3F3F3]">
                    <h2 className="p-3 text-2xl mb-4 font-semibold text-[#403F3F]">Q-Zone</h2>
                    <img src={qZone1} alt="" />
                    <img src={qZone2} alt="" />
                    <img src={qZone3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;