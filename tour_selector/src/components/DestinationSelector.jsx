import React from 'react';

const DestinationSelector = ({ tours, selected, setSelected }) => {
  const uniqueDestinations = ['All', ...new Set(tours.map(tour => tour.name))];


  return (
    <div className="destination-selector">
      <label htmlFor="destination">Select Destination: </label>
      <select
        id="destination"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {uniqueDestinations.map((dest, index) => (
          <option key={index} value={dest}>
            {dest}
          </option>
        ))}
      </select>
    </div>
  );
};


export default DestinationSelector;
