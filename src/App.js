import { useState } from "react";
import "./App.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  return (
    <div className="container" style={{ height: "100vh" }}>
      <div className="row h-100">
        <div className="col-md-5 mx-auto dlflex flex-column align-items-center">
          {!isLoading && <h1 className="mt-5 mb-4">Image to Text</h1>}

          {/* form */}
          {!isLoading && !text && (
            <>
              <input
                type="file"
                className="form-control"
                onChange={(e) =>
                  setImage(URL.createObjectURL(e.value.files[0]))
                }
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
