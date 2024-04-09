var totalVotes = 0;
var sureshVotes = 0;
var deepankVotes = 0;
var abhikVotes = 0;



// URL of the CRUD API endpoint
const apiUrl = 'https://crudcrud.com/api/7d955e427ec14f4f8e3a9f82f761313b';


const id = "6615aaacb6787603e855c7d7"

let ss;
let dp;
let ab;


// Function to fetch initial data from CrudCrud
async function fetchData() {
  await axios.get(`${apiUrl}/votes/${id}`, )
    .then(response => {
      const data = response.data;
      console.log(data.sureshVoters);
      if (data) {
        sureshVotes = data.sureshVotes || 0;
        deepankVotes = data.deepankVotes || 0;
        abhikVotes = data.abhikVotes || 0;
        totalVotes = data.totalVotes || 0;

        // Update HTML with fetched data
        document.getElementById('sureshVotes').textContent = sureshVotes;
        document.getElementById('deepankVotes').textContent = deepankVotes;
        document.getElementById('abhikVotes').textContent = abhikVotes;
        document.getElementById('totalVotes').textContent = totalVotes;

        ss = data.sureshVoters;
        dp = data.deepankVoters;
        ab = data.abhikVoters;
        console.log(ss);
        
        // Update voter lists if there are any
        updateVoterList('suresh', data.sureshVoters);
        updateVoterList('deepank', data.deepankVoters);
        updateVoterList('abhik', data.abhikVoters);
      }
    })
    .catch(error => {
      console.log(error);
    });
}


// Function to store data in CrudCrud
function storeData() {
  const dataToAdd = {
    sureshVotes: sureshVotes,
    deepankVotes: deepankVotes,
    abhikVotes: abhikVotes,
    totalVotes: totalVotes,
    sureshVoters: ss,
    deepankVoters: dp,
    abhikVoters: ab
  };

  // Making a PUT request using Axios to update existing data or create if not exists
  axios.put(`${apiUrl}/votes/${id}/`, dataToAdd)
    .then(response => {
      console.log('Data stored successfully:', response.data);
    })
    .catch(error => {
      console.log(error);
    });
}

// document.getElementById('sureshVoters').innerHTML += `<li>${studentName} <button onclick="deleteVote('suresh', this)">Delete</button></li>`;

function updateVoterList(monitor, voters) {
  const voterList = document.getElementById(`${monitor}Voters`);
  if (voters && voters.length > 0) {
    for(let i=0;i<voters.length;i++){
      voterList.innerHTML += `<li>${voters[i]} <button onclick="deleteVote('${monitor}', this)">Delete</button></li>`;
    };
  }
}


async function deleteVote(monitor, button) {
  // Get the parent <li> element
  const listItem = button.parentNode;

  // Extracting the voter name
  const voterName = listItem.textContent.trim().split(' ')[0];
  console.log(voterName)

  // Update the respective votes count and totalVotes
  if (monitor === 'suresh') {
      sureshVotes--;
      document.getElementById('sureshVotes').textContent = sureshVotes;
      // Remove the voter name from the sureshVoters array
      const index = ss.indexOf(voterName);
      if (index !== -1) {
          ss.splice(index, 1);
      }
      totalVotes--;
  } else if (monitor === 'deepank') {
      deepankVotes--;
      document.getElementById('deepankVotes').textContent = deepankVotes;
      // Remove the voter name from the deepankVoters array
      const index = dp.indexOf(voterName);
      if (index !== -1) {
          dp.splice(index, 1);
      }
      totalVotes--;
  } else if (monitor === 'abhik') {
      abhikVotes--;
      document.getElementById('abhikVotes').textContent = abhikVotes;
      // Remove the voter name from the abhikVoters array
      const index = ab.indexOf(voterName);
      if (index !== -1) {
          ab.splice(index, 1);
      }
      totalVotes--;
  }

  document.getElementById('totalVotes').textContent = totalVotes;

  // Remove the <li> element
  listItem.remove();

  // Update the data in the backend
  storeData();
}


function voteCount(){
  // document.getElementById('totalVotes').textContent = totalVotes;
  fetchData();

}


  

function submitVote() {
  const studentName = document.getElementById('studentName').value;
  const monitorSelected = document.getElementById('monitorSelect').value;

  if (monitorSelected === 'Suresh') {
    sureshVotes++;
    totalVotes++;
    document.getElementById('sureshVotes').textContent = sureshVotes;
    document.getElementById('sureshVoters').innerHTML += `<li>${studentName} <button onclick="deleteVote('suresh', this)">Delete</button></li>`;
    ss.push(studentName);
    document.getElementById('totalVotes').textContent = totalVotes;
    storeData();
  } else if (monitorSelected === 'Deepank') {
    deepankVotes++;
    totalVotes++;
    document.getElementById('deepankVotes').textContent = deepankVotes;
    document.getElementById('deepankVoters').innerHTML += `<li>${studentName} <button onclick="deleteVote('deepank', this)">Delete</button></li>`;
    document.getElementById('totalVotes').textContent = totalVotes;
    dp.push(studentName);
    storeData();
  } else if (monitorSelected === 'Abhik') {
    abhikVotes++;
    totalVotes++;
    document.getElementById('abhikVotes').textContent = abhikVotes;
    document.getElementById('abhikVoters').innerHTML += `<li>${studentName} <button onclick="deleteVote('abhik', this)">Delete</button></li>`;
    document.getElementById('totalVotes').textContent = totalVotes;
    ab.push(studentName);
    storeData();
  }
}


// function deleteVote(monitor, button) {
//     // Get the parent <li> element
//     const listItem = button.parentNode;
  
//     // Update the respective votes count and totalVotes
//     if (monitor === 'Suresh') {
//       sureshVotes--;
//       document.getElementById('sureshVotes').textContent = sureshVotes;
//     } else if (monitor === 'Deepank') {
//       deepankVotes--;
//       document.getElementById('deepankVotes').textContent = deepankVotes;
//     } else if (monitor === 'Abhik') {
//       abhikVotes--;
//       document.getElementById('abhikVotes').textContent = abhikVotes;
//     }
  
//     totalVotes--;
//     document.getElementById('totalVotes').textContent = totalVotes;
  
//     // Remove the <li> element
//     listItem.remove();
//   }












