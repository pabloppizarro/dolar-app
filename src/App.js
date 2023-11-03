import "./App.css";
import Layout from "./Layout/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Layout />
      </div>
    </QueryClientProvider>
  );
}

export default App;
