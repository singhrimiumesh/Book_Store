import logo from '../assets/2.png';

const Dashboard = () => {
  return (
    <div className="text-center text-2xl font-bold flex flex-col justify-center items-center h-screen">
    <h1 className='text-center'>Welcome to</h1> 
    <br/>
    <img src={logo} alt="Logo" className="w-100 h-100 mb-4 object-center"  />
    </div>
  )
}

export default Dashboard