import React from 'react'
import CategoryList from '../allcategory/AllCategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from"../components/HoriZontalCardproduct"
import VerticalCardProduct from '../components/VarticalCardproduct'


const Home = () => {
  return (
    <div> 
      <CategoryList/>
      <BannerProduct/>
      <HorizontalCardProduct category={"airpodes"} heading={"Top's Airpods"}/>
      <HorizontalCardProduct category={"camera"} heading={"Top's Camers"}/>
      <VerticalCardProduct category={"mobiles"} heading={"Popular Mobiles"}/>
      <VerticalCardProduct category={"printers"} heading={"Popular Printers"}/>
      <VerticalCardProduct category={"Mouse"} heading={"Popular Mouse"}/>
    </div>
      
  )
}

export default Home

