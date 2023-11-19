let userform=document.getElementById("user-form");
let dobinput = document.getElementById("dob");
const retrieveEntries=()=>{
    let entries=localStorage.getItem("user-entries");
    if(entries){
        entries=JSON.parse(entries);
    }
    else{
        entries=[];
    }
    return entries;
}


let userEntries=retrieveEntries();

const displayEntries=()=>{
    const entries=retrieveEntries();
    const tableEntries =entries.map((entry)=> {
        const nameCell=`<td class='border px-4 py-2'>${entry.name}</td>`;
        const emailCell=`<td class='border px-4 py-2'>${entry.email}</td>`;
        const passwordCell=`<td class='border px-4 py-2'>${entry.password}</td>`;
        const dobCell=`<td class='border px-4 py-2'>${entry.dob}</td>`;
        const acceptCell=`<td class='border px-4 py-2'>${entry.acceptedTermsandConditions}</td>`;

        const row =`<tr>${nameCell} ${emailCell} ${passwordCell} ${dobCell} ${acceptCell}</tr>`;
        return row;
    }).join("\n");

    const table=`<table class="table=auto w-full"><tr>
    <th class="px-4 py-2">Name</th>
    <th class="px-4 py-2">Email</th>
    <th class="px-4 py-2">Password</th>
    <th class="px-4 py-2">dob</th>
    <th class="px-4 py-2">accepted terms?</th>
</tr>${tableEntries}</table>`;

let details= document.getElementById("user-entries");
details.innerHTML=table;
}
const saveUserForm= (event)=>{
    event.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const dob=document.getElementById("dob").value;
    
    const acceptedTermsandConditions=document.getElementById("accept").checked;
    
    const entry={
        name,
        email,
        password,
        dob,
        acceptedTermsandConditions
    };
    userEntries.push(entry);

    console.log(entry)
    localStorage.setItem("user-entries",JSON.stringify(userEntries));
    displayEntries();

}
userform.addEventListener("submit",saveUserForm);
displayEntries();

dob.addEventListener('input',function validateAge(event) {
    const dob = new Date(event.target.value)
    // Calculate the current date
    const today = new Date();
    console.log(dob);
    
    // Calculate the age in years
    const ageInYears = today.getFullYear() - dob.getFullYear();
    // Check if the age is between 18 and 55
    if (ageInYears < 18 || ageInYears > 55) {
      dobinput.setCustomValidity("Your age should be between 18 to 55.");
    }else{
        dobinput.setCustomValidity("");
    }
  })

