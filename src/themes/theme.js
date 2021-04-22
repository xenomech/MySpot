const Theme = {
  font: {
    main: "Open Sans, sans-serif",
    // code: "Roboto Mono, monospace",
  },

  //colour schemes specific to Apple's Human interface Guidelines
  colors: {
    //light-colours
    //grays
    sysGrayLight1: "rgb(142,142,147)",
    sysGrayLight2: "rgb(174,174,178)",
    sysGrayLight3: "rgb(199,199,204)",
    sysGrayLight4: "rgb(209,209,214)",
    sysGrayLight5: "rgb(229,229,234)",
    sysGrayLight6: "rgb(242,242,247)",
    //colours
    sysBlueLight: "rgb(0,122,255)",
    sysGreenLight: "rgb(52,199,89)",
    sysIndigoLight: "rgb(88,86,214)",
    sysOrangeLight: "rgb(255,149,0)",
    sysPinkLight: "rgb(255,45,85)",
    sysPurpleLight: "rgb(175,82,222)",
    sysRedLight: "rgb(255,59,48)",
    sysTealLight: "rgb(90,200,250)",
    sysYellowLight: "rgb(255,204,0)",
    //dark colours
    //grays
    sysGrayDark1: "rgb(142,142,147)",
    sysGrayDark2: "rgb(99,99,102)",
    sysGrayDark3: "rgb(72,72,74)",
    sysGrayDark4: "rgb(58,58,60)",
    sysGrayDark5: "rgb(44,44,46)",
    sysGrayDark6: "rgb(28,28,30)",
    //colours
    sysBlueDark: "rgb(10,132,255)",
    sysGreenDark: "rgb(48,209,88)",
    sysIndigoDark: "rgb(94,92,230)",
    sysOrangeDark: "rgb(255,159,10)",
    sysPinkDark: "rgb(255,55,95)",
    sysPurpleDark: "rgb(191,90,242)",
    sysRedDark: "rgb(255,69,58)",
    sysTealDark: "rgb(100,210,255)",
    sysYellowDark: "rgb(255,214,10)",
  },
  breakpoints: {
    mobile: "only screen and (max-width:50rem)",
    tablet: "only screen and (max-width:65rem)",
  },
  spacing: {
    xxSmall: ".25rem",
    xSmall: ".5rem",
    small: "1rem",
    medium: "2rem",
    large: "3rem",
    xlarge: "4rem",
    xxlarge: "6rem",
  },
  animations: {
    button: "box-shadow 0.3 ease",
    link: "color 0.2s ease",
  },
  shadows: {
    shadow1: "0px 5px 20px rgba(30,30,31,0.05)",
  },
}
export default Theme
