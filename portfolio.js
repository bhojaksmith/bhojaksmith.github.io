function about(){
     window.open("index.html","_self");
     
 }
// document.body.style.cursor='pointer';
//  swal({
//     title: "You caught me!",
//     text: "I am Still Working on this one",
//     type: "fail",
//     }).then(function() {
//         document.body.style.cursor = "none";
//     });

function invisible(){
    document.body.style.cursor = "pointer";
    // alert('invisible called');
    swal(
        'Invisible UX?',
        'Users will complain about Bad UX & Praise Good UX, But Great UX is always invisible',
      ).then(function() {
        document.body.style.cursor = "none";
    });
 
}
function Stellars(){
  /* */
  swal("View Stellars Summer School Design?", {
    buttons: {
      casestudy:{
        text:"Case Study",
        value:"casestudy",
      },
      mobile: {
        text: "View Mobile",
        value: "mobile",
      },
      Desktop:{
        text:"View Desktop",
        value:"desktop",
        
        
      },
      
    },
  })
  .then((value) => {
    switch (value) {
   
      case "desktop":
        swal("Going to Desktop!");
        window.open("https://www.figma.com/proto/l7WJJOj9w5nCaL4ZlLjKWw/Stellars-School?page-id=371%3A2&node-id=371%3A3&viewport=389%2C48%2C0.12&scaling=scale-down-width&starting-point-node-id=371%3A3&hide-ui=1");
        

        break;
   
      case "mobile":
        swal("Going to Mobile");
        window.open("https://www.figma.com/proto/l7WJJOj9w5nCaL4ZlLjKWw/Stellars-School?node-id=93%3A2&scaling=min-zoom&page-id=91%3A5145&starting-point-node-id=93%3A2&hide-ui=1");
        break;

        case "casestudy":
          window.open("https://www.behance.net/gallery/140140069/Stellars-School");
          break;
        
      default:
        break;
    }
  });
  
}
function Footrax(){
  swal("View Footrax?", {
    buttons: {
      casestudy:{
        text:"Case Study",
        value:"casestudy",
      },
      mobile: {
        text: "View Mobile",
        value: "mobile",
      },
      Desktop:{
        text:"View Desktop",
        value:"desktop",
        
        
      },
      
    },
  })
  .then((value) => {
    switch (value) {
   
      case "desktop":
        swal("Going to Desktop!");
        window.open("https://www.figma.com/proto/MhCxKr4Yzyb0zIPlJsInvR/Footrax-Handoff?node-id=2%3A7&scaling=min-zoom&page-id=2%3A6&starting-point-node-id=2%3A7&hide-ui=1");
        break;
   
      case "mobile":
        swal("Going to Mobile");
        window.open("https://www.figma.com/proto/MhCxKr4Yzyb0zIPlJsInvR/Footrax-Handoff?node-id=2%3A572&scaling=min-zoom&page-id=2%3A6&starting-point-node-id=2%3A572&hide-ui=1");
        
        break;
      case "casestudy":
        
        window.open("https://www.behance.net/gallery/140140547/Footrax");
        break;
      default:
        break;
    }
  });
  
}
function Festinger(){
  window.open("https://www.behance.net/gallery/140140209/Festinger-Vault");
}
function Better(){
  window.open("/assets/case/BetterBarter.pdf");
}
function astro(){
  swal("View Astro Energy Guru?", {
    buttons: {
      
      Desktop:{
        text:"View Desktop Prototype",
        value:"desktop",
      },
      casestudy:{
        text:"Case Study",
        value:"casestudy",
      }
    },
  })
  .then((value) => {
    switch (value) {
   
      case "desktop":
        window.open("https://www.figma.com/proto/m3exT64DSgaJqJVdubvpWs/Astro-Energy-Guru?node-id=208%3A2168&starting-point-node-id=208%3A2168&hide-ui=1");

        break;
   
      case "casestudy":
        window.open("https://www.behance.net/gallery/140140433/Astro-Energy-Guru");

        break;
      default:
        break;
    }
  });
}


function neofantasy(){
  swal("View NeoFanTasy?", {
    buttons: {
      casestudy:{
        text:"Case Study",
        value:"casestudy",
      },
      mobile: {
        text: "View Mobile",
        value: "mobile",
      },
      Desktop:{
        text:"View Desktop",
        value:"desktop",
        
        
      },
      
    },
  })
  .then((value) => {
    switch (value) {
   
      case "desktop":
        swal("Going to Desktop!");
        window.open("https://www.figma.com/proto/koEiGCYfKuKBYgY4KjzcjO/NeoFantasy-Admin-%26-End-User-Web-Interface?node-id=453%3A1325&scaling=min-zoom&page-id=453%3A1324&starting-point-node-id=453%3A1325&hide-ui=1");
        break;
   
      case "mobile":
        swal("Going to Mobile");
        window.open("https://www.figma.com/proto/U7l9MqIsH04z6TscsC0GdS/NeoFantasy?node-id=465%3A594&scaling=scale-down&page-id=282%3A45&starting-point-node-id=289%3A664&hide-ui=1");
        
        break;
      case "casestudy":
        
        window.open("https://www.behance.net/gallery/140140731/NeoFanTasy");
        break;
      default:
        break;
    }
  });
  
}

function inforida(){
  swal("View Inforida?", {
    buttons: {
      casestudy:{
        text:"Case Study",
        value:"casestudy",
      },
      mobile: {
        text: "View Mobile Prototype",
        value: "mobile",
      },
        
     
    },
  })
  .then((value) => {
    switch (value) {
   
   
      case "mobile":
        swal("Going to Mobile");
        window.open("https://www.figma.com/proto/NGoAKdwhYRIX7xZoTINP3j/Smith-%7C-UX-Portfolio?node-id=416%3A5269&scaling=scale-down&page-id=416%3A1318&starting-point-node-id=416%3A5269&hide-ui=1");
        
        break;
      case "casestudy":
        
        window.open("/assets/case/inforida.pdf");
        break;
      default:
        break;
    }
  });
  
}
