import { Switch, Route, Router as WouterRouter } from "wouter";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/home";
import AfroMusePage from "@/pages/afromuse";
import GTProPage from "@/pages/gtpro";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/afromuse" component={AfroMusePage} />
      <Route path="/gtpro" component={GTProPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}

export default App;
