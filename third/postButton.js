function PostButton({ customText, fetching, type }) {
  if (fetching) {
    return <p>please wait...</p>;
  }

  return <button type={type}>{customText}</button>;
}
