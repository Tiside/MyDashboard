
import Photography from "./photography";
import MainContent from "./MainContent";
import Work from "./Work";
import Video from "./Video";
import Theme from "./Theme";
import Fonts from "./Fonts";

const Main = ({ activeSection }) => {
    return(

            <div className="content">
                {activeSection == 'main' && <MainContent />}
                {activeSection == 'photography' && <Photography />}
                {activeSection == 'video' && <Video />}
                {activeSection == 'work' && <Work />}
                {activeSection == 'theme' && <Theme />}
                {activeSection == 'fonts' && <Fonts />}
            </div>
    );
}
export default Main;