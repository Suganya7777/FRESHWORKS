/*FETCH FROM API AND APPEND TO SECONDPAGE*/
var url_name = document.URL;
var url = new URL(url_name);
var fname = url.searchParams.get("fname");
/*FETCH FUNCTION TO RETRIEVE JSON OBJECT*/
fetch("https://restcountries.eu/rest/v2/name/" + fname + "?fullText=true").then((res) =>{
  res.json().then((data)=>{
  
    var container = document.querySelector(".container"); /*CREATING EMPTY CONTAINER TO ADD ELEMENTS*/
    
/*APPENDING JSON OBJECTS TO SECOND HTML PAGE */

    blockDiv = document.createElement("div");/*CREATING DIV ELEMENT*/
    blockDiv.append("Name: " + data[0].name);
    container.append(blockDiv);



    blockDiv = document.createElement("div");/*CREATING DIV ELEMENT*/
    blockDiv.append("Capital: " +data[0].capital);
    container.append(blockDiv);

    blockDiv = document.createElement("div");/*CREATING DIV ELEMENT*/
    blockDiv.append("Calling Codes: " +data[0].callingCodes[0]);
    container.append(blockDiv);


    blockDiv = document.createElement("div");/*CREATING DIV ELEMENT*/
    blockDiv.append("Region: " +data[0].region);
    container.append(blockDiv);

     blockDiv = document.createElement("div");/*CREATING DIV ELEMENT*/
    blockDiv.append("Denonym: " +data[0].denonym);
    container.append(blockDiv);

    blockDiv = document.createElement("div");/*CREATING DIV ELEMENT*/
    blockDiv.append("Area: " +data[0].area);
    container.append(blockDiv);
     blockDiv = document.createElement("div");/*CREATING DIV ELEMENT*/
    blockDiv.append("Cioc: " +data[0].cioc);
    container.append(blockDiv);





    blockDiv = document.createElement("div");/*CREATING DIV ELEMENT*/
    blockDiv.append("Subregion: " +data[0].subregion);
    container.append(blockDiv);


    blockDiv = document.createElement("div");/*CREATING DIV ELEMENT*/
    blockDiv.append("Population: " +data[0].population);
    container.append(blockDiv);


    blockDiv = document.createElement("div");/*CREATING DIV ELEMENT*/
    blockDiv.append("Languages: " +data[0].languages[0].name);
    container.append(blockDiv);

blockDiv = document.createElement("div");/*CREATING DIV ELEMENT*/
    blockDiv.append("Numeric code: " + data[0].numericCode);
    container.append(blockDiv);




    blockDiv = document.createElement("div");/*CREATING DIV ELEMENT*/
    blockDiv.append("Currency: " +data[0].currencies[0].name);
    container.append(blockDiv);

    blockDiv = document.createElement("div");/*CREATING DIV ELEMENT*/
    blockDiv.append("Currency Symbol: " +data[0].currencies[0].symbol);
    container.append(blockDiv);



    blockDiv = document.createElement("div");/*CREATING DIV ELEMENT*/
    blockDiv.append("Regional Blocs: " +data[0].regionalBlocs[0].name);
    container.append(blockDiv);

    flag = document.createElement("img");/*CREATING DIV ELEMENT*/
    flag.className = "flagimg";
    flag.setAttribute("src" , data[0].flag);
    container.append(flag);

    blockDiv = document.createElement("div");
    container.append(blockDiv);
    container.append(blockDiv);




  })
})

/*GO BACK TO FIRST PAGE*/
function goBack() {
  window.history.back();
}