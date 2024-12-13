import { Sheet, Typography } from "@mui/joy";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/test")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Sheet sx={{ p: 3 }}>
      <Typography variant="soft" color="primary">
        Hello "/test"!
      </Typography>
      <Link to="/">Home</Link>
    </Sheet>
  );
}
