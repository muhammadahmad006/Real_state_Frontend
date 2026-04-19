const fs = require('fs');

const jsxPath = 'src/components/Dashboard.jsx';
let dashboardJsx = fs.readFileSync(jsxPath, 'utf8');

dashboardJsx = dashboardJsx.replace(
  `import { LayoutList, Map as MapIcon, ChevronRight, Clock, CheckSquare, Plus, Minus } from 'lucide-react';`,
  `import { LayoutList, Map as MapIcon, ChevronRight, Clock, CheckSquare, Plus, Minus, Search, SlidersHorizontal, Heart, BedDouble, Bath, Maximize } from 'lucide-react';`
);

const newContent = `export default function Dashboard() {
  const [viewMode, setViewMode] = useState('list');

  const pipelineStages = [
    { label: 'Leads', value: 12, total: 2000000, color: 'var(--primary)' },
    { label: 'Escrow', value: 3, total: 1150000, color: 'var(--warning)' },
    { label: 'Pre/Rehab', value: 5, total: 2400000, color: 'var(--success)' },
    { label: 'For Sale', value: 2, total: 950000, color: '#8b5cf6' },
    { label: 'Sold', value: 15, total: 6500000, color: '#64748b' },
    { label: 'Activity & Tasks', value: 8, total: null, color: '#0ea5e9' }
  ];

  const discoveryProperties = [
    {
      id: 1,
      address: '123 Oak Street, Los Angeles, CA 90001',
      status: 'Pre/Rehab',
      badgeClass: 'badge-primary',
      price: '$250,000',
      beds: 3,
      baths: 2,
      sqft: '1,500',
      img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      address: '456 Maple Drive, Glendale, CA 91204',
      status: 'Escrow',
      badgeClass: 'badge-warning',
      price: '$650,000',
      beds: 4,
      baths: 3,
      sqft: '2,800',
      img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      address: '789 Pine Ave, Pasadena, CA 91101',
      status: 'For Sale',
      badgeClass: 'badge-success',
      price: '$525,000',
      beds: 3,
      baths: 2,
      sqft: '1,850',
      img: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      address: '321 Elm Street, Burbank, CA 91505',
      status: 'Leads',
      badgeClass: 'badge-primary',
      price: '$580,000',
      beds: 2,
      baths: 2,
      sqft: '1,200',
      img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="dashboard-container">
      {/* Redfin-style Property Search Section - HERO */}
      <section className="redfin-hero-section">
        <div className="redfin-hero-background"></div>
        <div className="redfin-hero-content">
          <h1 className="redfin-hero-title">Find it. Flip it. Fund it.</h1>
          
          <div className="redfin-search-wrapper">
            <div className="redfin-search-bar">
              <Search className="redfin-search-icon" size={24} />
              <input 
                type="text" 
                placeholder="Search by city, address, ZIP, or MLS #"
                className="redfin-search-input"
              />
              <button className="btn btn-primary redfin-search-btn">Search</button>
            </div>

            <div className="redfin-filter-pills">
              <button className="redfin-pill">Price</button>
              <button className="redfin-pill">Beds</button>
              <button className="redfin-pill">Baths</button>
              <button className="redfin-pill">Property Type</button>
              <button className="redfin-pill redfin-pill-active">
                <SlidersHorizontal size={16} className="mr-2" />
                More Filters
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Layout Under Search */}
      <section className="discovery-layout-section">
        <div className="discovery-container">
          {/* Left side: Property Listings */}
          <div className="discovery-sidebar">
            <div className="discovery-header">
              <h3>Featured Opportunities</h3>
              <div className="text-secondary text-sm">Sorted by recommended</div>
            </div>
            
            <div className="discovery-list">
              {discoveryProperties.map((property) => (
                <div key={property.id} className="discovery-card" onClick={() => window.location.href = '/property'}>
                  <div className="discovery-image">
                    <img src={property.img} alt={property.address} />
                    <button className="discovery-save-btn">
                      <Heart size={18} />
                    </button>
                    <div className={\`discovery-status badge \${property.badgeClass}\`}>{property.status}</div>
                  </div>
                  <div className="discovery-info">
                    <div className="discovery-price">{property.price}</div>
                    <div className="discovery-specs">
                      <span className="flex items-center gap-1"><BedDouble size={14} /> {property.beds}</span>
                      <span className="flex items-center gap-1"><Bath size={14} /> {property.baths}</span>
                      <span className="flex items-center gap-1"><Maximize size={14} /> {property.sqft} sqft</span>
                    </div>
                    <div className="discovery-address text-secondary text-sm truncate">{property.address}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side: Map Container Overlay */}
          <div className="discovery-map">
            <div className="mock-map-background" style={{ height: '100%' }}>
              <div className="map-overlay-center" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 10 }}>
                <MapIcon size={48} className="text-secondary opacity-50 mb-2 mx-auto" />
                <h3>Interactive Map View</h3>
                <p className="text-secondary">Explore deals in your area</p>
              </div>
              
              {/* Custom Map Pins */}
              <div className="map-pin" style={{ top: '25%', left: '40%' }}>
                <span className="pin-price">$250k</span>
                <div className="pin-marker badge-primary"></div>
              </div>
              
              <div className="map-pin" style={{ top: '45%', left: '65%' }}>
                <span className="pin-price bg-warning text-white">$650k</span>
                <div className="pin-marker badge-warning"></div>
              </div>
              
              <div className="map-pin active" style={{ top: '55%', left: '30%' }}>
                <span className="pin-price bg-success text-white">$525k</span>
                <div className="pin-marker badge-success"></div>
              </div>

              <div className="map-controls">
                <button className="map-btn" title="Zoom In"><Plus size={18} /></button>
                <button className="map-btn" title="Zoom Out"><Minus size={18} /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline Status Section */}
      <section className="pipeline-section mt-4">
        <h2 className="section-title">Deal Pipeline</h2>
        <div className="pipeline-tabs">`;

dashboardJsx = dashboardJsx.replace(
    /export default function Dashboard\(\) \{[\s\S]*?<h2 className="section-title">Deal Pipeline<\/h2>\s*<div className="pipeline-tabs">/,
    newContent
);

dashboardJsx = dashboardJsx.replace(
    /\{\/\* Properties Display \*\/\}(.|\n)*?(?=<\/section>\s*<\/div>\s*\);\s*})/,
    ''
);

fs.writeFileSync(jsxPath, dashboardJsx);

const cssPath = 'src/components/Dashboard.css';
let dashboardCss = fs.readFileSync(cssPath, 'utf8');

const redfinCss = `
/* Redfin-style Search Hero */
.redfin-hero-section {
  position: relative;
  height: 480px;
  border-radius: var(--radius-xl);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0rem -2rem; /* Extend to fill padding */
  box-shadow: var(--shadow-md);
  margin-bottom: 2rem;
}

.redfin-hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80');
  background-size: cover;
  background-position: center;
  z-index: 1;
}

.redfin-hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  width: 100%;
  max-width: 900px;
  padding: 0 2rem;
}

.redfin-hero-title {
  color: white;
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

.redfin-search-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  width: 100%;
}

.redfin-search-bar {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 9999px;
  padding: 0.5rem;
  width: 100%;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  position: relative;
}

.redfin-search-icon {
  margin-left: 1rem;
  color: var(--text-secondary);
  flex-shrink: 0;
}

.redfin-search-input {
  flex: 1;
  border: none;
  outline: none;
  padding: 0.75rem 1rem;
  font-size: 1.125rem;
  background: transparent;
  color: var(--text-primary);
}

.redfin-search-btn {
  border-radius: 9999px;
  padding: 0.875rem 2rem;
  font-weight: 600;
  font-size: 1rem;
  flex-shrink: 0;
}

.redfin-filter-pills {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
}

.redfin-pill {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--text-primary);
  padding: 0.625rem 1.25rem;
  border-radius: 9999px;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.redfin-pill:hover {
  background: white;
  transform: translateY(-1px);
}

.redfin-pill-active {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}
.redfin-pill-active:hover {
  background: var(--primary-hover);
}

/* Discovery Layout Section */
.discovery-layout-section {
  margin-bottom: 2rem;
}

.discovery-container {
  display: flex;
  height: 600px;
  background: var(--bg-card);
  border-radius: var(--radius-xl);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-md);
  overflow: hidden;
}

.discovery-sidebar {
  width: 400px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--border-color);
  background: white;
  flex-shrink: 0;
}

.discovery-header {
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid var(--border-color);
  background: #f8fafc;
}

.discovery-header h3 {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.discovery-list {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.discovery-card {
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
  overflow: hidden;
  cursor: pointer;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
  background: var(--bg-card);
}

.discovery-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  border-color: var(--primary-light);
}

.discovery-image {
  height: 180px;
  position: relative;
  background: #cbd5e1;
}

.discovery-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.discovery-save-btn {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: all var(--transition-fast);
}

.discovery-save-btn:hover {
  color: var(--danger);
  transform: scale(1.1);
}

.discovery-status {
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
}

.discovery-info {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.discovery-price {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
}

.discovery-specs {
  display: flex;
  gap: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-primary);
}

.discovery-address {
  margin-top: 0.25rem;
}

.discovery-map {
  flex: 1;
  position: relative;
}

/* Pipeline Tabs */`;

dashboardCss = dashboardCss.replace(
  /\/\* Hero Search Section \*\/[\s\S]*?\/\* Pipeline Tabs \*\//,
  redfinCss
);

dashboardCss = dashboardCss.replace(
  /\/\* Properties Section \*\/[\s\S]*?\/\* ---------------------------------/,
  "/* ---------------------------------"
);

fs.writeFileSync(cssPath, dashboardCss);

console.log('Update Complete!');
