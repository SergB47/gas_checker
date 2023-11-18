

const apiKey = process.env.ALCH_KEY

const url = "https://eth-mainnet.g.alchemy.com/v2/"+apiKey;
const address = "0x0177f45d3d6cBC133f81FC876be0aD642e1b44cb";

fetch(`${url}/getAssetTransfers?address=${address}`)
 .then(response => response.json())
 .then(data => {
  const element = document.getElementById('output');
  element.textContent = JSON.stringify(data);
 })
 .catch(error => console.error('Error:', error));
