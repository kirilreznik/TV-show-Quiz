import backgroundImg from "../assets/background.jpg";
const globalStyles = `
*{
    paddind:0;
    margin:0;
}

    body,
    #root {
        height: 100%;
    }
    body {
        margin: 0;
        background-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 1),
            rgba(0, 0, 0, 1),
            rgba(0, 0, 0, 1),
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.4),
            rgba(0, 0, 0, 0.3),
            rgb(247, 242, 242, 0.1)
          ),
          url(${backgroundImg});
        background-size: cover;
        background-repeat: no-repeat;
        height: 100vh;
        background-position: center;
        z-index: -1;
        background-color: black;
      }
      @media only screen and (max-width: 700px) {
        body {
          background-image: linear-gradient(
              360deg,
              rgba(0, 0, 0, 1),
              rgba(0, 0, 0, 1),
              rgba(0, 0, 0, 1),
              rgba(0, 0, 0, 1),
              rgba(0, 0, 0, 0.7),
              rgba(0, 0, 0, 0.4),
              rgba(0, 0, 0, 0.3),
              rgb(247, 242, 242, 0.1)
            ),
           url(${backgroundImg});
          background-size: cover;
          background-repeat: no-repeat;
          height: 100vh;
          background-position: center;
          z-index: -1;
          background-color: black;
    }

`;

export default globalStyles;
