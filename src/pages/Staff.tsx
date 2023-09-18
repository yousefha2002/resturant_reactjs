import React from 'react'
import { Tab, Tabs } from '../components/ui/Tabs'
import Roles from '../components/staff/Roles'
import Employee from '../components/staff/Employee'

export default function Staff() {
    return (
        <div>
            <Tabs>
                <Tab label='Roles'>
                    <Roles/>
                </Tab>
                <Tab label='Employees'>
                    <Employee/>
                </Tab>
            </Tabs>
        </div>
    )
}
