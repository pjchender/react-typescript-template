import { ActionType } from 'patterns/context-reducer-II/reducer';
import { useRGBContext } from 'patterns/context-reducer-II/rgb-context';

const ColorPalette = (): JSX.Element => {
  // STEP 4-2：使用包好的 useRGBContext
  const { red, green, blue, dispatch } = useRGBContext();

  // STEP 4-3：使用 dispatch
  const handleColorChange =
    (actionType: ActionType) => (e: React.ChangeEvent<HTMLInputElement>) => {
      let value = Number(e.target.value);

      if (value > 255) {
        value = 255;
      } else if (value < 0) {
        value = 0;
      }

      dispatch({
        type: actionType,
        payload: value,
      });
    };

  return (
    <>
      <h1>ColorPalette</h1>
      <div
        className="color-palette"
        style={{
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
      <div className="color-adjust">
        <label htmlFor="adjust-red">
          <span>Red</span>
          <input
            id="adjust-red"
            onChange={handleColorChange('ADJUST_RED')}
            type="range"
            min={0}
            max={256}
            value={red}
          />
        </label>

        <label htmlFor="adjust-green">
          <span>Green</span>
          <input
            id="adjust-green"
            onChange={handleColorChange('ADJUST_GREEN')}
            type="range"
            min={0}
            max={256}
            value={green}
          />
        </label>

        <label htmlFor="adjust-blue">
          <span>Blue</span>
          <input
            id="adjust-blue"
            onChange={handleColorChange('ADJUST_BLUE')}
            type="range"
            min={0}
            max={256}
            value={blue}
          />
        </label>
      </div>
    </>
  );
};

export default ColorPalette;
