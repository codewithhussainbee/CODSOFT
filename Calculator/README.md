# CodSoft Web Development Internship
## Level 1 - Task 3: Simple Calculator Website

A premium, modern, and highly responsive web-based calculator built using semantic HTML5, advanced CSS3 styling techniques, and optimized Vanilla JavaScript. This project was developed as part of the CodSoft Web Development Internship program to showcase frontend development proficiency, DOM manipulation, dynamic UI rendering, and comprehensive keyboard interaction.

---

## 🚀 Features

### 🖥️ User Interface & Design
* **Modern Premium Aesthetic:** Built using a vibrant backdrop layout with a clean, high-contrast light button matrix designed for optimal user accessibility.
* **Fluid Responsive Layout:** Completely responsive design optimized seamlessly across desktop monitors, tablets, and mobile devices via fluid CSS flexbox/grid mechanics.
* **Micro-Interactions:** Includes smooth hover states, dynamic button scale animations on active clicks, and unique distinct coloring for mathematical operators versus utility controls.

### ⚙️ Core Functionality
* **Robust Calculation Engine:** Handles fundamental operations: Addition (`+`), Subtraction (`-`), Multiplication (`×`), and Division (`÷`).
* **Advanced Evaluation Handling:** * Full support for floating-point decimal entries (with automated validation to prevent accidental dual decimal points).
    * Percentage calculations (`%`).
    * Live state tracking utilizing an upper fractional history strip directly above the primary display layout.
* **Data Correction Utilities:** Features an instant Global Reset (`C`) and a precise step-back character Backspace tool (`⌫`).
* **Graceful Error Management:** Intercepts edge cases cleanly, preventing app crashes or structural mathematical breaks (e.g., dividing by zero displays an explicit `"Cannot divide by zero"` warning).

### ⌨️ Comprehensive Keyboard Support (Bonus Feature)
The calculator hooks directly into native browser window key events to provide real-time hardware keyboard interaction:
* `0` through `9` and `.` → Standard Input Injection
* `+`, `-`, `*`, `/` → Operator Configurations
* `Enter` or `=` → Computes mathematical string value
* `Backspace` → Single-step character deletion
* `Escape` → Clears calculation memory registers

---

## 📁 Project Structure

```text
Calculator/
│
├── index.html       ├── style.css        └── script.js        ```

---

## 🛠️ Technologies Used

* **HTML5:** Structured semantic layout elements to optimize application accessibility.
* **CSS3:** Implemented CSS Grid for button alignment, fluid linear gradients, shadow matrices, and hardware-accelerated transitions.
* **JavaScript (ES6+):** Pure Vanilla JavaScript processing—built using strict data registers, conditional logic workflows, and global event listeners. **(Zero external frameworks or libraries used)**.

---

## 💻 How to Run the Project Locally

1. Clone or download the project folder containing `index.html`, `style.css`, and `script.js`.
2. Ensure all three files are saved in the same local directory level.
3. Simply double-click on the `index.html` file to instantly boot up and run the fully operational application directly within your default web browser.

---

### 📝 Submission Note
*This functional layout successfully fulfills all strict operational requirements outlined under Level 1, Task 3 for the CodSoft Web Development Internship roadmap.*