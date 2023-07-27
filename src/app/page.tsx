"use client"

import RecommendedTrips from "./components/RecommendedTrips"
import TagsSearch from "./components/TagsSearch"
import TripSearch from "./components/TripSearch"

export default function Home() {  

  
  return (
    <div>
      <TripSearch/>
      <TagsSearch/>
      <RecommendedTrips/>

    </div>
  )
}
