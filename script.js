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

    const news = document.createElement("span");

    if (isNew){
        const newLabel = document.createElement("span");
        newLabel.classList.add("h2_new");
        newLabel.textContent = "New!";
        news.append(newLabel);
    }

    const features = document.createElement("span");

    if (featured){
        const newFeatures = document.createElement("span");
        newFeatures.classList.add("h2_features");
        newFeatures.textContent = "featured";
        features.append(newFeatures);
        jobSectionBox.classList.add("container_featured");
    }

     else {
      jobSectionBox.classList.add("container");
    }

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

    const skillLanguages = document.createElement("div");
    skillLanguages.classList.add("language_box");

    languages.map(language => {
        const languageElement = document.createElement("h2");
        languageElement.classList.add("skill-style");
        languageElement.textContent = language;
        skillLanguages.append(languageElement);
    });
    
    const skillTools = document.createElement("h2");
    skillTools.classList.add("language_box")

    tools.map(tool =>{
        const toolElement = document.createElement("h2");
        toolElement.classList.add("skill-style");
        toolElement.textContent = tool;
        skillTools.append(toolElement);
    });

    list.append(jobSectionBox);
    jobSectionBox.append(logolement, companyInfo,positionJob,informationBox,underLine,skillBox);
    companyInfo.append(companyName,news,features);
    informationBox.append(infoDate,betweenDot1,infoHours,betweenDot2,infolocation);
    skillBox.append(skillRole, skillLevel,skillLanguages,skillTools);
    
}

