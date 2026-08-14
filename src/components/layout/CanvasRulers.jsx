import { rulers, verticalRulerPixelStep, verticalRulerStart, verticalRulerValueStep } from "../../config/navigation.js";

function TopRuler() {
  return (
    <div className="top-ruler" aria-hidden="true">
      {rulers.map((item, index) => (
        <span key={`${item}-${index}`}>{item}</span>
      ))}
    </div>
  );
}

function SideRuler({ scrollTop }) {
  const completedSteps = Math.floor(scrollTop / verticalRulerPixelStep);
  const pixelShift = scrollTop % verticalRulerPixelStep;
  const firstValue = verticalRulerStart - completedSteps * verticalRulerValueStep;
  const values = Array.from({ length: 9 }, (_, index) => firstValue - index * verticalRulerValueStep);

  return (
    <div className="side-ruler" aria-hidden="true">
      <div className="side-ruler-track" style={{ "--ruler-shift": `${pixelShift}px` }}>
        {values.map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}

export { SideRuler, TopRuler };
