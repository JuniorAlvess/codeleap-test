function generateColorPalette() {
  const primary = '#FFF';
  const secondary = '#7695EC';
  const tertiary = '#47B960';
  const quaternary = '#FF5151';
  const textColor = '#000';
  const bgMainScreenColor = '#DDD';
  const opaqueColor = '#CCC';

  return {
    primary,
    secondary,
    tertiary,
    quaternary,
    textColor,
    bgMainScreenColor,
    opaqueColor,
  };
}

const colors = generateColorPalette();

export default colors;
