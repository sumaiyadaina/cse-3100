export default function AboutUs() {
    const teamMembers = [
      { name: 'Bob Doe', role: 'Director', image: 'https://via.placeholder.com/150' },
      { name: 'Jane Smith', role: 'Manager', image: 'https://via.placeholder.com/150' },
      { name: 'John Roe', role: 'Volunteer', image: 'https://via.placeholder.com/150' },
    ];
  
    return (
      <section className="container mt-5">
        <header className="text-center mb-5">
          
          <nav className="d-flex justify-content-center gap-4">
            
          </nav>
        </header>
  
        <section id="mission" className="mb-5">
          <h2 className="h4">Our mission</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Maecenas luctus lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </section>
  
        <section id="history" className="mb-5">
          <h2 className="h4">Our history</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Maecenas luctus lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </section>
  
        <section id="team">
          <h2 className="h4 mb-4">Our team</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="col">
                <div
                  className="team-card text-center p-3 border shadow-sm"
                  style={{ borderRadius: '8px', backgroundColor: '#f8f9fa' }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="img-fluid mb-3"
                    style={{
                      borderRadius: '8px',
                      height: '150px',
                      objectFit: 'cover',
                      width: '100%',
                    }}
                  />
                  <h3 className="h6">{member.name}</h3>
                  <p className="mb-0 text-muted">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    );
  }
  