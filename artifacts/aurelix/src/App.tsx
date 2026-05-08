import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/home";
import AfroMusePage from "@/pages/afromuse";
import GTProPage from "@/pages/gtpro";
import { ProgressBar } from "@/components/ui/progress-bar";

const pageVariants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

const pageTransition = {
  duration: 0.32,
  ease: [0.25, 0.46, 0.45, 0.94] as const,
};

function Router() {
  const [location] = useLocation();

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
