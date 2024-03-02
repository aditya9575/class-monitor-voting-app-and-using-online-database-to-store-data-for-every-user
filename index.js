let totalVotes = 0;


let sureshVotes = 0;
let deepankVotes = 0;
let abhikVotes = 0;

const axios = require('axios');

// URL of the CRUD API endpoint
const apiUrl = 'https://crudcrud.com/api/9b37f699e44d4b7f8fdaf97019637c85';


const dataToAdd = {
    sureshVotes: 0,
    deepankVotes: 0,
    abhikVotes: 0,
    totalVotes: 0,
};

// Making a POST request using Axios
axios.post(apiUrl, dataToAdd)
  .then(response => {
    console.log('Entry created successfully:', response.data);
  })
  .catch(error => {
    console.log(error);
  });

  

function submitVote() {
  const studentName = document.getElementById('studentName').value;
  const monitorSelected = document.getElementById('monitorSelect').value;

  if (monitorSelected === 'Suresh') {
    sureshVotes++;
    totalVotes++;
    document.getElementById('sureshVotes').textContent = sureshVotes;
    document.getElementById('sureshVoters').innerHTML += `<li>${studentName} <button onclick="deleteVote('Suresh', this)">Delete</button></li>`;
    document.getElementById('totalVotes').textContent = totalVotes;
  } else if (monitorSelected === 'Deepank') {
    deepankVotes++;
    totalVotes++;
    document.getElementById('deepankVotes').textContent = deepankVotes;
    document.getElementById('deepankVoters').innerHTML += `<li>${studentName} <button onclick="deleteVote('Deepank', this)">Delete</button></li>`;
    document.getElementById('totalVotes').textContent = totalVotes;
  } else if (monitorSelected === 'Abhik') {
    abhikVotes++;
    totalVotes++;
    document.getElementById('abhikVotes').textContent = abhikVotes;
    document.getElementById('abhikVoters').innerHTML += `<li>${studentName} <button onclick="deleteVote('Abhik', this)">Delete</button></li>`;
    document.getElementById('totalVotes').textContent = totalVotes;
  }
}


function deleteVote(monitor, button) {
    // Get the parent <li> element
    const listItem = button.parentNode;
  
    // Update the respective votes count and totalVotes
    if (monitor === 'Suresh') {
      sureshVotes--;
      document.getElementById('sureshVotes').textContent = sureshVotes;
    } else if (monitor === 'Deepank') {
      deepankVotes--;
      document.getElementById('deepankVotes').textContent = deepankVotes;
    } else if (monitor === 'Abhik') {
      abhikVotes--;
      document.getElementById('abhikVotes').textContent = abhikVotes;
    }
  
    totalVotes--;
    document.getElementById('totalVotes').textContent = totalVotes;
  
    // Remove the <li> element
    listItem.remove();
  }