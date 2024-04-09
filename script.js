document.addEventListener('DOMContentLoaded', () => {
    fetch('https://metadata.frensville.com/stats')
        .then(response => response.json())
        .then(data => {
            document.getElementById('stakedValue').textContent = data.staked.toLocaleString();
            document.getElementById('unstakedValue').textContent = data.unstaked.toLocaleString();
        })
        .catch(error => console.error('Error fetching data:', error));
});
