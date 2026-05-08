import { Stack } from "expo-router";
import { useColors } from "@/hooks/useColors";

export default function ProductLayout() {
  const colors = useColors();
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.foreground,
        headerBackTitle: "Back",
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="[id]" options={{ title: "" }} />
    </Stack>
  );
}
