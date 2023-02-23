import './App.css';

function App() {
  return (
    <div className="App">
      <header className='header'>
        My OCR app
      </header>

      <section className='hero'>
        <label className='fileUploaderContainer'>
          Choose an Image
          <input type='file' id='fileUploader' multiple/>
        </label>

        <div>
          {/* Previews will be shown here */}
        </div>

        <button className='button'>Generate</button>
      </section>

      <section className='results'>
        <div className='results-result'>
          <div className='results-result-image'>
            <img width='250px' />
          </div>
          <div className='results-result-info'>
            <div className='results-result-info-codes'>
              <small></small>
            </div>
            <div className='results-result-info-codes'>
              <small></small>
            </div>
            <div className='results-result-info-text'>
              <small></small>
            </div>
          </div>
          <hr />
        </div>
        <div className='results-result'>

        </div>
      </section>
    </div>
  );
}

export default App;
