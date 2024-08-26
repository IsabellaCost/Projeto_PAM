
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: "black",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerTitleAlign: "center", // Centraliza o título na barra de navegação
    }}
  >
    {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
    <Stack.Screen name="index" options={{ title: "Coffee WP" }} />
    <Stack.Screen name="products" options={{ title: "Menu WP" }} />
  </Stack>

  );
}



