import data from "./data.json" assert { type: "json" };

const list = document.querySelector(".job_section");

for (let index = 0; index < data.length ; index++ ){
    
    const { id, company, logo, position, role, level, postedAt, contract, location, languages, tools,} = data[index];
    console.log(data[index]);
}