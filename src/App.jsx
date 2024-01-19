import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Book from "./pages/Book";
import Books from "./pages/Books";
import PageNotFound from "./pages/PageNotFound";
import Main from "./ui/Main";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<Main />}>
            <Route index element={<Navigate replace to="books" />} />
            <Route path="books" element={<Books />} />
            <Route path="books/:bookId" element={<Book />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
