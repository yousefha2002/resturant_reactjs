import React, { useState, ReactNode,ReactElement } from 'react';

interface TabsProps {
    children: ReactNode;
    }

    const Tabs: React.FC<TabsProps> = ({ children }) => {
    const [activeTab, setActiveTab] = useState((children as ReactElement<TabProps>[])[0].props.label);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>, newActiveTab: string) => {
        e.preventDefault();
        setActiveTab(newActiveTab);
    };

    return (
        <div>
        <div className="flex border-b border-gray-300">
            {React.Children.map(children, child => {
            if (React.isValidElement<TabProps>(child)) {
                return (
                <button
                    key={child.props.label}
                    className={`${
                    activeTab === child.props.label ? 'border-b-2 border-main' : ''
                    } flex-1 text-gray-700 font-medium py-2`}
                    onClick={e => handleClick(e, child.props.label)}
                >
                    {child.props.label}
                </button>
                );
            }
            return null;
            })}
        </div>
        <div className="py-4">
            {React.Children.map(children, child => {
            if (React.isValidElement<TabProps>(child) && child.props.label === activeTab) {
                return <div key={child.props.label}>{child.props.children}</div>;
            }
            return null;
            })}
        </div>
        </div>
    );
    };

interface TabProps {
    label: string;
    children: ReactNode;
    }

    const Tab: React.FC<TabProps> = ({ label, children }) => {
    return (
        <div className="hidden">
            {children}
        </div>
    );
};

export { Tabs, Tab };