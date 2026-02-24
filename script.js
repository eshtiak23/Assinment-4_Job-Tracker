let currentTab = "all";

function showTab(tabName) {
  currentTab = tabName;

  // Button color 
  let allBtn = document.querySelectorAll(".tabBtn")[0];
  let interviewBtn = document.querySelectorAll(".tabBtn")[1];
  let rejectedBtn = document.querySelectorAll(".tabBtn")[2];

  allBtn.className = "tabBtn bg-gray-200 px-4 py-1 rounded text-gray-700";
  interviewBtn.className = "tabBtn bg-gray-200 px-4 py-1 rounded text-gray-700";
  rejectedBtn.className = "tabBtn bg-gray-200 px-4 py-1 rounded text-gray-700";

  
  if (tabName == "all") {
    allBtn.className = "tabBtn bg-blue-600 text-white px-4 py-1 rounded";
  }
  if (tabName == "interview") {
    interviewBtn.className = "tabBtn bg-green-600 text-white px-4 py-1 rounded";
  }
  if (tabName == "rejected") {
    rejectedBtn.className = "tabBtn bg-red-600 text-white px-4 py-1 rounded";
  }

  updateView();
}

function setStatus(button, newStatus) {

  let jobCard = button.parentElement.parentElement;
  let statusBadge = jobCard.querySelector(".status");

  if (newStatus == "interview") {
    jobCard.setAttribute("data-status", "interview");
    statusBadge.textContent = "INTERVIEW";
    statusBadge.className = "status text-xs bg-green-100 text-green-700 inline-block px-2 py-1 mt-2";
  } else if (newStatus == "rejected") {
    jobCard.setAttribute("data-status", "rejected");
    statusBadge.textContent = "REJECTED";
    statusBadge.className = "status text-xs bg-red-100 text-red-700 inline-block px-2 py-1 mt-2";
  }

  updateView();
}

function deleteJob(button) {
  let jobCard = button.parentElement.parentElement;
  jobCard.remove();
  updateView();
}

function updateView() {

  let allJobs = document.querySelectorAll(".job");
  let totalCount = allJobs.length;
  let interviewCount = 0;
  let rejectedCount = 0;
  let visibleCount = 0;

  for (let i = 0; i < allJobs.length; i++) {
    let card = allJobs[i];
    let status = card.getAttribute("data-status");


    if (status == "interview") {
      interviewCount++;
    }
    if (status == "rejected") {
      rejectedCount++;
    }

    
    if (currentTab == "all") {
      card.style.display = "block";
      visibleCount++;
    } else if (currentTab == status) {
      card.style.display = "block";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  }

 
  document.getElementById("totalCount").textContent = totalCount;
  document.getElementById("interviewCount").textContent = interviewCount;
  document.getElementById("rejectedCount").textContent = rejectedCount;
  document.getElementById("tabCount").textContent = visibleCount + " jobs";

  // Nothing Selected Section
  let emptyDiv = document.getElementById("emptyState");
  let emptyTitle = document.getElementById("emptyTitle");
  let emptySub = document.getElementById("emptySub");

  if (visibleCount == 0) {
    emptyDiv.classList.remove("hidden");
    if (currentTab == "interview") {
      emptyTitle.textContent = "No Interview Jobs Available";
      emptySub.textContent = "Keep working hard and don't give up hope!😊";
    } else if (currentTab == "rejected") {
      emptyTitle.textContent = "No Rejected Jobs Available";
      emptySub.textContent = "You haven't been rejected yet. Keep it up!👍";
    } else {
      emptyTitle.textContent = "No Jobs Available";
      emptySub.textContent = "Your job list is currently empty.";
    }
  } else {
    emptyDiv.classList.add("hidden");
  }
}

updateView();