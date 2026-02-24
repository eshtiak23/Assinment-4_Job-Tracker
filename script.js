let currentTab="all";

const jobs = Array.from(document.querySelectorAll(".job")).map((card,i)=>({
  id:i,
  el:card,
  status:"all"
}));

function showTab(tab){
  currentTab=tab;
  updateView();
}

function setStatus(button,status){

  const card=button.closest(".job");
  const job=jobs.find(j=>j.el===card);
  if(!job) return;

  job.status=status;

  const badge=card.querySelector(".status");

  if(status==="interview"){
    badge.textContent="INTERVIEW";
    badge.className="status text-xs bg-green-100 text-green-700 inline-block px-2 py-1 mt-2";
  }else{
    badge.textContent="REJECTED";
    badge.className="status text-xs bg-red-100 text-red-700 inline-block px-2 py-1 mt-2";
  }

  updateView();
}

function deleteJob(button){

  const card=button.closest(".job");

  const index=jobs.findIndex(j=>j.el===card);
  if(index>-1){
    jobs.splice(index,1);   // remove from array
  }

  card.remove();            // remove from screen

  updateView();
}

function updateView(){

  let interview=0;
  let rejected=0;
  let visible=0;

  jobs.forEach(job=>{

    if(job.status==="interview") interview++;
    if(job.status==="rejected") rejected++;

    if(currentTab==="all" || job.status===currentTab){
      job.el.style.display="block";
      visible++;
    }else{
      job.el.style.display="none" ;
    }

  });

  document.getElementById("interviewCount").textContent=interview;
  document.getElementById("rejectedCount").textContent=rejected;
  document.getElementById("tabCount").textContent=visible+" jobs";

}

updateView();