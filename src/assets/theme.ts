const palette = {
  mainBlue: "#651FF3",
  white: "#FFF",
  red: "#FF0000",
};

export const COLOR = {
  primary: palette.mainBlue,
  text: palette.white,
  icon: palette.white,
  alert: palette.red,
};

export const SPACING = {
  xxs: 2,
  xs: 4,
  s: 8,
  ms: 10,
  m: 16,
  l: 24,
  xl: 40,
  xxl: 60,
};

export const BORDERRADII = {
  xs: 5,
  s: 10,
  ms: 15,
  m: 20,
  l: 40,
  xl: 60,
};

export const TEXT_VARIANTS = {
  title: {
    fontSize: 24,
  },
  title2: {
    fontSize: 18,
  },
  subHeader: {
    fontSize: 16,
  },
  button: {
    fontSize: 20,
  },
  textHeader: {
    color: COLOR["primary"],
    fontSize: 30,
  },
  welcomeText: {
    fontSize: 45,
    letterSpacing: 1.3,
    // textAlign: "center",
    color: COLOR["primary"],
  },
};
