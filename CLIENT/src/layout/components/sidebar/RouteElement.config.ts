// LINK IMAGES FOR OUTSTANDING
import ChatBot from '../../../assets/images/SideBar/OutStanding/chat-bot.png';
import Exchange from '../../../assets/images/SideBar/OutStanding/exchange.png';
import Cheap from '../../../assets/images/SideBar/OutStanding/cheap_single_day.png';
import Discharge from '../../../assets/images/SideBar/OutStanding/discharge.png';
import Discount from '../../../assets/images/SideBar/OutStanding/discount.png';
import Endow from '../../../assets/images/SideBar/OutStanding/endow.png';
import BuyNowPayLater from '../../../assets/images/SideBar/OutStanding/buy_now-pay-later.png';
import Insurance from '../../../assets/images/SideBar/OutStanding/insurance.png';
//LINK IMAGES FOR CATEGORY
import MomBaby from '../../../assets/images/SideBar/Category/mom_baby.png';
import Delicious from '../../../assets/images/SideBar/Category/delicious.png';
import PhoneTablet from '../../../assets/images/SideBar/Category/phone-tablet.png';
import BeautyHealth from '../../../assets/images/SideBar/Category/beauty-health.png';
import HomeElectric from '../../../assets/images/SideBar/Category/home-electric.png';
import WomenFashion from '../../../assets/images/SideBar/Category/women-fashion.png';
import ManFashion from '../../../assets/images/SideBar/Category/man-fashion.png';
import WomenShoes from '../../../assets/images/SideBar/Category/women-shoes.png';
import ManBag from '../../../assets/images/SideBar/Category/man-bag.png';
import BackPack from '../../../assets/images/SideBar/Category/backpack.png';
import FashionAccessories from '../../../assets/images/SideBar/Category/fashion-accessories.png';
import JewelryWatches from '../../../assets/images/SideBar/Category/jewelry-watches.png';
import Laptop from '../../../assets/images/SideBar/Category/laptop.png';
import HouseOfLife from '../../../assets/images/SideBar/Category/house-of-life.png';
import CrossBorder from '../../../assets/images/SideBar/Category/cross-border.png';
import OnlineDepartment from '../../../assets/images/SideBar/Category/online-department.png';
import DigitalDevice from '../../../assets/images/SideBar/Category/digital-device.png';
import Voucher from '../../../assets/images/SideBar/Category/voucher.png';
import Vehicle from '../../../assets/images/SideBar/Category/vehicle.png';
import Books from '../../../assets/images/SideBar/Category/book.png';
import SportPicnic from '../../../assets/images/SideBar/Category/sport-picnic.png';
import Photography from '../../../assets/images/SideBar/Category/photography.png';

//type
export interface ElementTypeSideBar {
    imageUrl: string;
    title: string;
    path: string;
}
//
export const RouteElementOutstanding: ElementTypeSideBar[] = [
    {
        imageUrl: ChatBot,
        title: 'Chat Bot',
        path: '/',
    },
    {
        imageUrl: Exchange,
        title: 'Exchange',
        path: '/exchange',
    },
    {
        imageUrl: Cheap,
        title: 'Giá rẻ mỗi ngày',
        path: '/cheap-single-day',
    },
    {
        imageUrl: Discharge,
        title: 'Xả kho',
        path: '/discharge',
    },
    {
        imageUrl: Discount,
        title: 'Discount',
        path: '/discount/all',
    },
    {
        imageUrl: Endow,
        title: 'Ưu đãi',
        path: '/end',
    },
    {
        imageUrl: BuyNowPayLater,
        title: 'Mua trước trả sau',
        path: '/buy-now-pay-later',
    },
    {
        imageUrl: Insurance,
        title: 'Bảo hiểm',
        path: '/insurance',
    },
];
//
export const RouteElementCategory: ElementTypeSideBar[] = [
    {
        imageUrl: MomBaby,
        title: 'Baby & Mom',
        path: '/mom-baby',
    },
    {
        imageUrl: Delicious,
        title: 'DELICIOUS',
        path: '/delicious',
    },
    {
        imageUrl: PhoneTablet,
        title: 'Laptop Tablet',
        path: '/phone-tablet',
    },
    {
        imageUrl: BeautyHealth,
        title: 'Beauty-Health',
        path: '/beauty-health',
    },
    {
        imageUrl: HomeElectric,
        title: 'Home Electric',
        path: '/home-electric',
    },
    {
        imageUrl: WomenFashion,
        title: "Women's Fashion",
        path: '/women-fashion',
    },
    {
        imageUrl: ManFashion,
        title: 'Man Fashion',
        path: '/man-fashion',
    },
    {
        imageUrl: WomenShoes,
        title: 'Women Shoes',
        path: '/women-shoes',
    },
    {
        imageUrl: ManBag,
        title: 'Man Bag',
        path: '/man-bag',
    },
    {
        imageUrl: BackPack,
        title: 'Back Pack',
        path: '/back-Pack',
    },
    {
        imageUrl: FashionAccessories,
        title: 'Fashion Accessories',
        path: '/fashion-accessories',
    },
    {
        imageUrl: JewelryWatches,
        title: 'Jewelry Watches',
        path: '/jewelry-watches',
    },
    {
        imageUrl: Laptop,
        title: 'Laptop',
        path: '/laptop',
    },
    {
        imageUrl: HouseOfLife,
        title: 'House Of Life',
        path: '/house-of-Life',
    },
    {
        imageUrl: CrossBorder,
        title: 'Cross Border',
        path: '/cross-border',
    },
    {
        imageUrl: OnlineDepartment,
        title: 'Online Department',
        path: '/online-department',
    },
    {
        imageUrl: DigitalDevice,
        title: 'Digital Device',
        path: '/digital-device',
    },
    {
        imageUrl: Voucher,
        title: 'Voucher',
        path: '/voucher',
    },
    {
        imageUrl: Vehicle,
        title: 'Vehicle',
        path: '/vehicle',
    },
    {
        imageUrl: Books,
        title: 'Books',
        path: '/books',
    },
    {
        imageUrl: SportPicnic,
        title: 'Sport Picnic',
        path: '/sport-picnic',
    },
    {
        imageUrl: Photography,
        title: 'Photography',
        path: '/photography',
    },
];
