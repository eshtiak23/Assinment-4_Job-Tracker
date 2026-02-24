let currentTab = "all";

const jobs = Array.from(document.querySelectorAll(".job")).map((card, i) => ({
  id: i,
  el: card,
  status: "all"
}));

const tabButtons = document.querySelectorAll(".tabBtn");
const emptyState = document.getElementById("emptyState");

function showTab(tab) {
  currentTab = tab;

  // Tab Button color Change
  tabButtons.forEach(btn => {
    btn.classList.remove("bg-blue-600", "bg-green-600", "bg-red-600", "text-white");
    btn.classList.add("bg-gray-200", "text-gray-700");
  });

  const activeBtn = Array.from(tabButtons).find(btn => btn.textContent.toLowerCase() === tab);
  if (activeBtn) {
    if (tab === "all") activeBtn.classList.add("bg-blue-600", "text-white");
    if (tab === "interview") activeBtn.classList.add("bg-green-600", "text-white");
    if (tab === "rejected") activeBtn.classList.add("bg-red-600", "text-white");
    activeBtn.classList.remove("bg-gray-200", "text-gray-700");
  }

  updateView();
}

function setStatus(button, status) {
  const card = button.closest(".job");
  const job = jobs.find(j => j.el === card);
  if (!job) return;

  job.status = status;

  const badge = card.querySelector(".status");

  if (status === "interview") {
    badge.textContent = "INTERVIEW";
    badge.className = "status text-xs bg-green-100 text-green-700 inline-block px-2 py-1 mt-2";
  } else if (status === "rejected") {
    badge.textContent = "REJECTED";
    badge.className = "status text-xs bg-red-100 text-red-700 inline-block px-2 py-1 mt-2";
  }

  updateView();
}

function deleteJob(button) {
  const card = button.closest(".job");
  const index = jobs.findIndex(j => j.el === card);
  if (index > -1) {
    jobs.splice(index, 1);
  }
  card.remove();
  updateView();
}

function updateView() {
  let interview = 0;
  let rejected = 0;
  let visible = 0;

  jobs.forEach(job => {
    if (job.status === "interview") interview++;
    if (job.status === "rejected") rejected++;

    if (currentTab === "all" || job.status === currentTab) {
      job.el.style.display = "block";
      visible++;
    } else {
      job.el.style.display = "none";
    }
  });

  document.getElementById("totalCount").textContent = jobs.length;
  document.getElementById("interviewCount").textContent = interview;
  document.getElementById("rejectedCount").textContent = rejected;
  document.getElementById("tabCount").textContent = visible + " jobs";

  // Noting Selected Section
  if (visible === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
  }
}


showTab("all");