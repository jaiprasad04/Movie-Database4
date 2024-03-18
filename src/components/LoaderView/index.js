import Loader from 'react-loader-spinner'
import './index.css'

const LoaderView = () => (
  <div className="loader">
    <Loader
      type="Oval"
      height={50}
      color="#ffffff"
      className="custom-oval-loader"
    />
  </div>
)

export default LoaderView
