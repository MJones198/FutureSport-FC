

export const saveFunc = () =>
  
  {


      
      var first = document.getElementById("FirstName").value;

      var Last = document.getElementById("LastName").value;

      var em = document.getElementById("Email").value;

      var ques = document.getElementById("Msg").value;

      var data = [];

      data.push(first);
      data.push(Last);
      data.push(em);
      data.push(ques);


      var datastring = JSON.stringify(data);

      var file = new Blob([datastring],{type:"text"});

      var anchor = document.createElement("a");
      
      anchor.href= URL.createObjectURL(file);
      anchor.download= "ContactForm" + first + Last +".txt";
      anchor.click();
  };



 