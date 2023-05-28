import {createGlobalStyle} from 'styled-components'
//
import Font from './Font.woff2'
import RobotoRegular from './Roboto-Regular.ttf';
//
export default createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: local('Roboto'), local('Font'),
        url(${Font}) format('woff2'),
        url(${RobotoRegular}) format('ttf');
       
        font-style: normal;
    }
`
