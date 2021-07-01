import styled from "styled-components"

export const P = styled.p`
  margin: ${props => (props.margin ? props.margin : 0)};
  font-size: ${props => {
    switch (props.size) {
      case "xxSmall":
        return ".25rem"
      case "xSmall":
        return ".875rem"
      case "small":
        return "1rem"
      case "medium":
        return "1.125rem"
      case "large":
        return "3rem"
      case "xlarge":
        return "4rem"
      case "xxlarge":
        return "6rem"
      default:
        return "1.5rem"
    }
  }};
  line-height: 2.5rem;
  padding: ${props => (props.padding ? props.padding : 0)};

  color: ${props => {
    switch (props.color) {
      case "sysGrayLight1":
        return "rgb(142,142,147)"
      case "sysGrayLight2":
        return "rgb(174,174,178)"
      case "sysGrayLight3":
        return "rgb(199,199,204)"
      case "sysGrayLight4":
        return "rgb(209,209,214)"

      case "sysGrayLight5":
        return "rgb(229,229,234)"
      case "sysGrayLight6":
        return "rgb(242,242,247)"
      //colours
      case "sysBlueLight":
        return "rgb(0,122,255)"
      case "sysGreenLight":
        return "rgb(52,199,89)"
      case "sysIndigoLight":
        return "rgb(88,86,214)"
      case "sysOrangeLight":
        return "rgb(255,149,0)"
      case "sysPinkLight":
        return "rgb(255,45,85)"
      case "sysPurpleLight":
        return "rgb(175,82,222)"
      case "sysRedLight":
        return "rgb(255,59,48)"
      case "sysTealLight":
        return "rgb(90,200,250)"
      case "sysYellowLight":
        return "rgb(255,204,0)"
      //dark colours
      //grays
      case "sysGrayDark1":
        return "rgb(142,142,147)"
      case "sysGrayDark2":
        return "rgb(99,99,102)"
      case "sysGrayDark3":
        return "rgb(72,72,74)"
      case "sysGrayDark4":
        return "rgb(58,58,60)"
      case "sysGrayDark5":
        return "rgb(44,44,46)"
      case "sysGrayDark6":
        return "rgb(28,28,30)"
      //colours
      case "sysBlueDark":
        return "rgb(10,132,255)"
      case "sysGreenDark":
        return "rgb(48,209,88)"
      case "sysIndigoDark":
        return "rgb(94,92,230)"
      case "sysOrangeDark":
        return "rgb(255,159,10)"
      case "sysPinkDark":
        return "rgb(255,55,95)"
      case "sysPurpleDark":
        return "rgb(191,90,242)"
      case "sysRedDark":
        return "rgb(255,69,58)"
      case "sysTealDark":
        return "rgb(100,210,255)"
      case "sysYellowDark":
        return "rgb(255,214,10)"
      default:
        return "white"
    }
  }};
  text-decoration: ${props =>
    props.textdecoration ? props.textdecoration : "none"};
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
  font-weight: ${props => {
    switch (props.weight) {
      case "normal":
        return 400
      case "bold":
        return 700
      default:
        return 400
    }
  }};
`

export const H1 = styled.h1`
  color: ${props => {
    switch (props.color) {
      // case "sysGrayLight1":
      //   return "rgb(142,142,147)"
      // case "sysGrayLight2":
      //   return "rgb(174,174,178)"
      // case "sysGrayLight3":
      //   return "rgb(199,199,204)"
      // case "sysGrayLight4":
      //   return "rgb(209,209,214)"

      // case "sysGrayLight5":
      //   return "rgb(229,229,234)"
      // case "sysGrayLight6":
      //   return "rgb(242,242,247)"
      // //colours
      // case "sysBlueLight":
      //   return "rgb(0,122,255)"
      // case "sysGreenLight":
      //   return "rgb(52,199,89)"
      // case "sysIndigoLight":
      //   return "rgb(88,86,214)"
      // case "sysOrangeLight":
      //   return "rgb(255,149,0)"
      // case "sysPinkLight":
      //   return "rgb(255,45,85)"
      // case "sysPurpleLight":
      //   return "rgb(175,82,222)"
      // case "sysRedLight":
      //   return "rgb(255,59,48)"
      // case "sysTealLight":
      //   return "rgb(90,200,250)"
      // case "sysYellowLight":
      //   return "rgb(255,204,0)"
      // //dark colours
      // //grays
      // case "sysGrayDark1":
      //   return "rgb(142,142,147)"
      // case "sysGrayDark2":
      //   return "rgb(99,99,102)"
      // case "sysGrayDark3":
      //   return "rgb(72,72,74)"
      // case "sysGrayDark4":
      //   return "rgb(58,58,60)"
      // case "sysGrayDark5":
      //   return "rgb(44,44,46)"
      // case "sysGrayDark6":
      //   return "rgb(28,28,30)"
      // //colours
      // case "sysBlueDark":
      //   return "rgb(10,132,255)"
      // case "sysGreenDark":
      //   return "rgb(48,209,88)"
      // case "sysIndigoDark":
      //   return "rgb(94,92,230)"
      // case "sysOrangeDark":
      //   return "rgb(255,159,10)"
      // case "sysPinkDark":
      //   return "rgb(255,55,95)"
      // case "sysPurpleDark":
      //   return "rgb(191,90,242)"
      // case "sysRedDark":
      //   return "rgb(255,69,58)"
      // case "sysTealDark":
      //   return "rgb(100,210,255)"
      // case "sysYellowDark":
      //   return "rgb(255,214,10)"
      default:
        return "white"
    }
  }};

  font-size: 2.25;
  /* line-height: 2; */

  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
  font-weight: 400;
  margin: ${props => (props.margin ? props.margin : 0)};
`

export const H2 = styled.h2`
  font-size: 1.5rem;
  /* line-height: 1.5rem; */
  color: ${props => {
    switch (props.color) {
      // case "sysGrayLight1":
      //   return "rgb(142,142,147)"
      // case "sysGrayLight2":
      //   return "rgb(174,174,178)"
      // case "sysGrayLight3":
      //   return "rgb(199,199,204)"
      // case "sysGrayLight4":
      //   return "rgb(209,209,214)"

      // case "sysGrayLight5":
      //   return "rgb(229,229,234)"
      // case "sysGrayLight6":
      //   return "rgb(242,242,247)"
      // //colours
      // case "sysBlueLight":
      //   return "rgb(0,122,255)"
      // case "sysGreenLight":
      //   return "rgb(52,199,89)"
      // case "sysIndigoLight":
      //   return "rgb(88,86,214)"
      // case "sysOrangeLight":
      //   return "rgb(255,149,0)"
      // case "sysPinkLight":
      //   return "rgb(255,45,85)"
      // case "sysPurpleLight":
      //   return "rgb(175,82,222)"
      // case "sysRedLight":
      //   return "rgb(255,59,48)"
      // case "sysTealLight":
      //   return "rgb(90,200,250)"
      // case "sysYellowLight":
      //   return "rgb(255,204,0)"
      // //dark colours
      // //grays
      // case "sysGrayDark1":
      //   return "rgb(142,142,147)"
      // case "sysGrayDark2":
      //   return "rgb(99,99,102)"
      // case "sysGrayDark3":
      //   return "rgb(72,72,74)"
      // case "sysGrayDark4":
      //   return "rgb(58,58,60)"
      // case "sysGrayDark5":
      //   return "rgb(44,44,46)"
      // case "sysGrayDark6":
      //   return "rgb(28,28,30)"
      // //colours
      // case "sysBlueDark":
      //   return "rgb(10,132,255)"
      // case "sysGreenDark":
      //   return "rgb(48,209,88)"
      // case "sysIndigoDark":
      //   return "rgb(94,92,230)"
      // case "sysOrangeDark":
      //   return "rgb(255,159,10)"
      // case "sysPinkDark":
      //   return "rgb(255,55,95)"
      // case "sysPurpleDark":
      //   return "rgb(191,90,242)"
      // case "sysRedDark":
      //   return "rgb(255,69,58)"
      // case "sysTealDark":
      //   return "rgb(100,210,255)"
      // case "sysYellowDark":
      //   return "rgb(255,214,10)"
      default:
        return "white"
    }
  }};

  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
  font-weight: bold;
  margin: ${props => (props.margin ? props.margin : 0)};
`
export const H3 = styled.h3`
  font-size: 1.5rem;
  line-height: 1.5rem;
  color: ${props => {
    switch (props.color) {
      // case "sysGrayLight1":
      //   return "rgb(142,142,147)"
      // case "sysGrayLight2":
      //   return "rgb(174,174,178)"
      // case "sysGrayLight3":
      //   return "rgb(199,199,204)"
      // case "sysGrayLight4":
      //   return "rgb(209,209,214)"

      // case "sysGrayLight5":
      //   return "rgb(229,229,234)"
      // case "sysGrayLight6":
      //   return "rgb(242,242,247)"
      // //colours
      // case "sysBlueLight":
      //   return "rgb(0,122,255)"
      // case "sysGreenLight":
      //   return "rgb(52,199,89)"
      // case "sysIndigoLight":
      //   return "rgb(88,86,214)"
      // case "sysOrangeLight":
      //   return "rgb(255,149,0)"
      // case "sysPinkLight":
      //   return "rgb(255,45,85)"
      // case "sysPurpleLight":
      //   return "rgb(175,82,222)"
      // case "sysRedLight":
      //   return "rgb(255,59,48)"
      // case "sysTealLight":
      //   return "rgb(90,200,250)"
      // case "sysYellowLight":
      //   return "rgb(255,204,0)"
      // //dark colours
      // //grays
      // case "sysGrayDark1":
      //   return "rgb(142,142,147)"
      // case "sysGrayDark2":
      //   return "rgb(99,99,102)"
      // case "sysGrayDark3":
      //   return "rgb(72,72,74)"
      // case "sysGrayDark4":
      //   return "rgb(58,58,60)"
      // case "sysGrayDark5":
      //   return "rgb(44,44,46)"
      // case "sysGrayDark6":
      //   return "rgb(28,28,30)"
      // //colours
      // case "sysBlueDark":
      //   return "rgb(10,132,255)"
      // case "sysGreenDark":
      //   return "rgb(48,209,88)"
      // case "sysIndigoDark":
      //   return "rgb(94,92,230)"
      // case "sysOrangeDark":
      //   return "rgb(255,159,10)"
      // case "sysPinkDark":
      //   return "rgb(255,55,95)"
      // case "sysPurpleDark":
      //   return "rgb(191,90,242)"
      // case "sysRedDark":
      //   return "rgb(255,69,58)"
      // case "sysTealDark":
      //   return "rgb(100,210,255)"
      // case "sysYellowDark":
      //   return "rgb(255,214,10)"
      default:
        return "white"
    }
  }};

  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
  font-weight: 400;
  margin: ${props => (props.margin ? props.margin : 0)};
`
export const A = styled.a`
  color: ${props => {
    switch (props.color) {
      // case "sysGrayLight1":
      //   return "rgb(142,142,147)"
      // case "sysGrayLight2":
      //   return "rgb(174,174,178)"
      // case "sysGrayLight3":
      //   return "rgb(199,199,204)"
      // case "sysGrayLight4":
      //   return "rgb(209,209,214)"

      // case "sysGrayLight5":
      //   return "rgb(229,229,234)"
      // case "sysGrayLight6":
      //   return "rgb(242,242,247)"
      // //colours
      // case "sysBlueLight":
      //   return "rgb(0,122,255)"
      // case "sysGreenLight":
      //   return "rgb(52,199,89)"
      // case "sysIndigoLight":
      //   return "rgb(88,86,214)"
      // case "sysOrangeLight":
      //   return "rgb(255,149,0)"
      // case "sysPinkLight":
      //   return "rgb(255,45,85)"
      // case "sysPurpleLight":
      //   return "rgb(175,82,222)"
      // case "sysRedLight":
      //   return "rgb(255,59,48)"
      // case "sysTealLight":
      //   return "rgb(90,200,250)"
      // case "sysYellowLight":
      //   return "rgb(255,204,0)"
      // //dark colours
      // //grays
      // case "sysGrayDark1":
      //   return "rgb(142,142,147)"
      // case "sysGrayDark2":
      //   return "rgb(99,99,102)"
      // case "sysGrayDark3":
      //   return "rgb(72,72,74)"
      // case "sysGrayDark4":
      //   return "rgb(58,58,60)"
      // case "sysGrayDark5":
      //   return "rgb(44,44,46)"
      // case "sysGrayDark6":
      //   return "rgb(28,28,30)"
      // //colours
      // case "sysBlueDark":
      //   return "rgb(10,132,255)"
      // case "sysGreenDark":
      //   return "rgb(48,209,88)"
      // case "sysIndigoDark":
      //   return "rgb(94,92,230)"
      // case "sysOrangeDark":
      //   return "rgb(255,159,10)"
      // case "sysPinkDark":
      //   return "rgb(255,55,95)"
      // case "sysPurpleDark":
      //   return "rgb(191,90,242)"
      // case "sysRedDark":
      //   return "rgb(255,69,58)"
      // case "sysTealDark":
      //   return "rgb(100,210,255)"
      // case "sysYellowDark":
      //   return "rgb(255,214,10)"
      default:
        return "white"
    }
  }};

  text-decoration: none;
  &:hover,
  &:focus {
  }
`
