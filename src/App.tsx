import { Route, Switch, Router as WouterRouter, useLocation } from "wouter";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ComingSoonBar } from "@/components/coming-soon";
import { InterestForm } from "@/components/interest-form";
import Home from "@/pages/home";
import Businesses from "@/pages/businesses";
import Drivers from "@/pages/drivers";
import Trust from "@/pages/trust";
import Pilot from "@/pages/pilot";
import NotFound from "@/pages/not-found";
import { useScrollRestore } from "@/lib/seo";

function Pages() {
  const [location] = useLocation();
  useScrollRestore(location);
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/businesses" component={Businesses} />
      <Route path="/drivers" component={Drivers} />
      <Route path="/trust" component={Trust} />
      <Route path="/pilot" component={Pilot} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-card focus:px-4 focus:py-2 focus:shadow-card"
      >
        Skip to content
      </a>
      <ComingSoonBar />
      <SiteHeader />
      <main id="main" className="min-h-[60vh]">
        <Pages />
        <InterestForm />
      </main>
      <SiteFooter />
    </WouterRouter>
  );
}
