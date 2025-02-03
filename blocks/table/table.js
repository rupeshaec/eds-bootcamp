export default function decorate(block) {
  console.warn(block);
  fetch(`/gender.json`)
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
      return {};
    })
    .then((json) => {
      renderTable(json.data, block);
    })
    .catch(() => {
      // error loading placeholders
      window.placeholders[prefix] = {};
      resolve(window.placeholders[prefix]);
    });
}

function renderTable(data, block) {
  console.log(data);
  const tableBody = block;
  tableBody.innerHTML = ""; // Clear existing content

  data.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${item.name}</td><td>${item.gender}</td>`;
    tableBody.appendChild(row);
  });
}
