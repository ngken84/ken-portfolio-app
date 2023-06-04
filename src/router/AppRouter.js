import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import BubbleSort from '../modules/BubbleSort';
import MergeSort from '../modules/MergeSort';
import QuickSort from '../modules/QuickSort';
import SpinningCard from '../modules/SpinningCard';
import AboutMePage from '../pages/AboutMePage';
import GalleryPage from '../pages/GalleryPage';
import HomePage from '../pages/HomePage';
import ModulesPage from '../pages/ModulesPage';
import ResourceLinkPage from '../pages/ResourceLinkPage';
import ResumePage from '../pages/ResumePage';
import CssMenu from '../modules/CssMenu';
import NotLastCss from '../modules/NotLastCss';
import ScssSelectors from '../modules/ScssSelectors';
import CssFlexBox from '../modules/CssFlexBox';
import CssGrid from '../modules/CssGrid';
import CssBackgroundImg from '../modules/CssBackgroundImg';
import ClipPath from '../modules/ClipPath';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<HomePage/>}/>
                <Route path="/about" element={<AboutMePage/>}/>
                <Route path="/resume" element={<ResumePage/>}/>
                <Route path="/modules" element={<ModulesPage/>}/>
                <Route path="/resources" element={<ResourceLinkPage/>}/>
                <Route path="/gallery" element={<GalleryPage/>}/>
                <Route path="/modules/1/bubblesort" element={<BubbleSort/>}/>
                <Route path="/modules/3/mergesort" element={<MergeSort/>}/>
                <Route path="/modules/4/quicksort" element={<QuickSort/>}/>
                <Route path="/modules/5/css-spinning-card" element={<SpinningCard/>}/>
                <Route path="/modules/7/css-menu" element={<CssMenu/>}/>
                <Route path="/modules/8/css-not-last" element={<NotLastCss/>}/>
                <Route path="/modules/9/scss-selectors" element={<ScssSelectors/>}/>
                <Route path="/modules/10/css-flex-box" element={<CssFlexBox/>}/>
                <Route path="/modules/11/css-grid" element={<CssGrid/>}/>
                <Route path="/modules/12/css-background-img" element={<CssBackgroundImg/>}/>
                <Route path="/modules/13/css-clip-path" element={<ClipPath/>}/>
            </Routes>
        </BrowserRouter>
    )

}

export default AppRouter;