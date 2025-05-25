// open DB when app loads
openDB().then(() => {
  console.log('IndexedDB ready');
  syncComplaints();  // try sync if online on load
});

async function submitComplaint(title, description) {
  const complaint = { title, description, timestamp: new Date().toISOString() };

  if (navigator.onLine) {
    // online - try send directly
    try {
      await sendToServer(complaint);
      alert('Complaint submitted online!');
    } catch {
      // if failed, save locally
      await addComplaintToDB(complaint);
      alert('Network error! Complaint saved locally.');
    }
  } else {
    // offline - save locally
    await addComplaintToDB(complaint);
    alert('You are offline. Complaint saved locally.');
  }
}

// Send one complaint to backend API
function sendToServer(complaint) {
  return fetch('http://localhost:3000/complaints', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(complaint),
  }).then(res => {
    if (!res.ok) throw new Error('Network response was not ok');
    return res.json();
  });
}

// Sync all local complaints to backend
async function syncComplaints() {
  if (!navigator.onLine) return;

  const localComplaints = await getAllComplaintsFromDB();

  for (const complaint of localComplaints) {
    try {
      await sendToServer(complaint);
    } catch (e) {
      console.error('Failed to sync complaint:', complaint, e);
      return;  // stop syncing on error
    }
  }

  // If all synced successfully, clear local DB
  await clearComplaintsFromDB();
  console.log('All local complaints synced with backend.');
}

// Listen for online event to sync automatically
window.addEventListener('online', () => {
  console.log('Back online, syncing complaints...');
  syncComplaints();
});
