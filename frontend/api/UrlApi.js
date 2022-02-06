export async function createUrl(origUrl) {
  const result = await fetch("/createUrl", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ origUrl: origUrl }),
  }).then((response) => response.json());
  return result;
}

export async function getUrls() {
  const result = await fetch("/getUrls").then((response) => response.json());
  return result;
}

export async function getUrlById(urlId) {
  const result = await fetch(`/getUrls/${urlId}`).then((response) => response.json());
  return result;
}

export async function updateUrl(origUrl) {
  const result = await fetch("/updateUrl", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ origUrl: origUrl }),
  }).then((response) => response.json());
  return result;
}

export async function deleteUrl(urlId) {
  const result = await fetch(`/deleteUrl/${urlId}`).then((response) => response.json());
  return result;
}
