// sync.js

function syncComplaints() {
  console.log('Attempting to sync complaints...');

  const tx = db.transaction(['complaints'], 'readwrite');
  const store = tx.objectStore('complaints');
  const request = store.getAll();

  request.onsuccess = function (e) {
    const complaints = e.target.result;

    complaints.forEach((c) => {
      if (!c.synced) {
        // Simulate server upload
        sendToServer(c.title, c.description).then(() => {
          // Mark as synced
          c.synced = true;
          const updateTx = db.transaction(['complaints'], 'readwrite');
          const updateStore = updateTx.objectStore('complaints');
          updateStore.put(c);
          console.log(`Complaint "${c.title}" synced.`);
        }).catch((err) => {
          console.error('Sync failed:', err);
        });
      }
    });
  };
}
