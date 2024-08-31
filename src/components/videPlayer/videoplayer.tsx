
const Videoplayer = () => {

    const src = 'https://www.w3schools.com/html/mov_bbb.mp4'


  return (
    <div className="video-player">
      <video controls={false} className="w-full h-auto rounded-lg">
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
    </div>
  )
}

export default Videoplayer