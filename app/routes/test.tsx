import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/test")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Sheet>
      <Typography sx={{ color: "red" }}>Hello "/test"!</Typography>
    </Sheet>
  );
}
