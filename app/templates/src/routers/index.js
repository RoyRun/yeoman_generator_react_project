import React from 'react'
import { Redirect } from 'react-router-dom';
import Home from '../views/home/Home'
import Recommend from '../views/home/recommend/Recommend';
import Page from '../views/page/index.js'

const route = [
   {
     path: '/',
     component: Home,
     routes: [
        {
        path: '/page',
          component: Page
        }
    ]
   },
]

export default route;