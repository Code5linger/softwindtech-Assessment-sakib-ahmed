import CulturalHighlights from './components/CulturalHighlights';

function App() {
  return (
    <div>
      <div className="grid place-content-center h-[50vh]">
        <h1 className="text-4xl">Scroll Down</h1>
      </div>
      <CulturalHighlights />
      <div className="grid place-content-center h-[50vh]">
        <h1 className="text-4xl">Scroll Up</h1>
      </div>
    </div>
  );
}

export default App;
