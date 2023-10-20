import * as React from "react";
import Svg, { Path, Text } from "react-native-svg";

const Logo = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={387.414}
    height={59.375}
    {...props}
  >
    <Path
      fill="#1A75E0"
      d="M161.654 35.113c1.159-7.037 6.362-11.321 12.583-11.321 6.188 0 11.363 4.226 12.562 11.205l.027.128h-25.055l-.117-.012zm.021 6.047h33.75c.15-1.011.229-2.045.229-3.098 0-11.631-9.59-21.062-21.418-21.062-11.826 0-21.416 9.432-21.416 21.062 0 11.632 9.59 21.062 21.416 21.062 8.939 0 16.602-5.388 19.811-13.04h-8.873c-2.258 4.396-6.316 7.333-10.938 7.333-6.185 0-11.361-5.265-12.561-12.241v-.016zM343.438 35.113c1.157-7.037 6.36-11.321 12.582-11.321 6.188 0 11.364 4.226 12.563 11.205l.027.128h-25.056l-.116-.012zm.022 6.047h33.748c.152-1.011.23-2.045.23-3.098 0-11.631-9.59-21.062-21.418-21.062-11.826 0-21.416 9.432-21.416 21.062 0 11.632 9.59 21.062 21.416 21.062 8.938 0 16.602-5.388 19.811-13.04h-8.873c-2.258 4.396-6.315 7.333-10.938 7.333-6.187 0-11.361-5.265-12.562-12.241l.002-.016zM270.627 17.002c-11.825 0-21.416 9.43-21.416 21.062s9.591 21.062 21.416 21.062h.078c11.826 0 21.416-9.43 21.416-21.062s-9.59-21.062-21.416-21.062h-.078zm.078 6.623c6.222 0 11.422 4.451 12.582 11.488l-.119.012.119-.012c.08 1.223.151 2.445.115 3.67-.027.95-.119 1.909-.287 2.846-.593 3.295-2.14 6.373-4.617 8.65-2.028 1.865-4.998 3.138-7.793 3.138h-.078c-2.795 0-5.764-1.271-7.795-3.138-2.479-2.277-4.022-5.355-4.614-8.65a19.428 19.428 0 0 1-.289-2.846c-.037-1.225.036-2.447.116-3.67l.119.012-.119-.012c1.158-7.037 6.361-11.488 12.582-11.488h.078z"
    />
    <path
      fill="#1A75E0"
      d="M326.755.083v21.56a21.547 21.547 0 0 0-13.41-4.641h-.078c-11.825 0-21.415 9.43-21.415 21.062s9.59 21.062 21.416 21.062h.077c11.826 0 21.416-9.43 21.416-21.062V.083h-8.006zm-13.547 23.542c6.221 0 11.559 4.451 12.719 11.488l-.119.012.119-.012c.08 1.223.152 2.445.115 3.67-.027.95-.119 1.909-.287 2.846-.592 3.295-2.139 6.373-4.617 8.65-2.028 1.865-4.998 3.138-7.793 3.138h-.078c-2.795 0-5.764-1.271-7.795-3.138-2.479-2.277-4.022-5.355-4.614-8.65a19.428 19.428 0 0 1-.289-2.846c-.037-1.225.037-2.447.117-3.67l.118.012-.118-.012c1.157-7.037 6.225-11.488 12.444-11.488h.078zM98.252 8.083c5.02 0 9.104 4.084 9.104 9.104s-4.084 9.104-9.104 9.104H77.044V8.083h21.208m0-8H68.773v59.209h8.271v-25h21.208c9.447 0 17.104-7.657 17.104-17.104S107.699.083 98.252.083zM152.898 59.292h-8.122v-25c0-5.059-4.761-9.174-10.612-9.174-5.853 0-10.614 4.115-10.614 9.174v25h-8.193V.083h8.193V23.35c0-.375.17-.68.312-1.014 1.091-2.564 3.995-4.216 6.576-4.74 4.529-.92 9.612-.557 13.697 1.752 1.139.646 2.28 1.449 3.241 2.34 2.119 1.964 3.832 4.395 4.694 7.172.487 1.568.666 3.201.785 4.834.015.197.042.4.042.6.001-.001.001 24.998.001 24.998zM240.304 59.292l-37.028-47.784v47.784h-7.795V.083h8.758l37.282 47.784V.083h7.794v59.209z"
    />
    <path
      fill="#48F7F5"
      d="m.391 44.596 30.45.004c1.125 4.156 4.924 7.215 9.435 7.215 5.398 0 9.774-4.377 9.774-9.774s-4.376-9.772-9.774-9.772c-4.485 0-8.264 3.021-9.414 7.142L.39 39.414V.084h59.066v59.065H.391V44.596z"
    />
    <Text
      fill="#1A75E0"
      fontFamily="'HelveticaNeue'"
      fontSize={19.063}
      transform="translate(372.414 20.816)"
    >
      {"\xAE"}
    </Text>
  </Svg>
);
export default Logo;