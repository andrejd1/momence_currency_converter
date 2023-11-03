import "./App.css";
import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

function App() {
  const { data, error, isLoading } = useSWR("/daily", fetcher);

  if (error) return <div>Failed to load...</div>;
  if (isLoading) return <div>Loading...</div>;
  return <>{data && <div>{data}</div>}</>;
}

export default App;
