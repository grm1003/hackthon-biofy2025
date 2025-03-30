import { createFileRoute } from "@tanstack/react-router";

import { URL_CHAT } from "@/infrastructure/navigation/constants";
import { ChatContainer } from "@/modules/chat/chat.container";

export const Route = createFileRoute(URL_CHAT)({
  component: RouteComponent,
});

function RouteComponent() {
  return <ChatContainer />;
}
