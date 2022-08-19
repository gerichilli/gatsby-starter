import React from "react";

function Seo({ children, title, description, location }) {
  return (
    <>
      <title>{title || "Gatsby Site"}</title>
      <meta name="description" content={description || "Gatsby Site"} />
      {children}
    </>
  );
}

export default Seo;
