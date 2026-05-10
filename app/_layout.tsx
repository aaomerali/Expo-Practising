import { Stack } from "expo-router";
import { TasksProvider } from "../context/TasksContext"; // استيراد الغلاف


export default function RootLayout() {
  return (
    <TasksProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </TasksProvider>
  );
}
