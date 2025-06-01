// Define all code examples
const codeExamples = [
  {
    title:
      "1 identify POSITIVE and NEGATIVE numbers and convert them into integers using atoi().",
    code: `%{
#include <stdio.h>
#include <stdlib.h>
int pos = 0;
int neg = 0;
%}

%%

[0-9]+ {
    int num1 = atoi(yytext);
    pos++;
    printf("%d is +ve", num1);
}

[-][0-9]+ {
    int num2 = atoi(yytext);
    neg++;
    printf("%d is -ve", num2);
}

%%

int main() {
    printf("Enter a string : ");
    yylex();
    printf("Positive numbers = %d", pos);
    printf("Negative numbers = %d", neg);
    return 0;
}

int yywrap() {
    return 1;
}
`,
  },
  {
    title: "2 COUNT NO OF WORDS",
    code: `%{
#include &lt;stdio.h&gt;//&string.h
int word = 0;
%}
%%
[a-zA-Z0-9]*     word++;
%%
int main() {
    char input[100];
    printf("Enter string: ");
    yylex();
    printf("%d Words", word);
    return 0;
}
int yywrap() {
    return 1;
}`,
  },
  {
    title:
      "3 count and classify tokens as keywords, identifiers, numbers, operators, and separators.",
    code: `%{
#include <stdio.h>
#include <string.h>

int key = 0, iden = 0, num = 0, oper = 0, sep = 0;
%}

%%
"int"|"float"|"char"|"if"|"else"|"while"|"for"|"return"   { key++; }
[+\-*/<>=]                                                 { oper++; }
[,;(){}[\]]                                                { sep++; }
[0-9]+                                                     { num++; }
[a-zA-Z_][a-zA-Z0-9_]*                                     { iden++; }
%%

int main()
{
    printf("Enter string: ");
    yylex();
    printf("Keywords     : %d", key);
    printf("Identifier   : %d", iden);
    printf("Number       : %d", num);
    printf("Operator     : %d", oper);
    printf("Separator    : %d", sep);
    return 0;
}

int yywrap()
{
    return 1;
}
`,
  },
  {
    title: "4 COUNT TOTAL NUMBER OF CHARACTERS, SPACES AND LINES",
    code: `%{
#include <stdio.h>
#include <string.h>

int character = 0;
int space = 0;
int line = 0;
%}

%%
" "     { space++; }
""    { line++; }
.       { character++; }
%%

int main()
{
    printf("Enter the string: ");
    yylex();
    printf("Total characters : %d", character);
    printf("Number of spaces : %d", space);
    printf("Number of lines  : %d", line);
    return 0;
}

int yywrap()
{
    return 1;
}
`,
  },
  {
    title: "5 determines whether a number entered by the user is even or odd.",
    code: `%{
#include <stdio.h>
#include <stdlib.h>
%}

%%

[0-9]+ {
    int num = atol(yytext);
    if (num % 2 == 0)
        printf("%d is Even", num);
    else
        printf("%d is Odd", num);
}

%%

int main()
{
    printf("Enter Number : ");
    yylex();
    return 0;
}

int yywrap()
{
    return 1;
}
`,
  },
  {
    title:
      "6 whether the entered number is even or odd, but without arithmetic operations",
    code: `%{
#include <stdio.h>
#include <string.h>
%}

%%

^[0-9]*[02468]$    { printf("Number is even"); }
^[0-9]*[13579]$    { printf("Number is odd"); }

%%

int main()
{
    printf("Enter Number : ");
    yylex();
    return 0;
}

int yywrap()
{
    return 1;
}
`,
  },
  {
    title:
      "7 string starts with a vowel and classifies it as valid or invalid accordingly.",
    code: `%{
#include <stdio.h>
#include <string.h>
int vowel = 0;
%}

%%
^[AaEeIiOoUu][a-zA-Z0-9]*$   { printf("Valid : Starts with vowel"); }
.*                           { printf("Invalid : Does not start with vowel"); }
%%

int main()
{
    printf("Enter string : ");
    yylex();
    return 0;
}

int yywrap()
{
    return 1;
}
`,
  },
  {
    title: "8 valid Gmail address",
    code: `%{
#include <stdio.h>
int mail = 0;
%}

%%
[0-9.A-Za-z]+@gmail.com|@gmail.in   { mail++; }
%%

int main() {
    printf("Enter a string:");
    yylex();
    if (mail == 0) {
        printf("given string is not a GMAIL");
    } else {
        printf("given string is a VALID GMAIL");
    }
    return 0;
}

int yywrap() {
    return 1;
}
`,
  },
  {
    title: "",
    code: ``,
  },
  {
    title: "9 DIGIT OR ALPHABET",
    code: `%{
#include &lt;stdio.h&gt;
int id = 0, nd = 0;
%}
%%
-[0-9\\d] id++;
[a-zA-Z] nd++;
%%
int main() {
    printf("enter: ");
    yylex();
    if(nd == 0){
        printf("digit");
    }else{
        printf("not digit");
    }
    return 0;
}
int yywrap() {
    return 1;
}`,
  },
  {
    title: "10 COUNT VOWELS AND CONSONANTS",
    code: `%{
#include &lt;stdio.h&gt;//&string.h
int vowel = 0, consonant = 0;
%}
%%
[aAeEiIoOuU]                    vowel++;
[b-df-hj-np-tv-zB-DF-HJ-NP-TV-Z] consonant++;
%%
int main() {
    char input[100];
    printf("Enter a string: ");
    yylex();
    printf("%d Vowel", vowel);
    printf("%d c:", consonant);
    return 0;
}
int yywrap() {return 1;}`,
  },
  {
    title: "11 COUNT ALPHABETS AND DIGITS",
    code: `%{
#include &lt;stdio.h&gt;//string.h
int letter = 0, num = 0;
%}
%%
[a-zA-Z] letter++;
[0-9]    num++;
%%
int main() {
    char input[100];
    printf("Enter string: ");
    yylex();
    printf("%d Characters\", letter);
    printf("%d Numbers\", num);
    return 0;
}
int yywrap() {return 1;}`,
  },
  {
    title: "12 valid phone number",
    code: `%{
#include <stdio.h>
#include <string.h>
%}

%%
^[0-9]{10}$     { printf("Valid phone number"); return 0; }
.*              { printf("Invalid phone number"); }
%%

int main()
{
    printf("Enter phone number : ");
    yylex();
    return 0;
}

int yywrap()
{
    return 1;
}
`,
  },
  {
    title: "13 DFA String end 10",
    code: `#include <stdio.h>
#include <string.h>

#define max 100

int main() {
    char str[max], f = 'a';
    int i;

    printf("Enter string: ");
    scanf("%s", str);

    for (i = 0; str[i] != '/0'; i++) {
        switch (f) {
            case 'a': // start state
                if (str[i] == '0') f = 'a';
                else if (str[i] == '1') f = 'b';
                break;

            case 'b': // last symbol was 1
                if (str[i] == '0') f = 'c';  // seen 10
                else if (str[i] == '1') f = 'b';
                break;

            case 'c': // last two were 10
                if (str[i] == '0') f = 'a';
                else if (str[i] == '1') f = 'b';
                break;
        }
    }

    if (f == 'c')
        printf("String is accepted (ends with 10)");
    else
        printf("String is not accepted (doesn't end with 10)");

    return 0;
}
`,
  },
  {
    title: "14 DFA string start with 01",
    code: `#include <stdio.h>
#include <string.h>

#define max 100

int main() {
    char str[max], f = 'a'; // DFA state
    int i;

    printf("Enter string: ");
    scanf("%s", str);

    for (i = 0; str[i] != '/0'; i++) {
        switch (f) {
            case 'a': // Start state
                if (str[i] == '0') f = 'b';
                else f = 'd'; // if starts with 1, reject
                break;

            case 'b': // After reading 0
                if (str[i] == '1') f = 'c'; // matched 01
                else f = 'd'; // 00 → invalid
                break;

            case 'c': // After seeing 01 (valid prefix)
                // From here, any 0 or 1 is allowed
                if (str[i] == '0' || str[i] == '1') f = 'c';
                break;

            case 'd': // Dead state
                // Stay in dead state
                f = 'd';
                break;
        }
    }

    if (f == 'c')
        printf("String is accepted (starts with 01)");
    else
        printf("String is not accepted (doesn't start with 01)");

    return 0;
}
`,
  },
  {
    title: "15 DFA string end with 01",
    code: `#include <stdio.h>
#include <string.h>

#define max 100

int main() {
    char str[max], f = 'a'; // 'a' = q0, 'b' = q1, 'c' = q2
    int i;

    printf("Enter string: ");
    scanf("%s", str);

    for (i = 0; str[i] != '/0'; i++) {
        switch (f) {
            case 'a': // q0
                if (str[i] == '0') f = 'b';
                else if (str[i] == '1') f = 'a';
                break;

            case 'b': // q1
                if (str[i] == '0') f = 'b';
                else if (str[i] == '1') f = 'c';
                break;

            case 'c': // q2
                if (str[i] == '0') f = 'b';
                else if (str[i] == '1') f = 'a';
                break;
        }
    }

    if (f == 'c')
        printf("String is accepted"); // Ends with 01
    else
        printf("String is not accepted");

    return 0;
}
`,
  },
  {
    title: "16 DFA string start with 10",
    code: `#include <stdio.h>
#include <string.h>

#define max 100

int main() {
    char str[max], f = 'a'; // DFA state
    int i;

    printf("Enter string: ");
    scanf("%s", str);

    for (i = 0; str[i] != '/0'; i++) {
        switch (f) {
            case 'a':
                if (str[i] == '1') f = 'b';
                else f = 'd'; // starts with 0 → invalid
                break;

            case 'b':
                if (str[i] == '0') f = 'c'; // 10 matched
                else f = 'd'; // 11 → invalid
                break;

            case 'c':
                if (str[i] == '0' || str[i] == '1') f = 'c'; // stay valid
                break;

            case 'd':
                f = 'd'; // stay in dead state
                break;
        }
    }

    if (f == 'c')
        printf("String is accepted (starts with 10)");
    else
        printf("String is not accepted (doesn't start with 10)");

    return 0;
}
`,
  },{
    title: "17 DFA string start with 00",
    code: `#include <stdio.h>
#include <string.h>

#define max 100

int main() {
    char str[max], f = 'a';
    int i;

    printf("Enter string: ");
    scanf("%s", str);

    for (i = 0; str[i] != '\0'; i++) {
        switch (f) {
            case 'a':
                if (str[i] == '0') f = 'b';
                else f = 'd'; // starts with 1 → dead
                break;

            case 'b':
                if (str[i] == '0') f = 'c'; // 00 matched
                else f = 'd'; // 01 → dead
                break;

            case 'c':
                if (str[i] == '0' || str[i] == '1') f = 'c'; // stay in valid accepting state
                break;

            case 'd':
                f = 'd'; // stay in dead state
                break;
        }
    }

    if (f == 'c')
        printf("String is accepted (starts with 00)\n");
    else
        printf("String is not accepted (doesn't start with 00)\n");

    return 0;
}
`,
  },{
    title: "18 DFA string start a and end a",
    code: `#include <stdio.h>
#include <string.h>

#define max 100

int main() {
    char str[max], f = 'a';
    int i;

    printf("Enter string: ");
    scanf("%s", str);

    for (i = 0; str[i] != '/0'; i++) {
        switch (f) {
            case 'a': // start state
                if (str[i] == 'a') f = 'c';     // starts with a
                else f = 'd';                  // starts with other → dead
                break;

            case 'b': // intermediate state, not ending with 'a' yet
                if (str[i] == 'a') f = 'c';
                else f = 'b';
                break;

            case 'c': // last character was a
                if (str[i] == 'a') f = 'c';
                else f = 'b';
                break;

            case 'd': // dead state
                f = 'd';
                break;
        }
    }

    if (f == 'c')
        printf("String is accepted (starts and ends with 'a')");
    else
        printf("String is not accepted (doesn't start and end with 'a')");

    return 0;
}
`,
  },{
    title: "19 DFA string abb",
    code: `#include <stdio.h>
#include <string.h>

#define max 100

int main() {
    char str[max], f = 'a';
    int i;

    printf("Enter string: ");
    scanf("%s", str);

    for (i = 0; str[i] != '/0'; i++) {
        switch (f) {
            case 'a':
                if (str[i] == 'a') f = 'b';
                else f = 'e';
                break;

            case 'b':
                if (str[i] == 'b') f = 'c';
                else f = 'e';
                break;

            case 'c':
                if (str[i] == 'b') f = 'd';
                else f = 'e';
                break;

            case 'd':
                f = 'e'; // Any character after "abb" → invalid
                break;

            case 'e':
                f = 'e'; // Dead state
                break;
        }
    }

    if (f == 'd')
        printf("String is accepted (exactly 'abb')");
    else
        printf("String is not accepted");

    return 0;
}
`,
  },{
    title: "20 DFA string end abb",
    code: `#include <stdio.h>
#include <string.h>

#define max 100

int main() {
    char str[max], f = 'a';
    int i;

    printf("Enter string: ");
    scanf("%s", str);

    for (i = 0; str[i] != '/0'; i++) {
        switch (f) {
            case 'a':
                if (str[i] == 'a') f = 'b';
                else f = 'a'; // Stay in start if b
                break;

            case 'b':
                if (str[i] == 'a') f = 'b';
                else if (str[i] == 'b') f = 'c';
                break;

            case 'c':
                if (str[i] == 'a') f = 'b';
                else if (str[i] == 'b') f = 'd';
                break;

            case 'd':
                if (str[i] == 'a') f = 'b';
                else if (str[i] == 'b') f = 'c';
                break;
        }
    }

    if (f == 'd')
        printf("String is accepted (ends with 'abb')");
    else
        printf("String is not accepted");

    return 0;
}
`,
  },
];

let currentCodeIndex = 0;

// Track terminal theme state
let isBlueTheme = false;

// Color picker functionality
const colorPickerModal = document.querySelector(".color-picker-modal");
const themeColorPicker = document.getElementById("themeColorPicker");
const applyColorBtn = document.getElementById("applyColor");
const cancelColorBtn = document.getElementById("cancelColor");
let selectedColor = "";

function showColorPicker() {
  colorPickerModal.classList.add("show");
}

function hideColorPicker() {
  colorPickerModal.classList.remove("show");
}

// Add click interactions to app icons
document.querySelectorAll(".app-icon").forEach((icon) => {
  icon.addEventListener("click", function () {
    // Animation effect
    this.style.transform = "scale(0.95)";
    setTimeout(() => {
      this.style.transform = "scale(1.1)";
      setTimeout(() => {
        this.style.transform = "scale(1)";
      }, 100);
    }, 100);

    // Special handling for help icon (color picker)
    if (this.classList.contains("help-icon")) {
      showColorPicker();
    }

    // Special handling for terminal icon
    if (this.classList.contains("terminal-icon")) {
      const desktopContainer = document.querySelector(".desktop-container");
      if (!isBlueTheme) {
        desktopContainer.style.background =
          "linear-gradient(135deg, #2596be 0%, rgb(37, 150, 190) 100%)";
      } else {
        desktopContainer.style.background =
          "linear-gradient(135deg, #bd30c2 0%, #761572 100%)";
      }
      isBlueTheme = !isBlueTheme;
    }

    // Special handling for grid menu
    if (this.classList.contains("grid-menu")) {
      const terminalWindow = document.querySelector(".terminal-window");
      const currentExample = codeExamples[currentCodeIndex];

      const newContent = `
        <div class="terminal-line"><span class="output">//${
          currentExample.title
        }<br>%{</span></div>
        ${currentExample.code
          .split("\n")
          .map(
            (line) =>
              `<div class="terminal-line"><span class="output">${line}</span></div>`
          )
          .join("\n")}
      `;

      terminalWindow.innerHTML = newContent;

      // Move to next code example
      currentCodeIndex = (currentCodeIndex + 1) % codeExamples.length;
    }
  });
});

// Handle color picker actions
applyColorBtn.addEventListener("click", () => {
  const desktopContainer = document.querySelector(".desktop-container");
  const color = themeColorPicker.value;
  const lighterColor = adjustColor(color, 20); // Create a slightly lighter version for gradient
  desktopContainer.style.background = `linear-gradient(135deg, ${color} 0%, ${lighterColor} 100%)`;
  hideColorPicker();
});

cancelColorBtn.addEventListener("click", hideColorPicker);

// Helper function to create a lighter version of a color for gradient
function adjustColor(color, percent) {
  const num = parseInt(color.replace("#", ""), 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    G = ((num >> 8) & 0x00ff) + amt,
    B = (num & 0x0000ff) + amt;
  return (
    "#" +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)
  );
}

// Add functionality to window controls
// document.querySelector(".close").addEventListener("click", () => {
//   alert("Close window clicked");
// });

// document.querySelector(".minimize").addEventListener("click", () => {
//   alert("Minimize window clicked");
// });

// document.querySelector(".maximize").addEventListener("click", () => {
//   alert("Maximize window clicked");
// });

// Simulate typing effect for the cursor
setInterval(() => {
  const cursor = document.querySelector(".cursor");
  if (cursor) {
    cursor.style.visibility =
      cursor.style.visibility === "hidden" ? "visible" : "hidden";
  }
}, 500);

// Handle fullscreen with FFF keypress
let fKeyPressCount = 0;
let lastFKeyPressTime = 0;

document.addEventListener("keydown", (event) => {
  if (event.key.toLowerCase() === "f") {
    const currentTime = new Date().getTime();

    // Reset counter if too much time has passed since last press
    if (currentTime - lastFKeyPressTime > 500) {
      // 500ms threshold
      fKeyPressCount = 0;
    }

    fKeyPressCount++;
    lastFKeyPressTime = currentTime;

    if (fKeyPressCount === 3) {
      // Reset counter
      fKeyPressCount = 0;

      // Get the fat-border element
      const fatBorder = document.querySelector(".fat-border");

      // Toggle fullscreen
      if (
        !document.fullscreenElement &&
        !document.webkitFullscreenElement &&
        !document.msFullscreenElement
      ) {
        // Request fullscreen on the fat-border element
        if (fatBorder.requestFullscreen) {
          fatBorder.requestFullscreen();
        } else if (fatBorder.webkitRequestFullscreen) {
          // Chrome, Safari
          fatBorder.webkitRequestFullscreen();
        } else if (fatBorder.msRequestFullscreen) {
          // IE/Edge
          fatBorder.msRequestFullscreen();
        }
      } else {
        // Exit fullscreen
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          // Chrome, Safari
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          // IE/Edge
          document.msExitFullscreen();
        }
      }
    }
  }
});

// Handle notification close button
document.addEventListener("DOMContentLoaded", function () {
  const closeBtn = document.querySelector(".close-btn");
  const notification = document.querySelector(".notification-message");

  if (closeBtn && notification) {
    closeBtn.addEventListener("click", function () {
      notification.style.opacity = "0";
      notification.style.transform = "translateY(-20px)";
      setTimeout(() => {
        notification.remove();
      }, 300);
    });
  }
});





// Get the element with the class 'app-icon python-icon'
const appIcon = document.querySelector('.app-icon.python-icon');

// Add click event listener
appIcon.addEventListener('click', function() {
    // Check if fullscreen is currently active
    if (!document.fullscreenElement) {
        // Enter fullscreen mode
        document.documentElement.requestFullscreen().catch(err => {
            console.error('Error attempting to enable fullscreen:', err);
        });
    } else {
        // Exit fullscreen mode
        document.exitFullscreen().catch(err => {
            console.error('Error attempting to exit fullscreen:', err);
        });
    }
});

// Optional: Handle fullscreen change events
document.addEventListener('fullscreenchange', function() {
    if (document.fullscreenElement) {
        console.log('Entered fullscreen mode');
        // Add any styling or behavior for fullscreen mode
        appIcon.style.opacity = '0.8';
    } else {
        console.log('Exited fullscreen mode');
        // Reset styling when exiting fullscreen
        appIcon.style.opacity = '1';
    }
});

// Optional: Handle fullscreen errors
document.addEventListener('fullscreenerror', function() {
    console.error('Fullscreen mode is not supported or allowed');
});
