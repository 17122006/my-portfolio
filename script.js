
/* =========================================================
   PERSONAL INFORMATION
   ONLY EDIT THIS SECTION
========================================================= */

const portfolioData = {

  name: "thrishna",

  title:
    "B.E. Computer Science Engineering Student | Developer",

  email:
    "your@email.com",

  github:
    "YOUR_GITHUB_USERNAME",

  linkedin:
    "https://www.linkedin.com/in/YOUR_USERNAME/",

  bio:
    "I am a Computer Science Engineering student passionate about technology, software development and building practical digital solutions.",

  about:
    "I am a Computer Science Engineering student who enjoys learning how technology works and using that knowledge to build practical digital experiences. I am especially interested in web development, software development and AI/ML."

};


/* =========================================================
   STARTER SKILLS
========================================================= */

const starterSkills = [

  {
    id: "html",
    name: "HTML",
    category: "Web Development",
    level: "",
    icon: "<>"
  },

  {
    id: "css",
    name: "CSS",
    category: "Web Development",
    level: "",
    icon: "{}"
  },

  {
    id: "javascript",
    name: "JavaScript",
    category: "Web Development",
    level: "",
    icon: "JS"
  },

  {
    id: "python",
    name: "Python",
    category: "Programming Languages",
    level: "",
    icon: "Py"
  },

  {
    id: "c",
    name: "C",
    category: "Programming Languages",
    level: "",
    icon: "C"
  },

  {
    id: "java",
    name: "Java",
    category: "Programming Languages",
    level: "",
    icon: "J"
  },

  {
    id: "sql",
    name: "SQL",
    category: "Database",
    level: "",
    icon: "DB"
  },

  {
    id: "git",
    name: "Git",
    category: "Tools",
    level: "",
    icon: "Git"
  },

  {
    id: "github",
    name: "GitHub",
    category: "Tools",
    level: "",
    icon: "GH"
  },

  {
    id: "aiml",
    name: "AI / ML",
    category: "AI / Machine Learning",
    level: "",
    icon: "AI"
  }

];


/* =========================================================
   UTILITIES
========================================================= */

const $ = (selector, parent = document) =>
  parent.querySelector(selector);

const $$ = (selector, parent = document) =>
  [...parent.querySelectorAll(selector)];


/* =========================================================
   APP STATE
========================================================= */

let skills = loadSkills();

let currentSkillCategory = "All";


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  initializeApp
);


async function initializeApp() {

  initializePersonalData();

  initializeLoader();

  initializeNavigation();

  initializeScrollAnimations();

  initializeSkills();

  await initializeCertificates();

  await initializeGithub();

  initializeContact();

  initializeModals();

  initializeProjectButtons();

}


/* =========================================================
   PERSONAL DATA
========================================================= */

function initializePersonalData() {

  document.title =
    `${portfolioData.name} | Developer Portfolio`;


  const heroBio = $("#heroBio");

  if (heroBio) {
    heroBio.textContent =
      portfolioData.bio;
  }


  const aboutBio = $("#aboutBio");

  if (aboutBio) {
    aboutBio.textContent =
      portfolioData.about;
  }


  const linkedinName =
    $("#linkedinName");

  if (linkedinName) {
    linkedinName.textContent =
      portfolioData.name;
  }


  const linkedinHeadline =
    $("#linkedinHeadline");

  if (linkedinHeadline) {
    linkedinHeadline.textContent =
      portfolioData.title;
  }


  const emailLink =
    $("#emailLink");

  if (emailLink) {

    emailLink.textContent =
      `${portfolioData.email} ↗`;

    emailLink.href =
      `mailto:${portfolioData.email}`;

  }


  const githubReady =
    portfolioData.github &&
    !portfolioData.github.includes("YOUR_");


  const linkedinReady =
    portfolioData.linkedin &&
    !portfolioData.linkedin.includes("YOUR_");


  const githubUrl =
    githubReady
      ? `https://github.com/${portfolioData.github}`
      : "#";


  [
    "#heroGithub",
    "#contactGithub",
    "#githubProfileLink"
  ].forEach(selector => {

    const element = $(selector);

    if (!element) {
      return;
    }

    element.href =
      githubUrl;

  });


  [
    "#heroLinkedin",
    "#contactLinkedin",
    "#linkedinButton"
  ].forEach(selector => {

    const element = $(selector);

    if (!element) {
      return;
    }

    element.href =
      linkedinReady
        ? safeUrl(portfolioData.linkedin)
        : "#";

  });


  if (!linkedinReady) {

    const linkedinButton =
      $("#linkedinButton");

    if (linkedinButton) {

      linkedinButton.addEventListener(
        "click",
        event => {

          event.preventDefault();

          showToast(
            "Add your LinkedIn URL in script.js."
          );

        }
      );

    }

  }

}


/* =========================================================
   PROFILE IMAGE
========================================================= */

function initializeProfileImage() {

  const image =
    $("#profileImage");

  if (!image) {
    return;
  }

  image.addEventListener(
    "error",
    handleProfileError
  );

}


function handleProfileError() {

  const image =
    $("#profileImage");

  const fallback =
    $("#profileFallback");


  if (image) {
    image.style.display = "none";
  }


  if (fallback) {
    fallback.style.display = "grid";
  }

}


/* =========================================================
   LOADER
========================================================= */

function initializeLoader() {

  initializeProfileImage();


  window.addEventListener(
    "load",
    () => {

      setTimeout(
        () => {

          const loader =
            $("#loader");

          if (loader) {
            loader.classList.add("hide");
          }

        },
        450
      );

    },
    {
      once: true
    }
  );

}


/* =========================================================
   NAVIGATION
========================================================= */

function initializeNavigation() {

  const header =
    $("#header");

  const menuButton =
    $("#menuButton");

  const navLinks =
    $("#navLinks");


  if (!header || !menuButton || !navLinks) {
    return;
  }


  window.addEventListener(
    "scroll",
    () => {

      header.classList.toggle(
        "scrolled",
        window.scrollY > 15
      );

    },
    {
      passive: true
    }
  );


  menuButton.addEventListener(
    "click",
    () => {

      const isOpen =
        navLinks.classList.toggle(
          "open"
        );


      menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
      );


      menuButton.setAttribute(
        "aria-label",
        isOpen
          ? "Close navigation"
          : "Open navigation"
      );

    }
  );


  $$(".nav-link").forEach(
    link => {

      link.addEventListener(
        "click",
        () => {

          navLinks.classList.remove(
            "open"
          );

          menuButton.setAttribute(
            "aria-expanded",
            "false"
          );

          menuButton.setAttribute(
            "aria-label",
            "Open navigation"
          );

        }
      );

    }
  );


  const sections =
    $$("main section[id]");


  const navigationLinks =
    $$(".nav-link");


  if (!sections.length) {
    return;
  }


  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(
          entry => {

            if (!entry.isIntersecting) {
              return;
            }


            navigationLinks.forEach(
              link => {

                link.classList.toggle(
                  "active",

                  link.getAttribute("href") ===
                  `#${entry.target.id}`
                );

              }
            );

          }
        );

      },
      {
        rootMargin:
          "-35% 0px -55% 0px"
      }
    );


  sections.forEach(
    section =>
      observer.observe(section)
  );

}


/* =========================================================
   SCROLL ANIMATIONS
========================================================= */

function initializeScrollAnimations() {

  const elements =
    $$(".reveal");


  if (!elements.length) {
    return;
  }


  if (
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
  ) {

    elements.forEach(
      element =>
        element.classList.add("visible")
    );

    return;

  }


  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(
          entry => {

            if (!entry.isIntersecting) {
              return;
            }


            entry.target.classList.add(
              "visible"
            );


            observer.unobserve(
              entry.target
            );

          }
        );

      },
      {
        threshold: 0.08
      }
    );


  elements.forEach(
    element =>
      observer.observe(element)
  );

}


/* =========================================================
   SKILLS
========================================================= */

function loadSkills() {

  try {

    const saved =
      localStorage.getItem(
        "portfolioSkills"
      );


    if (!saved) {
      return [...starterSkills];
    }


    const parsed =
      JSON.parse(saved);


    if (!Array.isArray(parsed)) {
      return [...starterSkills];
    }


    return parsed;

  } catch (error) {

    console.error(
      "Could not load skills:",
      error
    );

    return [...starterSkills];

  }

}


function initializeSkills() {

  renderSkills();


  const addButton =
    $("#addSkillButton");

  if (addButton) {

    addButton.addEventListener(
      "click",
      () => openSkillModal()
    );

  }


  $$("#skillFilters .filter")
    .forEach(
      filter => {

        filter.addEventListener(
          "click",
          () => {

            $$("#skillFilters .filter")
              .forEach(
                button =>
                  button.classList.remove(
                    "active"
                  )
              );


            filter.classList.add(
              "active"
            );


            currentSkillCategory =
              filter.dataset.category;


            renderSkills();

          }
        );

      }
    );


  const form =
    $("#skillForm");

  if (form) {

    form.addEventListener(
      "submit",
      saveSkill
    );

  }

}


function renderSkills() {

  const grid =
    $("#skillsGrid");


  if (!grid) {
    return;
  }


  const visibleSkills =
    skills.filter(
      skill =>
        currentSkillCategory === "All" ||
        skill.category ===
        currentSkillCategory
    );


  if (!visibleSkills.length) {

    grid.innerHTML = `
      <div class="empty-state">

        <div class="empty-state-icon">
          ✦
        </div>

        <h3>
          No skills in this category
        </h3>

        <p>
          Add a skill using the button above.
        </p>

      </div>
    `;

    return;

  }


  grid.innerHTML =
    visibleSkills
      .map(
        skill => `

          <article
            class="skill-card"
            tabindex="0"
          >

            <div class="skill-actions">

              <button
                class="icon-button"
                type="button"
                title="Edit ${escapeHtml(skill.name)}"
                aria-label="Edit ${escapeHtml(skill.name)}"
                data-edit-skill="${escapeHtml(skill.id)}"
              >
                ✎
              </button>

              <button
                class="icon-button"
                type="button"
                title="Delete ${escapeHtml(skill.name)}"
                aria-label="Delete ${escapeHtml(skill.name)}"
                data-delete-skill="${escapeHtml(skill.id)}"
              >
                ×
              </button>

            </div>

            <div class="skill-icon">
              ${escapeHtml(skill.icon || "•")}
            </div>

            <h3>
              ${escapeHtml(skill.name)}
            </h3>

            <p>
              ${escapeHtml(skill.category)}
              ${
                skill.level
                  ? ` • ${escapeHtml(skill.level)}`
                  : ""
              }
            </p>

          </article>

        `
      )
      .join("");


  $$("[data-edit-skill]")
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () =>
            openSkillModal(
              button.dataset.editSkill
            )
        );

      }
    );


  $$("[data-delete-skill]")
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () =>
            deleteSkill(
              button.dataset.deleteSkill
            )
        );

      }
    );

}


function openSkillModal(id = "") {

  const skill =
    skills.find(
      item =>
        item.id === id
    );


  const skillId =
    $("#skillId");

  const title =
    $("#skillModalTitle");

  const name =
    $("#skillName");

  const category =
    $("#skillCategory");

  const level =
    $("#skillLevel");

  const icon =
    $("#skillIcon");

  const modal =
    $("#skillModal");


  if (
    !skillId ||
    !title ||
    !name ||
    !category ||
    !level ||
    !icon ||
    !modal
  ) {
    return;
  }


  skillId.value =
    skill?.id || "";

  title.textContent =
    skill
      ? "Edit skill"
      : "Add a skill";

  name.value =
    skill?.name || "";

  category.value =
    skill?.category ||
    "Programming Languages";

  level.value =
    skill?.level || "";

  icon.value =
    skill?.icon || "";


  if (typeof modal.showModal === "function") {
    modal.showModal();
  } else {
    modal.setAttribute("open", "");
  }


  setTimeout(
    () => name.focus(),
    50
  );

}


function saveSkill(event) {

  event.preventDefault();


  const name =
    $("#skillName")
      ?.value
      .trim();


  if (!name) {

    showToast(
      "Please enter a skill name."
    );

    return;

  }


  const id =
    $("#skillId")
      ?.value ||
    createId();


  const skill = {

    id,

    name,

    category:
      $("#skillCategory")
        ?.value ||
      "Other",

    level:
      $("#skillLevel")
        ?.value
        .trim() ||
      "",

    icon:
      $("#skillIcon")
        ?.value
        .trim() ||
      "•"

  };


  const existingIndex =
    skills.findIndex(
      item =>
        item.id === id
    );


  if (existingIndex >= 0) {

    skills[existingIndex] =
      skill;

  } else {

    skills.push(skill);

  }


  saveSkills();

  closeModal("skillModal");

  renderSkills();


  showToast(
    existingIndex >= 0
      ? "Skill updated successfully."
      : "Skill added successfully."
  );

}


function deleteSkill(id) {

  const skill =
    skills.find(
      item =>
        item.id === id
    );


  if (!skill) {
    return;
  }


  const confirmed =
    window.confirm(
      `Delete "${skill.name}"?`
    );


  if (!confirmed) {
    return;
  }


  skills =
    skills.filter(
      item =>
        item.id !== id
    );


  saveSkills();

  renderSkills();

  showToast(
    "Skill deleted."
  );

}


function saveSkills() {

  try {

    localStorage.setItem(
      "portfolioSkills",
      JSON.stringify(skills)
    );

  } catch (error) {

    console.error(
      "Could not save skills:",
      error
    );

    showToast(
      "Could not save skills in this browser."
    );

  }

}


/* =========================================================
   CERTIFICATES
   INDEXEDDB
========================================================= */

const DATABASE_NAME =
  "PremiumPortfolioDatabase";

const DATABASE_VERSION = 1;

const CERTIFICATE_STORE =
  "certificates";

let databasePromise = null;


/* Open database */

function openDatabase() {

  if (databasePromise) {
    return databasePromise;
  }


  databasePromise =
    new Promise(
      (resolve, reject) => {

        if (!("indexedDB" in window)) {

          reject(
            new Error(
              "IndexedDB is not supported."
            )
          );

          return;

        }


        const request =
          indexedDB.open(
            DATABASE_NAME,
            DATABASE_VERSION
          );


        request.onupgradeneeded =
          event => {

            const database =
              event.target.result;


            if (
              !database.objectStoreNames.contains(
                CERTIFICATE_STORE
              )
            ) {

              database.createObjectStore(
                CERTIFICATE_STORE,
                {
                  keyPath: "id"
                }
              );

            }

          };


        request.onsuccess =
          () =>
            resolve(
              request.result
            );


        request.onerror =
          () =>
            reject(
              request.error ||
              new Error(
                "Could not open database."
              )
            );

      }
    );


  return databasePromise;

}


/* Get certificates */

async function getCertificates() {

  const database =
    await openDatabase();


  return new Promise(
    (resolve, reject) => {

      const transaction =
        database.transaction(
          CERTIFICATE_STORE,
          "readonly"
        );


      const request =
        transaction
          .objectStore(
            CERTIFICATE_STORE
          )
          .getAll();


      request.onsuccess =
        () =>
          resolve(
            request.result || []
          );


      request.onerror =
        () =>
          reject(
            request.error
          );

    }
  );

}


/* Save certificate */

async function saveCertificate(
  certificate
) {

  const database =
    await openDatabase();


  return new Promise(
    (resolve, reject) => {

      const transaction =
        database.transaction(
          CERTIFICATE_STORE,
          "readwrite"
        );


      const request =
        transaction
          .objectStore(
            CERTIFICATE_STORE
          )
          .put(certificate);


      request.onsuccess =
        () =>
          resolve();


      request.onerror =
        () =>
          reject(
            request.error
          );

    }
  );

}


/* Delete certificate */

async function deleteCertificate(
  id
) {

  const database =
    await openDatabase();


  return new Promise(
    (resolve, reject) => {

      const transaction =
        database.transaction(
          CERTIFICATE_STORE,
          "readwrite"
        );


      const request =
        transaction
          .objectStore(
            CERTIFICATE_STORE
          )
          .delete(id);


      request.onsuccess =
        () =>
          resolve();


      request.onerror =
        () =>
          reject(
            request.error
          );

    }
  );

}


/* Initialize certificates */

async function initializeCertificates() {

  const addButton =
    $("#addCertificateButton");

  const form =
    $("#certificateForm");


  if (addButton) {

    addButton.addEventListener(
      "click",
      () => {

        const modal =
          $("#certificateModal");

        if (!modal) {
          return;
        }

        if (
          typeof modal.showModal ===
          "function"
        ) {

          modal.showModal();

        } else {

          modal.setAttribute(
            "open",
            ""
          );

        }

      }
    );

  }


  if (form) {

    form.addEventListener(
      "submit",
      addCertificate
    );

  }


  await renderCertificates();

}


/* Render certificates */

async function renderCertificates() {

  const grid =
    $("#certificateGrid");


  if (!grid) {
    return;
  }


  try {

    const certificates =
      await getCertificates();


    if (!certificates.length) {

      grid.innerHTML = `
        <div class="empty-state">

          <div class="empty-state-icon">
            ✦
          </div>

          <h3>
            No certificates added yet
          </h3>

          <p>
            Add your certificates using
            the button above.
          </p>

        </div>
      `;

      return;

    }


    certificates.sort(
      (a, b) =>
        (b.date || "")
          .localeCompare(
            a.date || ""
          )
    );


    grid.innerHTML =
      certificates
        .map(
          certificate =>
            createCertificateCard(
              certificate
            )
        )
        .join("");


    $$("[data-preview-certificate]")
      .forEach(
        element => {

          element.addEventListener(
            "click",
            () =>
              previewCertificate(
                element.dataset
                  .previewCertificate
              )
          );


          element.addEventListener(
            "keydown",
            event => {

              if (
                event.key === "Enter" ||
                event.key === " "
              ) {

                event.preventDefault();

                previewCertificate(
                  element.dataset
                    .previewCertificate
                );

              }

            }
          );

        }
      );


    $$("[data-delete-certificate]")
      .forEach(
        button => {

          button.addEventListener(
            "click",
            async event => {

              event.stopPropagation();


              const id =
                button.dataset
                  .deleteCertificate;


              const confirmed =
                window.confirm(
                  "Delete this certificate?"
                );


              if (!confirmed) {
                return;
              }


              try {

                await deleteCertificate(id);

                await renderCertificates();

                showToast(
                  "Certificate deleted."
                );

              } catch (error) {

                console.error(error);

                showToast(
                  "Could not delete certificate."
                );

              }

            }
          );

        }
      );


  } catch (error) {

    console.error(
      "Certificate storage error:",
      error
    );


    grid.innerHTML = `
      <div class="empty-state">

        <div class="empty-state-icon">
          !
        </div>

        <h3>
          Certificate storage unavailable
        </h3>

        <p>
          Your browser may have disabled IndexedDB.
        </p>

      </div>
    `;

  }

}


/* Create certificate card */

function createCertificateCard(
  certificate
) {

  const type =
    certificate.type || "";


  const isImage =
    type.startsWith("image/");


  const preview =
    isImage

      ? `
        <img
          src="${escapeAttribute(
            certificate.data
          )}"
          alt="${escapeHtml(
            certificate.name
          )} certificate"
          loading="lazy"
        >
      `

      : `
        <div class="pdf-preview">
          PDF
        </div>
      `;


  return `
    <article class="certificate-card">

      <div
        class="certificate-preview"
        data-preview-certificate="${escapeAttribute(
          certificate.id
        )}"
        tabindex="0"
        role="button"
        aria-label="Preview ${escapeHtml(
          certificate.name
        )}"
      >

        ${preview}

      </div>


      <div class="certificate-info">

        <h3>
          ${escapeHtml(
            certificate.name
          )}
        </h3>

        <p>
          ${escapeHtml(
            certificate.organization
          )}
        </p>


        <div class="certificate-bottom">

          <span class="certificate-date">

            ${
              certificate.date
                ? formatDate(
                    certificate.date
                  )
                : "Date not added"
            }

          </span>


          <div class="certificate-actions">

            ${
              certificate.link &&
              safeUrl(
                certificate.link
              ) !== "#"

                ? `
                  <a
                    href="${safeUrl(
                      certificate.link
                    )}"
                    class="icon-button"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open certificate link"
                    aria-label="Open certificate link"
                  >
                    ↗
                  </a>
                `
                : ""
            }


            <button
              type="button"
              class="icon-button"
              data-delete-certificate="${escapeAttribute(
                certificate.id
              )}"
              title="Delete certificate"
              aria-label="Delete certificate"
            >
              ×
            </button>

          </div>

        </div>

      </div>

    </article>
  `;

}


/* Add certificate */

async function addCertificate(event) {

  event.preventDefault();


  const fileInput =
    $("#certificateFile");


  const file =
    fileInput?.files?.[0];


  if (!file) {

    showToast(
      "Please select a certificate."
    );

    return;

  }


  const maximumSize =
    8 * 1024 * 1024;


  if (file.size > maximumSize) {

    showToast(
      "Certificate must be smaller than 8 MB."
    );

    return;

  }


  const validFile =
    file.type.startsWith("image/") ||
    file.type === "application/pdf";


  if (!validFile) {

    showToast(
      "Please select an image or PDF."
    );

    return;

  }


  const name =
    $("#certificateName")
      ?.value
      .trim();


  const organization =
    $("#certificateOrganization")
      ?.value
      .trim();


  if (!name || !organization) {

    showToast(
      "Please fill the required fields."
    );

    return;

  }


  const link =
    $("#certificateLink")
      ?.value
      .trim() ||
    "";


  if (
    link &&
    safeUrl(link) === "#"
  ) {

    showToast(
      "Please enter a valid certificate URL."
    );

    return;

  }


  try {

    const data =
      await fileToDataUrl(file);


    const certificate = {

      id:
        createId(),

      name,

      organization,

      date:
        $("#certificateDate")
          ?.value ||
        "",

      link,

      type:
        file.type,

      data

    };


    await saveCertificate(
      certificate
    );


    event.target.reset();

    closeModal(
      "certificateModal"
    );


    await renderCertificates();


    showToast(
      "Certificate added successfully."
    );


  } catch (error) {

    console.error(
      "Certificate error:",
      error
    );

    showToast(
      "Could not save certificate."
    );

  }

}


/* Preview certificate */

async function previewCertificate(
  id
) {

  try {

    const certificates =
      await getCertificates();


    const certificate =
      certificates.find(
        item =>
          item.id === id
      );


    if (!certificate) {
      return;
    }


    const isImage =
      (certificate.type || "")
        .startsWith("image/");


    const content =
      isImage

        ? `
          <img
            src="${escapeAttribute(
              certificate.data
            )}"
            alt="${escapeHtml(
              certificate.name
            )}"
          >
        `

        : `
          <iframe
            src="${escapeAttribute(
              certificate.data
            )}"
            title="${escapeHtml(
              certificate.name
            )}"
          ></iframe>
        `;


    const previewContent =
      $("#previewContent");


    if (!previewContent) {
      return;
    }


    previewContent.innerHTML = `

      ${content}

      <div class="preview-details">

        <h3 id="previewTitle">
          ${escapeHtml(
            certificate.name
          )}
        </h3>

        <p>

          ${escapeHtml(
            certificate.organization
          )}

          ${
            certificate.date
              ? " • " +
                formatDate(
                  certificate.date
                )
              : ""
          }

        </p>

      </div>

    `;


    const modal =
      $("#previewModal");


    if (
      modal &&
      typeof modal.showModal ===
      "function"
    ) {

      modal.showModal();

    } else if (modal) {

      modal.setAttribute(
        "open",
        ""
      );

    }

  } catch (error) {

    console.error(error);

    showToast(
      "Could not preview certificate."
    );

  }

}


/* =========================================================
   GITHUB
========================================================= */

async function initializeGithub() {

  const username =
    String(
      portfolioData.github || ""
    ).trim();


  if (
    !username ||
    username.includes("YOUR_")
  ) {

    const status =
      $("#githubStatus");

    if (status) {
      status.textContent =
        "Add your username in script.js";
    }


    const profileLink =
      $("#githubProfileLink");


    if (profileLink) {

      profileLink.addEventListener(
        "click",
        event => {

          event.preventDefault();

          showToast(
            "Add your GitHub username in script.js."
          );

        }
      );

    }


    return;

  }


  const status =
    $("#githubStatus");


  if (status) {
    status.textContent =
      "Loading public data…";
  }


  try {

    const user =
      await fetchJson(
        `https://api.github.com/users/${encodeURIComponent(
          username
        )}`
      );


    const githubName =
      $("#githubName");

    const githubBio =
      $("#githubBio");

    const followers =
      $("#followers");

    const following =
      $("#following");

    const repos =
      $("#repos");


    if (githubName) {
      githubName.textContent =
        user.name ||
        `@${user.login}`;
    }


    if (githubBio) {
      githubBio.textContent =
        user.bio ||
        "No public bio added.";
    }


    if (followers) {
      followers.textContent =
        user.followers ?? 0;
    }


    if (following) {
      following.textContent =
        user.following ?? 0;
    }


    if (repos) {
      repos.textContent =
        user.public_repos ?? 0;
    }


    const avatar =
      $("#githubAvatar");


    if (
      avatar &&
      user.avatar_url
    ) {

      avatar.innerHTML = `
        <img
          src="${safeUrl(
            user.avatar_url
          )}"
          alt="GitHub profile picture"
          loading="lazy"
        >
      `;

    }


    const profileLink =
      $("#githubProfileLink");


    if (profileLink) {

      profileLink.href =
        safeUrl(
          user.html_url
        );

    }


    const repositories =
      await fetchJson(
        `https://api.github.com/users/${encodeURIComponent(
          username
        )}/repos?sort=updated&per_page=6`
      );


    const repoGrid =
      $("#repoGrid");


    if (!repoGrid) {
      return;
    }


    if (!repositories.length) {

      repoGrid.innerHTML = `
        <div class="empty-state">

          <div class="empty-state-icon">
            ◇
          </div>

          <h3>
            No public repositories
          </h3>

          <p>
            Public repositories will appear here.
          </p>

        </div>
      `;

    } else {

      repoGrid.innerHTML =
        repositories
          .map(
            repository => `

              <a
                class="repo-card"
                href="${safeUrl(
                  repository.html_url
                )}"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open ${escapeHtml(
                  repository.name
                )} on GitHub"
              >

                <div class="repo-card-top">

                  <span class="repo-icon">
                    GH
                  </span>

                  <span class="repo-arrow">
                    ↗
                  </span>

                </div>

                <h4>
                  ${escapeHtml(
                    repository.name
                  )}
                </h4>

                <p>
                  ${escapeHtml(
                    repository.description ||
                    "No description added."
                  )}
                </p>

                <div class="repo-meta">

                  <span>
                    ${escapeHtml(
                      repository.language ||
                      "Code"
                    )}
                  </span>

                  <span>
                    ★
                    ${repository.stargazers_count ?? 0}
                  </span>

                  <span>
                    ⑂
                    ${repository.forks_count ?? 0}
                  </span>

                </div>

              </a>

            `
          )
          .join("");

    }


    if (status) {

      status.textContent =
        "Live public GitHub data";

    }


  } catch (error) {

    console.error(
      "GitHub error:",
      error
    );


    if (status) {

      status.textContent =
        "GitHub data unavailable";

    }


    const repoGrid =
      $("#repoGrid");


    if (repoGrid) {

      repoGrid.innerHTML = `
        <div class="empty-state">

          <div class="empty-state-icon">
            ↯
          </div>

          <h3>
            Could not load GitHub
          </h3>

          <p>
            Check your username, internet connection
            or GitHub API availability.
          </p>

        </div>
      `;

    }

  }

}


/* GitHub request */

async function fetchJson(
  url
) {

  const response =
    await fetch(
      url,
      {
        headers: {
          Accept:
            "application/vnd.github+json"
        }
      }
    );


  if (!response.ok) {

    throw new Error(
      `HTTP ${response.status}`
    );

  }


  return response.json();

}


/* =========================================================
   CONTACT
========================================================= */

function initializeContact() {

  const form =
    $("#contactForm");


  if (!form) {
    return;
  }


  form.addEventListener(
    "submit",
    event => {

      event.preventDefault();


      const name =
        $("#contactName")
          ?.value
          .trim();


      const email =
        $("#contactEmail")
          ?.value
          .trim();


      const message =
        $("#contactMessage")
          ?.value
          .trim();


      if (
        !name ||
        !email ||
        !message
      ) {

        showToast(
          "Please complete all fields."
        );

        return;

      }


      const subject =
        encodeURIComponent(
          `Portfolio contact from ${name}`
        );


      const body =
        encodeURIComponent(
          `Name: ${name}\nEmail: ${email}\n\n${message}`
        );


      window.location.href =
        `mailto:${portfolioData.email}` +
        `?subject=${subject}` +
        `&body=${body}`;

    }
  );

}


/* =========================================================
   MODALS
========================================================= */

function initializeModals() {

  $$("[data-close]")
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () =>
            closeModal(
              button.dataset.close
            )
        );

      }
    );


  [
    $("#skillModal"),
    $("#certificateModal"),
    $("#previewModal")
  ]
    .filter(Boolean)
    .forEach(
      dialog => {

        dialog.addEventListener(
          "click",
          event => {

            if (
              event.target === dialog
            ) {

              closeModal(
                dialog.id
              );

            }

          }
        );


        dialog.addEventListener(
          "cancel",
          event => {

            event.preventDefault();

            closeModal(
              dialog.id
            );

          }
        );

      }
    );

}


/* =========================================================
   PROJECT BUTTONS
========================================================= */

function initializeProjectButtons() {

  $$(".project-placeholder")
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            showToast(
              "Add your real GitHub or live project link to this project."
            );

          }
        );

      }
    );

}


/* =========================================================
   HELPERS
========================================================= */

function closeModal(id) {

  const dialog =
    document.getElementById(id);


  if (!dialog) {
    return;
  }


  if (
    typeof dialog.close ===
    "function" &&
    dialog.open
  ) {

    dialog.close();

  } else {

    dialog.removeAttribute(
      "open"
    );

  }

}


/* File reader */

function fileToDataUrl(
  file
) {

  return new Promise(
    (resolve, reject) => {

      const reader =
        new FileReader();


      reader.onload =
        () =>
          resolve(
            reader.result
          );


      reader.onerror =
        () =>
          reject(
            reader.error ||
            new Error(
              "File could not be read."
            )
          );


      reader.readAsDataURL(
        file
      );

    }
  );

}


/* Date */

function formatDate(
  value
) {

  const date =
    new Date(
      `${value}T00:00:00`
    );


  if (
    Number.isNaN(
      date.getTime()
    )
  ) {

    return value;

  }


  return date.toLocaleDateString(
    "en-IN",
    {
      day: "numeric",
      month: "short",
      year: "numeric"
    }
  );

}


/* HTML escaping */

function escapeHtml(
  value = ""
) {

  return String(value)
    .replace(
      /[&<>"']/g,
      character => {

        const entities = {

          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#039;"

        };


        return entities[
          character
        ];

      }
    );

}


/* Attribute escaping */

function escapeAttribute(
  value = ""
) {

  return escapeHtml(
    value
  );

}


/* Safe URL */

function safeUrl(
  value
) {

  try {

    const url =
      new URL(
        value
      );


    if (
      url.protocol === "http:" ||
      url.protocol === "https:"
    ) {

      return url.href;

    }


    return "#";

  } catch {

    return "#";

  }

}


/* Generate ID */

function createId() {

  if (
    typeof crypto !== "undefined" &&
    typeof crypto.randomUUID ===
    "function"
  ) {

    return crypto.randomUUID();

  }


  return (
    "id-" +
    Date.now() +
    "-" +
    Math.random()
      .toString(36)
      .slice(2)
  );

}


/* Toast */

function showToast(
  message
) {

  const toast =
    $("#toast");


  if (!toast) {
    return;
  }


  toast.textContent =
    message;


  toast.classList.add(
    "show"
  );


  clearTimeout(
    window.portfolioToastTimeout
  );


  window.portfolioToastTimeout =
    setTimeout(
      () =>
        toast.classList.remove(
          "show"
        ),
      2800
    );

}

