const API_BASE = 'http://localhost:3001/api';

export async function fetchDeals() {
  const res = await fetch(`${API_BASE}/deals`);
  if (!res.ok) throw new Error('Failed to fetch deals');
  return res.json();
}

export async function fetchInvestments() {
  const res = await fetch(`${API_BASE}/investments`);
  if (!res.ok) throw new Error('Failed to fetch investments');
  return res.json();
}

export async function fetchAssets() {
  const res = await fetch(`${API_BASE}/assets`);
  if (!res.ok) throw new Error('Failed to fetch assets');
  return res.json();
}

export async function fetchEntities() {
  const res = await fetch(`${API_BASE}/entities`);
  if (!res.ok) throw new Error('Failed to fetch entities');
  return res.json();
}

export async function fetchIdentities() {
  const res = await fetch(`${API_BASE}/identities`);
  if (!res.ok) throw new Error('Failed to fetch identities');
  return res.json();
}

export async function fetchNews() {
  const res = await fetch(`${API_BASE}/news`);
  if (!res.ok) throw new Error('Failed to fetch news');
  return res.json();
}

export async function fetchFiles() {
  const res = await fetch(`${API_BASE}/files`);
  if (!res.ok) throw new Error('Failed to fetch files');
  return res.json();
}

export async function fetchNotifications() {
  const res = await fetch(`${API_BASE}/notifications`);
  if (!res.ok) throw new Error('Failed to fetch notifications');
  return res.json();
}

export async function fetchLedgerEntries() {
  const res = await fetch(`${API_BASE}/ledger`);
  if (!res.ok) throw new Error('Failed to fetch ledger entries');
  return res.json();
}

export async function fetchFees() {
  const res = await fetch(`${API_BASE}/fees`);
  if (!res.ok) throw new Error('Failed to fetch fees');
  return res.json();
}
