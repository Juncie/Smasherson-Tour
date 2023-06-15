'use client';

import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';

export default function TabBar({ tabs = [], ...props }) { 
    return (
        <div className="container mx-auto">
          <Tabs.Group
            aria-label="Default tabs"
            style="pills"
          >
           {tabs.map(({title, component}) => (
              <Tabs.Item title={title}>
                {component}
              </Tabs.Item>
              ))}
          </Tabs.Group>
        </div>
      )
}