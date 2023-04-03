import data from "./data.json" assert { type: "json" };

const list = document.querySelector(".jobSection");
const filterBox = document.querySelector(".filter_box");
const clearButton = document.querySelector(".clear");
const filterContainer = document.querySelector(".filters");

filterContainer.style.display = "none";

let sequence = [];

function updateFilterBox() {
  filterBox.innerHTML = "";
  filterContainer.style.display = "flex";

  sequence.forEach((item) => {
    const filterItem = document.createElement("button");
    filterItem.classList.add("filter_button");
    filterItem.textContent = item;
    filterBox.append(filterItem);
    const deleteIcon = document.createElement("img");
    deleteIcon.classList.add("x_icon");
    deleteIcon.src = "./icons export/Group 26.svg";
    filterItem.append(deleteIcon);
    deleteIcon.addEventListener("click", function () {
      sequence = sequence.filter((val) => val !== item);
      updateFilterBox();
      const filterDatas = filterData();
      displayJobs(filterDatas);

      if (sequence.length === 0) {
        filterContainer.style.display = "none";
      }
    });
  });
}

clearButton.addEventListener("click", () => {
  sequence = [];
  updateFilterBox();
  displayJobs(data);
  filterContainer.style.display = "none";
});

const displayJobs = (parameter) => {
  list.innerHTML = "";

  for (let index = 0; index < parameter.length; index++) {
    const {
      id,
      logo,
      company,
      new: isNew,
      featured,
      position,
      role,
      level,
      postedAt,
      contract,
      location,
      languages,
      tools,
    } = parameter[index];

    const jobSectionBox = document.createElement("div");
    jobSectionBox.classList.add("container");

    const logolement = document.createElement("img");
    logolement.classList.add("icon");
    logolement.src = logo;

    const containerFlex = document.createElement("div");
    containerFlex.classList.add("container_flex");

    const companyInfo = document.createElement("div");
    companyInfo.classList.add("h2_text_box");

    const companyName = document.createElement("span");
    companyName.classList.add("h2_icon");
    companyName.textContent = company;

    const news = document.createElement("span");

    if (isNew) {
      const newLabel = document.createElement("span");
      newLabel.classList.add("h2_new");
      newLabel.textContent = "New!";
      news.append(newLabel);
    }

    const features = document.createElement("span");

    if (featured) {
      const newFeatures = document.createElement("span");
      newFeatures.classList.add("h2_features");
      newFeatures.textContent = "featured";
      features.append(newFeatures);
      jobSectionBox.classList.add("container_featured");
    } else {
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
    infoHours.classList.add("h2_info");
    infoHours.textContent = contract;

    const betweenDot2 = document.createElement("div");
    betweenDot2.classList.add("dot");

    const infolocation = document.createElement("h2");
    infolocation.classList.add("h2_info");
    infolocation.textContent = location;

    const underLine = document.createElement("div");
    underLine.classList.add("line");

    const skillBox = document.createElement("div");
    skillBox.classList.add("skills_box");

    const skillRole = document.createElement("button");
    skillRole.classList.add("skill-style");
    skillRole.textContent = role;
    skillRole.addEventListener("click", () => {
      if (!sequence.includes(role)) {
        sequence.push(role);
        updateFilterBox();
        const filterDatas = filterData();
        displayJobs(filterDatas);
      }
    });

    const skillLevel = document.createElement("button");
    skillLevel.classList.add("skill-style");
    skillLevel.textContent = level;
    skillLevel.addEventListener("click", () => {
      if (!sequence.includes(level)) {
        sequence.push(level);
        updateFilterBox();
        const filterDatas = filterData();
        displayJobs(filterDatas);
      }
    });

    const skillLanguages = document.createElement("div");
    skillLanguages.classList.add("language_box");

    languages.map((language) => {
      const languageElement = document.createElement("button");
      languageElement.classList.add("skill-style");
      languageElement.textContent = language;
      skillLanguages.append(languageElement);
      languageElement.addEventListener("click", () => {
        if (!sequence.includes(language)) {
          sequence.push(language);
          updateFilterBox();
          const filterDatas = filterData();
          displayJobs(filterDatas);
        }
      });
    });

    const skillTools = document.createElement("div");
    skillTools.classList.add("language_box");

    tools.map((tool) => {
      const toolElement = document.createElement("button");
      toolElement.classList.add("skill-style");
      toolElement.textContent = tool;
      skillTools.append(toolElement);
      toolElement.addEventListener("click", () => {
        if (!sequence.includes(tool)) {
          sequence.push(tool);
          updateFilterBox();
          const filterDatas = filterData();
          displayJobs(filterDatas);
        }
      });
    });

    list.append(jobSectionBox);
    jobSectionBox.append(logolement, containerFlex, underLine, skillBox);
    containerFlex.append(companyInfo, positionJob, informationBox);
    companyInfo.append(companyName, news, features);
    informationBox.append(
      infoDate,
      betweenDot1,
      infoHours,
      betweenDot2,
      infolocation
    );
    skillBox.append(skillRole, skillLevel, skillLanguages, skillTools);
  }
};

displayJobs(data);

function filterData() {
  const filterArray = data.filter((item) => {
    const values = [item.role, item.level, ...item.languages, ...item.tools];
    return sequence.every((val) => values.includes(val));
  });
  return filterArray;
}

filterBox.addEventListener("click", (e) => {
  if (e.target.classList.contains("filter_button")) {
    const filterText = e.target.textContent;
    if (sequence.includes(filterText)) {
      sequence = sequence.filter((val) => val !== filterText);
    } else {
      sequence.push(filterText);
    }
    updateFilterBox();
  }
});
