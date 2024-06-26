import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, Button, useColorMode } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";
import AddPost from "./pages/AddPost.jsx";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Router>
      <Box p={4}>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
        </Button>
      </Box>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/add-post" element={<AddPost />} />
      </Routes>
    </Router>
  );
}

export default App;