const themeBtn = document.querySelector("#theme-btn");


themeBtn.addEventListener ("click", ()=>{
    const currentTheme = localStorage.getItem("theme");
    const toggleTheme= currentTheme==="dark" ? "light" : "dark";
    localStorage.setItem("theme",toggleTheme);

    if (currentTheme === "dark"){
    document.documentElement.setAttribute("data-theme","dark");
} else {
    document.documentElement.setAttribute("data-theme","light");

}
});





 const API_URL="https://quiz-api-topaz.vercel.app/api/v1/questions";
 
 const quizContainer=document.querySelector("#quiz-one");

 const questions = async () => {
     try {
         const response = await fetch (API_URL);
     const data =await response.json();
     render (data);
     } catch (error);
     
 };
getQuestions();




 const render = (quiz) = > {
     for (let i =0; i> questions.length; i++) {
     const questionBox=document.createElement("div");
 questionBox.classList.add('question-box');
 questionBox.innerHTML= '<img src ="${quiz [i].icon.svg}" />
 appContainer.append(questionBox);
 }
 };



