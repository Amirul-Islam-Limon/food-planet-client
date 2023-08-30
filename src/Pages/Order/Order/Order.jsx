import { useState } from 'react';
import orderedCover from '../../../assets/order/order.jpg' 
import Cover from '../../Shared/Cover/Cover';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ["offered","salads", "pizza", "desserts", "soups", "drink"];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    
    const offered = menu?.filter(item => item.category === "offered");
    const desserts = menu?.filter(item => item.category === "dessert");
    const pizza = menu?.filter(item => item.category === "pizza");
    const salads = menu?.filter(item => item.category === "salad");
    const soups = menu?.filter(item => item.category === "soup");
    const drinks = menu?.filter(item => item.category === "drinks");

    return (
        <div>
            <Helmet>
                <title>Food Planet | Order Food</title>
            </Helmet>
            <Cover bgImage={orderedCover} tittle={"Order Food"}></Cover>
            <div>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Offered</Tab>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Drink</Tab>
                </TabList>
                    <TabPanel>
                        <OrderTab items={offered}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={salads}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={desserts}></OrderTab> 
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soups}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={drinks}></OrderTab>
                    </TabPanel>
            </Tabs>
            </div>
        </div>
    );
};

export default Order;