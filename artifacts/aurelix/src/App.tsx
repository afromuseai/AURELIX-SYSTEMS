import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/home";
import AfroMusePage from "@/pages/afromuse";
import GTProPage from "@/pages/gtpro";
import { ProgressBar } from "@/components/ui/progress-bar";
import { pageVariants, pageTransition } from "@/lib/page-transition";

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
      >
        <Switch location={location}>
          <Route path="/" component={HomePage} />
          <Route path="/afromuse" component={AfroMusePage} />
          <Route path="/gtpro" component={GTProPage} />
          <Route component={NotFound} />
        </Switch>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <ProgressBar />
      <Router />
    </WouterRouter>
  );
}

export default App;
