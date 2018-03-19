import React from 'react';

function LoadImage({ image, reset, onChange }){

  return (
    <form className="setting" onSubmit={reset}>
      <label>Set image URL: 
        <input
          type="text"
          id="urlId"
          value={image}
          onChange={onChange}
          />
        </label>
      <input type="submit" value="reset" />

    </form>
  )
}

export default LoadImage;
