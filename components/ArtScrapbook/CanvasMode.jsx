import React, { useState, useRef } from 'react';

const CanvasMode = () => {
  const [brushSize, setBrushSize] = useState(5);
  const [brushColor, setBrushColor] = useState('#8B5CF6');
  const canvasRef = useRef(null);
  const isDrawingRef = useRef(false);

  // Canvas drawing functions
  const startDrawing = (e) => {
    isDrawingRef.current = true;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineWidth = brushSize;
    ctx.strokeStyle = brushColor;
    ctx.lineCap = 'round';
  };

  const draw = (e) => {
    if (!isDrawingRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    isDrawingRef.current = false;
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-white mb-6">🎨 Interactive Canvas</h2>
      <p className="text-gray-300 mb-8">Draw your own artwork! Use the controls below to customize your drawing experience.</p>
      
      {/* Canvas Controls */}
      <div className="flex justify-center items-center space-x-6 mb-6">
        <div className="flex items-center space-x-2">
          <label className="text-white text-sm">Brush Size:</label>
          <input
            type="range"
            min="1"
            max="20"
            value={brushSize}
            onChange={(e) => setBrushSize(parseInt(e.target.value))}
            className="w-20"
          />
          <span className="text-white text-sm">{brushSize}</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <label className="text-white text-sm">Color:</label>
          <input
            type="color"
            value={brushColor}
            onChange={(e) => setBrushColor(e.target.value)}
            className="w-10 h-8 rounded border-2 border-gray-600"
          />
        </div>
        
        <button
          onClick={clearCanvas}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
        >
          🗑️ Clear Canvas
        </button>
      </div>
      
      {/* Canvas */}
      <div className="flex justify-center">
        <div className="p-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-xl shadow-2xl">
          <canvas
            ref={canvasRef}
            width={800}
            height={600}
            className="rounded-lg bg-white cursor-crosshair border-2 border-white"
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
          />
        </div>
      </div>
    </div>
  );
};

export default CanvasMode;
