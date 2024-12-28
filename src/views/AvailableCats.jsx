import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2',breed:"Peterbald" },
  { name: 'Mittens', age: '2',breed:"Bengal" },
  { name: 'Shadow', age: '1',breed:"Sphynx" },
  { name: 'Pumpkin', age: '3',breed:"Persion" },
  { name: 'Luna', age: '4',breed:"Birman" },
  { name: 'Simba', age: '2',breed:"Siamese" },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('All');
  useEffect(() => {
    // Fetch cat images from an API endpoint and assign it to the featuredCats list
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(availableCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())));
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);
 const filterCats= cats.filter((cat)=>{
  const matchBreed=selectedBreed==='All' || cat.breed===selectedBreed;
  const matchName=cat.name.toLowerCase().includes(searchName.toLowerCase());
  return matchBreed && matchName;
 }) 
 
 const breeds = ['All', ...new Set(availableCats.map((cat) => cat.breed))];
  
  return (
    <section className="text-center mt-4" >
      <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 16px',
          marginBottom: '16px',
        }}>
      <h2 style={{ marginBottom: '0', textAlign: 'left' ,fontFamily:'cursive'}}>Available Cats</h2>
      <div style={{ display: 'flex', gap: '8px' }}>
        <input type="text" placeholder='Search by name' value={searchName} onChange={(e)=>{setSearchName(e.target.value)}}/>
      
        <select value={selectedBreed} onChange={(e)=>{setSelectedBreed(e.target.value)}}>
          {breeds.map((breed,index)=>(
                <option value={breed} key={index}>{breed}</option>
          ))}
        </select>
        </div>
      </div>
      <p style={{ fontSize: '16px', marginBottom: '16px', marginLeft:'3px',textAlign:'left',fontFamily:'cursive'}}>Meet our adorable cats looking for their forever home!</p>

      {/*showing cats*/}
      <div className="mt-2 row g-4 cats-container" id="cats-container">
        {filterCats.length>0?(filterCats.map((cat, i) => (
          <div key={i} className="col-md-4">
            <div className="cat-card">
              <img src={cat.image} alt={cat.name} className="img-fluid mb-2" style={{ borderRadius: '8px', height: '200px', objectFit: 'cover', borderBottom: '1px solid black', }} />
              <div className="cat-info">
                <h3 className="h5 mb-1" style={{padding: '4px',
                  backgroundColor: '#f8f9fa',fontStyle:"italic",
                  textAlign: 'center',color:'darkcyan'}}>{cat.name}</h3>
                <p className="mb-0" style={{fontFamily:'cursive'}}>Age: {cat.age}</p>
                <p style={{fontFamily:'cursive'}}>Breed: {cat.breed}</p>
              </div>
            </div>
          </div>
        ))):(
          <p>No cats found !</p>
        )}
      </div>
    </section>
  );
}