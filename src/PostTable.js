import { useState } from "react";
import Pagination from "./Pagination";
import SearchTable from "./SearchTable";
import PaginationWithNumbers from "./PaginationWithNumbers";

const PostTable = (props) => {
  const [page, setPage] = useState(0);
  const { posts, setPosts } = props;
  const [searchText, setSearchText] = useState("");
  const handleSearch = () => {
    const fileredPosts = () => {
      return posts.filter(
        (post) =>
          post.title.includes(searchText) || post.body.includes(searchText)
      );
    };
    setPosts(fileredPosts);
  };
  const handleNext = () => {
    setPage(page + 1);
  };
  const handlePrevious = () => {
    setPage(page - 1);
  };

  const disablePrev = () => {
    return page === 0;
  };
  const disableNext = () => {
    return page === 9;
  };
  return (
    <>
      <SearchTable
        searchText={searchText}
        setSearchText={setSearchText}
        handleSearch={handleSearch}
      />
      <table border>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts?.length > 0 ? (
            posts.slice(page * 10, page * 10 + 10)?.map((row) => {
              return (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.title}</td>
                  <td>{row.body}</td>
                </tr>
              );
            })
          ) : (
            <tr key={"No Data"}>
              <td>{"No Data"}</td>
              <td>{"No Data"}</td>
              <td>{"No Data"}</td>
            </tr>
          )}
        </tbody>
      </table>
      <Pagination
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        disablePrev={disablePrev}
        disableNext={disableNext}
      />
      <PaginationWithNumbers posts={posts} setPage={setPage} />
    </>
  );
};

export default PostTable;
