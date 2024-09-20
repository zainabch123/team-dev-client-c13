import { useState, useEffect } from "react";
import SearchIcon from "../../assets/icons/searchIcon";
import Card from "../../components/card";
import CreatePostModal from "../../components/createPostModal";
import TextInput from "../../components/form/textInput";
import Posts from "../../components/posts";
import useModal from "../../hooks/useModal";
import "./style.css";

const Dashboard = () => {
  const [searchVal, setSearchVal] = useState(""); // Search input state
  const [debouncedSearch, setDebouncedSearch] = useState(searchVal); // Debounced search state
  const [searchResults, setSearchResults] = useState([]); // Search results state
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [errorMessage, setErrorMessage] = useState(""); // Error message state

  // Use the useModal hook to get the openModal and setModal functions
  const { openModal, setModal } = useModal();

  const onChangeSearchTerm = (e) => {
    setSearchVal(e.target.value);
  };

  // Debounce the search input to limit API calls
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchVal); // Update debounced search value after delay
    }, 300); // 300ms delay before making the search request

    return () => {
      clearTimeout(handler); // Clear the timeout when searchVal changes to avoid multiple requests
    };
  }, [searchVal]);

  // Fetch search results based on debounced search value
  useEffect(() => {
    if (!debouncedSearch.trim()) return; // Avoid making an API call for empty searches

    const fetchSearchResults = async () => {
      setIsLoading(true);
      setErrorMessage(""); // Clear any previous errors

      try {
        // Split searchVal into firstName and lastName (assuming space separates them)
        const [firstName, lastName] = debouncedSearch.trim().split(" ");

        // Create the appropriate query string for the API call
        const query = new URLSearchParams({
          first_name: firstName || "",
          last_name: lastName || "",
        }).toString();

        // Fetch users from the updated route with query parameters
        const response = await fetch(`/api/users?${query}`);
        const result = await response.json();

        setSearchResults(result.users); // Store the fetched users
      } catch (error) {
        setErrorMessage("Failed to fetch search results."); // Set error message
      } finally {
        setIsLoading(false); // Reset loading state
      }
    };

    fetchSearchResults();
  }, [debouncedSearch]);

  // Show modal when the button is clicked
  const showCreatePostModal = () => {
    setModal("Create a post", <CreatePostModal />);
    openModal();
  };

  return (
    <>
      <main>
        <Card>
          <div className="create-post-input">
            <div className="profile-icon">
              <p>AJ</p>
            </div>
            <button onClick={showCreatePostModal}>What's on your mind?</button>
          </div>
        </Card>

        <Posts />
      </main>

      <aside>
        <Card>
          <form onSubmit={(e) => e.preventDefault()}>
            <TextInput
              icon={<SearchIcon />}
              value={searchVal}
              name="Search"
              onChange={onChangeSearchTerm}
            />
          </form>
        </Card>

        <Card>
          <h4>My Cohort</h4>
          {/* Render error message */}
          {errorMessage && <p className="error">{errorMessage}</p>}
          {/* Render search results */}
          {searchResults.length > 0 ? (
            <ul>
              {searchResults.map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          ) : (
            !isLoading && searchVal && <p>No users found.</p> // Show message if no users found
          )}
        </Card>
      </aside>
    </>
  );
};

export default Dashboard;
