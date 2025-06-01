// Define all code examples
const codeExamples = [
  {
    title: "1 identify POSITIVE and NEGATIVE numbers and convert them into integers using atoi().",
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
    printf("%d is +ve\n", num1);
}

[-][0-9]+ {
    int num2 = atoi(yytext);
    neg++;
    printf("%d is -ve\n", num2);
}

%%

int main() {
    printf("Enter a string : ");
    yylex();
    printf("Positive numbers = %d\n", pos);
    printf("Negative numbers = %d\n", neg);
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
    title: "3 count and classify tokens as keywords, identifiers, numbers, operators, and separators.",
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
    printf("Keywords     : %d\n", key);
    printf("Identifier   : %d\n", iden);
    printf("Number       : %d\n", num);
    printf("Operator     : %d\n", oper);
    printf("Separator    : %d\n", sep);
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
"\n"    { line++; }
.       { character++; }
%%

int main()
{
    printf("Enter the string: ");
    yylex();
    printf("Total characters : %d\n", character);
    printf("Number of spaces : %d\n", space);
    printf("Number of lines  : %d\n", line);
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
        printf("%d is Even\n", num);
    else
        printf("%d is Odd\n", num);
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
  },{
    title: "6 whether the entered number is even or odd, but without arithmetic operations",
    code: `%{
#include <stdio.h>
#include <string.h>
%}

%%

^[0-9]*[02468]$    { printf("Number is even\n"); }
^[0-9]*[13579]$    { printf("Number is odd\n"); }

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
  },{
    title: "7 string starts with a vowel and classifies it as valid or invalid accordingly.",
    code: `%{
#include <stdio.h>
#include <string.h>
int vowel = 0;
%}

%%
^[AaEeIiOoUu][a-zA-Z0-9]*$   { printf("Valid : Starts with vowel\n"); }
.*                           { printf("Invalid : Does not start with vowel\n"); }
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
  },{
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
  },{
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
    printf("%d Characters\\n", letter);
    printf("%d Numbers\\n", num);
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
^[0-9]{10}$     { printf("Valid phone number\n"); return 0; }
.*              { printf("Invalid phone number\n"); }
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
];

let currentCodeIndex = 0;

// Track terminal theme state
let isBlueTheme = false;

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

    // Special handling for terminal icon
    if (this.classList.contains("terminal-icon")) {
      const desktopContainer = document.querySelector(".desktop-container");
      if (!isBlueTheme) {
        desktopContainer.style.background = "linear-gradient(135deg, #2596be 0%, rgb(37, 150, 190) 100%)";
      } else {
        desktopContainer.style.background = "linear-gradient(135deg, #bd30c2 0%, #761572 100%)";
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

// Add functionality to window controls
document.querySelector(".close").addEventListener("click", () => {
  alert("Close window clicked");
});

document.querySelector(".minimize").addEventListener("click", () => {
  alert("Minimize window clicked");
});

document.querySelector(".maximize").addEventListener("click", () => {
  alert("Maximize window clicked");
});

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
