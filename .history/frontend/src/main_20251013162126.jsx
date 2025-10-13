import Navbar from './Home/Navbar.jsx';
import './index.css';

export default function App() {
  return (
    <div className="side-gradient flex flex-col items-center">
      <Navbar />
      <div className="gradient-content flex flex-col items-center text-center mt-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to Study Tune</h1>
        <p className="text-gray-700 mb-6">
          Upload your favorite song and notes to create personalized sheet music!
        </p>
        <div className="flex space-x-4">
          <button className="btn btn-ghost px-6 py-3">Upload Song</button>
          <button className="btn btn-ghost px-6 py-3">Upload Notes</button>
        </div>
      </div>
    </div>
  );
}
