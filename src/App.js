import "./App.css";
import Layout from "./Layout/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//redux
import { Provider } from "react-redux";
import store from "./store";
//
const queryClient = new QueryClient();
function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Layout />
        </div>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
