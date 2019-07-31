  /*FUNCTION TO SEARCH THROUGH API*/
  function search()
  {
    var element = document.querySelector(".results");
    element.parentNode.removeChild(element);
    blockDiv = document.createElement("div");
    blockDiv.className = "results";
    document.querySelector("body").append(blockDiv);

    var country = document.querySelector("#cname").value;
    fetch("https://restcountries.eu/rest/v2/name/" + country).then((res)=>{
      res.json().then((data)=>{
        if(res.status===404)/*USING STATUS RESPONSE CHECKING AGAINST INVLAID NAME */
        {
          alert("Please enter a valid Country name");
        }
        console.log(data);/*PRINT TO CONSOLE*/
        var container = document.querySelector(".results");
        for(var i = 0; i < data.length ; i++) {
          x = document.createElement("div");/*CREATING DIV ELEMENT*/
          x.className = "block";
          textSpan = document.createElement("span");
          textSpan.setAttribute("style", "color: white;");
          textSpan.className = data[i].name;
          flag = document.createElement("img");
          flag.className = "flagimg";
          flag.setAttribute("src" , data[i].flag);
          flag.setAttribute("onclick" , "getDetail(this)");
          textSpan.append(data[i].name); 
          x.append(flag);
          x.append(textSpan);
          container.append(x);
        }


      })
    })

  }
/*ON CLICKING IMAGE DETAILS ARE DISPLAYED*/
  function getDetail(ele)
  {

    var blk = ele.parentNode.querySelector("span");
    var fname = blk.className;
    location.href = "page.html?fname=" + fname;

    

  }