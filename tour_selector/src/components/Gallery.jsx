import React from 'react';
import TourCard from './TourCard';


const Gallery = ({ tours, loading, error, onRemove, onRefresh }) => {
  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Something went wrong. Please try again later.</h2>;


  if (tours.length === 0) {
    return (
      <div>
        <h2>No tours match your selection.</h2>
        <button onClick={onRefresh}>Refresh</button>
      </div>
    );
  }


  return (
    <section className="gallery">
      {tours.map((tour) => (
        <TourCard key={tour.id} {...tour} onRemove={onRemove} />
      ))}
    </section>
  );
};


export default Gallery;