import './App.css';

class App {
  constructor() {

    render(); {
      constructor(props); {
        super(props);
        this.state = {
          uploads: [],
          patterns: [],
          documents: []
        };
      };
    };

    return (
      <div className="App">
        <header className='header'>
          My OCR app
        </header>

        <section className='hero'>
          <label className='fileUploaderContainer'>
            Click here to upload documents
            <input type='file' id='fileUploader' multiple />
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
}

export default App;
