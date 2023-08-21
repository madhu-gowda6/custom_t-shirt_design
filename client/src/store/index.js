import {proxy } from 'valtio';
 const state = proxy({
    intro: true,
    color: 'rgb(54, 154, 154)',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './logo.png',
    fullDecal: './logo.png'
 });

 export default state;