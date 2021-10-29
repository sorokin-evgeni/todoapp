import { Tabs } from 'antd';
import React from 'react';

interface MainNavigationProps {}

const MainNavigation: React.FC<MainNavigationProps> = () => {
    const handleNavigate = React.useCallback((tabId) => {
        console.log();
    }, []);
    return (
        <Tabs defaultActiveKey="1" onChange={handleNavigate}></Tabs>
    )
}
