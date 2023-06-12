import React, { FC, memo } from 'react';
import LogoShop from '../../../assets/images/home/shopify.svg';
import styled from 'styled-components';
import homeIcon from '../../../assets/images//home/home_icon.png';
import accountIcon from '../../../assets/images/home/account_icon.png';
import cartIcon from '../../../assets/images/home/cart_icon.png';
import Search from './Search';
import { Link } from 'react-router-dom';
import routes from '../../../utils/routes';
//
interface Props {}

const HeaderDefault: FC<Props> = () => {
    return (
        <Header>
            <Logo src={LogoShop} alt="SVG" />
            <Search />
            <HomeIcon>
                <img src={homeIcon} />
                <Link to={routes.Home}>Home</Link>
            </HomeIcon>
            <HomeIcon>
                <img src={accountIcon} />
                <Link to={routes.Home}>Your Account</Link>
            </HomeIcon>
            <Cart>
                <img src={cartIcon} />
                <span>2</span>
            </Cart>
        </Header>
    );
};

export default memo(HeaderDefault);

const Header = styled.div`
    height: 90px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 1px solid #eee;
`;
const Logo = styled.img`
    height: 45px;
    width: 40px;
    color: #4277cd;
    svg {
        fill: #4277cd;
    }
`;
const HomeIcon = styled.span`
    display: flex;
    align-items: center;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
    :hover {
        background-color: #27272a1f;
    }
    img {
        height: 24px;
        width: 24px;
    }
    a {
        margin-top: 4px;
        margin-left: 4px;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        color: #808089;
    }
`;

const Cart = styled.span`
    border-radius: unset;
    position: relative;
    img {
        height: 24px;
        width: 24px;
        cursor: pointer;
    }
    span {
        color: #ffffff;
        background: #ff424f;
        height: 16px;
        width: 16px;
        right: -10px;
        top: -10px;
        border-radius: 50%;
        display: inline-block;
        text-align: center;
        font-weight: 700;
        font-size: 10px;
        line-height: 150%;
        position: absolute;
        padding: 0.5px 4px;
    }
    ::before {
        content: '';
        position: absolute;
        left: -20px;
        top: 2px;
        height: 20px;
        border: 1px solid #ebebf0;
    }
`;
