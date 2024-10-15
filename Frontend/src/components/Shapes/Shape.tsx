// Shape.tsx

interface ShapeProps {
    type: string;
    position: { x: number; y: number };
    color: string;
  }
  
  export const Shape: React.FC<ShapeProps> = ({ type, position, color }) => {
    return (
      <svg
        style={{ position: "absolute", left: position.x, top: position.y }}
      >
        {type === "circle" && (
          <circle cx={10} cy={10} r={8} fill={color} stroke="black" strokeWidth={2} />
        )}
        {type === "square" && (
          <rect x={0} y={0} width={20} height={20} fill={color} stroke="black" strokeWidth={2} />
        )}
        {type === "triangle" && (
          <polygon points="10,0 20,20 0,20" fill={color} stroke="black" strokeWidth={2} />
        )}
      </svg>
    );
  };