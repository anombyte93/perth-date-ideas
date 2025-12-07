import { useState, useMemo } from 'react';
import { dateIdeas, getDurationLabel, getPriceLabel } from './data/dateIdeas';
import type { DateIdea } from './data/dateIdeas';
import './App.css';

type SortOption = 'rating' | 'price' | 'duration' | 'name';
type FilterPrice = 'all' | 'FREE' | '$' | '$$' | '$$$';
type FilterDuration = 'all' | 'SHORT' | 'MEDIUM' | 'LONG';

interface DateCardProps {
  idea: DateIdea;
  isExpanded: boolean;
  isInterested: boolean;
  isDone: boolean;
  onToggleExpand: () => void;
  onToggleInterested: () => void;
  onToggleDone: () => void;
}

function DateCard({ idea, isExpanded, isInterested, isDone, onToggleExpand, onToggleInterested, onToggleDone }: DateCardProps) {
  const durationColors = {
    SHORT: '#22c55e',
    MEDIUM: '#f59e0b',
    LONG: '#8b5cf6'
  };

  const priceColors = {
    FREE: '#22c55e',
    '$': '#60a5fa',
    '$$': '#f59e0b',
    '$$$': '#ef4444'
  };

  return (
    <div className={`date-card ${isDone ? 'done' : ''} ${isInterested ? 'interested' : ''}`}>
      <div className="card-header" onClick={onToggleExpand}>
        <div className="card-image" style={{ backgroundImage: `url(${idea.imageUrl})` }}>
          <div className="card-badges">
            <span className="badge duration" style={{ backgroundColor: durationColors[idea.duration] }}>
              {idea.duration}
            </span>
            <span className="badge price" style={{ backgroundColor: priceColors[idea.priceRange] }}>
              {idea.priceRange === 'FREE' ? 'FREE' : idea.priceRange}
            </span>
          </div>
          {isDone && <div className="done-overlay">DONE</div>}
        </div>
        <div className="card-info">
          <h3>{idea.name}</h3>
          <p className="location">{idea.location}</p>
          <div className="rating">
            <span className="stars">{'★'.repeat(Math.floor(idea.googleRating))}{'☆'.repeat(5 - Math.floor(idea.googleRating))}</span>
            <span className="rating-number">{idea.googleRating}/5</span>
          </div>
          <div className="quick-info">
            <span>{getDurationLabel(idea.duration)}</span>
            <span>{getPriceLabel(idea.priceRange)}</span>
          </div>
          <p className="why-good">{idea.whyGoodForCouples.substring(0, 120)}...</p>
          <div className="tags">
            {idea.tags.slice(0, 4).map(tag => (
              <span key={tag} className="tag">#{tag}</span>
            ))}
          </div>
        </div>
        <div className="expand-icon">{isExpanded ? '▲' : '▼'}</div>
      </div>

      {isExpanded && (
        <div className="card-expanded">
          <div className="section">
            <h4>Why It's Perfect for You Two</h4>
            <p>{idea.whyGoodForCouples}</p>
          </div>

          <div className="section">
            <h4>Best Time to Visit</h4>
            <p>{idea.bestTimeToVisit}</p>
          </div>

          <div className="section">
            <h4>What You Can Do There</h4>
            <ul>
              {idea.activities.map((activity, i) => (
                <li key={i}>{activity}</li>
              ))}
            </ul>
          </div>

          <div className="section">
            <h4>Tips to Make It Special</h4>
            <p className="tips">{idea.tipsForSpecial}</p>
          </div>

          <div className="section links">
            <a href={idea.website} target="_blank" rel="noopener noreferrer" className="link-btn website">
              Official Website
            </a>
            <a href={idea.googleMaps} target="_blank" rel="noopener noreferrer" className="link-btn maps">
              Google Maps
            </a>
          </div>

          <div className="card-actions">
            <button
              className={`action-btn interested ${isInterested ? 'active' : ''}`}
              onClick={(e) => { e.stopPropagation(); onToggleInterested(); }}
            >
              {isInterested ? '💖 Interested!' : '🤍 Mark Interested'}
            </button>
            <button
              className={`action-btn done ${isDone ? 'active' : ''}`}
              onClick={(e) => { e.stopPropagation(); onToggleDone(); }}
            >
              {isDone ? '✅ Done!' : '☐ Mark as Done'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [interested, setInterested] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('dateIdeas_interested');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });
  const [done, setDone] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('dateIdeas_done');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  const [sortBy, setSortBy] = useState<SortOption>('rating');
  const [filterPrice, setFilterPrice] = useState<FilterPrice>('all');
  const [filterDuration, setFilterDuration] = useState<FilterDuration>('all');
  const [showInterested, setShowInterested] = useState(false);
  const [showDone, setShowDone] = useState(false);

  const toggleInterested = (id: string) => {
    setInterested(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      localStorage.setItem('dateIdeas_interested', JSON.stringify([...next]));
      return next;
    });
  };

  const toggleDone = (id: string) => {
    setDone(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      localStorage.setItem('dateIdeas_done', JSON.stringify([...next]));
      return next;
    });
  };

  const filteredAndSorted = useMemo(() => {
    let result = [...dateIdeas];

    // Apply filters
    if (filterPrice !== 'all') {
      result = result.filter(d => d.priceRange === filterPrice);
    }
    if (filterDuration !== 'all') {
      result = result.filter(d => d.duration === filterDuration);
    }
    if (showInterested) {
      result = result.filter(d => interested.has(d.id));
    }
    if (showDone) {
      result = result.filter(d => done.has(d.id));
    }

    // Apply sorting
    const priceOrder = { 'FREE': 0, '$': 1, '$$': 2, '$$$': 3 };
    const durationOrder = { 'SHORT': 0, 'MEDIUM': 1, 'LONG': 2 };

    result.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.googleRating - a.googleRating;
        case 'price':
          return priceOrder[a.priceRange] - priceOrder[b.priceRange];
        case 'duration':
          return durationOrder[a.duration] - durationOrder[b.duration];
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return result;
  }, [filterPrice, filterDuration, sortBy, showInterested, showDone, interested, done]);

  return (
    <div className="app">
      <header className="hero">
        <h1>Perth Date Ideas</h1>
        <p className="subtitle">Curated romantic experiences for Reece & Partner</p>
        <p className="context">Quiet, intimate dates perfect for a fresh couple exploring Perth together</p>
      </header>

      <div className="filters">
        <div className="filter-group">
          <label>Sort By:</label>
          <select value={sortBy} onChange={e => setSortBy(e.target.value as SortOption)}>
            <option value="rating">Highest Rated</option>
            <option value="price">Price (Low to High)</option>
            <option value="duration">Duration (Short to Long)</option>
            <option value="name">Name (A-Z)</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Price:</label>
          <select value={filterPrice} onChange={e => setFilterPrice(e.target.value as FilterPrice)}>
            <option value="all">All Prices</option>
            <option value="FREE">Free</option>
            <option value="$">Budget ($)</option>
            <option value="$$">Moderate ($$)</option>
            <option value="$$$">Splurge ($$$)</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Duration:</label>
          <select value={filterDuration} onChange={e => setFilterDuration(e.target.value as FilterDuration)}>
            <option value="all">Any Length</option>
            <option value="SHORT">Short (1-2 hrs)</option>
            <option value="MEDIUM">Medium (3-4 hrs)</option>
            <option value="LONG">Long (5+ hrs)</option>
          </select>
        </div>

        <div className="filter-toggles">
          <button
            className={`toggle-btn ${showInterested ? 'active' : ''}`}
            onClick={() => setShowInterested(!showInterested)}
          >
            💖 Interested ({interested.size})
          </button>
          <button
            className={`toggle-btn ${showDone ? 'active' : ''}`}
            onClick={() => setShowDone(!showDone)}
          >
            ✅ Done ({done.size})
          </button>
        </div>
      </div>

      <div className="stats">
        <span>{filteredAndSorted.length} date ideas</span>
        <span>•</span>
        <span>{dateIdeas.filter(d => d.priceRange === 'FREE').length} free options</span>
        <span>•</span>
        <span>{dateIdeas.filter(d => d.duration === 'LONG').length} full-day adventures</span>
      </div>

      <div className="date-grid">
        {filteredAndSorted.map(idea => (
          <DateCard
            key={idea.id}
            idea={idea}
            isExpanded={expandedId === idea.id}
            isInterested={interested.has(idea.id)}
            isDone={done.has(idea.id)}
            onToggleExpand={() => setExpandedId(expandedId === idea.id ? null : idea.id)}
            onToggleInterested={() => toggleInterested(idea.id)}
            onToggleDone={() => toggleDone(idea.id)}
          />
        ))}
      </div>

      {filteredAndSorted.length === 0 && (
        <div className="empty-state">
          <p>No date ideas match your filters.</p>
          <button onClick={() => {
            setFilterPrice('all');
            setFilterDuration('all');
            setShowInterested(false);
            setShowDone(false);
          }}>
            Clear Filters
          </button>
        </div>
      )}

      <footer>
        <p>Made with 💖 for Reece's Perth adventures</p>
        <p className="tip">Click any card to expand and see full details!</p>
      </footer>
    </div>
  );
}

export default App;
