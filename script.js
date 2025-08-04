window.addEventListener('resize', function () {
    location.reload(); // This will refresh the page
});


function updateColClasses() {
    const elements = document.querySelectorAll(".doc-col");

    elements.forEach(element => {
        if (window.innerWidth === 1024) {
            element.classList.remove("col-lg-3");
            if (!element.classList.contains("col-lg-6")) {
                element.classList.add("col-lg-6");
            }
        } else {
            element.classList.remove("col-lg-6");
            if (!element.classList.contains("col-lg-3")) {
                element.classList.add("col-lg-3");
            }
        }
    });
}

function updateColClasses1() {
    const elements1 = document.querySelectorAll(".doc-col1");

    elements1.forEach(element => {
        if (window.innerWidth === 1024) {
            element.classList.remove("col-lg-6");
            if (!element.classList.contains("col-lg-12")) {
                element.classList.add("col-lg-12");
            }
        } else {
            element.classList.remove("col-lg-12");
            if (!element.classList.contains("col-lg-6")) {
                element.classList.add("col-lg-6");
            }
        }
    });
}

window.addEventListener("load", updateColClasses);
window.addEventListener("resize", updateColClasses);
window.addEventListener("load", updateColClasses1);
window.addEventListener("resize", updateColClasses1);


function checkAndRemoveDiv() {
    const width = window.innerWidth;

    // Remove div(s) if width <= 425px
    if (width <= 455) {
        const divs = document.querySelectorAll('.news-line-sm');
        divs.forEach(function (div) {
            div.remove(); // ✅ remove each div individually
        });
    }
}

checkAndRemoveDiv();
window.addEventListener('resize', checkAndRemoveDiv);


function removeContainerAt1024() {
    const width = window.innerWidth;
    const div = document.querySelector('.doc-contant-div12');

    if (width === 1024 && div.classList.contains('container')) {
        div.classList.remove('container');
    } else if (width !== 1024 && !div.classList.contains('container')) {
        div.classList.add('container'); // add back if not 1024
    }
}

removeContainerAt1024(); // Call on page load
window.addEventListener('resize', removeContainerAt1024); // Call on resize


function removeContainerAt10241() {
    const width = window.innerWidth;
    const div = document.querySelector('.news-contant-div-1024');

    if (width === 1024 && div.classList.contains('container')) {
        div.classList.remove('container');
    } else if (width !== 1024 && !div.classList.contains('container')) {
        div.classList.add('container'); // add back if not 1024
    }
}

removeContainerAt10241(); // Call on page load
window.addEventListener('resize', removeContainerAt1024); // Call on resize


function com_cal() {
    const width = window.innerWidth;
    const div = document.getElementById('com-cal');

    if (width <= 321) {
        div.style.backgroundColor = "red";
    }
}

com_cal(); // Call on page load
window.addEventListener('resize', com_cal); // Call on resize


function arrangeButtonsFor768() {
    const wrapper = document.getElementById("link-buttons-wrapper");

    // Store original items
    const originalButtons = Array.from(wrapper.querySelectorAll(".handbook-button-div"));

    // Clear wrapper first
    wrapper.innerHTML = "";

    if (window.innerWidth === 768) {
        // Create 2x2 grid layout using Bootstrap
        for (let i = 0; i < originalButtons.length; i += 2) {
            const row = document.createElement("div");
            row.className = "row g-2";

            const col1 = document.createElement("div");
            col1.className = "col-6";
            col1.appendChild(originalButtons[i]);
            row.appendChild(col1);

            if (originalButtons[i + 1]) {
                const col2 = document.createElement("div");
                col2.className = "col-6";
                col2.appendChild(originalButtons[i + 1]);
                row.appendChild(col2);
            }

            wrapper.appendChild(row);
        }
    } else {
        // Revert to single-column layout
        originalButtons.forEach(button => {
            wrapper.appendChild(button);
        });
    }
}

// Run on page load and resize
window.addEventListener("load", arrangeButtonsFor768);
window.addEventListener("resize", arrangeButtonsFor768);

