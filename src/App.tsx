import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";
import QuickOverview from "@/pages/QuickOverview";
import Showcase from "@/pages/Showcase";
import {
  TitlePage,
  Acknowledgement,
  TraineePrayer,
  PersonalPhilosophy,
  CareerPlan,
} from "@/pages/contents/ContentPages";
import Chapter1 from "@/pages/chapters/Chapter1";

import { Chapter2 } from "@/pages/chapters/Chapter2";
import { Chapter3 } from "@/pages/chapters/Chapter3";
import { Chapter4 } from "@/pages/chapters/Chapter4";
import {
  AppendixA,
  AppendixB,
  AppendixC,
  AppendixD,
  AppendixE,
  AppendixF,
  AppendixG,
  AppendixH,
  AppendixI,
  AppendixJ,
  AppendixK,
  AppendixL,
  AppendixQ,
} from "@/pages/appendices/AppendixPages";
import Resume from "@/pages/Resume";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<QuickOverview />} />
            <Route path="/showcase" element={<Showcase />} />
            <Route path="/contents/title-page" element={<TitlePage />} />
            <Route
              path="/contents/acknowledgement"
              element={<Acknowledgement />}
            />
            <Route
              path="/contents/trainee-prayer"
              element={<TraineePrayer />}
            />
            <Route
              path="/contents/personal-philosophy"
              element={<PersonalPhilosophy />}
            />
            <Route path="/contents/career-plan" element={<CareerPlan />} />
            <Route path="/chapters/1" element={<Chapter1 />} />
            <Route path="/chapters/2" element={<Chapter2 />} />
            <Route path="/chapters/3" element={<Chapter3 />} />
            <Route path="/chapters/4" element={<Chapter4 />} />
            <Route path="/appendices/a" element={<AppendixA />} />
            <Route path="/appendices/b" element={<AppendixB />} />
            <Route path="/appendices/c" element={<AppendixC />} />
            <Route path="/appendices/d" element={<AppendixD />} />
            <Route path="/appendices/e" element={<AppendixE />} />
            <Route path="/appendices/f" element={<AppendixF />} />
            <Route path="/appendices/g" element={<AppendixG />} />
            <Route path="/appendices/h" element={<AppendixH />} />
            <Route path="/appendices/i" element={<AppendixI />} />
            <Route path="/appendices/j" element={<AppendixJ />} />
            <Route path="/appendices/k" element={<AppendixK />} />
            <Route path="/appendices/l" element={<AppendixL />} />
            <Route path="/appendices/q" element={<AppendixQ />} />
            <Route path="/resume" element={<Resume />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
