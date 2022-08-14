import { Nav, NewsList, ScrollObserver } from './components/index.js';

const categoryList = document.querySelector('.category-list');
const newsList = document.querySelector('.news-list');



let page = 1;
let pageSize = 5;
let cate = 'all';


Nav(categoryList);
ScrollObserver(categoryList, newsList, NewsList(newsList, cate, page, pageSize))
