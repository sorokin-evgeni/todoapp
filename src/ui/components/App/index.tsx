import React from 'react';
import './App.less';
import {BrowserRouter as Router} from 'react-router-dom';
import { Tabs } from 'antd';
import {Todo} from '../Todo';
import {Factorial} from '../Factorial';
const { TabPane } = Tabs;

interface AppProps {}

export const App: React.FC<AppProps> = () => {
    const handlePageNavigate = React.useCallback(() => {}, []);

    return (
        <Router>
            <div className="app">
                <Tabs defaultActiveKey="todos" onChange={handlePageNavigate}>
                    <TabPane tab="Todos" key="todos">
                        <Todo/>
                    </TabPane>
                    <TabPane tab="Factorial" key="factorial">
                        <Factorial/>
                    </TabPane>
                </Tabs>
            </div>
        </Router>
    )
}
