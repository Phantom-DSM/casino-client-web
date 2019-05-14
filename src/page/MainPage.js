import React from 'react';
import HeaderContainer from 'containers/common/HeaderContainer';
import Banner from 'component/common/Banner';
import LoginModal from 'component/common/LoginModal';
import RankContainer from 'containers/rank/RankContainer';
import UserInterfaceContainer from 'containers/UserInterfaceContainer/UserInterfaceContainer'
const MainPage = () => {
    return (
        <div>
            <HeaderContainer UserInterface={<UserInterfaceContainer/>}/>
            <Banner/>
            <RankContainer/>
        </div>
    );
};

export default MainPage;