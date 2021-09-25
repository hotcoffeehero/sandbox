import React from 'react'
import PlaceList from '../components/PlaceList'
import { useParams } from 'react-router-dom'

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    Description: 'Most iconic building in NYC',
    imageURL:
      'https://images.unsplash.com/photo-1538708027031-6955608d3c26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    address: '20 W 34th St, New York, NY, 10001',
    location: {
      lat: 40.7484445,
      lng: -73.9878531,
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'Empire State Building',
    Description: 'Most iconic building in NYC',
    imageURL:
      'https://images.unsplash.com/photo-1538708027031-6955608d3c26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    address: '20 W 34th St, New York, NY, 10001',
    location: {
      lat: 40.7484445,
      lng: -73.9878531,
    },
    creator: 'u2',
  },
]

const UserPlaces = () => {
  const userId = useParams().userId
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId)
  return <PlaceList items={loadedPlaces} />
}

export default UserPlaces
