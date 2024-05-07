const { useState } = React;

function PostData() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fetching, setFetching] = useState(false);
  const [result, setResult] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFetching(true);
    try {
      const result = await postData(phoneNumber);
      setResult(result);
    } catch (error) {
      // Handle error here
      console.error("Error:", error);
    } finally {
      setFetching(false);
    }
  };

  const postData = async (phoneNumber) => {
    const response = await fetch("https://chimpu.xyz/api/post.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phonenumber: phoneNumber }),
    });

    return response.json();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Phone Number: </label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        {typeof result?.error === "boolean" && (
          <p className={result?.error && "error"}>{result.msg}</p>
        )}
        <PostButton customText="Post Data" type="submit" fetching={fetching} />
      </form>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<PostData />);
