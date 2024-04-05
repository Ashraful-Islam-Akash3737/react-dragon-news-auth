import logo from "../../../assets/images/logo.png";
import moment from 'moment';

const Header = () => {
    return (
        <div className="text-center mt-5">
            <img className="mx-auto mb-5" src={logo} alt="logo" />
            <p className="text-[18px] text-[#706F6F] font-normal mb-3 ">Journalism Without Fear or Favour</p>
            <p className="text-xl font-medium text-[#403F3F]">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;