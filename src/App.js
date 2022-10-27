import React, { useState } from "react"

function App() {
  const IMAGE_DATA = [
    {
      imageUrl: 'https://via.placeholder.com/650x300',
      altText: 'some alt text'
  },
  {
      imageUrl: 'https://via.placeholder.com/650x300/000000',
      altText: 'more alt text'
  },
  {
      imageUrl: 'https://via.placeholder.com/650x300/444444',
      altText: 'final alt text'
  },
  {
      imageUrl: 'https://via.placeholder.com/650x300/fda40',
      altText: 'some alt text 1'
  },
  {
      imageUrl: 'https://via.placeholder.com/650x300/897865',
      altText: 'more alt text 2'
  }
  ]
  const [image, setImage] = useState(0)

  const nextImage = ()=> {
    setImage((imageNumber) => {
      if(imageNumber < IMAGE_DATA.length) {
        return imageNumber + 1;
      }
      return 0;
    })
  }
  const prevImage = () => {
    setImage((imageNumber) => {
      if(imageNumber > 0) {
        return imageNumber - 1;
      }
      return IMAGE_DATA.length;
    })
  }

  return (
    <div >
      <button onClick={() => prevImage()}>LEFT</button>
      <img src={IMAGE_DATA[image].imageUrl} alt='altText'/>
      <button onClick={() => nextImage()}>RIGHT</button>
    </div>
  );
}

export default App;
