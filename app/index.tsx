import { Redirect } from "expo-router";

export default function Index() {
  // نقوم بالتحويل التلقائي إلى شاشة المهام في شريط التنقل
  return <Redirect href="/tasks" />;
}
