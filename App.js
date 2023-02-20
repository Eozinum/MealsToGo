/* eslint-disable react/react-in-jsx-scope */
import { RestaurantsScreen } from "./src/features/restaurants/screens/RestaurantsScreen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Lato_400Regular,
} from "@expo-google-fonts/lato";
import {
  useFonts as useLato,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <RestaurantsScreen />
    </ThemeProvider>
  );
}
