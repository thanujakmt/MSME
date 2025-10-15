export const parseTitleAndDescription = (title) => {
    if (!title)
      return {
        extractedTitle: "Default Title",
        extractedDescription: "Default description for the blog post.",
      };

    const cleanTitle = title.replace(/-/g, "").trim();
    const titleSplit = cleanTitle.split("(");

    const extractedTitle = titleSplit[0]?.trim() || "Default Title";
    const extractedDescription =
      titleSplit.length > 1
        ? titleSplit[1]?.replace(")", "").trim() ||
          "Default description for the blog post."
        : "Default description for the blog post.";

    return { extractedTitle, extractedDescription };
  };