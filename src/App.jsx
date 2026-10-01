import useFetch from './hooks/useFetch'

function App() {
  
  const {data, loading, error} = useFetch(
    "https://jsonplaceholder.typicode.com/photos?_limit=30"
  )
  if (loading){
    return(
      <div className='min-h-screen bg-black text-white fles items-center justify-center'>
          <h2 className='text-2xl text-center justify-center'>Loading....</h2>
      </div>
    )
  }

  if(error){
    return(
      <div className='min-h-screen bg-black text-white flex items-center justify-center'>
        <h2 className='text-2xl text-center justify-center'>Error while fetching data</h2>
      </div>
    )
  }
const colors=[
    "bg-green-400",
    "bg-purple-400",
    "bg-pink-400",
    "bg-blue-400",
    "bg-pink-600",
    "bg-green-300",
    "bg-purple-800",
    "bg-blue-600",
    "bg-pink-800",
    "bg-green-600",
  ]

  return (
    <div className='min-h-screen bg-black text-white items-center justify-center'>
      <h1 className='text-center text-3xl text-white font-bold mb-5'>PHOTOS</h1>
    
      <div className='grid grid-cols-4 gap-2 px-8 py-4'>
        {data.map((photo)=>(
          <div key={photo.id} 
          className='border border-white px-8 py-6'>
            <div className={`aspect-square ${colors[photo.id% colors.length ]} flex items-center justify-center `}>
              <span className='text-gray-600'>
                600x600
              </span>
            </div>
            <p className='text-white text-xs mt-2 text-center'>
              {photo.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
