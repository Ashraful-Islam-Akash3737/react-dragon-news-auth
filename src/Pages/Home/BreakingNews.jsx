import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex bg-[#F3F3F3] p-4 mt-7 mb-5">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee className="ml-2" pauseOnHover={true} speed={100}>
                <Link className="mr-12" to="/">Match Highlights: Germany vs Spain — as it happened !</Link>
                <Link className="mr-12" to="/">I can be a React component, multiple React components, or just some text.</Link>
                <Link className="mr-12" to="/">Match Highlights: Germany vs Spain as...</Link>
                
            </Marquee>
        </div>
    );
};

export default BreakingNews;
