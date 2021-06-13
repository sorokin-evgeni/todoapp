import React from 'react';
import './App.less';

interface AppProps {}

export const App: React.FC<AppProps> = ({children}) => <div className="app">{children}</div>;
