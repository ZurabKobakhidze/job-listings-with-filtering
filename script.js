import data from "./data.json" assert { type: "json" };

const list = document.querySelector(".jobSection");



for (let index = 0; index < data.length ; index++ ){
    
    const { id, logo, company, new: isNew, featured, position, role, level, postedAt, contract, location, languages, tools} = data[index];
    
    const jobSectionBox = document.createElement("div");
    jobSectionBox.classList.add("container");

    const logolement = document.createElement("img");
    logolement.classList.add("icon");
    logolement.src = logo;

    const companyInfo = document.createElement("div");
    companyInfo.classList.add("h2_text_box");

    const companyName = document.createElement("span");
    companyName.classList.add("h2_icon");
    companyName.textContent = company;

    const positionJob = document.createElement("h1");
    positionJob.classList.add("h1_headline");
    positionJob.textContent = position;

    const informationBox = document.createElement("div");
    informationBox.classList.add("h2_information_box");

    const infoDate = document.createElement("h2");
    infoDate.classList.add("h2_info");
    infoDate.textContent = postedAt;

    const betweenDot1 = document.createElement("div");
    betweenDot1.classList.add("dot");

    const infoHours = document.createElement("h2");
    infoHours.classList.add("h2_info")
    infoHours.textContent = contract;

    const betweenDot2 = document.createElement("div");
    betweenDot2.classList.add("dot");

    const infolocation = document.createElement("h2");
    infolocation.classList.add("h2_info")
    infolocation.textContent = location;

    const underLine = document.createElement("div");
    underLine.classList.add("line");

    const skillBox = document.createElement("div");
    skillBox.classList.add("skills_box");

    const skillRole = document.createElement("h2");
    skillRole.classList.add("skill-style");
    skillRole.textContent = role;

    const skillLevel = document.createElement("h2");
    skillLevel.classList.add("skill-style");
    skillLevel.textContent = level;

    const skillLanguages = document.createElement("h2");
    skillLanguages.classList.add("skill-style");
    // skillLanguages.textContent = languages;
    

    
    list.append(jobSectionBox);
    jobSectionBox.append(logolement, companyInfo,positionJob,informationBox,underLine,skillBox);
    companyInfo.append(companyName);
    informationBox.append(infoDate,betweenDot1,infoHours,betweenDot2,infolocation);
    skillBox.append(skillRole, skillLevel,skillLanguages);
    
    
    

}

