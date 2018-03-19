import React from 'react';

import Range from './Range';
import LoadImage from './LoadImage';

function Settings({ image, settings, handleChange, reset, onChange }) {
  const { contrast, hue, brightness, saturate, sepia } = settings;

  return (
    <aside className="settings">
      <Range
        name="contrast"
        value={contrast}
        min={0}
        max={200}
        onChange={handleChange} />

        <Range
          name="hue"
          value={hue}
          min={-360}
          max={360}
          onChange={handleChange} />

        <Range
          name="brightness"
          value={brightness}
          min={0}
          max={200}
          onChange={handleChange} />

        <Range
          name="saturate"
          value={saturate}
          min={0}
          max={100}
          onChange={handleChange} />

        <Range
          name="sepia"
          value={sepia}
          min={0}
          max={100}
          onChange={handleChange} />

        <LoadImage image={image} reset={reset} onChange={onChange}/>
    </aside>
  );
}

export default Settings;
