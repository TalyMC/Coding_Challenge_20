import React, { useEffect, useState } from 'react';
import Gallery from './components/Gallery';
import DestinationSelector from './components/DestinationSelector';


const App = () => {
  const [tours, setTours] = useState([]);
  const [allTours, setAllTours] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  const fetchTours = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch('/api/react-tours-project');
      const data = await res.json();
      setTours(data);
      setAllTours(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchTours();
  }, []);


  const removeTour = (id) => {
    setTours((prev) => prev.filter((tour) => tour.id !== id));
  };


  const filteredTours =
    selectedDestination === 'All'
      ? tours
      : tours.filter(
          (tour) =>
            tour.name.trim().toLowerCase() === selectedDestination.trim().toLowerCase()
        );


  return (
    <main>
      <h1>Tour Comparison</h1>


      <DestinationSelector
        tours={allTours}
        selected={selectedDestination}
        setSelected={setSelectedDestination}
      />


      <Gallery
        tours={filteredTours}
        loading={loading}
        error={error}
        onRemove={removeTour}
        onRefresh={fetchTours}
      />
    </main>
  );
};


export default App;