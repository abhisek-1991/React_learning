import React, { useState, useCallback, useMemo } from 'react';

const ColorPalette = ({ colors }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    {colors.map((color, index) => (
      <div
        key={index}
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: color,
          margin: '5px',
        }}
      />
    ))}
  </div>
);

const ColorPaletteGenerator = () => {
  const [colorCount, setColorCount] = useState(5);

  const generateRandomColor = useCallback(() => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return randomColor;
  }, []);

  const generateColorPalette = useCallback(() => {
    const palette = Array.from({ length: colorCount }, generateRandomColor);
    console.log(palette);
    return palette;
  }, [colorCount, generateRandomColor]);
  console.log(generateColorPalette());
  const memoizedColorPalette = useMemo(() => generateColorPalette(), [generateColorPalette]);

  return (
    <div>
      <h2>Color Palette Generator</h2>
      <label>
        Number of Colors:
        <input
          type="number"
          min="1"
          max="100"
          value={colorCount}
          onChange={(e) => setColorCount(Number(e.target.value))}
        />
      </label>
      <ColorPalette colors={memoizedColorPalette} />
    </div>
  );
};

export default ColorPaletteGenerator;
