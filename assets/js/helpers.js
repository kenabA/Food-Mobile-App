export const getJSON = async function (url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (res.status != 200) console.log("Invalid Status Code.");
    return data;
  } catch (err) {
    throw err;
  }
};
