import { createBrowserRouter } from "react-router";
import App from "../../App";
import MyProductsContainer from "../../components/MyProductsContainer";
import MainLayout from "../../layouts/MainLayout";
import ProductContainer from "../../components/ProductContainer";
import NotFound from "../../components/NotFound";
import LoginPage from "../../pages/LoginPage";
import DashboardLayout from "../../layouts/DashboardLayout";
import UserOverviewPage from "../../pages/UserOverviewPage";
import MyWishList from "../../pages/MyWishList";
import AddressPage from "../../pages/AddressPage";
import SettingsPage from "../../pages/SettingsPage";

export const router = createBrowserRouter([
    {
        path: "/", Component: MainLayout,
        children: [
            {
                index: true, Component: App
            },
            {
                path: "/products", Component: ProductContainer
            },

        ]
    },
    {
        path: "dashbaord", Component: DashboardLayout,
        children: [
            {
                index:true, Component: UserOverviewPage
            },
            {
                path: "products", Component: MyProductsContainer
            },
            {
                path: "wishlist", Component: MyWishList
            },
            {
                path: "addresses", Component: AddressPage
            },
            {
                path: "settings", Component: SettingsPage
            },
        ]
    },
    {
        path: "login", Component: LoginPage
    },
    {
        path: "*", Component: NotFound
    }

])