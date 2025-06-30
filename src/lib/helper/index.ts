import { FORMSPREE } from "@/data";

export const generateBlogSlug = (title: string, id: string | number) => {
  return title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
    .concat(`-${id}`);
};

export const getIdFromBlogSlug = (slug: string) => {
  return slug.split("-")[slug.split("-").length - 1];
};

// Function to submit form data to a specified URL
export const submitFormData = async (
  formData: Record<string, string>,
  formUrl: string = FORMSPREE
) => {
  try {
    const response = await fetch(formUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), // Send form data as JSON
    });

    // Check for successful response
    if (!response.ok) {
      throw new Error("Form submission failed!");
    }

    const result = await response.json();
    return result; // You can handle the success response here (e.g., show a success message)
  } catch (error) {
    console.error("Error submitting form data:", error);
    return null; // You can handle errors here (e.g., show an error message)
  }
};
